"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export function WhyChooseUs() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: <div className="w-8 h-8 text-primary text-2xl flex items-center justify-center">🛡️</div>,
      title: t("whyChoose.licensed.title"),
      description: t("whyChoose.licensed.description"),
    },
    {
      icon: <div className="w-8 h-8 text-primary text-2xl flex items-center justify-center">⏰</div>,
      title: t("whyChoose.flexible.title"),
      description: t("whyChoose.flexible.description"),
    },
    {
      icon: <div className="w-8 h-8 text-primary text-2xl flex items-center justify-center">👥</div>,
      title: t("whyChoose.trusted.title"),
      description: t("whyChoose.trusted.description"),
    },
    {
      icon: <div className="w-8 h-8 text-primary text-2xl flex items-center justify-center">🏆</div>,
      title: t("whyChoose.satisfaction.title"),
      description: t("whyChoose.satisfaction.description"),
    },
    {
      icon: <div className="w-8 h-8 text-primary text-2xl flex items-center justify-center">✨</div>,
      title: t("whyChoose.ecoFriendly.title"),
      description: t("whyChoose.ecoFriendly.description"),
    },
    {
      icon: <div className="w-8 h-8 text-primary text-2xl flex items-center justify-center">📞</div>,
      title: t("whyChoose.local.title"),
      description: t("whyChoose.local.description"),
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{t("whyChoose.title")}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">{t("whyChoose.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t("mission.title")}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{t("mission.description")}</p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t("vision.title")}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{t("vision.description")}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{t("whyChoose.cta.title")}</h3>
            <p className="text-lg text-muted-foreground mb-6">{t("whyChoose.cta.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5044289412"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-colors"
              >
                <span className="mr-2">📞</span>
                {t("whyChoose.cta.callButton")}
              </a>
              <a
                href="mailto:Mimeliags@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold text-lg transition-colors"
              >
                {t("whyChoose.cta.emailButton")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
