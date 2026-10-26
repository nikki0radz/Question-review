function isBlockedWatchSize(text){const s=text.toLowerCase();return /\b(watch|watches|smartwatch|smartwatches|wristwatch|wristwatches|timepiece)\b/.test(s)&&/\b(face|faces|dial|dials|screen|screens|size|sizes|biggest|largest|smallest|bigger|larger|smaller|widest|width|diameter|chunky|chunkier|chunkiest|oversized)\b/.test(s);}
'use strict';
const CATEGORIES=[
 {id:'proven',name:"Pick ’n’ Mix",description:'Quick facts. Clear answers.',symbol:'⇄',colour:'#70d8ce'},
 {id:'debate',name:'Debatable',description:'Opinions worth arguing over.',symbol:'≋',colour:'#ed96bc'},
 {id:'knockout',name:'Knockout',description:'A little knowledge. A little pressure.',symbol:'ϟ',colour:'#eac17a'}
];
// A small demonstration deck, separate from the live Choose a Loser bank.
const QUESTIONS=[
 {id:'p1',category:'proven',text:'Who is the tallest?'},
 {id:'p2',category:'proven',text:'Who has the most bracelets on?'},
 {id:'p3',category:'proven',text:'Whose first name comes first alphabetically?'},
 {id:'p4',category:'proven',text:'Who woke up earliest today?'},
 {id:'p5',category:'proven',text:'Who washed their hair most recently?'},
 {id:'p6',category:'proven',text:'Who is closest to the door?'},
 {id:'d1',category:'debate',text:'Who would survive longest on a desert island?'},
 {id:'d2',category:'debate',text:'Who would make the best detective?'},
 {id:'d3',category:'debate',text:'Who would be worst at keeping a surprise party secret?'},
 {id:'d4',category:'debate',text:'Who would cope best with a 24-hour airport delay?'},
 {id:'d5',category:'debate',text:'Who would win an argument even when completely wrong?'},
 {id:'d6',category:'debate',text:'Who would be the best person to organise a group holiday?'},
 {id:'k1',category:'knockout',text:'What is 12 × 8?',answer:'96',explain:'12 multiplied by 8 is 96.'},
 {id:'k2',category:'knockout',text:'Which planet is known as the Red Planet?',answer:'Mars',explain:'Iron minerals give its surface a reddish colour.'},
 {id:'k3',category:'knockout',text:'How many sides does a hexagon have?',answer:'6',explain:'A hexagon has six sides.'},
 {id:'k4',category:'knockout',text:'What is the capital of Australia?',answer:'Canberra',explain:'Canberra, rather than Sydney or Melbourne.'},
 {id:'k5',category:'knockout',text:'If you overtake the person in second place, what place are you in?',answer:'Second place',explain:'You take their position.'},
 {id:'k6',category:'knockout',text:'How many months have at least 28 days?',answer:'12',explain:'Every month has at least 28 days.'}
];
const STORAGE_KEY='questionReview.v1';
const $=id=>document.getElementById(id);
let state={decisions:{},history:[],custom:[],edits:{},generated:[]},activeCategory=null,bankCategory='proven',view='home',bankFilter='kept',busy=false,drag=null,noticeTimer;
let storageWarning='';
try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){const parsed=JSON.parse(raw);if(!parsed||(!parsed.decisions||typeof parsed.decisions!=='object')||!Array.isArray(parsed.history))throw Error('Invalid progress');state=parsed;state.generated=Array.isArray(parsed.generated)?parsed.generated:[];state.edits=parsed.edits&&typeof parsed.edits==='object'&&!Array.isArray(parsed.edits)?parsed.edits:{};state.custom=Array.isArray(parsed.custom)?parsed.custom.filter(q=>q&&typeof q.id==='string'&&q.id.startsWith('custom-')&&typeof q.text==='string'&&CATEGORIES.some(c=>c.id===q.category)):[];}}catch{storageWarning='Saved progress could not be read. Keep this tab open and copy your choices.';}
function notify(message){$('notice').textContent=message;$('notice').classList.add('visible');clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>$('notice').classList.remove('visible'),3200);}
function commit(change){const next=JSON.parse(JSON.stringify(state));change(next);try{localStorage.setItem(STORAGE_KEY,JSON.stringify(next));}catch{notify('Could not save. Your choice was not changed. Check browser storage.');return false;}state=next;return true;}
function allQuestions(){return [...QUESTIONS,...state.custom,...state.generated].map(q=>({...q,...(state.edits[q.id]||{})}));}
function questions(category){return allQuestions().filter(q=>q.category===category);}
function pending(category){return questions(category).filter(q=>!state.decisions[q.id]);}

