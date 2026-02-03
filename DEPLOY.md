# Create New GitHub Repo & Redeploy

## Step 1: Create a new repository on GitHub

1. Go to **https://github.com/new**
2. Sign in as **Anushka8178** if needed.
3. Set:
   - **Repository name:** `3dPortfolio` (or any name you like)
   - **Visibility:** Public
   - **Do not** add a README, .gitignore, or license (this project already has them).
4. Click **Create repository**.

## Step 2: Push this project to the new repo

In a terminal, from your project folder (`3dPortfolio`), run:

```powershell
cd "c:\Users\anush\OneDrive\Desktop\Projects_new\3dPortfolio"

# Point origin to your NEW repo (replace 3dPortfolio with your repo name if different)
git remote set-url origin https://github.com/Anushka8178/3dPortfolio.git

# Push (use main if GitHub created the repo with main branch)
git push -u origin master
```

If GitHub created the repo with default branch `main` and you see an error, run:

```powershell
git branch -M main
git push -u origin main
```

## Step 3: Redeploy on Vercel

1. Go to **https://vercel.com** and sign in (with GitHub if you use it).
2. **If this project is already on Vercel:**  
   - Open your project → **Settings** → **Git**  
   - Connect the new repo: **Anushka8178/3dPortfolio** (or disconnect and re-import from the new repo).  
   - Trigger a new deployment from the **Deployments** tab (**Redeploy**).
3. **If it’s a new deployment:**  
   - Click **Add New** → **Project**  
   - Import **Anushka8178/3dPortfolio**  
   - Leave **Framework Preset** as Vite (or auto-detected)  
   - Click **Deploy**

Your site will be live at a `*.vercel.app` URL (and any custom domain you add).

---

**Summary:** Create repo on GitHub → set `origin` to new repo URL → push → connect/redeploy on Vercel.
