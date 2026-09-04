import { createFileRoute } from "@tanstack/react-router";

import { SobreHero } from "@/components/sobre/SobreHero";
import { NameMeaning } from "@/components/sobre/NameMeaning";
import { TalitaStory } from "@/components/sobre/TalitaStory";
import { Curadoria } from "@/components/sobre/Curadoria";
import { DicaDaTalita } from "@/components/sobre/DicaDaTalita";
import { SobreClosing } from "@/components/sobre/SobreClosing";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — La Nostra Via" },
      {
        name: "description",
        content:
          "La Nostra Via significa “Nosso Caminho”. Conheça a Talita, a história por trás da marca e como nasce cada recomendação do site.",
      },
      { property: "og:title", content: "Sobre — La Nostra Via" },
      {
        property: "og:description",
        content:
          "Conheça a Talita e a história por trás da La Nostra Via — curadoria de viagens feita com pesquisa e experiência.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <SobreHero />
      <NameMeaning />
      <TalitaStory />
      <Curadoria />
      <DicaDaTalita />
      <SobreClosing />
    </>
  );
}
