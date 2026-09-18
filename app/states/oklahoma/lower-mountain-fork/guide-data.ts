export const guidePath = "/states/oklahoma/lower-mountain-fork";
export const checkedDate = "2026-09-18";
export const checkedLabel = "September 18, 2026";

export const sources = {
  troutAreas: { label: "ODWC trout area access & regulations", url: "https://www.wildlifedepartment.com/fishing/regs/trout-area-information" },
  troutInfo: { label: "ODWC trout information & stocking guidance", url: "https://www.wildlifedepartment.com/fishing/resources/trout-information" },
  troutRules: { label: "ODWC trout regulations", url: "https://www.wildlifedepartment.com/fishing/regs/trout-regulations" },
  troutTips: { label: "ODWC trout angler guide", url: "https://www.wildlifedepartment.com/outdoorok/ooj/trout-angler-guide-top-tips-area-highlights" },
  reports: { label: "ODWC fishing reports", url: "https://www.wildlifedepartment.com/fishing/fishingreport" },
  license: { label: "Go Outdoors Oklahoma licenses", url: "https://gooutdoorsoklahoma.com/" },
  park: { label: "Beavers Bend State Park", url: "https://www.travelok.com/state-parks/beavers-bend-state-park" },
  map: { label: "ODWC trout areas page and map", url: "https://www.wildlifedepartment.com/fishing/regs/trout-area-information" },
  recognition: { label: "ODWC Angler Recognition Program", url: "https://wildlifedepartment.com/fishing/angler-recognition" },
} as const;

export const accessAreas = [
  {
    id: "beavers-bend",
    name: "Beavers Bend State Park",
    type: "Bank access & park facilities",
    description: "About five miles of the designated trout stream run through the state park, with bank access and nearby camping and cabins.",
    note: "Check park rules, reservations, and posted signs before fishing or parking.",
    mapQuery: "Beavers Bend State Park Broken Bow Oklahoma",
  },
  {
    id: "spillway",
    name: "Broken Bow spillway",
    type: "Upper reach",
    description: "The designated trout area begins at the Broken Bow Reservoir spillway.",
    note: "Water conditions can change near a dam. Use current notices and stay outside posted restricted areas.",
    mapQuery: "Broken Bow Dam spillway Oklahoma",
  },
  {
    id: "reregulation",
    name: "Re-regulation dam",
    type: "Tailwater access",
    description: "ODWC lists bank access downstream to the re-regulation dam and boat ramps just upstream of and below it.",
    note: "A boat ramp is not a guarantee of safe wading. Watch flow, footing, and other water users.",
    mapQuery: "Beavers Bend re-regulation dam Oklahoma",
  },
  {
    id: "presbyterian-falls",
    name: "Presbyterian Falls",
    type: "Public access point",
    description: "ODWC identifies Presbyterian Falls as another public access point on the Lower Mountain Fork.",
    note: "Confirm the entrance and parking on site; use the official trout-area description for current boundaries.",
    mapQuery: "Presbyterian Falls Broken Bow Oklahoma",
  },
] as const;

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
