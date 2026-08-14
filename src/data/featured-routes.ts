export type FeaturedItinerary = {
  title: string;
  location: string;
  segment: string;
  image: string;
  detailSlug?: string;
};

export type FeaturedRoute = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  itineraries: FeaturedItinerary[];
};

export const featuredRoutes: FeaturedRoute[] = [
  {
    slug: "engenhos",
    title: "Rota dos Engenhos e da Memória",
    eyebrow: "Açúcar, patrimônio e sociedade",
    description: "Roteiros que atravessam engenhos, centros históricos e cidades marcadas pelo ciclo do açúcar e por suas memórias.",
    itineraries: [
      {
        title: "Areia de Engenho e Memória",
        location: "Areia, PB",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/engenhos/areia.webp",
        detailSlug: "areia-engenho-memoria",
      },
      {
        title: "Entre Trilhos e Engenhos",
        location: "Bananeiras, PB",
        segment: "Fund. II",
        image: "/azimute/routes/engenhos/bananeiras.webp",
      },
      {
        title: "Rio, Açúcar e Memória",
        location: "Ceará-Mirim, RN",
        segment: "Fund. II",
        image: "/azimute/routes/engenhos/ceara-mirim.webp",
      },
      {
        title: "Roliude Nordestina",
        location: "Cabaceiras, PB",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/engenhos/cabaceiras.webp",
      },
    ],
  },
  {
    slug: "cavernas",
    title: "Rota das Cavernas",
    eyebrow: "Geologia, arqueologia e território potiguar",
    description: "De Baraúna a Mossoró, cavernas, sítios arqueológicos, serras e patrimônio cultural transformam o Oeste potiguar em campo de investigação.",
    itineraries: [
      {
        title: "Furna Feia e Saberes da Comunidade",
        location: "Baraúna, RN",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/cavernas/barrauna-furna-feia.webp",
      },
      {
        title: "O Sertão Já Foi Mar",
        location: "Lajedo de Soledade · Apodi, RN",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/cavernas/apodi-lajedo-soledade.webp",
      },
      {
        title: "Casa de Pedra e Serra de Martins",
        location: "Martins, RN",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/cavernas/martins-casa-de-pedra.webp",
        detailSlug: "no-topo-da-serra",
      },
      {
        title: "Cavernas de Felipe Guerra",
        location: "Felipe Guerra, RN",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/cavernas/felipe-guerra-caverna-catedral.webp",
      },
      {
        title: "Resistência e Cultura",
        location: "Mossoró, RN",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/cavernas/mossoro-caverna-2026.webp",
      },
    ],
  },
  {
    slug: "litoral",
    title: "Rota Sol, Mar e Falésias",
    eyebrow: "Ecossistemas, paisagem e conservação",
    description: "Roteiros costeiros para ler a biodiversidade, as transformações da paisagem e a relação entre sociedade e litoral.",
    itineraries: [
      {
        title: "Sentinelas do Mar",
        location: "Natal, RN",
        segment: "Infantil · Fund. I",
        image: "/azimute/routes/litoral/aquario-natal.webp",
        detailSlug: "sentinelas-do-mar",
      },
      {
        title: "Raízes da Mata",
        location: "Baía Formosa, RN",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/litoral/baia-formosa-lagoa-coca-cola.webp",
      },
      {
        title: "Gigantes do Litoral",
        location: "Pirangi + Barreira do Inferno, RN",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/litoral/barreira-do-inferno.webp",
      },
      {
        title: "Forte dos Reis Magos",
        location: "Natal, RN",
        segment: "Fund. II · Médio",
        image: "/azimute/routes/litoral/natal-forte-dos-reis-magos-2026.webp",
      },
    ],
  },
];
