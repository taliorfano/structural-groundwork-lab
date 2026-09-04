import { Container } from "@/components/layout/Container";

export function NameMeaning() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 md:col-start-1">
          <p className="label-editorial text-muted-foreground">O nome</p>
          <p className="font-display mt-5 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.08]">
            La Nostra Via.
            <br />
            <span className="text-accent">Nosso Caminho.</span>
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:self-end">
          <div className="space-y-4 text-muted-foreground">
            <p className="text-body-lg max-w-[44ch] text-foreground">
              Em italiano, La Nostra Via significa “Nosso Caminho”.
            </p>
            <p className="max-w-[46ch]">
              O nome representa a ideia de que não existe uma única forma de viajar. Cada
              pessoa tem seus interesses, seu ritmo e sua maneira de descobrir um lugar.
            </p>
            <p className="max-w-[46ch]">
              Por aqui, compartilhamos caminhos que conhecemos, pesquisamos e acreditamos
              que valem a pena explorar.
            </p>
          </div>
          <p className="font-display mt-8 max-w-[30ch] border-t border-border pt-6 text-[clamp(1.3rem,2.1vw,1.75rem)] leading-[1.25]">
            E esperamos, de alguma forma, ajudar você a encontrar o seu.
          </p>
        </div>
      </Container>
    </section>
  );
}
