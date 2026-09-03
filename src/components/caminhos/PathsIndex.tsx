import { Columns3, Utensils, Camera, MapPin, Heart } from "lucide-react";

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
    Icon: Columns3,
    image: historia,
    alt: "Ruínas de colunas antigas iluminadas pelo sol",
    phrase: "Todo lugar tem uma história para contar.",
  },
  {
    n: "02",
    name: "Sabores",
    Icon: Utensils,
    image: sabores,
    alt: "Prato de massa fresca servido à mesa",
    phrase: "Conhecer um lugar também é sentar à mesa.",
  },
  {
    n: "03",
    name: "Vivências",
    Icon: Camera,
    image: vivencias,
    alt: "Pessoas em um mirante diante do mar",
    phrase: "Algumas experiências não cabem em um roteiro pronto.",
  },
  {
    n: "04",
    name: "Conforto",
    Icon: MapPin,
    image: conforto,
    alt: "Mala e chapéu prontos para a viagem",
    phrase: "Uma boa viagem também está nos detalhes.",
  },
  {
    n: "05",
    name: "Memórias",
    Icon: Heart,
    image: memorias,
    alt: "Cidade histórica ao pôr do sol",
    phrase: "Alguns lugares ficam com a gente.",
  },
] as const;

export function PathsIndex() {
  return (
    <section className="bg-sand/25 py-12 md:py-16">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-x-0 md:divide-x md:divide-border">
          {paths.map((p) => (
            <li key={p.name} className="px-0 text-center md:px-5">
              <p className="font-display text-2xl leading-none text-muted-foreground">
                {p.n}
              </p>
              <h3 className="font-display mt-2 text-[clamp(1.25rem,1.8vw,1.6rem)] uppercase tracking-[0.06em] text-accent">
                {p.name}
              </h3>
              <p.Icon
                aria-hidden="true"
                strokeWidth={1.25}
                className="mx-auto mt-3 size-8 text-accent/80"
              />
              <div className="mt-5 overflow-hidden rounded-sm">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={480}
                  height={420}
                  className="aspect-[7/6] w-full object-cover"
                />
              </div>
              <p className="text-meta mt-4 text-muted-foreground">{p.phrase}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
