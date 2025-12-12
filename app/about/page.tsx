import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Users, TrendingUp, Award, Target, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pb-10 border-b-2 border-primary/30">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <span className="text-sm font-bold text-primary uppercase tracking-wide">O Nama</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground mb-5 text-balance">
              HR<span className="text-primary">Sport</span>
              <span className="text-accent">Portal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Vaš najpouzdaniji partner za sportsko klađenje u Hrvatskoj
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 border-l-4 border-primary rounded-xl">
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Naša Misija</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4 text-lg">
                HRSportPortal osnovan je s jasnom vizijom: pružiti hrvatskim ljubiteljima sportskog klađenja
                najkvalitetnije, najdetaljnije i najtočnije informacije o svim aspektima klađenja.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Naš tim stručnjaka sa višegodišnjim iskustvom u industriji sportskog klađenja posvećen je
                transparentnosti, objektivnosti i zaštiti vaših interesa kroz temeljito testiranje svake platforme i
                profesionalno izvještavanje.
              </p>
            </section>

            <section className="bg-card p-8 md:p-10 border-2 border-border rounded-xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Naše Vrijednosti</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-5 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Sigurnost & Pouzdanost</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Preporučujemo samo potpuno licencirane kladionice koje ispunjavaju najviše standarde sigurnosti i
                      zaštite korisnika.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Objektivnost</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Naše recenzije temeljimo isključivo na stvarnim testiranjima i objektivnim kriterijima bez
                      utjecaja komercijalnih interesa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Fokus na Korisnike</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Vi ste u centru svega što radimo. Pružamo informacije koje vam trebaju za sigurne i pametne
                      odluke.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Ažurnost</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Kontinuirano pratimo tržište i ažuriramo recenzije kako biste imali pristup najnovijim
                      informacijama.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-secondary p-8 md:p-10 border-l-4 border-accent rounded-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <TrendingUp className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Naša Metodologija</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                Svaka recenzija na HRSportPortalu rezultat je sveobuhvatnog procesa testiranja koji uključuje:
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary mb-2">01</div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">Detaljno Testiranje</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Registracija, depozit, testiranje funkcionalnosti i provjera svih značajki platforme.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary mb-2">02</div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">Provjera Bonusa</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Evaluacija uvjeta bonusa, provjerljivost ponuda i isplativost promocija.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary mb-2">03</div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">Analiza Isplata</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Testiranje brzine povlačenja sredstava i evaluacija dostupnih metoda plaćanja.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent mb-2">04</div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">Korisnička Podrška</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Testiranje brzine odgovora, stručnosti agenta i kvalitete rješavanja problema.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent mb-2">05</div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">Mobilno Iskustvo</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Evaluacija mobilne aplikacije, responzivnosti i funkcionalnosti na mobilnim uređajima.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent mb-2">06</div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">Konačna Ocjena</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Sveobuhvatna analiza svih aspekata rezultira objektivnom i transparentnom ocjenom.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground p-8 md:p-10 rounded-xl shadow-lg">
              <h2 className="font-display text-3xl font-bold mb-4">Naš Tim Stručnjaka</h2>
              <p className="text-primary-foreground/95 leading-relaxed text-lg">
                HRSportPortal vodi tim posvećenih stručnjaka s dugogodišnjim iskustvom u industriji sportskog klađenja.
                Kombiniramo detaljno poznavanje hrvatskog tržišta s međunarodnim standardima kako bismo vam pružili
                najpouzdanije informacije i preporuke za uspješno i sigurno klađenje.
              </p>
            </section>

            <section className="bg-card p-8 md:p-10 border-2 border-primary/30 rounded-xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Kontaktirajte Nas</h2>
              <p className="text-foreground/80 leading-relaxed mb-4 text-lg">
                Imate pitanja, prijedloge ili trebate pomoć? Naš tim je tu za vas!
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-foreground/80 leading-relaxed">
                  Email:{" "}
                  <a
                    href="mailto:info@hrsportportal.com"
                    className="text-primary font-bold underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    info@hrsportportal.com
                  </a>
                </p>
                <p className="text-accent font-bold text-sm">Odgovaramo u roku od 24 sata</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
