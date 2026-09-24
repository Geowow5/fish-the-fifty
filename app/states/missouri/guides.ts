export const checkedDate = "2026-09-24";
export const checkedLabel = "September 24, 2026";

export const missouriSources = {
  slam: {
    label: "MDC Blue Ribbon Trout Slam overview",
    url: "https://mdc.mo.gov/fishing/trophies-certificates/blue-ribbon-trout-slam",
  },
  entry: {
    label: "MDC Blue Ribbon Trout Slam entry form",
    url: "https://mdc.mo.gov/fishing/trophies-certificates/blue-ribbon-trout-slam/blue-ribbon-trout-slam-entry-form",
  },
  permits: {
    label: "MDC trout permits",
    url: "https://mdc.mo.gov/fishing/species/trout/trout-permits",
  },
  waders: {
    label: "MDC porous-soled wader restrictions",
    url: "https://mdc.mo.gov/fishing/regulations/porous-soled-waders-ban",
  },
  privateWater: {
    label: "MDC stream access and trespassing guidance",
    url: "https://mdc.mo.gov/fishing/regulations/trespassing",
  },
  forestCamping: {
    label: "Mark Twain National Forest camping information",
    url: "https://www.fs.usda.gov/r09/marktwain/recreation/camping-cabins",
  },
} as const;

export type MissouriAccess = {
  name: string;
  detail: string;
  query: string;
};

export type MissouriWaterGuide = {
  slug: string;
  number: string;
  name: string;
  county: string;
  region: string;
  qualifyingReach: string;
  miles: string;
  species: string;
  summary: string;
  atAGlance: string[];
  accessIntro: string;
  access: MissouriAccess[];
  approach: string;
  tactics: string[];
  flies: string[];
  season: string;
  camping: string;
  campingUrl: string;
  tripNote: string;
  mapUrl: string;
  regulationUrl: string;
  reportUrl: string;
  areaLabel: string;
  areaUrl: string;
};

