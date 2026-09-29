// DNREC Sport Fishing Tournament minimums: weight (pounds) or live-release length (inches).
// Null means DNREC lists no qualifying value in that category. "Any" is DNREC's published value.
export type Fish = { name: string; adultWeight: string; adultLength: string; youthWeight: string; youthLength: string };
function parse(rows: string): Fish[] {
  return rows.trim().split("\n").map(row => {
    const [name, adultWeight, adultLength, youthWeight, youthLength] = row.split("|");
    return { name, adultWeight, adultLength, youthWeight, youthLength };
  });
}
export const freshwater = parse(`
Hybrid striped bass|5|22|3.5|19
Largemouth bass|5|20|3.5|17
Smallmouth bass¹|2|17|2|17
Striped bass|—|44|—|35
Bluegill|1|10|0.75 (12 oz.)|8
Carp|15|29|11|27
Channel catfish|6|25|4.5|23
Blue catfish (invasive)²|25|—|18|—
Flathead catfish (invasive)²|20|—|15|—
Crappie|1|12|0.75 (12 oz.)|10
Muskie|10|30|7.5|26
White perch|1|12|0.75 (12 oz.)|10
Yellow perch|1|12|0.75 (12 oz.)|10
Chain pickerel|4|24|3|20
American shad|5|23|3.5|18
Snakehead (invasive)²|Any|—|Any|—
Redear sunfish|1|10|0.75 (12 oz.)|8
Trout|2|16|1.5|15
`);
export const saltwater = parse(`
False albacore|12|26|9|24
True albacore|30|32|22.5|29
Striped bass|—|44|—|35
Black sea bass|3|17|2|15
Bluefish|12|29|10|27
Cobia|45|48|33.5|42
Atlantic croaker|3|19|2|16
Dolphinfish|15|41|11|38
Black drum|50|45|37.5|39
Red drum|—|45|—|35
Flounder|7|25|5|23
Kingfish|1|13|0.75 (12 oz.)|11
Atlantic mackerel|2|17|1.5|15
King mackerel|10|26|7.5|22
Spanish mackerel|5|22|3.5|20
Blue marlin³|Any|Any|Any|Any
White marlin³|Any|Any|Any|Any
Scup (porgy)|2|14|1.5|12
Shark (excluding mako)³|100|66|75|56
Sheepshead|8|22|6|20
Swordfish³|Any|Any|Any|Any
Tautog|7|25|5.5|20
Blueline tilefish|10|28|7.5|25
Golden tilefish|35|40|26.5|35
Gray triggerfish|5|20|3.5|18
Bluefin tuna³|100|60|75|48
Yellowfin or bigeye tuna³|70|48|52.5|45
Wahoo|20|50|15|41
Weakfish (sea trout)|3|20|2|18
`);
