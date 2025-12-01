# Deployment Guide for Vercel

## Prerequisites
- GitHub account with your code pushed
- Vercel account (sign up at vercel.com)
- Your Resend API key

## Step 1: Deploy Backend

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New" → "Project"

2. **Import Backend Repository**
   - Select your GitHub repository
   - Click "Import"
   - **Important:** Set Root Directory to `backend`
   - Framework Preset: Other
   - Click "Deploy"

3. **Add Environment Variables (Backend)**
   - Go to Project Settings → Environment Variables
   - Add these variables:
     ```
     RESEND_API_KEY=re_durs7JXc_E4VNMDSfQy27kWJj6dpib2Ff
     RECEIVER_EMAIL=flinetic.info@gmail.com
     ```
   - Click "Save"

4. **Copy Backend URL**
   - After deployment, copy your backend URL (e.g., `https://your-backend.vercel.app`)

## Step 2: Deploy Frontend

1. **Create New Project in Vercel**
   - Click "Add New" → "Project"
   - Select the SAME GitHub repository
   - Click "Import"

2. **Configure Frontend**
   - **Root Directory:** Set to `frontend`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (should be auto-detected)
   - **Output Directory:** `dist` (should be auto-detected)

3. **Add Environment Variables (Frontend)**
   - Go to Project Settings → Environment Variables
   - Add this variable:
     ```
     VITE_API_URL=https://your-backend.vercel.app
     ```
   - Replace `your-backend.vercel.app` with your actual backend URL from Step 1
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

## Step 3: Update Google Apps Script CORS

Your Google Apps Script needs to allow requests from your new frontend domain:

1. Open your Google Apps Script
2. Update the CORS header in the `doPost` function:
   ```javascript
   .setHeader("Access-Control-Allow-Origin", "https://your-frontend.vercel.app")
   ```
3. Also add a `doGet` function for OPTIONS requests:
   ```javascript
   function doGet(e) {
     return ContentService.createTextOutput("OK")
       .setMimeType(ContentService.MimeType.TEXT)
       .setHeader("Access-Control-Allow-Origin", "https://your-frontend.vercel.app")
       .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
       .setHeader("Access-Control-Allow-Headers", "Content-Type");
   }
   ```

## Step 4: Test Your Deployment

1. Visit your frontend URL (e.g., `https://your-frontend.vercel.app`)
2. Test all three forms:
   - Contact form
   - Web Services form
   - App Services form
3. Verify:
   - Data appears in Google Sheets
   - Emails are received at flinetic.info@gmail.com

## Troubleshooting

### Forms not submitting
- Check browser console for errors
- Verify `VITE_API_URL` is set correctly in Vercel
- Check backend logs in Vercel dashboard

### CORS errors
- Update Google Apps Script CORS headers
- Ensure backend has `cors()` middleware enabled

### Environment variables not working
- Redeploy after adding environment variables
- Check variable names match exactly (case-sensitive)

## Automatic Deployments

Once set up, Vercel will automatically deploy:
- **Backend:** When you push to `main` branch and files in `backend/` change
- **Frontend:** When you push to `main` branch and files in `frontend/` change

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions
