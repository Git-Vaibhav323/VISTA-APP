"use client"

import { useRef, useEffect, useState, type TouchEvent } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export interface TestimonialCarouselItem {
  id: number
  name: string
  role: string
  content: string
  rating: number
  location: string
  avatar: string
  company?: string
  reviewImages?: string[]
}

interface TestimonialsCarouselProps {
  items: TestimonialCarouselItem[]
  autoRotate?: boolean
  rotateInterval?: number
  cardHeight?: number
  title?: string
  subtitle?: string
  tagline?: string
  isMobileSwipe?: boolean
}

const TestimonialsCarousel = ({
  items,
  autoRotate = true,
  rotateInterval = 5000,
  cardHeight = 500,
  title = "What Our Users Say",
  subtitle = "Customer Stories",
  tagline = "Join thousands of vendors and suppliers who have transformed their business with VISTA",
  isMobileSwipe = true,
}: TestimonialsCarouselProps) => {
  const [active, setActive] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const isMobile = useIsMobile()
  const minSwipeDistance = 50

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length)
      }, rotateInterval)
      return () => clearInterval(interval)
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.2 })
    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null)
  }

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length)
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length)
    }
  }

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20"
    if (index === (active + 1) % items.length) return "translate-x-[40%] scale-95 opacity-60 z-10"
    if (index === (active - 1 + items.length) % items.length) return "translate-x-[-40%] scale-95 opacity-60 z-10"
    return "scale-90 opacity-0"
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="testimonials-carousel" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">{title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{tagline}</p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden h-[600px] max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-md transform transition-all duration-700 ease-out ${getCardAnimationClass(
                  index,
                )}`}
              >
                <Card
                  className={`overflow-hidden bg-slate-800/90 border-slate-700/50 backdrop-blur-md h-[${cardHeight}px] shadow-2xl hover:shadow-3xl flex flex-col hover:bg-slate-700/90 transition-all duration-500`}
                >
                  {/* Header with Avatar and Quote */}
                  <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 p-8 flex flex-col items-center justify-center text-center">
                    <div className="absolute top-4 right-4 opacity-20">
                      <Quote className="h-12 w-12 text-white" />
                    </div>

                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-slate-600/50 hover:border-blue-400/50 transition-colors duration-300">
                        <Image
                          src={item.avatar || "/placeholder.svg"}
                          alt={`${item.name} profile`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-slate-300 text-sm mb-2">
                      {item.role} • {item.location}
                    </p>
                    {item.company && <p className="text-slate-400 text-xs">{item.company}</p>}

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mt-3">{renderStars(item.rating)}</div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="flex-grow flex items-center">
                      <blockquote className="text-slate-200 text-lg leading-relaxed italic text-center">
                        "{item.content}"
                      </blockquote>
                    </div>

                    {/* Review Images */}
                    {item.reviewImages && item.reviewImages.length > 0 && (
                      <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
                        {item.reviewImages.map((imgUrl: string, idx: number) => (
                          <div key={idx} className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden border border-slate-600 bg-slate-700">
                            <Image
                              src={imgUrl}
                              alt={`Review image ${idx + 1} for ${item.name}`}
                              width={128}
                              height={96}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bottom accent */}
                    <div className="mt-6 pt-4 border-t border-slate-600/30">
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 z-30 shadow-lg transition-all hover:scale-110 border border-white/20"
                onClick={() => setActive((prev) => (prev - 1 + items.length) % items.length)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 z-30 shadow-lg transition-all hover:scale-110 border border-white/20"
                onClick={() => setActive((prev) => (prev + 1) % items.length)}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === idx ? "bg-white w-8" : "bg-white/40 hover:bg-white/60 w-2"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats or additional info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
            <div className="text-slate-300">Happy Users</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-purple-400 mb-2">4.9/5</div>
            <div className="text-slate-300">Average Rating</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
            <div className="text-slate-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
