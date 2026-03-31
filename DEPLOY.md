# Deploy SecCloudPath (Vercel)

This project is a **Next.js 15** app. The fastest path online is **GitHub + Vercel** (free tier to start).

---

## Prerequisites

1. **Node.js** (you already use this locally).
2. **Git** — [Install Git for Windows](https://git-scm.com/download/win)  
   Or: `winget install Git.Git` in PowerShell (admin).
3. A **GitHub** account: [github.com](https://github.com)
4. A **Vercel** account: [vercel.com](https://vercel.com) (sign in with GitHub).

---

## Step 1 — Create an empty repo on GitHub

1. GitHub → **New repository**
2. Name e.g. `seccloudpath` (or `SecCloudPath-website`)
3. **Do not** add README / .gitignore / license (we already have files locally)
4. Opprett repo med navnet **`seccloudpath`** (anbefalt, matcher prosjektet).

---

## Step 2 — Push this project from your PC

Open **PowerShell** or **Git Bash** in the project folder:

```powershell
cd c:\Users\posa01\.cursor\projects\SecCloudPath
```

Initialize Git and make the first commit:

```bash
git init
git add .
git commit -m "Initial commit: SecCloudPath site"
git branch -M main
```

**Koble til GitHub og push** (brukernavn: **pouyasab**, repo: **seccloudpath**):

```bash
git remote add origin https://github.com/pouyasab/seccloudpath.git
git push -u origin main
```

> Repo-navnet (`seccloudpath`) må matche det du opprettet på GitHub. Bytt det i URL-en hvis du brukte et annet repo-navn.

Hvis du allerede har lagt til feil `origin`, fjern den først:  
`git remote remove origin` — deretter kjør `git remote add origin ...` på nytt.

If `git` is not recognized, install Git (see Prerequisites) and reopen the terminal.

---

## Step 3 — Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import** your GitHub repository
3. **Framework preset:** Next.js (auto-detected)
4. **Build command:** `npm run build` (default)  
   **Output:** handled automatically — no static export needed
5. Click **Deploy**

After ~1–2 minutes you get a URL like `https://seccloudpath.vercel.app`.

### Contact form email setup (required)

To make the contact form send emails, add these **Environment Variables** in Vercel:

- `RESEND_API_KEY` = your API key from Resend
- `CONTACT_TO_EMAIL` = `post@seccloudpath.com`
- `CONTACT_FROM_EMAIL` = sender address (example: `SecCloudPath Kontakt <noreply@yourdomain.com>`)

Then redeploy. Without `RESEND_API_KEY`, the form cannot deliver emails.

---

## Step 4 — Custom domain (optional)

1. Vercel → your project → **Settings** → **Domains**
2. Add `www.yourdomain.com` and/or `yourdomain.com`
3. At your domain registrar, add the **DNS records** Vercel shows (usually A + CNAME)

---

## Troubleshooting

| Issue | What to try |
|--------|-------------|
| Build fails on Vercel | Run `npm run build` locally and fix errors first |
| Wrong Node version | Vercel uses Node 20.x by default; `package.json` has `engines` if we pin it |
| Middleware / locales | Supported on Vercel; no extra config for standard Next.js |

---

## What you do next (manual)

- [ ] Install Git (if `git` command missing)
- [ ] Create GitHub repo + push (Step 2)
- [ ] Import repo in Vercel + Deploy (Step 3)

After the first deploy, every `git push` to `main` triggers a new deployment automatically.
