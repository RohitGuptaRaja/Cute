import { Quicksand } from "next/font/google"
import "./globals.css"
import BackgroundMusic from "@/components/BackgroundMusic"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "You are special!",
  description:
    "A cute little website filled with compliments, surprises, and a heartfelt message made just for you.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} bg-black antialiased select-none`}
      >
        {/* 🎵 Background Music */}
        <BackgroundMusic />

        {/* App Content */}
        {children}
      </body>
    </html>
  )
}
