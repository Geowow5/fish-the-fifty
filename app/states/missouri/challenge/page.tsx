import type { Metadata } from "next";
import MissouriSlamTracker from "./tracker";
import { checkedDate, checkedLabel, missouriSources, missouriWaters } from "../guides";

export const metadata: Metadata = {
  title: "Missouri Blue Ribbon Trout Slam | Fish the Fifty",
  description: "Plan for Bronze, Silver, or Gold in the Missouri Blue Ribbon Trout Slam. Review the official rules and track all nine qualifying streams.",
};

export default function MissouriChallengePage() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states/missouri">Missouri</a></div>
      <nav className="state-guide-tabs" aria-label="Missouri guide pages">
        <a href="/states/missouri">Fishing Waters</a>
        <a href="/states/missouri/challenge" aria-current="page">Blue Ribbon Trout Slam</a>
      </nav>

      <section className="page-hero challenge-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">MISSOURI · MDC + TROUT UNLIMITED</p>
          <h1>Fish the Blue Ribbon Trout Slam.</h1>
          <p className="lead">Catch a trout in five, seven, or all nine Blue Ribbon Trout Areas. Use the tracker for your own planning, then submit every qualifying catch through MDC’s official form.</p>
          <div className="actions"><a className="btn primary" href="#tracker">Track my waters</a><a className="btn secondary" href={missouriSources.slam.url}>Official Slam details ↗</a></div>
        </div>
      </section>

      <section className="section" id="tracker">
        <div className="section-heading">
          <p className="eyebrow">5 / 7 / 9 WATERS</p>
          <h2>Track your own progress.</h2>
          <p>Any-size trout can qualify when caught legally in a listed Blue Ribbon area. Trout under 18 inches must be released.</p>
        </div>
        <MissouriSlamTracker waters={missouriWaters} />
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">OFFICIAL LEVELS</p><h2>Three milestones. Nine streams.</h2></div>
        <div className="card-grid">
          <article className="challenge-card compact"><span className="state-pill">BRONZE · 5 / 9</span><h3>Start the Slam</h3><p>Catch a trout from five different Blue Ribbon Trout Areas. MDC awards a certificate and bronze pin.</p></article>
          <article className="challenge-card compact"><span className="state-pill">SILVER · 7 / 9</span><h3>Fish seven waters</h3><p>Catch a trout from seven different areas. MDC awards a certificate and silver pin.</p></article>
          <article className="challenge-card compact"><span className="state-pill">GOLD · 9 / 9</span><h3>Complete all nine</h3><p>Catch a trout from every listed Blue Ribbon Trout Area. MDC awards a certificate, gold pin, and medallion.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">BEFORE YOU SUBMIT</p><h2>Record the catch. Check the current rule.</h2></div>
        <div className="rules-grid">
          <article className="rule-card special-rule"><h3>Use this tracker for planning</h3><p>Your checklist is saved in this browser and is not sent to the Conservation Department. It is separate from MDC’s official entry form.</p></article>
          <article className="rule-card"><h3>Submit all qualifying catches</h3><p>MDC asks anglers to report all catches, not just the last fish that earns a level. The entry form says angler information is shared with Trout Unlimited.</p><a className="text-link" href={missouriSources.entry.url}>Open MDC’s entry form ↗</a></article>
          <article className="rule-card"><h3>Follow each water’s rules</h3><p>Blue Ribbon areas allow artificial lures and flies only. The daily limit is one trout, with an 18-inch minimum for harvest. Soft plastics, natural bait, and scented bait are prohibited for any species.</p><a className="text-link" href={missouriSources.waders.url}>Review the porous-soled wader ban ↗</a></article>
          <article className="rule-card"><h3>Respect stream access</h3><p>Use a named public access or get landowner permission where required. Each water guide links its area map and flags restricted reaches.</p><a className="text-link" href={missouriSources.privateWater.url}>MDC stream access guidance ↗</a></article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">THE NINE WATERS</p><h2>Open a complete water guide.</h2><p>Each guide includes the eligible reach, public access notes, a map, fishing approach, seasonal guidance, and official links.</p></div>
        <div className="states-grid missouri-water-links">
          {missouriWaters.map((water) => <a href={`/states/missouri/${water.slug}`} key={water.slug}>{water.name}</a>)}
        </div>
      </section>

      <section className="section source-section">
        <div><p className="eyebrow">OFFICIAL SOURCES</p><h2>Verify before each trip.</h2><p>Missouri rules, access, and conditions can change. These guides were checked <time dateTime={checkedDate}>{checkedLabel}</time>; use MDC’s live pages before fishing.</p></div>
        <ul>
          {[missouriSources.slam, missouriSources.entry, missouriSources.permits, missouriSources.waders, missouriSources.privateWater].map((source) => <li key={source.url}><a href={source.url}>{source.label} <span aria-hidden="true">↗</span></a></li>)}
        </ul>
      </section>

      <div className="guide-return"><a className="btn primary" href="/states/missouri">← Back to Missouri</a><a className="text-link" href="/states">Explore all 50 states →</a></div>
      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </main>
  );
}
