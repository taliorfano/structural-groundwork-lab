import { useState } from "react";
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
  },
  {
    country: "Brasil",
    image: brasil,
    alt: "Rua de pedra de uma cidade colonial brasileira entre montanhas verdes",
    places: ["Foz do Iguaçu", "João Pessoa", "Ouro Preto", "Gramado / Canela", "São Paulo"],
    note: "Do barroco mineiro às águas do Iguaçu, o Brasil descoberto devagar.",
  },
  {
    country: "Portugal",
    image: portugal,
    alt: "Telhados de Lisboa com o rio ao fundo",
    places: ["Lisboa", "Fátima", "Porto"],
    note: "Uma língua conhecida e um ritmo que acolhe.",
  },
  {
    country: "Espanha",
    image: espanha,
    alt: "Rua estreita e ensolarada em Barcelona",
    places: ["Barcelona", "Madrid"],
    note: "Cidades de luz, praça e conversa longa.",
  },
] as const;

export function Destinations() {
  const [active, setActive] = useState(0);
  const current = countries[active]!;

  return (
    <section className="bg-olive py-16 text-olive-foreground md:py-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-olive-foreground/40" aria-hidden="true" />
              <p className="label-editorial text-olive-foreground/70">Destinos</p>
            </div>
            <h2 className="text-h2 mt-4 max-w-[14ch]">Para onde o caminho leva você?</h2>
          </div>
          <Link
            to="/destinos"
            className="link-editorial text-meta inline-flex items-center gap-2 text-olive-foreground/85 md:col-span-4 md:col-start-9 md:justify-self-end"
          >
            Ver todos os destinos
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Country selector */}
        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-y border-olive-foreground/20 py-3.5">
          {countries.map((c, i) => (
            <button
              key={c.country}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`font-display text-xl transition-colors duration-200 md:text-2xl ${
                i === active
                  ? "text-olive-foreground"
                  : "text-olive-foreground/45 hover:text-olive-foreground/75"
              }`}
            >
              {c.country}
            </button>
          ))}
        </div>

        {/* Connected unit: medium image + places + action */}
        <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-sm">
              <img
                key={current.image}
                src={current.image}
                alt={current.alt}
                loading="lazy"
                width={900}
                height={640}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <p className="caption-editorial mt-2.5 text-olive-foreground/60">
              {current.note}
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:self-center">
            <p className="label-editorial text-olive-foreground/60">
              {current.places.length} destinos selecionados
            </p>
            <ul className="mt-4 divide-y divide-olive-foreground/15 border-y border-olive-foreground/15">
              {current.places.map((p) => (
                <li key={p}>
                  <Link
                    to="/destinos"
                    className="group flex items-center justify-between py-2.5 text-olive-foreground/85 transition-colors hover:text-olive-foreground"
                  >
                    <span className="font-display text-lg">{p}</span>
                    <ArrowRight className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-70" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/destinos"
              className="label-editorial mt-5 inline-flex items-center gap-2 text-olive-foreground"
            >
              Explorar {current.country}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
