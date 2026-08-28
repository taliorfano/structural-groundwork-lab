import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/home/Hero";
import { ValuesStrip } from "@/components/home/ValuesStrip";
import { FivePaths } from "@/components/home/FivePaths";
import { Destinations } from "@/components/home/Destinations";
import { Inspirations } from "@/components/home/Inspirations";
import { PlannerSection } from "@/components/home/PlannerSection";
import { BrandStory } from "@/components/home/BrandStory";
import { Newsletter } from "@/components/home/Newsletter";

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
    <>
      <Hero />
      <ValuesStrip />
      <FivePaths />
      <Destinations />
      <Inspirations />
      <PlannerSection />
      <BrandStory />
      <Newsletter />
    </>
  );
}
