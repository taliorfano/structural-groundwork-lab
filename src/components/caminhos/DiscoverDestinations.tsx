import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import brasil from "@/assets/destino-brasil.jpg";
import italia from "@/assets/destino-italia.jpg";
import portugal from "@/assets/destino-portugal.jpg";
import espanha from "@/assets/destino-espanha.jpg";

const picks = [
  {
    city: "João Pessoa",
    country: "Brasil",
    note: "O mar mais a leste das Américas e um centro histórico que ainda respira devagar.",
    image: brasil,
    alt: "Cidade litorânea brasileira com casario histórico",
    span: "md:col-span-5 md:col-start-2",
    ratio: "aspect-[4/3]",
  },
  {
    city: "Florença",
    country: "Itália",
    note: "Arte, mesa e cotidiano — a cidade que inspira o nosso nome.",
    image: italia,
    alt: "Praça italiana com edifícios de pedra ao entardecer",
    span: "md:col-span-4 md:col-start-8 md:mt-16",
    ratio: "aspect-[3/4]",
  },
  {
    city: "Lisboa",
    country: "Portugal",
    note: "Uma língua conhecida e um ritmo que acolhe.",
    image: portugal,
    alt: "Telhados de Lisboa com o rio ao fundo",
    span: "md:col-span-3 md:col-start-3",
    ratio: "aspect-square",
  },
  {
    city: "Barcelona",
    country: "Espanha",
    note: "Cidade de luz, praça e conversa longa.",
    image: espanha,
    alt: "Rua estreita e ensolarada em Barcelona",
    span: "md:col-span-4 md:col-start-7 md:-mt-8",
    ratio: "aspect-[5/4]",
  },
] as const;

export function DiscoverDestinations() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6 md:col-start-2">
            <p className="label-editorial text-accent">Descubra um destino pelos 5 Caminhos</p>
            <h2 className="text-h2 mt-4 max-w-[14ch] text-[clamp(1.9rem,3.2vw,2.8rem)]">
              Agora, escolha para onde seguir.
            </h2>
          </div>
          <Link
            to="/destinos"
            className="link-editorial text-meta inline-flex items-center gap-2 md:col-span-3 md:col-start-9 md:justify-self-end"
          >
            Explorar destinos
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-12 md:gap-x-10 md:gap-y-12">
          {picks.map((p) => (
            <Link key={p.city} to="/destinos" className={`group min-w-0 ${p.span}`}>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className={`w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.04] ${p.ratio}`}
                />
              </div>
              <p className="label-editorial mt-3 text-muted-foreground">{p.country}</p>
              <h3 className="font-display mt-1 flex items-center gap-2 text-xl">
                {p.city}
                <ArrowRight className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-70" />
              </h3>
              <p className="text-meta mt-1.5 max-w-[34ch] text-muted-foreground">{p.note}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
