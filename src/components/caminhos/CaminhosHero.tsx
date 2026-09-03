import heroImage from "@/assets/caminhos-hero.jpg";

export function CaminhosHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid w-full max-w-[1600px] items-stretch lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)]">
        <div className="order-2 flex items-center px-5 pb-14 pt-12 sm:px-8 lg:order-1 lg:py-28 lg:pl-[max(3rem,calc((100vw-1280px)/2))] lg:pr-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">A forma La Nostra Via de viajar</p>
            </div>

            <h1 className="text-hero mt-7 text-[clamp(2.6rem,4.6vw,4.4rem)]">
              Cinco caminhos.
              <br />
              Uma viagem só sua.
            </h1>

            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="text-body-lg max-w-[42ch]">
                Uma viagem pode ser feita de muitas maneiras.
              </p>
              <p className="max-w-[46ch]">
                Você pode conhecer a história de um lugar, descobrir seus sabores, viver
                experiências que não estavam no roteiro, encontrar o que torna o caminho
                mais leve ou guardar momentos que permanecerão com você muito depois da
                volta.
              </p>
              <p className="max-w-[46ch]">
                Na La Nostra Via, acreditamos que todas essas dimensões fazem parte da
                viagem. Por isso, nossa forma de descobrir e compartilhar destinos é
                guiada por cinco caminhos.
              </p>
            </div>

            <ol className="mt-9 flex flex-wrap items-baseline gap-x-7 gap-y-3 border-t border-border pt-6">
              {["História", "Sabores", "Vivências", "Conforto", "Memórias"].map((n, i) => (
                <li key={n} className="flex items-baseline gap-2">
                  <span className="label-editorial text-accent/80">{`0${i + 1}`}</span>
                  <span className="font-display text-[clamp(1.35rem,2vw,1.75rem)] leading-none">
                    {n}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="relative order-1 min-h-[52vh] lg:order-2 lg:min-h-[clamp(580px,80vh,860px)]">
          <img
            src={heroImage}
            alt="Família caminhando por uma rua de pedra em um vilarejo ao fim da tarde"
            width={1024}
            height={1280}
            className="absolute inset-0 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-44 bg-gradient-to-r from-background to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent lg:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/40 to-transparent"
          />
          <figcaption className="absolute bottom-6 right-6 max-w-[24ch] text-right">
            <span className="label-editorial block text-background/80">O caminho</span>
            <span className="caption-editorial mt-1 block text-background/70">
              Nem sempre o destino é o que fica — às vezes é a rua que leva até ele.
            </span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
