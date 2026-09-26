type SpeciesLength = readonly [string, number];
type QualifyingGroup = { readonly group: string; readonly species: readonly SpeciesLength[] };

export const qualifyingGroups: readonly QualifyingGroup[] = [
  { group: "Trout", species: [["Arctic Char",18],["Brook Trout",16],["Brown Trout",22],["Cutbow",22],["Golden Trout",16],["Grayling",15],["Lake Trout",32],["Native Cutthroat",20],["Snake River Cutthroat",20],["Splake",20],["Rainbow Trout",24],["Tiger Trout",18]] },
  { group: "Salmon & Whitefish", species: [["Kokanee (angling only)",20],["Mountain Whitefish",15]] },
  { group: "Catfish", species: [["Blue Catfish",30],["Black Bullhead",14],["Brown Bullhead",14],["Channel Catfish",30],["Flathead Catfish",30]] },
  { group: "Pike", species: [["Northern Pike",36],["Tiger Muskie",40]] },
  { group: "Perch & Walleye", species: [["Sacramento Perch",12],["Sauger",16],["Saugeye",26],["Yellow Perch",12],["Walleye",26]] },
  { group: "Bass", species: [["Hybrid Striped Bass (Wiper)",25],["Largemouth Bass",18],["Smallmouth Bass",17],["Spotted Bass",18],["Striped Bass",28],["White Bass",17]] },
  { group: "Carp & Suckers", species: [["Common Carp",30],["Grass Carp",30],["Longnose Sucker",18],["White Sucker",22],["Tench",18]] },
  { group: "Drum", species: [["Freshwater Drum",20]] },
  { group: "Sunfish", species: [["Bluegill",10],["Green Sunfish",10],["Hybrid Sunfish",10],["Redear Sunfish",12]] },
  { group: "Crappie", species: [["Black Crappie",14],["White Crappie",14]] },
];

export const qualifyingSpecies = qualifyingGroups.flatMap((group) => group.species);
