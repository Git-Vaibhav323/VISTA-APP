"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { VistaLogo } from "@/components/vista-logo"
import Link from "next/link"
import {
  Phone,
  MessageSquare,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Package,
  TrendingUp,
  Star,
  Sparkles,
  Lock,
  Smartphone,
} from "lucide-react"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const [userType, setUserType] = useState<"vendor" | "supplier">("vendor")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendOTP = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setStep("otp")
    setIsLoading(false)
  }

  const handleVerifyOTP = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect based on user type
    if (userType === "vendor") {
      window.location.href = "/vendor-dashboard"
    } else {
      window.location.href = "/supplier-dashboard"
    }
    setIsLoading(false)
  }

  const benefits = [
    {
      icon: Zap,
      title: "Instant Access",
      description: "Get started in under 2 minutes",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Bank-grade security for all transactions",
    },
    {
      icon: Users,
      title: "Trusted Network",
      description: "Join 10,000+ verified users",
    },
  ]

  const stats = [
    { number: "10K+", label: "Active Users", icon: Users },
    { number: "50K+", label: "Products", icon: Package },
    { number: "₹100Cr+", label: "Monthly GMV", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div variants={floatingVariants} animate="animate" className="absolute top-20 left-10 opacity-10">
        <Package className="h-24 w-24 text-primary" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 opacity-10"
        style={{ animationDelay: "1s" }}
      >
        <Users className="h-32 w-32 text-primary" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 left-1/4 opacity-10"
        style={{ animationDelay: "2s" }}
      >
        <TrendingUp className="h-20 w-20 text-primary" />
      </motion.div>

      {/* Header */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <VistaLogo size="md" showText={true} />
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Sign In
            </Button>
            <Link href="/dashboard">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all duration-200">
                Next Page
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits & Info */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="h-4 w-4" />
                Join the Revolution
              </motion.div>

              <h1 className="text-3xl lg:text-5xl font-bold leading-tight flex flex-col gap-1">
                <motion.span
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="block"
                >
                  Welcome to the Future of
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                  className="text-primary block"
                >
                  Street Food Supply
                </motion.span>
              </h1>

              <div className="text-xl text-muted-foreground leading-relaxed">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.2 }}
                  className="block"
                >
                  Connect with thousands of vendors and suppliers.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.5 }}
                  className="block"
                >
                  Streamline your operations.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.8 }}
                  className="block"
                >
                  Grow your business with VISTA's intelligent platform.
                </motion.span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants} className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Shield className="w-3 h-3 mr-1" />
                Secure Platform
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Star className="w-3 h-3 mr-1" />
                4.9/5 Rating
              </Badge>
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl"></div>

            <Card className="relative backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
              <CardHeader className="text-center space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <CardTitle className="text-2xl font-bold">
                    {step === "phone" ? "Get Started" : "Verify OTP"}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {step === "phone"
                      ? "Enter your phone number to continue"
                      : `We've sent a 6-digit code to ${phoneNumber}`}
                  </CardDescription>
                </motion.div>

                {/* User Type Selection */}
                {step === "phone" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Tabs
                      value={userType}
                      onValueChange={(value) => setUserType(value as "vendor" | "supplier")}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="vendor" className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Vendor
                        </TabsTrigger>
                        <TabsTrigger value="supplier" className="flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          Supplier
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </motion.div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">

                
                <AnimatePresence mode="wait">
                  {step === "phone" ? (
                    <motion.div
                      key="phone"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="pl-12 text-lg h-12"
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                            🇮🇳
                          </div>
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          onClick={handleSendOTP}
                          disabled={!phoneNumber || isLoading}
                          className="w-full h-12 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Sending OTP...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <MessageSquare className="h-5 w-5" />
                              Send OTP
                              <ArrowRight className="h-5 w-5" />
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="otp"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="otp" className="flex items-center gap-2">
                          <Lock className="h-4 w-4" />
                          Enter OTP
                        </Label>
                        <Input
                          id="otp"
                          type="text"
                          placeholder="123456"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="text-center text-2xl font-mono h-12 tracking-widest"
                          maxLength={6}
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setStep("phone")} className="flex-1">
                          Back
                        </Button>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button
                            onClick={handleVerifyOTP}
                            disabled={otp.length !== 6 || isLoading}
                            className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                          >
                            {isLoading ? (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Verifying...
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Verify & Continue
                              </div>
                            )}
                          </Button>
                        </motion.div>
                      </div>

                      <div className="text-center">
                        <Button variant="link" className="text-sm">
                          Didn't receive code? Resend
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Security Notice */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg"
                >
                  <Smartphone className="h-4 w-4 flex-shrink-0" />
                  <span>
                    We'll send you a secure OTP to verify your phone number. Your data is protected with bank-grade
                    encryption.
                  </span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
