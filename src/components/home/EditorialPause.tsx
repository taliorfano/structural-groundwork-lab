import { Container } from "@/components/layout/Container";
import detalhe from "@/assets/caminho-memorias.jpg";

/** A quiet page inside a travel journal — small image, close typography. */
export function EditorialPause() {
  return (
    <section className="bg-sand/40 py-14 md:py-16">
      <Container>
        <div className="mx-auto flex max-w-[52rem] flex-col items-center gap-7 sm:flex-row sm:items-center sm:gap-10">
          <div className="w-40 shrink-0 overflow-hidden rounded-sm sm:w-52">
            <img
              src={detalhe}
              alt="Vilarejo no alto da colina sob a luz do fim do dia"
              loading="lazy"
              width={420}
              height={520}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div>
            <p className="font-display text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.3]">
              Viajar devagar é deixar o lugar acontecer — a luz do fim do dia, a mesa que
              demora, a rua que se repete até virar familiar.
            </p>
            <p className="caption-editorial mt-3 text-muted-foreground">
              O que a gente leva de volta raramente cabe numa foto.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