export const missouriWaters: MissouriWaterGuide[] = [
  {
    slug: "barren-fork-creek",
    number: "01",
    name: "Barren Fork Creek",
    county: "Shannon County",
    region: "Eastern Ozarks",
    qualifyingReach: "County Road A–D to Sinking Creek",
    miles: "3.2 miles",
    species: "Naturally reproducing rainbow trout",
    summary: "A quiet, remote creek in Sunklands Conservation Area. Its short qualifying reach and surrounding public-land roads reward careful map work before you head in.",
    atAGlance: ["Shannon County", "3.2 qualifying miles", "Sunklands Conservation Area", "Wild rainbow trout"],
    accessIntro: "MDC identifies the slam water as the 3.2-mile segment from County Road A–D to Sinking Creek. The Blue Ribbon map marks public Sunklands Conservation Area land and adjacent private property; stay on the public side of the line.",
    access: [
      { name: "Sunklands Conservation Area", detail: "Use the MDC area map to plan the public approach. MDC lists access from Route KB and MDC Trail 360, or from Highway 19 and County Road 19-324. Area hours are 4 a.m.–10 p.m.; follow posted signs and closures.", query: "Sunklands Conservation Area Missouri" },
      { name: "County Road A–D reach", detail: "This road marks the upstream end of the qualifying segment. Park only at a legal pull-off or signed lot, then confirm the creek and boundary on the MDC Blue Ribbon map.", query: "County Road AD Barren Fork Creek Shannon County Missouri" },
      { name: "Sinking Creek confluence", detail: "The lower end of the Blue Ribbon segment is the confluence with Sinking Creek. Do not continue onto neighboring private property without permission.", query: "Barren Fork Creek Sinking Creek Missouri" },
    ],
    approach: "This is small-stream fishing for wild rainbows, not a hatchery put-and-take stop. Walk slowly, keep a low profile, and work the creek in short sections. Approach pools and runs from downstream where possible; pause after arriving so wary fish can settle.",
    tactics: ["Keep casts short and accurate around bends, undercut banks, and shaded pockets.", "Use a light 4- or 5-weight and a long leader when overhanging branches allow it.", "Move slowly between spots and avoid wading through the holding water you plan to fish."],
    flies: ["Small olive or brown nymphs", "Soft hackles", "Compact caddis or mayfly dries", "Small dark streamers for deeper pools"],
    season: "MDC’s current special-water listing does not show a seasonal closure for the Blue Ribbon reach. Conditions and safe access still change with rain and water level; check MDC’s current rules and local weather before setting out.",
    camping: "Sunklands Conservation Area allows dispersed primitive camping. Choose only areas permitted by the current MDC map and rules; the area page notes that signs and the Wildlife Code can further restrict use.",
    campingUrl: "https://mdc.mo.gov/discover-nature/places/sunklands-conservation-area",
    tripNote: "Plan this as a dedicated stop. It is remote, the qualifying section is short, and the nearest public access is not a developed roadside fishing park.",
    mapUrl: "https://mdc.mo.gov/media/108181",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/barren-fork-creek",
    reportUrl: "https://mdc.mo.gov/magazines/conservationist/1997-11/reflections",
    areaLabel: "Sunklands Conservation Area details and map",
    areaUrl: "https://mdc.mo.gov/discover-nature/places/sunklands-conservation-area",
  },
  {
    slug: "blue-springs-creek",
    number: "02",
    name: "Blue Springs Creek",
    county: "Crawford County",
    region: "Eastern Ozarks",
    qualifyingReach: "Blue Springs to the Meramec River",
    miles: "4 miles",
    species: "Naturally reproducing rainbow trout",
    summary: "A small, clear creek south of Bourbon, where spring water sustains a wary rainbow population. The public conservation area is the practical place to begin.",
    atAGlance: ["Crawford County", "4 qualifying miles", "Parking off Route N and Blue Springs Road", "Clear, spring-fed water"],
    accessIntro: "MDC’s prospect report describes public fishing on Blue Springs Creek Conservation Area along the lower three miles above the Meramec confluence. The full Blue Ribbon reach is four miles, so follow the MDC map and area signs rather than assuming the entire creek has public banks.",
    access: [
      { name: "Blue Springs Creek Conservation Area", detail: "From Bourbon, take Route N south about 2.5 miles to Blue Springs Road. MDC lists parking off both Route N and Blue Springs Road.", query: "Blue Springs Creek Conservation Area Missouri" },
      { name: "Lower creek near the Meramec", detail: "The public fishing access described by MDC covers the lower three miles above the creek’s confluence with the Meramec River. Use the conservation-area map to locate the signed parcels and legal parking.", query: "Blue Springs Creek Meramec River Missouri" },
    ],
    approach: "MDC describes the water as typically very clear and the naturally reproducing trout as extremely wary. There are low limbs along this narrow stream, so shorten the cast, keep a quiet approach, and use light tippet. Deep holes and overhead cover near riffles are useful places to look for larger fish.",
    tactics: ["Fish one short run at a time and avoid sudden movement on the bank.", "Use a low sidearm or roll cast under branches; a compact 5-weight is easier to manage than a long, powerful rod.", "Try deeper holes and shaded water beside riffles for larger trout."],
    flies: ["Small pheasant-tail or hare’s-ear nymphs", "Olive or black soft hackles", "Small caddis dries", "A short, sparse streamer for deep cover"],
    season: "MDC’s 2026 prospect report notes better numbers across several size classes than in past samples, with the naturally reproducing population available year-round. The creek’s clarity and flow make recent rain and seasonal water conditions worth checking before you go.",
    camping: "MDC’s Blue Springs Creek Conservation Area page lists creek access and parking but does not identify a developed campground. Check current local lodging or the official Mark Twain National Forest camping directory before building an overnight plan.",
    campingUrl: "https://www.fs.usda.gov/r09/marktwain/recreation/camping-cabins",
    tripNote: "This creek pairs well with Barren Fork as an eastern-Ozarks trip cluster, but they are separate access areas. Allow time to scout the posted boundaries at each stop.",
    mapUrl: "https://mdc.mo.gov/media/108190",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/blue-springs-creek",
    reportUrl: "https://mdc.mo.gov/fishing/fishing-prospects/reports/blue-springs-creek-prospect-report",
    areaLabel: "Blue Springs Creek Conservation Area details and map",
    areaUrl: "https://mdc.mo.gov/discover-nature/places/blue-springs-creek-conservation-area",
  },
  {
    slug: "crane-creek",
    number: "03",
    name: "Crane Creek",
    county: "Lawrence and Stone counties",
    region: "Southwest Ozarks",
    qualifyingReach: "Upstream from Quail Spur Crossing on Stone County Road 13-195",
    miles: "8 miles",
    species: "Naturally reproducing rainbow trout",
    summary: "A long Blue Ribbon reach with a self-sustaining rainbow population. Wire Road Conservation Area and the city park in Crane are the public access points named by MDC.",
    atAGlance: ["Lawrence and Stone counties", "8 qualifying miles", "Wire Road CA and Crane city park", "Wild rainbow trout"],
    accessIntro: "The Blue Ribbon rules apply upstream from Quail Spur Crossing on Stone County Road 13-195. MDC’s prospect report names public access on Wire Road Conservation Area and at the city park in Crane. Check the boundary map before wading because the qualifying water crosses county lines and private parcels.",
    access: [
      { name: "Wire Road Conservation Area", detail: "MDC identifies Wire Road CA as public access to Crane Creek. Use the official Blue Ribbon map to find the creek segment and public boundary before choosing a parking point.", query: "Wire Road Conservation Area Crane Creek Missouri" },
      { name: "City park in Crane", detail: "MDC also identifies the city park in Crane as public creek access. Confirm current park access, parking, and any posted hours when you arrive.", query: "Crane City Park Missouri" },
      { name: "Quail Spur Crossing", detail: "The crossing on Stone County Road 13-195 is the downstream boundary of the eight-mile Blue Ribbon reach. Do not treat the road crossing as permission to enter private land.", query: "Quail Spur Crossing Stone County Road 13-195 Missouri" },
    ],
    approach: "Crane Creek holds wild rainbow trout sustained by natural reproduction. MDC’s recent report points anglers toward deeper pools, undercut banks, and root wads when looking for larger fish. Work from public access and cover water carefully instead of walking directly through likely holding lies.",
    tactics: ["Prioritize deeper pools and undercut banks, especially around root wads.", "Use a quiet 5-weight and accurate short casts in the brush-lined creek.", "If a fish follows but refuses, rest the spot and return with a smaller or more natural-looking fly."],
    flies: ["Small stonefly or mayfly nymphs", "Soft hackles", "Caddis dries", "A small dark streamer for deeper pools and cover"],
    season: "The creek supports a naturally reproducing trout population rather than a seasonal put-and-take stocking schedule. MDC’s most recent prospect report describes healthy recruitment in its 2024 survey; use the current report and water conditions to choose a trip date.",
    camping: "MDC identifies access at Wire Road CA and the city park, but its Crane Creek prospect report does not list a campground on the fishing reach. Check the current Mark Twain National Forest camping page or local lodging for a suitable overnight stop.",
    campingUrl: "https://www.fs.usda.gov/r09/marktwain/recreation/camping-cabins",
    tripNote: "Crane Creek is the western edge of a regional cluster with the North Fork of the White River. Check both streams’ access maps before deciding whether to combine them in one weekend.",
    mapUrl: "https://mdc.mo.gov/media/108196",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/crane-creek",
    reportUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/crane-creek",
    areaLabel: "MDC Crane Creek fishing prospect report",
    areaUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/crane-creek",
  },
  {
    slug: "current-river",
    number: "04",
    name: "Current River — Blue Ribbon",
    county: "Dent County",
    region: "South-Central Ozarks",
    qualifyingReach: "Lower boundary of Montauk State Park to Cedar Grove Bridge",
    miles: "9 miles",
    species: "Brown trout; rainbows can move downstream from Montauk",
    summary: "A nine-mile trophy-oriented stretch below Montauk, managed for large brown trout. The Blue Ribbon reach ends at Cedar Grove Bridge; rules change below that point.",
    atAGlance: ["Dent County", "9 qualifying miles", "Montauk to Cedar Grove", "Brown trout focus"],
    accessIntro: "The eligible Blue Ribbon water begins at the lower boundary of Montauk State Park and ends at Cedar Grove Bridge. MDC reports the Tan Vat and Baptist access areas as useful locations on the managed stretch; confirm which bank and parking locations are open on the current NPS/MDC maps.",
    access: [
      { name: "Lower boundary of Montauk State Park", detail: "This is the upstream start of the Blue Ribbon reach. The park also has an adjacent trout park with separate zones and rules; the Slam water is the river downstream of the park boundary.", query: "Montauk State Park lower boundary Current River Missouri" },
      { name: "Tan Vat Access", detail: "MDC prospect information references Tan Vat as a sampling and fishing access on the Blue Ribbon stretch. Check the current riverways access map and conditions before wading or floating.", query: "Tan Vat Access Current River Missouri" },
      { name: "Baptist Access", detail: "Baptist is another named access along the managed reach. Use it with the official Blue Ribbon map to plan a legal bank approach or float shuttle.", query: "Baptist Access Current River Missouri" },
      { name: "Cedar Grove Bridge", detail: "Cedar Grove Bridge is the lower limit of the 9-mile Blue Ribbon reach. Downstream water has different trout-area rules, so keep the boundary clear in your plan.", query: "Cedar Grove Bridge Current River Missouri" },
    ],
    approach: "MDC manages this reach for large brown trout and reports annual brown trout stocking. Focus on deep pools, undercut banks, and low-light periods; the current prospect report says dawn and dusk are productive times for larger browns on nearby managed water. Handle trout gently and release fish under the Blue Ribbon harvest minimum.",
    tactics: ["Try a 5-weight with a short, stout leader for streamer fishing around deeper cover.", "Work a dark streamer or weighted nymph through pools, seams, and undercut banks; change depth before changing fly.", "Fish the first and last light when targeting larger browns, then check current flow before wading."],
    flies: ["Dark Woolly Bugger or sculpin-style streamer", "Weighted olive or brown nymph", "Soft hackle in slower seams", "Small dry fly when trout are visibly feeding on the surface"],
    season: "MDC reports annual brown trout stocking in this managed stretch. The 2026 prospect report described a strong large-fish component in its 2025 sample; check the latest Current River report before travel because floods and stocking can change conditions.",
    camping: "Montauk State Park offers basic and electric campsites at the upstream end of the reach. Ozark National Scenic Riverways also lists Cedar Grove and Akers campgrounds; verify current availability, closures, fire restrictions, and access before booking.",
    campingUrl: "https://mostateparks.com/park/montauk-state-park/camping",
    tripNote: "A one-way float needs a shuttle between legal put-in and take-out access. Do not confuse this Blue Ribbon section with the White Ribbon reach below Cedar Grove or with Montauk’s park zones.",
    mapUrl: "https://mdc.mo.gov/media/108197",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/current-river-blue-ribbon",
    reportUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/current-river-upper",
    areaLabel: "MDC Current River upper prospect report",
    areaUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/current-river-upper",
  },
  {
    slug: "eleven-point-river",
    number: "05",
    name: "Eleven Point River",
    county: "Oregon County",
    region: "Southern Ozarks",
    qualifyingReach: "Greer Spring Branch junction to Turner Mill Access",
    miles: "5.5 miles",
    species: "Rainbow trout, with a wild population supplemented by stocking",
    summary: "Greer Spring turns the Eleven Point into a coldwater trout river. Public access to the qualifying reach is limited, so plan the Greer and Turner Mill approaches before launching.",
    atAGlance: ["Oregon County", "5.5 qualifying miles", "Greer and Turner Mill access", "Wild and stocked rainbows"],
    accessIntro: "MDC describes public access to the Blue Ribbon segment at the Highway 19 crossing at Greer and by U.S. Forest Service gravel roads to Turner Mill North and South. A float between access points requires a shuttle and current water-level check; do not assume every bank is public.",
    access: [
      { name: "Greer Access", detail: "From Alton, MDC directs anglers north on Highway 19 for about 9.5 miles; the access is on the right after the bridge. Check the Greer Spring Branch junction and Blue Ribbon boundary on the MDC map.", query: "Greer Access Eleven Point River Missouri" },
      { name: "Turner Mill North", detail: "MDC directions use Highway 19 north, Forest Road 3152, then Forest Road 3190 to the river. The final approach is on gravel forest roads; check current road conditions.", query: "Turner Mill North Access Eleven Point River Missouri" },
      { name: "Turner Mill South", detail: "MDC directions use Highway 19, Highway AA, County Road 127, then Forest Service Road 3153. Confirm the road and access status before driving in.", query: "Turner Mill South Access Eleven Point River Missouri" },
    ],
    approach: "Greer Spring provides cold, steady water. MDC’s 2026 prospect report says the 5.5-mile Blue Ribbon section supports wild rainbows with spring and fall supplemental stockings. Most sampled fish were 9–16 inches; a trophy is possible but not the expectation. This section is also a scenic float, so plan fishing time and a shuttle rather than trying to cover every pool on foot.",
    tactics: ["Use a 5-weight for trout-focused floating or wading; keep a compact streamer and nymph setup ready.", "Drift a weighted nymph or soft hackle through deeper runs below riffles, then try a dry fly if fish rise.", "If targeting smallmouth in this Blue Ribbon section, use artificial tackle that complies with the no-soft-plastic rule."],
    flies: ["Prince or hare’s-ear nymph", "Olive Woolly Bugger", "Soft hackle", "Elk-hair caddis or small mayfly dry"],
    season: "The trout population is present year-round, and MDC reports two supplemental stockings each year, in spring and fall. Its 2026 report estimated roughly 83 wild trout per mile and more than 300 trout per mile overall in the latest sample; check the live prospect report for updated figures and river conditions.",
    camping: "Greer Crossing Recreation Area is a Mark Twain National Forest campground on the Eleven Point. Confirm campground status, road access, and current Forest Service rules before relying on it for an overnight trip.",
    campingUrl: "https://www.fs.usda.gov/r09/marktwain/recreation/eleven-point-national-wild-and-scenic-river",
    tripNote: "A Greer-to-Turner Mill float is about the same length as the qualifying reach. Arrange the shuttle first, then keep the official Blue Ribbon map handy so you know where the eligible reach begins and ends.",
    mapUrl: "https://mdc.mo.gov/media/108201",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/eleven-point-river",
    reportUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/eleven-point-river",
    areaLabel: "MDC Eleven Point River fishing prospect report",
    areaUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/eleven-point-river",
  },
  {
    slug: "little-piney-creek",
    number: "06",
    name: "Little Piney Creek",
    county: "Phelps County",
    region: "Central Ozarks",
    qualifyingReach: "Phelps County line, including Piney Spring and Lane Spring branches, to Milldam Hollow Access",
    miles: "9.9 miles",
    species: "Naturally reproducing rainbow trout",
    summary: "A spring-influenced creek with wild rainbows and several public-ownership changes. Lane Spring and Milldam Hollow are useful reference points, but the map is essential for avoiding private frontage.",
    atAGlance: ["Phelps County", "9.9 qualifying miles", "Lane Spring to Milldam Hollow", "Wild rainbow trout"],
    accessIntro: "The eligible Blue Ribbon reach runs from the Phelps County line, including Piney Spring Branch and Lane Spring Branch, to Milldam Hollow Access. MDC cautions anglers to get permission when wading on land that is not Forest Service property, including the Vida Slab area.",
    access: [
      { name: "Lane Spring Recreation Area", detail: "The Forest Service says Little Piney Creek is accessible from Lane Spring Recreation Area, which also has waterfront campsites. Use signed public paths and confirm the Blue Ribbon boundary on the MDC map.", query: "Lane Spring Recreation Area Little Piney Creek Missouri" },
      { name: "Milldam Hollow Access", detail: "MDC identifies Milldam Hollow at the downstream end of the Blue Ribbon section. Its prospect report directs drivers from Highway 63 toward County Road 7400; use the signed access and official map.", query: "Milldam Hollow Access Little Piney Creek Missouri" },
      { name: "Public-land boundaries", detail: "The creek crosses private frontage. Fish from Forest Service or MDC land unless you have the landowner’s permission; a stream’s public status does not make its banks public.", query: "Little Piney Creek Lane Spring Campground Missouri" },
    ],
    approach: "Little Piney supports wild rainbows and can fish small. MDC notes that small trout may be very active, so smaller flies and careful drifts help keep the presentation natural. Stay within the Blue Ribbon section for a Slam catch; downstream of Milldam Hollow the stream changes to a White Ribbon area with different rules.",
    tactics: ["Walk slowly and cover the narrow runs and pockets with short casts.", "Use a 4- or 5-weight, a long leader, and a careful drift; avoid lining the small fish in clear water.", "Use only public access parcels or obtain explicit permission before crossing private frontage."],
    flies: ["Small pheasant-tail, hare’s-ear, or midge nymphs", "Soft hackles", "Small caddis or mayfly dries", "A short, lightly weighted streamer for deeper pools"],
    season: "MDC’s report describes a naturally reproducing population rather than a scheduled put-and-take season. Spring-fed water can make the creek fishable across a broad season, but floods, temperature, and private-property boundaries determine the practical plan. Check the annual prospect report before traveling.",
    camping: "Lane Spring Recreation Area is on Little Piney Creek and offers camping; the Forest Service publishes current dates and conditions. Reservations and amenities can change, so confirm with the official Forest Service page before you go.",
    campingUrl: "https://www.fs.usda.gov/r09/marktwain/recreation/little-piney-creek",
    tripNote: "Little Piney, Mill Creek, and Spring Creek make a practical central-Ozarks cluster. They are separate waters with separate access maps, so plan each day around a named public access instead of assuming the creeks connect by bank trail.",
    mapUrl: "https://mdc.mo.gov/media/108219",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/little-piney-creek",
    reportUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/little-piney-creek-blue-ribbon-trout-management-area",
    areaLabel: "Little Piney Creek Blue Ribbon prospect report",
    areaUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/little-piney-creek-blue-ribbon-trout-management-area",
  },
  {
    slug: "mill-creek",
    number: "07",
    name: "Mill Creek",
    county: "Phelps County",
    region: "Central Ozarks",
    qualifyingReach: "Yelton Spring to Little Piney Creek, including Wilkins Spring and Spring Branch",
    miles: "7.7 miles",
    species: "Naturally reproducing rainbow trout",
    summary: "A small creek with wild rainbows and a 7.7-mile qualifying reach. MDC points anglers toward public MDC and Forest Service properties upstream of the picnic area on Mill Creek Road.",
    atAGlance: ["Phelps County", "7.7 qualifying miles", "Mill Creek Road area", "Wild rainbow trout"],
    accessIntro: "The legal Blue Ribbon segment runs from Yelton Spring to Little Piney Creek and includes Wilkins Spring and Spring Branch. MDC says the best opportunities are on U.S. Forest Service and MDC property upstream of the Mill Creek Road picnic area.",
    access: [
      { name: "Mill Creek Road picnic area", detail: "MDC recommends public Forest Service and MDC properties upstream of the picnic area. From Highway T south of I-44 at Doolittle, cross Little Piney Creek and turn right on Highway P; MDC’s directions then use the Mill Creek Campground sign road or Highway AA.", query: "Mill Creek Road Picnic Area Phelps County Missouri" },
      { name: "Yelton Spring", detail: "Yelton Spring is the upstream end of the Blue Ribbon reach. Use the official map to locate the spring and identify public land before leaving the road.", query: "Yelton Spring Phelps County Missouri" },
      { name: "Little Piney Creek confluence", detail: "The lower end is the Mill Creek junction with Little Piney Creek. Check the map for the boundary and do not cross posted private parcels to reach the bank.", query: "Mill Creek Little Piney Creek Missouri" },
    ],
    approach: "MDC describes the trout as easily spooked and recommends quiet wading and slow fishing. Most fish in the current report were under 12 inches, while large trout remain in deeper pools with suitable habitat. Fish slowly and keep the cast and backcast compact in the wooded creek.",
    tactics: ["Wade quietly and pause before fishing a pool; wild trout may spook before you see them.", "Work a small nymph slowly through deeper pools and seams, then try a dry fly when fish are visibly feeding.", "Stay on public Forest Service or MDC parcels upstream of the picnic area unless you have landowner permission."],
    flies: ["Small pheasant-tail and prince nymphs", "Soft hackles", "Small caddis dries", "A compact streamer for larger pools"],
    season: "MDC reports a reproducing rainbow population that has continued through difficult environmental conditions. Its annual prospect report is the best source for current population and access notes; no separate seasonal trout closure is listed on the Blue Ribbon regulation page.",
    camping: "MDC’s driving directions reference the Mill Creek Campground sign road. Check the current Mark Twain National Forest camping page for which local sites are operating, what they provide, and any seasonal restrictions.",
    campingUrl: "https://www.fs.usda.gov/r09/marktwain/recreation/camping-cabins",
    tripNote: "This is technical, small-stream fishing rather than a long float. It pairs with nearby Little Piney Creek and Spring Creek for a central-Phelps County trip, with access checked separately for each water.",
    mapUrl: "https://mdc.mo.gov/media/108223",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/mill-creek",
    reportUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/mill-creek-blue-ribbon-trout-management-area",
    areaLabel: "Mill Creek Blue Ribbon prospect report",
    areaUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/mill-creek-blue-ribbon-trout-management-area",
  },
  {
    slug: "north-fork-white-river",
    number: "08",
    name: "North Fork of the White River",
    county: "Ozark County",
    region: "Southern Ozarks",
    qualifyingReach: "Upper outlet of Rainbow Spring to Patrick Bridge",
    miles: "8.6 miles",
    species: "Rainbow trout, with brown trout also present",
    summary: "An 8.6-mile Blue Ribbon stretch from Rainbow Spring to Patrick Bridge. Patrick Bridge is a named public access; water below it is a different trout-management area.",
    atAGlance: ["Ozark County", "8.6 qualifying miles", "Rainbow Spring to Patrick Bridge", "Rainbows and browns"],
    accessIntro: "MDC sets the qualifying reach from the upper outlet of Rainbow Spring to Patrick Bridge. The river also has Hebron and Blair Bridge accesses, but use the Blue Ribbon map to confirm which access lies inside the Slam reach and the boundaries of any bank approach.",
    access: [
      { name: "Patrick Bridge Access", detail: "MDC’s 161-acre access provides fishing access, parking, privies, campsites, a gravel canoe launch, and a short trail to Althea Spring. It is the lower end of the qualifying Blue Ribbon section.", query: "Patrick Bridge Access North Fork White River Missouri" },
      { name: "Rainbow Spring", detail: "The upper outlet of Rainbow Spring begins the Blue Ribbon reach. Use MDC’s official map to locate the boundary and identify public access before approaching the spring.", query: "Rainbow Spring North Fork White River Missouri" },
      { name: "Hebron and Blair Bridge", detail: "MDC lists these as public accesses on the North Fork. Check each against the Blue Ribbon map before counting a catch; water outside the marked reach does not qualify for this Slam area.", query: "Hebron Access North Fork White River Missouri" },
    ],
    approach: "MDC calls the Rainbow Spring–Patrick Bridge Blue Ribbon section the best bet for rainbows. Its 2026 report recommends Woolly Buggers, Pat’s Rubber Legs, and Prince nymphs bounced along the bottom; Adams and elk-hair caddis when trout are rising. Brown trout can migrate into the Blue Ribbon stretch, with streamers most useful at low light.",
    tactics: ["Cover seams below riffles and the deeper slots between boulders with weighted nymphs.", "Switch to dries when fish are taking insects on the surface; use a short, accurate drift.", "MDC recommends catch-and-release to support recovery in the wider river system; the 2026 report notes lower trout numbers than before the 2017 flood."],
    flies: ["Woolly Bugger", "Pat’s Rubber Legs", "Prince nymph", "Adams or elk-hair caddis when fish are surface feeding"],
    season: "The trout fishery is available year-round under the current Blue Ribbon rules. MDC’s 2026 report says the population is still rebuilding from the 2017 flood and recommends catch-and-release; check that report for the latest conditions and fishery outlook.",
    camping: "Patrick Bridge Access has campsites. The Mark Twain National Forest also manages North Fork Recreation Area, but verify its location relative to your chosen access, fees, and current operating status before booking.",
    campingUrl: "https://mdc.mo.gov/discover-nature/places/patrick-bridge-access",
    tripNote: "Patrick Bridge is an access and a boundary marker, not a license to fish downstream under Blue Ribbon rules. The segment below Patrick Bridge is designated Red Ribbon and has different restrictions.",
    mapUrl: "https://mdc.mo.gov/media/108226",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/north-fork-white-river",
    reportUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/north-fork-white-river",
    areaLabel: "MDC North Fork of the White River prospect report",
    areaUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/north-fork-white-river",
  },
  {
    slug: "spring-creek",
    number: "09",
    name: "Spring Creek",
    county: "Phelps County",
    region: "Central Ozarks",
    qualifyingReach: "Relfe Spring to the Big Piney River",
    miles: "6.2 miles; about 3.2 miles noted as public access",
    species: "Naturally reproducing rainbow trout",
    summary: "A spring-fed Blue Ribbon stream with a strict public-access caveat: MDC identifies only the lower 3.2 miles as public, and landowner permission is required upstream to Relfe Spring.",
    atAGlance: ["Phelps County", "6.2 qualifying miles", "About 3.2 public miles", "Best January to early summer"],
    accessIntro: "The designated Blue Ribbon reach runs from Relfe Spring to the Big Piney River, but public access is narrower: MDC identifies the lower 3.2 miles, from a private-land boundary about three miles below Relfe Spring to the confluence. Landowner permission is required for the upper three miles to Relfe Spring.",
    access: [
      { name: "Highway J / Forest Service road", detail: "MDC directs anglers to take the Highway J exit near the Phelps–Pulaski county line, head south, and turn onto a Forest Service road just before the Spring Creek bridge. Follow posted signs and remain on public land.", query: "Spring Creek Highway J Phelps County Missouri" },
      { name: "Public lower reach", detail: "The publicly accessible portion begins at the private-land boundary approximately three miles downstream of Relfe Spring and extends to the Big Piney River. MDC’s official map marks the boundary and 3.2 public miles.", query: "Spring Creek Big Piney River Phelps County Missouri" },
      { name: "Relfe Spring", detail: "Relfe Spring is the upstream end of the Blue Ribbon reach, but the upper three miles are private. Do not wade or walk upstream without landowner permission.", query: "Relfe Spring Missouri" },
    ],
    approach: "MDC says the public section is best from January through early summer, when wild rainbows migrate downstream after spawning on private property. Expect quiet stretches between fish. Sneak into the downstream ends of riffles and runs around deep holes and woody debris; in summer, look for the small spring seeps that provide cooler refuge.",
    tactics: ["Keep a low profile and avoid casting a shadow over clear water.", "Fish the lower ends of riffles and runs, then probe deep holes beside woody cover.", "In summer, look for spring seeps and fish the cooler water carefully."],
    flies: ["Small olive or brown nymphs", "Soft hackles", "Small streamers around woody cover", "Tiny dries if fish are visibly rising"],
    season: "MDC identifies January through early summer as the best period. Rainbows move downstream from private spawning water after winter, so the public lower reach can hold fish after that movement. The population changes with floods and time of year; check the annual MDC prospect report.",
    camping: "There is no campground listed on MDC’s Spring Creek prospect page. For a multi-stream central-Ozarks trip, Lane Spring Recreation Area on Little Piney Creek is one official Forest Service camping option; confirm dates and availability before travel.",
    campingUrl: "https://www.fs.usda.gov/r09/marktwain/recreation/camping-cabins",
    tripNote: "Treat the private-land line as a hard boundary. The full 6.2-mile Blue Ribbon designation does not mean the full length is open to public bank access.",
    mapUrl: "https://mdc.mo.gov/media/108234",
    regulationUrl: "https://mdc.mo.gov/fishing/regulations/special-waterbody-regulations/spring-creek",
    reportUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/spring-creek-blue-ribbon-trout-management-area",
    areaLabel: "MDC Spring Creek Blue Ribbon prospect report",
    areaUrl: "https://mdc.mo.gov/fishing/fishing-prospects/areas/spring-creek-blue-ribbon-trout-management-area",
  },
];

export const tripClusters = [
  { title: "Southern Ozarks", slugs: ["eleven-point-river", "current-river"], detail: "Greer Spring and the upper Current each have a clear Blue Ribbon reach and official access map." },
  { title: "Eastern Ozarks", slugs: ["blue-springs-creek", "barren-fork-creek"], detail: "Two small-stream stops where boundary maps and quiet approaches matter." },
  { title: "Central Ozarks", slugs: ["spring-creek", "little-piney-creek", "mill-creek"], detail: "Three Phelps County creeks with separate access rules, public-land boundaries, and seasonal notes." },
  { title: "Southwest Ozarks", slugs: ["crane-creek", "north-fork-white-river"], detail: "A western trip cluster with wild rainbows on Crane Creek and a large-river option on the North Fork." },
];

export function googleMapSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function appleMapSearch(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}
