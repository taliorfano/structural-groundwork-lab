import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import principal from "@/assets/inspiracao-principal.jpg";
import religioso from "@/assets/inspiracao-religioso.jpg";
import planejamento from "@/assets/inspiracao-planejamento.jpg";
import brasilImg from "@/assets/inspiracao-brasil.jpg";

const secondary = [
  {
    category: "Turismo Religioso",
    title: "Caminhos de fé entre Fátima e Roma",
    image: religioso,
    alt: "Interior de igreja antiga iluminado por velas",
    ratio: "aspect-[4/5]",
  },
  {
    category: "Planejamento",
    title: "Como organizar uma viagem sem perder a leveza",
    image: planejamento,
    alt: "Xícara de café e caderno sobre mesa de mármore",
    ratio: "aspect-[3/2]",
  },
  {
    category: "Brasil",
    title: "Foz do Iguaçu além das cataratas",
    image: brasilImg,
    alt: "Cachoeira em meio à mata atlântica",
    ratio: "aspect-square",
  },
] as const;

export function Inspirations() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">Inspirações</p>
            </div>
            <h2 className="text-h2 mt-6 max-w-[20ch]">Histórias para ler antes de partir.</h2>
          </div>
          <Link to="/inspiracoes" className="link-editorial text-meta inline-flex items-center gap-2">
            Ver todas as histórias
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Lead story — wide, offset text */}
        <Link to="/inspiracoes" className="group mt-14 block">
          <div className="overflow-hidden rounded-sm">
            <img
              src={principal}
              alt="Família caminhando por uma rua antiga de mercado na Europa"
              loading="lazy"
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-7 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="label-editorial text-muted-foreground">
                Viagens em Família · Itália
              </p>
              <h3 className="text-h2 mt-3 max-w-[18ch] text-[clamp(1.75rem,3vw,2.75rem)]">
                Uma semana na Toscana no ritmo das crianças
              </h3>
            </div>
            <p className="text-muted-foreground md:col-span-5 md:self-end">
              O que muda quando a viagem é planejada para caber no tempo de todos —
              mercados de manhã, sesta à tarde e jantares longos.
              <span className="label-editorial mt-4 flex items-center gap-2 text-accent">
                Ler a história
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </p>
          </div>
        </Link>

        {/* Supporting stories — deliberately unequal */}
        <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-border pt-12 md:grid-cols-12">
          {secondary.map((s, i) => (
            <Link
              key={s.title}
              to="/inspiracoes"
              className={`group block ${
                i === 0
                  ? "md:col-span-5"
                  : i === 1
                    ? "md:col-span-7 md:pt-16"
                    : "md:col-span-5 md:col-start-4"
              }`}
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className={`w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.04] ${s.ratio}`}
                />
              </div>
              <p className="label-editorial mt-5 text-muted-foreground">{s.category}</p>
              <h3 className="font-display mt-2 max-w-[24ch] text-2xl leading-snug">{s.title}</h3>
              <span className="label-editorial mt-3 inline-flex items-center gap-2 text-accent">
                Ler
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
