import { Container } from "@/components/layout/Container";

const values = [
  {
    n: "01",
    title: "Curadoria de verdade",
    text: "Experiências reais, escolhidas com atenção e carinho.",
  },
  {
    n: "02",
    title: "Foco no que importa",
    text: "Família, cultura, boa comida e momentos que ficam.",
  },
  {
    n: "03",
    title: "Informação que acolhe",
    text: "Dicas práticas para viajar com mais leveza e segurança.",
  },
  {
    n: "04",
    title: "Para todos os caminhos",
    text: "Do planejamento à memória, estamos com você.",
  },
] as const;

export function ValuesStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="grid gap-x-10 gap-y-9 py-11 sm:grid-cols-2 md:py-12 lg:grid-cols-4">
        {values.map(({ n, title, text }) => (
          <div
            key={title}
            className="min-w-0 lg:border-l lg:border-border/70 lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <span className="label-editorial text-accent">{n}</span>
            <p className="font-display mt-2 text-xl leading-snug">{title}</p>
            <p className="text-meta mt-1.5 max-w-[32ch] text-muted-foreground">{text}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
