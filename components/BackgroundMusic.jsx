"use client"
import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5
        audioRef.current.play().catch(() => {})
      }
    }

    playMusic()
    document.addEventListener("click", playMusic)

    return () => {
      document.removeEventListener("click", playMusic)
    }
  }, [])

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  )
}
