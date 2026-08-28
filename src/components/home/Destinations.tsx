import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import brasil from "@/assets/destino-brasil.jpg";
import italia from "@/assets/destino-italia.jpg";
import portugal from "@/assets/destino-portugal.jpg";
import espanha from "@/assets/destino-espanha.jpg";

const countries = [
  {
    country: "Brasil",
    image: brasil,
    alt: "Rua de pedra de uma cidade colonial brasileira entre montanhas verdes",
    places: ["Foz do Iguaçu", "João Pessoa", "Ouro Preto", "Gramado / Canela", "São Paulo"],
    note: "Do barroco mineiro às águas do Iguaçu, o Brasil que se descobre devagar.",
    large: true,
  },
  {
    country: "Itália",
    image: italia,
    alt: "Praça italiana com edifícios de pedra ao entardecer",
    places: ["Florença", "Torino", "Roma", "Venezia", "Milão", "Bologna"],
    note: "Arte, mesa e vida cotidiana — a Itália que inspira o nosso nome.",
    large: true,
  },
  {
    country: "Portugal",
    image: portugal,
    alt: "Telhados de Lisboa com o rio ao fundo",
    places: ["Lisboa", "Fátima", "Porto"],
    note: "Uma língua conhecida e um ritmo que acolhe.",
    large: false,
  },
  {
    country: "Espanha",
    image: espanha,
    alt: "Rua estreita e ensolarada em Barcelona",
    places: ["Barcelona", "Madrid"],
    note: "Cidades de luz, praça e conversa longa.",
    large: false,
  },
] as const;

export function Destinations() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-editorial text-accent">Destinos</p>
            <h2 className="text-h2 mt-5 max-w-[18ch]">Para onde o caminho leva você?</h2>
          </div>
          <Link to="/destinos" className="link-editorial text-meta inline-flex items-center gap-2">
            Ver todos os destinos
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {countries.map((c) => (
            <Link key={c.country} to="/destinos" className="group block">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  width={1100}
                  height={1400}
                  className={`w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.03] ${
                    c.large ? "aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-baseline gap-x-4">
                <h3 className="font-display text-3xl">{c.country}</h3>
                <span className="label-editorial text-muted-foreground">
                  {c.places.length} destinos
                </span>
              </div>
              <p className="text-meta mt-2 max-w-md text-muted-foreground">{c.note}</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                {c.places.map((p) => (
                  <li key={p} className="text-meta text-foreground/75">
                    {p}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
