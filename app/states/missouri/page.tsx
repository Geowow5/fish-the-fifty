import type { Metadata } from "next";
import { checkedDate, checkedLabel, missouriSources, missouriWaters, tripClusters } from "./guides";

export const metadata: Metadata = {
  title: "Missouri Fishing Guide | Blue Ribbon Trout Slam | Fish the Fifty",
  description: "Explore all nine Missouri Blue Ribbon Trout Slam waters with individual access, fishing, camping, map, and regulation guides.",
};

export default function MissouriPage() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <div className="breadcrumb"><a href="/states">← All States</a></div>
      <nav className="state-guide-tabs" aria-label="Missouri guide pages">
        <a href="/states/missouri" aria-current="page">Fishing Waters</a>
        <a href="/states/missouri/challenge">Blue Ribbon Trout Slam</a>
      </nav>

      <section className="page-hero state-detail-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">STATE GUIDE 02 · MISSOURI OZARKS</p>
          <h1>Fish Missouri.</h1>
          <p className="lead">Nine Blue Ribbon Trout Areas make up Missouri’s trout challenge. Open a water guide for the qualifying reach, public access, fishing approach, overnight options, current rules, and official maps.</p>
          <div className="state-facts"><span>9 eligible waters</span><span>5 / 7 / 9 stream levels</span><span>Wild trout water</span><span>Guides checked <time dateTime={checkedDate}>{checkedLabel}</time></span></div>
          <div className="actions"><a className="btn primary" href="/states/missouri/challenge">Open the Slam tracker</a><a className="btn secondary" href="#waters">Browse all nine guides</a></div>
        </div>
      </section>

      <section className="section" id="waters">
        <div className="section-heading">
          <p className="eyebrow">ALL NINE QUALIFYING WATERS</p>
          <h2>Choose a stream. Check the boundary.</h2>
          <p>The official boundary map matters: nearby reaches can have different rules, and some stream banks are private. Each guide separates the Slam water from adjacent trout areas.</p>
        </div>
        <div className="directory-grid">
          {missouriWaters.map((water) => (
            <article className="state-card featured" key={water.slug}>
              <div className="state-card-top"><span className="state-pill">{water.number} · {water.region}</span><span className="status-pill live">GUIDE LIVE</span></div>
              <h2>{water.name}</h2>
              <p><strong>{water.county}</strong> · {water.miles}<br />{water.qualifyingReach}</p>
              <p>{water.summary}</p>
              <a className="card-link" href={`/states/missouri/${water.slug}`}>Open complete guide →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">PLAN BY REGION</p>
          <h2>Build a trip around nearby waters.</h2>
          <p>These are regional clusters, not fixed itineraries. Check road, access, and river conditions before combining stops.</p>
        </div>
        <div className="access-grid">
          {tripClusters.map((cluster) => (
            <article className="access-card" key={cluster.title}>
              <div className="access-card-top"><span className="state-pill">TRIP CLUSTER</span><span className="access-number" aria-hidden="true">{cluster.slugs.length}</span></div>
              <h3>{cluster.title}</h3>
              <p>{cluster.detail}</p>
              <div className="resource-links">
                {cluster.slugs.map((slug) => {
                  const water = missouriWaters.find((item) => item.slug === slug);
                  return water ? <a href={`/states/missouri/${water.slug}`} key={slug}>{water.name} guide →</a> : null;
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">START WITH THE RULES</p><h2>Know what counts—and what must be released.</h2></div>
        <div className="rules-grid">
          <article className="rule-card special-rule"><span className="eyebrow">BLUE RIBBON AREAS</span><h3>Artificial tackle only</h3><p>In all nine Blue Ribbon reaches, only artificial lures and flies are authorized. Soft plastic, natural, and scented baits are prohibited for any species. The trout limit is one fish at least 18 inches long.</p><a className="text-link" href={missouriSources.slam.url}>Read the MDC Slam rules ↗</a></article>
          <article className="rule-card"><span className="eyebrow">SLAM QUALIFICATION</span><h3>Any size can count</h3><p>MDC says a legally caught trout of any size can qualify for the Slam, but trout under 18 inches must be released. Record each water and catch date, then submit all qualifying catches to MDC.</p><a className="text-link" href={missouriSources.entry.url}>Open the official entry form ↗</a></article>
          <article className="rule-card"><span className="eyebrow">STREAM HEALTH</span><h3>No porous-soled waders</h3><p>Porous-soled waders are prohibited on these trout waters to limit the spread of didymo. Clean and dry waders, boots, boats, and tackle between waters.</p><a className="text-link" href={missouriSources.waders.url}>Check the MDC wader restrictions ↗</a></article>
          <article className="rule-card"><span className="eyebrow">ACCESS</span><h3>Use public access</h3><p>Enter at designated public access or get permission where required. Streambed and bank access can have different rules; stay off private banks and follow posted boundaries.</p><a className="text-link" href={missouriSources.privateWater.url}>Read MDC stream access guidance ↗</a></article>
        </div>
      </section>

      <section className="section final-cta">
        <p className="eyebrow">MISSOURI BLUE RIBBON TROUT SLAM</p>
        <h2>Five streams start the challenge. Nine complete it.</h2>
        <p>Bronze takes five areas, Silver takes seven, and Gold takes all nine. Track catches privately in your browser, then submit them through MDC’s official entry form.</p>
        <a className="btn primary" href="/states/missouri/challenge">Track your Missouri Slam</a>
      </section>

      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </main>
  );
}
