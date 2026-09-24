import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  appleMapSearch,
  checkedDate,
  checkedLabel,
  googleMapSearch,
  missouriSources,
  missouriWaters,
} from "../guides";

type PageProps = { params: Promise<{ water: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return missouriWaters.map(({ slug }) => ({ water: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { water: slug } = await params;
  const water = missouriWaters.find((item) => item.slug === slug);
  if (!water) return { title: "Missouri Trout Water | Fish the Fifty" };
  return {
    title: `${water.name} Fishing Guide | Missouri | Fish the Fifty`,
    description: `Complete guide to ${water.name}: the Missouri Blue Ribbon Slam reach, public access, maps, fishing tactics, seasons, camping, and regulations.`,
  };
}

export default async function MissouriWaterPage({ params }: PageProps) {
  const { water: slug } = await params;
  const waterIndex = missouriWaters.findIndex((item) => item.slug === slug);
  if (waterIndex < 0) notFound();

  const water = missouriWaters[waterIndex];
  const previous = missouriWaters[waterIndex - 1];
  const next = missouriWaters[waterIndex + 1];

  return (
    <>
      <a className="skip-link" href="#guide-content">Skip to water guide</a>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <main id="guide-content" className="river-guide">
        <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states/missouri">Missouri</a><span aria-hidden="true"> / </span><span>{water.name}</span></div>
        <nav className="state-guide-tabs" aria-label="Missouri guide pages">
          <a href="/states/missouri" aria-current="page">Fishing Waters</a>
          <a href="/states/missouri/challenge">Blue Ribbon Trout Slam</a>
        </nav>

        <section className="page-hero river-hero">
          <div className="page-hero-inner river-hero-grid">
            <div>
              <p className="eyebrow">MISSOURI · BLUE RIBBON WATER {water.number}</p>
              <h1>{water.name}.</h1>
              <p className="lead">{water.summary}</p>
              <div className="actions"><a className="btn primary" href="#access">Plan access</a><a className="btn secondary" href="#fishing">Fishing guide</a></div>
            </div>
            <aside className="river-brief" aria-label={`${water.name} at a glance`}>
              <p className="eyebrow">AT A GLANCE</p>
              <dl>
                <div><dt>County</dt><dd>{water.county}</dd></div>
                <div><dt>Qualifying reach</dt><dd>{water.qualifyingReach}</dd></div>
                <div><dt>Length</dt><dd>{water.miles}</dd></div>
                <div><dt>Trout</dt><dd>{water.species}</dd></div>
              </dl>
              <a href={water.areaUrl}>{water.areaLabel} <span aria-hidden="true">↗</span></a>
            </aside>
          </div>
        </section>

        <div className="guide-shell">
          <aside className="stocking-notice" aria-labelledby="reach-heading">
            <p className="eyebrow">SLAM BOUNDARY · GUIDE CHECKED <time dateTime={checkedDate}>{checkedLabel}</time></p>
            <h2 id="reach-heading">Know which water counts.</h2>
            <p>The Missouri Slam applies only to the Blue Ribbon reach listed here. Nearby water may belong to another trout area with different boundaries and rules. Use the official MDC map before you fish, and check the current prospect report for conditions.</p>
            <div className="map-links"><a href={water.mapUrl}>Official MDC boundary map (PDF) <span aria-hidden="true">↗</span></a><a href={water.reportUrl}>MDC fishing prospect <span aria-hidden="true">↗</span></a></div>
          </aside>

          <nav className="guide-jump-links" aria-label="On this page"><a href="#access">Access & maps</a><a href="#fishing">Fishing tactics</a><a href="#season">Season & camping</a><a href="#rules">Rules & permits</a><a href="#sources">Sources</a></nav>

          <section id="access" className="guide-section">
            <div className="guide-section-heading"><div><p className="eyebrow">01 / ACCESS & MAPS</p><h2>Choose a legal approach.</h2></div><a className="text-link" href={water.mapUrl}>Official MDC map (PDF) <span aria-hidden="true">↗</span></a></div>
            <p className="guide-intro">{water.accessIntro} The map buttons open searches for named access points; use the MDC boundary map and posted signs to confirm the exact entrance, parking, and public land.</p>
            <div className="access-grid">
              {water.access.map((access, index) => (
                <article className="access-card" key={access.name}>
                  <div className="access-card-top"><span className="state-pill">PUBLIC ACCESS NOTES</span><span className="access-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
                  <h3>{access.name}</h3>
                  <p>{access.detail}</p>
                  <div className="map-links"><a href={googleMapSearch(access.query)} aria-label={`Search Google Maps for ${access.name}`}>Google Maps <span aria-hidden="true">↗</span></a><a href={appleMapSearch(access.query)} aria-label={`Search Apple Maps for ${access.name}`}>Apple Maps <span aria-hidden="true">↗</span></a></div>
                </article>
              ))}
            </div>
          </section>

          <section id="fishing" className="guide-section fishing-grid">
            <div>
              <p className="eyebrow">02 / FISHING APPROACH</p>
              <h2>Read the water. Fish carefully.</h2>
              <p className="guide-intro">{water.approach}</p>
              <div className="species-list"><span>{water.species}</span></div>
              <div className="tackle-note"><h3>Approach and tactics</h3><ul>{water.tactics.map((tactic) => <li key={tactic}>{tactic}</li>)}</ul></div>
            </div>
            <div className="season-notes">
              <article><span className="eyebrow">FLY STARTING POINTS</span><h3>Match the season and water.</h3><p>These are practical starting patterns, not an official MDC hatch list. Adjust size, weight, and presentation to the water you see.</p><ul>{water.flies.map((fly) => <li key={fly}>{fly}</li>)}</ul></article>
              <div className="tackle-note"><h3>At a glance</h3><ul>{water.atAGlance.map((fact) => <li key={fact}>{fact}</li>)}</ul></div>
            </div>
          </section>

          <section id="season" className="guide-section fishing-grid">
            <div>
              <p className="eyebrow">03 / SEASON & CAMPING</p>
              <h2>Time the trip.</h2>
              <p className="guide-intro">{water.season}</p>
              <p className="condition-footnote">Check the <a className="text-link" href={water.reportUrl}>latest MDC prospect report</a> and current weather before travel. Conditions can change after high water, drought, or habitat disturbance.</p>
            </div>
            <div className="rule-card">
              <p className="eyebrow">OVERNIGHT OPTIONS</p>
              <h3>Camping & nearby trip planning</h3>
              <p>{water.camping}</p>
              <p className="condition-footnote">{water.tripNote}</p>
              <a className="text-link" href={water.campingUrl}>Check campground information <span aria-hidden="true">↗</span></a>
            </div>
          </section>

          <section id="rules" className="guide-section">
            <p className="eyebrow">04 / RULES & PERMITS</p>
            <h2>Check the rules before fishing.</h2>
            <div className="rules-grid">
              <article className="rule-card special-rule"><span className="eyebrow">BLUE RIBBON REACH</span><h3>Artificial tackle only</h3><p>These special areas allow artificial lures and flies only. Natural, scented, and soft-plastic baits are prohibited for any species. The daily trout limit is one, with an 18-inch minimum length for harvest.</p><a className="text-link" href={water.regulationUrl}>Read rules for {water.name} ↗</a></article>
              <article className="rule-card"><span className="eyebrow">SLAM QUALIFICATION</span><h3>Any size may qualify</h3><p>A trout legally caught in this Blue Ribbon area can count toward the Slam, including fish under 18 inches. Release trout under the harvest minimum and follow catch-and-release best practices.</p><a className="text-link" href={missouriSources.slam.url}>Official MDC Slam details ↗</a></article>
              <article className="rule-card"><span className="eyebrow">LICENSE & TROUT PERMIT</span><h3>Confirm what you need</h3><p>Check whether you need a Missouri fishing permit and trout permit. Permit requirements, exemptions, and fees can change, so use the current MDC page.</p><a className="text-link" href={missouriSources.permits.url}>MDC trout permit information ↗</a></article>
              <article className="rule-card"><span className="eyebrow">STREAM ACCESS</span><h3>Stay on public land</h3><p>Use named public access or obtain landowner permission. Do not cross private banks or assume a public road grants stream access. Porous-soled waders are prohibited on these trout waters.</p><div className="resource-links"><a href={missouriSources.privateWater.url}>MDC trespassing guidance ↗</a><a href={missouriSources.waders.url}>MDC wader restriction ↗</a></div></article>
            </div>
          </section>

          <section id="sources" className="guide-section source-section">
            <div><p className="eyebrow">OFFICIAL SOURCES</p><h2>Verify before each trip.</h2><p>This guide was checked <time dateTime={checkedDate}>{checkedLabel}</time>. Access, stocking, regulations, and water conditions can change. MDC is the authority for current Missouri rules; this independent guide is for trip planning.</p></div>
            <ul>{[
              { label: water.areaLabel, url: water.areaUrl },
              { label: "Official Blue Ribbon map", url: water.mapUrl },
              { label: "MDC fishing prospect report", url: water.reportUrl },
              { label: "Water-specific regulations", url: water.regulationUrl },
              missouriSources.slam,
              missouriSources.permits,
              missouriSources.privateWater,
              missouriSources.waders,
            ].map((source) => <li key={source.url}><a href={source.url}>{source.label} <span aria-hidden="true">↗</span></a></li>)}</ul>
          </section>

          <div className="guide-return">
            <a className="btn primary" href="/states/missouri">← All Missouri waters</a>
            <div className="guide-neighbors">{previous ? <a className="text-link" href={`/states/missouri/${previous.slug}`}>← {previous.name}</a> : <span />}{next ? <a className="text-link" href={`/states/missouri/${next.slug}`}>{next.name} →</a> : <span />}</div>
            <a className="text-link" href="/states/missouri/challenge">Open the Slam tracker →</a>
          </div>
        </div>
      </main>
      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </>
  );
}
