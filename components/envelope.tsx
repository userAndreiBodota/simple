"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface EnvelopeProps {
  onOpen: () => void
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 1200)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-8 text-center text-balance">
        You Have a Love Letter
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mb-12 text-center">
        Click to open...
      </p>
      
      <div 
        className={cn(
          "relative cursor-pointer transition-transform duration-300",
          isHovered && !isOpening && "scale-105",
          isOpening && "animate-shake"
        )}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Envelope Body */}
        <div className="relative w-72 h-48 md:w-96 md:h-64">
          {/* Back of envelope */}
          <div className="absolute inset-0 bg-accent rounded-lg shadow-xl" />
          
          {/* Envelope flap */}
          <div 
            className={cn(
              "absolute top-0 left-0 right-0 h-1/2 origin-top transition-transform duration-1000 ease-in-out",
              isOpening && "-rotate-x-180"
            )}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1000px" 
            }}
          >
            <svg 
              viewBox="0 0 100 50" 
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 0 L 50 50 L 100 0 Z"
                className="fill-primary"
              />
            </svg>
          </div>
          
          {/* Letter peeking out */}
          <div 
            className={cn(
              "absolute top-4 left-4 right-4 h-20 md:h-28 bg-card rounded shadow-md transition-transform duration-700 delay-200",
              isOpening && "-translate-y-16 md:-translate-y-20"
            )}
          >
            <div className="p-3 md:p-4">
              <div className="w-full h-2 bg-muted rounded mb-2" />
              <div className="w-3/4 h-2 bg-muted rounded mb-2" />
              <div className="w-1/2 h-2 bg-muted rounded" />
            </div>
          </div>
          
          {/* Front of envelope */}
          <div className="absolute inset-0 bg-secondary rounded-lg overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1/2">
              <svg 
                viewBox="0 0 100 50" 
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 0 L 50 50 L 100 0 L 100 0 L 0 0 Z"
                  className="fill-primary opacity-20"
                />
              </svg>
            </div>
            
            {/* Heart seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={cn(
                "w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg transition-all duration-300",
                isHovered && !isOpening && "scale-110 shadow-xl"
              )}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary-foreground w-6 h-6 md:w-8 md:h-8"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-3deg); }
          20%, 40%, 60%, 80% { transform: rotate(3deg); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .-rotate-x-180 {
          transform: rotateX(-180deg);
        }
      `}</style>
    </div>
  )
}
