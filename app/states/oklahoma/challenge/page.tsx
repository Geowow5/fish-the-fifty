import type { Metadata } from "next";
import MasterAnglerTracker from "./tracker";
import { guidePath as illinoisPath } from "../lower-illinois-river/guide-data";
import { guidePath as mountainForkPath } from "../lower-mountain-fork/guide-data";

export const metadata: Metadata = {
  title: "Oklahoma Master Angler Challenge | Fish the Fifty",
  description: "Track five Trophy Angler awards toward Oklahoma Master Angler recognition and review the current ODWC submission requirements.",
};

const qualifyingSpecies = [
  ["Largemouth bass", 23], ["Smallmouth bass", 20], ["Spotted bass", 18], ["Striped bass", 34],
  ["White bass", 19], ["Striped/white hybrid", 28], ["Channel catfish", 34], ["Blue catfish", 41],
  ["Flathead catfish", 42], ["Black/white crappie", 15], ["Sauger", 19], ["Walleye", 26],
  ["Saugeye", 25], ["Sunfish (all species)", 9], ["Rainbow trout", 20], ["Brown trout", 21]
] as const;

const sources = {
  recognition: "https://wildlifedepartment.com/fishing/angler-recognition",
  license: "https://gooutdoorsoklahoma.com/",
};

export default function OklahomaChallengePage() {
  return (
    <main>
      <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav></div></header>
      <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states/oklahoma">Oklahoma</a><span aria-hidden="true"> / </span><span>Challenge</span></div>
      <section className="page-hero challenge-hero"><div className="page-hero-inner"><p className="eyebrow">OKLAHOMA · OFFICIAL PROGRAM</p><h1>Become a<br />Master Angler.</h1><p className="lead">Build five approved Trophy Angler awards from Oklahoma waters, then submit for Master Angler recognition through Oklahoma Wildlife.</p><div className="state-facts"><span>5 Trophy Awards</span><span>All ages welcome</span><span>Residents & nonresidents</span><span>Max 2 per species</span></div></div></section>

      <section className="section challenge-layout">
        <div><MasterAnglerTracker /><div className="challenge-note"><strong>Planning tool only.</strong><p>Your selections are stored locally in this browser. Fish the Fifty does not verify catches or submit applications.</p></div></div>
        <aside className="challenge-side"><p className="eyebrow">HOW IT WORKS</p><h2>Catch. Document. Apply.</h2><ol className="challenge-steps"><li><strong>Catch an eligible fish.</strong><span>It must meet the current minimum length and be caught in Oklahoma waters under Oklahoma regulations.</span></li><li><strong>Document it clearly.</strong><span>Measure on a flat surface with mouth closed and tail lobes together. Include a clear side photo with the measuring device.</span></li><li><strong>Apply within 30 days.</strong><span>ODWC reviews Trophy Angler applications. Keep your certificates for the Master Angler submission.</span></li><li><strong>Submit five certificates.</strong><span>Master Angler requires five approved Trophy awards, with no more than two from one species.</span></li></ol><a className="btn primary" href={sources.recognition}>Read ODWC requirements ↗</a></aside>
      </section>

      <section className="section qualification-section"><div className="section-heading"><p className="eyebrow">CURRENT LENGTH TABLE</p><h2>Know the target.</h2><p>These are the minimum lengths listed on ODWC’s current Angler Recognition page. Confirm the official table before submitting an application.</p></div><div className="qualification-table-wrap"><table><thead><tr><th scope="col">Eligible species</th><th scope="col">Minimum length</th></tr></thead><tbody>{qualifyingSpecies.map(([species, length]) => <tr key={species}><th scope="row">{species}</th><td>{length}&quot;</td></tr>)}</tbody></table></div></section>

      <section className="section challenge-waters"><div className="section-heading"><p className="eyebrow">FISH THE FIFTY STARTING WATERS</p><h2>Start with Oklahoma’s trout rivers.</h2><p>Use the two completed Fish the Fifty water guides to plan a trout trip, then document any qualifying catch according to ODWC’s rules.</p></div><div className="card-grid"><article className="challenge-card compact"><span className="state-pill">GORE · TAILWATER</span><h3>Lower Illinois River</h3><p>Review access, current stocking notices, reach rules, and river-condition links.</p><a href={illinoisPath}>Open river guide →</a></article><article className="challenge-card compact"><span className="state-pill">BROKEN BOW · TROUT</span><h3>Lower Mountain Fork</h3><p>Plan access through Beavers Bend, check stocking guidance, and review area limits.</p><a href={mountainForkPath}>Open river guide →</a></article></div></section>

      <section className="section final-cta challenge-final"><p className="eyebrow">READY TO SUBMIT?</p><h2>Keep the official page bookmarked.</h2><p>ODWC controls eligibility, application review, and award decisions. Check the current requirements, get an Oklahoma license if needed, and submit directly through the department.</p><div className="actions"><a className="btn primary" href={sources.recognition}>ODWC Angler Recognition ↗</a><a className="btn secondary" href={sources.license}>Get a fishing license ↗</a></div></section>
      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </main>
  );
}
