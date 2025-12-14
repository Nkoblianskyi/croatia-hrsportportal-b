import { Shield, TrendingUp, Users, AlertTriangle, Award, Sliders } from "lucide-react"

export function SportHrvatskaAbout() {
  return (
    <section className="py-16 md:py-24 relative bg-gradient-to-br from-card to-secondary/30 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-12 pb-8 border-b-2 border-primary/30">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Edukacija</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-display text-balance">
            Vodič Kroz Svijet Sportskog Klađenja
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Sve što trebate znati za sigurno, informirano i odgovorno klađenje u Hrvatskoj
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="mb-10 bg-card p-8 rounded-xl border-2 border-border shadow-sm">
            <p className="text-base text-foreground/80 leading-relaxed mb-5">
              Platforme za sportsko klađenje predstavljaju moderne digitalne servise koji omogućuju korisnicima
              predviđanje ishoda sportskih događaja i potencijalno ostvarivanje dobitaka. Ove platforme nude širok
              spektar sportskih disciplina - od najpopularnijih poput nogometa, košarke, tenisa i rukometa, do nišnih
              sportova s mogućnošću klađenja prije početka ili tijekom trajanja događaja (live betting).
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Suvremene kladionice karakterizira intuitivno korisničko sučelje, raznovrsne vrste oklada, konkurentni
              koeficijenti i pouzdane metode plaćanja. Kvalitetne platforme također nude mobilne aplikacije, live stream
              sportskih događaja, detaljnu statistiku i alate za odgovorno klađenje koji vam pomažu kontrolirati vaše
              navike.
            </p>
          </div>

          <div className="my-10 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-lg">
            <p className="text-xl text-foreground font-display italic text-pretty">
              "Odgovorno klađenje podrazumijeva disciplinu, samokontrolu i jasno razumijevanje povezanih rizika. Kladite
              se samo ono što možete priuštiti izgubiti."
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground font-display">Sigurnost i Odgovornost</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 font-display">Licencirane Platforme</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Koristite isključivo platforme s važećim licencama Ministarstva financija RH. Licencirane kladionice
                  moraju poštovati stroge standarde sigurnosti, zaštite podataka i odgovornog klađenja. Uvijek
                  provjerite postojanje licence prije registracije i depozita.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sliders className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 font-display">Postavljanje Ograničenja</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Iskoristite alate za samoisključenje i postavljanje limita depozita dostupne na svim legalnim
                  platformama. Odredite mjesečni budžet koji možete priuštiti izgubiti i strogo se pridržavajte tog
                  limita. Klađenje nikada ne smije ugroziti vaše osnovne financijske obveze.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 font-display">Prepoznavanje Rizičnih Obrazaca</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Ako klađenje postane opsesija, ulažete više od svojih mogućnosti ili pokušavate nadoknaditi gubitke
                  dodatnim kladama, možda razvijate problem. Organizacije poput Hupis i PBSVI nude besplatnu stručnu
                  podršku osobama s poteškoćama vezanim uz klađenje.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 font-display">Zaštita Maloljetnika</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Sportsko klađenje strogo je zabranjeno osobama mlađim od 18 godina. Sve legalne platforme zahtijevaju
                  verifikaciju identiteta i dobi prije omogućavanja klađenja. Roditelji moraju osigurati zaštitu svojih
                  pristupnih podataka od maloljetnika.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-accent/10 p-3 rounded-lg">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground font-display">Najpopularniji Sportovi za Klađenje</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/20">
                <h4 className="text-lg font-bold text-foreground mb-2 font-display">Nogomet</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Najpopularniji sport za klađenje u Hrvatskoj i svijetu. HNL, Liga prvaka, Premier League, La Liga,
                  Bundesliga i svjetska prvenstva nude neograničene mogućnosti i atraktivne koeficijente.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-lg border border-accent/20">
                <h4 className="text-lg font-bold text-foreground mb-2 font-display">Košarka</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  NBA, EuroLeague i domaća prvenstva privlače veliki broj korisnika raznovrsnim opcijama klađenja, live
                  statistikom i dinamičnim koeficijentima tijekom utakmica.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/20">
                <h4 className="text-lg font-bold text-foreground mb-2 font-display">Tenis</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Grand Slam turniri, ATP i WTA eventi omogućuju klađenje tijekom cijele godine s live opcijama za svaki
                  gem, set i raznolike specijalne ponude.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-lg border border-accent/20">
                <h4 className="text-lg font-bold text-foreground mb-2 font-display">Rukomet</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Bogata hrvatska rukometna tradicija čini ovaj sport iznimno popularnim za klađenje, posebno tijekom
                  Svjetskih i Europskih prvenstava.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-2 border-primary/30 bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-xl">
            <p className="text-sm text-foreground/90 leading-relaxed font-medium">
              <strong className="text-foreground">SportPortalHR</strong> promovira isključivo odgovorno klađenje,
              sigurnost korisnika i edukaciju. Ako vi ili netko vama blizak ima poteškoća s klađenjem, odmah potražite
              stručnu pomoć kod organizacija koje se bave ovom problematikom.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
