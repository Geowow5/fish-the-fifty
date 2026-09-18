export const guidePath = "/states/oklahoma/blue-river";
export const checkedDate = "2026-09-18";
export const checkedLabel = "September 18, 2026";

export const sources = {
  area: { label: "ODWC Blue River PFHA listing", url: "https://www.wildlifedepartment.com/fishing/wheretofish/southeast/blue-river-pfha" },
  map: { label: "ODWC Blue River PFHA map (PDF)", url: "https://www.wildlifedepartment.com/sites/default/files/wma-maps/Blue%20River%20PFA%20%26%20PHA%20Atlas_2018%20QC.pdf" },
  troutRules: { label: "ODWC trout regulations", url: "https://www.wildlifedepartment.com/fishing/regs/trout-regulations" },
  areaRules: { label: "ODWC department fishing-area rules", url: "https://www.wildlifedepartment.com/fishing/regs/department-fishing-areas" },
  checkIn: { label: "ODWC public check-in", url: "https://wildlifedepartment.com/check-in" },
  license: { label: "Go Outdoors Oklahoma licenses", url: "https://gooutdoorsoklahoma.com/" },
  reports: { label: "ODWC fishing reports", url: "https://www.wildlifedepartment.com/fishing/fishingreport" },
  trail: { label: "TravelOK south-central fishing trail", url: "https://www.travelok.com/article_page/oklahoma-fishing-trail-south-central-loop" },
  usgs: { label: "USGS Blue River near Connerville", url: "https://waterdata.usgs.gov/monitoring-location/USGS-07332390/" },
} as const;

export const accessAreas = [
  {
    id: "south-entrance",
    name: "South entrance from Tishomingo",
    type: "Primary approach",
    description: "From Tishomingo, ODWC directs anglers east on State Highway 78, then north on Bullard Chapel Road to the south entrance.",
    note: "Confirm road conditions, parking, and the marked public entrance before turning onto smaller roads.",
    mapQuery: "Blue River Public Fishing Hunting Area south entrance Oklahoma",
  },
  {
    id: "north-entrance",
    name: "North entrance from US 377",
    type: "Alternate approach",
    description: "ODWC’s north-entrance route uses US 377 north of Tishomingo, then State Highway 7 east to the area.",
    note: "Use the official map and posted signs to confirm where vehicle access ends and stream access begins.",
    mapQuery: "Blue River PFHA north entrance Oklahoma",
  },
  {
    id: "wadable-stream",
    name: "Blue River wadable stream access",
    type: "Walk-and-wade water",
    description: "The public area includes 6.25 miles of wadable stream access through 3,367 acres of post oak and blackjack timber.",
    note: "Stay within public boundaries, respect closed areas, and treat changing depth and footing as part of the plan.",
    mapQuery: "Blue River Public Fishing Hunting Area Tishomingo Oklahoma",
  },
  {
    id: "primitive-camping",
    name: "Designated primitive camping",
    type: "Camp near the water",
    description: "ODWC manages primitive campgrounds and latrines, with camping allowed only in designated areas.",
    note: "Blue River camping is limited to 14 days in a 30-consecutive-day period; check the area rules before staying overnight.",
    mapQuery: "Blue River PFHA campground Oklahoma",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
