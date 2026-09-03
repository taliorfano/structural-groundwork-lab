import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import plannerImage from "@/assets/planner-mesa.jpg";

export function PlannerSection() {
  return (
    <section className="bg-olive py-16 text-olive-foreground md:py-20">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-sm">
              <img
                src={plannerImage}
                alt="Caderno de viagem, mapa e xícara sobre uma mesa de madeira"
                loading="lazy"
                width={820}
                height={615}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-olive-foreground/40" aria-hidden="true" />
              <p className="label-editorial text-olive-foreground/70">Planner</p>
            </div>

            <h2 className="text-h2 mt-4 max-w-[12ch]">Sua viagem começa aqui.</h2>

            <p className="mt-5 max-w-[42ch] text-olive-foreground/80">
              Quando a inspiração vira decisão, o Planner organiza sua viagem no mesmo
              espírito da nossa curadoria: com calma, contexto e atenção ao que importa.
            </p>

            <ul className="mt-6 grid gap-2 border-t border-olive-foreground/20 pt-5">
              {[
                "Roteiros construídos a partir dos 5 Caminhos.",
                "Ritmo, distâncias e tempo real de cada dia.",
                "Do planejamento à memória, em um só lugar.",
              ].map((item, i) => (
                <li key={item} className="text-meta flex gap-3 text-olive-foreground/80">
                  <span className="label-editorial text-olive-foreground/50">
                    {`0${i + 1}`}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/planner"
              className="group mt-7 inline-flex items-center gap-3 rounded-sm bg-olive-foreground px-6 py-3 text-meta text-olive transition-opacity duration-200 hover:opacity-90"
            >
              Conhecer o Planner
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
