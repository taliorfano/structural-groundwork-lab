import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import plannerImage from "@/assets/planner-mesa.jpg";

export function PlannerSection() {
  return (
    <section className="border-y border-border bg-surface py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-sm">
          <img
            src={plannerImage}
            alt="Caderno de viagem aberto com mapa e xícara sobre tecido claro"
            loading="lazy"
            width={1200}
            height={1000}
            className="aspect-[6/5] w-full object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="label-editorial text-accent">Planner La Nostra Via</p>
          <h2 className="text-h2 mt-5">Do sonho ao caminho.</h2>
          <p className="text-body-lg mt-6 text-muted-foreground">
            Quando a inspiração vira decisão, o Planner organiza sua viagem no mesmo
            espírito da nossa curadoria: com calma, contexto e atenção ao que importa
            para você.
          </p>
          <ul className="mt-8 space-y-3 border-t border-border pt-6">
            <li className="text-meta text-foreground/80">
              Roteiros construídos a partir dos 5 Caminhos.
            </li>
            <li className="text-meta text-foreground/80">
              Ritmo, distâncias e tempo real de cada dia.
            </li>
            <li className="text-meta text-foreground/80">
              Tudo em um só lugar, do planejamento à memória.
            </li>
          </ul>

          <Link
            to="/planner"
            className="group mt-9 inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-3.5 text-meta text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
          >
            Começar a planejar
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
