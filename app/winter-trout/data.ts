export const checkedDate = "2026-09-24";
export const checkedLabel = "September 24, 2026";

export const sources = {
  troutInformation: {
    label: "ODWC Trout Information and stocking updates",
    url: "https://www.wildlifedepartment.com/fishing/resources/trout-information",
  },
  troutAreas: {
    label: "ODWC Trout Area Information",
    url: "https://www.wildlifedepartment.com/fishing/regs/trout-area-information",
  },
  troutRegulations: {
    label: "ODWC Trout Regulations",
    url: "https://www.wildlifedepartment.com/fishing/regs/trout-regulations",
  },
  fishingReports: {
    label: "ODWC weekly fishing reports",
    url: "https://www.wildlifedepartment.com/fishing/fishingreport",
  },
  closeToHome: {
    label: "ODWC Close to Home Fishing locations",
    url: "https://www.wildlifedepartment.com/fishing/regs/close-home-fishing",
  },
  lowerIllinois: {
    label: "ODWC Lower Illinois River update",
    url: "https://www.wildlifedepartment.com/fishing/wheretofish/northeast/lower-illinois-river-pfha",
  },
  route66: {
    label: "ODWC Route 66 Park trout details",
    url: "https://www.wildlifedepartment.com/fishing/wheretofish/central/route-66-park",
  },
  flyTips: {
    label: "ODWC trout fishing tips",
    url: "https://www.wildlifedepartment.com/outdoorok/ooj/how-catch-trout",
  },
  license: {
    label: "Oklahoma fishing licenses",
    url: "https://gooutdoorsoklahoma.com/",
  },
} as const;

export const seasonalLocations = [
  {
    id: "turtle-pond",
    name: "Lake Carl Blackwell Turtle Pond",
    area: "Stillwater area · closest featured stop",
    season: "November 1 – March 31",
    description: "A 2-acre pond about 8 miles west of Stillwater, north of the Lake Carl Blackwell park office. ODWC says trout stockings from Perry CCC have been diverted here.",
    access: "Bank fishing. Lake Carl Blackwell requires a daily or annual recreation permit; check OSU’s current permit and access details before you go.",
    mapQuery: "Lake Carl Blackwell Turtle Pond Oklahoma",
    siteHref: "/states/oklahoma/lake-carl-blackwell",
    source: sources.troutAreas.url,
  },
  {
    id: "blue-river",
    name: "Blue River",
    area: "Johnston County · near Tishomingo",
    season: "November 1 – March 31",
    description: "A 6.25-mile trout area through the Blue River Public Fishing and Hunting Area, about 4 miles east of Tishomingo on SH 78, then 6 miles north.",
    access: "Bank and wading access throughout the area. A special north-side section is catch-and-release with barbless hooks and artificial flies or lures through the end of February.",
    mapQuery: "Blue River Public Fishing and Hunting Area Oklahoma",
    siteHref: "/states/oklahoma/blue-river",
    source: sources.troutAreas.url,
  },
  {
    id: "robbers-cave",
    name: "Robbers Cave · Fourche Maline River",
    area: "Latimer County · Robbers Cave State Park",
    season: "November 1 – March 15",
    description: "A 1.5-mile stretch immediately below Carlton Lake Dam to the south boundary of Robbers Cave State Park, about 5 miles north of Wilburton on SH 2.",
    access: "ODWC says bank access is good because the full designated stream lies inside the state park.",
    mapQuery: "Robbers Cave State Park Fourche Maline trout area Oklahoma",
    siteHref: "https://www.travelok.com/state-parks/robbers-cave-state-park",
    source: sources.troutAreas.url,
  },
  {
    id: "sunset-lake",
    name: "Sunset Lake",
    area: "Guymon · Thompson Park",
    season: "November 1 – March 31",
    description: "An 11-acre lake at NW 5th Street and Sunset in Guymon, with a walking trail around the lake and a fishing dock.",
    access: "Bank access only; boats are not allowed.",
    mapQuery: "Sunset Lake Thompson Park Guymon Oklahoma",
    siteHref: "https://www.google.com/maps/search/?api=1&query=Sunset+Lake+Thompson+Park+Guymon+Oklahoma",
    source: sources.troutAreas.url,
  },
  {
    id: "medicine-creek",
    name: "Medicine Creek",
    area: "Medicine Park · Wichita Mountains area",
    season: "November 1 – March 15",
    description: "The stocked stretch runs from Gondola Lake Dam downstream to the SH 49 bridge.",
    access: "ODWC recommends the east-side sidewalk through town and public access north of the SH 49 bridge. Avoid nearby residential property.",
    mapQuery: "Medicine Creek trout area Medicine Park Oklahoma",
    siteHref: "https://www.google.com/maps/search/?api=1&query=Medicine+Creek+trout+area+Medicine+Park+Oklahoma",
    source: sources.troutAreas.url,
  },
  {
    id: "okc-ponds",
    name: "Edwards Park & Route 66 Park ponds",
    area: "Oklahoma City · two urban trout ponds",
    season: "December 1 – February 28",
    description: "The city’s seasonal trout ponds are at Edwards Park, 1515 N Bryant Ave, and Route 66 Park, 9901 NW 23rd St. ODWC says they are stocked roughly every other week, weather and equipment permitting.",
    access: "Bank fishing only. The special season allows one rod and up to three trout per person per day; check current Oklahoma City permit requirements and rules.",
    mapQuery: "Edwards Park and Route 66 Park trout ponds Oklahoma City",
    siteHref: sources.route66.url,
    source: sources.route66.url,
  },
  {
    id: "jenks-veterans-pond",
    name: "Veterans Pond",
    area: "Jenks · E 101st Street and S Elm Street",
    season: "December 1 – February 28",
    description: "A seasonal trout pond in Jenks. ODWC lists this as the city’s Veterans Pond, at East 101st Street South and South Elm Street.",
    access: "Bank fishing only; one pole and up to three trout per person per day, with no culling. Check with Jenks for any local permit requirements.",
    mapQuery: "Veterans Pond trout fishing Jenks Oklahoma",
    siteHref: "https://www.google.com/maps/search/?api=1&query=Veterans+Pond+trout+fishing+Jenks+Oklahoma",
    source: sources.troutRegulations.url,
  },
] as const;

export const yearRoundLocations = [
  {
    id: "lower-mountain-fork",
    name: "Lower Mountain Fork River",
    area: "Beavers Bend State Park · year-round trout fishery",
    status: "Stocking listed year-round; check the latest report and water conditions.",
    mapQuery: "Lower Mountain Fork River trout fishing Oklahoma",
    siteHref: "/states/oklahoma/lower-mountain-fork",
  },
  {
    id: "lower-illinois",
    name: "Lower Illinois River",
    area: "Below Tenkiller Dam · near Gore",
    status: "The fishery is normally stocked year-round, but ODWC currently reports a temporary stocking suspension. Check the current report before planning around a fresh stocking.",
    mapQuery: "Lower Illinois River trout access Gore Oklahoma",
    siteHref: "/states/oklahoma/lower-illinois-river",
  },
] as const;

export const pausedLocations = [
  {
    name: "Lake Watonga",
    status: "ODWC says trout stocking is suspended indefinitely due to current management decisions.",
  },
  {
    name: "Lake Boecher at Roman Nose State Park",
    status: "ODWC says stocking is temporarily paused pending the dam-repair strategy.",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
