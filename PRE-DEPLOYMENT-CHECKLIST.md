# ✅ Pre-Deployment Checklist

## Files Ready for GitHub Push

### ✅ Backend Files
- [x] `backend/server.js` - Updated with Vercel export
- [x] `backend/package.json` - Added type: module and Node version
- [x] `backend/vercel.json` - Vercel configuration
- [x] `backend/.env.example` - Template for environment variables
- [x] `backend/.gitignore` - Ignoring node_modules and .env
- [x] `backend/.env` - **NOT tracked** (contains your API keys)

### ✅ Frontend Files
- [x] `frontend/src/config/api.js` - API URL configuration
- [x] `frontend/src/components/Contact.jsx` - Using API_URL
- [x] `frontend/src/pages/WebServices.jsx` - Using API_URL
- [x] `frontend/src/pages/AppServices.jsx` - Using API_URL
- [x] `frontend/.env.example` - Template for local development
- [x] `frontend/.env.production` - Template for production (update after backend deploy)
- [x] `frontend/.gitignore` - Ignoring node_modules, .env, and dist
- [x] `frontend/.env` - **NOT tracked** (local development)
- [x] `frontend/vercel.json` - Client-side routing config

### ✅ Root Files
- [x] `.gitignore` - Comprehensive ignore rules
- [x] `DEPLOYMENT.md` - Deployment instructions
- [x] `PRE-DEPLOYMENT-CHECKLIST.md` - This file

## 🔍 Final Verification

Run these commands to verify everything is correct:

```bash
# Check what will be committed
git status

# Verify .env files are NOT listed (should be ignored)
# You should see:
# - Modified files (M)
# - New files (??)
# - But NO .env files (except .env.example and .env.production)
```

## 📝 Environment Variables to Set in Vercel

### Backend Environment Variables
```
RESEND_API_KEY=re_durs7JXc_E4VNMDSfQy27kWJj6dpib2Ff
RECEIVER_EMAIL=flinetic.info@gmail.com
```

### Frontend Environment Variables
```
VITE_API_URL=https://your-backend-url.vercel.app
```
(Update this AFTER deploying backend)

## 🚀 Ready to Push?

If all checks pass, run:

```bash
# Stage all changes
git add .

# Commit
git commit -m "Prepare for Vercel deployment - Add backend/frontend configs"

# Push to GitHub
git push origin main
```

## 📋 Next Steps After Push

1. **Deploy Backend First**
   - Go to vercel.com
   - Import your repo
   - Set root directory: `backend`
   - Add environment variables
   - Copy backend URL

2. **Update Frontend .env.production**
   - Update `VITE_API_URL` with your backend URL
   - Commit and push this change

3. **Deploy Frontend**
   - Create new project in Vercel
   - Import same repo
   - Set root directory: `frontend`
   - Add environment variable: `VITE_API_URL`
   - Deploy

4. **Update Google Apps Script**
   - Update CORS headers with your frontend URL

## ⚠️ Important Notes

- **Never commit .env files** - They contain sensitive API keys
- **Deploy backend BEFORE frontend** - Frontend needs backend URL
- **Test locally first** - Make sure everything works with localhost
- **Update Google Apps Script CORS** - After frontend deployment

## 🧪 Local Testing Before Deploy

```bash
# Backend
cd backend
npm install
node server.js

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

Test all three forms:
- Contact form
- Web Services form
- App Services form

Verify:
- ✅ Data saves to Google Sheets
- ✅ Emails are sent
- ✅ No console errors
