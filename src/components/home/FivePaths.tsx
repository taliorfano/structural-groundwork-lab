import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import historia from "@/assets/caminho-historia.jpg";
import sabores from "@/assets/caminho-sabores.jpg";
import vivencias from "@/assets/caminho-vivencias.jpg";
import conforto from "@/assets/caminho-conforto.jpg";
import memorias from "@/assets/caminho-memorias.jpg";

const paths = [
  {
    n: "01",
    name: "História",
    text: "Cultura, história e patrimônio que dão alma a cada lugar.",
    caption: "Arcos e pedra — a cidade que resistiu ao tempo.",
    image: historia,
    alt: "Ruela histórica de pedra sob um arco antigo",
  },
  {
    n: "02",
    name: "Sabores",
    text: "Restaurantes, cafés e sabores que contam histórias.",
    caption: "A mesa como primeiro idioma de um lugar.",
    image: sabores,
    alt: "Prato de massa fresca sobre mesa de cerâmica com luz natural",
  },
  {
    n: "03",
    name: "Vivências",
    text: "Passeios, atividades e experiências que aproximam você do local.",
    caption: "O campo trabalhado à mão, no ritmo de quem vive ali.",
    image: vivencias,
    alt: "Vinhedo com ciprestes ao amanhecer",
  },
  {
    n: "04",
    name: "Conforto",
    text: "Informações práticas para uma viagem tranquila e segura.",
    caption: "Chegar e sentir que se pode ficar.",
    image: conforto,
    alt: "Porta de entrada de uma pequena hospedaria com vasos de plantas",
  },
  {
    n: "05",
    name: "Memórias",
    text: "Momentos especiais que ficam para sempre com você.",
    caption: "A luz do fim do dia — o que a gente leva de volta.",
    image: memorias,
    alt: "Vilarejo no alto da colina ao pôr do sol",
  },
] as const;

export function FivePaths() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">Nossa forma de viajar</p>
            </div>
            <h2 className="text-h2 mt-6 max-w-[16ch]">
              Cinco caminhos.
              <br />
              Uma viagem só sua.
            </h2>
          </div>
          <p className="max-w-lg text-muted-foreground lg:justify-self-end">
            Cada destino pode ser vivido de muitas formas. Nós organizamos a experiência
            em 5 caminhos para ajudar a descobrir o que faz sentido para você.
          </p>
        </div>

        {/* Editorial rows — alternating asymmetry, not a row of cards */}
        <div className="mt-16 md:mt-20">
          {paths.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Link
                key={p.name}
                to="/caminhos"
                className="group grid grid-cols-1 items-center gap-6 border-t border-border py-8 md:grid-cols-12 md:gap-10 md:py-10 last:border-b"
              >
                <div
                  className={`md:col-span-5 lg:col-span-5 ${
                    reversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      width={900}
                      height={640}
                      className={`w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.04] ${
                        i === 0 ? "aspect-[5/4]" : reversed ? "aspect-[3/2]" : "aspect-[4/3]"
                      }`}
                    />
                  </div>
                  <p className="caption-editorial mt-2.5 text-muted-foreground">{p.caption}</p>
                </div>

                <div
                  className={`md:col-span-6 md:col-start-auto ${
                    reversed ? "md:order-1" : "md:order-2 md:col-start-7"
                  }`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-4xl leading-none text-accent/80">
                      {p.n}
                    </span>
                    <h3 className="text-h3">{p.name}</h3>
                  </div>
                  <p className="mt-4 max-w-[42ch] text-muted-foreground">{p.text}</p>
                  <span className="label-editorial mt-6 inline-flex items-center gap-2 text-accent">
                    Explorar o caminho
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