function reviewBatch(category,question=null){
 const pool=questions(category);
 const last=state.history.filter(h=>h.category===category).at(-1);
 const anchor=question||pending(category)[0]||pool.find(q=>q.id===last?.id)||pool.at(-1);
 if(!anchor)return [];
 if(anchor.batchId)return pool.filter(q=>q.batchId===anchor.batchId);
 // Older saved suggestions have no batch ID; group them in sets of ten.
 const legacy=pool.filter(q=>!q.batchId&&(q.source||'sample')===(anchor.source||'sample'));
 const start=Math.floor(legacy.findIndex(q=>q.id===anchor.id)/10)*10;
 return legacy.slice(start,start+10);
}
function batchPosition(question){const batch=reviewBatch(question.category,question);return (batch.findIndex(q=>q.id===question.id)+1)+' / '+batch.length;}

function current(){return pending(activeCategory)[0];}
function show(screen){view=screen;['home','review','bank'].forEach(id=>$(id).hidden=id!==screen);window.scrollTo(0,0);if(screen==='home')renderHome();if(screen==='bank')renderBank();}
function renderHome(){const container=$('categories');container.replaceChildren();CATEGORIES.forEach(cat=>{const list=questions(cat.id),left=pending(cat.id).length,kept=list.filter(q=>state.decisions[q.id]==='kept').length;const button=document.createElement('button');button.className='category';button.style.setProperty('--accent',cat.colour);button.innerHTML='<span class="category-symbol" aria-hidden="true"></span><span><strong></strong><small></small></span><span class="arrow" aria-hidden="true">→</span>';button.querySelector('.category-symbol').textContent=cat.symbol;button.querySelector('strong').textContent=cat.name;button.querySelector('small').textContent=left===list.length?cat.description:`${left} to review · ${kept} kept`;button.onclick=()=>openCategory(cat.id);container.append(button);});const pills=$('bank-pills');pills.replaceChildren();CATEGORIES.forEach(cat=>{const button=document.createElement('button');button.className='bank-pill';const label=document.createElement('span'),count=document.createElement('strong');label.textContent=cat.name;count.textContent=questions(cat.id).filter(q=>state.decisions[q.id]==='kept').length;button.append(label,count);button.onclick=()=>openBank(cat.id);pills.append(button);});}
function openCategory(id){activeCategory=id;show('review');renderReview();}
let nextCard=null;
function alignNextCard(){if(!nextCard||nextCard.hidden)return;const front=$('question-card');nextCard.style.top=front.offsetTop+'px';nextCard.style.left=front.offsetLeft+'px';nextCard.style.width=front.offsetWidth+'px';nextCard.style.minHeight=front.offsetHeight+'px';nextCard.style.height=front.offsetHeight+'px';}
function revealNext(progress,following=false){if(!nextCard)return;const p=Math.max(0,Math.min(1,progress));nextCard.classList.toggle('follow-drag',following);nextCard.style.opacity=String(.1+.9*p*p);const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;nextCard.style.transform=reduced?'none':`translateY(${12*(1-p)}px) scale(${.96+.04*p})`;}
function prepareNextCard(){
  nextCard?.remove();nextCard=null;const next=pending(activeCategory)[1];if(!next)return;
  nextCard=$('question-card').cloneNode(true);nextCard.removeAttribute('id');nextCard.removeAttribute('tabindex');nextCard.removeAttribute('aria-label');nextCard.setAttribute('aria-hidden','true');nextCard.setAttribute('inert','');nextCard.className='review-card next-card';nextCard.style.cssText='';nextCard.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));nextCard.querySelectorAll('button').forEach(el=>{el.disabled=true;el.tabIndex=-1;});nextCard.querySelector('.question-heading').textContent=next.text;nextCard.querySelector('.question-note').textContent=next.note||'';nextCard.querySelector('.question-note').hidden=!next.note;nextCard.querySelector('.pill').textContent=next.source==='user'?'YOUR QUESTION':next.source==='ai'?'AI SUGGESTION':'SAMPLE QUESTION';const details=nextCard.querySelector('details');details.open=false;details.hidden=!next.answer;details.querySelector('p').textContent=next.answer||'';const top=nextCard.querySelector('.card-top');top.children[1].textContent=batchPosition(next);top.children[1].style.marginLeft='auto';$('card-space').prepend(nextCard);alignNextCard();revealNext(0);
}
window.addEventListener('resize',alignNextCard);
if('ResizeObserver' in window)new ResizeObserver(alignNextCard).observe($('question-card'));
function resetCard(immediate=false){revealNext(0);const card=$('question-card');if(immediate)card.classList.add('resetting');card.classList.remove('dragging','throwing','arriving','keep-feedback','reject-feedback');card.style.transform='';card.style.opacity='';$('verdict').textContent='';if(immediate){void card.offsetWidth;card.classList.remove('resetting');}}
function renderReview(){resetCard(true);const cat=CATEGORIES.find(c=>c.id===activeCategory),q=current(),list=reviewBatch(activeCategory,q),reviewed=list.filter(x=>state.decisions[x.id]).length;$('category-name').textContent=cat.name;$('review-progress').textContent=`${reviewed} of ${list.length} reviewed`;$('kept-count').textContent=`${list.filter(x=>state.decisions[x.id]==='kept').length} kept`;$('progress-bar').style.width=`${(list.length?reviewed/list.length*100:0)}%`;$('question-card').hidden=!q;$('done').hidden=!!q;const generate=$('generate'),bank=$('done-bank');bank.hidden=!!q;generate.className=q?'generate':'primary';bank.className='generate';if(q){$('review').append(generate);}else{$('done').append(generate);$('review').append(bank);}$('decision-buttons').hidden=!q;$('undo').disabled=busy||!state.history.some(h=>h.category===activeCategory);if(q){$('question-source').textContent=q.source==='user'?'YOUR QUESTION':q.source==='ai'?'AI SUGGESTION':'SAMPLE QUESTION';$('question-text').textContent=q.text;$('question-note').textContent=q.note||'';$('question-note').hidden=!q.note;$('card-number').textContent=batchPosition(q);$('answer-details').hidden=!q.answer;$('answer-details').open=false;$('answer-text').textContent=q.answer?`${q.answer}${q.explain?' — '+q.explain:''}`:'';}$('keep').disabled=$('reject').disabled=$('edit-current').disabled=busy;prepareNextCard();updateRewriteButton();}
function decide(verdict){if(busy||view!=='review'||!current())return;const q=current();if(!commit(next=>{next.decisions[q.id]=verdict;next.history.push({id:q.id,category:q.category});})){resetCard();return;}busy=true;$('keep').disabled=$('reject').disabled=$('undo').disabled=true;const card=$('question-card');card.classList.remove('dragging');card.classList.toggle('keep-feedback',verdict==='kept');card.classList.toggle('reject-feedback',verdict==='rejected');const direction=verdict==='kept'?1:-1;const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;const distance=window.innerWidth+card.offsetWidth+card.offsetHeight;card.classList.remove('arriving');card.classList.add('throwing');revealNext(1);void card.offsetWidth;card.style.transform=reduced?'none':`translateX(${direction*distance}px) rotate(${direction*24}deg)`;card.style.opacity=reduced?'0':'1';$('verdict').textContent=verdict==='kept'?'✓ KEPT':'× REJECTED';$('notice').textContent=verdict==='kept'?'Question kept':'Question rejected';setTimeout(()=>{busy=false;if(view==='review'){renderReview();}else if(view==='home')renderHome();else renderBank();},reduced?160:650);}
function undo(){if(busy)return;let index=-1;for(let i=state.history.length-1;i>=0;i--){if(state.history[i].category===activeCategory){index=i;break;}}if(index<0)return;if(commit(next=>{delete next.decisions[next.history[index].id];next.history.splice(index,1);})){renderReview();notify('Last choice undone.');}}
function openBank(category){bankCategory=category;bankFilter='kept';show('bank');}
function renderBank(){$('bank-title').textContent=CATEGORIES.find(c=>c.id===bankCategory).name;$('add-question').hidden=bankFilter!=='kept';$('kept-tab').setAttribute('aria-pressed',String(bankFilter==='kept'));$('rejected-tab').setAttribute('aria-pressed',String(bankFilter==='rejected'));const list=$('bank-list');list.replaceChildren();const total=questions(bankCategory).filter(q=>state.decisions[q.id]===bankFilter).length;$('bank-description').textContent=total?`${total} ${bankFilter} question${total===1?'':'s'}. “Review again” puts a question back in its queue.`:`No ${bankFilter} questions yet.`;CATEGORIES.filter(cat=>cat.id===bankCategory).forEach(cat=>{const chosen=questions(cat.id).filter(q=>state.decisions[q.id]===bankFilter);if(!chosen.length)return;const heading=document.createElement('h3');heading.className='bank-section';heading.textContent=cat.name;const groupHeader=document.createElement('div');groupHeader.className='bank-section-header';groupHeader.append(heading);if(bankFilter==='kept'){const copyCategory=document.createElement('button');copyCategory.type='button';copyCategory.className='copy-category';copyCategory.textContent='Copy kept questions';copyCategory.setAttribute('aria-label','Copy kept questions for '+cat.name);copyCategory.onclick=()=>copyBank(cat.id);groupHeader.append(copyCategory);}list.append(groupHeader);chosen.forEach(q=>{const row=document.createElement('div');row.className='bank-row';const text=document.createElement('p');text.textContent=q.text;if(q.note){const note=document.createElement('small');note.className='bank-note';note.textContent=q.note;text.append(note);}if(q.source==='user'){const label=document.createElement('small');label.textContent='Your question';text.append(label);}const again=document.createElement('button');again.textContent='Review again';again.disabled=busy;again.onclick=()=>{if(busy)return;if(commit(next=>{delete next.decisions[q.id];next.history=next.history.filter(h=>h.id!==q.id);})){renderBank();notify('Returned to review.');}};const edit=document.createElement('button');edit.className='edit-pencil';edit.type='button';edit.setAttribute('aria-label','Edit question');edit.innerHTML=$('edit-current').innerHTML;edit.disabled=busy;edit.onclick=()=>openEdit(q.id);const refresh=document.createElement('button');refresh.type='button';refresh.className='edit-pencil rewrite-button';refresh.innerHTML="<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M20 7v5h-5M4 17v-5h5M19.1 8a8 8 0 0 0-13.3-2M4.9 16a8 8 0 0 0 13.3 2\"/></svg>";refresh.setAttribute('aria-label','Refresh question wording');refresh.onclick=()=>rewriteQuestion(q.id);refresh.disabled=rewritingIds.has(q.id);row.append(text,refresh,edit,again);list.append(row);});});$('copy').disabled=!questions(bankCategory).some(q=>state.decisions[q.id]==='kept');}
let editingId=null;
function openEdit(id){
  if(busy)return;const q=allQuestions().find(q=>q.id===id);if(!q)return;
  editingId=id;$('edit-question').value=q.text;$('edit-note').value=q.note||'';$('edit-answer').value=q.answer||'';$('edit-explain').value=q.explain||'';$('edit-answer-wrap').hidden=q.category!=='knockout';$('edit-error').textContent='';$('edit-dialog').showModal();$('edit-question').focus();
}
$('edit-current').onclick=()=>{const q=current();if(q)openEdit(q.id);};
$('cancel-edit').onclick=()=>$('edit-dialog').close();
$('edit-form').onsubmit=event=>{
  event.preventDefault();const q=allQuestions().find(q=>q.id===editingId);if(!q)return;
  const text=$('edit-question').value.trim();if(!text){$('edit-error').textContent='Enter a question first.';return;}
  const norm=s=>s.trim().toLowerCase().replace(/\s+/g,' ');
  if(allQuestions().some(other=>other.id!==q.id&&other.category===q.category&&norm(other.text)===norm(text))){$('edit-error').textContent='That wording is already used in this category.';return;}
  const changes={text,rewriteOriginal:text,rewriteStep:0,rewriteHistory:[],note:$('edit-note').value.trim()};if(q.category==='knockout'){changes.answer=$('edit-answer').value.trim();changes.explain=$('edit-explain').value.trim();}
  if(!commit(next=>{next.edits[q.id]=changes;})){$('edit-error').textContent='Could not save. Please try again.';return;}
  $('edit-dialog').close();if(view==='review')renderReview();else renderBank();notify('Question updated.');
};
function exportBank(category=null){const sections=CATEGORIES.filter(cat=>!category||cat.id===category).map(cat=>{const kept=questions(cat.id).filter(q=>state.decisions[q.id]==='kept');if(!kept.length)return '';return cat.name+' ('+kept.length+' kept)\n'+kept.map(({text,note,answer,explain,source})=>JSON.stringify({text,...(note?{note}:{}),...(answer?{answer,explain}:{}),...(source==='user'?{source:'user'}:{})})).join('\n');}).filter(Boolean);return 'QUESTION REVIEW — KEPT QUESTIONS\nAccepted questions only; this is NOT a replacement for the full game bank. Modes have not been assigned.\n\n'+sections.join('\n\n');}
async function copyBank(category=null){const text=exportBank(category);try{await navigator.clipboard.writeText(text);const name=CATEGORIES.find(cat=>cat.id===category)?.name;notify(name?name+' copied — paste into our chat.':'Copied — paste into our chat.');}catch{$('copy-text').value=text;$('copy-dialog').showModal();$('copy-text').focus();$('copy-text').select();}}
$('add-question').onclick=()=>{
  $('add-form').reset();$('new-category').value=bankCategory;$('new-answer-wrap').hidden=$('new-category').value!=='knockout';$('add-error').textContent='';$('add-dialog').showModal();$('new-question').focus();
};
$('cancel-add').onclick=()=>$('add-dialog').close();
$('new-category').onchange=()=>{$('new-answer-wrap').hidden=$('new-category').value!=='knockout';};
$('add-form').onsubmit=event=>{
  event.preventDefault();const text=$('new-question').value.trim(),category=$('new-category').value;
  if(!text){$('add-error').textContent='Enter a question first.';$('new-question').focus();return;}
  const norm=value=>value.trim().toLowerCase().replace(/\s+/g,' ');
  if(allQuestions().some(q=>q.category===category&&norm(q.text)===norm(text))){$('add-error').textContent='That question is already in this category.';return;}
  const q={id:'custom-'+(globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)),category,text,source:'user'};
  if($('new-note').value.trim())q.note=$('new-note').value.trim();
  if(category==='knockout'&&$('new-answer').value.trim())q.answer=$('new-answer').value.trim();
  if(!commit(next=>{next.custom.push(q);next.decisions[q.id]='kept';})){$('add-error').textContent='Could not save. Please check your browser storage and try again.';return;}
  $('add-dialog').close();bankCategory=category;bankFilter='kept';renderBank();notify('Your question was added to the kept bank.');
};
$('keep').onclick=()=>decide('kept');$('reject').onclick=()=>decide('rejected');$('undo').onclick=undo;$('back').onclick=$('bank-back').onclick=()=>show('home');$('review-bank').onclick=$('done-bank').onclick=()=>openBank(activeCategory);$('kept-tab').onclick=()=>{bankFilter='kept';renderBank();};$('rejected-tab').onclick=()=>{bankFilter='rejected';renderBank();};$('copy').onclick=()=>copyBank(bankCategory);$('close-copy').onclick=()=>$('copy-dialog').close();
const card=$('question-card');
card.addEventListener('pointerdown',event=>{if(busy||!event.isPrimary||event.button!==0||event.target.closest('details,button'))return;drag={x:event.clientX,y:event.clientY,id:event.pointerId,horizontal:false};card.setPointerCapture?.(event.pointerId);});
card.addEventListener('pointermove',event=>{if(!drag||event.pointerId!==drag.id)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(!drag.horizontal){if(Math.abs(dy)>14&&Math.abs(dy)>Math.abs(dx)){drag=null;resetCard();return;}if(Math.abs(dx)<10)return;drag.horizontal=true;}card.classList.add('dragging');revealNext(Math.abs(dx)/Math.max(120,card.clientWidth*.75),true);card.style.transform=`translateX(${dx}px) rotate(${Math.max(-18,Math.min(18,dx/25))}deg)`;card.classList.toggle('keep-feedback',dx>40);card.classList.toggle('reject-feedback',dx< -40);$('verdict').textContent=dx>40?'KEEP →':dx< -40?'← REJECT':'';});
card.addEventListener('pointerup',event=>{if(!drag||event.pointerId!==drag.id)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y,accept=drag.horizontal&&Math.abs(dx)>Math.max(65,card.clientWidth*.22)&&Math.abs(dx)>Math.abs(dy);drag=null;if(accept)decide(dx>0?'kept':'rejected');else resetCard();});
card.addEventListener('pointercancel',()=>{drag=null;if(!busy)resetCard();});
document.addEventListener('keydown',event=>{if(view!=='review'||event.target.closest('button,textarea,summary,dialog'))return;if(event.key==='ArrowRight'){event.preventDefault();decide('kept');}if(event.key==='ArrowLeft'){event.preventDefault();decide('rejected');}});
renderHome();if(storageWarning)notify(storageWarning);
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));

