import { Container } from "@/components/layout/Container";

const names = ["História", "Sabores", "Vivências", "Conforto", "Memórias"];

/** Dark contrast moment — the five paths as one way of looking. */
export function PathsConnected() {
  return (
    <section className="bg-olive py-16 text-olive-foreground md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 md:col-start-2">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-olive-foreground/40" aria-hidden="true" />
              <p className="label-editorial text-olive-foreground/70">Conexão</p>
            </div>
            <h2 className="text-h2 mt-4 max-w-[15ch] text-[clamp(1.9rem,3.2vw,2.8rem)]">
              Os caminhos não são separados.
            </h2>
            <div className="mt-6 max-w-[42ch] space-y-4 text-olive-foreground/80">
              <p>
                Uma mesma viagem pode nos levar pela história de uma cidade, pelos sabores
                de sua gastronomia, por experiências inesperadas e por momentos que
                levaremos para sempre.
              </p>
              <p>
                Os cinco caminhos não são etapas. E também não são categorias isoladas.
                Eles são diferentes formas de olhar para um mesmo destino.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-8 md:self-center">
            <div className="flex flex-col items-start gap-1.5">
              {names.map((n, i) => (
                <span
                  key={n}
                  className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.15] text-olive-foreground/85"
                  style={{ marginLeft: `${i * 0.9}rem` }}
                >
                  {n}
                  {i < names.length - 1 && (
                    <span className="text-olive-foreground/35"> +</span>
                  )}
                </span>
              ))}
              <span
                className="mt-4 block h-px w-40 bg-olive-foreground/30"
                aria-hidden="true"
                style={{ marginLeft: "3.6rem" }}
              />
              <span
                className="caption-editorial mt-3 max-w-[24ch] text-olive-foreground/65"
                style={{ marginLeft: "3.6rem" }}
              >
                uma experiência de viagem mais completa.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
