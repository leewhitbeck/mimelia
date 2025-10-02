import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceArea } from "@/components/service-area"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyCallButton } from "@/components/sticky-call-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceArea />
      <ContactSection />
      <Footer />
      <StickyCallButton />
    </main>
  )
}
