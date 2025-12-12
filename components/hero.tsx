"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import { Trophy, Shield, TrendingUp } from "lucide-react"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getCurrentDate = () => {
    const now = new Date()
    const day = now.getDate()
    const month = now.toLocaleDateString("hr-HR", { month: "long" })
    const year = now.getFullYear()
    return `${day}. ${month} ${year}.`
  }

  return (
    <section className="relative border-b-2 border-primary/20 overflow-hidden">
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-[1300px] relative z-10 py-12 sm:py-20">
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-2">
            <span className="text-sm font-bold text-white uppercase tracking-wide">#1 Portal u Hrvatskoj</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-balance text-white drop-shadow-lg">
            Vodič za Uspješno Sportsko Klađenje
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-pretty max-w-3xl mx-auto text-white/95 font-medium drop-shadow">
            Otkrijte najbolje kladionice u Hrvatskoj s ekskluzivnim bonusima, profesionalnim recenzijama i stručnim
            savjetima za maksimalne dobitke
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-white shadow-md">
              <Trophy className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-gray-900">Provjerene Kladionice</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-white shadow-md">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-gray-900">100% Sigurno</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-white shadow-md">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-gray-900">Ekskluzivni Bonusi</span>
            </div>
          </div>

          <p className="text-sm font-semibold text-white/90 pt-3 drop-shadow">Ažurirano: {getCurrentDate()}</p>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
