"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">MIMELIAA</h3>
                <p className="text-sm text-muted-foreground">General Services LLC</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-pretty max-w-md">{t("footer.companyDescription")}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:5044289412" className="text-foreground hover:text-primary">
                  (504) 428-9412
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:Mimeliags@gmail.com" className="text-foreground hover:text-primary">
                  Mimeliags@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground">{t("contact.newOrleansMetro")}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.ourServices")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t("footer.deepCleaning")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t("footer.basicCleaning")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t("footer.applianceRepair")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t("footer.recurringServices")}
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.serviceAreas")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t("footer.newOrleans")}</li>
              <li>{t("footer.metairie")}</li>
              <li>{t("footer.kenner")}</li>
              <li>{t("footer.jefferson")}</li>
              <li>{t("footer.gretna")}</li>
              <li>{t("footer.radius")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
