import { Link } from "@tanstack/react-router";

import { Container } from "./Container";

const explore = [
  { label: "5 Caminhos", to: "/caminhos" },
  { label: "Destinos", to: "/destinos" },
  { label: "Inspirações", to: "/inspiracoes" },
  { label: "Guias", to: "/guias" },
] as const;

const brand = [
  { label: "Sobre", to: "/sobre" },
  { label: "Planner", to: "/planner" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">La Nostra Via</p>
          <p className="mt-3 max-w-xs text-meta text-muted-foreground">
            “Nosso Caminho”, em italiano. Descubra destinos. Viva experiências.
          </p>
        </div>

        <nav aria-label="Explorar">
          <p className="label-editorial text-muted-foreground">Explorar</p>
          <ul className="mt-4 space-y-2">
            {explore.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="link-editorial text-meta">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="A marca">
          <p className="label-editorial text-muted-foreground">A marca</p>
          <ul className="mt-4 space-y-2">
            {brand.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="link-editorial text-meta">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-editorial text-muted-foreground">
            © {new Date().getFullYear()} La Nostra Via
          </p>
          <p className="label-editorial text-muted-foreground">
            Viajar começa antes de partir
          </p>
        </Container>
      </div>
    </footer>
  );
}
