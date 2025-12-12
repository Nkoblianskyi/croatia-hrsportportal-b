import { Target, Award, CheckCircle2, TrendingUp, Users, Shield, BookOpen } from "lucide-react"

export function RatingMethodology() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/50 to-card bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-12 pb-8 border-b-2 border-primary/30">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="text-xs font-bold text-accent uppercase tracking-wide">Metodologija</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-display">
            Kako Ocjenjujemo Kladionice
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Transparentan i objektivan proces evaluacije za vaše povjerenje
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="mb-10 bg-card p-8 rounded-xl border-2 border-border shadow-sm">
            <p className="text-base text-foreground/80 leading-relaxed">
              HRSportPortal je nezavisni portal osnovan s ciljem pružanja objektivnih recenzija, detaljnih usporedbi i
              stručnih savjeta o platformama za sportsko klađenje u Hrvatskoj. Naš tim iskusnih stručnjaka posvećen je
              transparentnosti, točnosti i zaštiti interesa korisnika kroz rigorozan proces testiranja.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground font-display">Naše Temeljne Vrijednosti</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-transparent p-7 rounded-xl border-2 border-primary/20">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 font-display">Nepristranost i Transparentnost</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Sve naše recenzije temelje se na detaljnom testiranju i objektivnim kriterijima ocjenjivanja.
                  Komercijalni interesi nikada ne utječu na naše ocjene - preporučujemo samo sigurne, licencirane
                  platforme koje ispunjavaju najviše standarde kvalitete i pouzdanosti.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-transparent p-7 rounded-xl border-2 border-accent/20">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 font-display">Edukacija Korisnika</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Vjerujemo da informirani korisnici donose bolje odluke. Zato pružamo detaljne vodiče o vrstama oklada,
                  strategijama klađenja, tumačenju koeficijenata i razumijevanju uvjeta bonusa. Naš sadrzaj namijenjen
                  je i početnicima i iskusnim korisnicima.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-transparent p-7 rounded-xl border-2 border-primary/20">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 font-display">Promicanje Odgovornosti</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Odgovorno klađenje temelj je svega što radimo. Aktivno promičemo alate za samoisključenje,
                  postavljanje limita i svjesnost o rizicima povezanim s klađenjem. Surađujemo s organizacijama koje
                  pružaju pomoć osobama s poteškoćama.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-transparent p-7 rounded-xl border-2 border-accent/20">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 font-display">Ažurnost Informacija</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Tržište sportskog klađenja konstantno se razvija. Naš tim redovito ažurira recenzije, prati nove
                  bonuse i promocije te testira izmjene u funkcioniranju platformi. Korisnici uvijek dobivaju
                  najaktualnije i najtočnije informacije.
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border-2 border-primary/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-3 rounded-lg">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display">Proces Evaluacije</h3>
            </div>

            <div className="space-y-4">
              {[
                { num: "01", text: "Detaljno testiranje platforme kroz stvarnu registraciju i verifikaciju računa" },
                { num: "02", text: "Analiza funkcionalnosti, bonusa, koeficijenata i sportske ponude" },
                { num: "03", text: "Evaluacija korisničke podrške i kvalitete rješavanja problema" },
                { num: "04", text: "Testiranje brzine isplate i dostupnih metoda plaćanja" },
                { num: "05", text: "Procjena mobilnog iskustva i korisničkog sučelja" },
                { num: "06", text: "Priprema sveobuhvatne recenzije s jasnim prednostima i nedostacima" },
                { num: "07", text: "Kontinuirano ažuriranje ocjena prema novim promjenama na platformi" },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">
                      {step.num}
                    </div>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed pt-2">{step.text}</p>
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 p-8 bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 font-display">Naša Obveza Prema Vama</h3>
            <p className="text-primary-foreground/95 leading-relaxed">
              HRSportPortal nije kladionica - mi smo nezavisni portal koji vam pomaže pronaći najbolje platforme za
              sportsko klađenje u Hrvatskoj. Naša potpuna uređnička neovisnost jamči objektivne i pouzdane informacije
              koje vam omogućuju sigurno, informirano i uspješno klađenje.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
