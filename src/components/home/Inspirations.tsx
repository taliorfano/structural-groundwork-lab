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
  },
  {
    category: "Planejamento",
    title: "Como organizar uma viagem sem perder a leveza",
    image: planejamento,
    alt: "Xícara de café e caderno sobre mesa de mármore",
  },
  {
    category: "Brasil",
    title: "Foz do Iguaçu além das cataratas",
    image: brasilImg,
    alt: "Cachoeira em meio à mata atlântica",
  },
] as const;

export function Inspirations() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-editorial text-accent">Inspirações</p>
            <h2 className="text-h2 mt-5 max-w-[20ch]">Histórias para ler antes de partir.</h2>
          </div>
          <Link to="/inspiracoes" className="link-editorial text-meta inline-flex items-center gap-2">
            Ver todas as histórias
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          {/* Lead story */}
          <Link to="/inspiracoes" className="group block">
            <div className="overflow-hidden rounded-sm">
              <img
                src={principal}
                alt="Família caminhando por uma rua antiga de mercado na Europa"
                loading="lazy"
                width={1408}
                height={1008}
                className="aspect-[7/5] w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.03]"
              />
            </div>
            <p className="label-editorial mt-6 text-muted-foreground">
              Viagens em Família · Itália
            </p>
            <h3 className="text-h3 mt-3 max-w-[24ch]">
              Uma semana na Toscana no ritmo das crianças
            </h3>
            <p className="mt-4 max-w-lg text-muted-foreground">
              O que muda quando a viagem é planejada para caber no tempo de todos —
              mercados de manhã, sesta à tarde e jantares longos.
            </p>
          </Link>

          {/* Secondary stories */}
          <div className="flex flex-col divide-y divide-border">
            {secondary.map((s, i) => (
              <Link
                key={s.title}
                to="/inspiracoes"
                className={`group grid grid-cols-[minmax(0,1fr)_7.5rem] items-start gap-5 sm:grid-cols-[minmax(0,1fr)_10rem] ${
                  i === 0 ? "pb-7" : "py-7"
                }`}
              >
                <div className="min-w-0">
                  <p className="label-editorial text-muted-foreground">{s.category}</p>
                  <h3 className="font-display mt-2 text-2xl leading-snug">{s.title}</h3>
                  <span className="label-editorial mt-3 inline-flex items-center gap-2 text-accent">
                    Ler
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="aspect-square w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.05]"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
