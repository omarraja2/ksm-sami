# KSM Document Clearing — Website

Multi-page React website for KSM (business setup in Dubai).
Built with Vite + React + Tailwind CSS v4.

## Run locally
    npm install
    npm run dev
Open http://localhost:5173

## Build for production
    npm run build

## Deploy on Vercel
1. Push this folder to a GitHub repository
2. On vercel.com: Add New -> Project -> import the repo
3. Vercel auto-detects Vite. Click Deploy.

## Before going live
- Replace the phone number (+971 5X XXX XXXX) in src/KSMWebsiteMultiPage.jsx
- Replace the email (info@ksm.ae) if different
- Adjust package prices in the PACKAGES and ESTIMATOR_BASE constants
