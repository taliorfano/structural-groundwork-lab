import { Container } from "@/components/layout/Container";
import torinoAsset from "@/assets/talita-torino.jpg.asset.json";
import neveAsset from "@/assets/talita-neve.jpg.asset.json";

export function TalitaStory() {
  return (
    <section className="border-t border-border bg-surface py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-sm">
              <img
                src={torinoAsset.url}
                alt="Talita sorrindo em frente ao Palazzo Madama, em Torino, durante o inverno italiano"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="caption-editorial mt-2.5 text-muted-foreground">
              Torino, Itália — onde tudo isso começou a fazer sentido.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:self-center">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">Quem escreve</p>
            </div>
            <h2 className="text-h2 mt-5 max-w-[14ch] text-[clamp(2rem,3.4vw,3rem)]">
              Prazer, eu sou a Talita.
            </h2>
            <p className="text-body-lg mt-6 max-w-[46ch] text-muted-foreground">
              Sou a pessoa por trás da La Nostra Via — e também por trás de muitas das
              pesquisas, roteiros e recomendações que você encontrará por aqui.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6 md:col-start-2">
            <div className="space-y-5 text-muted-foreground">
              <p>
                Viajar sempre foi, para mim, muito mais do que escolher um destino e
                montar uma lista de atrações.
              </p>
              <p>
                Gosto de pesquisar, montar roteiros e descobrir tudo o que um lugar tem a
                oferecer. Antes mesmo de chegar, quero entender sua história, conhecer um
                pouco da cultura local, descobrir sua gastronomia e explorar diferentes
                possibilidades de vivenciar aquele destino.
              </p>
              <p>
                Foi assim que, ainda durante a faculdade de Engenharia de Computação, tive
                a oportunidade de viver uma experiência que marcou profundamente a minha
                relação com as viagens: um intercâmbio em Torino, na Itália, em 2013.
              </p>
            </div>

            <p className="font-display mt-9 max-w-[26ch] text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.2] text-foreground">
              A Itália me apresentou muito mais do que cidades e paisagens inesquecíveis.
            </p>

            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Ao longo dos anos, algumas amizades que construí por lá continuaram
                fazendo parte da minha vida — e o país conquistou um lugar muito especial
                no meu coração, tornando-se também uma parte importante da minha própria
                história.
              </p>
              <p>
                Também foram as viagens que me fizeram viver experiências que dificilmente
                esquecerei: caminhar por cidades históricas como Roma, Assis e Matera,
                conhecer novas culturas e, mais recentemente, descobrir uma forma
                completamente diferente de viajar com a chegada dos meus filhos.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-10">
            <div className="overflow-hidden rounded-sm">
              <img
                src={neveAsset.url}
                alt="Talita em um parque coberto de neve, em um dia de inverno"
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <p className="caption-editorial mt-2.5 max-w-[26ch] text-muted-foreground">
              Primeiro inverno, primeira neve — e a certeza de que o caminho continuaria.
            </p>

            <p className="mt-10 max-w-[28ch] border-l border-accent/50 pl-5 text-meta text-muted-foreground">
              Algumas aventuras, inclusive, entraram para a história da nossa família —
              como subir o Monte Bianco com dois bebês.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-border pt-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 md:col-start-2">
            <p className="text-muted-foreground">
              Com o tempo, percebi que muitas pessoas ao meu redor começaram a me procurar
              antes de viajar. Queriam dicas, ajuda para montar roteiros ou simplesmente
              conversar sobre lugares que eu já conhecia — especialmente sobre a Itália e
              viagens com crianças, dentro e fora do Brasil.
            </p>
            <p className="mt-5 text-muted-foreground">
              E foi dessa troca que nasceu a vontade de criar a La Nostra Via. Um espaço
              para compartilhar experiências, pesquisas e descobertas que possam ajudar
              outras pessoas a viverem suas próprias viagens de uma forma ainda mais
              especial.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-8 md:self-center">
            <p className="font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.22]">
              Porque, para mim, uma boa viagem não começa apenas quando chegamos ao
              destino.
            </p>
            <p className="mt-4 max-w-[34ch] text-meta text-muted-foreground">
              Ela começa muito antes — na curiosidade, na pesquisa e em tudo aquilo que
              descobrimos pelo caminho.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
