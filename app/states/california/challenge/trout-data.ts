export const heritageTrout = [
  { name: "Coastal Cutthroat Trout", group: "Cutthroat" },
  { name: "Lahontan Cutthroat Trout", group: "Cutthroat" },
  { name: "Paiute Cutthroat Trout", group: "Cutthroat" },
  { name: "Coastal Rainbow Trout", group: "Rainbow" },
  { name: "Eagle Lake Rainbow Trout", group: "Rainbow" },
  { name: "McCloud River Redband Trout", group: "Rainbow" },
  { name: "Goose Lake Redband Trout", group: "Rainbow" },
  { name: "Warner Lakes Redband Trout", group: "Rainbow" },
  { name: "Kern River Rainbow Trout", group: "Rainbow" },
  { name: "California Golden Trout", group: "Rainbow" },
  { name: "Little Kern Golden Trout", group: "Rainbow" }
];

export const passportAwards = [
  { category: "Warmwater", levels: [[6, "Warmwater Angler"], [12, "Accomplished Warmwater Angler"], [25, "Master Warmwater Angler"]] },
  { category: "Coldwater", levels: [[3, "Coldwater Angler"], [5, "Accomplished Coldwater Angler"], [10, "Master Coldwater Angler"]] },
  { category: "Ocean", levels: [[10, "Ocean Angler"], [25, "Accomplished Ocean Angler"], [50, "Master Ocean Angler"]] },
  { category: "Shellfish", levels: [[3, "Shellfish Specialist"], [7, "Shellfish Expert"], [15, "Shellfish Master"]] }
] as const;
