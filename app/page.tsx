"use client"

import { sportsSites } from "@/types"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { RatingMethodology } from "@/components/rating-methodology"
import { Footer } from "@/components/footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { SportsVariety } from "@/components/sports-variety"
import { SportHrvatskaAbout } from "@/components/sport-hrvatska-about"
import { FaqSection } from "@/components/faq-section"
import { FeaturedArticles } from "@/components/featured-articles"
import { SportsCategories } from "@/components/sports-categories"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <Image src="/croatian-football-team-action.jpg" alt="" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="relative max-w-[1300px] mx-auto">
          <Hero />
          <FeaturedArticles />
          <SportsCategories />
          <RatingList sites={sportsSites} />
          <SportHrvatskaAbout />
          <SportsVariety />
          <RatingMethodology />
          <FaqSection />
        </main>
        <Footer />
        <TopOffersModal sites={sportsSites} />
        <CookieBanner />
      </div>
    </div>
  )
}
