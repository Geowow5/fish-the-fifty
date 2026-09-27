export type GeorgiaBassSpecies = {
  slug: string;
  name: string;
  range: string;
  note?: string;
};

export const georgiaBassSpecies: GeorgiaBassSpecies[] = [
  { slug: "largemouth", name: "Largemouth Bass", range: "Common throughout Georgia.", note: "Florida largemouth bass count as largemouth for the Slam." },
  { slug: "spotted", name: "Spotted Bass", range: "Use the DNR map and identification guide to check locations and confirm similar-looking fish.", note: "Alabama and Kentucky bass are grouped with spotted bass." },
  { slug: "smallmouth", name: "Smallmouth Bass", range: "Tennessee and lower Savannah River basins." },
  { slug: "shoal", name: "Shoal Bass", range: "Native to the Chattahoochee and Flint basins; also introduced in the Ocmulgee and Oconee Rivers." },
  { slug: "suwannee", name: "Suwannee Bass", range: "Alapaha, Ochlockonee, and Withlacoochee Rivers." },
  { slug: "redeye", name: "Redeye Bass", range: "Tennessee and Coosa River basins." },
  { slug: "chattahoochee", name: "Chattahoochee Bass", range: "Chattahoochee River basin." },
  { slug: "tallapoosa", name: "Tallapoosa Bass", range: "Tallapoosa River basin." },
  { slug: "altamaha", name: "Altamaha Bass", range: "Ocmulgee, Oconee, and Ogeechee basins above the fall line." },
  { slug: "bartrams", name: "Bartram’s Bass", range: "Savannah River basin above the fall line." },
];
