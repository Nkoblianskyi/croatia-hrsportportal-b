import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Cookie, Shield, Settings, Info, TrendingUp } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b-2 border-primary/30">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Cookie className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Politika Kolačića</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4">
              Politika Korištenja Kolačića
            </h1>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
              Ažurirano: 12. prosinca 2024.
            </p>
          </div>

          <div className="space-y-12 prose prose-lg max-w-none">
            <section className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border-l-4 border-primary">
              <div className="flex items-start gap-3 mb-4">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3">Što Su Kolačići?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Kolačići (cookies) su male tekstualne datoteke koje se pohranjuju na vašem uređaju (računalo,
                    tablet, mobitel) kada posjećujete web stranice. Ove datoteke omogućuju portalima da zapamte vaše
                    postavke, preferencije i aktivnosti kako bi vam pružili optimalno korisničko iskustvo.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6 pb-2 border-b-2 border-border">
                Kako SportPortalHR Koristi Kolačiće
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-5">
                SportPortalHR implementira kolačiće kako bi vam pružio najbolje moguće iskustvo:
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Osiguranje stabilnog i pouzdanog rada portala</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Zapamćivanje vaših postavki i individualnih preferencija</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Optimizacija brzine učitavanja stranica</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Prikupljanje anonimnih analitičkih podataka o korištenju portala</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Pružanje personaliziranog i relevantnog sadržaja</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6 pb-2 border-b-2 border-border">
                Vrste Kolačića
              </h2>

              <div className="space-y-6">
                <div className="bg-card border-2 border-primary/20 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">Nužni Kolačići</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Ovi kolačići su esencijalni za osnovno funkcioniranje portala. Bez njih portal ne može pravilno
                        raditi. Omogućuju temeljne funkcije poput navigacije, pristupa zaštićenim dijelovima i
                        sigurnosti.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-2 border-accent/20 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">Analitički Kolačići</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Pomažu nam razumjeti kako posjetitelji koriste portal putem anonimnog prikupljanja statističkih
                        podataka. Ove informacije koristimo za poboljšanje sadržaja i funkcionalnosti.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-2 border-primary/20 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">Funkcionalni Kolačići</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Omogućuju napredne funkcionalnosti i personalizaciju portala, uključujući zapamćivanje jezičnih
                        postavki, regionalnih preferencija i korisničkog ponašanja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-secondary p-8 rounded-xl border-l-4 border-accent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Kontrola i Upravljanje Kolačićima
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Imate potpunu kontrolu nad kolačićima. Većina modernih web preglednika omogućuje upravljanje kolačićima
                putem postavki:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Blokiranje svih ili određenih kolačića</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Brisanje postojećih kolačića</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Primanje obavijesti prije prihvaćanja kolačića</span>
                </li>
              </ul>
              <div className="mt-5 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <p className="text-sm text-foreground font-semibold">
                  ⚠️ Napomena: Blokiranje kolačića može negativno utjecati na funkcionalnost portala i vaše korisničko
                  iskustvo.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground p-8 rounded-xl">
              <h2 className="text-2xl font-display font-bold mb-3">Kontaktirajte Nas</h2>
              <p className="text-primary-foreground/95 leading-relaxed mb-3">
                Imate pitanja o našoj politici kolačića? Slobodno nas kontaktirajte:
              </p>
              <a
                href="mailto:info@sportportalhr.com"
                className="text-accent-foreground font-bold underline underline-offset-4 hover:text-accent transition-colors text-lg"
              >
                info@sportportalhr.com
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
