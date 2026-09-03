import { Container } from "@/components/layout/Container";
import detalhe from "@/assets/caminhos-detalhe.jpg";

/** Editorial breath before the heart of the page. */
export function NotJustDestination() {
  return (
    <section className="bg-background py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-10">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.15] md:col-span-3">
            Um destino nunca é apenas um destino.
          </h2>

          <div className="space-y-4 text-muted-foreground md:col-span-3">
            <p>
              Para algumas pessoas, viajar é entrar em museus, caminhar por ruas antigas e
              entender as histórias que moldaram um lugar.
            </p>
            <p>
              Para outras, é sentar à mesa, experimentar novos sabores e descobrir pequenos
              restaurantes.
            </p>
          </div>

          <div className="space-y-4 text-muted-foreground md:col-span-3">
            <p>
              Às vezes, são as experiências inesperadas que se tornam inesquecíveis.
            </p>
            <p>
              E, muitas vezes, detalhes aparentemente simples — como saber onde estacionar,
              encontrar um bom café ou descobrir um lugar especial — fazem toda a diferença.
            </p>
          </div>

          <figure className="md:col-span-3 md:self-start">
            <div className="w-40 rotate-[-3deg] overflow-hidden rounded-sm border border-border shadow-sm sm:w-52 md:w-full">
              <img
                src={detalhe}
                alt="Caderno de viagem aberto ao lado de um mapa dobrado"
                loading="lazy"
                width={912}
                height={1104}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="caption-editorial mt-3 text-muted-foreground">
              Anotações de caminho — o que se descobre antes e depois de partir.
            </figcaption>
          </figure>
        </div>

        <p className="mx-auto mt-14 max-w-[62ch] text-center font-display text-[clamp(1.15rem,1.9vw,1.5rem)] leading-[1.35] text-accent">
          Os 5 Caminhos nasceram da ideia de que uma viagem pode ser vivida por diferentes
          perspectivas. E cada pessoa pode encontrar o seu próprio caminho.
        </p>
      </Container>
    </section>
  );
}
