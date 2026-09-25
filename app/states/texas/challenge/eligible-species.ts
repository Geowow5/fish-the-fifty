export type QualifyingFish = readonly [species: string, inches: number];

export const freshwaterSpecies: readonly QualifyingFish[] = [
  ["Guadalupe bass", 14], ["Hybrid striped bass", 25], ["Largemouth bass", 21], ["Smallmouth bass", 18],
  ["Spotted bass", 16], ["Striped bass", 35], ["White bass", 15], ["Bluegill", 10], ["Bowfin", 28],
  ["Bigmouth buffalo", 30], ["Black buffalo", 30], ["Smallmouth buffalo", 32], ["Common carp", 30],
  ["Blue catfish", 36], ["Channel catfish", 30], ["Flathead catfish", 45], ["Rio Grande cichlid", 9],
  ["Black crappie", 15], ["White crappie", 15], ["Freshwater drum", 25], ["Alligator gar", 72],
  ["Longnose gar", 50], ["Spotted gar", 42], ["Sunfish", 10], ["Rainbow trout", 15], ["Walleye", 25],
];

export const saltwaterSpecies: readonly QualifyingFish[] = [
  ["Greater amberjack", 42], ["Gafftopsail catfish", 20], ["Atlantic croaker", 15], ["Cobia (ling)", 40],
  ["Dolphin (mahi mahi)", 30], ["Black drum", 20], ["Red drum", 25], ["Flounder", 17],
  ["Crevalle jack", 36], ["Ladyfish", 21], ["King mackerel", 40], ["Spanish mackerel", 26],
  ["Blue marlin", 137], ["Sailfish", 84], ["Sand seatrout", 14], ["Spotted seatrout", 20],
  ["Sheepshead", 18], ["Red snapper", 18], ["Snook", 26], ["Atlantic spadefish", 17],
  ["Tarpon", 80], ["Little tunny", 22],
];
