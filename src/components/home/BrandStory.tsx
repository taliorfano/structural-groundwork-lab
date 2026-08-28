import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import sobreImage from "@/assets/sobre-caminho.jpg";

export function BrandStory() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="label-editorial text-accent">A marca</p>
          <h2 className="text-h2 mt-5 max-w-[18ch]">
            La Nostra Via significa “Nosso Caminho”.
          </h2>
          <p className="text-body-lg mt-6 text-muted-foreground">
            Nasceu de uma forma simples de viajar: chegar sem pressa, entender o lugar,
            comer bem, conversar com quem vive ali e voltar com histórias — não apenas
            com fotos.
          </p>
          <p className="mt-5 text-muted-foreground">
            Cada destino que publicamos passou por pesquisa, escolha e cuidado. Não
            listamos tudo. Selecionamos o que faz sentido para quem viaja com atenção,
            com família e com vontade de viver o lugar por dentro.
          </p>
          <Link
            to="/sobre"
            className="link-editorial mt-8 inline-flex items-center gap-2 text-meta"
          >
            Conheça nossa história
            <ArrowRight className="size-4" />
          </Link>
        </div>

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
      </Container>
    </section>
  );
}
