import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Shield,
  Lock,
  Eye,
  FileText,
  UserCheck,
  AlertCircle,
  Mail,
  Monitor,
  Activity,
  Target,
  Cookie,
} from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b-2 border-primary/30">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Zaštita Privatnosti</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4">
              Politika Privatnosti
            </h1>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
              Ažurirano: 12. prosinca 2024.
            </p>
          </div>

          <div className="space-y-12 prose prose-lg max-w-none">
            <section className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3">Naša Obveza Prema Vama</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    HRSportPortal potpuno je posvećen zaštiti vaše privatnosti i osobnih podataka. Ovaj dokument
                    transparentno objašnjava način na koji prikupljamo, obrađujemo, koristimo i štitimo vaše podatke
                    tijekom korištenja našeg portala. Vaša privatnost je naš prioritet.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6 pb-2 border-b-2 border-border flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Vrste Podataka Koje Prikupljamo
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                HRSportPortal može prikupljati sljedeće kategorije podataka:
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-card border-2 border-primary/20 p-6 rounded-lg">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">Osobni Identifikatori</h3>
                  <p className="text-sm text-foreground/70">Ime, prezime, korisničko ime ili nadimak</p>
                </div>

                <div className="bg-card border-2 border-accent/20 p-6 rounded-lg">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">Kontaktne Informacije</h3>
                  <p className="text-sm text-foreground/70">Email adresa, telefonski broj</p>
                </div>

                <div className="bg-card border-2 border-primary/20 p-6 rounded-lg">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">Tehnički Podaci</h3>
                  <p className="text-sm text-foreground/70">
                    IP adresa, vrsta preglednika, operativni sustav, rezolucija zaslona
                  </p>
                </div>

                <div className="bg-card border-2 border-accent/20 p-6 rounded-lg">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Activity className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">Podaci o Aktivnosti</h3>
                  <p className="text-sm text-foreground/70">
                    Stranice koje posjećujete, vrijeme provedeno na portalu, interakcije
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-secondary p-8 rounded-xl border-l-4 border-accent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-5 flex items-center gap-2">
                <Target className="w-6 h-6 text-accent" />
                Svrha Obrade Podataka
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">Vaše podatke koristimo isključivo za:</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Pružanje i kontinuirano unapređenje naših usluga i sadržaja</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Personalizaciju sadržaja prema vašim interesima i preferencijama</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Komunikaciju vezanu uz naše usluge, novosti i ažuriranja</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Analizu korištenja portala radi optimizacije funkcionalnosti</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Zaštitu sigurnosti, integriteta i pouzdanosti portala</span>
                </li>
              </ul>
            </section>

            <section className="bg-card border-2 border-primary/30 p-8 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3">Mjere Zaštite Podataka</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Implementirali smo višeslojne tehničke i organizacijske sigurnosne mjere kako bismo osigurali
                    maksimalnu zaštitu vaših osobnih podataka:
                  </p>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">→</span> SSL/TLS enkripcija za sve komunikacije
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span> Redovite sigurnosne revizije i ažuriranja
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span> Ograničen pristup podacima samo ovlaštenom osoblju
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span> Praćenje i analiza sigurnosnih prijetnji
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-foreground font-semibold">
                      ✓ Potpuna usklađenost s GDPR-om i hrvatskim zakonodavstvom
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6 pb-2 border-b-2 border-border flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Vaša Prava
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-5">
                U pogledu vaših osobnih podataka imate sljedeća zakonska prava:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary rounded">
                  <span className="text-2xl font-bold text-primary">1</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Pravo Pristupa</h4>
                    <p className="text-sm text-foreground/70">
                      Možete zatražiti pristup svim osobnim podacima koje imamo o vama
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gradient-to-r from-accent/5 to-transparent border-l-2 border-accent rounded">
                  <span className="text-2xl font-bold text-accent">2</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Pravo Ispravka</h4>
                    <p className="text-sm text-foreground/70">
                      Možete zatražiti ispravak netočnih ili nepotpunih podataka
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary rounded">
                  <span className="text-2xl font-bold text-primary">3</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Pravo Brisanja</h4>
                    <p className="text-sm text-foreground/70">
                      Možete zatražiti trajno brisanje vaših osobnih podataka
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gradient-to-r from-accent/5 to-transparent border-l-2 border-accent rounded">
                  <span className="text-2xl font-bold text-accent">4</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Pravo Ograničenja i Prigovora</h4>
                    <p className="text-sm text-foreground/70">
                      Možete ograničiti obradu ili uložiti prigovor na način obrade podataka
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary rounded">
                  <span className="text-2xl font-bold text-primary">5</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Pravo Prenosivosti</h4>
                    <p className="text-sm text-foreground/70">
                      Možete zatražiti prijenos podataka drugom pružatelju usluga
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-secondary p-6 rounded-xl border border-border">
              <div className="flex items-start gap-3">
                <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">Korištenje Kolačića</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    HRSportPortal koristi kolačiće za poboljšanje korisničkog iskustva. Detaljne informacije o vrstama
                    kolačića i njihovoj svrsi pronađite u našoj{" "}
                    <a
                      href="/cookie-policy"
                      className="text-primary font-bold underline underline-offset-4 hover:text-primary/80"
                    >
                      Politici Kolačića
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-7 h-7 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-display font-bold mb-3">Kontaktirajte Nas</h2>
                  <p className="text-primary-foreground/95 leading-relaxed mb-4">
                    Za sva pitanja vezana uz zaštitu privatnosti, ostvarivanje vaših prava ili sigurnost podataka,
                    slobodno nas kontaktirajte:
                  </p>
                  <a
                    href="mailto:info@hrsportportal.com"
                    className="text-accent-foreground font-bold underline underline-offset-4 hover:text-accent transition-colors text-lg"
                  >
                    info@hrsportportal.com
                  </a>
                  <p className="text-primary-foreground/90 text-sm mt-3">
                    ⚡ Odgovaramo na sve upite u roku od 48 sati
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
