import type { Metadata } from "next";
import { seasonalLocations, sources as troutSources } from "../../winter-trout/data";
import { checkedDate, checkedLabel, guidePath, sources } from "./lower-illinois-river/guide-data";
import { guidePath as mountainForkPath } from "./lower-mountain-fork/guide-data";
import { guidePath as soonerLakePath } from "./sooner-lake/guide-data";
import { guidePath as texomaPath } from "./lake-texoma/guide-data";
import { guidePath as blueRiverPath } from "./blue-river/guide-data";
import { guidePath as hefnerPath } from "./lake-hefner/guide-data";
import { guidePath as carlBlackwellPath } from "./lake-carl-blackwell/guide-data";

export const metadata: Metadata = {
  title: "Oklahoma Fishing Guide | Fish the Fifty",
  description: "Explore Oklahoma fishing waters, winter trout stocking locations and seasons, public access guides, and official angler recognition resources.",
};

const waters = [
  { name: "Lower Illinois River", detail: "A tailwater below Lake Tenkiller near Gore. Explore public access, map links, stocking updates, and river conditions.", href: guidePath },
  { name: "Blue River", detail: "A 3,367-acre public fishing area with 6.25 wadable stream miles, seasonal rainbow trout, bass, and channel catfish.", href: blueRiverPath },
  { name: "Lake Hefner", detail: "A 2,500-acre Oklahoma City lake with drive-up shoreline access, docks, a lighted pier, and annually stocked walleye and hybrid striped bass.", href: hefnerPath },
  { name: "Lake Carl Blackwell", detail: "An OSU-operated Stillwater reservoir with Ski Point and Blackjack Cove ramps, public recreational shoreline, and flexible bass, panfish, catfish, and saugeye water.", href: carlBlackwellPath },
  { name: "Lake Texoma", detail: "An 88,000-acre border reservoir and one of the country’s best-known inland striped bass fisheries.", href: texomaPath },
  { name: "Sooner Lake", detail: "A 5,400-acre reservoir with hybrid striped bass, saugeye, catfish, crappie, and two OG&E-managed boat ramps.", href: soonerLakePath },
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
          <div className="actions"><a className="btn primary" href="#winter-trout">Winter trout fishing ↓</a><a className="btn secondary" href="/winter-trout">Stocking locations &amp; maps →</a></div>
        </div>
      </section>

      <section className="section" id="winter-trout" aria-labelledby="winter-trout-heading">
        <div className="section-heading">
          <p className="eyebrow">NOVEMBER THROUGH EARLY SPRING</p>
          <h2 id="winter-trout-heading">Winter trout fishing in Oklahoma.</h2>
          <p>Cold weather brings seasonal rainbow trout stockings to Oklahoma streams and park ponds. Many areas start in November; Oklahoma City and Jenks ponds start in December. These are published stocking seasons, not guaranteed delivery dates—check recent reports before traveling.</p>
        </div>
        <div className="actions"><a className="btn primary" href="/winter-trout">Open the winter trout guide →</a><a className="btn secondary" href={troutSources.fishingReports.url} target="_blank" rel="noreferrer">Latest ODWC fishing reports ↗</a></div>
        <div className="card-grid">
          {seasonalLocations.map((location) => <article className="challenge-card" key={location.id}>
            <span className="state-pill">{location.season}</span>
            <h3>{location.name}</h3>
            <p>{location.area}</p>
            <a href={`/winter-trout#${location.id}`}>Access details &amp; map links →</a>
          </article>)}
        </div>
        <div className="state-stocking-note"><strong>Start near Stillwater: Turtle Pond</strong><p>ODWC lists Lake Carl Blackwell’s Turtle Pond for November 1–March 31 stockings. It is about eight miles west of Stillwater; check the park’s recreation permit requirements.</p><a className="text-link" href="/winter-trout#turtle-pond">Plan a Turtle Pond visit →</a></div>
        <div className="detail-grid">
          <article className="detail-panel"><p className="eyebrow">FISHING TIPS &amp; RULES</p><h3>Keep your winter setup simple.</h3><p>Bring small nymphs, midges, and an olive Woolly Bugger for fly fishing. With spinning tackle, use light line and small lures or permitted bait. Fish slowly and adjust depth until you find feeding trout.</p><p>Use the current rules for your exact water. Some reaches require artificial flies or lures and barbless hooks; urban trout ponds allow bank fishing only. State licenses and local permits may apply.</p><a className="text-link" href="/winter-trout#rules">See trout rules &amp; fly tips →</a></article>
          <aside className="detail-panel"><p className="eyebrow">CHECK BEFORE YOU GO</p><h3>Stocking alerts and year-round options.</h3><p>Lower Mountain Fork is a year-round trout option. ODWC currently reports suspended stocking on the Lower Illinois River and at Lake Watonga, with Lake Boecher also paused.</p><p>Stockings can change with temperature, flooding, fish availability, and equipment. Information verified September 29, 2026; check ODWC’s latest notice before each trip.</p><a className="text-link" href="/winter-trout#paused">View stocking alerts →</a><br /><a className="text-link" href={troutSources.troutInformation.url} target="_blank" rel="noreferrer">Official ODWC trout updates ↗</a></aside>
        </div>
      </section>

      <section className="section detail-grid">
        <article className="detail-panel">
          <p className="eyebrow">START HERE</p>
          <h2>Featured public waters</h2>
          <p>Start with the completed water guides for public access, maps, current rules, and trip-planning resources. More Oklahoma waters are in development.</p>
          <div className="water-cards">
            {waters.map((water) => <div className={`water-card${water.href ? " water-card-live" : ""}`} key={water.name}><strong>{water.name}</strong><span>{water.detail}</span>{water.href ? <a className="water-guide-link" href={water.href}>Open water guide →</a> : <small className="water-guide-pending">Detailed guide coming soon</small>}</div>)}
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
