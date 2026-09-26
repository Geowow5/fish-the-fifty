import type { Metadata } from "next";
import KansasMasterAnglerTracker from "./tracker";

export const metadata: Metadata = {
  title: "Kansas Master Angler Challenge | Fish the Fifty",
  description: "Plan and track qualifying catches for the Kansas Master Angler Award Program.",
};

const links = {
  awards: "https://www.ksoutdoors.gov/outdoor-activities/fishing-in-kansas/state-record-fish",
  fishing: "https://www.ksoutdoors.gov/outdoor-activities/fishing-in-kansas",
  regulations: "https://www.ksoutdoors.gov/programs-services/law-enforcement/regulations-statutes/fishing-regulations",
};

const targetGroups = [
  ["Bass", "Largemouth, smallmouth and other qualifying bass"],
  ["Catfish", "Blue, channel and flathead catfish"],
  ["Panfish", "Crappie, bluegill, redear and related species"],
  ["Prairie predators", "Walleye, saugeye, white bass and wiper"],
  ["Other Kansas trophies", "Carp, drum, trout and additional listed species"],
];

export default function KansasChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states/kansas/challenge">Kansas</a><span aria-hidden="true"> / </span><span>Master Angler</span></div>

    <section className="page-hero challenge-hero kansas-hero"><div className="page-hero-inner"><p className="eyebrow">KANSAS · OFFICIAL KDWP PROGRAM</p><h1>Catch a Kansas trophy.<br />Earn Master Angler.</h1><p className="lead">Catch a fish by legal means that meets or exceeds Kansas Department of Wildlife and Parks’ published minimum length for its species, document it, and apply for official recognition.</p><div className="state-facts"><span>One qualifying fish earns an award</span><span>Length-based standards</span><span>Kansas waters</span><span>Legal fishing methods</span></div><div className="actions"><a className="btn primary" href={links.awards}>Official sizes and application ↗</a><a className="btn secondary" href={links.regulations}>Kansas fishing regulations ↗</a></div></div></section>

    <section className="section challenge-layout">
      <div><KansasMasterAnglerTracker /><div className="challenge-note"><strong>Planning tool only.</strong><p>Your catch log stays in this browser. Fish the Fifty does not verify catches or submit applications. KDWP controls qualifying lengths and all award decisions.</p></div></div>
      <aside className="challenge-side"><p className="eyebrow">HOW THE AWARD WORKS</p><h2>Measure, document, apply.</h2><ol className="challenge-steps"><li><strong>Check the current species table.</strong><span>Choose an eligible species and note its official Master Angler minimum length before fishing.</span></li><li><strong>Catch it legally in Kansas.</strong><span>Follow statewide and water-specific seasons, creel limits, length limits and method restrictions.</span></li><li><strong>Measure and photograph the fish.</strong><span>Record the species, total length, date and Kansas waterbody. Take clear photographs supporting the catch.</span></li><li><strong>Send the KDWP application.</strong><span>Use the current form and instructions linked from the official State Record Fish and Master Angler page.</span></li></ol><a className="btn primary" href={links.awards}>Open official award page ↗</a></aside>
    </section>

    <section className="section qualification-section"><div className="section-heading"><p className="eyebrow">BUILD YOUR KANSAS LIST</p><h2>Many kinds of fish can qualify.</h2><p>Kansas publishes a species-by-species minimum-length table. These groups are a planning overview; the official KDWP table determines whether a catch qualifies.</p></div><div className="qualification-table-wrap"><table><thead><tr><th scope="col">Target group</th><th scope="col">Examples</th></tr></thead><tbody>{targetGroups.map(([group, examples]) => <tr key={group}><th scope="row">{group}</th><td>{examples}</td></tr>)}</tbody></table></div></section>

    <section className="section texas-side-program"><div className="texas-share-card"><div><p className="eyebrow">PLAN BEFORE YOU GO</p><h2>Confirm the water’s special rules.</h2><p>A fish can meet the Master Angler length and still be subject to a lake-specific minimum, slot limit, harvest restriction or special method rule. Review both the award table and the current fishing regulations.</p></div><a className="btn secondary" href={links.regulations}>Review Kansas regulations ↗</a></div></section>

    <section className="section final-cta challenge-final"><p className="eyebrow">READY TO START?</p><h2>Choose a species and chase the mark.</h2><p>Use the official Kansas award page for current qualifying lengths and application materials, then record your progress here.</p><div className="actions"><a className="btn primary" href={links.awards}>Master Angler requirements ↗</a><a className="btn secondary" href={links.fishing}>Explore Kansas fishing ↗</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
