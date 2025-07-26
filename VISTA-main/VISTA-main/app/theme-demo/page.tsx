"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VistaLogo } from "@/components/vista-logo"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeSettings } from "@/components/theme-settings"
import { Progress } from "@/components/ui/progress"

export default function ThemeDemo() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Theme Demo</h1>
            <p className="text-muted-foreground">Test all theme variations and components</p>
          </div>
        </div>

        <div className="grid gap-6">
          <ThemeSettings />

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sample Form</CardTitle>
                <CardDescription>Test form elements in different themes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <Button className="w-full">Sign In</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Components Showcase</CardTitle>
                <CardDescription>Various UI components in current theme</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <div className="space-y-2">
                  <Label>Progress Example</Label>
                  <Progress value={60} />
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
