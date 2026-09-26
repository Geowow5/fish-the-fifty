export type OhioSpecies = {
  name: string;
  allWaters?: number;
  lakeErie?: number;
  inland?: number;
};

export const ohioSpecies: OhioSpecies[] = [
  { name: "Blue Catfish", allWaters: 35 },
  { name: "Bowfin", allWaters: 23 },
  { name: "Brown Trout", allWaters: 20 },
  { name: "Bullhead", allWaters: 14 },
  { name: "Carp", allWaters: 28 },
  { name: "Channel Catfish", allWaters: 26 },
  { name: "Crappie", allWaters: 13 },
  { name: "Flathead Catfish", allWaters: 35 },
  { name: "Freshwater Drum", lakeErie: 24, inland: 20 },
  { name: "Hybrid-Striped Bass", allWaters: 21 },
  { name: "Lake Trout", lakeErie: 31 },
  { name: "Largemouth Bass", allWaters: 20 },
  { name: "Longnose Gar", allWaters: 34 },
  { name: "Muskellunge", allWaters: 40 },
  { name: "Northern Pike", allWaters: 32 },
  { name: "Rock Bass", allWaters: 9 },
  { name: "Sauger", allWaters: 16 },
  { name: "Saugeye", allWaters: 21 },
  { name: "Smallmouth Bass", lakeErie: 19, inland: 18 },
  { name: "Spotted Bass", allWaters: 15 },
  { name: "Steelhead Trout", lakeErie: 28 },
  { name: "Sucker", allWaters: 20 },
  { name: "Sunfish", allWaters: 9 },
  { name: "Walleye", lakeErie: 28, inland: 25 },
  { name: "White Bass", lakeErie: 15, inland: 14 },
  { name: "Yellow Perch", lakeErie: 13, inland: 12 }
];

export function qualifyingLength(species: OhioSpecies | undefined, waterType: "lake-erie" | "inland") {
  if (!species) return undefined;
  return species.allWaters ?? (waterType === "lake-erie" ? species.lakeErie : species.inland);
}
