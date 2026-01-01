import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function NewYearScreen() {
  const [showTop, setShowTop] = useState(true)

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">

      <h2 className="text-4xl md:text-5xl font-dancing-script text-white mb-8">
        Happy New Year my cutie pie 🎉💖
      </h2>

      {/* IMAGE STACK */}
      <div className="relative w-64 h-64 mb-10 rounded-xl overflow-hidden">

        {/* Bottom image */}
        <img
          src="/image2.jpg"
          alt="second"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top image */}
        <AnimatePresence>
          {showTop && (
            <motion.img
              src="/image1.jpg"
              alt="first"
              className="absolute inset-0 w-full h-full object-cover cursor-grab"
              drag="y"
              dragConstraints={{ top: -200, bottom: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.y < -120) setShowTop(false)
              }}
              exit={{ y: -400, opacity: 0 }}
            />
          )}
        </AnimatePresence>

      </div>

      <p className="text-2xl font-dancing-script text-white">
        How did you like it my Kuchupuchu 😅
      </p>

    </div>
  )
}
