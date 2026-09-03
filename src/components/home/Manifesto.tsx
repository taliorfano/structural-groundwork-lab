import { Container } from "@/components/layout/Container";

const values = [
  { n: "01", title: "Curadoria de verdade", text: "Experiências reais, escolhidas com atenção." },
  { n: "02", title: "Foco no que importa", text: "Família, cultura, boa comida e momentos que ficam." },
  { n: "03", title: "Informação que acolhe", text: "Dicas práticas para viajar com leveza." },
  { n: "04", title: "Para todos os caminhos", text: "Do planejamento à memória, estamos com você." },
] as const;

/** Quiet transition after the Hero — a breath before the Five Paths. */
export function Manifesto() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-[54rem] text-center">
          <p className="label-editorial text-accent">Nossa forma de viajar</p>
          <p className="font-display mt-5 text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25]">
            Não existe apenas um jeito de conhecer um lugar.
            <span className="text-muted-foreground"> Existem caminhos.</span>
          </p>
        </div>

        <ul className="mx-auto mt-11 grid max-w-[62rem] gap-x-8 gap-y-6 border-t border-border/70 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ n, title, text }) => (
            <li key={title} className="min-w-0">
              <div className="flex items-baseline gap-2.5">
                <span className="label-editorial text-accent">{n}</span>
                <p className="font-display text-lg leading-snug">{title}</p>
              </div>
              <p className="text-meta mt-1 max-w-[30ch] text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
