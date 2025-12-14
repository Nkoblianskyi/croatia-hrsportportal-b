import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t-4 border-primary">
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-primary">Sport</span>
              <span className="text-accent">Portal</span>
              HR
            </h3>
            <p className="text-sm text-background/80 leading-relaxed">
              SportPortalHR je vodеći hrvatski portal za sportsko klađenje. Pružamo vam detaljne recenzije, ekskluzivne
              bonuse i stručne savjete za uspješno klađenje na sport.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-background uppercase tracking-wider">Brzi Linkovi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-background/80 hover:text-accent transition-colors">
                  Početna Stranica
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-background/80 hover:text-accent transition-colors">
                  O SportPortaluHR
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-background/80 hover:text-accent transition-colors">
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-background/80 hover:text-accent transition-colors">
                  Politika Kolačića
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-background uppercase tracking-wider">Kontakt</h4>
            <p className="text-sm text-background/80 leading-relaxed mb-3">Email: info@sportportalhr.com</p>
            <p className="text-sm text-background/80 leading-relaxed">
              Za sve upite i sugestije, slobodno nas kontaktirajte.
            </p>
          </div>
        </div>

        <div className="mb-10 p-6 bg-background/10 border-2 border-background/20 rounded-lg">
          <p className="text-xs text-background/85 leading-relaxed text-center md:text-left">
            <strong className="text-background font-bold">Važna Napomena:</strong> SportPortalHR je informativni portal
            koji pruža recenzije i usporedbe sportskih kladionica. Svi sadržaji služe isključivo u informativne svrhe.
            Klađenje može biti opasno i izazvati ovisnost. Kladite se odgovorno i samo ako ste punoljetni (18+).
            Koristite isključivo licencirane kladionice koje posluju u skladu s hrvatskim zakonodavstvom. Portal ne
            preuzima odgovornost za eventualne financijske gubitke.
          </p>
        </div>

        <div className="border-t-2 border-background/20 pt-10 pb-8">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="bg-accent text-accent-foreground font-bold text-lg px-5 py-2 rounded-lg">18+</div>
            <h4 className="text-base font-bold text-background">Odgovorno Klađenje - Igrajte Pametno</h4>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-background/15 hover:bg-background/25">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain bg-background px-1.5" />
              </div>
            </Link>

            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-background/15 hover:bg-background/25">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain bg-background px-1.5" />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-background/15 hover:bg-background/25">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain bg-background px-1.5" />
              </div>
            </Link>

            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-background/15 hover:bg-background/25">
                <Image src="/hupis.png" alt="Hupis" fill className="object-contain bg-background px-1.5" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-background/15 hover:bg-background/25">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain bg-background px-1.5" />
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t-2 border-background/20 pt-6 text-center">
          <p className="text-sm text-background/80">
            {new Date().getFullYear()} <span className="font-bold text-accent">SportPortalHR.com</span> - Sva prava
            pridržana.
          </p>
        </div>
      </div>
    </footer>
  )
}
