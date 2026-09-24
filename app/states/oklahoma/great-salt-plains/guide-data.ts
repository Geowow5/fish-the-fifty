export const guidePath = "/states/oklahoma/great-salt-plains";
export const checkedDate = "2026-09-24";
export const checkedLabel = "September 24, 2026";

export const sources = {
  odwcLake: {
    label: "ODWC Great Salt Plains fishing information",
    url: "https://www.wildlifedepartment.com/fishing/wheretofish/northwest/great-salt-plains",
  },
  refugeFishing: {
    label: "Salt Plains National Wildlife Refuge fishing rules",
    url: "https://www.fws.gov/refuge/salt-plains/visit-us/activities/fishing",
  },
  refugeBrochure: {
    label: "FWS fishing and boating brochure",
    url: "https://www.fws.gov/sites/default/files/documents/2024-03/salt-plains-fishing-8.5x11-03272024_web-508.pdf",
  },
  usaceLake: {
    label: "U.S. Army Corps of Engineers lake information",
    url: "https://www.swt.usace.army.mil/Locations/Tulsa-District-Lakes/Oklahoma/Great-Salt-Plains-Lake/",
  },
  lakeMap: {
    label: "Oklahoma Water Resources Board lake map (PDF)",
    url: "https://oklahoma.gov/content/dam/ok/en/owrb/documents/maps-and-data/printable-maps/lakes-of-oklahoma-maps/GS_Plains.pdf",
  },
  stateLicense: { label: "Oklahoma fishing licenses", url: "https://gooutdoorsoklahoma.com/" },
  odwcRegs: { label: "ODWC fishing regulations", url: "https://www.wildlifedepartment.com/fishing/regs" },
  odwcReports: { label: "ODWC fishing reports", url: "https://www.wildlifedepartment.com/fishing/fishingreport" },
} as const;

export const accessAreas = [
  {
    id: "coon-hollow",
    name: "Coon Hollow approach channel",
    type: "Dock, ramp & bank access",
    description: "ODWC identifies an easy-access fishing dock and ramp at the Coon Hollow approach channel, a practical first stop for a short bank session.",
    note: "Check the lake map and posted signs before fishing. Confirm current access conditions with the lake office if you are making a long drive.",
    mapQuery: "Coon Hollow Great Salt Plains Lake Oklahoma",
  },
  {
    id: "north-spillway",
    name: "North side below the spillway",
    type: "Paved bank area & fishing jetty",
    description: "ODWC lists a large paved area and fishing jetty below the spillway on the north side, with wheelchair-accessible restrooms nearby.",
    note: "Stay within public access areas and follow all signs around the dam and spillway. Do not enter closed or restricted structures.",
    mapQuery: "Great Salt Plains Lake north spillway fishing jetty Oklahoma",
  },
  {
    id: "refuge-shoreline",
    name: "Salt Plains refuge shoreline",
    type: "Seasonal refuge access",
    description: "The refuge lists Great Salt Plains Lake and several fishing trails among its fishing areas. The refuge fishing season is April 1 through October 15, and fishing trails are open only during that season.",
    note: "Additional refuge rules apply alongside Oklahoma regulations. Confirm that your route and fishing area are open on the day you visit.",
    mapQuery: "Salt Plains National Wildlife Refuge Great Salt Plains Lake fishing trail",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
