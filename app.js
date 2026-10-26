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
let state={decisions:{},history:[]},activeCategory=null,view='home',bankFilter='kept',busy=false,drag=null,noticeTimer;
let storageWarning='';
try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){const parsed=JSON.parse(raw);if(!parsed||(!parsed.decisions||typeof parsed.decisions!=='object')||!Array.isArray(parsed.history))throw Error('Invalid progress');state=parsed;}}catch{storageWarning='Saved progress could not be read. Keep this tab open and copy your choices.';}
function notify(message){$('notice').textContent=message;$('notice').classList.add('visible');clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>$('notice').classList.remove('visible'),3200);}
function commit(change){const next=JSON.parse(JSON.stringify(state));change(next);try{localStorage.setItem(STORAGE_KEY,JSON.stringify(next));}catch{notify('Could not save. Your choice was not changed. Check browser storage.');return false;}state=next;return true;}
function questions(category){return QUESTIONS.filter(q=>q.category===category);}
function pending(category){return questions(category).filter(q=>!state.decisions[q.id]);}
function current(){return pending(activeCategory)[0];}
function show(screen){view=screen;['home','review','bank'].forEach(id=>$(id).hidden=id!==screen);window.scrollTo(0,0);if(screen==='home')renderHome();if(screen==='bank')renderBank();}
function renderHome(){const container=$('categories');container.replaceChildren();CATEGORIES.forEach(cat=>{const list=questions(cat.id),left=pending(cat.id).length,kept=list.filter(q=>state.decisions[q.id]==='kept').length;const button=document.createElement('button');button.className='category';button.style.setProperty('--accent',cat.colour);button.innerHTML='<span class="category-symbol" aria-hidden="true"></span><span><strong></strong><small></small></span><span class="arrow" aria-hidden="true">→</span>';button.querySelector('.category-symbol').textContent=cat.symbol;button.querySelector('strong').textContent=cat.name;button.querySelector('small').textContent=left===list.length?cat.description:`${left} to review · ${kept} kept`;button.onclick=()=>openCategory(cat.id);container.append(button);});$('total-kept').textContent=QUESTIONS.filter(q=>state.decisions[q.id]==='kept').length;}
function openCategory(id){activeCategory=id;show('review');renderReview();}
function resetCard(){const card=$('question-card');card.classList.remove('dragging','keep-feedback','reject-feedback');card.style.transform='';$('verdict').textContent='';}
function renderReview(){resetCard();const cat=CATEGORIES.find(c=>c.id===activeCategory),list=questions(activeCategory),q=current(),reviewed=list.length-pending(activeCategory).length;$('category-name').textContent=cat.name;$('review-progress').textContent=`${reviewed} of ${list.length} reviewed`;$('kept-count').textContent=`${list.filter(x=>state.decisions[x.id]==='kept').length} kept`;$('progress-bar').style.width=`${reviewed/list.length*100}%`;$('question-card').hidden=!q;$('done').hidden=!!q;$('decision-buttons').hidden=!q;$('undo').disabled=busy||!state.history.some(h=>h.category===activeCategory);if(q){$('question-text').textContent=q.text;$('card-number').textContent=`${reviewed+1} / ${list.length}`;$('answer-details').hidden=!q.answer;$('answer-details').open=false;$('answer-text').textContent=q.answer?`${q.answer}${q.explain?' — '+q.explain:''}`:'';}$('keep').disabled=$('reject').disabled=busy;}
function decide(verdict){if(busy||view!=='review'||!current())return;const q=current();if(!commit(next=>{next.decisions[q.id]=verdict;next.history.push({id:q.id,category:q.category});})){resetCard();return;}busy=true;$('keep').disabled=$('reject').disabled=$('undo').disabled=true;const card=$('question-card');card.classList.remove('dragging');card.classList.toggle('keep-feedback',verdict==='kept');card.classList.toggle('reject-feedback',verdict==='rejected');card.style.transform=`translateX(${verdict==='kept'?12:-12}px) rotate(${verdict==='kept'?2:-2}deg)`;$('verdict').textContent=verdict==='kept'?'✓ KEPT':'× REJECTED';$('notice').textContent=verdict==='kept'?'Question kept':'Question rejected';setTimeout(()=>{busy=false;if(view==='review')renderReview();else if(view==='home')renderHome();else renderBank();},550);}
function undo(){if(busy)return;let index=-1;for(let i=state.history.length-1;i>=0;i--){if(state.history[i].category===activeCategory){index=i;break;}}if(index<0)return;if(commit(next=>{delete next.decisions[next.history[index].id];next.history.splice(index,1);})){renderReview();notify('Last choice undone.');}}
function renderBank(){$('kept-tab').setAttribute('aria-pressed',String(bankFilter==='kept'));$('rejected-tab').setAttribute('aria-pressed',String(bankFilter==='rejected'));const list=$('bank-list');list.replaceChildren();const total=QUESTIONS.filter(q=>state.decisions[q.id]===bankFilter).length;$('bank-description').textContent=total?`${total} ${bankFilter} question${total===1?'':'s'}. “Review again” puts a question back in its queue.`:`No ${bankFilter} questions yet.`;CATEGORIES.forEach(cat=>{const chosen=questions(cat.id).filter(q=>state.decisions[q.id]===bankFilter);if(!chosen.length)return;const heading=document.createElement('h3');heading.className='bank-section';heading.textContent=cat.name;list.append(heading);chosen.forEach(q=>{const row=document.createElement('div');row.className='bank-row';const text=document.createElement('p');text.textContent=q.text;const again=document.createElement('button');again.textContent='Review again';again.disabled=busy;again.onclick=()=>{if(busy)return;if(commit(next=>{delete next.decisions[q.id];next.history=next.history.filter(h=>h.id!==q.id);})){renderBank();notify('Returned to review.');}};row.append(text,again);list.append(row);});});$('copy').disabled=!QUESTIONS.some(q=>state.decisions[q.id]==='kept');}
function exportBank(){const sections=CATEGORIES.map(cat=>{const kept=questions(cat.id).filter(q=>state.decisions[q.id]==='kept');if(!kept.length)return '';return cat.name+' ('+kept.length+' kept)\n'+kept.map(({text,answer,explain})=>JSON.stringify({text,...(answer?{answer,explain}:{} )})).join('\n');}).filter(Boolean);return 'QUESTION REVIEW — KEPT SAMPLE QUESTIONS\nSelected suggestions only; this is NOT a replacement for the full game bank. Modes have not been assigned.\n\n'+sections.join('\n\n');}
async function copyBank(){try{await navigator.clipboard.writeText(exportBank());notify('Copied — paste into our chat.');}catch{$('copy-text').value=exportBank();$('copy-dialog').showModal();$('copy-text').focus();$('copy-text').select();}}
$('keep').onclick=()=>decide('kept');$('reject').onclick=()=>decide('rejected');$('undo').onclick=undo;$('back').onclick=$('bank-back').onclick=()=>show('home');$('open-bank').onclick=$('review-bank').onclick=$('done-bank').onclick=()=>{bankFilter='kept';show('bank');};$('kept-tab').onclick=()=>{bankFilter='kept';renderBank();};$('rejected-tab').onclick=()=>{bankFilter='rejected';renderBank();};$('copy').onclick=copyBank;$('close-copy').onclick=()=>$('copy-dialog').close();
const card=$('question-card');
card.addEventListener('pointerdown',event=>{if(busy||!event.isPrimary||event.button!==0||event.target.closest('details'))return;drag={x:event.clientX,y:event.clientY,id:event.pointerId,horizontal:false};card.setPointerCapture?.(event.pointerId);});
card.addEventListener('pointermove',event=>{if(!drag||event.pointerId!==drag.id)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(!drag.horizontal){if(Math.abs(dy)>14&&Math.abs(dy)>Math.abs(dx)){drag=null;resetCard();return;}if(Math.abs(dx)<10)return;drag.horizontal=true;}card.classList.add('dragging');card.style.transform=`translateX(${Math.max(-130,Math.min(130,dx))}px) rotate(${dx/25}deg)`;card.classList.toggle('keep-feedback',dx>40);card.classList.toggle('reject-feedback',dx< -40);$('verdict').textContent=dx>40?'KEEP →':dx< -40?'← REJECT':'';});
card.addEventListener('pointerup',event=>{if(!drag||event.pointerId!==drag.id)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y,accept=drag.horizontal&&Math.abs(dx)>Math.max(65,card.clientWidth*.22)&&Math.abs(dx)>Math.abs(dy);drag=null;if(accept)decide(dx>0?'kept':'rejected');else resetCard();});
card.addEventListener('pointercancel',()=>{drag=null;resetCard();});
document.addEventListener('keydown',event=>{if(view!=='review'||event.target.closest('button,textarea,summary,dialog'))return;if(event.key==='ArrowRight'){event.preventDefault();decide('kept');}if(event.key==='ArrowLeft'){event.preventDefault();decide('rejected');}});
renderHome();if(storageWarning)notify(storageWarning);
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
