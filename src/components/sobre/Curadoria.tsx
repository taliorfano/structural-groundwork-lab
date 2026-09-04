import { Container } from "@/components/layout/Container";

export function Curadoria() {
  return (
    <section className="bg-olive py-16 text-olive-foreground md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 md:col-start-1">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-olive-foreground/40" aria-hidden="true" />
              <p className="label-editorial text-olive-foreground/70">A curadoria</p>
            </div>
            <h2 className="text-h2 mt-5 max-w-[15ch] text-[clamp(1.9rem,3.2vw,2.9rem)]">
              Uma recomendação começa com pesquisa.
            </h2>
            <p className="mt-6 max-w-[40ch] text-olive-foreground/80">
              Cada viagem tem uma história diferente, e nem todas as recomendações que
              você encontrará aqui nasceram da mesma forma.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <div className="space-y-6">
              <p className="max-w-[44ch] text-olive-foreground/80">
                <span className="label-editorial mr-3 text-olive-foreground/50">01</span>
                Algumas vêm de experiências pessoais. De lugares que conheci, restaurantes
                onde estive ou caminhos que percorri.
              </p>
              <span className="block h-px w-full bg-olive-foreground/15" aria-hidden="true" />
              <p className="max-w-[44ch] text-olive-foreground/80">
                <span className="label-editorial mr-3 text-olive-foreground/50">02</span>
                Outras são resultado de pesquisas cuidadosas, da curiosidade de entender
                melhor um destino e de muitas horas reunindo informações e diferentes
                perspectivas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-olive-foreground/15 pt-12 md:mt-20 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-2">
            <p className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.2]">
              Acredito que uma boa recomendação não precisa ser uma lista interminável de
              lugares.
            </p>
            <p className="font-display mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.2] text-olive-foreground/55">
              Ela precisa fazer sentido.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-8 md:self-end">
            <p className="max-w-[40ch] text-meta text-olive-foreground/70">
              Por isso, a curadoria da La Nostra Via busca compartilhar informações e
              experiências que possam realmente ajudar você a descobrir um destino e fazer
              escolhas para a sua própria viagem.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
