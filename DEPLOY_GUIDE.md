# GitHub Pages Deployment Guide for Astagees-Ansari

Hosting your "Popinz Cake Bakers & Academy" website on GitHub Pages is a great way to show it to the world. Here is how to do it:

## 1. Create a Repository on GitHub
1. Go to [github.com](https://github.com/new).
2. Set the "Repository name" to something like `web-cake`.
3. Keep it "Public".
4. Do **not** initialize with a README, license, or .gitignore.
5. Click **Create repository**.

## 2. Initialize and Push your Code
Run these commands in your terminal (inside the project folder):

```powershell
git init
git add .
git commit -m "Initial commit - Premium Cake Website"
git branch -M main
git remote add origin https://github.com/Astagees-Ansari/web-cake.git
git push -u origin main
```

## 3. Deployment Steps (The Easy Way)

I have added a `deploy` script to your `package.json`. You can now deploy with just one command:

### Command to Deploy:
```powershell
npm run deploy
```

### What this script does:
1. Builds your project for Production.
2. Sets the `base-href` to your repo name (`/web-cake/`).
3. Uses `angular-cli-ghpages` to push the `dist` folder to a special `gh-pages` branch.

## 4. Final Step on GitHub
1. After running `npm run deploy`, wait a few minutes.
2. Go to your repo settings: **Settings > Pages**.
3. Under **Build and deployment**, ensure the **Branch** is set to `gh-pages` and the folder is `/(root)`.
4. Your site will be live at: `https://Astagees-Ansari.github.io/web-cake/`

---
> [!IMPORTANT]
> **Routing Note:** GitHub Pages doesn't naturally support Angular routes on page refresh. I have enabled **Hash Routing** (it will add a `#` in the URL) to ensure your "Contact" and other pages work perfectly when shared or refreshed.
