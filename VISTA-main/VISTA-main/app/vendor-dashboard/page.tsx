"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VistaLogo } from "@/components/vista-logo"
import {
  ShoppingCart,
  TrendingUp,
  Package,
  DollarSign,
  Plus,
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Truck,
  Users,
  BarChart3,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Total Orders",
      value: "47",
      change: "+12%",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Monthly Spend",
      value: "₹45,200",
      change: "-8%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Suppliers",
      value: "12",
      change: "+3%",
      icon: Package,
      color: "text-purple-600",
    },
    {
      title: "Avg. Delivery Time",
      value: "2.5 hrs",
      change: "-15%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      supplier: "Fresh Farms Co.",
      items: "Onions (10kg), Tomatoes (5kg)",
      amount: "₹850",
      status: "delivered",
      date: "2024-01-15",
      rating: 5,
    },
    {
      id: "ORD-002",
      supplier: "Spice Masters",
      items: "Garam Masala, Turmeric, Chili Powder",
      amount: "₹1,200",
      status: "in_transit",
      date: "2024-01-14",
      rating: null,
    },
    {
      id: "ORD-003",
      supplier: "Grain Depot",
      items: "Basmati Rice (25kg)",
      amount: "₹2,100",
      status: "pending",
      date: "2024-01-13",
      rating: null,
    },
  ]

  const suppliers = [
    {
      id: "SUP-001",
      name: "Fresh Farms Co.",
      category: "Vegetables",
      rating: 4.8,
      distance: "2.5 km",
      deliveryTime: "30-45 min",
      minOrder: "₹500",
      status: "online",
    },
    {
      id: "SUP-002",
      name: "Spice Masters",
      category: "Spices & Condiments",
      rating: 4.9,
      distance: "1.8 km",
      deliveryTime: "20-30 min",
      minOrder: "₹300",
      status: "online",
    },
    {
      id: "SUP-003",
      name: "Grain Depot",
      category: "Grains & Cereals",
      rating: 4.6,
      distance: "3.2 km",
      deliveryTime: "45-60 min",
      minOrder: "₹1000",
      status: "busy",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            <AlertCircle className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      case "in_transit":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Truck className="w-3 h-3 mr-1" />
            In Transit
          </Badge>
        )
      case "delivered":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <CheckCircle className="w-3 h-3 mr-1" />
            Delivered
          </Badge>
        )
      case "online":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Online
          </Badge>
        )
      case "busy":
        return (
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            Busy
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header
        className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <VistaLogo size="md" />
            <div className="flex items-center gap-4">
              <Button variant="outline">Profile</Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Welcome Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Vendor Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your orders, suppliers, and business operations</p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p
                          className={`text-xs font-medium ${
                            stat.change.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Orders */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        Recent Orders
                      </CardTitle>
                      <CardDescription>Your latest orders and their status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentOrders.map((order) => (
                          <motion.div
                            key={order.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                            whileHover={{ scale: 1.01 }}
                          >
                            <div className="space-y-1">
                              <p className="font-medium">{order.supplier}</p>
                              <p className="text-sm text-muted-foreground">{order.items}</p>
                              <div className="flex items-center gap-2">
                                <p className="text-xs text-muted-foreground">{order.date}</p>
                                {order.rating && (
                                  <div className="flex items-center gap-1">{renderStars(order.rating)}</div>
                                )}
                              </div>
                            </div>
                            <div className="text-right space-y-1">
                              <p className="font-semibold">{order.amount}</p>
                              {getStatusBadge(order.status)}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                      <CardDescription>Common tasks and shortcuts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Order
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Search className="h-4 w-4 mr-2" />
                        Find Suppliers
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        View Reports
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Manage Profile
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="suppliers" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Available Suppliers</CardTitle>
                        <CardDescription>Browse and connect with verified suppliers</CardDescription>
                      </div>
                      <Button>
                        <Search className="h-4 w-4 mr-2" />
                        Find More
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search suppliers..." className="pl-10" />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {suppliers.map((supplier) => (
                        <motion.div
                          key={supplier.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                          whileHover={{ scale: 1.01 }}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3 className="font-medium">{supplier.name}</h3>
                              {getStatusBadge(supplier.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{supplier.category}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {supplier.distance}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {supplier.deliveryTime}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />
                                Min: {supplier.minOrder}
                              </div>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <div className="flex items-center gap-1">
                              {renderStars(Math.floor(supplier.rating))}
                              <span className="text-sm font-medium ml-1">{supplier.rating}</span>
                            </div>
                            <Button size="sm">View Products</Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>Track and manage all your orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <motion.div
                          key={order.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                          whileHover={{ scale: 1.01 }}
                        >
                          <div className="space-y-1">
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.supplier}</p>
                            <p className="text-sm text-muted-foreground">{order.items}</p>
                          </div>
                          <div className="text-right space-y-1">
                            <p className="font-semibold">{order.amount}</p>
                            {getStatusBadge(order.status)}
                            <p className="text-xs text-muted-foreground">{order.date}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Spending Analytics</CardTitle>
                      <CardDescription>Your monthly spending breakdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">This Month</span>
                          <span className="text-2xl font-bold text-primary">₹45,200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Last Month</span>
                          <span className="text-lg font-semibold text-muted-foreground">₹49,100</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Savings</span>
                          <span className="text-lg font-semibold text-green-600">₹3,900 (8%)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top Categories</CardTitle>
                      <CardDescription>Your most ordered product categories</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Vegetables</span>
                          <span className="text-sm font-semibold">₹18,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Spices</span>
                          <span className="text-sm font-semibold">₹12,200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Grains</span>
                          <span className="text-sm font-semibold">₹8,900</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
