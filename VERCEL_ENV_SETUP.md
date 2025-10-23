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
- **Value**: 
```
{"type":"service_account","project_id":"quiet-engine-474303-i5","private_key_id":"80dd2cfab905bfc5d19cdc60a07ade2c23bf433f","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCz6D06k7mY7hXY\nWhclgSzNHOgHp/+/PX9Y6rcyLZQ42SMFuEV+gZv9B3XTOzHdcZd6KN65q4S/yaDj\ntmzQ5yRhcrf3m/YAl8EwZbVsoyBBHI/AKmXQpnJoSFd1gLbKbKudF4dQdXZ0clrn\nxxAye0eKfzqPI7MQdBbgxQTy+CoeZ7L/Txu2zRBOZ1ZnWGyaJ7/slA/n60rcop2q\nKG+XtqUO5yx1mHOjzEUQCcJgyMEV49NXWuIeso1T1jrSOyaoQFeLq4qp3TphTmSU\nEF5Nna/qRKrezuVIeqgID51qaIvLePcaX76Siq6kNEnAH4WeeaLzI7OtpUQr0fgx\nkclKx6dtAgMBAAECggEAAIQeCNj7o1Crh19ayaTBOCVpFPyKY0YN43do5x/yWOdm\njlGlAWPlyqgG0oBM+FGnGZacbPPtAY/WglC3pzHCjPUDShaMchv9VeI0zwb4xLcM\nQoTcneicU2hBt/iSjaoaI+05WiW8HUFmuVt81Gg+IEuVI2v6y4VJu4NVLE1B8axh\nPwlvr7+w1aPqmch2YZxPw0olGioXF06sRI/eaBDogvKVjFLZPWc6griRTpr1HwNP\njosL4eRAKoFSO1lot0Gv8NPjRkiAc9gpKukXXu1SVCxBHp43EpONT/4lvVYSMJa9\ncTHY3bIIW/GiTvXhpBFWUbX2m+J1rLxxFwTcLLPCgQKBgQDmwgTV81yFeMvaPzgk\nlZU0t9QCDCP6/PDH4hfWfDqKhaTTyBnPB9Y8eHDHndxqhaWzSBLKzaXw1ZcXWu1C\nVTAieGBadke62i6o8qhRF6CsjOKV+9MhVPWnWw+g1j6cnFwUTN7a0Leu2SuD52th\nDbdrLjUp8ZrrEilVlfHUwS06lQKBgQDHljuro5tSjca7NEuhym/+Ic/can7LP1XR\nYGO0bh64sJ5EYLL7ak1Mvvr74z5pquN6IYYmYTViRcDbvpoO/ha/RIxpKP61hknt\n6pX3ZhEXHfNirWvYqSMch5uVyuPFbzVauK8a2Rx07nKkWysnW66gjhQ69oAN8KYm\nEMygtURbeQKBgQCtCodHzWPvLwNnGQtH2+f0jXltQ59jonQI4BHSJHxdzhQpQB+i\ncZUE6ahg+I8GTkxQodZ9wDMU44aW2/eZS3p6DtzqWVI221AsHzN7BAXX/xoXMK1F\njIleQ1n32VFAbbxa+L4RRnzHoFESa+LI99k4hYEWf/gVGRxn8rZTPb1l9QKBgHP2\niAj78D0Q/wy6H8+LTXK8tob8oVr6G6SheozVBqiMhgh4nsWRSAR1WmKL8DF5Bt5p\nKAaYqGnG2X1TyzM20oSjEWnwVb2mnsHLcQLjnL5vun/0/xpNe4cSC4YG8jw+lyN0\n9tiEmRIfkSCJkBM4I8hJhNuVaWWwEvk+/YXKjEMRAoGARpKEfi64nAAhDjF511jf\nDdzT1N+JgUxhJ53aQwW1pJ+haVPQZ+9smA6IwvIejVtIVBkGBoxWrnasg78A/4cl\nF0qjJwpYV792yHalCPqb1tKLcZM2AbFYp/eDaDaAK3lFdsEbAkgmDg8tzJwAHzGb\nfViXGgoKwTUCnVw3SUxe93Q=\n-----END PRIVATE KEY-----\n","client_email":"dialogflow-service-account@quiet-engine-474303-i5.iam.gserviceaccount.com","client_id":"105881445248116920450","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-service-account%40quiet-engine-474303-i5.iam.gserviceaccount.com","universe_domain":"googleapis.com"}
```
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
