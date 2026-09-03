import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";

export function CaminhosClosing() {
  return (
    <section className="border-t border-border bg-surface py-16 md:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-2">
            <p className="font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.2]">
              Toda viagem começa de algum lugar.
            </p>
            <p className="mt-5 max-w-[42ch] text-muted-foreground">
              Às vezes, ela começa com um destino. Outras vezes, com uma história, um sabor
              ou uma experiência que desperta a vontade de partir.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-8 md:self-end">
            <p className="font-display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.25] text-accent">
              Qual será o seu próximo caminho?
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to="/destinos"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 text-meta text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
              >
                Explorar destinos
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/planner"
                className="link-editorial text-meta inline-flex items-center gap-2"
              >
                Começar a planejar
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
