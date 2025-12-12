"use client"
import Image from "next/image"
import { Star, ExternalLink } from "./icons"
import type { SportsSite } from "@/types"

interface RatingListProps {
  sites: SportsSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const formatNumber = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-500 text-yellow-500" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-muted" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4 md:h-5 md:w-5">
            <Star className="absolute h-4 w-4 md:h-5 md:w-5 text-muted" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-500 text-yellow-500" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const DisclaimerSection = () => (
    <div className="bg-gray-50 border-t-2 border-gray-200 px-4 py-3">
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
        <div className="flex items-center gap-1.5 text-gray-700">
          <span className="font-semibold">18+</span>
        </div>
        <span className="text-gray-400">|</span>
        <div className="flex items-center gap-1.5 text-gray-700">
          <span className="font-medium">Odgovorno klađenje</span>
        </div>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600 font-medium">Ličensirano i regulirano</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-500 italic">Igrajte odgovorno</span>
      </div>
    </div>
  )

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px] md:px-0">
        <div className="grid gap-4 md:gap-5">
          {sites.map((site, index) => {
            const isFirstPlace = index === 0

            return (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-visible group transition-all duration-300 rounded ${
                  isFirstPlace
                    ? "bg-white border-2 border-yellow-500 shadow-lg hover:shadow-xl"
                    : "bg-white border-2 border-green-500 shadow-md hover:shadow-lg hover:border-green-400"
                }`}
              >
                {site.badges.length > 0 && index < 3 && (
                  <div className="absolute -top-3 left-6 z-20">
                    <div
                      className={`${
                        isFirstPlace ? "bg-yellow-500" : "bg-green-600"
                      } text-white text-xs md:text-sm font-bold px-4 md:px-5 py-1.5 uppercase tracking-wide shadow-sm rounded`}
                    >
                      {site.badges[0]}
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-[280px_1fr_240px_220px] items-center gap-6 p-8">
                    <div className="relative">
                      <div
                        className={`flex items-center justify-center bg-black p-6 h-[140px] border-2 transition-all rounded ${
                          isFirstPlace ? "border-yellow-500" : "border-green-500"
                        }`}
                      >
                        <div className="relative h-20 w-full">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-6 border-l-2 border-r-2 border-gray-200">
                      <p
                        className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                          isFirstPlace ? "text-yellow-600" : "text-green-700"
                        }`}
                      >
                        PONUDA
                      </p>
                      <h3 className="text-gray-900 text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">
                        {site.bonus}
                      </h3>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-6 border-r-2 border-gray-200">
                      <p
                        className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                          isFirstPlace ? "text-yellow-600" : "text-green-700"
                        }`}
                      >
                        OCJENA
                      </p>
                      <div className="relative mb-3">
                        <div className="text-5xl md:text-6xl font-bold text-black drop-shadow-lg">
                          {site.rating.toFixed(1)}
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-2">{renderStars(site.rating)}</div>
                      <p className="text-gray-700 text-xs font-medium drop-shadow">
                        ({formatNumber(site.reviews)} recenzija)
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 px-6">
                      <div
                        className={`w-full transition-all duration-300 text-white font-bold py-5 px-6 text-center text-sm uppercase tracking-wide transform group-hover:scale-105 shadow-sm rounded ${
                          isFirstPlace ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        Saznaj vise
                      </div>
                      <p
                        className={`font-semibold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors ${
                          isFirstPlace
                            ? "text-yellow-600 group-hover:text-yellow-700"
                            : "text-green-700 group-hover:text-green-800"
                        }`}
                      >
                        Pogledaj detalje <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                  <DisclaimerSection />
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                  <div className="p-6">
                    <div className="grid grid-cols-[180px_1fr_180px] gap-4 items-center mb-4">
                      <div className="relative">
                        <div
                          className={`flex items-center justify-center bg-black p-4 h-[100px] border-2 transition-all rounded ${
                            isFirstPlace ? "border-yellow-500" : "border-green-500"
                          }`}
                        >
                          <div className="relative h-16 w-full">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center px-4 border-l-2 border-r-2 border-gray-200">
                        <p
                          className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                            isFirstPlace ? "text-yellow-600" : "text-green-700"
                          }`}
                        >
                          PONUDA
                        </p>
                        <h3 className="text-gray-900 text-lg font-bold leading-tight drop-shadow-lg">{site.bonus}</h3>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center px-4">
                        <p
                          className={`text-xs font-bold mb-1 uppercase tracking-wide ${
                            isFirstPlace ? "text-yellow-600" : "text-green-700"
                          }`}
                        >
                          OCJENA
                        </p>
                        <div className="text-4xl font-bold mb-2 text-black drop-shadow-lg">
                          {site.rating.toFixed(1)}
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-gray-700 font-medium text-[10px] drop-shadow">
                          ({formatNumber(site.reviews)} recenzija)
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 pt-4 border-t-2 border-gray-200">
                      <div
                        className={`w-full max-w-xs transition-all duration-300 text-white font-bold py-4 px-6 text-center text-sm uppercase tracking-wide transform group-hover:scale-105 shadow-sm rounded ${
                          isFirstPlace ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        Saznaj vise
                      </div>
                      <p
                        className={`font-semibold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors ${
                          isFirstPlace
                            ? "text-yellow-600 group-hover:text-yellow-700"
                            : "text-green-700 group-hover:text-green-800"
                        }`}
                      >
                        Pogledaj detalje <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>

                    <DisclaimerSection />
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="p-4 pt-8">
                    <div className="grid grid-cols-2 gap-3 items-stretch mb-4">
                      <div className="flex justify-center items-center">
                        <div
                          className={`bg-gray-50 p-3 w-full h-24 flex items-center justify-center border-2 rounded ${
                            isFirstPlace ? "border-yellow-500" : "border-green-500"
                          }`}
                        >
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={120}
                            height={60}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="text-center flex flex-col justify-center items-center px-2 py-3 bg-gray-50 border-2 border-gray-200 rounded">
                        <div
                          className={`uppercase font-bold mb-1.5 text-xs ${isFirstPlace ? "text-yellow-600" : "text-green-700"}`}
                        >
                          PONUDA
                        </div>
                        <div className="font-bold text-gray-900 leading-tight text-xl">{site.bonus}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2 py-3 border-t-2 border-gray-200">
                      <div className="text-center">
                        <p
                          className={`text-xs font-bold mb-1 uppercase ${isFirstPlace ? "text-yellow-600" : "text-green-700"}`}
                        >
                          OCJENA
                        </p>
                        <div className="text-3xl font-bold text-black">{site.rating.toFixed(1)}</div>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                        <div className="text-gray-700 font-medium text-center text-xs">
                          ({formatNumber(site.reviews)})
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div
                          className={`text-white px-3 py-2 font-bold uppercase whitespace-nowrap shadow-sm text-lg rounded ${
                            isFirstPlace ? "bg-yellow-500" : "bg-green-600"
                          }`}
                        >
                          DETALJI
                        </div>
                      </div>
                    </div>

                    <DisclaimerSection />
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
