"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

const messages = [
  "Found the nearby power station",
  "Found the nearby fuel station",
  "Found the nearby gas station"
]

interface Point {
  id: number
  angle: number
  distance: number
}

export default function Page() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [points, setPoints] = useState<Point[]>([])

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000) // Change message every 3 seconds

    const pointInterval = setInterval(() => {
      const newPoint: Point = {
        id: Date.now(),
        angle: Math.random() * 360,
        distance: Math.random() * 0.8 + 0.1, // Between 10% and 90% of the radius
      }
      setPoints(prevPoints => [...prevPoints, newPoint])

      // Remove the point after 2 seconds
      setTimeout(() => {
        setPoints(prevPoints => prevPoints.filter(p => p.id !== newPoint.id))
      }, 2000)
    }, 1000) // Add a new point every second

    return () => {
      clearInterval(messageInterval)
      clearInterval(pointInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="p-4">
        <Button asChild variant="ghost">
          <Link href="/fuel-selection">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Fuel Selection
          </Link>
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Radar background */}
          <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
          
          {/* Radar rings */}
          <div className="absolute inset-0 border-2 border-gray-300 rounded-full"></div>
          <div className="absolute inset-4 border border-gray-300 rounded-full"></div>
          <div className="absolute inset-8 border border-gray-300 rounded-full"></div>
          <div className="absolute inset-12 border border-gray-300 rounded-full"></div>
          
          {/* Radar scanner animation */}
          <div className="absolute inset-0 origin-center animate-radar-rotate">
            <div className="w-1/2 h-1/2 bg-gradient-to-t from-blue-500 to-transparent opacity-30 rounded-tl-full transform -rotate-45 origin-bottom-right"></div>
          </div>
          
          {/* Blinking dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

          {/* Blue points */}
          {points.map((point) => (
            <motion.div
              key={point.id}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{
                top: `${50 - Math.cos(point.angle * Math.PI / 180) * point.distance * 50}%`,
                left: `${50 + Math.sin(point.angle * Math.PI / 180) * point.distance * 50}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
        
        {/* Message display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center text-xl font-semibold"
          >
            {messages[currentMessage]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

