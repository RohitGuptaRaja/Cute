import { motion } from "framer-motion"
import Image from "next/image"

export default function FinalScreen({ onNext }) {
  return (
    <motion.div className="flex flex-col items-center justify-center h-full w-full text-center px-4">

      {/* GIF */}
      <motion.div
        className="w-40 h-40 p-4 rounded-full bg-pink-900/10 border-2 border-pink-400/25 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <Image
          src="/gifs/cute.gif"
          width={130}
          height={130}
          alt="cute gif"
          unoptimized
        />
      </motion.div>

      {/* TEXT */}
      <motion.h2
        className="mt-8 text-3xl md:text-4xl font-dancing-script text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        You’ll always be special to me 💖
      </motion.h2>

      {/* 🔴 NEW BUTTON */}
      <motion.button
        className="mt-10 bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold"
        onClick={onNext}
      >
        Tap to see my cutie pie 💕
      </motion.button>

    </motion.div>
  )
}
