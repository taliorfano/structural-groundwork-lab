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
    image: historia,
    alt: "Ruela histórica de pedra sob um arco antigo",
  },
  {
    n: "02",
    name: "Sabores",
    text: "Restaurantes, cafés e sabores que contam histórias.",
    image: sabores,
    alt: "Prato de massa fresca sobre mesa de cerâmica com luz natural",
  },
  {
    n: "03",
    name: "Vivências",
    text: "Passeios, atividades e experiências que aproximam você do local.",
    image: vivencias,
    alt: "Vinhedo com ciprestes ao amanhecer",
  },
  {
    n: "04",
    name: "Conforto",
    text: "Informações práticas para uma viagem tranquila e segura.",
    image: conforto,
    alt: "Porta de entrada de uma pequena hospedaria com vasos de plantas",
  },
  {
    n: "05",
    name: "Memórias",
    text: "Momentos especiais que ficam para sempre com você.",
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
            <p className="label-editorial text-accent">Nossa forma de viajar</p>
            <h2 className="text-h2 mt-5 max-w-[16ch]">
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
      </Container>

      {/* Horizontal editorial composition */}
      <div className="mt-14 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-5 px-5 sm:px-8 lg:w-full lg:px-12">
          <div className="hidden lg:block lg:w-[max(0px,calc((100vw-1280px)/2))]" aria-hidden="true" />
          {paths.map((p, i) => (
            <Link
              key={p.name}
              to="/caminhos"
              className="group relative w-[76vw] shrink-0 sm:w-[46vw] lg:w-auto lg:flex-1"
            >
              <div
                className="relative overflow-hidden rounded-sm"
                style={{ marginTop: i % 2 === 1 ? "2.5rem" : undefined }}
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-foreground/45 to-transparent"
                />
                <span className="absolute left-4 top-3 font-display text-2xl text-background">
                  {p.n}
                </span>
              </div>

              <div style={{ marginTop: i % 2 === 1 ? "1.25rem" : "1.25rem" }}>
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="text-meta mt-2 text-muted-foreground">{p.text}</p>
                <span className="label-editorial mt-4 inline-flex items-center gap-2 text-accent">
                  Explorar
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
          <div className="hidden lg:block lg:w-[max(0px,calc((100vw-1280px)/2))]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
