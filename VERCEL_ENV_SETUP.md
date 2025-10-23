# Vercel Environment Variables Setup - Exact Copy from Local

## 🚀 Your Local Environment Variables (Working):
```
GOOGLE_APPLICATION_CREDENTIALS=./credentials/dialogflow-service-account.json
DIALOGFLOW_CX_PROJECT_ID=quiet-engine-474303-i5
DIALOGFLOW_CX_LOCATION=global
DIALOGFLOW_CX_AGENT_ID=dc40fde4-0fde-43fc-9a7f-eaa65c0ef6ea
DIALOGFLOW_LANGUAGE_CODE=en-US
```

## 📋 Vercel Environment Variables Setup:

### Step 1: Go to Vercel Dashboard
1. Visit: https://vercel.com/dashboard
2. Find your project: `flighttracker`
3. Click on your project
4. Go to **Settings** → **Environment Variables**

### Step 2: Add These Exact Environment Variables:

#### Variable 1: GOOGLE_APPLICATION_CREDENTIALS_JSON
- **Name**: `GOOGLE_APPLICATION_CREDENTIALS_JSON`
- **Value**: [Use the JSON string from your service account file - run `node get-credentials.js ./credentials/dialogflow-service-account.json` to get the formatted string]
- **Environment**: Production, Preview, Development

#### Variable 2: DIALOGFLOW_CX_PROJECT_ID
- **Name**: `DIALOGFLOW_CX_PROJECT_ID`
- **Value**: `quiet-engine-474303-i5`
- **Environment**: Production, Preview, Development

#### Variable 3: DIALOGFLOW_CX_LOCATION
- **Name**: `DIALOGFLOW_CX_LOCATION`
- **Value**: `global`
- **Environment**: Production, Preview, Development

#### Variable 4: DIALOGFLOW_CX_AGENT_ID
- **Name**: `DIALOGFLOW_CX_AGENT_ID`
- **Value**: `dc40fde4-0fde-43fc-9a7f-eaa65c0ef6ea`
- **Environment**: Production, Preview, Development

#### Variable 5: DIALOGFLOW_LANGUAGE_CODE
- **Name**: `DIALOGFLOW_LANGUAGE_CODE`
- **Value**: `en-US`
- **Environment**: Production, Preview, Development

### Step 3: Save and Redeploy
1. Click **Save** after adding all variables
2. Go to **Deployments** tab
3. Click **Redeploy** on your latest deployment

### Step 4: Test
1. Visit your deployed app
2. Go to the chat page
3. Test the chatbot - it should work exactly like localhost!

## ✅ Success Checklist:
- [ ] All 5 environment variables added to Vercel
- [ ] All variables set for Production, Preview, Development
- [ ] Project redeployed
- [ ] Chatbot tested and working

## 🔧 Troubleshooting:
If it still doesn't work:
1. Visit: `https://your-app.vercel.app/api/debug`
2. Check if all variables show `true`
3. Check Vercel deployment logs for errors
