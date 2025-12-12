"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie, Shield, CheckCircle2 } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-primary shadow-2xl z-50 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl flex-shrink-0 shadow-lg">
              <Cookie className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Kolačići i Privatnost</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                HRSportPortal koristi kolačiće za poboljšanje korisničkog iskustva. Prihvaćanjem pristajete na našu{" "}
                <Link href="/cookie-policy" className="text-primary font-semibold hover:underline">
                  politiku kolačića
                </Link>{" "}
                i{" "}
                <Link href="/privacy-policy" className="text-primary font-semibold hover:underline">
                  politiku privatnosti
                </Link>
                .
              </p>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-gray-600 font-medium">Sigurno</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-gray-600 font-medium">Zaštićeno</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              onClick={handleAccept}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white h-12 px-8 font-bold text-base shadow-lg hover:shadow-xl transition-all"
            >
              Prihvati Sve
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 h-12 px-8 font-semibold text-base bg-transparent"
            >
              Samo Nužno
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
