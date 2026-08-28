import { Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "./Container";

const navItems = [
  { label: "Descobrir", to: "/" },
  { label: "5 Caminhos", to: "/caminhos" },
  { label: "Destinos", to: "/destinos" },
  { label: "Inspirações", to: "/inspiracoes" },
  { label: "Sobre", to: "/sobre" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-sm">
      <Container className="grid h-[5.5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:flex lg:justify-between lg:gap-10">
        <Link
          to="/"
          className="min-w-0 leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-display block text-2xl leading-none tracking-tight sm:text-[1.75rem]">
            La Nostra Via
          </span>
          <span className="label-editorial mt-1.5 hidden text-[0.625rem] text-muted-foreground sm:block">
            Descubra destinos. Viva experiências.
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="link-editorial text-meta text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/planner"
            className="group hidden items-center gap-2.5 rounded-sm bg-primary px-5 py-2.5 text-meta text-primary-foreground transition-colors duration-200 hover:bg-primary/90 sm:inline-flex"
          >
            Planejar minha viagem
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/destinos"
            aria-label="Buscar destinos"
            className="hidden text-foreground/70 transition-colors hover:text-foreground lg:block"
          >
            <Search className="size-[1.15rem] stroke-[1.5]" />
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="label-editorial -mr-1 shrink-0 px-1 py-2 lg:hidden"
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="menu-mobile" className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl leading-tight"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/planner"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-sm bg-primary px-5 py-2.5 text-meta text-primary-foreground"
            >
              Planejar minha viagem
              <ArrowRight className="size-4" />
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
