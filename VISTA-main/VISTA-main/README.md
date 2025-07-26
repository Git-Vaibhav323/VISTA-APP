# VISTA - Street Food Supply Platform

A modern, animated B2B platform connecting Indian street food vendors with reliable suppliers through intelligent supply chain management.

## 🚀 Features

### Frontend
- **Modern UI/UX** with Framer Motion animations
- **Responsive Design** for all devices
- **Dark/Light Theme** support
- **Phone Authentication** (Firebase integration ready)
- **Dashboard** with vendor/supplier management
- **Real-time Stats** and analytics
- **Learning Section** with YouTube integration

### Pages
- **Landing Page** - Beautiful animated homepage
- **Login/Signup** - Phone number authentication
- **Dashboard** - Vendor and supplier dashboards
- **Settings** - User preferences and configuration

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.2.4** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Declarative animations
- **Lucide React** - Beautiful icons
- **shadcn/ui** - Modern UI components

### Development Tools
- **pnpm** - Fast package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd vista-logistics
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Start Development Server

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

### 4. Open Your Browser

Navigate to `http://localhost:3000` to see your application.

## 📁 Project Structure

```
vista-logistics/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── login/             # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── vendor-dashboard/  # Vendor-specific dashboard
│   ├── supplier-dashboard/ # Supplier-specific dashboard
│   └── settings/          # Settings pages
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── vista-logo.tsx    # VISTA logo component
│   └── theme-*.tsx       # Theme components
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── images/           # Image files
├── styles/               # Additional styles
└── package.json          # Dependencies and scripts
```

## 🎨 Available Pages

### Main Pages
- **`/`** - Landing page with animations
- **`/login`** - Phone authentication
- **`/dashboard`** - Main dashboard
- **`/vendor-dashboard`** - Vendor dashboard
- **`/supplier-dashboard`** - Supplier dashboard
- **`/settings`** - User settings

## 🔧 Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Run type checking
pnpm type-check
```

## 🎭 Animations

The project uses **Framer Motion** for smooth animations:

- **Text Animations** - Slide-in effects for headings
- **Component Animations** - Fade-in and scale effects
- **Page Transitions** - Smooth navigation
- **Hover Effects** - Interactive elements

## 🎨 UI Components

Built with **shadcn/ui** components:

- **Cards** - Information containers
- **Buttons** - Interactive elements
- **Inputs** - Form controls
- **Tabs** - Content organization
- **Badges** - Status indicators
- **Modals** - Overlay dialogs

## 📱 Responsive Design

The application is fully responsive:

- **Mobile-first** approach
- **Breakpoints** for all screen sizes
- **Touch-friendly** interactions
- **Optimized** for all devices

## 🌙 Theme Support

- **Dark Mode** - Modern dark theme
- **Light Mode** - Clean light theme
- **System Preference** - Auto-detection
- **Manual Toggle** - User control

## 🔐 Authentication (Ready for Integration)

The login system is prepared for Firebase integration:

- **Phone Authentication** - OTP-based login
- **User Types** - Vendor/Supplier selection
- **Session Management** - Ready for backend
- **Security** - reCAPTCHA integration

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

### Other Platforms

The app can be deployed to:
- **Netlify**
- **Railway**
- **Heroku**
- **AWS Amplify**

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. **Check** the console for errors
2. **Verify** all dependencies are installed
3. **Ensure** Node.js version is compatible
4. **Clear** browser cache if needed

## 🎯 Next Steps

### Backend Integration
- **API Routes** - RESTful endpoints
- **Database** - PostgreSQL with Prisma
- **Authentication** - JWT tokens
- **Payment** - Stripe/Razorpay integration

### Additional Features
- **Real-time Chat** - Vendor-supplier communication
- **Order Management** - Complete order lifecycle
- **Analytics** - Business insights
- **Notifications** - Push notifications

---

**Built with ❤️ for the Indian street food community** 