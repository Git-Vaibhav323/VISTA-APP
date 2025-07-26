"use client"

import { motion } from "framer-motion"
import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export interface TestimonialData {
  name: string
  role: string
  content: string
  rating: number
  location: string
  avatar: string
}

export interface TestimonialsMarqueeProps {
  testimonials: TestimonialData[]
  className?: string
  cols?: number
}

export const TestimonialsMarquee: React.FC<TestimonialsMarqueeProps> = ({ testimonials, className = "", cols = 3 }) => {
  // Clone the testimonials list multiple times for continuous animation
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]
  const groupSize = Math.ceil(duplicatedTestimonials.length / cols)
  const testimonialGroups = Array.from({ length: cols }, (_, index) =>
    duplicatedTestimonials.slice(index * groupSize, (index + 1) * groupSize),
  )

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section
      className={`mx-auto block h-[600px] max-sm:h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${className}`}
    >
      <div
        className="flex w-full h-full items-center justify-center p-8"
        style={{
          transform: "rotateX(25deg) rotateY(0deg) rotateZ(15deg)",
          perspective: "1000px",
        }}
      >
        <div className="w-full overflow-hidden scale-75 sm:scale-90">
          <div className={`relative grid h-full w-full origin-center grid-cols-1 sm:grid-cols-${cols} gap-6`}>
            {testimonialGroups.map((testimonialsInGroup, idx) => (
              <motion.div
                key={`column-${idx}`}
                animate={{
                  y: idx % 2 === 0 ? [0, -120, 0] : [0, 120, 0],
                }}
                transition={{
                  duration: idx % 2 === 0 ? 25 : 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
                className="flex flex-col items-center gap-6 relative"
              >
                {testimonialsInGroup.map((testimonial, testIdx) => {
                  const globalIndex = idx * groupSize + testIdx
                  return (
                    <motion.div
                      key={`testimonial-${globalIndex}`}
                      whileHover={{
                        y: -15,
                        rotateY: 8,
                        scale: 1.05,
                        z: 50,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="w-full max-w-[280px]"
                    >
                      <Card className="bg-slate-800/90 border-slate-700/50 backdrop-blur-md hover:bg-slate-700/90 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:border-slate-600/70">
                        <CardContent className="p-6">
                          {/* Star Rating */}
                          <div className="flex items-center gap-1 mb-4">{renderStars(testimonial.rating)}</div>

                          {/* Testimonial Content */}
                          <p className="text-slate-200 mb-6 italic text-sm leading-relaxed line-clamp-4">
                            "{testimonial.content}"
                          </p>

                          {/* User Info */}
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 flex-shrink-0">
                              <Image
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={`${testimonial.name} profile`}
                                width={48}
                                height={48}
                                className="w-full h-full rounded-full object-cover border-2 border-slate-600/50 hover:border-blue-400/50 transition-colors duration-300"
                              />
                              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-white text-sm truncate">{testimonial.name}</p>
                              <p className="text-slate-400 text-xs truncate">
                                {testimonial.role} • {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee
