import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import florencaAsset from "@/assets/talita-florenca.jpg.asset.json";

export function SobreClosing() {
  return (
    <section className="border-t border-border bg-surface py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-sm">
              <img
                src={florencaAsset.url}
                alt="Talita em frente à catedral de Santa Maria del Fiore, em Florença"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="caption-editorial mt-2.5 text-muted-foreground">
              Florença — um dos caminhos que já percorremos.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-6 md:self-center">
            <p className="font-display text-[clamp(1.8rem,3.1vw,2.6rem)] leading-[1.15]">
              Vamos descobrir o próximo caminho?
            </p>
            <p className="mt-5 max-w-[42ch] text-muted-foreground">
              Não importa se você já sabe exatamente para onde quer ir ou se ainda está
              procurando inspiração.
            </p>
            <p className="mt-3 max-w-[42ch] text-muted-foreground">
              Toda viagem começa de algum lugar.
            </p>

            <Link
              to="/destinos"
              className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 text-meta text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
            >
              Explorar destinos
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
