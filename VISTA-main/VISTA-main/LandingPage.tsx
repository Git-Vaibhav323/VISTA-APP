import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VistaLogo } from "@/components/vista-logo";
import { Users, Package, TrendingUp, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated Gradient Blur Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-br from-[#14B8A6]/40 via-[#0D9488]/30 to-[#2DD4BF]/20 blur-3xl opacity-70 rounded-full" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 w-full py-4 px-4 md:px-12 flex items-center bg-background/80 backdrop-blur-md shadow-sm">
        {/* Logo with glow */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center group mx-auto">
            <VistaLogo className="h-10 w-10 transition-shadow group-hover:shadow-[0_0_16px_4px_rgba(124,58,237,0.4)]" />
            <span className="ml-2 text-xl font-bold text-foreground">VISTA</span>
          </Link>
        </div>
        {/* Nav Links - Centered */}
        <nav className="flex-1 flex items-center justify-center">
          <ul className="flex gap-12 text-lg font-medium">
            <li>
              <a href="#features" className="relative px-2 py-1 text-muted-foreground hover:text-primary transition-colors group">
                Features
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            </li>
            <li>
              <a href="#about" className="relative px-2 py-1 text-muted-foreground hover:text-primary transition-colors group">
                About
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            </li>
          </ul>
        </nav>
        {/* Get Started Button */}
        <div className="flex-1 flex items-center justify-end">
          <Link href="/login">
            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full px-6 py-2 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent">
          Revolutionizing<br />Street Food Supply
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-150">
          The all-in-one platform connecting street food vendors and suppliers for a smarter, faster, and more profitable supply chain.
        </p>
        <div className="mt-8 animate-fade-in-up delay-300">
          <Link href="/login">
            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Floating Animated Gradient Element */}
      <div className="absolute right-0 top-1/3 w-60 h-60 bg-gradient-to-br from-[#2DD4BF]/40 via-[#14B8A6]/30 to-[#0D9488]/20 rounded-full blur-2xl opacity-60 animate-pulse-slow z-0" />

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="flex flex-col items-center p-6 rounded-xl bg-background/80 shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Vendor Network</h3>
              <p className="text-muted-foreground">Connect instantly with thousands of verified vendors and suppliers.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-background/80 shadow-md hover:shadow-lg transition-shadow">
              <Package className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Inventory</h3>
              <p className="text-muted-foreground">Track, manage, and optimize your inventory with intelligent analytics.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-background/80 shadow-md hover:shadow-lg transition-shadow">
              <TrendingUp className="h-10 w-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Insights</h3>
              <p className="text-muted-foreground">Unlock actionable insights to grow your business and revenue.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-background/80 shadow-md hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 text-teal-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">All transactions are protected with bank-grade security and encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 md:px-0 bg-gradient-to-br from-muted/20 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            About VISTA
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            VISTA is on a mission to revolutionize the street food supply chain in India. We empower vendors and suppliers with technology, data, and a trusted network to grow their businesses and serve communities better.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <div className="bg-background/80 rounded-xl p-6 shadow-md flex-1 min-w-[250px]">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <div className="flex flex-col gap-2 text-left text-muted-foreground">
                <span><span className="font-medium">Email:</span> hello@vista.com</span>
                <span><span className="font-medium">Phone:</span> +91 98765 43210</span>
                <span><span className="font-medium">Address:</span> Mumbai, Maharashtra, India</span>
                <span><span className="font-medium">Support:</span> 24/7 Customer Support</span>
              </div>
            </div>
            <div className="flex-1 min-w-[250px] flex flex-col gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#7C3AED] transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254A4.904 4.904 0 0 1 .964 10.1v.062a4.926 4.926 0 0 0 3.946 4.827c-.497.135-1.022.207-1.563.207-.382 0-.752-.037-1.112-.106.753 2.348 2.938 4.057 5.523 4.102A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#7C3AED] transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#F97316] hover:text-[#7C3AED] transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 