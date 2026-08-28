import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-italia.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid w-full max-w-[1600px] items-stretch lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)]">
        {/* Text column */}
        <div className="order-2 flex items-center px-5 py-14 sm:px-8 lg:order-1 lg:py-28 lg:pl-[max(3rem,calc((100vw-1280px)/2))] lg:pr-16">
          <div className="max-w-xl">
            <p className="label-editorial text-accent">La Nostra Via</p>

            <h1 className="text-hero mt-6">
              Viajar começa
              <br />
              antes de partir.
            </h1>

            <span className="mt-8 block h-px w-16 bg-accent/70" aria-hidden="true" />

            <p className="text-body-lg mt-8 max-w-md text-muted-foreground">
              Curadoria de destinos, histórias e experiências para descobrir cada lugar
              de forma autêntica — do Brasil ao mundo.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
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
          </div>
        </div>

        {/* Photography column */}
        <div className="relative order-1 min-h-[52vh] lg:order-2 lg:min-h-[86vh]">
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
            className="absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-background to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
