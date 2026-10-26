# Question Review

A small, phone-first companion for curating Choose a Loser questions. Open a category, swipe right to keep or left to reject. Buttons provide the same actions. Each decision shows green/red confirmation before the next card. Undo restores the previous decision in that category.

18 demonstration questions (6 per category). They are separate from the production game's bank. The kept bank copies selected questions, with Knockout answers, for pasting into chat. Export deliberately identifies these as selected sample suggestions, not a replacement bank. Modes are not assigned yet.

Progress and decision history are saved in localStorage on the current browser. Clearing site data or changing browser/device does not carry progress across. The service worker makes the loaded draft available offline. No accounts, API keys, AI calls or server sync in this draft.

## Run

Serve this directory using any static host, e.g. `python -m http.server 8000`. No build dependencies.

## GitHub Pages

The included workflow deploys to GitHub Pages. If Pages has not been enabled, choose **Settings → Pages → Source: GitHub Actions**, then rerun the workflow.

## Next: AI suggestions

The future integration should call a protected Cloudflare Worker. Store the provider API key only in Worker secrets, never in this repository or browser storage. Keep accepted/rejected examples as context for batch generation; only explicitly kept suggestions should enter the export. This draft intentionally has no nonfunctional Generate button.
