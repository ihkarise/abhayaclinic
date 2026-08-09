# ABHAYA Homoeopathic Medical Center Website

A modern, responsive web application for **ABHAYA Homoeopathic Medical Center** (Dr. Varun Vasudev), built with React 19, Vite, Tailwind CSS v4, Lucide Icons, and Motion animations.

---

## 🚀 Step-by-Step Guide: Export & Push to GitHub

### Method 1: Exporting directly from AI Studio (Easiest)

1. **Export to GitHub / Download ZIP**:
   - In the top right corner or settings menu of AI Studio, click on **Export** / **GitHub**.
   - If connected to GitHub, select **Export to GitHub** to automatically create a repository in your GitHub account.
   - Alternatively, choose **Download ZIP**, extract the folder on your computer, and follow Method 2 below.

---

### Method 2: Pushing to GitHub manually via Command Line

If you downloaded the code as a ZIP file:

1. Open your terminal / command prompt in the project folder.
2. Initialize a git repository and commit all files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ABHAYA Homeo Website"
   ```
3. Create a new repository on [GitHub](https://github.com/new).
4. Link your local repo and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## 🌐 Deploying Your Website

### Option A: GitHub Pages (Automated via GitHub Actions)

This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. Go to your GitHub repository on github.com.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**.
4. Every time you push or commit changes to `main`, GitHub Actions will automatically build and publish your website!

### Option B: Vercel or Netlify (1-Click Deployment)

- **Vercel**: Go to [vercel.com](https://vercel.com), click **Add New Project**, import your GitHub repository, and click **Deploy**.
- **Netlify**: Go to [netlify.com](https://netlify.com), click **Add new site** > **Import an existing project**, connect your repository, and deploy.

---

## 🛠️ Local Development & Editing

To edit and preview the project on your computer:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

- `src/App.tsx` - Main router configuration
- `src/layouts/Layout.tsx` - Layout wrapper with Header, Footer & Floating WhatsApp Widget
- `src/components/` - Reusable UI components (Header, Footer, WhatsAppWidget, ScrollToTop)
- `src/pages/` - Page components (Home, AllergyConditions, ConditionDetail, BookAppointment, etc.)
- `src/data/content.ts` - Medical conditions list & patient testimonials data
- `src/index.css` - Global Tailwind styling & typography rules
