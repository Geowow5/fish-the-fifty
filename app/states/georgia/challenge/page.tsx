import type { Metadata } from "next";
import GeorgiaBassTracker from "./tracker";
import { georgiaBassSpecies } from "./species";

export const metadata: Metadata = {
  title: "Georgia Bass Slam | Fish the Fifty",
  description: "Explore Georgia’s official five-of-ten Bass Slam, review species and photo rules, and privately track catches.",
};

const links = {
  official: "https://georgiawildlife.com/fishing/angler-resources/GeorgiaBassSlam",
  map: "https://gadnrwrd.maps.arcgis.com/apps/webappviewer/index.html?id=360c1018b643486ea704dc1a5888c1b7",
  identification: "https://georgiawildlife.com/fishing/identification",
};

export default function GeorgiaBassSlamPage() {
  return (
    <main className="georgia-page">
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <div className="georgia-breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>Georgia</span><span aria-hidden="true"> / </span><span>Bass Slam</span></div>

      <section className="georgia-hero">
        <div className="georgia-hero-inner">
          <p className="georgia-kicker">GEORGIA · OFFICIAL DNR RECOGNITION</p>
          <h1>Georgia Bass<br /><em>Slam</em></h1>
          <p className="georgia-lead">Find ten eligible black bass species across Georgia’s rivers and reservoirs. Catch five different species in the same calendar year, document each one, then send your entry to Georgia DNR.</p>
          <div className="georgia-facts"><span>5 of 10 species</span><span>One calendar year</span><span>Official photo entry</span></div>
          <div className="georgia-actions"><a className="georgia-button is-copper" href={links.map} target="_blank" rel="noreferrer">Open DNR species map ↗</a><a className="georgia-button is-outline" href="#tracker">Track your catches ↓</a></div>
        </div>
      </section>

      <section className="georgia-section" aria-labelledby="species-heading">
        <div className="georgia-section-heading"><p className="georgia-kicker">THE TEN ELIGIBLE SPECIES</p><h2 id="species-heading">Know what you’re looking for.</h2><p>Some black bass look alike and hybridize. Check the DNR map for locations and the fish identification guide before recording a catch.</p></div>
        <div className="georgia-species-grid">{georgiaBassSpecies.map((fish, index) => <article className="georgia-species-card" key={fish.slug}>
          <span className="georgia-species-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{fish.name}</h3>
          <p>{fish.range}</p>
          {fish.note && <span className="georgia-group-note">{fish.note}</span>}
        </article>)}</div>
        <div className="georgia-actions georgia-resource-actions"><a className="georgia-button is-copper" href={links.map} target="_blank" rel="noreferrer">Check DNR species locations ↗</a><a className="georgia-button is-outline" href={links.identification} target="_blank" rel="noreferrer">DNR fish identification guide ↗</a></div>
      </section>

      <section className="georgia-section georgia-tracker-section" id="tracker" aria-labelledby="tracker-heading">
        <div className="georgia-section-heading"><p className="georgia-kicker">YOUR PRIVATE CHECKLIST</p><h2 id="tracker-heading">Track the five you need.</h2><p>Record a date, water, and length for each species. Length limits can differ by water, so use the current DNR rules to confirm eligibility.</p></div>
        <GeorgiaBassTracker />
      </section>

      <section className="georgia-section georgia-rules-section" aria-labelledby="rules-heading">
        <div className="georgia-section-heading"><p className="georgia-kicker">OFFICIAL ENTRY REQUIREMENTS</p><h2 id="rules-heading">From catch to recognition.</h2></div>
        <div className="georgia-rules-grid">
          <article><span>01</span><h3>Catch five distinct species</h3><p>Catch five of the ten eligible Georgia black bass species. Largemouth and Florida largemouth count as one; Alabama and Kentucky bass count with spotted bass.</p></article>
          <article><span>02</span><h3>Fish legal waters</h3><p>Catch fish legally in Georgia waters where you have permission. Public boundary waters covered by a reciprocal agreement with a neighboring state can qualify too.</p></article>
          <article><span>03</span><h3>Meet the length rule</h3><p>Where a length limit applies, each fish must meet it. Where no minimum applies, the fish must be at least eight inches long.</p></article>
          <article><span>04</span><h3>Take clear photos</h3><p>Include a photo of you with the fish and a side view on a measuring board or beside a ruler. Add other photos that help confirm identification.</p></article>
          <article><span>05</span><h3>Finish within the year</h3><p>All five fish must be caught in one calendar year. Send the information by midnight on December 31 of that same year.</p></article>
          <article><span>06</span><h3>Submit to Georgia DNR</h3><p>Use the “Georgia Bass Slam Submission” process on the official DNR page. Questions about an entry can be sent to Georgia.BassSlam@dnr.ga.gov.</p></article>
        </div>
        <div className="georgia-recognition"><p className="georgia-kicker">WHAT DNR AWARDS</p><h3>A certificate and more reasons to get back out there.</h3><p>Successful anglers receive a personalized certificate, two Go Fish Education Center passes, and Bass Slam stickers. Entries for the calendar year are also included in an annual grand-prize drawing.</p></div>
        <div className="georgia-actions georgia-resource-actions"><a className="georgia-button is-copper" href={links.official} target="_blank" rel="noreferrer">Official rules and submission ↗</a><a className="georgia-mail-link" href="mailto:Georgia.BassSlam@dnr.ga.gov">Email Georgia DNR about an entry ↗</a></div>
        <p className="georgia-disclaimer">Fish the Fifty is an independent planning and tracking guide. Georgia DNR controls the official rules, eligible waters, identification, and awards. Check its current instructions before fishing or submitting a Bass Slam.</p>
      </section>

      <footer className="georgia-footer"><a href="/states">← Back to all states</a><strong>FISH THE FIFTY</strong></footer>
    </main>
  );
}

