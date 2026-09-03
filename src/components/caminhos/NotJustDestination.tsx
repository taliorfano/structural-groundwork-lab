import { Container } from "@/components/layout/Container";
import detalhe from "@/assets/caminhos-detalhe.jpg";

/** Editorial breath before the heart of the page. */
export function NotJustDestination() {
  return (
    <section className="border-y border-border bg-surface py-16 md:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7 md:col-start-2">
            <p className="font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.2]">
              Um destino nunca é apenas um destino.
            </p>
            <div className="mt-6 max-w-[52ch] space-y-4 text-muted-foreground">
              <p>
                Para algumas pessoas, viajar é entrar em museus, caminhar por ruas antigas
                e entender as histórias que moldaram um lugar.
              </p>
              <p>
                Para outras, é sentar à mesa, experimentar novos sabores e descobrir
                pequenos restaurantes. Às vezes, são as experiências inesperadas que se
                tornam inesquecíveis.
              </p>
              <p>
                E, muitas vezes, detalhes aparentemente simples — como saber onde
                estacionar, encontrar um bom café ou descobrir um lugar especial — fazem
                toda a diferença.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10 md:self-end">
            <div className="w-40 overflow-hidden rounded-sm sm:w-52 md:w-full">
              <img
                src={detalhe}
                alt="Caderno de viagem aberto ao lado de um mapa dobrado"
                loading="lazy"
                width={912}
                height={1104}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="caption-editorial mt-2.5 text-muted-foreground">
              Anotações de caminho — o que se descobre antes e depois de partir.
            </p>
          </div>
        </div>

        <p className="mt-12 max-w-[46ch] border-t border-border pt-6 font-display text-[clamp(1.15rem,1.9vw,1.5rem)] leading-[1.35] md:ml-[8.333%]">
          Os 5 Caminhos nasceram da ideia de que uma viagem pode ser vivida por diferentes
          perspectivas. E cada pessoa pode encontrar o seu próprio caminho.
        </p>
      </Container>
    </section>
  );
}
