import { Compass, Heart, MapPin, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";

const values = [
  {
    icon: MapPin,
    title: "Curadoria de verdade",
    text: "Experiências reais, escolhidas com atenção e carinho.",
  },
  {
    icon: Heart,
    title: "Foco no que importa",
    text: "Família, cultura, boa comida e momentos que ficam.",
  },
  {
    icon: Sparkles,
    title: "Informação que acolhe",
    text: "Dicas práticas para viajar com mais leveza e segurança.",
  },
  {
    icon: Compass,
    title: "Para todos os caminhos",
    text: "Do planejamento à memória, estamos com você.",
  },
] as const;

export function ValuesStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="grid gap-x-10 gap-y-10 py-12 sm:grid-cols-2 md:py-14 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex min-w-0 gap-4">
            <Icon className="mt-1 size-5 shrink-0 stroke-[1.25] text-accent" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-display text-xl leading-snug">{title}</p>
              <p className="text-meta mt-1.5 text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
