"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const memories = [
  {
    id: 1,
    title: "Our First Date",
    description: "The day everything changed forever",
    imageUrl: "/images/first.jfif",  // Replace emoji with image URL
  },
  {
    id: 2,
    title: "Our Competetive Date",
    description: "A moment that captures how strong we are",
    imageUrl: "/images/compe.jfif",
  },
  {
    id: 3,
    title: "Our Sponty Dates",
    description: "Every journey is better with you",
    imageUrl: "/images/sponty.jfif",
  },
  {
    id: 4,
    title: "Lazy Sundays",
    description: "My favorite days are spent with you",
    imageUrl: "/images/lazy.jfif",
  },
  {
    id: 5,
    title: "Cute Dates",
    description: "Dates that lets us show our clingy sides",
    imageUrl: "/images/cute.jfif",
  },
  {
    id: 6,
    title: "Home Date",
    description: "Moment that I can spent time with your family",
    imageUrl: "/images/home.jfif",
  },
]
interface MemoryGalleryProps {
  onReset: () => void
}

export function MemoryGallery({ onReset }: MemoryGalleryProps) {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null)

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4 text-balance">
            Our Beautiful Journey
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Every moment with you is a treasure
          </p>
        </header>

        {/* Memory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {memories.map((memory, index) => (
            <button
              key={memory.id}
              onClick={() => setSelectedMemory(memory.id === selectedMemory ? null : memory.id)}
              className={cn(
                "group relative aspect-square bg-card rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105",
                selectedMemory === memory.id && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20" />
              
              {/* Emoji placeholder for image */}
             <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-300">
  <img
    src={memory.imageUrl}
    alt={memory.title}
    className="object-cover w-full h-full" // Makes sure the image fills the space
  />
</div>
              
              {/* Overlay with title */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300",
                selectedMemory === memory.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}>
                <h3 className="font-serif text-lg md:text-xl text-card font-medium">
                  {memory.title}
                </h3>
                <p className="text-card/80 text-sm mt-1">
                  {memory.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Counter Section */}
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 text-center mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            Celebrating Our Love
          </h3>
          
          <div className="flex justify-center gap-4 md:gap-8">
            <CounterBox label="Months" value={3} />
            <CounterBox label="Weeks" value={12} />
            <CounterBox label="Days" value={90} />
          </div>
          
          <p className="mt-8 text-muted-foreground text-lg italic">
            ...and counting forever with you
          </p>
        </div>

        {/* Promises Section */}
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
            My Promises to You
          </h3>
          
          <div className="space-y-4">
            {[
              "To love you more with each passing day",
              "To be your biggest supporter and cheerleader",
              "To make you laugh, even on your worst days",
              "To cherish every moment we spend together",
            ].map((promise, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/40 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <p className="text-foreground/90 text-lg leading-relaxed">
                  {promise}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Read Letter Again
          </button>
          
          <p className="mt-8 text-muted-foreground">
            Made with love, just for you
          </p>
        </footer>
      </div>
    </div>
  )
}

function CounterBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-secondary rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
      <p className="font-serif text-3xl md:text-5xl text-primary font-bold">
        {value}
      </p>
      <p className="text-muted-foreground text-sm md:text-base mt-1">
        {label}
      </p>
    </div>
  )
}
