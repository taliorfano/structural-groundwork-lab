import { Link } from "@tanstack/react-router";
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
      <Container className="flex h-20 items-center justify-between gap-8">
        <Link
          to="/"
          className="font-display text-xl leading-none tracking-tight sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          La Nostra Via
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="link-editorial text-meta text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/planner"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-meta text-primary-foreground transition-colors duration-200 hover:bg-primary/90 sm:inline-flex"
          >
            Planejar minha viagem
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="label-editorial -mr-1 px-1 py-2 lg:hidden"
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
              className="mt-6 inline-flex w-fit rounded-md bg-primary px-5 py-2.5 text-meta text-primary-foreground"
            >
              Planejar minha viagem
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
