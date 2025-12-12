"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Gift, TrendingUp, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { SportsSite } from "@/types"

interface TopOffersModalProps {
  sites: SportsSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = (open: boolean) => {
    setIsOpen(open)
  }

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
      } else {
        starElements.push(<Star key={i} className="h-5 w-5 text-gray-300" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] max-w-[500px] p-0 bg-white border-0 overflow-hidden rounded-2xl shadow-2xl">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => handleClose(false)}
            className="bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-primary via-primary to-accent p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-3 shadow-sm">
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Ekskluzivna Ponuda</span>
            </div>

            <h2 className="text-2xl font-display font-extrabold text-white mb-2">Najbolja Kladionica</h2>
            <p className="text-white/90 text-sm font-medium">Preporučeno od HRSportPortal stručnjaka</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-200">
            <div className="relative bg-black h-20 w-full max-w-[200px] mx-auto mb-4 p-4 rounded-lg shadow-sm">
              <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
              <span className="font-bold text-xl text-gray-900">{topSite.rating.toFixed(1)}</span>
              <span className="text-gray-500 text-sm">({topSite.reviews} recenzija)</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-bold">Najviše ocijenjeno</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-5 rounded-xl border-2 border-accent/30">
            <div className="text-center mb-1">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Bonus Dobrodošlice</span>
            </div>
            <p className="font-display font-bold text-gray-900 leading-tight text-center text-2xl">{topSite.bonus}</p>
          </div>

          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-base font-bold text-center transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl rounded-xl"
            onClick={() => handleClose(false)}
          >
            POSJETITE KLADIONICU
          </a>

          <p className="text-xs text-gray-500 text-center font-medium leading-relaxed">
            18+ | Primjenjuju se uvjeti | Kockajte odgovorno
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
