import type { Metadata } from "next";
import ArizonaTroutTracker from "./tracker";
import { arizonaTroutSpecies } from "./species";

export const metadata: Metadata = {
  title: "Arizona Trout Challenges | Fish the Fifty",
  description: "Plan Arizona’s official AZGFD Trout Challenge and Wild Trout Challenge, explore all eight target species, find eligible waters, and track catches.",
};

const links = {
  official: "https://www.azgfd.com/fishing-2/fishing-challenges/azgfd-trout-challenge/",
  map: "https://experience.arcgis.com/experience/a168d98b0a6f45f796dd92075c403cdc",
  application: "https://azgfd-portal-wordpress-pantheon.s3.us-west-2.amazonaws.com/wp-content/uploads/archive/Application-Form_April2021_TroutChallenge.pdf",
  fishBoat: "https://fishandboataz.azgfd.com/",
  fishing: "https://www.azgfd.com/fishing-2/",
  apacheSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSdFrflbwg80qZC43ardRlPtJM_loODpnykb-9eNxLVVM1mhfw/viewform?usp=header",
  gilaSurvey: "https://docs.google.com/forms/d/e/1FAIpQLScY_M7H7lJK5P0zPy02Nru6rC2r4X6VQIAzhoYoCn_UTZpAzQ/viewform?usp=header",
  gilaInfo: "https://www.azgfd.com/species/gila-trout/",
};

export default function ArizonaTroutChallengePage() {
  return (
    <main className="arizona-page">
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/members">My Progress</a></nav>
        </div>
      </header>

      <div className="arizona-breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>Arizona</span><span aria-hidden="true"> / </span><span>Trout Challenges</span></div>

      <section className="arizona-hero">
        <div className="arizona-hero-inner">
          <p className="arizona-kicker">ARIZONA · OFFICIAL AZGFD RECOGNITION</p>
          <h1>Arizona Trout<br /><em>Challenges</em></h1>
          <p className="arizona-lead">Explore trout country from the White Mountains to high-desert streams. Choose the statewide species challenge, the Wild Trout Challenge, or work toward both.</p>
          <div className="arizona-facts"><span>2 challenge tracks</span><span>8 species in the statewide challenge</span><span>5 wild trout targets</span></div>
          <div className="arizona-actions"><a className="arizona-button is-copper" href={links.map} target="_blank" rel="noreferrer">Open AZGFD trout map ↗</a><a className="arizona-button is-outline" href="#tracker">Track your catches ↓</a></div>
        </div>
      </section>

      <section className="arizona-section" aria-labelledby="tracks-heading">
        <div className="arizona-section-heading"><p className="arizona-kicker">PICK YOUR GOAL</p><h2>One state. Two ways to earn recognition.</h2><p>The Arizona Game and Fish Department (AZGFD) accepts each challenge once. Keep separate catch details if you plan to complete both.</p></div>
        <div className="arizona-track-grid">
          <article className="arizona-track-card"><span className="arizona-track-label">ARIZONA TROUT CHALLENGE</span><strong>6 of 8</strong><p>Catch at least six of Arizona’s eight challenge species. Hatchery-raised trout may qualify when caught in Arizona waters listed for that species.</p><a href={links.official} target="_blank" rel="noreferrer">Official challenge details ↗</a></article>
          <article className="arizona-track-card is-wild"><span className="arizona-track-label">WILD TROUT CHALLENGE</span><strong>5 of 5</strong><p>Catch all five trout species that AZGFD lists for the Wild Trout Challenge, caught wild in Arizona.</p><a href={links.official} target="_blank" rel="noreferrer">Official challenge details ↗</a></article>
        </div>
        <div className="arizona-rule-callout"><strong>Doing both?</strong><span>If you submit the same species for both challenges, AZGFD requires each fish to come from a different water. The tracker keeps a separate water entry for each track.</span></div>
      </section>

      <section className="arizona-section arizona-species-section" aria-labelledby="species-heading">
        <div className="arizona-section-heading"><p className="arizona-kicker">THE EIGHT TARGET SPECIES</p><h2 id="species-heading">Build your species list.</h2><p>Apache and Gila trout are Arizona native trout targets. Use AZGFD’s challenge map to confirm an eligible water for each species; waters not listed may be reviewed case by case.</p></div>
        <div className="arizona-species-grid">{arizonaTroutSpecies.map((species, index) => <article className="arizona-species-card" key={species.slug}>
          <span className="arizona-species-number">0{index + 1}</span>
          <h3>{species.name}</h3>
          <div className="arizona-tags"><span>{species.inWildChallenge ? "Both challenges" : "Statewide challenge"}</span>{species.nativeToArizona && <span className="is-native">Arizona native</span>}</div>
          {species.slug === "gila-trout" && <a className="arizona-species-link" href={links.gilaInfo} target="_blank" rel="noreferrer">AZGFD Gila trout guide ↗</a>}
        </article>)}</div>
        <div className="arizona-tool-links"><a className="arizona-button is-copper" href={links.map} target="_blank" rel="noreferrer">Find eligible waters by species ↗</a><a className="arizona-button is-outline" href={links.fishBoat} target="_blank" rel="noreferrer">Explore AZGFD Fish &amp; Boat ↗</a></div>
      </section>

      <section className="arizona-section arizona-tracker-section" id="tracker" aria-labelledby="tracker-heading">
        <div className="arizona-section-heading"><p className="arizona-kicker">YOUR PRIVATE CHECKLIST</p><h2 id="tracker-heading">Keep both challenges organized.</h2><p>Record the species, date, water, gear, and whether the fish was released. Progress is saved only in this browser; this checklist does not attach photos or submit an application.</p></div>
        <ArizonaTroutTracker />
      </section>

      <section className="arizona-section arizona-howto" aria-labelledby="howto-heading">
        <div className="arizona-section-heading"><p className="arizona-kicker">FROM CATCH TO CERTIFICATE</p><h2 id="howto-heading">Finish the official entry.</h2></div>
        <div className="arizona-steps">
          <article><span>01</span><h3>Use eligible Arizona waters</h3><p>Confirm the water against the AZGFD trout challenge map and check current site-specific access and regulations before you travel.</p></article>
          <article><span>02</span><h3>Photograph and record each fish</h3><p>AZGFD asks for a completed application with species, location and date, plus a labeled photo of every trout. The form also records gear and whether the fish was released.</p></article>
          <article><span>03</span><h3>Send the application</h3><p>Download the official form and follow the current submission directions. AZGFD may review unlisted waters case by case.</p></article>
        </div>
        <div className="arizona-tool-links"><a className="arizona-button is-copper" href={links.application} target="_blank" rel="noreferrer">Download AZGFD application ↗</a><a className="arizona-button is-outline" href={links.fishing} target="_blank" rel="noreferrer">Current AZGFD fishing info ↗</a></div>
        <div className="arizona-survey-callout"><h3>Help monitor native trout</h3><p>AZGFD asks anglers to complete a short survey after trips targeting Apache or Gila trout.</p><a href={links.apacheSurvey} target="_blank" rel="noreferrer">Apache Trout Angler Survey ↗</a><a href={links.gilaSurvey} target="_blank" rel="noreferrer">Gila Trout Angler Survey ↗</a></div>
        <p className="arizona-disclaimer">Fish the Fifty is an independent planning and tracking guide. AZGFD controls eligibility, water lists, regulations, and recognition. Check the official map and current rules before fishing.</p>
      </section>

      <footer className="arizona-footer"><a href="/states">← Back to all states</a><strong>FISH THE FIFTY</strong></footer>
    </main>
  );
}
