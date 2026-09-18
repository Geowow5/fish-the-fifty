export const guidePath = "/states/oklahoma/lower-illinois-river";
export const checkedDate = "2026-09-18";
export const checkedLabel = "September 18, 2026";

export const sources = {
  area: { label: "ODWC river overview & stocking notice", url: "https://wildlifedepartment.com/fishing/wheretofish/northeast/lower-illinois-river-pfha" },
  troutAreas: { label: "ODWC trout areas, access & special rules", url: "https://www.wildlifedepartment.com/fishing/regs/trout-area-information" },
  troutRules: { label: "ODWC trout regulations", url: "https://www.wildlifedepartment.com/fishing/regs/trout-regulations" },
  areaRules: { label: "ODWC public fishing area rules", url: "https://www.wildlifedepartment.com/fishing/regs/department-fishing-areas" },
  troutInfo: { label: "ODWC trout information & stocking guidance", url: "https://www.wildlifedepartment.com/fishing/resources/trout-information" },
  troutTips: { label: "ODWC trout angler guide", url: "https://www.wildlifedepartment.com/outdoorok/ooj/trout-angler-guide-top-tips-area-highlights" },
  reports: { label: "ODWC fishing reports", url: "https://www.wildlifedepartment.com/fishing/fishingreport" },
  checkIn: { label: "ODWC nonresident check-in requirements", url: "https://wildlifedepartment.com/check-in" },
  license: { label: "Go Outdoors Oklahoma licenses", url: "https://gooutdoorsoklahoma.com/" },
  generation: { label: "Southwestern Power generation schedules", url: "https://www.energy.gov/swpa/generation-schedules" },
  releases: { label: "USACE Tenkiller lake & release readings", url: "https://www.swt-wc.usace.army.mil/TENK.lakepage.html" },
  gauge: { label: "USGS Illinois River near Gore gauge", url: "https://waterdata.usgs.gov/monitoring-location/USGS-07198000/" },
  recognition: { label: "ODWC Angler Recognition Program", url: "https://wildlifedepartment.com/fishing/angler-recognition" },
  wattsMap: { label: "ODWC Watts area map (PDF)", url: "https://wildlifedepartment.com/sites/default/files/wma-maps/Lower%20Illinois%20River%20Atlas_2018.pdf" },
} as const;

export const accessAreas = [
  {
    id: "watts",
    name: "Simp & Helen Watts area",
    type: "Walk-in bank access",
    description: "Public frontage along nearly a mile of river. From SH 100, take E0990 east to the entrance.",
    note: "Use designated parking; walk-in access only. No overnight camping.",
    mapQuery: "Lower Illinois River Public Fishing Area E0990 Road Gore Oklahoma",
  },
  {
    id: "dam-pool",
    name: "Pool below Tenkiller Dam",
    type: "Off-river fishing pool",
    description: "ODWC identifies an off-river pool immediately below the dam as a public fishing option.",
    note: "Check release information and posted access signs before approaching the water.",
    mapQuery: "Tenkiller Ferry Dam Gore Oklahoma",
  },
  {
    id: "river-road",
    name: "River Road access",
    type: "Public river access",
    description: "A public access area roughly six miles downstream of the dam.",
    note: "Confirm the public entrance and parking on site; nearby land may be private.",
    mapQuery: "River Road Public Access Lower Illinois River Gore Oklahoma",
  },
  {
    id: "gore-landing",
    name: "Gore Landing",
    type: "Boat ramp & camping",
    description: "Town-operated access with a boat launch and camping.",
    note: "Ask Gore Landing about current facilities and fees: (918) 489-2636.",
    mapQuery: "Gore Landing Public Access Gore Oklahoma",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
