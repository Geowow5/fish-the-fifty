import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebraska Master Angler Award | Fish the Fifty",
  description: "Compare Nebraska Master Angler catch-and-release lengths and harvested weights, learn the official rules, and submit a trophy fish.",
};

const links = {
  master: "https://outdoornebraska.gov/fish/fisheries-programs/master-angler/",
  guide: "https://digital.outdoornebraska.gov/i/1542421-fishing-guide-2026/23",
  plan: "https://outdoornebraska.gov/fish-nebraska/",
};

const examples = [
  ["Largemouth bass", "20 in.", "5 lb."],
  ["Smallmouth bass", "18 in.", "3 lb."],
  ["White bass", "17 in.", "2.5 lb."],
  ["Bluegill", "10 in.", "1 lb."],
  ["Channel catfish", "30 in.", "12 lb."],
  ["Crappie", "15 in.", "2 lb."],
  ["Freshwater drum", "22 in.", "5 lb."],
  ["Brown trout", "22 in.", "4 lb."],
  ["Rainbow trout", "23 in.", "5 lb."],
  ["Walleye", "28 in.", "8 lb."],
] as const;

export default function NebraskaChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>Nebraska</span></div>
    <section className="page-hero challenge-hero"><div className="page-hero-inner"><p className="eyebrow">NEBRASKA · GAME AND PARKS</p><h1>Nebraska<br />Master Angler.</h1><p className="lead">Catch a trophy-sized Nebraska fish and apply for the official Master Angler Award. Choose the release-length path for a fish released immediately, or the harvest-weight path for a legally kept fish.</p><div className="state-facts"><span>Length or weight</span><span>Official certificate</span><span>Release pin for released fish</span></div><div className="actions"><a className="btn primary" href="#sizes">Compare trophy sizes ↓</a><a className="btn secondary" href={links.master} target="_blank" rel="noreferrer">Official award and application ↗</a></div></div></section>
    <section className="section challenge-layout"><div><p className="eyebrow">CATCH AND RELEASE</p><h2>Measure, then release immediately.</h2><ol className="challenge-steps"><li><strong>Catch an eligible fish yourself.</strong><span>The fish must be legally hooked, played, and landed by the applicant with hook and line in Nebraska waters. Bankline catches do not qualify.</span></li><li><strong>Measure and verify.</strong><span>Meet the species’ minimum length. A Game and Parks employee, permit vendor, witness, or photograph can verify the catch.</span></li><li><strong>Release promptly and apply.</strong><span>Only fish immediately released qualify by length. Use the official application to record the catch and submit your supporting details.</span></li></ol><p>Approved released fish receive a Master Angler certificate and a Catch and Release Master Angler pin. There is no annual limit on length-based awards.</p><a className="btn primary" href={links.master} target="_blank" rel="noreferrer">Open official application ↗</a></div><aside className="challenge-side"><p className="eyebrow">HARVESTED FISH</p><h2>Qualify by weight.</h2><p>A legally kept fish must meet the species’ minimum weight. Any fish placed in a livewell or on a stringer must meet the weight standard, even if released later.</p><p>Only one weight-based award per species per year is available to an angler. Check the water’s current harvest and possession rules before keeping a fish.</p><a className="btn secondary" href={links.guide} target="_blank" rel="noreferrer">Read 2026 fishing guide ↗</a></aside></section>
    <section className="section qualification-section alabama-size-section" id="sizes"><div className="section-heading"><p className="eyebrow">SELECT MASTER ANGLER MINIMUMS</p><h2>Know your target size.</h2><p>Length applies only to an immediately released fish; weight applies to a harvested fish. This is a selection of species. Check the complete, current Nebraska table before submitting.</p></div><div className="qualification-table-wrap alabama-table-wrap"><table><caption className="visually-hidden">Selected Nebraska Master Angler minimum sizes</caption><thead><tr><th scope="col">Species</th><th scope="col">Released length</th><th scope="col">Harvested weight</th></tr></thead><tbody>{examples.map(([species, length, weight]) => <tr key={species}><th scope="row">{species}</th><td>{length}</td><td>{weight}</td></tr>)}</tbody></table></div><div className="actions"><a className="btn primary" href={links.master} target="_blank" rel="noreferrer">View all official thresholds ↗</a></div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">THE APPLICATION</p><h2>Record the details while they’re fresh.</h2><p>Anglers 16 or older need a current Nebraska fishing permit and its number for the application. The catch must be verified; check the online form for every required field.</p></div><div className="card-grid"><article className="challenge-card"><span className="state-pill">1 · FISH</span><h3>Where and when</h3><p>Keep the water name, county, date, species, and bait or lure used.</p><a href={links.master} target="_blank" rel="noreferrer">Application fields ↗</a></article><article className="challenge-card"><span className="state-pill">2 · PROVE</span><h3>Size and evidence</h3><p>Record release length or harvested weight. The form asks where it was measured or weighed and for witness or photo details.</p><a href={links.master} target="_blank" rel="noreferrer">Verification rules ↗</a></article><article className="challenge-card"><span className="state-pill">3 · SEND</span><h3>Official submission</h3><p>Apply directly through Nebraska Game and Parks. Its form accepts a side-view fish photo and a photo with the angler.</p><a href={links.master} target="_blank" rel="noreferrer">Submit a Master Angler ↗</a></article></div></section>
    <section className="section final-cta challenge-final"><p className="eyebrow">READY TO PLAN?</p><h2>Choose a species. Know the standard.</h2><p>Use Nebraska Game and Parks to review waters, current regulations, every eligible species, and the award application before your trip.</p><div className="actions"><a className="btn primary" href={links.master} target="_blank" rel="noreferrer">Explore the official program ↗</a><a className="btn secondary" href={links.plan} target="_blank" rel="noreferrer">Plan a Nebraska trip ↗</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
