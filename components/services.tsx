"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Home, Wrench, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: t("services.deep.title"),
      price: "$225 - $350+",
      description: t("services.deep.description"),
      features: [
        t("services.deep.features.0"),
        t("services.deep.features.1"),
        t("services.deep.features.2"),
        t("services.deep.features.3"),
        t("services.deep.features.4"),
      ],
      extras: [
        t("services.deep.extras.0"),
        t("services.deep.extras.1"),
        t("services.deep.extras.2"),
        t("services.deep.extras.3"),
        t("services.deep.extras.4"),
      ],
      popular: true,
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: t("services.basic.title"),
      price: "$150 - $225+",
      description: t("services.basic.description"),
      features: [
        t("services.basic.features.0"),
        t("services.basic.features.1"),
        t("services.basic.features.2"),
        t("services.basic.features.3"),
        t("services.basic.features.4"),
      ],
      popular: false,
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: t("services.appliance.title"),
      price: t("services.appliance.price"),
      description: t("services.appliance.description"),
      features: [
        t("services.appliance.features.0"),
        t("services.appliance.features.1"),
        t("services.appliance.features.2"),
        t("services.appliance.features.3"),
        t("services.appliance.features.4"),
        t("services.appliance.features.5"),
      ],
      note: t("services.appliance.note"),
      popular: false,
    },
  ]

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative ${service.popular ? "ring-2 ring-primary" : ""}`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  {t("services.mostPopular")}
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">{service.price}</div>
                <p className="text-muted-foreground text-pretty">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t("services.includes")}:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.extras && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t("services.extras")}:</h4>
                    <ul className="space-y-1">
                      {service.extras.map((extra, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">+</span>
                          {extra}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.note && (
                  <p className="text-xs text-muted-foreground italic border-t border-border pt-3">{service.note}</p>
                )}

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6">
                  <Phone className="w-4 h-4 mr-2" />
                  {t("services.callForQuote")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recurring Service Discount */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t("services.recurring.title")}</h3>
              <p className="text-lg text-muted-foreground mb-6">{t("services.recurring.description")}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                {t("services.recurring.callButton")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
