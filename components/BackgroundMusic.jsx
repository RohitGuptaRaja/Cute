"use client"
import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const playMusic = () => {
      if (!audioRef.current) return

      audioRef.current.muted = false
      audioRef.current.volume = 0.5
      audioRef.current.play().catch(() => {})
    }

    document.addEventListener("click", playMusic, { once: true })

    return () => {
      document.removeEventListener("click", playMusic)
    }
  }, [])

  return (
    <audio ref={audioRef} loop muted>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  )
}
