import { Container } from "@/components/layout/Container";

const items = [
  "um lugar que conheci",
  "um restaurante que marcou uma viagem",
  "uma experiência que considero especial",
  "uma dica prática que aprendi viajando",
  "ou algo que pesquisei cuidadosamente e considero que vale a pena compartilhar",
];

export function DicaDaTalita() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 md:col-start-1">
          <div className="inline-flex items-start gap-4 border-l-2 border-accent pl-5">
            <div>
              <span className="label-editorial block text-accent">A assinatura</span>
              <p className="font-display mt-2 text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.1]">
                Dica da Talita
              </p>
              <p className="caption-editorial mt-2 max-w-[30ch] text-muted-foreground">
                Uma recomendação pessoal, compartilhada de viajante para viajante.
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-[42ch] text-muted-foreground">
            Quando você encontrar uma Dica da Talita pelo site, saberá que existe uma
            experiência ou uma pesquisa pessoal por trás daquela recomendação.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="label-editorial text-muted-foreground">Pode ser</p>
          <ul className="mt-5 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-4 border-b border-border pb-3 text-muted-foreground last:border-0"
              >
                <span className="text-accent" aria-hidden="true">
                  ·
                </span>
                <span className="max-w-[44ch]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-9 max-w-[42ch] text-meta text-muted-foreground">
            A intenção não é dizer qual é a única maneira certa de viajar. É compartilhar
            experiências e descobertas que talvez ajudem você a encontrar o seu próprio
            caminho.
          </p>
        </div>
      </Container>
    </section>
  );
}
