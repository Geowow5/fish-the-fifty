export const guidePath = "/states/oklahoma/sooner-lake";
export const checkedDate = "2026-09-18";
export const checkedLabel = "September 18, 2026";

export const sources = {
  area: { label: "ODWC Sooner Lake listing", url: "https://www.wildlifedepartment.com/fishing/wheretofish/northeast/sooner-lake" },
  checkIn: { label: "ODWC public check-in", url: "https://wildlifedepartment.com/check-in" },
  lakeMap: { label: "Oklahoma Water Resources Board lake map (PDF)", url: "https://oklahoma.gov/content/dam/ok/en/owrb/documents/maps-and-data/printable-maps/lakes-of-oklahoma-maps/Sooner.pdf" },
  fishingTrail: { label: "TravelOK fishing trail", url: "https://www.travelok.com/article_page/oklahoma-fishing-trail-northwestern-loop" },
  license: { label: "Go Outdoors Oklahoma licenses", url: "https://gooutdoorsoklahoma.com/" },
  recognition: { label: "ODWC Angler Recognition Program", url: "https://wildlifedepartment.com/fishing/angler-recognition" },
  operator: { label: "OG&E", url: "https://www.oge.com/" },
} as const;

export const accessAreas = [
  {
    id: "west-ramp",
    name: "West Boat Ramp",
    type: "ADA-compliant ramp",
    description: "ODWC lists the west ramp as ADA compliant. It is one of two boat ramps managed by OG&E.",
    note: "Confirm current ramp access, launch conditions, and posted restrictions before launching.",
    mapQuery: "Sooner Lake West Boat Ramp Oklahoma",
  },
  {
    id: "east-ramp",
    name: "East Boat Ramp",
    type: "Public boat ramp",
    description: "The east ramp is the second OG&E-managed boat ramp and a useful starting point for exploring the reservoir.",
    note: "ODWC says lake maps are available at the east ramp or online.",
    mapQuery: "Sooner Lake East Boat Ramp Oklahoma",
  },
  {
    id: "bank-zones",
    name: "Marked bank-fishing zones",
    type: "Bank fishing only",
    description: "Fishing in the buoy-marked intake channel, discharge channel, and spillway embankment is bank fishing only.",
    note: "No float tubes or wading in these zones. Fishing is prohibited from the dam, fenced area below the dam, and north bank of the intake channel.",
    mapQuery: "Sooner Lake Oklahoma",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
