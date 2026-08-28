import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import sobreImage from "@/assets/sobre-caminho.jpg";

export function BrandStory() {
  return (
    <section className="bg-sand/45 py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-sm">
            <img
              src={sobreImage}
              alt="Caminho de pedra entre casas antigas iluminado por lampiões ao anoitecer"
              loading="lazy"
              width={1100}
              height={1300}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="caption-editorial mt-2.5 text-muted-foreground">
            O caminho que dá nome à marca: devagar, e sempre para dentro do lugar.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-16">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
            <p className="label-editorial text-accent">A marca</p>
          </div>
          <h2 className="text-h2 mt-6 max-w-[16ch]">
            La Nostra Via significa “Nosso Caminho”.
          </h2>
          <p className="text-body-lg mt-7 max-w-[44ch] text-muted-foreground">
            Nasceu de uma forma simples de viajar: chegar sem pressa, entender o lugar,
            comer bem, conversar com quem vive ali e voltar com histórias — não apenas
            com fotos.
          </p>
          <p className="mt-5 max-w-[46ch] text-muted-foreground">
            Cada destino que publicamos passou por pesquisa, escolha e cuidado. Não
            listamos tudo. Selecionamos o que faz sentido para quem viaja com atenção,
            com família e com vontade de viver o lugar por dentro.
          </p>
          <Link
            to="/sobre"
            className="link-editorial mt-9 inline-flex items-center gap-2 text-meta"
          >
            Conheça nossa história
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
