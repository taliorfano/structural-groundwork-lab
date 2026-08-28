import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/caminhos/")({
  head: () => ({
    meta: [
      { title: "5 Caminhos — La Nostra Via" },
      {
        name: "description",
        content:
          "História, Sabores, Vivências, Conforto e Memórias: o método de curadoria da La Nostra Via para descobrir um destino.",
      },
      { property: "og:title", content: "5 Caminhos — La Nostra Via" },
      {
        property: "og:description",
        content:
          "História, Sabores, Vivências, Conforto e Memórias: o método de curadoria da La Nostra Via.",
      },
    ],
  }),
  component: CaminhosPage,
});

function CaminhosPage() {
  return (
    <PagePlaceholder
      eyebrow="Método"
      title="5 Caminhos"
      description="História, Sabores, Vivências, Conforto e Memórias — os cinco caminhos que guiam nossa curadoria."
    />
  );
}
