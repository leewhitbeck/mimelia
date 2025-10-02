"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/mimeliaa-logo.png"
                alt="Mimeliaa General Services Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MIMELIAA</h1>
              <p className="text-sm text-muted-foreground">General Services LLC</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              {t("nav.services")}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t("nav.about")}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          {/* Desktop Contact Info & Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center space-x-2"
            >
              <span className="text-sm">🌐</span>
              <span>{language === "en" ? "¿Hablas Español?" : "English"}</span>
            </Button>
            <a
              href="tel:5044289412"
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
            >
              <span className="text-primary">📞</span>
              <span className="text-foreground">(504) 428-9412</span>
            </a>
            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                console.log("[v0] Header quote button clicked")
                const contactElement = document.getElementById("contact")
                console.log("[v0] Contact element found:", contactElement)
                if (contactElement) {
                  console.log("[v0] Scrolling to contact section")
                  contactElement.scrollIntoView({ behavior: "smooth" })
                } else {
                  console.log("[v0] Contact element not found!")
                }
              }}
            >
              {t("header.getQuote")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="flex items-center space-x-2 w-fit"
              >
                <span className="text-sm">🌐</span>
                <span>{language === "en" ? "¿Hablas Español?" : "English"}</span>
              </Button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <a href="tel:5044289412" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <span className="text-primary">📞</span>
                  <span className="text-foreground">(504) 428-9412</span>
                </a>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✉️</span>
                  <span className="text-foreground">Mimeliags@gmail.com</span>
                </div>
                <Button
                  className="bg-primary hover:bg-primary/90 mt-4"
                  onClick={() => {
                    console.log("[v0] Mobile quote button clicked")
                    const contactElement = document.getElementById("contact")
                    console.log("[v0] Contact element found:", contactElement)
                    if (contactElement) {
                      console.log("[v0] Scrolling to contact section")
                      contactElement.scrollIntoView({ behavior: "smooth" })
                    } else {
                      console.log("[v0] Contact element not found!")
                    }
                    setIsMenuOpen(false)
                  }}
                >
                  {t("header.getQuote")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
