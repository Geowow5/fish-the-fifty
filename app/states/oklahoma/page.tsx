import type { Metadata } from "next";
import { checkedDate, checkedLabel, guidePath, sources } from "./lower-illinois-river/guide-data";
import { guidePath as mountainForkPath } from "./lower-mountain-fork/guide-data";

export const metadata: Metadata = {
  title: "Oklahoma Fishing Guide | Fish the Fifty",
  description: "Explore Oklahoma fishing waters, the Lower Illinois River access guide, and official angler recognition and licensing resources.",
};

const waters = [
  { name: "Lower Illinois River", detail: "A tailwater below Lake Tenkiller near Gore. Explore public access, map links, stocking updates, and river conditions.", href: guidePath },
  { name: "Blue River", detail: "A scenic public fishing area known for seasonal trout and warmwater fishing." },
  { name: "Lake Texoma", detail: "One of the country’s best-known inland striped bass fisheries." },
  { name: "Sooner Lake", detail: "A productive warmwater lake for striped bass hybrids, catfish, drum, and white bass." },
  { name: "Lower Mountain Fork River", detail: "A year-round cold-water trout area below Broken Bow Lake, with access through Beavers Bend State Park.", href: mountainForkPath }
];

export default function OklahomaPage() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <div className="breadcrumb"><a href="/states">← All States</a></div>
      <section className="page-hero state-detail-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">STATE GUIDE 01</p>
          <h1>Fish Oklahoma.</h1>
          <p className="lead">From cold-water trout tailwaters to prairie reservoirs and rivers full of bass, catfish, and freshwater drum, Oklahoma offers more variety than many traveling anglers expect.</p>
          <div className="state-facts"><span>South Central</span><span>200+ lakes</span><span>Trout to trophy stripers</span><span>Year-round fishing</span></div>
        </div>
      </section>

      <section className="section detail-grid">
        <article className="detail-panel">
          <p className="eyebrow">START HERE</p>
          <h2>Featured public waters</h2>
          <p>Start with the Lower Illinois River guide for public access, maps, and trip-planning resources. More detailed water guides are in development.</p>
          <div className="water-cards">
            {waters.map((water) => <div className={`water-card${water.href ? " water-card-live" : ""}`} key={water.name}><strong>{water.name}</strong><span>{water.detail}</span>{water.href ? <a className="water-guide-link" href={water.href}>Open river guide →</a> : <small className="water-guide-pending">Detailed guide coming soon</small>}</div>)}
          </div>
          <div className="state-stocking-note"><strong>Lower Illinois stocking update</strong><p>ODWC lists a temporary trout stocking suspension. Checked <time dateTime={checkedDate}>{checkedLabel}</time>.</p><a className="text-link" href={sources.area.url}>Read the latest ODWC notice ↗</a></div>
        </article>

        <aside className="detail-panel">
          <p className="eyebrow">WHAT YOU CAN CATCH</p>
          <h2>Featured species</h2>
          <div className="species-list">
            {["Largemouth Bass", "Smallmouth Bass", "Striped Bass", "Hybrid Striped Bass", "Rainbow Trout", "Brown Trout", "Crappie", "Blue Catfish", "Freshwater Drum", "White Bass", "Walleye", "Paddlefish"].map((species) => <span key={species}>{species}</span>)}
          </div>
          <div className="challenge-callout">
            <p className="eyebrow">OFFICIAL PROGRAM</p>
            <h3>Oklahoma Angler Recognition</h3>
            <p>Qualifying catches can earn Trophy Angler awards. Master Angler recognition requires five approved trophy awards, with no more than two from one species.</p>
            <a href="/states/oklahoma/challenge">Track your challenge →</a><br />
            <a href={sources.recognition.url}>See eligibility & apply ↗</a>
          </div>
          <a className="back-link" href={sources.license.url}>Oklahoma fishing licenses ↗</a><br />
          <a className="back-link" href="/states">Explore all 50 states →</a>
        </aside>
      </section>

      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </main>
  );
}
