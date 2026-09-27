export type BlueRibbonWater = {
  slug: string;
  name: string;
  county: string;
  reach: string;
  regulationUrl: string;
  accessNote?: string;
};

export const blueRibbonWaters: BlueRibbonWater[] = [
  {
    slug: "barren-fork-creek",
    name: "Barren Fork Creek",
    county: "Shannon County",
    reach: "County Road A-D to Sinking Creek — 3.2 miles.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/barren-fork-creek",
  },
  {
    slug: "blue-springs-creek",
    name: "Blue Springs Creek",
    county: "Crawford County",
    reach: "Blue Springs to the Meramec River — 4 miles.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/blue-springs-creek",
  },
  {
    slug: "crane-creek",
    name: "Crane Creek",
    county: "Lawrence and Stone counties",
    reach: "Upstream from Quail Spur Crossing on Stone County Road 13-195 — 8 miles.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/crane-creek",
  },
  {
    slug: "current-river",
    name: "Current River (Blue Ribbon)",
    county: "Dent County",
    reach: "From the lower boundary of Montauk State Park to Cedar Grove Bridge — 9 miles.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/current-river-blue-ribbon",
  },
  {
    slug: "eleven-point-river",
    name: "Eleven Point River",
    county: "Oregon County",
    reach: "From the Greer Spring Branch junction to Turner Mill Access — 5.5 miles.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/eleven-point-river",
  },
  {
    slug: "little-piney-creek",
    name: "Little Piney Creek",
    county: "Phelps County",
    reach: "From the Phelps County line, including Piney Spring and Lane Spring branches, to Milldam Hollow Access — 9.9 miles.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/little-piney-creek",
  },
  {
    slug: "mill-creek",
    name: "Mill Creek",
    county: "Phelps County",
    reach: "From Yelton Spring to the Little Piney Creek junction, including Wilkins Spring and its spring branch — 7.7 miles.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/mill-creek",
  },
  {
    slug: "north-fork-white-river",
    name: "North Fork of the White River",
    county: "Ozark County",
    reach: "From the upper outlet of Rainbow Spring to Patrick Bridge — 8.6 miles.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/north-fork-white-river",
  },
  {
    slug: "spring-creek",
    name: "Spring Creek",
    county: "Phelps County",
    reach: "From Relfe Spring to the Big Piney River junction — 6.2 miles.",
    accessNote: "MDC identifies public access for the lower 3.2 miles. Landowner permission is required to fish the upper three miles to Relfe Spring.",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/spring-creek",
  },
];
