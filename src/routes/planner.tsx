import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "Planner La Nostra Via — Do sonho ao caminho" },
      {
        name: "description",
        content:
          "O Planner La Nostra Via reúne todos os detalhes da sua viagem em um só lugar, para viajar com a confiança de que nada importante foi esquecido.",
      },
      { property: "og:title", content: "Planner La Nostra Via — Do sonho ao caminho" },
      {
        property: "og:description",
        content: "Organize todos os detalhes da sua viagem em um único lugar.",
      },
    ],
  }),
  component: PlannerPage,
});

function PlannerPage() {
  return (
    <PagePlaceholder
      eyebrow="Planner"
      title="Do sonho ao caminho"
      description="Transforme suas ideias em uma viagem que faz sentido para você."
    />
  );
}
