"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { VistaLogo } from "@/components/vista-logo"
import { AnimatedGridBackground, DotBackground } from "@/components/ui/animated-backgrounds"
import TestimonialsCarousel from "@/components/ui/testimonials-carousel"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  Package,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  Smartphone,
  Globe,
  Zap,
  Heart,
  Award,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react"

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
    },
  },
}

export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [animatedText, setAnimatedText] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const tagline = "Connect. Supply. Grow."

  const features = [
    "Real-time inventory tracking",
    "Smart vendor matching",
    "Automated order processing",
    "Analytics & insights",
    "Secure payments",
    "24/7 support",
  ]

  const stats = [
    { number: "10,000+", label: "Active Vendors", icon: Users },
    { number: "50,000+", label: "Products Listed", icon: Package },
    { number: "₹100Cr+", label: "Monthly GMV", icon: TrendingUp },
    { number: "99.9%", label: "Uptime", icon: Shield },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Street Food Vendor",
      content:
        "VISTA transformed my business completely. I can now source quality ingredients at better prices with just a few clicks. The mobile app is incredibly user-friendly and has saved me hours every day!",
      rating: 5,
      location: "Mumbai",
      avatar: "https://cdn.pixabay.com/photo/2021/09/10/11/18/street-vendor-6612816_1280.jpg",
      company: "Kumar's Chaat Corner"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Supplier",
      content:
        "The platform helped me reach hundreds of vendors across the city. My sales have increased by 300%! The analytics dashboard gives me insights I never had before.",
      rating: 5,
      location: "Delhi",
      avatar: "https://1.bp.blogspot.com/-C5mEsLSuuSI/TpLvuwdHllI/AAAAAAAAAVg/cc3J-wjMhJ0/s1600/Street+Vendors.jpg",
      company: "Fresh Farm Supplies"
    },
    {
      id: 3,
      name: "Mohammed Ali",
      role: "Restaurant Owner",
      content:
        "Reliable supply chain and transparent pricing. VISTA is a game-changer for the food industry. Customer support is excellent and they're always there when I need help.",
      rating: 5,
      location: "Bangalore",
      avatar: "https://vidhilegalpolicy.in/wp-content/uploads/2021/06/IMG_1195-1024x768-1.jpeg",
      company: "Ali's Kitchen"
    },
    {
      id: 4,
      name: "Sunita Devi",
      role: "Street Food Vendor",
      content:
        "The mobile app is so easy to use. I can place orders while serving customers. Amazing experience! Delivery is always on time and the quality is consistent.",
      rating: 5,
      location: "Kolkata",
      avatar: "https://semart.my/media/2023/03/3-men-street-vendor.png",
      company: "Sunita's Street Delights"
    },
    {
      id: 5,
      name: "Arjun Patel",
      role: "Supplier",
      content:
        "VISTA's analytics helped me understand market demand better. My inventory management improved significantly. The platform is very intuitive and easy to navigate.",
      rating: 5,
      location: "Ahmedabad",
      avatar: "https://i.pinimg.com/originals/69/2a/f9/692af921d4f38ac7f260f39763d7d5b7.jpg",
      company: "Patel Wholesale"
    },
    {
      id: 6,
      name: "Lakshmi Reddy",
      role: "Restaurant Owner",
      content:
        "Fast delivery and quality products. VISTA has become an essential part of our daily operations. Highly recommend to all food businesses looking to streamline their supply chain!",
      rating: 5,
      location: "Hyderabad",
      avatar: "https://th-i.thgim.com/public/incoming/2shp3r/article65691125.ece/alternates/LANDSCAPE_1200/Street%20Vendors_3.jpg",
      company: "Reddy's Restaurant"
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automated processes reduce manual work by 80%",
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Better pricing and wider reach boost profits",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payments",
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      description: "Make informed decisions with real-time analytics",
    },
  ]

  // Animated tagline effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= tagline.length) {
        setAnimatedText(tagline.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Feature cycling effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        className="border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <VistaLogo size="md" showText={true} />
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-12">
                {/* Navigation links removed */}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/login">
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Get Started
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden border-t border-border/40 mt-4 pt-4"
              >
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="#features" 
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    href="#about" 
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <div className="pt-2 border-t border-border/40">
                    <Link href="/login">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full justify-start text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section with Animated Grid Background */}
      <AnimatedGridBackground
        className="relative overflow-hidden"
        gridSize={40}
        gridColor="#14b8a6"
        darkGridColor="#2dd4bf"
        fadeIntensity={25}
        animationSpeed={30}
      >
        <section className="relative py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center space-y-8"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight flex flex-col gap-2">
                  <motion.span
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="text-gradient block"
                  >
                    Revolutionizing
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="text-gradient block"
                  >
                    Street Food Supply
                  </motion.span>
                </h1>

                <motion.div
                  className="text-xl md:text-2xl text-muted-foreground font-medium min-h-[2rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {animatedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="text-primary"
                  >
                    |
                  </motion.span>
                </motion.div>
              </motion.div>

              <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.2 }}
                  className="block"
                >
                  Connecting Indian street food vendors with reliable suppliers through our intelligent B2B platform.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.5 }}
                  className="block"
                >
                  Streamline your supply chain, reduce costs, and grow your business.
                </motion.span>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/login">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-xl transition-all duration-300 hover-glow"
                    >
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <a
                  href="https://youtu.be/ua9L9Byfe2o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-8 py-6 text-lg font-medium border border-input bg-transparent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-transform hover-lift border-gradient-hover hover:text-black hover:bg-white text-slate-700 rounded-md"
                >
                  Watch Demo
                </a>
              </motion.div>

              {/* Dynamic Feature Display */}
              <motion.div variants={itemVariants} className="mt-12">
                <p className="text-sm text-muted-foreground mb-4">Trusted for:</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-semibold text-gradient"
                  >
                    {features[currentFeature]}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div variants={floatingVariants} animate="animate" className="absolute top-20 left-10 opacity-20">
            <Package className="h-16 w-16 text-primary" />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-40 right-10 opacity-20"
            style={{ animationDelay: "1s" }}
          >
            <Users className="h-20 w-20 text-primary" />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-20 left-1/4 opacity-20"
            style={{ animationDelay: "2s" }}
          >
            <TrendingUp className="h-12 w-12 text-primary" />
          </motion.div>
        </section>
      </AnimatedGridBackground>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:shadow-lg transition-all duration-300 hover-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">VISTA</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform is designed specifically for the Indian street food ecosystem, providing tools and features
              that understand your unique needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group hover-lift"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gradient-hover">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-interactive rounded-2xl p-8 backdrop-blur-sm border border-primary/20 hover-lift">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Mobile-First Design</h4>
                      <p className="text-sm text-white/80">Optimized for on-the-go usage</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Multi-Language Support</h4>
                      <p className="text-sm text-white/80">Available in Hindi, English & regional languages</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Lightning Fast</h4>
                      <p className="text-sm text-white/80">Optimized for Indian network conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Contact */}
      <section id="about" className="py-20 bg-gradient-to-br from-muted/20 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">VISTA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing the Indian street food supply chain through technology and innovation. 
              Our mission is to connect vendors and suppliers seamlessly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gradient">Our Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2024, VISTA emerged from a simple observation: street food vendors across India 
                  struggled with inconsistent supply chains and limited access to quality ingredients. We built 
                  a platform that bridges this gap, creating opportunities for both vendors and suppliers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we serve thousands of vendors and suppliers across major Indian cities, helping them 
                  grow their businesses while maintaining the authentic flavors that make Indian street food 
                  so special.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gradient">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to quality ingredients and create a sustainable, transparent supply 
                  chain that benefits everyone in the street food ecosystem.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-interactive rounded-2xl p-8 backdrop-blur-sm border border-primary/20 hover-lift">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-sm text-white/80">hello@vista.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-sm text-white/80">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Address</h4>
                      <p className="text-sm text-white/80">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Support Hours</h4>
                      <p className="text-sm text-white/80">24/7 Customer Support</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      Twitter
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      Instagram
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Testimonials Carousel Section */}
      <TestimonialsCarousel
        items={testimonials}
        autoRotate={true}
        rotateInterval={6000}
        cardHeight={500}
        title="What Our Users Say"
        tagline="Join thousands of vendors and suppliers who have transformed their business with VISTA"
      />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-interactive rounded-3xl p-12 lg:p-20 border border-primary/20 hover-lift"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join the VISTA community today and experience the future of street food supply chain management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Link href="/login">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <a
                  href="https://youtu.be/ua9L9Byfe2o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-8 py-6 text-lg font-medium border border-white bg-transparent text-white hover:bg-white/10 hover:scale-105 transition-transform rounded-md"
                >
                  Watch Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <VistaLogo size="md" />
              <p className="text-muted-foreground">
                Revolutionizing the Indian street food supply chain through technology and innovation.
              </p>
              <div className="flex items-center gap-4">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  <Heart className="w-3 h-3 mr-1" />
                  Made in India
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    For Vendors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    For Suppliers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2024 VISTA. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="secondary">
                <Award className="w-3 h-3 mr-1" />
                ISO Certified
              </Badge>
              <Badge variant="secondary">
                <Shield className="w-3 h-3 mr-1" />
                Secure Platform
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
