// Wyoming Game and Fish Master Angler minimum qualifying total lengths, inches; reviewed September 2026.
export const masterSpecies = [
  ["Brook Trout",16],["Brown Trout",23],["Burbot",28],["Channel Catfish",28],["Crappie",12],["Cutthroat Trout",18],
  ["Freshwater Drum",22],["Golden Trout",16],["Grayling",16],["Kokanee",20],["Lake Trout",36],["Largemouth Bass",16],
  ["Mountain Whitefish",16],["Northern Pike",34],["Rainbow Trout",20],["Sauger",23],["Shovelnose Sturgeon",32],["Smallmouth Bass",16],
  ["Splake",20],["Sunfish",8],["Tiger Muskie",38],["Tiger Trout",23],["Walleye",23],["Yellow Perch",12],
] as const;
export const cutthroats = [
  { name: "Bonneville", range: "Bear River drainage · Smith Fork, Thomas Fork, Salt Creek, upper Bear River" },
  { name: "Colorado River", range: "Upper Green River and tributaries · Little Snake and nearby native drainages" },
  { name: "Snake River", range: "Snake River drainage · Hoback, Salt, Greys, Gros Ventre" },
  { name: "Yellowstone", range: "Yellowstone and Bighorn headwaters · Shoshone, Greybull, Wind River" },
] as const;
