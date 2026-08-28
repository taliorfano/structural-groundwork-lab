import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — La Nostra Via" },
      {
        name: "description",
        content:
          "La Nostra Via significa “Nosso Caminho”. Conheça a filosofia por trás da nossa curadoria de viagens.",
      },
      { property: "og:title", content: "Sobre — La Nostra Via" },
      {
        property: "og:description",
        content: "La Nostra Via significa “Nosso Caminho”. Conheça a filosofia da marca.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <PagePlaceholder
      eyebrow="A marca"
      title="Nosso caminho"
      description="A história, a filosofia e a forma de olhar para as viagens que dão origem à La Nostra Via."
    />
  );
}
