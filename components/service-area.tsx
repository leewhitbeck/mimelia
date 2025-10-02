"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Car, Home } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function ServiceArea() {
  const { t } = useLanguage()

  const areas = [
    "New Orleans",
    "Metairie",
    "Kenner",
    "Jefferson",
    "Gretna",
    "Westwego",
    "Marrero",
    "Harvey",
    "Algiers",
    "Chalmette",
    "Arabi",
    "Terrytown",
  ]

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{t("serviceArea.title")}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">{t("serviceArea.subtitle")}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Service Areas List */}
            <div className="h-full">
              <Card className="border-border h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">{t("serviceArea.primaryAreas")}</h3>
                  </div>

                  <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Home className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{t("serviceArea.airbnb.title")}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("serviceArea.airbnb.description")}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {areas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-foreground text-sm">{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-muted-foreground text-center text-sm">
                      <strong className="text-foreground">{t("serviceArea.extendedCoverage")}:</strong>{" "}
                      {t("serviceArea.extendedDescription")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service Details */}
            <div className="space-y-6 h-full">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h4 className="text-xl font-semibold text-foreground">{t("serviceArea.hours.title")}</h4>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">{t("serviceArea.hours.weekdays")}:</strong> 8:00 AM - 6:00 PM
                    </p>
                    <p>
                      <strong className="text-foreground">{t("serviceArea.hours.saturday")}:</strong> 9:00 AM - 4:00 PM
                    </p>
                    <p>
                      <strong className="text-foreground">{t("serviceArea.hours.sunday")}:</strong>{" "}
                      {t("serviceArea.hours.byAppointment")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Car className="w-6 h-6 text-primary mr-3" />
                    <h4 className="text-xl font-semibold text-foreground">{t("serviceArea.travel.title")}</h4>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• {t("serviceArea.travel.sameDay")}</p>
                    <p>• {t("serviceArea.travel.noTravel")}</p>
                    <p>• {t("serviceArea.travel.flexible")}</p>
                    <p>• {t("serviceArea.travel.emergency")}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">{t("serviceArea.notListed.title")}</h4>
                <p className="text-muted-foreground mb-4">{t("serviceArea.notListed.description")}</p>
                <a
                  href="tel:5044289412"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
                >
                  {t("serviceArea.notListed.callButton")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
