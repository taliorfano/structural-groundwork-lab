import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/guias/")({
  head: () => ({
    meta: [
      { title: "Guias — La Nostra Via" },
      {
        name: "description",
        content:
          "Cadernos de Viagem e guias práticos da La Nostra Via para acompanhar você antes e durante a viagem.",
      },
      { property: "og:title", content: "Guias — La Nostra Via" },
      {
        property: "og:description",
        content: "Cadernos de Viagem e guias práticos da La Nostra Via.",
      },
    ],
  }),
  component: GuiasPage,
});

function GuiasPage() {
  return (
    <PagePlaceholder
      eyebrow="Companheiros de viagem"
      title="Guias"
      description="Cadernos de Viagem e materiais de apoio para caminhar por um destino com tranquilidade."
    />
  );
}
