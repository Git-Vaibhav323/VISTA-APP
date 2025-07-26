"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VistaLogo } from "@/components/vista-logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedGridBackground } from "@/components/ui/animated-backgrounds";
import Link from "next/link";
import {
  Users,
  Package,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  BarChart3,
  Truck,
  Plus,
  Search,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  LayoutDashboard,
  Shield,
} from "lucide-react";

const quickActionsVendor = [
  { icon: Search, label: "Browse Suppliers" },
  { icon: ShoppingCart, label: "Place Order" },
  { icon: Truck, label: "Track Delivery" },
  { icon: BarChart3, label: "View Analytics" },
];
const quickActionsSupplier = [
  { icon: Package, label: "Manage Products" },
  { icon: ShoppingCart, label: "View Orders" },
  { icon: Plus, label: "Update Inventory" },
  { icon: LayoutDashboard, label: "Analytics Dashboard" },
];

const statsVendor = [
  { icon: Users, label: "Active Suppliers", value: "12" },
  { icon: ShoppingCart, label: "Total Orders", value: "47" },
  { icon: DollarSign, label: "Monthly Spend", value: "₹45,200" },
  { icon: Clock, label: "Avg. Delivery Time", value: "2.5 hrs" },
];
const statsSupplier = [
  { icon: Package, label: "Total Products", value: "156" },
  { icon: ShoppingCart, label: "Active Orders", value: "23" },
  { icon: Users, label: "Connected Vendors", value: "89" },
  { icon: DollarSign, label: "Monthly Revenue", value: "₹2,45,000" },
];

