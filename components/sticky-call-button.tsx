"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyCallButton() {
  return (
    <div className="sticky-call-btn">
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        asChild
      >
        <a href="tel:5044289412" aria-label="Call Mimeliaa General Services">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  )
}
