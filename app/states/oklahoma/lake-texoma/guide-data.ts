export const guidePath = "/states/oklahoma/lake-texoma";
export const checkedDate = "2026-09-18";
export const checkedLabel = "September 18, 2026";

export const sources = {
  area: { label: "ODWC Texoma listing", url: "https://www.wildlifedepartment.com/fishing/wheretofish/southeast/texoma" },
  checkIn: { label: "ODWC public check-in", url: "https://wildlifedepartment.com/check-in" },
  regulations: { label: "ODWC fishing regulations", url: "https://www.wildlifedepartment.com/fishing/regs" },
  license: { label: "Go Outdoors Oklahoma licenses", url: "https://gooutdoorsoklahoma.com/" },
  texasRules: { label: "Texas Outdoor Annual", url: "https://tpwd.texas.gov/regulations/outdoor-annual/" },
  lakeMap: { label: "Oklahoma Water Resources Board lake map (PDF)", url: "https://oklahoma.gov/content/dam/ok/en/owrb/documents/maps-and-data/printable-maps/lakes-of-oklahoma-maps/Texoma.pdf" },
  fishingTrail: { label: "TravelOK south-central fishing trail", url: "https://www.travelok.com/article_page/oklahoma-fishing-trail-south-central-loop" },
  park: { label: "Lake Texoma State Park", url: "https://www.travelok.com/state-parks/lake-texoma-state-park" },
  recreation: { label: "USACE Tulsa District recreation", url: "https://www.swt.usace.army.mil/Missions/Recreation/" },
  operator: { label: "USACE Lake Texoma conditions", url: "https://www.swt-wc.usace.army.mil/DENI.lakepage.html" },
  mesonet: { label: "Oklahoma Mesonet", url: "https://www.mesonet.org/" },
  nws: { label: "Ark-Red Basin River Forecast Center", url: "https://www.weather.gov/abrfc/" },
} as const;

export const accessAreas = [
  {
    id: "state-park",
    name: "Lake Texoma State Park",
    type: "Oklahoma state park",
    description: "The park offers lake access, boat ramps, fishing, camping, and Catfish Bay Marina on the Oklahoma shore.",
    note: "Confirm park hours, launch status, fees, and reservations before driving down.",
    mapQuery: "Lake Texoma State Park Kingston Oklahoma",
  },
  {
    id: "usace",
    name: "Texoma USACE recreation areas",
    type: "Corps-managed access",
    description: "ODWC points anglers to U.S. Army Corps of Engineers recreation areas with campgrounds, boat ramps, and fishing docks.",
    note: "Ramp and park status can change with flooding, construction, or local safety conditions.",
    mapQuery: "Texoma USACE Lake Texoma Oklahoma",
  },
  {
    id: "kingston",
    name: "Kingston / US 70 launch corridor",
    type: "Central Oklahoma shore",
    description: "ODWC places Texoma about five miles east of Kingston on US 70, making Kingston a practical starting point for maps, tackle, and route planning.",
    note: "Use the agency map and posted signs to confirm which ramp or shoreline parcel is public before launching or walking in.",
    mapQuery: "Lake Texoma boat ramp Kingston Oklahoma",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
