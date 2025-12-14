"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X, AlertCircle, Info, Shield } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[700px] p-0 bg-white border-0 max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
        <DialogHeader className="p-6 pb-4 border-b-2 border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl">
              <Info className="h-6 w-6 text-white" />
            </div>
            <DialogTitle className="text-2xl font-display font-bold text-gray-900">Važne Informacije</DialogTitle>
          </div>
          <DialogClose className="absolute right-6 top-6 rounded-full bg-gray-100 hover:bg-gray-200 p-2 transition-colors">
            <X className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Zatvori</span>
          </DialogClose>
        </DialogHeader>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-l-4 border-accent p-6 rounded-r-xl">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <h3 className="font-display font-bold text-xl text-gray-900">Važna Napomena</h3>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong className="text-primary">sportportalhr.com</strong> je neovisna sportska informativna platforma.{" "}
              <strong className="text-gray-900">Mi ne nudimo usluge klađenja.</strong> Svi sportski klubovi i kladionice
              navedeni na ovoj stranici su službeno registrirane institucije. Ova stranica može sadržavati affiliate
              linkove i možemo primiti provizije kada posjetite partnere putem naših poveznica.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b-2 border-primary/20">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900">Izdavačke Informacije</h3>
            </div>
            <div className="space-y-4 pl-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-base text-gray-700 leading-relaxed">
                  SportPortalHR.com je besplatna informativna usluga za praćenje sportskih vijesti i klađenja. Primamo
                  naknade od istaknutih brandova, što može utjecati na njihov položaj na listi.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-base text-gray-700 leading-relaxed">
                  Svi istaknuti sportski sadržaji i recenzije kladionica su verificirani od strane našeg stručnog tima.
                  Trudimo se za maksimalnu točnost informacija.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-base text-gray-700 leading-relaxed">
                  Sportski događaji, kvote i bonusi podložni su promjenama. Uvijek provjerite službene stranice
                  kladionica za najnovije informacije.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b-2 border-accent/20">
              <div className="bg-accent/10 p-2 rounded-lg">
                <Info className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900">Autorska Prava</h3>
            </div>
            <div className="space-y-4 pl-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-base text-gray-700 leading-relaxed">
                  Sav sadržaj na ovoj stranici je zaštićen autorskim pravima i namijenjen je isključivo za informativne
                  svrhe.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-base text-gray-700 leading-relaxed">
                  Sportske analize i preporuke predstavljaju mišljenja naših stručnjaka i ne smiju se koristiti za
                  komercijalne svrhe bez dozvole.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-base text-gray-700 leading-relaxed">
                  Za dodatne informacije ili pitanja, kontaktirajte našu uredničku ekipu putem službenih kanala.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-200 p-5 rounded-xl mt-6">
            <p className="text-sm text-gray-600 text-center font-semibold">
              © 2025 SportPortalHR.com - Sva prava pridržana
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
