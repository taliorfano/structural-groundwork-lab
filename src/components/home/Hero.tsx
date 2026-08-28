import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-italia.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid w-full max-w-[1600px] items-stretch lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)]">
        {/* Text column */}
        <div className="order-2 flex items-center px-5 pb-16 pt-12 sm:px-8 lg:order-1 lg:py-32 lg:pl-[max(3rem,calc((100vw-1280px)/2))] lg:pr-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
              <p className="label-editorial text-accent">La Nostra Via</p>
            </div>

            <h1 className="text-hero mt-8">
              Viajar começa
              <br />
              antes de partir.
            </h1>

            <p className="text-body-lg mt-9 max-w-[34ch] text-muted-foreground">
              Curadoria de destinos, histórias e experiências para descobrir cada lugar
              de forma autêntica — do Brasil ao mundo.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/destinos"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-3.5 text-meta text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
              >
                Explorar destinos
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/caminhos"
                className="link-editorial inline-flex items-center gap-2 text-meta text-foreground"
              >
                Conheça os 5 Caminhos
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-16 hidden items-center gap-4 border-t border-border pt-5 lg:flex">
              <span className="label-editorial text-muted-foreground">
                Inspire · Descubra · Planeje
              </span>
            </div>
          </div>
        </div>

        {/* Photography column */}
        <div className="relative order-1 min-h-[58vh] lg:order-2 lg:min-h-[clamp(620px,86vh,900px)]">
          <img
            src={heroImage}
            alt="Vista de uma cidade italiana histórica ao entardecer, com cúpula e telhados de terracota"
            width={1280}
            height={1600}
            className="absolute inset-0 size-full object-cover"
          />
          {/* Organic transition into the text column */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-44 bg-gradient-to-r from-background to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent lg:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/40 to-transparent"
          />
          <figcaption className="absolute bottom-6 right-6 max-w-[22ch] text-right">
            <span className="label-editorial block text-background/80">Itália · Florença</span>
            <span className="caption-editorial mt-1 block text-background/70">
              Fim de tarde sobre os telhados, do Piazzale Michelangelo.
            </span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
