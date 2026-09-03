import { Container } from "@/components/layout/Container";
import historia from "@/assets/caminho2-historia.jpg";
import sabores from "@/assets/caminho2-sabores.jpg";
import vivencias from "@/assets/caminho2-vivencias.jpg";
import conforto from "@/assets/caminho2-conforto.jpg";
import memorias from "@/assets/caminho2-memorias.jpg";

type Path = {
  n: string;
  name: string;
  claim: string;
  body: string[];
  items: string[];
  image: string;
  alt: string;
  caption: string;
};

const paths: Path[] = [
  {
    n: "01",
    name: "História",
    claim: "Todo lugar tem uma história para contar.",
    body: [
      "História não está apenas nos museus. Ela vive nas ruas, na arquitetura, nas pessoas que passaram por ali e nas histórias que continuam sendo contadas.",
      "Por esse caminho, buscamos compreender melhor os lugares que visitamos — seu passado, sua cultura, seus personagens e os detalhes que ajudam um destino a fazer mais sentido.",
    ],
    items: [
      "história e contexto",
      "arquitetura",
      "cultura local",
      "personagens",
      "curiosidades",
      "lugares históricos",
    ],
    image: historia,
    alt: "Ruela histórica de pedra sob um arco antigo",
    caption: "As ruas guardam o que os museus contam.",
  },
  {
    n: "02",
    name: "Sabores",
    claim: "Conhecer um lugar também é sentar à mesa.",
    body: [
      "Algumas das melhores lembranças de uma viagem começam com um aroma, um prato ou uma conversa em torno da mesa.",
      "Descobrimos restaurantes, cafés, mercados e sabores que ajudam a conhecer um destino de outra forma — dos pratos mais tradicionais aos pequenos lugares fora dos roteiros óbvios.",
    ],
    items: [
      "restaurantes",
      "cafés",
      "mercados",
      "gelaterias",
      "pratos locais",
      "experiências gastronômicas",
    ],
    image: sabores,
    alt: "Mesa compartilhada em uma pequena trattoria, pratos e cafés no fim do almoço",
    caption: "A mesa como parte do roteiro.",
  },
  {
    n: "03",
    name: "Vivências",
    claim: "Algumas experiências não cabem em um roteiro pronto.",
    body: [
      "Uma feira encontrada por acaso. Um bairro que não estava nos planos. Um mirante que nos faz parar por alguns minutos.",
      "O caminho das Vivências reúne experiências que ajudam você a viver o destino — e não apenas visitá-lo.",
    ],
    items: [
      "feiras",
      "passeios",
      "mirantes",
      "trilhas",
      "experiências locais",
      "bairros",
    ],
    image: vivencias,
    alt: "Casal caminhando por um mercado de rua em um bairro mediterrâneo",
    caption: "Viver o destino, não apenas visitá-lo.",
  },
  {
    n: "04",
    name: "Conforto",
    claim: "Uma boa viagem também está nos detalhes.",
    body: [
      "Saber onde estacionar. Encontrar um banheiro no momento certo. Descobrir uma farmácia próxima. Entender como se deslocar.",
      "Esses detalhes tornam a viagem mais leve e possível — especialmente com crianças, em família ou com necessidades específicas.",
    ],
    items: [
      "estacionamento",
      "banheiros",
      "farmácias",
      "acessibilidade",
      "famílias",
      "deslocamento",
      "horários e reservas",
    ],
    image: conforto,
    alt: "Família aguardando o trem na plataforma de uma pequena estação",
    caption: "O que não aparece na foto, mas muda o dia.",
  },
  {
    n: "05",
    name: "Memórias",
    claim: "Alguns lugares ficam com a gente.",
    body: [
      "Pode ser um pôr do sol. Uma vista inesperada. Uma tarde em família. Um lugar encontrado quase por acaso.",
      "O caminho das Memórias é dedicado àquilo que transforma uma viagem em algo que continua existindo mesmo depois da volta — e que, às vezes, vale um pequeno desvio.",
    ],
    items: [
      "pôr do sol",
      "lugares especiais",
      "experiências em família",
      "momentos únicos",
      "vale o desvio",
    ],
    image: memorias,
    alt: "Família contemplando o vale ao pôr do sol de um mirante",
    caption: "O que continua depois da volta.",
  },
];

/** Alternating, unequal compositions — a sequence, not a grid of cards. */
const layouts = [
  { text: "md:col-span-5 md:col-start-2", media: "md:col-span-4 md:col-start-8", ratio: "aspect-[4/5]" },
  { text: "md:col-span-5 md:col-start-7", media: "md:col-span-4 md:col-start-2 md:row-start-1", ratio: "aspect-[3/2]" },
  { text: "md:col-span-4 md:col-start-2", media: "md:col-span-6 md:col-start-7", ratio: "aspect-[16/10]" },
  { text: "md:col-span-5 md:col-start-8", media: "md:col-span-3 md:col-start-4 md:row-start-1", ratio: "aspect-square" },
  { text: "md:col-span-5 md:col-start-2", media: "md:col-span-5 md:col-start-8", ratio: "aspect-[5/4]" },
] as const;

export function PathsSequence() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6 md:col-start-2">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">Os cinco caminhos</p>
            </div>
            <h2 className="text-h2 mt-4 max-w-[16ch] text-[clamp(2rem,3.4vw,3rem)]">
              Diferentes formas de conhecer o mesmo lugar.
            </h2>
          </div>
        </div>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {paths.map((p, i) => {
            const l = layouts[i]!;
            return (
              <article
                key={p.name}
                className="grid gap-6 py-12 md:grid-cols-12 md:gap-x-10 md:py-16"
              >
                <div className={`min-w-0 ${l.text}`}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl leading-none text-accent/80">
                      {p.n}
                    </span>
                    <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight">
                      {p.name}
                    </h3>
                  </div>

                  <p className="font-display mt-4 max-w-[26ch] text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.3] text-muted-foreground">
                    {p.claim}
                  </p>

                  <div className="mt-5 max-w-[46ch] space-y-3.5 text-muted-foreground">
                    {p.body.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>

                  <p className="label-editorial mt-7 text-foreground/60">
                    Você pode encontrar
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="text-meta rounded-full border border-border px-3 py-1 text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <figure className={`min-w-0 ${l.media}`}>
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      width={900}
                      height={900}
                      className={`w-full object-cover ${l.ratio}`}
                    />
                  </div>
                  <figcaption className="caption-editorial mt-2.5 text-muted-foreground">
                    {p.caption}
                  </figcaption>
                </figure>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