let aiSettings={url:'',code:''},generating=false;
try{aiSettings=JSON.parse(localStorage.getItem('questionReview.ai')||'null')||aiSettings;}catch{}
function aiStatus(){const configured=aiSettings.url&&aiSettings.code;$('ai-settings').textContent=configured?'AI connection settings':'Connect AI';$('ai-connection-label').textContent=configured?'AI configured · Generate when you’re ready':'Sample deck · AI not connected yet';}
$('ai-settings').onclick=()=>{$('worker-url').value=aiSettings.url||'';$('worker-code').value=aiSettings.code||'';$('ai-error').textContent='';$('ai-dialog').showModal();};
$('close-ai').onclick=()=>$('ai-dialog').close();
$('ai-form').onsubmit=e=>{e.preventDefault();try{const url=new URL($('worker-url').value.trim());if(url.protocol!=='https:'||url.username||url.password||!url.hostname.endsWith('.workers.dev'))throw Error('Use your HTTPS workers.dev address.');const code=$('worker-code').value.trim();if(!code||code.startsWith('sk-'))throw Error('Enter your review access code, not your OpenAI API key.');const next={url:url.origin,code};localStorage.setItem('questionReview.ai',JSON.stringify(next));aiSettings=next;aiStatus();$('ai-dialog').close();notify('Connection saved. Try generating a batch.');}catch(error){$('ai-error').textContent=error.message;}};
$('generate').onclick=async()=>{
 if(generating||busy)return;
 if(!aiSettings.url||!aiSettings.code){$('ai-settings').onclick();return;}
 generating=true;const category=activeCategory,button=$('generate');button.disabled=true;button.textContent='Generating…';
 try{
  const pool=questions(category),examples=q=>({text:q.text,source:q.source||'sample'});
  const response=await fetch(aiSettings.url+'/generate',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+aiSettings.code},signal:AbortSignal.timeout(160000),body:JSON.stringify({category,accepted:pool.filter(q=>state.decisions[q.id]==='kept').map(examples),rejected:[...new Set(pool.filter(q=>state.decisions[q.id]==='rejected').flatMap(q=>[q.text,q.rewriteOriginal,...(q.rewriteHistory||[])]).filter(Boolean))],existing:pool.slice(-1000).flatMap(q=>[examples(q),...(q.rewriteOriginal&&q.rewriteOriginal!==q.text?[{text:q.rewriteOriginal}]:[])])})});
  let result;try{result=await response.json();}catch{throw Error('The Worker did not return JSON. Check its URL and deployment.');}
  if(!response.ok)throw Error(result.error||'Generation failed.');
  if(!Array.isArray(result.questions))throw Error('Unexpected Worker response.');
  const norm=s=>s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim(),seen=new Set(questions(category).map(q=>norm(q.text))),additions=[];
  const batchId='batch-'+crypto.randomUUID();
  for(const q of result.questions.slice(0,10)){if(typeof q.text!=='string'||!q.text.trim()||q.text.length>1000||(category==='proven'&&isBlockedWatchSize(q.text))||seen.has(norm(q.text)))continue;seen.add(norm(q.text));additions.push({id:'ai-'+crypto.randomUUID(),batchId,category,text:q.text.trim(),source:'ai',...(category==='knockout'?{answer:String(q.answer||'').slice(0,500),explain:String(q.explain||'').slice(0,1000)}:{})});}
  if(!additions.length){notify('No fresh questions returned. Try another batch.');return;}
  if(!commit(next=>{next.generated.push(...additions)}))return;
  if(view==='review'&&activeCategory===category&&!busy)renderReview();else if(view==='home')renderHome();
  notify(additions.length+' new questions ready to review.');
 }catch(error){notify(error.name==='TimeoutError'?'Generation timed out. Try again.':error.message==='Failed to fetch'?'Could not reach the Worker. Check the URL and deployment.':error.message);}finally{generating=false;button.disabled=false;button.textContent='✧ Generate 10 questions';}
};
aiStatus();

