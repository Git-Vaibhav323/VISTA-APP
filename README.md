# VISTA Backend

A logistics-focused B2B web app backend connecting Indian street food vendors and raw material suppliers.

## Tech Stack
- Node.js + TypeScript + Express
- Firebase Firestore (replacing MongoDB)
- JWT for authentication
- Zod for validation
- Demo OTP service (no external SMS API required)
- Razorpay (Payments)
- OpenAI (Sentiment Analysis)

## Features
- Vendor/Supplier roles, authentication
- Live inventory, price tracking
- Wallet system (load, refund, transfer)
- Demo OTP verification for orders (logs to console)
- Delivery tracking
- Group orders, backup vendor logic
- Reviews with AI sentiment
- Coupons, discounts, trust score

## Setup
1. Clone repo
2. `npm install`
3. Create `.env` (see below)
4. `npm run dev`

## .env Example
```
PORT=5000
FIREBASE_SERVICE_ACCOUNT_PATH=./firebaseServiceAccountKey.json
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
OPENAI_API_KEY=your_openai_api_key
```

## API Keys (Optional for Demo)
- [Razorpay](https://razorpay.com/signup) - for payments
- [OpenAI](https://platform.openai.com/signup) - for sentiment analysis
- [Firebase](https://console.firebase.google.com/) - for database

---

## Folder Structure
- `src/models` - Firebase Firestore collections
- `src/controllers` - Route logic
- `src/routes` - Express routes
- `src/services` - Business logic
- `src/middlewares` - Auth, validation, error handling
- `src/utils` - Helpers
- `src/config` - Firebase, env config 