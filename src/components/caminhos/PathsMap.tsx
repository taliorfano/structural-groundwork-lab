import { Container } from "@/components/layout/Container";
import historia from "@/assets/caminho2-historia.jpg";
import sabores from "@/assets/caminho2-sabores.jpg";
import vivencias from "@/assets/caminho2-vivencias.jpg";
import conforto from "@/assets/caminho2-conforto.jpg";
import memorias from "@/assets/caminho2-memorias.jpg";

const paths = [
  { n: "01", name: "História", note: "o passado que ainda se caminha", image: historia, offset: "md:ml-0" },
  { n: "02", name: "Sabores", note: "a mesa como parte do roteiro", image: sabores, offset: "md:ml-[6%]" },
  { n: "03", name: "Vivências", note: "viver, não apenas visitar", image: vivencias, offset: "md:ml-[12%]" },
  { n: "04", name: "Conforto", note: "o que torna o caminho leve", image: conforto, offset: "md:ml-[18%]" },
  { n: "05", name: "Memórias", note: "o que fica depois da volta", image: memorias, offset: "md:ml-[24%]" },
] as const;

/**
 * "Mapa dos caminhos" — the five paths as an expressive typographic descent,
 * each name paired with a small photographic detail. Not cards, not a diagram.
 */
export function PathsMap() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-14 md:py-20">
      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
            <p className="label-editorial text-accent">Um mapa de possibilidades</p>
          </div>
          <p className="caption-editorial max-w-[34ch] text-muted-foreground">
            Uma viagem. Diferentes formas de descobrir.
          </p>
        </div>

        <ol className="mt-10 md:mt-14">
          {paths.map((p, i) => (
            <li
              key={p.name}
              className={`group relative flex items-center gap-4 border-b border-border py-5 first:border-t sm:gap-7 md:py-7 ${p.offset}`}
            >
              <span className="label-editorial w-8 shrink-0 text-accent/80 md:w-10">{p.n}</span>

              <div className="min-w-0 flex-1">
                <h2 className="font-display text-[clamp(2.1rem,6.4vw,4.6rem)] leading-[1.02] tracking-[-0.02em]">
                  {p.name}
                </h2>
              </div>

              <p className="caption-editorial hidden max-w-[22ch] text-right text-muted-foreground md:block">
                {p.note}
              </p>

              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm sm:h-20 sm:w-16 md:h-24 md:w-20">
                <img
                  src={p.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={320}
                  height={400}
                  className="size-full object-cover"
                />
              </div>

              {i < paths.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px left-8 h-px w-10 bg-accent/50 md:left-10"
                />
              )}
            </li>
          ))}
        </ol>

        <p className="caption-editorial mt-6 text-muted-foreground md:ml-[24%]">
          História → Sabores → Vivências → Conforto → Memórias
        </p>
      </Container>
    </section>
  );
}
