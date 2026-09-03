import { Container } from "@/components/layout/Container";
import historia from "@/assets/caminho-historia.jpg";
import sabores from "@/assets/caminho-sabores.jpg";
import vivencias from "@/assets/caminho-vivencias.jpg";
import conforto from "@/assets/caminho-conforto.jpg";
import memorias from "@/assets/caminho-memorias.jpg";

const overview = [
  {
    n: "01",
    name: "História",
    claim: "Todo lugar tem uma história para contar.",
    image: historia,
    alt: "Ruela histórica de pedra sob um arco antigo",
  },
  {
    n: "02",
    name: "Sabores",
    claim: "Conhecer um lugar também é sentar à mesa.",
    image: sabores,
    alt: "Prato de massa fresca sobre mesa de cerâmica",
  },
  {
    n: "03",
    name: "Vivências",
    claim: "Algumas experiências não cabem em um roteiro pronto.",
    image: vivencias,
    alt: "Vinhedo com ciprestes ao amanhecer",
  },
  {
    n: "04",
    name: "Conforto",
    claim: "Uma boa viagem também está nos detalhes.",
    image: conforto,
    alt: "Entrada de uma pequena hospedaria com vasos de plantas",
  },
  {
    n: "05",
    name: "Memórias",
    claim: "Alguns lugares ficam com a gente.",
    image: memorias,
    alt: "Vilarejo ao entardecer visto do alto",
  },
];

/** Compact five-column index of the caminhos, right under the hero. */
export function PathsOverview() {
  return (
    <section className="border-y border-border bg-surface py-12 md:py-16">
      <Container>
        <ol className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
          {overview.map((p, i) => (
            <li
              key={p.name}
              className={`min-w-0 text-center lg:px-6 ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              }`}
            >
              <span className="font-display block text-2xl leading-none text-accent">
                {p.n}
              </span>
              <h2 className="font-display mt-2 text-[clamp(1.25rem,1.7vw,1.6rem)] uppercase tracking-[0.06em] text-primary">
                {p.name}
              </h2>
              <span
                aria-hidden="true"
                className="mx-auto mt-3 block h-px w-8 bg-accent/50"
              />
              <div className="mx-auto mt-5 overflow-hidden rounded-sm">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={600}
                  height={480}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <p className="caption-editorial mx-auto mt-4 max-w-[22ch] text-muted-foreground">
                {p.claim}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
