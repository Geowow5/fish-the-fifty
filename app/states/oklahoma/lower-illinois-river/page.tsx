import type { Metadata } from "next";
import { accessAreas, appleMapSearch, checkedDate, checkedLabel, googleMapSearch, sources } from "./guide-data";

export const metadata: Metadata = {
  title: "Lower Illinois River Fishing Guide | Fish the Fifty",
  description: "Plan a Lower Illinois River fishing trip near Gore, Oklahoma: public access, map searches, trout stocking notices, river conditions, and official rules.",
};

export default function LowerIllinoisPage() {
  return (
    <>
      <a className="skip-link" href="#guide-content">Skip to river guide</a>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation"><a href="/states">States</a><a href="/winter-trout">Winter Trout</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <main id="guide-content" className="river-guide">
        <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states/oklahoma">Oklahoma</a><span aria-hidden="true"> / </span><span>Lower Illinois</span></div>
        <section className="page-hero river-hero">
          <div className="page-hero-inner river-hero-grid">
            <div>
              <p className="eyebrow">OKLAHOMA · WATER GUIDE 01</p>
              <h1>Lower Illinois<br />River.</h1>
              <p className="lead">A tailwater adventure below Lake Tenkiller. Find a public access area, check the river, and plan your day near Gore.</p>
              <div className="actions"><a className="btn primary" href="#access">Find public access</a><a className="btn secondary" href="#conditions">Check conditions</a></div>
            </div>
            <aside className="river-brief" aria-label="River at a glance">
              <p className="eyebrow">AT A GLANCE</p>
              <dl>
                <div><dt>Where</dt><dd>Gore, Oklahoma</dd></div>
                <div><dt>Designated trout reach</dt><dd>7.75 miles</dd></div>
                <div><dt>Reach boundaries</dt><dd>Tenkiller Dam → US 64</dd></div>
                <div><dt>Access in this guide</dt><dd>{accessAreas.length} public areas</dd></div>
              </dl>
              <a href={sources.troutAreas.url}>ODWC area information <span aria-hidden="true">↗</span></a>
            </aside>
          </div>
        </section>

        <div className="guide-shell">
          <aside className="stocking-notice" aria-labelledby="stocking-heading">
            <p className="eyebrow">TRIP PLANNING UPDATE · <time dateTime={checkedDate}>{checkedLabel}</time></p>
            <h2 id="stocking-heading">Trout stocking temporarily suspended</h2>
            <p>ODWC lists a temporary stocking suspension because of hatchery fish availability. This notice concerns stocking, not a river closure. Check the agency’s latest update before making a trout-focused trip.</p>
            <a className="text-link" href={sources.area.url}>Read the current ODWC notice <span aria-hidden="true">↗</span></a>
          </aside>

          <nav className="guide-jump-links" aria-label="On this page"><a href="#access">Access & maps</a><a href="#conditions">River conditions</a><a href="#fishing">Species & seasons</a><a href="#rules">Licenses & rules</a><a href="#sources">Sources</a></nav>

          <section id="access" className="guide-section">
            <div className="guide-section-heading">
              <div><p className="eyebrow">01 / GET TO THE WATER</p><h2>Choose your access.</h2></div>
              <a className="text-link" href={sources.wattsMap.url}>Watts area map (PDF) <span aria-hidden="true">↗</span></a>
            </div>
            <p className="guide-intro">Four access areas described by <a href={sources.troutAreas.url}>Oklahoma Wildlife</a>. Map buttons search a named location; use the official map and posted signs to find the public entrance and designated parking.</p>
            <div className="access-grid">
              {accessAreas.map((area, index) => (
                <article className="access-card" key={area.id}>
                  <div className="access-card-top"><span className="state-pill">{area.type}</span><span className="access-number" aria-hidden="true">0{index + 1}</span></div>
                  <h3>{area.name}</h3>
                  <p>{area.description}</p>
                  <p className="access-note">{area.note}</p>
                  <div className="map-links">
                    <a href={googleMapSearch(area.mapQuery)} aria-label={`Search Google Maps for ${area.name}`}>Google Maps <span aria-hidden="true">↗</span></a>
                    <a href={appleMapSearch(area.mapQuery)} aria-label={`Search Apple Maps for ${area.name}`}>Apple Maps <span aria-hidden="true">↗</span></a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="conditions" className="guide-section conditions-section">
            <p className="eyebrow">02 / BEFORE YOU LEAVE</p>
            <h2>Check the river, every trip.</h2>
            <p className="guide-intro">This is a dam-controlled tailwater. Generation schedules are estimates, and other releases can occur. Check actual readings and on-site conditions before entering the water.</p>
            <div className="condition-grid">
              <a className="condition-card" href={sources.generation.url}><span>PLANNED GENERATION</span><h3>Southwestern Power <span aria-hidden="true">↗</span></h3><p>Find Tenkiller in the daily schedule. Plans may change.</p></a>
              <a className="condition-card" href={sources.releases.url}><span>DAM RELEASES</span><h3>USACE Tenkiller <span aria-hidden="true">↗</span></h3><p>Check the lake and release readings and their timestamps.</p></a>
              <a className="condition-card" href={sources.gauge.url}><span>RIVER OBSERVATIONS</span><h3>USGS near Gore <span aria-hidden="true">↗</span></h3><p>View available flow, stage, and water-quality readings.</p></a>
            </div>
            <p className="condition-footnote">These links open the providers’ data. Fish the Fifty does not display live river readings or certify conditions for wading.</p>
          </section>

          <section id="fishing" className="guide-section fishing-grid">
            <div>
              <p className="eyebrow">03 / PLAN YOUR FISHING</p>
              <h2>Trout and beyond.</h2>
              <p className="guide-intro">ODWC lists trout alongside bass, walleye, and sauger in this river. Stocking, water quality, and flows affect what anglers encounter.</p>
              <div className="species-list">{["Rainbow trout", "Striped bass", "White bass", "Walleye", "Sauger", "Largemouth bass", "Smallmouth bass"].map((fish) => <span key={fish}>{fish}</span>)}</div>
              <p className="source-note"><a href={sources.area.url}>ODWC river species & overview <span aria-hidden="true">↗</span></a></p>
              <div className="tackle-note"><h3>A trout tackle starting point</h3><p>Small spinners, spoons, or nymphs and wet flies are options to explore. Match your tackle to the reach’s hook and bait rules.</p><a className="text-link" href={sources.troutTips.url}>ODWC trout fishing tips <span aria-hidden="true">↗</span></a></div>
            </div>
            <div className="season-notes">
              <article><span className="eyebrow">YEAR-ROUND DESIGNATION</span><h3>Check stocking first</h3><p>The river is a year-round trout area, but that designation does not guarantee uninterrupted stocking. The dated notice above takes priority for trip planning.</p></article>
              <article><span className="eyebrow">WARMER MONTHS</span><h3>Watch water quality</h3><p>High temperatures and low dissolved oxygen can interrupt summer trout stocking. Review the agency’s updates and available gauge data.</p></article>
              <article><span className="eyebrow">BEFORE EACH TRIP</span><h3>Look for a recent report</h3><p>Check the date on any report. An older catch report cannot establish today’s river conditions.</p></article>
              <div className="resource-links"><a href={sources.troutInfo.url}>ODWC stocking guidance ↗</a><a href={sources.reports.url}>Official fishing reports ↗</a></div>
            </div>
          </section>

          <section id="rules" className="guide-section">
            <p className="eyebrow">04 / KNOW YOUR REACH</p>
            <h2>Licenses and local rules.</h2>
            <div className="rules-grid">
              <article className="rule-card"><h3>License & area access</h3><p>A fishing license is required unless exempt. Review the separate public-area access requirements for anyone joining you.</p><div className="resource-links"><a href={sources.license.url}>Buy an Oklahoma license ↗</a><a href={sources.areaRules.url}>Public-area access rules ↗</a></div></article>
              <article className="rule-card"><h3>Nonresident check-in</h3><p>Nonresident visitors must check in and out for the Lower Illinois River Public Fishing and Hunting Area. ODWC provides the free online process.</p><a className="text-link" href={sources.checkIn.url}>Check-in instructions ↗</a></article>
              <article className="rule-card"><h3>One rod per angler</h3><p>ODWC limits anglers to one rod and reel or pole and line in designated trout areas. Read the full trout rules before fishing or keeping a catch.</p><a className="text-link" href={sources.troutRules.url}>Official trout regulations ↗</a></article>
              <article className="rule-card special-rule"><span className="eyebrow">SPECIAL TROUT SECTION</span><h3>USGS gauge to E1000</h3><p>Trout fishing here requires artificial flies or lures and barbless hooks. Different harvest limits apply. Verify the boundary, sizes, and daily limits in ODWC’s Lower Illinois listing.</p><a className="text-link" href={sources.troutAreas.url}>Reach boundaries & limits ↗</a></article>
            </div>
          </section>

          <section id="sources" className="guide-section source-section">
            <div><p className="eyebrow">OFFICIAL SOURCES</p><h2>Plan with current information.</h2><p>Guide checked <time dateTime={checkedDate}>{checkedLabel}</time>. Notices and regulations may change; the linked agencies provide the latest information. This is an independent guide, not an agency publication.</p></div>
            <ul>{[sources.area, sources.troutAreas, sources.areaRules, sources.checkIn, sources.generation, sources.releases, sources.gauge].map((source) => <li key={source.url}><a href={source.url}>{source.label} <span aria-hidden="true">↗</span></a></li>)}</ul>
          </section>
          <div className="guide-return"><a className="btn primary" href="/states/oklahoma">← Back to Oklahoma</a><a className="text-link" href="/states">Explore all 50 states →</a></div>
        </div>
      </main>
      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </>
  );
}
