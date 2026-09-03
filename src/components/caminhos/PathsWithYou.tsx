import { Container } from "@/components/layout/Container";

const tags = [
  { n: "01", name: "História", use: "um destino pela sua história" },
  { n: "02", name: "Sabores", use: "um restaurante que vale conhecer" },
  { n: "03", name: "Vivências", use: "uma experiência especial" },
  { n: "04", name: "Conforto", use: "uma informação prática que facilita o caminho" },
  { n: "05", name: "Memórias", use: "um lugar que vale guardar na memória" },
] as const;

export function PathsWithYou() {
  return (
    <section className="bg-sand/40 py-16 md:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 md:col-start-2">
            <p className="label-editorial text-accent">No resto do site</p>
            <h2 className="font-display mt-4 max-w-[14ch] text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.2]">
              Os caminhos continuam com você.
            </h2>
            <p className="mt-5 max-w-[38ch] text-muted-foreground">
              À medida que você explora a La Nostra Via, encontrará os cinco caminhos
              conectando destinos, histórias, experiências e recomendações.
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border md:col-span-5 md:col-start-7 md:self-center">
            {tags.map((t) => (
              <li key={t.name} className="flex items-baseline gap-4 py-3.5">
                <span className="label-editorial shrink-0 rounded-full border border-accent/40 px-2.5 py-1 text-accent">
                  {t.name}
                </span>
                <span className="text-meta text-muted-foreground">{t.use}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
