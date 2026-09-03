import { createFileRoute } from "@tanstack/react-router";

import { CaminhosHero } from "@/components/caminhos/CaminhosHero";
import { PathsIndex } from "@/components/caminhos/PathsIndex";
import { NotJustDestination } from "@/components/caminhos/NotJustDestination";
import { PathsSequence } from "@/components/caminhos/PathsSequence";
import { PathsConnected } from "@/components/caminhos/PathsConnected";
import { PathsWithYou } from "@/components/caminhos/PathsWithYou";
import { DiscoverDestinations } from "@/components/caminhos/DiscoverDestinations";
import { CaminhosClosing } from "@/components/caminhos/CaminhosClosing";

export const Route = createFileRoute("/caminhos/")({
  head: () => ({
    meta: [
      { title: "5 Caminhos — La Nostra Via" },
      {
        name: "description",
        content:
          "História, Sabores, Vivências, Conforto e Memórias: cinco formas de descobrir um mesmo destino, a assinatura de curadoria da La Nostra Via.",
      },
      { property: "og:title", content: "5 Caminhos — La Nostra Via" },
      {
        property: "og:description",
        content:
          "Cinco caminhos. Uma viagem só sua. Conheça a metodologia de curadoria da La Nostra Via.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaminhosPage,
});

function CaminhosPage() {
  return (
    <>
      <CaminhosHero />
      <NotJustDestination />
      <PathsSequence />
      <PathsConnected />
      <PathsWithYou />
      <DiscoverDestinations />
      <CaminhosClosing />
    </>
  );
}
