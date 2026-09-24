import type { Metadata } from "next";
import { appleMapSearch, checkedDate, checkedLabel, googleMapSearch, pausedLocations, seasonalLocations, sources, yearRoundLocations } from "./data";

export const metadata: Metadata = {
  title: "Oklahoma Winter Trout Stockings & Locations | Fish the Fifty",
  description: "Find Oklahoma winter trout stocking seasons, public access locations, map links, stocking alerts, and current ODWC regulations.",
};

export default function WinterTroutPage() {
  return (
    <>
      <a className="skip-link" href="#winter-trout-content">Skip to winter trout locations</a>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation">
            <a href="/states">States</a>
            <a href="/winter-trout" aria-current="page">Winter Trout</a>
            <a href="/#challenges">Challenges</a>
            <a href="/#progress">My Progress</a>
          </nav>
        </div>
      </header>

      <main id="winter-trout-content" className="river-guide">
        <section className="page-hero river-hero">
          <div className="page-hero-inner river-hero-grid">
            <div>
              <p className="eyebrow">FISH THE FIFTY · SEASONAL GUIDE</p>
              <h1>Winter trout in Oklahoma.</h1>
              <p className="lead">Find seasonal stocking windows, public access, and the latest ODWC status before you head out. Start close to Stillwater at Turtle Pond on Lake Carl Blackwell.</p>
              <div className="actions">
                <a className="btn primary" href="#seasonal-locations">Find a stocking location</a>
                <a className="btn secondary" href={sources.troutInformation.url}>ODWC trout updates ↗</a>
              </div>
            </div>
            <aside className="river-brief" aria-label="Winter trout at a glance">
              <p className="eyebrow">SEASON AT A GLANCE</p>
              <dl>
                <div><dt>Most seasonal waters</dt><dd>Nov. 1 – Mar. 31</dd></div>
                <div><dt>Stillwater area</dt><dd>Lake Carl Blackwell Turtle Pond</dd></div>
                <div><dt>Urban ponds</dt><dd>Dec. 1 – Feb. 28</dd></div>
                <div><dt>Last checked</dt><dd><time dateTime={checkedDate}>{checkedLabel}</time></dd></div>
              </dl>
              <a href={sources.troutAreas.url}>See ODWC area details <span aria-hidden="true">↗</span></a>
            </aside>
          </div>
        </section>

        <div className="guide-shell">
          <aside className="stocking-notice" aria-labelledby="stocking-status-heading">
            <p className="eyebrow">STOCKING STATUS · CHECK BEFORE YOU DRIVE</p>
            <h2 id="stocking-status-heading">Stocking dates can change.</h2>
            <p>ODWC says trout stockings are tentative and may change because of flooding, water temperatures, fish availability, road conditions, or other circumstances. The department posts recent stocking dates in weekly fishing reports.</p>
            <div className="resource-links">
              <a href={sources.troutInformation.url}>ODWC trout information ↗</a>
              <a href={sources.fishingReports.url}>Latest fishing reports ↗</a>
            </div>
          </aside>

          <nav className="guide-jump-links" aria-label="On this page">
            <a href="#seasonal-locations">Seasonal locations</a>
            <a href="#year-round">Year-round trout</a>
            <a href="#paused">Stocking alerts</a>
            <a href="#rules">Rules & fly tips</a>
          </nav>

          <section id="seasonal-locations" className="guide-section">
            <div className="guide-section-heading">
              <div><p className="eyebrow">01 / SEASONAL STOCKINGS</p><h2>Pick a place and check its dates.</h2></div>
              <a className="text-link" href={sources.troutAreas.url}>Official ODWC map and area rules ↗</a>
            </div>
            <p className="guide-intro">These are Oklahoma’s seasonal winter trout waters listed by ODWC. The date range is the stocking season, not a promise of a stocking on a particular day. Open the ODWC update links before traveling.</p>

            <article className="stocking-notice local-trout-feature">
              <div>
                <p className="eyebrow">CLOSEST FEATURED LOCATION · PAYNE COUNTY</p>
                <h3>Lake Carl Blackwell Turtle Pond</h3>
                <p>About 8 miles west of Stillwater. ODWC says the 2-acre pond is north of the Lake Carl Blackwell park office and that trout stockings from Perry CCC have been diverted here.</p>
                <p><strong>Season:</strong> November 1 – March 31 · <strong>Access:</strong> bank fishing</p>
                <p>Lake Carl Blackwell requires a daily or annual recreation permit, including for fishing. Check the lake’s current access and permit details before your trip.</p>
                <div className="resource-links">
                  <a href="/states/oklahoma/lake-carl-blackwell">Lake Carl Blackwell guide →</a>
                  <a href={sources.troutAreas.url}>ODWC Turtle Pond details ↗</a>
                </div>
              </div>
              <div className="map-links">
                <a href={googleMapSearch("Lake Carl Blackwell Turtle Pond Oklahoma")}>Google Maps ↗</a>
                <a href={appleMapSearch("Lake Carl Blackwell Turtle Pond Oklahoma")}>Apple Maps ↗</a>
              </div>
            </article>

            <div className="access-grid">
              {seasonalLocations.filter((location) => location.id !== "turtle-pond").map((location, index) => (
                <article className="access-card" key={location.id}>
                  <div className="access-card-top"><span className="state-pill">{location.season}</span><span className="access-number" aria-hidden="true">0{index + 1}</span></div>
                  <p className="eyebrow">{location.area}</p>
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <p className="access-note">{location.access}</p>
                  <div className="map-links">
                    <a href={googleMapSearch(location.mapQuery)} aria-label={`Search Google Maps for ${location.name}`}>Google Maps ↗</a>
                    <a href={appleMapSearch(location.mapQuery)} aria-label={`Search Apple Maps for ${location.name}`}>Apple Maps ↗</a>
                  </div>
                  <p className="source-note"><a href={location.source}>ODWC details ↗</a>{location.siteHref.startsWith("/") ? <> · <a href={location.siteHref}>Fish the Fifty guide →</a></> : null}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="year-round" className="guide-section">
            <p className="eyebrow">02 / YEAR-ROUND TROUT WATERS</p>
            <h2>These fisheries are not winter-only.</h2>
            <p className="guide-intro">The Lower Mountain Fork and Lower Illinois are listed as year-round trout fisheries. Current water conditions and stocking availability can still affect what is happening when you arrive.</p>
            <div className="condition-grid">
              {yearRoundLocations.map((location) => (
                <article className="condition-card" key={location.id}>
                  <span>{location.area}</span>
                  <h3>{location.name}</h3>
                  <p>{location.status}</p>
                  <div className="resource-links">
                    <a href={location.siteHref}>Fish the Fifty guide →</a>
                    {location.id === "lower-illinois" ? <a href={sources.lowerIllinois.url}>ODWC current status ↗</a> : <a href={sources.troutInformation.url}>ODWC stocking information ↗</a>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="paused" className="guide-section">
            <p className="eyebrow">03 / CURRENT STOCKING ALERTS</p>
            <h2>Not every historic site is active.</h2>
            <div className="rules-grid">
              {pausedLocations.map((location) => (
                <article className="rule-card special-rule" key={location.name}>
                  <span className="eyebrow">STOCKING PAUSED</span>
                  <h3>{location.name}</h3>
                  <p>{location.status}</p>
                  <a className="text-link" href={sources.troutInformation.url}>Recheck ODWC status ↗</a>
                </article>
              ))}
              <article className="rule-card special-rule">
                <span className="eyebrow">LOWER ILLINOIS UPDATE</span>
                <h3>Temporary stocking suspension</h3>
                <p>ODWC currently reports a temporary suspension on the Lower Illinois River. The river remains a year-round trout fishery, but verify the latest report and water conditions before making the drive for trout.</p>
                <a className="text-link" href={sources.lowerIllinois.url}>Read the current ODWC update ↗</a>
              </article>
            </div>
          </section>

          <section id="rules" className="guide-section fishing-grid">
            <div>
              <p className="eyebrow">04 / RULES & FLY TIPS</p>
              <h2>Match your setup to the water.</h2>
              <p className="guide-intro">ODWC’s trout tips recommend light tackle, small hooks, and flies, small spinners, or jigs. Some areas require artificial lures and barbless hooks, and municipal ponds may have extra permit rules.</p>
              <div className="tackle-note">
                <h3>A simple fly-fishing start</h3>
                <p>Bring small nymphs and midge patterns for slow winter water, plus an olive bead-head Woolly Bugger. ODWC’s trout guide suggests a size 6–8 olive bead-head Woolly Bugger as a useful starting fly for Oklahoma trout waters.</p>
                <a className="text-link" href={sources.flyTips.url}>Read ODWC trout fishing tips ↗</a>
              </div>
            </div>
            <div className="rules-grid rules-grid-single">
              <article className="rule-card special-rule">
                <span className="eyebrow">BEFORE YOU FISH</span>
                <h3>Check the site-specific rules</h3>
                <p>Most state-designated trout areas have a three-trout daily limit, but special sections of Blue River, Lower Illinois River, and Lower Mountain Fork have different rules. Oklahoma City and Jenks ponds also have local requirements.</p>
                <div className="resource-links"><a href={sources.troutRegulations.url}>ODWC trout regulations ↗</a><a href={sources.closeToHome.url}>Close to Home rules ↗</a><a href={sources.license.url}>Fishing license ↗</a></div>
              </article>
            </div>
          </section>

          <section className="guide-section source-section">
            <div><p className="eyebrow">OFFICIAL SOURCES</p><h2>Check for changes before the trip.</h2><p>Guide checked <time dateTime={checkedDate}>{checkedLabel}</time>. Stocking dates, water conditions, access, and local permits can change during the season.</p></div>
            <ul>{[sources.troutInformation, sources.troutAreas, sources.troutRegulations, sources.fishingReports, sources.closeToHome].map((source) => <li key={source.url}><a href={source.url}>{source.label} <span aria-hidden="true">↗</span></a></li>)}</ul>
          </section>

          <div className="guide-return"><a className="btn primary" href="/states/oklahoma">← Back to Oklahoma</a><a className="text-link" href="/states">Explore all 50 states →</a></div>
        </div>
      </main>
      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </>
  );
}
