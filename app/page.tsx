"use client"

import { useState } from "react"
import { FloatingHearts } from "@/components/floating-hearts"
import { Envelope } from "@/components/envelope"
import { LoveLetter } from "@/components/love-letter"
import { MemoryGallery } from "@/components/memory-gallery"

type ViewState = "envelope" | "letter" | "gallery"

export default function LoveLetterPage() {
  const [view, setView] = useState<ViewState>("envelope")

  const handleEnvelopeOpen = () => {
    setView("letter")
  }

  const handleLetterClose = () => {
    setView("gallery")
  }

  const handleReset = () => {
    setView("letter")
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10">
        {view === "envelope" && (
          <Envelope onOpen={handleEnvelopeOpen} />
        )}
        
        {view === "letter" && (
          <LoveLetter onClose={handleLetterClose} />
        )}
        
        {view === "gallery" && (
          <MemoryGallery onReset={handleReset} />
        )}
      </div>
    </main>
  )
}
