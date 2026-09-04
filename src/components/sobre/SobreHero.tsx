import heroAsset from "@/assets/talita-montanha.jpg.asset.json";

export function SobreHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid w-full max-w-[1600px] items-stretch lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)]">
        <div className="order-2 flex items-center px-5 pb-14 pt-12 sm:px-8 lg:order-1 lg:py-32 lg:pl-[max(3rem,calc((100vw-1280px)/2))] lg:pr-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">Sobre a La Nostra Via</p>
            </div>

            <h1 className="text-hero mt-8 text-[clamp(2.5rem,4.4vw,4.2rem)]">
              Um lugar para quem gosta de descobrir antes de partir.
            </h1>

            <div className="mt-9 space-y-4 text-muted-foreground">
              <p className="text-body-lg max-w-[44ch]">
                A La Nostra Via nasceu para compartilhar destinos, experiências e
                informações que ajudam a tornar cada viagem mais especial.
              </p>
              <p className="max-w-[46ch]">
                Mais do que reunir lugares para visitar, buscamos descobrir o que existe
                por trás de cada destino — suas histórias, sabores, experiências e
                pequenos detalhes que muitas vezes fazem toda a diferença.
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-[54vh] lg:order-2 lg:min-h-[clamp(600px,84vh,880px)]">
          <img
            src={heroAsset.url}
            alt="Vista das montanhas nevadas a partir da janela de um teleférico, durante uma viagem em família"
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
            <span className="label-editorial block text-background/80">A caminho</span>
            <span className="caption-editorial mt-1 block text-background/70">
              O instante antes de chegar também faz parte da viagem.
            </span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
