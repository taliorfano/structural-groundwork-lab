import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/inspiracoes/")({
  head: () => ({
    meta: [
      { title: "Inspirações — La Nostra Via" },
      {
        name: "description",
        content:
          "Histórias, ideias e recomendações para inspirar sua próxima viagem, do Brasil ao mundo.",
      },
      { property: "og:title", content: "Inspirações — La Nostra Via" },
      {
        property: "og:description",
        content: "Histórias, ideias e recomendações para inspirar sua próxima viagem.",
      },
    ],
  }),
  component: InspiracoesPage,
});

function InspiracoesPage() {
  return (
    <PagePlaceholder
      eyebrow="Editorial"
      title="Inspirações"
      description="Leituras que ajudam a descobrir, planejar, viver e lembrar melhor cada viagem."
    />
  );
}
