export const guidePath = "/states/oklahoma/lake-carl-blackwell";
export const checkedDate = "2026-09-18";
export const checkedLabel = "September 18, 2026";

export const sources = {
  operator: { label: "OSU Lake Carl Blackwell", url: "https://lake.okstate.edu/" },
  permits: { label: "OSU permits and prices", url: "https://lake.okstate.edu/permits" },
  regulations: { label: "OSU Lake Carl Blackwell regulations", url: "https://lake.okstate.edu/regulations" },
  maps: { label: "OSU Lake Carl Blackwell maps", url: "https://lake.okstate.edu/maps" },
  generalMap: { label: "OSU general lake map (PDF)", url: "https://lake.okstate.edu/site-files/documents/lcbmap-new.pdf" },
  noWakeMap: { label: "OSU no-wake-zone map", url: "https://lake.okstate.edu/site-files/documents/lcb-no-wake-zone-map.jpg" },
  faq: { label: "OSU Lake Carl Blackwell FAQ", url: "https://lake.okstate.edu/faq" },
  stateLicense: { label: "Oklahoma state fishing license", url: "https://gooutdoorsoklahoma.com/" },
  odwcRegs: { label: "ODWC fishing regulations", url: "https://www.wildlifedepartment.com/fishing/regs" },
  odwcReports: { label: "ODWC fishing reports", url: "https://www.wildlifedepartment.com/fishing/fishingreport" },
} as const;

export const accessAreas = [
  {
    id: "ski-point",
    name: "Ski Point north ramps",
    type: "Boat-ramp access",
    description: "OSU identifies the two most popular boat ramps at Ski Point on the north end of the lake, making this the straightforward launch for a boat-based scouting day.",
    note: "Carry the current vehicle and boat permits, check the wind, and use the official map to confirm the ramp and no-wake layout before launching.",
    mapQuery: "Ski Point Lake Carl Blackwell Oklahoma",
  },
  {
    id: "blackjack-cove",
    name: "Blackjack Cove ramp",
    type: "Boat-ramp access",
    description: "The lake FAQ lists an additional ramp at Blackjack Cove, a useful alternate when the north-end launch is busy or the wind favors the cove side.",
    note: "Ramp availability and conditions can change; follow posted signs and current OSU instructions at the entrance or lake office.",
    mapQuery: "Blackjack Cove Lake Carl Blackwell Oklahoma",
  },
  {
    id: "public-shoreline",
    name: "Public recreational shoreline",
    type: "Bank-fishing access",
    description: "OSU regulations say shoreline in public recreational areas remains open for public access. Use the general map to find legal pull-offs, coves, and walkable water away from launch traffic.",
    note: "A campsite or daily-use permit does not create exclusive shoreline rights. Park only in designated areas and respect posted closures.",
    mapQuery: "Lake Carl Blackwell public shoreline Stillwater Oklahoma",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
