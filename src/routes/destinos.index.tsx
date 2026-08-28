import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/destinos/")({
  head: () => ({
    meta: [
      { title: "Destinos — La Nostra Via" },
      {
        name: "description",
        content:
          "Destinos curados no Brasil, na Itália, em Portugal e na Espanha, com histórias, sabores e caminhos para descobrir.",
      },
      { property: "og:title", content: "Destinos — La Nostra Via" },
      {
        property: "og:description",
        content: "Destinos curados no Brasil, na Itália, em Portugal e na Espanha.",
      },
    ],
  }),
  component: DestinosPage,
});

function DestinosPage() {
  return (
    <PagePlaceholder
      eyebrow="Descobrir"
      title="Destinos"
      description="Brasil, Itália, Portugal e Espanha — países, regiões e destinos para explorar com calma."
    />
  );
}
