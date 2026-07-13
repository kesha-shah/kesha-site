# kesha.twounderthesky.com

My personal website — who I am, the tools I've built, open-source work, and writing.
Plain HTML/CSS/JS, no build step. Deploys as a static site to Cloudflare Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | All the content (edit text/projects here) |
| `style.css`  | Styling + light/dark theme |
| `script.js`  | Theme toggle + footer year |
| `serve.mjs`  | Local preview server only — **not needed in production** |

## Preview locally

```bash
node serve.mjs
# open http://localhost:4321
```

## Deploy to Cloudflare Pages

Since `twounderthesky.com`'s DNS is on Cloudflare, this is the simplest path — the
domain and hosting live in one place.

### Option A — Direct upload (fastest, no Git needed)
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Upload assets**.
2. Upload `index.html`, `style.css`, `script.js`.
3. Name the project (e.g. `kesha-site`) and deploy → you get a `*.pages.dev` URL.

### Option B — Connect a Git repo (auto-deploy on every push)
1. Push this folder to a GitHub repo.
2. Cloudflare Pages → **Connect to Git** → pick the repo.
3. Build settings: **Framework preset = None**, **Build command = (blank)**,
   **Build output directory = `/`**.
4. Deploy.

### Point the subdomain at it
1. In the Pages project → **Custom domains → Set up a custom domain**.
2. Enter `kesha.twounderthesky.com`.
3. Cloudflare adds the DNS record automatically and issues HTTPS.

Your existing `finance.` and `farm.` subdomains and the root blog stay untouched.

## Editing content later

Everything is in `index.html`:

- **Tagline** — the `.tagline` paragraph in the hero.
- **About** — the `#about` section.
- **Projects** — each `<li class="card">` block. Copy one to add a project.
  Badges: `badge-live` (green), `badge-store` (blue), or plain `badge`.
- **Links** — social icons in the hero, footer links at the bottom.

### TODO
- Replace the LinkedIn placeholder (`https://www.linkedin.com/in/kesha-shah`) in
  `index.html` with your real profile URL once confirmed.
