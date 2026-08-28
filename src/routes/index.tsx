import { createFileRoute, Link } from "@tanstack/react-router";

import { Container } from "@/components/layout/Container";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Nostra Via — Viajar começa antes de partir" },
      {
        name: "description",
        content:
          "Curadoria de viagens: destinos, histórias e experiências autênticas para descobrir, planejar e viver cada lugar com calma.",
      },
      { property: "og:title", content: "La Nostra Via — Viajar começa antes de partir" },
      {
        property: "og:description",
        content:
          "Curadoria de viagens: destinos, histórias e experiências autênticas para descobrir, planejar e viver cada lugar com calma.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Container as="section" className="py-24 md:py-40">
      <p className="label-editorial text-muted-foreground">La Nostra Via</p>

      <h1 className="text-hero mt-8 max-w-[14ch]">
        Viajar começa
        <br />
        antes de partir.
      </h1>

      <p className="text-body-lg mt-8 max-w-xl text-muted-foreground">
        Curadoria de destinos, histórias e experiências para descobrir cada lugar de
        forma autêntica — do Brasil ao mundo.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link
          to="/destinos"
          className="rounded-md bg-primary px-6 py-3 text-meta text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
        >
          Explorar
        </Link>
        <Link to="/caminhos" className="link-editorial text-meta">
          Conheça os 5 Caminhos →
        </Link>
      </div>

      <p className="label-editorial mt-24 border-t border-border pt-6 text-muted-foreground">
        Fundação — a Home completa será construída na Fase 2
      </p>
    </Container>
  );
}
