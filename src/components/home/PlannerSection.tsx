import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import plannerImage from "@/assets/planner-mesa.jpg";

export function PlannerSection() {
  return (
    <section className="relative isolate overflow-hidden bg-olive text-olive-foreground">
      <img
        src={plannerImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-olive via-olive/90 to-olive/55"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-olive-foreground/40" aria-hidden="true" />
            <p className="label-editorial text-olive-foreground/70">Planner La Nostra Via</p>
          </div>

          <h2 className="text-h2 mt-7 max-w-[12ch]">
            Do sonho
            <br />
            ao caminho.
          </h2>

          <p className="text-body-lg mt-8 max-w-[42ch] text-olive-foreground/80">
            Quando a inspiração vira decisão, o Planner organiza sua viagem no mesmo
            espírito da nossa curadoria: com calma, contexto e atenção ao que importa
            para você.
          </p>

          <ul className="mt-10 grid gap-4 border-t border-olive-foreground/20 pt-7 sm:grid-cols-3">
            {[
              "Roteiros construídos a partir dos 5 Caminhos.",
              "Ritmo, distâncias e tempo real de cada dia.",
              "Do planejamento à memória, em um só lugar.",
            ].map((item, i) => (
              <li key={item} className="text-meta text-olive-foreground/80">
                <span className="label-editorial block text-olive-foreground/50">
                  {`0${i + 1}`}
                </span>
                <span className="mt-1.5 block">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/planner"
            className="group mt-11 inline-flex items-center gap-3 rounded-sm bg-olive-foreground px-7 py-3.5 text-meta text-olive transition-opacity duration-200 hover:opacity-90"
          >
            Começar a planejar
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
