"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("[v0] Form submission started")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log("[v0] API response:", data)

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSuccess(true)
      toast({
        title: t("contact.thankYou"),
        description: t("contact.successMessage"),
        duration: 5000,
      })
      console.log("[v0] Success message displayed")

      setFormData({ name: "", email: "", phone: "", service: "", message: "" })

      setTimeout(() => setIsSuccess(false), 10000)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      toast({
        title: "Error",
        description: t("contact.errorMessage"),
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">{t("contact.subtitle")}</p>
          <span className="inline-block mt-4 px-4 py-2 border-2 border-primary/30 rounded-lg bg-primary/5 text-sm font-medium text-primary">
            *{t("contact.disclaimer")}
          </span>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("contact.getInTouch")}</h3>
                <p className="text-muted-foreground mb-8 text-pretty">{t("contact.getInTouchDescription")}</p>
              </div>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t("contact.callUs")}</h4>
                        <a href="tel:5044289412" className="text-lg text-primary hover:text-primary/80 font-semibold">
                          (504) 428-9412
                        </a>
                        <p className="text-sm text-muted-foreground">{t("contact.available")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t("contact.emailUs")}</h4>
                        <a href="mailto:Mimeliags@gmail.com" className="text-lg text-primary hover:text-primary/80">
                          Mimeliags@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground">{t("contact.respond")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t("contact.serviceArea")}</h4>
                        <p className="text-foreground">{t("contact.newOrleansMetro")}</p>
                        <p className="text-sm text-muted-foreground">{t("contact.coverage")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t("contact.businessHours")}</h4>
                        <p className="text-foreground">{t("contact.weekdays")}</p>
                        <p className="text-sm text-muted-foreground">{t("contact.weekend")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{t("contact.requestQuote")}</CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{t("contact.thankYou")}</h3>
                    <p className="text-muted-foreground text-pretty max-w-md mx-auto">{t("contact.successMessage")}</p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          {t("contact.fullName")} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-border"
                          placeholder={t("contact.fullName")}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          {t("contact.phoneNumber")} *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-border"
                          placeholder="(504) 123-4567"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t("contact.emailAddress")} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-border"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        {t("contact.serviceNeeded")}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        <option value="">{t("contact.selectService")}</option>
                        <option value="deep-cleaning">{t("contact.deepCleaning")}</option>
                        <option value="basic-cleaning">{t("contact.basicCleaning")}</option>
                        <option value="appliance-repair">{t("contact.applianceRepair")}</option>
                        <option value="recurring-service">{t("contact.recurringService")}</option>
                        <option value="other">{t("contact.other")}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        {t("contact.message")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-border"
                        placeholder={t("contact.messagePlaceholder")}
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t("contact.sending") : t("contact.submitButton")}
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">{t("contact.requiredFields")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("contact.preferCall")}{" "}
                        <a href="tel:5044289412" className="text-primary hover:text-primary/80 font-semibold">
                          (504) 428-9412
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
