import type { Metadata } from "next";
import FloridaTracker from "./tracker";
import { floridaGrandSlams, floridaReelBigFish } from "./program-data";

export const metadata: Metadata = {
  title: "Florida Fishing Challenges | Fish the Fifty",
  description: "Explore Florida FWC angler recognition programs: Big Catch, TrophyCatch, and Catch a Florida Memory.",
};

const links = {
  fwc: "https://myfwc.com/fishing/angler-recognition/",
  bigCatch: "https://www.bigcatchflorida.com/",
  bigCatchPoster: "https://myfwc.com/media/26889/big-catch-poster.pdf",
  trophyCatch: "https://www.trophycatchflorida.com/",
  memory: "https://catchafloridamemory.com/",
  lifeList: "https://catchafloridamemory.com/programs/life-list/",
  grandSlams: "https://catchafloridamemory.com/programs/grand-slam/",
  reelBigFish: "https://catchafloridamemory.com/programs/reel-big-fish/",
  regulations: "https://myfwc.com/fishing/saltwater/recreational/",
};

export default function FloridaChallengePage() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <div className="breadcrumb"><a href="/states">States</a><span> / </span><a href="/states/florida/challenge">Florida</a><span> / </span><span>Fishing Challenges</span></div>

      <section className="page-hero challenge-hero florida-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">FLORIDA · OFFICIAL FWC ANGLER RECOGNITION</p>
          <h1>Three programs.<br />Freshwater to saltwater.</h1>
          <p className="lead">Work toward a qualifying Big Catch species, document a trophy largemouth bass, or build a saltwater record through Catch a Florida Memory.</p>
          <div className="state-facts"><span>33 Big Catch species</span><span>8 lb+ TrophyCatch bass</span><span>75 saltwater Life List species in 2026</span></div>
          <div className="actions">
            <a className="btn primary" href={links.fwc} target="_blank" rel="noreferrer">FWC program overview ↗</a>
            <a className="btn secondary" href={links.memory} target="_blank" rel="noreferrer">Catch a Florida Memory ↗</a>
          </div>
        </div>
      </section>

      <section className="section florida-program-section">
        <div className="section-heading">
          <p className="eyebrow">THREE OFFICIAL PROGRAMS</p>
          <h2>Choose a Florida fishing goal.</h2>
          <p>FWC recognizes freshwater and saltwater catches through separate programs. Review current rules and regulations before fishing or submitting a catch.</p>
        </div>
        <div className="card-grid florida-program-grid">
          <article className="florida-program-card">
            <span className="state-pill">Freshwater · 33 species</span>
            <h3>Big Catch</h3>
            <p>Meet the qualifying length or weight for one of 33 fish species. Youth thresholds are available. Anglers can continue toward Specialist, Master and Elite recognition.</p>
            <div className="florida-card-links">
              <a href={links.bigCatch} target="_blank" rel="noreferrer">Register or submit a catch ↗</a>
              <a href={links.bigCatchPoster} target="_blank" rel="noreferrer">FWC qualifying-size poster ↗</a>
            </div>
          </article>
          <article className="florida-program-card">
            <span className="state-pill">Freshwater · largemouth bass</span>
            <h3>TrophyCatch</h3>
            <p>Document and release a Florida largemouth bass weighing 8 pounds or more. The program gathers citizen-science data while rewarding conservation-minded anglers.</p>
            <div className="florida-card-links">
              <a href={links.trophyCatch} target="_blank" rel="noreferrer">TrophyCatch program ↗</a>
              <a href={links.fwc} target="_blank" rel="noreferrer">FWC recognition overview ↗</a>
            </div>
          </article>
          <article className="florida-program-card">
            <span className="state-pill">Saltwater · 3 challenge paths</span>
            <h3>Catch a Florida Memory</h3>
            <p>Track species variety, length-qualified fish and nine Grand Slams. Its Life List expanded to 75 saltwater species for 2026.</p>
            <div className="florida-card-links">
              <a href={links.memory} target="_blank" rel="noreferrer">Join the program ↗</a>
              <a href={links.regulations} target="_blank" rel="noreferrer">Florida saltwater regulations ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section florida-memory-section">
        <div className="section-heading">
          <p className="eyebrow">CATCH A FLORIDA MEMORY</p>
          <h2>Three ways to build saltwater recognition.</h2>
          <p>The program is free to join. Its 2026 Life List includes five added species, and current Grand Slam and Reel Big Fish rules are posted by FWC.</p>
        </div>
        <div className="florida-path-grid">
          <article className="florida-path-card">
            <span className="state-pill">75 species</span>
            <h3>Saltwater Fish Life List</h3>
            <p>Record distinct species over time. Club milestones are 10, 30, 50 and 75; completing all 75 earns Life List Master Angler recognition.</p>
            <a href={links.lifeList} target="_blank" rel="noreferrer">See the official Life List ↗</a>
          </article>
          <article className="florida-path-card">
            <span className="state-pill">9 slams</span>
            <h3>Saltwater Grand Slams</h3>
            <p>Catch the specified combination for a slam within 24 hours. Recognition tiers begin at three different slams, then six, then all eligible slams.</p>
            <a href={links.grandSlams} target="_blank" rel="noreferrer">See all Grand Slam rules ↗</a>
          </article>
          <article className="florida-path-card">
            <span className="state-pill">30 species</span>
            <h3>Saltwater Reel Big Fish</h3>
            <p>Reach the adult or youth minimum length for a listed species. The highest tier requires qualifying catches from all 30 species.</p>
            <a href={links.reelBigFish} target="_blank" rel="noreferrer">See current length targets ↗</a>
          </article>
        </div>
      </section>

      <section className="section florida-details-section">
        <div className="section-heading">
          <p className="eyebrow">PLAN YOUR SUBMISSIONS</p>
          <h2>Know what qualifies before you fish.</h2>
        </div>
        <div className="florida-details-grid">
          <article className="florida-detail-card">
            <h3>Grand Slam combinations</h3>
            <ul>{floridaGrandSlams.map((slam) => <li key={slam.name}><strong>{slam.name}{slam.note ? " · " + slam.note : ""}:</strong> {slam.species}</li>)}</ul>
            <p>Each combination must be completed within 24 hours. Confirm the current program page before submitting.</p>
          </article>
          <article className="florida-detail-card florida-reel-details">
            <h3>Reel Big Fish length targets</h3>
            <p>Lengths are inches. Use the adult or youth standard shown for the angler; species marked with an asterisk by FWC use fork length, and the other listed fish use total length.</p>
            <div className="florida-reel-table-wrap">
              <table>
                <thead><tr><th>Species</th><th>Adult</th><th>Youth</th><th>Measure</th></tr></thead>
                <tbody>{floridaReelBigFish.map((fish) => <tr key={fish.name}><td>{fish.name}</td><td>{fish.adult}&Prime;</td><td>{fish.youth}&Prime;</td><td>{fish.measure}</td></tr>)}</tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      <section className="section florida-tracker-section">
        <div className="section-heading">
          <p className="eyebrow">YOUR PRIVATE CHECKLIST</p>
          <h2>Keep your Florida progress in one place.</h2>
          <p>Use this browser-based checklist to organize catches before submitting them to the official programs.</p>
        </div>
        <FloridaTracker />
        <p className="challenge-note florida-note"><strong>Planning tool only.</strong> Fish the Fifty does not submit catches to FWC. Official recognition, eligibility and approval are determined by the relevant program.</p>
      </section>

      <section className="section final-cta challenge-final florida-final">
        <p className="eyebrow">READY TO START?</p>
        <h2>Pick a track and save the evidence.</h2>
        <p>Check the current Florida regulations, record the date and water, and follow each program's photo and documentation rules.</p>
        <div className="actions">
          <a className="btn primary" href={links.fwc} target="_blank" rel="noreferrer">Review FWC programs ↗</a>
          <a className="btn secondary" href={links.regulations} target="_blank" rel="noreferrer">Check current regulations ↗</a>
        </div>
      </section>

      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </main>
  );
}
