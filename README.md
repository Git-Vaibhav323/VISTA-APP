# VISTA Backend

A logistics-focused B2B web app backend connecting Indian street food vendors and raw material suppliers.

## Tech Stack
- Node.js + TypeScript + Express
- MongoDB (Mongoose)
- JWT for authentication
- Zod for validation
- Twilio (OTP)
- Razorpay (Payments)
- OpenAI (Sentiment Analysis)

## Features
- Vendor/Supplier roles, authentication
- Live inventory, price tracking
- Wallet system (load, refund, transfer)
- OTP verification for orders
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
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE=your_twilio_phone
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
OPENAI_API_KEY=your_openai_api_key
```

## API Keys
- [Twilio](https://www.twilio.com/try-twilio)
- [Razorpay](https://razorpay.com/signup)
- [OpenAI](https://platform.openai.com/signup)
- [MongoDB Atlas](https://cloud.mongodb.com)

---

## Folder Structure
- `src/models` - Mongoose models
- `src/controllers` - Route logic
- `src/routes` - Express routes
- `src/services` - Business logic
- `src/middlewares` - Auth, validation, error handling
- `src/utils` - Helpers
- `src/config` - DB, env config 