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
    ratio: "aspect-[4/3]",
  },
  {
    n: "02",
    name: "Sabores",
    text: "Restaurantes, cafés e sabores que contam histórias.",
    image: sabores,
    alt: "Prato de massa fresca sobre mesa de cerâmica com luz natural",
    ratio: "aspect-[3/4]",
  },
  {
    n: "03",
    name: "Vivências",
    text: "Passeios e experiências que aproximam você de quem vive ali.",
    image: vivencias,
    alt: "Vinhedo com ciprestes ao amanhecer",
    ratio: "aspect-[3/2]",
  },
  {
    n: "04",
    name: "Conforto",
    text: "Informações práticas para uma viagem tranquila e segura.",
    image: conforto,
    alt: "Porta de entrada de uma pequena hospedaria com vasos de plantas",
    ratio: "aspect-square",
  },
  {
    n: "05",
    name: "Memórias",
    text: "Momentos especiais que ficam para sempre com você.",
    image: memorias,
    alt: "Vilarejo no alto da colina ao pôr do sol",
    ratio: "aspect-[4/3]",
  },
] as const;

export function FivePaths() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">Cinco caminhos</p>
            </div>
            <h2 className="text-h2 mt-4 max-w-[16ch]">Uma viagem só sua.</h2>
          </div>
          <p className="text-meta max-w-[46ch] text-muted-foreground md:col-span-5 md:col-start-8">
            Organizamos cada destino em cinco caminhos, para ajudar a descobrir o que
            faz sentido para você.
          </p>
        </div>

        {/* Continuous editorial rhythm — compact rows, controlled image scale */}
        <div className="mt-10 border-t border-border">
          {paths.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Link
                key={p.name}
                to="/caminhos"
                className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 gap-y-4 border-b border-border py-6 md:grid-cols-12 md:gap-x-8 md:py-7"
              >
                <span className="font-display text-2xl leading-none text-accent/80 md:col-span-1 md:text-3xl">
                  {p.n}
                </span>

                <div
                  className={`md:col-span-6 ${reversed ? "md:order-3 md:col-start-7" : "md:order-2"}`}
                >
                  <h3 className="font-display text-2xl leading-snug md:text-[1.75rem]">
                    {p.name}
                  </h3>
                  <p className="text-meta mt-2 max-w-[38ch] text-muted-foreground">
                    {p.text}
                  </p>
                  <span className="label-editorial mt-3 inline-flex items-center gap-2 text-accent">
                    Explorar o caminho
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>

                <div
                  className={`col-span-2 md:col-span-4 ${
                    reversed ? "md:order-2 md:col-start-2" : "md:order-3 md:col-start-9"
                  }`}
                >
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      width={640}
                      height={480}
                      className={`w-full max-h-[240px] object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.04] ${p.ratio}`}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
