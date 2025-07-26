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
  Package,
  TrendingUp,
  Users,
  DollarSign,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
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

export default function SupplierDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Total Products",
      value: "156",
      change: "+12%",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Active Orders",
      value: "23",
      change: "+5%",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Connected Vendors",
      value: "89",
      change: "+18%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Monthly Revenue",
      value: "₹2,45,000",
      change: "+25%",
      icon: DollarSign,
      color: "text-orange-600",
    },
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      vendor: "Raj's Chaat Corner",
      items: "Onions, Tomatoes, Spices",
      amount: "₹3,500",
      status: "pending",
      date: "2024-01-15",
    },
    {
      id: "ORD-002",
      vendor: "Mumbai Street Foods",
      items: "Rice, Lentils, Oil",
      amount: "₹8,200",
      status: "confirmed",
      date: "2024-01-14",
    },
    {
      id: "ORD-003",
      vendor: "Delhi Delights",
      items: "Flour, Vegetables",
      amount: "₹2,100",
      status: "delivered",
      date: "2024-01-13",
    },
  ]

  const products = [
    {
      id: "PRD-001",
      name: "Premium Basmati Rice",
      category: "Grains",
      price: "₹85/kg",
      stock: "500 kg",
      status: "active",
    },
    {
      id: "PRD-002",
      name: "Fresh Onions",
      category: "Vegetables",
      price: "₹25/kg",
      stock: "200 kg",
      status: "active",
    },
    {
      id: "PRD-003",
      name: "Cooking Oil",
      category: "Oil & Ghee",
      price: "₹120/L",
      stock: "50 L",
      status: "low_stock",
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
      case "confirmed":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Clock className="w-3 h-3 mr-1" />
            Confirmed
          </Badge>
        )
      case "delivered":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <CheckCircle className="w-3 h-3 mr-1" />
            Delivered
          </Badge>
        )
      case "active":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Active
          </Badge>
        )
      case "low_stock":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            Low Stock
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
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
              Supplier Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your products, orders, and vendor relationships</p>
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
                        <p className="text-xs text-green-600 font-medium">{stat.change} from last month</p>
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
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Orders */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        Recent Orders
                      </CardTitle>
                      <CardDescription>Latest orders from your vendor network</CardDescription>
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
                              <p className="font-medium">{order.vendor}</p>
                              <p className="text-sm text-muted-foreground">{order.items}</p>
                              <p className="text-xs text-muted-foreground">{order.date}</p>
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
                        Add New Product
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        View Vendor Requests
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Generate Report
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Bulk Update
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="products" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Product Catalog</CardTitle>
                        <CardDescription>Manage your product inventory and pricing</CardDescription>
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search products..." className="pl-10" />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {products.map((product) => (
                        <motion.div
                          key={product.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                          whileHover={{ scale: 1.01 }}
                        >
                          <div className="space-y-1">
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.category}</p>
                            <p className="text-sm font-semibold text-primary">{product.price}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm font-medium">{product.stock}</p>
                              {getStatusBadge(product.status)}
                            </div>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
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
                    <CardTitle>Order Management</CardTitle>
                    <CardDescription>Track and manage all vendor orders</CardDescription>
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
                            <p className="text-sm text-muted-foreground">{order.vendor}</p>
                            <p className="text-sm text-muted-foreground">{order.items}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="font-semibold">{order.amount}</p>
                              {getStatusBadge(order.status)}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
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
                      <CardTitle>Sales Analytics</CardTitle>
                      <CardDescription>Revenue and sales performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">This Month</span>
                          <span className="text-2xl font-bold text-green-600">₹2,45,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Last Month</span>
                          <span className="text-lg font-semibold text-muted-foreground">₹1,96,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Growth</span>
                          <span className="text-lg font-semibold text-green-600">+25%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top Products</CardTitle>
                      <CardDescription>Best performing products this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Premium Basmati Rice</span>
                          <span className="text-sm font-semibold">₹42,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Fresh Onions</span>
                          <span className="text-sm font-semibold">₹28,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Cooking Oil</span>
                          <span className="text-sm font-semibold">₹18,500</span>
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
