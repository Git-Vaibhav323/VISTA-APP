# VISTA - Street Food Supply Chain Platform


**Connect. Supply. Grow.**

A comprehensive B2B platform revolutionizing the Indian street food supply chain by connecting vendors and suppliers through technology, data, and trusted networks.

## 🚀 Features

### For Street Food Vendors
- **Smart Inventory Management** - Real-time stock tracking and automated reordering
- **Supplier Discovery** - Find and connect with verified suppliers in your area
- **Order Management** - Place orders, track deliveries, and manage payments
- **Analytics Dashboard** - Insights into spending patterns and supplier performance
- **Digital Wallet** - Secure payment system with load, transfer, and refund capabilities

### For Suppliers
- **Product Catalog Management** - Easy inventory updates and pricing controls
- **Order Processing** - Real-time order notifications and fulfillment tracking
- **Vendor Network** - Connect with street food vendors across regions
- **Performance Analytics** - Track sales, customer satisfaction, and growth metrics
- **Delivery Optimization** - Route planning and delivery tracking

### Platform Features
- **Multi-role Authentication** - Separate interfaces for vendors and suppliers
- **Real-time Notifications** - OTP verification and order updates
- **Government Schemes Integration** - Access to MSME schemes and subsidies
- **Learning Resources** - Educational content for business growth
- **Review & Rating System** - Build trust through community feedback

## 🛠️ Tech Stack

### Backend
- **Node.js** + **TypeScript** + **Express.js**
- **Firebase Firestore** (Database)
- **JWT** (Authentication)
- **Zod** (Validation)
- **Demo OTP Service** (No external SMS API required)

### Frontend
- **Next.js 15** + **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **shadcn/ui** (Component Library)

### Additional Services
- **Razorpay** (Payment Processing)
- **GeminiAPI** (Sentiment Analysis for Reviews)

## 📦 Project Structure

```
VISTA/
├── src/                    # Backend source code
│   ├── config/            # Database and app configuration
│   ├── controllers/       # API route handlers
│   ├── middleware/        # Authentication and validation
│   ├── models/           # Data models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── server.ts         # Main server file
├── VISTA-main/           # Frontend application
│   └── VISTA-main/
│       ├── app/          # Next.js pages and routes
│       ├── components/   # React components
│       ├── public/       # Static assets
│       └── styles/       # CSS and styling
├── package.json          # Backend dependencies
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Git-Vaibhav323/VISTA-APP.git
   cd VISTA-APP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   # Create .env file in root directory
   PORT=5000
   JWT_SECRET=your_secret_key_here
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd VISTA-main/VISTA-main
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the frontend**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - OTP verification

### Vendors
- `GET /api/vendors/suppliers` - Get available suppliers
- `POST /api/vendors/orders` - Place new order
- `GET /api/vendors/orders` - Get order history

### Suppliers
- `GET /api/suppliers/products` - Get product catalog
- `POST /api/suppliers/products` - Add new product
- `PUT /api/suppliers/inventory` - Update inventory

### Wallet
- `POST /api/wallet/load` - Load wallet
- `POST /api/wallet/transfer` - Transfer funds
- `GET /api/wallet/balance` - Get wallet balance

## 🚀 Deployment

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set build command: `npm install && npm run build`
3. Set start command: `npm start`
4. Add environment variables in Render dashboard

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set root directory to `VISTA-main/VISTA-main`
3. Vercel will auto-detect Next.js and deploy
4. Add environment variables in Vercel dashboard

## 📱 Demo Features

The application includes demo features for testing:
- **Demo OTP Service** - OTPs are logged to console instead of SMS
- **Demo Mode** - Works without Firebase service account
- **Sample Data** - Pre-populated with demo vendors and suppliers

## 🎨 UI/UX Features

- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Theme switching capability
- **Smooth Animations** - Framer Motion powered transitions
- **Modern UI** - Clean, professional interface
- **Accessibility** - WCAG compliant components

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Input Validation** - Zod schema validation
- **CORS Protection** - Cross-origin request handling
- **Rate Limiting** - API request throttling
- **Data Encryption** - Sensitive data protection

## 📊 Performance

- **Server-side Rendering** - Fast initial page loads
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Next.js image optimization
- **Caching** - Efficient data caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Team Contributions

### Frontend
- **Sahil Poply** - React/Next.js development, UI components, and user interface implementation

### Backend
- **Vaibhav Dwivedi** - Node.js/Express.js API development, database design, and server-side logic

### Firebase
- **Aryaman Kumar Singh** - Firebase Firestore integration, real-time database management, and cloud services

### UI/UX
- **Soumya Goel** - User experience design, interface design, and visual design implementation

### API Keys & Configuration
- **Suyash Agrawaal** - API integration, third-party service configuration, and security management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Street Food Vendors** - For inspiring this platform
- **MSME Schemes** - Government support for small businesses
- **Open Source Community** - For amazing tools and libraries

## 📞 Support

For support, email support@vista-app.com or create an issue in this repository.

---

**Made with ❤️ in India for Indian Street Food Entrepreneurs**

*VISTA - Empowering the backbone of India's food culture* 