function setTheme(dark){document.documentElement.dataset.theme=dark?'dark':'light';$('theme-switch').checked=dark;document.querySelector('meta[name="theme-color"]').content=dark?'#101426':'#f4f1f7';}
let savedTheme='dark';try{savedTheme=localStorage.getItem('questionReview.theme')||'dark';}catch{}
setTheme(savedTheme!=='light');
$('theme-switch').onchange=()=>{const dark=$('theme-switch').checked;setTheme(dark);try{localStorage.setItem('questionReview.theme',dark?'dark':'light');}catch{notify('Theme changed for this visit.');}};

const rewritingIds=new Set();

$('rewrite-current').onclick=()=>{const q=current();if(q)rewriteQuestion(q.id);};
async function rewriteQuestion(id){
 if(busy||rewritingIds.has(id))return;
 if(!aiSettings.url||!aiSettings.code){$('ai-settings').onclick();return;}
 const q=allQuestions().find(q=>q.id===id);if(!q)return;
 const step=q.rewriteStep||0,style='natural';
 rewritingIds.add(id);updateRewriteButton();if(view==='bank')renderBank();
 try{
 const response=await fetch(aiSettings.url+'/rewrite',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+aiSettings.code},signal:AbortSignal.timeout(60000),body:JSON.stringify({category:q.category,text:q.rewriteOriginal||q.text,current:q.text,note:q.note||'',answer:q.answer||'',style,previous:q.rewriteHistory||[]})});
 if(response.status===404)throw Error('Deploy the latest Cloudflare Worker to enable wording refresh.');
 let result;try{result=await response.json();}catch{throw Error('The Worker returned an unreadable response.');}
 if(!response.ok)throw Error(result.error||'Could not refresh wording.');
 const text=result.text?.trim();if(!text||text.length>1000||text===q.text)throw Error('No new wording returned. Try again.');
 if(q.category!=='knockout'&&!/^who(?:se)?\b/i.test(text))throw Error('The rewrite must start with Who or Whose. Please try again.');
 const latest=allQuestions().find(x=>x.id===id);
 if(!latest||latest.text!==q.text||latest.note!==q.note||latest.answer!==q.answer){notify('Question changed while rewriting. Try again.');return;}
 if(allQuestions().some(x=>x.id!==id&&x.category===q.category&&x.text.toLowerCase()===text.toLowerCase()))throw Error('That wording already exists. Try again.');
 if(!commit(next=>{next.edits[id]={...(next.edits[id]||{}),text,rewriteOriginal:q.rewriteOriginal||q.text,rewriteStep:step+1,rewriteHistory:[...(q.rewriteHistory||[]),q.text].slice(-10)};}))return;
 if(view==='review'&&!busy)renderReview();else if(view==='bank')renderBank();
 notify('Wording refreshed.');
 }catch(error){notify(error.name==='TimeoutError'?'Wording refresh timed out. Try again.':error.message);}
 finally{rewritingIds.delete(id);updateRewriteButton();if(view==='bank')renderBank();}
}
function updateRewriteButton(){const button=$('rewrite-current'),waiting=rewritingIds.has(current()?.id);button.disabled=busy||waiting;button.innerHTML=waiting?'<span aria-hidden="true">…</span>':"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M20 7v5h-5M4 17v-5h5M19.1 8a8 8 0 0 0-13.3-2M4.9 16a8 8 0 0 0 13.3 2\"/></svg>";button.setAttribute('aria-label',waiting?'Refreshing wording':'Refresh question wording');}
