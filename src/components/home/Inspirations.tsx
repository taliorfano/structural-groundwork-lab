import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import principal from "@/assets/inspiracao-principal.jpg";
import religioso from "@/assets/inspiracao-religioso.jpg";
import planejamento from "@/assets/inspiracao-planejamento.jpg";

const secondary = [
  {
    category: "Turismo Religioso",
    title: "Caminhos de fé entre Fátima e Roma",
    image: religioso,
    alt: "Interior de igreja antiga iluminado por velas",
    ratio: "aspect-[4/3]",
  },
  {
    category: "Planejamento",
    title: "Como organizar uma viagem sem perder a leveza",
    image: planejamento,
    alt: "Xícara de café e caderno sobre mesa de mármore",
    ratio: "aspect-[3/2]",
  },
] as const;

export function Inspirations() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">Inspirações</p>
            </div>
            <h2 className="text-h2 mt-4 max-w-[20ch]">Histórias para ler antes de partir.</h2>
          </div>
          <Link to="/inspiracoes" className="link-editorial text-meta inline-flex items-center gap-2">
            Ver todas as histórias
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Featured story — image and text as one unit */}
        <Link
          to="/inspiracoes"
          className="group mt-9 grid gap-6 border-t border-border pt-8 md:grid-cols-12 md:gap-10"
        >
          <div className="overflow-hidden rounded-sm md:col-span-7">
            <img
              src={principal}
              alt="Família caminhando por uma rua antiga de mercado na Europa"
              loading="lazy"
              width={1100}
              height={730}
              className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.03]"
            />
          </div>
          <div className="md:col-span-5 md:self-center">
            <p className="label-editorial text-muted-foreground">
              Viagens em Família · Itália
            </p>
            <h3 className="font-display mt-3 max-w-[20ch] text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.2]">
              Uma semana na Toscana no ritmo das crianças
            </h3>
            <p className="text-meta mt-4 max-w-[42ch] text-muted-foreground">
              Mercados de manhã, sesta à tarde e jantares longos: o que muda quando a
              viagem cabe no tempo de todos.
            </p>
            <span className="label-editorial mt-4 inline-flex items-center gap-2 text-accent">
              Ler a história
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Two supporting stories — smaller, unequal */}
        <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-border pt-8 md:grid-cols-12">
          {secondary.map((s, i) => (
            <Link
              key={s.title}
              to="/inspiracoes"
              className={`group grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-5 sm:grid-cols-[10rem_minmax(0,1fr)] ${
                i === 0 ? "md:col-span-5" : "md:col-span-6 md:col-start-7"
              }`}
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  width={420}
                  height={320}
                  className={`w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.05] ${s.ratio}`}
                />
              </div>
              <div>
                <p className="label-editorial text-muted-foreground">{s.category}</p>
                <h3 className="font-display mt-1.5 max-w-[22ch] text-xl leading-snug">
                  {s.title}
                </h3>
                <span className="label-editorial mt-2 inline-flex items-center gap-2 text-accent">
                  Ler
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