const recentActivity = [
  {
    title: "Order #ORD-001 delivered",
    description: "To Raj's Chaat Corner",
    status: "delivered",
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    title: "Order #ORD-002 in transit",
    description: "To Mumbai Street Foods",
    status: "in_transit",
    icon: Truck,
    color: "text-blue-500",
  },
  {
    title: "Inventory updated",
    description: "Basmati Rice (25kg) restocked",
    status: "info",
    icon: Plus,
    color: "text-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function DashboardPage() {
  // Placeholder for user type detection
  const [userType] = useState<"vendor" | "supplier">("vendor");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navbar */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <VistaLogo size="md" showText={true} />
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <a href="#learning" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
                Learning
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#schemes" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
                Schemes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Profile
            </Button>
          </div>
        </div>
      </nav>

      {/* Animated Grid Background */}
      <AnimatedGridBackground
        className="relative overflow-hidden"
        gridSize={40}
        gridColor="#3b82f6"
        darkGridColor="#60a5fa"
        fadeIntensity={25}
        animationSpeed={30}
      >
        <section className="relative py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center space-y-12"
            >
              {/* Hero Section */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight flex flex-col gap-2">
                  <motion.span
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="text-gradient block"
                  >
                    Welcome to VISTA
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="text-gradient block"
                  >
                    Your Street Food Supply Partner
                  </motion.span>
                </h1>
                <div className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto flex flex-col gap-1">
                  <motion.span
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 1.2 }}
                    className="block"
                  >
                    Connect with suppliers, manage orders,
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 1.5 }}
                    className="block"
                  >
                    and grow your business with our intelligent platform.
                  </motion.span>
                </div>
              </div>

              {/* Quick Actions */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {(userType === "vendor" ? quickActionsVendor : quickActionsSupplier).map((action, idx) => (
                  <motion.div
                    key={action.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.07 }}
                    className="bg-gradient-to-br from-blue-600 via-blue-400 to-purple-500 rounded-xl p-6 flex flex-col items-center gap-3 shadow-md hover:shadow-xl transition-all cursor-pointer"
                  >
                    <action.icon className="h-8 w-8 text-white mb-2" />
                    <span className="font-semibold text-lg text-white text-center">
                      {action.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats Overview */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {(userType === "vendor" ? statsVendor : statsSupplier).map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="bg-background/80 rounded-xl p-6 flex flex-col items-center gap-2 border border-primary/20 shadow-sm"
                  >
                    <stat.icon className="h-7 w-7 mb-2 text-primary" />
                    <span className="text-2xl font-bold text-gradient">{stat.value}</span>
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                variants={containerVariants}
                className="max-w-2xl mx-auto space-y-4"
              >
                <h2 className="text-xl font-semibold text-gradient mb-2">Recent Activity</h2>
                {recentActivity.map((activity, idx) => (
                  <motion.div
                    key={activity.title}
                    variants={itemVariants}
                    className="flex items-center gap-4 bg-background/80 rounded-lg p-4 border border-primary/10 shadow-sm"
                  >
                    <activity.icon className={`h-6 w-6 ${activity.color}`} />
                    <div>
                      <div className="font-medium text-foreground">{activity.title}</div>
                      <div className="text-muted-foreground text-sm">{activity.description}</div>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {activity.status}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedGridBackground>

      {/* Learning Section */}
      <section id="learning" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/wZuGZG36dL0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Xx1P2tQWMNA"
                title="YouTube Shorts video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/xnNHNa56f3c"
                title="YouTube Shorts video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            {/* Added videos below */}
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/93VlLKbISro"
                title="YouTube video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/xIbY0aANxxY"
                title="YouTube video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/gk9otSWCzUM"
                title="YouTube video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Section */}
      <section id="schemes" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Government Schemes for Suppliers & Vendors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Scheme 1 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">1. Credit Guarantee Fund Trust for MSEs (CGTMSE)</h3>
              <p><b>Purpose:</b> Enables Udyam‑registered micro and small enterprises to get collateral‑free loans.</p>
              <p><b>Benefit:</b> Government-backed guarantee covers up to ~85% for smaller loans.</p>
              <p><b>Value:</b> Ideal for vendors needing credit without pledging assets.</p>
              <p className="mt-2"><b>🔗 Read more:</b> Search “CGTMSE schemes India official site” or view list on <a href="https://myscheme.gov.in/" target="_blank" className="text-primary underline">myScheme.gov.in</a></p>
            </div>
            {/* Scheme 2 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">2. Prime Minister’s Employment Generation Programme (PMEGP)</h3>
              <p><b>Target:</b> Artisans, unemployed youth, rural and urban micro-enterprises.</p>
              <p><b>Features:</b> Subsidized capital support—up to ₹25 lakh for manufacturing, ₹10 lakh for services.</p>
              <p><b>Eligibility:</b> Individuals, SHGs, cooperatives, NGOs.</p>
              <p className="mt-2"><b>🔗 Learn more:</b> Search “PMEGP scheme MSME official” or via the MSME booklet PDF</p>
            </div>
            {/* Scheme 3 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">3. Pradhan Mantri MUDRA Yojana (PMMY)</h3>
              <p><b>Target:</b> Micro-units and small non-farm businesses.</p>
              <p><b>Loan options:</b> Shishu: ≤ ₹50k | Kishor: ₹50k–₹5 lakh | Tarun: ₹5 lakh–₹10 lakh (up to ₹20 lakh for repeat borrowers)</p>
              <p><b>Ideal for:</b> Vendors and small-scale sellers.</p>
              <p className="mt-2"><b>🔗 More at</b> <a href="https://myscheme.gov.in/" target="_blank" className="text-primary underline">myScheme.gov.in</a> or lending bank portals</p>
            </div>
            {/* Scheme 4 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">4. Stand‑Up India Scheme</h3>
              <p><b>Focus:</b> Support enterprises led by women or SC/ST entrepreneurs.</p>
              <p><b>Loan size:</b> ₹10 lakh to ₹1 crore for greenfield ventures in manufacturing/services/trading.</p>
              <p className="mt-2"><b>🔗 Found on</b> <a href="https://www.standupmitra.in/" target="_blank" className="text-primary underline">standupmitra.in</a> or search “Stand-Up India Scheme official”</p>
            </div>
            {/* Scheme 5 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">5. PM SVANidhi (Street Vendor Scheme)</h3>
              <p><b>Beneficiaries:</b> Registered urban street vendors.</p>
              <p><b>Facilities:</b> Initial loan ₹10,000 (increases to ₹50,000), 7% interest subsidy, cashback for digital payments, capacity training.</p>
              <p className="mt-2"><b>🔗 Full details on</b> <a href="https://pmsvanidhi.mohua.gov.in/" target="_blank" className="text-primary underline">pmsvanidhi.mohua.gov.in</a> or search “PM SVANidhi scheme India”</p>
            </div>
            {/* Scheme 6 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">6. Zero Defect Zero Effect (ZED) Certification Scheme</h3>
              <p><b>Objective:</b> Encourage quality & low-impact manufacturing among MSMEs.</p>
              <p><b>Support:</b> Up to 80% subsidy for certification.</p>
              <p><b>Application:</b> Through the ZED portal; listed in MSME scheme booklet.</p>
            </div>
            {/* Scheme 7 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">7. ASPIRE – Innovation & Rural Industry Scheme</h3>
              <p><b>Aim:</b> Foster innovation and rural enterprises in MSME clusters.</p>
              <p><b>Scope:</b> Includes marketing, skill development, infrastructure, research, communication.</p>
              <p className="mt-2"><b>🔗 Refer to</b> makeinindia MSME schemes list or MSME booklet</p>
            </div>
            {/* Scheme 8 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">8. SFURTI – Fund for Traditional Industries</h3>
              <p><b>Managed by:</b> Ministry of MSME under Make in India.</p>
              <p><b>Objective:</b> Revitalize traditional industries via Common Facility Centres, design input, cluster development.</p>
              <p className="mt-2"><b>🔗 Scheme details on</b> <a href="https://www.makeinindia.com/schemes-msmes" target="_blank" className="text-primary underline">makeinindia.com/schemes-msmes</a> or MSME e‑book</p>
            </div>
            {/* Scheme 9 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">9. Credit Linked Capital Subsidy Scheme (CLCSS)</h3>
              <p><b>Focus:</b> Help MSMEs upgrade technology via modern machinery.</p>
              <p><b>Subsidy:</b> ~15% capital subsidy on sanctioned loans up to ₹1 crore.</p>
              <p>🏭 Useful for suppliers looking to scale production.</p>
              <p className="mt-2"><b>🔗 Search scheme list via</b> <a href="https://dcmsme.gov.in/" target="_blank" className="text-primary underline">dcmsme.gov.in</a> or MSME scheme list page</p>
            </div>
            {/* Scheme 10 */}
            <div className="bg-background rounded-xl shadow-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">10. RAMP & MSME Champions Scheme (UP Export Growth Campaign)</h3>
              <p><b>RAMP:</b> World Bank–funded support for capacity building, export readiness, branding.</p>
              <p><b>UP Export Growth Campaign:</b> State-level RAMP initiative to connect East Uttar Pradesh MSMEs to export markets.</p>
              <p><b>Champion offers:</b> Lean manufacturing, sustainability (ZED), innovation labs.</p>
              <p className="mt-2"><b>🔗 Details via</b> <a href="https://champions.gov.in/" target="_blank" className="text-primary underline">Champions portal</a> or news about UP export campaign</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-12">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <VistaLogo size="sm" />
            <span className="text-muted-foreground">© 2024 VISTA. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">
              <Star className="w-3 h-3 mr-1" />
              4.9/5 Rating
            </Badge>
            <Badge variant="secondary">
              <Shield className="w-3 h-3 mr-1" />
              Secure Platform
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
} 