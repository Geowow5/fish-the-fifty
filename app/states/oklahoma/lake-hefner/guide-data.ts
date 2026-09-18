export const guidePath = "/states/oklahoma/lake-hefner";
export const checkedDate = "2026-09-18";
export const checkedLabel = "September 18, 2026";

export const sources = {
  area: { label: "ODWC Hefner listing", url: "https://www.wildlifedepartment.com/fishing/wheretofish/central/hefner" },
  okcParks: { label: "City of Oklahoma City Parks", url: "https://www.okc.gov/Community-Recreation/OKC-Parks" },
  okcRules: { label: "OKC fishing regulations", url: "https://www.okc.gov/departments/parks-recreation/lakes-and-fishing/fishing-regulations" },
  okcLicense: { label: "Oklahoma City fishing license information", url: "https://www.okc.gov/departments/parks-recreation/lakes-and-fishing/fishing-regulations" },
  stateLicense: { label: "Oklahoma state fishing license", url: "https://gooutdoorsoklahoma.com/" },
  checkIn: { label: "ODWC public check-in", url: "https://wildlifedepartment.com/check-in" },
  lakeMap: { label: "Oklahoma Water Resources Board Hefner map (PDF)", url: "https://oklahoma.gov/content/dam/ok/en/owrb/documents/maps-and-data/printable-maps/lakes-of-oklahoma-maps/Hefner.pdf" },
  fishingTrail: { label: "TravelOK central fishing trail", url: "https://www.travelok.com/article_page/oklahoma-fishing-trail-central-loop" },
  usgs: { label: "USGS Lake Hefner water data", url: "https://waterdata.usgs.gov/monitoring-location/USGS-07159550/" },
  parksMap: { label: "OKC parks and trails map", url: "https://data.okc.gov/maps/3d0b8cc6ccd04df7977107220ec7dbbb" },
} as const;

export const accessAreas = [
  {
    id: "eastern-shoreline",
    name: "Eastern shoreline",
    type: "Drive-up bank access",
    description: "ODWC identifies the eastern shoreline as gentle, drive-up access that works well for a short bank-fishing session or a scouting stop.",
    note: "Park legally, stay clear of private or posted areas, and use the city parks map to plan a safe shoreline route.",
    mapQuery: "Lake Hefner eastern shoreline Oklahoma City",
  },
  {
    id: "boat-launch",
    name: "Boat launch and fishing dock",
    type: "Boat & dock access",
    description: "The lake’s boat launch and dock provide additional fishing access beyond the shoreline, with marina and boat-storage facilities nearby.",
    note: "Confirm current city launch rules, permits, wind conditions, and traffic before putting a boat on the water.",
    mapQuery: "Lake Hefner boat launch Oklahoma City",
  },
  {
    id: "lighted-pier",
    name: "Lighted fishing pier",
    type: "Public fishing pier",
    description: "ODWC lists one lighted fishing pier, useful for early, late, or short visits when you want structure and easy footing.",
    note: "Share the pier, keep casts controlled, and follow posted lighting and safety rules.",
    mapQuery: "Lake Hefner lighted fishing pier Oklahoma City",
  },
  {
    id: "heated-dock",
    name: "Enclosed heated fishing dock",
    type: "All-weather access",
    description: "In addition to the outdoor docks, ODWC identifies an enclosed heated dock for a more sheltered fishing option.",
    note: "Check current access and operating information with OKC Lakes before planning around the enclosed dock.",
    mapQuery: "Lake Hefner enclosed heated fishing dock",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
