import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import brasil from "@/assets/destino-brasil.jpg";
import italia from "@/assets/destino-italia.jpg";
import portugal from "@/assets/destino-portugal.jpg";
import espanha from "@/assets/destino-espanha.jpg";

const countries = [
  {
    country: "Itália",
    image: italia,
    alt: "Praça italiana com edifícios de pedra ao entardecer",
    places: ["Florença", "Torino", "Roma", "Venezia", "Milão", "Bologna"],
    note: "Arte, mesa e vida cotidiana — a Itália que inspira o nosso nome.",
    size: "lead",
  },
  {
    country: "Brasil",
    image: brasil,
    alt: "Rua de pedra de uma cidade colonial brasileira entre montanhas verdes",
    places: ["Foz do Iguaçu", "João Pessoa", "Ouro Preto", "Gramado / Canela", "São Paulo"],
    note: "Do barroco mineiro às águas do Iguaçu, o Brasil que se descobre devagar.",
    size: "tall",
  },
  {
    country: "Portugal",
    image: portugal,
    alt: "Telhados de Lisboa com o rio ao fundo",
    places: ["Lisboa", "Fátima", "Porto"],
    note: "Uma língua conhecida e um ritmo que acolhe.",
    size: "small",
  },
  {
    country: "Espanha",
    image: espanha,
    alt: "Rua estreita e ensolarada em Barcelona",
    places: ["Barcelona", "Madrid"],
    note: "Cidades de luz, praça e conversa longa.",
    size: "small",
  },
] as const;

const ratio = {
  lead: "aspect-[16/10]",
  tall: "aspect-[4/5]",
  small: "aspect-[3/2]",
} as const;

export function Destinations() {
  return (
    <section className="bg-olive py-24 text-olive-foreground md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-olive-foreground/40" aria-hidden="true" />
              <p className="label-editorial text-olive-foreground/70">Destinos</p>
            </div>
            <h2 className="text-h2 mt-6 max-w-[16ch]">Para onde o caminho leva você?</h2>
          </div>
          <Link
            to="/destinos"
            className="link-editorial text-meta inline-flex items-center gap-2 text-olive-foreground/85"
          >
            Ver todos os destinos
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Lead country — full width editorial moment */}
        <div className="mt-14 grid gap-x-10 gap-y-12 lg:grid-cols-12">
          {countries.map((c) => (
            <Link
              key={c.country}
              to="/destinos"
              className={`group block ${
                c.size === "lead"
                  ? "lg:col-span-12"
                  : c.size === "tall"
                    ? "lg:col-span-5"
                    : "lg:col-span-7"
              }`}
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  width={1400}
                  height={900}
                  className={`w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.03] ${ratio[c.size]}`}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-baseline gap-x-4 border-t border-olive-foreground/20 pt-4">
                <h3 className="font-display text-3xl">{c.country}</h3>
                <span className="label-editorial text-olive-foreground/60">
                  {c.places.length} destinos
                </span>
              </div>
              <p className="text-meta mt-2 max-w-md text-olive-foreground/70">{c.note}</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                {c.places.map((p) => (
                  <li key={p} className="label-editorial text-olive-foreground/80">
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
