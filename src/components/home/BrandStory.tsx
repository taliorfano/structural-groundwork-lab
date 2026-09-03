import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import sobreImage from "@/assets/sobre-caminho.jpg";

export function BrandStory() {
  return (
    <section className="py-16 md:py-20">
      <Container className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <div className="overflow-hidden rounded-sm">
            <img
              src={sobreImage}
              alt="Caminho de pedra entre casas antigas iluminado por lampiões ao anoitecer"
              loading="lazy"
              width={720}
              height={900}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="caption-editorial mt-2.5 text-muted-foreground">
            O caminho que dá nome à marca.
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
            <p className="label-editorial text-accent">A marca</p>
          </div>
          <h2 className="text-h2 mt-4 max-w-[16ch] text-[clamp(1.8rem,3vw,2.6rem)]">
            La Nostra Via significa “Nosso Caminho”.
          </h2>
          <p className="mt-5 max-w-[46ch] text-muted-foreground">
            Nasceu de uma forma simples de viajar: chegar sem pressa, entender o lugar,
            comer bem, conversar com quem vive ali e voltar com histórias — não apenas
            com fotos.
          </p>
          <p className="text-meta mt-4 max-w-[46ch] text-muted-foreground">
            Cada destino que publicamos passou por pesquisa, escolha e cuidado. Não
            listamos tudo. Selecionamos o que faz sentido para quem viaja com atenção.
          </p>
          <Link
            to="/sobre"
            className="link-editorial mt-6 inline-flex items-center gap-2 text-meta"
          >
            Conheça nossa história
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
