import type { Metadata } from "next";
import MissouriSlamTracker from "./tracker";
import { blueRibbonWaters } from "./waters";

export const metadata: Metadata = {
  title: "Missouri Blue Ribbon Trout Slam | Fish the Fifty",
  description: "Plan Missouri’s official Blue Ribbon Trout Slam across all nine streams, check current MDC reaches and rules, and track your catches.",
};

const links = {
  program: "https://mdc.mo.gov/fishing/trophies-certificates/blue-ribbon-trout-slam",
  areas: "https://mdc.mo.gov/fishing/species/trout/trout-areas",
  entry: "https://mdc.mo.gov/fishing/trophies-certificates/blue-ribbon-trout-slam/blue-ribbon-trout-slam-entry-form",
  seasons: "https://mdc.mo.gov/fishing/regulations",
};

const awards = [
  { name: "Bronze", count: 5, detail: "Catch a trout from any 5 of the 9 Blue Ribbon Trout Areas. MDC awards a certificate and bronze pin." },
  { name: "Silver", count: 7, detail: "Catch a trout from any 7 of the 9 areas. MDC awards a certificate and silver pin." },
  { name: "Gold", count: 9, detail: "Catch a trout from all 9 areas. MDC awards a certificate, gold pin, and medallion." },
];

export default function MissouriBlueRibbonSlamPage() {
  return (
    <main className="missouri-page">
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/members">My Progress</a></nav>
        </div>
      </header>

      <div className="missouri-breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>Missouri</span><span aria-hidden="true"> / </span><span>Blue Ribbon Trout Slam</span></div>

      <section className="missouri-hero">
        <div className="missouri-hero-inner">
          <p className="missouri-kicker">MISSOURI · OFFICIAL MDC TROUT CHALLENGE</p>
          <h1>Missouri Blue Ribbon<br /><em>Trout Slam</em></h1>
          <p className="missouri-lead">Find a trout in each stream’s Blue Ribbon reach. Missouri’s official challenge has nine qualifying waters and three recognition levels.</p>
          <div className="missouri-facts"><span>9 Blue Ribbon waters</span><span>5 / 7 / 9 catch milestones</span><span>Legal methods per stream rules</span></div>
          <div className="missouri-actions">
            <a className="missouri-button is-bright" href={links.program} target="_blank" rel="noreferrer">Read MDC slam rules ↗</a>
            <a className="missouri-button is-outline" href="#waters">Explore all nine streams ↓</a>
          </div>
        </div>
      </section>

      <section className="missouri-section missouri-awards" aria-labelledby="missouri-awards-heading">
        <div className="missouri-section-heading"><p className="missouri-kicker">THREE LEVELS</p><h2 id="missouri-awards-heading">Build your slam, one stream at a time.</h2><p>You can earn the levels as your total grows. The Missouri Department of Conservation recognizes first-time achievers at Bronze, Silver, and Gold.</p></div>
        <div className="missouri-award-grid">{awards.map((award) => <article className="missouri-award" key={award.name}><span>{award.name}</span><strong>{award.count}<small> / 9 streams</small></strong><p>{award.detail}</p></article>)}</div>
      </section>

      <section className="missouri-section missouri-tracker-section" aria-labelledby="missouri-tracker-heading">
        <div className="missouri-section-heading"><p className="missouri-kicker">YOUR TRIP CHECKLIST</p><h2 id="missouri-tracker-heading">Keep your catches together.</h2><p>Record a catch date and notes for each stream. The checklist saves in this browser only; submit your catches separately through MDC’s official entry form.</p></div>
        <MissouriSlamTracker />
      </section>

      <section className="missouri-section missouri-waters" id="waters" aria-labelledby="missouri-waters-heading">
        <div className="missouri-section-heading"><p className="missouri-kicker">THE NINE QUALIFYING REACHES</p><h2 id="missouri-waters-heading">Plan by stream.</h2><p>Each card names the qualifying Blue Ribbon reach as MDC currently describes it. Use the official stream page for its boundary map, access information, and current water-specific rules before you go.</p></div>
        <div className="missouri-water-grid">{blueRibbonWaters.map((water, index) => <article className="missouri-water-card" key={water.slug}>
          <div className="missouri-water-top"><span className="missouri-water-number">{String(index + 1).padStart(2, "0")}</span><span className="missouri-county">{water.county}</span></div>
          <h3>{water.name}</h3>
          <p className="missouri-reach-label">QUALIFYING REACH</p><p>{water.reach}</p>
          {water.accessNote && <p className="missouri-access-note"><strong>Access note:</strong> {water.accessNote}</p>}
          <a href={water.regulationUrl} target="_blank" rel="noreferrer">MDC reach, map &amp; rules ↗</a>
        </article>)}</div>
      </section>

      <section className="missouri-section missouri-rules" aria-labelledby="missouri-rules-heading">
        <div className="missouri-section-heading"><p className="missouri-kicker">BEFORE YOU FISH</p><h2 id="missouri-rules-heading">Know the rules and protect access.</h2></div>
        <div className="missouri-rules-grid">
          <article><h3>Qualifying catches</h3><p>MDC accepts trout of any size caught after January 1, 2020, using legal methods under the Missouri Wildlife Code. Submit all of your qualifying catches, not only the catch that reaches a new award level.</p></article>
          <article><h3>Blue Ribbon regulations</h3><p>These reaches generally have an 18-inch minimum length and a one-trout daily limit. Only flies and artificial lures are allowed; soft plastics, natural bait, and scented bait are prohibited. Check each stream’s current regulations.</p></article>
          <article><h3>Wader and land access</h3><p>Porous-soled waders are prohibited on these streams. Some banks and reaches cross private land. Enter only at public access points or with landowner permission, and never trespass.</p></article>
        </div>
        <div className="missouri-bottom-actions"><a className="missouri-button is-bright" href={links.entry} target="_blank" rel="noreferrer">Enter catches with MDC ↗</a><a className="missouri-text-link" href={links.areas} target="_blank" rel="noreferrer">Open MDC trout-area directory ↗</a><a className="missouri-text-link" href={links.seasons} target="_blank" rel="noreferrer">Check current regulations ↗</a></div>
        <p className="missouri-disclaimer">Fish the Fifty is an independent planning and tracking guide. It does not issue MDC awards or submit your catches. MDC pages control if rules, boundaries, access, or season dates change.</p>
      </section>

      <footer className="missouri-footer"><a href="/states">← Back to all states</a><strong>FISH THE FIFTY</strong></footer>
    </main>
  );
}
