# Question Review

A small, phone-first companion for curating Choose a Loser questions. Open a category, swipe right to keep or left to reject. Buttons provide the same actions. Each decision shows green/red confirmation before the next card. Undo restores the previous decision in that category.

18 demonstration questions (6 per category). They are separate from the production game's bank. The kept bank copies selected questions, with Knockout answers, for pasting into chat. Export deliberately identifies these as selected suggestions, not a replacement bank. Modes are not assigned yet.

Progress and decision history are saved in localStorage on the current browser. Clearing site data or changing browser/device does not carry progress across. The service worker makes the loaded draft available offline. AI suggestions are optional and require your own Cloudflare Worker. There is no server sync of review progress. Category banks and the light/dark preference are saved on this browser.

## Run

Serve this directory using any static host, e.g. `python -m http.server 8000`. No build dependencies.

## GitHub Pages

The included workflow deploys to GitHub Pages. If Pages has not been enabled, choose **Settings → Pages → Source: GitHub Actions**, then rerun the workflow.

## AI suggestions

Connect the repository to a Cloudflare Worker named question-review-ai, branch main, root directory worker. Leave the build command blank and use deploy command npx wrangler deploy.

In Worker Settings → Variables and Secrets, add runtime secrets OPENAI_API_KEY and REVIEW_ACCESS_TOKEN (a private random access code of at least 20 characters), then deploy. Do not put the OpenAI key in the frontend or commit it.

Open Connect AI in the app, enter the HTTPS workers.dev URL and matching review access code. Generate 10 questions inside any category. Kept, rejected and user-written examples guide generation; new suggestions enter the review queue. Only kept questions are exported.

The default model is gpt-4.1-mini. ALLOWED_ORIGIN is configured for https://nikki0radz.github.io. Requests are authenticated, capped at 10 suggestions, and use structured Responses API output. Live generation requires valid runtime secrets and an OpenAI account with API access.
