"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/30 to-accent/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="text-muted-foreground">{t("hero.trusted")}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {t("hero.headline")} <span className="text-primary">{t("hero.cleaning")}</span> {t("hero.and")}{" "}
            <span className="text-primary">{t("hero.applianceRepair")}</span> {t("hero.services")}
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            {t("hero.subheadline")}
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2">
              <span className="text-primary text-lg">✓</span>
              <span className="text-foreground">{t("hero.benefits.licensed")}</span>
            </div>
            <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2">
              <span className="text-primary text-lg">✓</span>
              <span className="text-foreground">{t("hero.benefits.sameDay")}</span>
            </div>
            <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2">
              <span className="text-primary text-lg">✓</span>
              <span className="text-foreground">{t("hero.benefits.satisfaction")}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="tel:5044289412">
                <span className="mr-2">📞</span>
                {t("hero.callButton")}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent"
              onClick={() => {
                console.log("[v0] Quote button clicked")
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
              {t("hero.quoteButton")}
            </Button>
          </div>

          {/* Service Areas */}
          <p className="text-muted-foreground mt-8">{t("hero.serviceAreas")}</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  )
}
