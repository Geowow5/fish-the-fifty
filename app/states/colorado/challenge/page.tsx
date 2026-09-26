import type { Metadata } from "next";
import ColoradoMasterAnglerTracker from "./tracker";
import { qualifyingGroups } from "./qualifying-species";

export const metadata: Metadata = {
  title: "Colorado Master Angler Challenge | Fish the Fifty",
  description: "Track trophy-length catches for Colorado Parks and Wildlife's Master Angler Awards Program.",
};

const links = {
  program: "https://cpw.state.co.us/activities/fishing/fishing-awards-and-records/master-angler-awards-program",
  apply: "https://cpw.state.co.us/fishing/master-angler-application",
  awards: "https://cpw.state.co.us/activities/fishing/fishing-awards-and-records",
  license: "https://cpw.state.co.us/activities/fishing/fishing-licenses-and-dates",
  atlas: "https://cpw.state.co.us/activities/fishing/where-fish",
};

export default function ColoradoChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states/colorado/challenge">Colorado</a><span aria-hidden="true"> / </span><span>Master Angler</span></div>

    <section className="page-hero challenge-hero colorado-hero"><div className="page-hero-inner"><p className="eyebrow">COLORADO · OFFICIAL CPW PROGRAM</p><h1>Find a trophy.<br />Make Master Angler.</h1><p className="lead">Catch a Colorado fish that meets or exceeds its published trophy-length standard, document it correctly, and submit the catch to Colorado Parks and Wildlife within 60 days.</p><div className="state-facts"><span>44 species categories</span><span>Length-based awards</span><span>60-day submission window</span><span>Certificate and annual patch</span></div><div className="actions"><a className="btn primary" href={links.program}>Official rules and lengths ↗</a><a className="btn secondary" href={links.apply}>Apply online ↗</a></div></div></section>

    <section className="section challenge-layout">
      <div><ColoradoMasterAnglerTracker /><div className="challenge-note"><strong>Planning tool only.</strong><p>Your catch log stays in this browser. Fish the Fifty does not verify catches or transmit award applications; CPW makes every eligibility decision.</p></div></div>
      <aside className="challenge-side"><p className="eyebrow">HOW THE AWARD WORKS</p><h2>Measure, photograph, apply.</h2><ol className="challenge-steps"><li><strong>Choose an eligible species.</strong><span>Review the current CPW qualifying-length table before fishing. Standards range from 10-inch sunfish to a 40-inch tiger muskie.</span></li><li><strong>Catch it legally in Colorado.</strong><span>The entrant must hook, play and land the fish on sport tackle. Snagged, speared and bow-caught fish are not eligible.</span></li><li><strong>Measure total length.</strong><span>Close the mouth and measure a straight line from the jaw tip to tail tip, with the measuring device behind the fish.</span></li><li><strong>Apply within 60 days.</strong><span>Use CPW’s online submission form and upload a clear catch photograph. Paper applications are not accepted.</span></li></ol><a className="btn primary" href={links.apply}>Open CPW application ↗</a></aside>
    </section>

    <section className="section qualification-section colorado-minimums"><div className="section-heading"><p className="eyebrow">CPW MASTER ANGLER MINIMUMS</p><h2>Know the mark before you fish.</h2><p>A fish must meet or exceed the published total length for its category. Check CPW’s official page before submitting in case a standard changes.</p></div><div className="colorado-tables">{qualifyingGroups.map((group) => <div className="qualification-table-wrap" key={group.group}><table><caption className="texas-table-caption">{group.group}</caption><thead><tr><th scope="col">Species</th><th scope="col">Minimum</th></tr></thead><tbody>{group.species.map(([species, inches]) => <tr key={species}><th scope="row">{species}</th><td>{inches}&quot;</td></tr>)}</tbody></table></div>)}</div></section>

    <section className="section texas-side-program"><div className="texas-share-card"><div><p className="eyebrow">MORE COLORADO RECOGNITION</p><h2>Length records and weight records</h2><p>Colorado also maintains separate state-record programs. Length records require release, measurement photographs, a witness and a mailed application. Potential weight records require a certified scale and CPW identification.</p></div><a className="btn secondary" href={links.awards}>Explore records and awards ↗</a></div></section>

    <section className="section final-cta challenge-final"><p className="eyebrow">READY TO PLAN?</p><h2>Choose a target and find the water.</h2><p>Use the Colorado Fishing Atlas to search waters by species, access, regulations, ramps and current fishing opportunities.</p><div className="actions"><a className="btn primary" href={links.atlas}>Open Colorado Fishing Atlas ↗</a><a className="btn secondary" href={links.license}>Fishing licenses and dates ↗</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
