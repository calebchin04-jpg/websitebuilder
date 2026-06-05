import { Nav } from "@/components/marketing/nav"
import { Hero } from "@/components/marketing/hero"
import { Problems } from "@/components/marketing/problems"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { WhatYouGet } from "@/components/marketing/what-you-get"
import { Pricing } from "@/components/marketing/pricing"
import { MarkhamLoop } from "@/components/marketing/markham-loop"
import { Founding30 } from "@/components/marketing/founding-30"
import { ListingPreviews } from "@/components/marketing/listing-previews"
import { ContactForm } from "@/components/marketing/contact-form"
import { Footer } from "@/components/marketing/footer"
import { CurtainSection } from "@/components/marketing/curtain-section"

export default function JoinPage() {
  return (
    <main>
      <Nav />
      <CurtainSection zIndex={1} bg="#FBF6E9"><Hero /></CurtainSection>
      <CurtainSection zIndex={2} bg="#FBF6E9"><Problems /></CurtainSection>
      {/* HowItWorks: own 250vh internal sticky — page-level sticky breaks its scroll tracking */}
      <div style={{ position: "relative", zIndex: 3 }}><HowItWorks /></div>
      <CurtainSection zIndex={4} bg="#F4ECD8"><WhatYouGet /></CurtainSection>
      <CurtainSection zIndex={5} bg="#F4ECD8"><Pricing /></CurtainSection>
      {/* MarkhamLoop: own 220vh internal sticky — same reason as HowItWorks */}
      <div style={{ position: "relative", zIndex: 6 }}><MarkhamLoop /></div>
      <CurtainSection zIndex={7} bg="#FBF6E9"><Founding30 /></CurtainSection>
      <CurtainSection zIndex={8} bg="#F4ECD8"><ListingPreviews /></CurtainSection>
      <CurtainSection zIndex={9} bg="#F4ECD8"><ContactForm /></CurtainSection>
      <Footer />
    </main>
  )
}
