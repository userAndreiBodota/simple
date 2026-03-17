"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface LoveLetterProps {
  onClose: () => void
}

const letterContent = {
  greeting: "My Dearest Love,",
  paragraphs: [
    "Every month feels like a new adventure together. Whenever I am with you, I always feel safe. You let me heal, like my inner child, and remind me that love is a space where I can simply be",
    
    "Thank you for choosing me, for loving me, and for being the most wonderful partner anyone could ask for. Here's to another month of making memories, sharing dreams, and falling deeper in love with you.",
    "You are my one in a lifetime kind of woman",
  ],
  closing: "Forever and always yours,",
  signature: "With all my heart",
  date: "Happy Monthsary!",
}

export function LoveLetter({ onClose }: LoveLetterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentParagraph, setCurrentParagraph] = useState(-1)
  const [showSignature, setShowSignature] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const timers: NodeJS.Timeout[] = []
    
    // Reveal paragraphs one by one
    letterContent.paragraphs.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCurrentParagraph(index)
      }, 800 + index * 1000)
      timers.push(timer)
    })
    
    // Show signature after paragraphs
    const signatureTimer = setTimeout(() => {
      setShowSignature(true)
    }, 800 + letterContent.paragraphs.length * 1000 + 500)
    timers.push(signatureTimer)
    
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm">
      <div 
        className={cn(
          "relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-card rounded-lg shadow-2xl p-8 md:p-12 transition-all duration-700",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary opacity-50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary opacity-50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary opacity-50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary opacity-50" />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close letter"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        
        <div className="space-y-6 md:space-y-8">
          {/* Date */}
          <p className="text-center text-primary font-serif text-xl md:text-2xl animate-fade-in">
            {letterContent.date}
          </p>
          
          {/* Heart decoration */}
          <div className="flex justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary animate-pulse"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          
          {/* Greeting */}
          <p className="font-serif text-2xl md:text-3xl text-foreground text-center animate-fade-in">
            {letterContent.greeting}
          </p>
          
          {/* Paragraphs */}
          <div className="space-y-4 md:space-y-6">
            {letterContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={cn(
                  "text-lg md:text-xl leading-relaxed text-foreground/90 text-center transition-all duration-700",
                  index <= currentParagraph 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Signature */}
          <div className={cn(
            "pt-6 md:pt-8 transition-all duration-700",
            showSignature ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <p className="text-lg md:text-xl text-foreground/90 text-center italic">
              {letterContent.closing}
            </p>
            <p className="font-serif text-2xl md:text-3xl text-primary text-center mt-4">
              {letterContent.signature}
            </p>
            
            {/* Final heart decoration */}
            <div className="flex justify-center mt-6 gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary/60">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary/60">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  )
}
