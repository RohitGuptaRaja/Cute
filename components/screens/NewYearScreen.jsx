"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function NewYearScreen() {
  const [showTop, setShowTop] = useState(true)

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">

      <h2 className="text-4xl md:text-5xl font-dancing-script text-white mb-8">
        Happy New Year my cutie pie 🎉💖
      </h2>

      {/* IMAGE STACK */}
      <div className="relative w-64 h-64 mb-10">
        {/* Bottom image */}
        <Image
          src="/images/image2.jpg"
          fill
          className="rounded-xl object-cover"
          alt="second"
          unoptimized
        />

        {/* Top image */}
        <AnimatePresence>
          {showTop && (
            <motion.div
              className="absolute inset-0"
              drag="y"
              dragConstraints={{ top: -200, bottom: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.y < -120) setShowTop(false)
              }}
              exit={{ y: -400, opacity: 0 }}
            >
              <Image
                src="/images/image1.jpg"
                fill
                className="rounded-xl object-cover"
                alt="first"
                unoptimized
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-2xl font-dancing-script text-white">
        How did you like it my Kuchupuchu 😅
      </p>

    </div>
  )
}
