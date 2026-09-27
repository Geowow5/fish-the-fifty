export type ArizonaTroutSpecies = {
  slug: string;
  name: string;
  inWildChallenge: boolean;
  nativeToArizona: boolean;
};

export const arizonaTroutSpecies: ArizonaTroutSpecies[] = [
  { slug: "apache-trout", name: "Apache Trout", inWildChallenge: true, nativeToArizona: true },
  { slug: "arctic-grayling", name: "Arctic Grayling", inWildChallenge: false, nativeToArizona: false },
  { slug: "brook-trout", name: "Brook Trout", inWildChallenge: true, nativeToArizona: false },
  { slug: "brown-trout", name: "Brown Trout", inWildChallenge: true, nativeToArizona: false },
  { slug: "cutthroat-trout", name: "Cutthroat Trout", inWildChallenge: false, nativeToArizona: false },
  { slug: "gila-trout", name: "Gila Trout", inWildChallenge: true, nativeToArizona: true },
  { slug: "rainbow-trout", name: "Rainbow Trout", inWildChallenge: true, nativeToArizona: false },
  { slug: "tiger-trout", name: "Tiger Trout", inWildChallenge: false, nativeToArizona: false },
];

export const arizonaWildSpecies = arizonaTroutSpecies.filter((species) => species.inWildChallenge);
