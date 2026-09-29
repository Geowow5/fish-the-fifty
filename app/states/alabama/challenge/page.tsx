import type { Metadata } from "next";
import AlabamaTracker from "./tracker";
import { alabamaSpecies } from "./program-data";

export const metadata: Metadata = {
  title: "Alabama Master & Trophy Angler | Fish the Fifty",
  description: "Review Alabama's official Master and Trophy Angler species sizes, application requirements, and private catch checklist.",
};

const links = {
  application: "https://www.outdooralabama.com/sites/default/files/fishing/Freshwater%20Fishing/M-T%20APPLICATION%20FORM%20(FY23).pdf",
  fishing: "https://www.outdooralabama.com/fishing/freshwater-fishing",
};

export default function AlabamaChallengePage() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav aria-label="Main navigation">
            <a href="/states">States</a>
            <a href="/#challenges">Challenges</a>
            <a href="/#progress">My Progress</a>
          </nav>
        </div>
      </header>

      <div className="breadcrumb">
        <a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states/alabama/challenge">Alabama</a><span aria-hidden="true"> / </span><span>Master &amp; Trophy Angler</span>
      </div>

      <section className="page-hero challenge-hero alabama-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">ALABAMA · WILDLIFE &amp; FRESHWATER FISHERIES</p>
          <h1>Alabama Master<br />&amp; Trophy Angler.</h1>
          <p className="lead">Alabama recognizes freshwater catches that meet the published Master Angler or Trophy Angler size for their species. Compare the official weight and length standards, document your catch, and submit the agency application within three months.</p>
          <div className="state-facts">
            <span>18 eligible species</span>
            <span>Master and Trophy standards</span>
            <span>Apply within 3 months</span>
          </div>
          <div className="actions">
            <a className="btn primary" href={links.application} target="_blank" rel="noreferrer">Official application PDF ↗</a>
            <a className="btn secondary" href="#tracker">Track potential catches ↓</a>
          </div>
        </div>
      </section>

      <section className="section alabama-checklist-section" id="tracker">
        <div className="section-heading">
          <p className="eyebrow">YOUR PRIVATE CHECKLIST</p>
          <h2>Keep your target species organized.</h2>
          <p>Check off potential Master or Trophy catches as you work through Alabama’s species list. Use the official application for catch details and final eligibility.</p>
        </div>
        <AlabamaTracker />
      </section>

      <section className="section challenge-layout alabama-requirements">
        <div>
          <p className="eyebrow">OFFICIAL PROGRAM REQUIREMENTS</p>
          <h2>Start with the rules that determine eligibility.</h2>
          <ol className="challenge-steps">
            <li><strong>Fish eligible Alabama waters.</strong><span>The catch must come from an Alabama private pond or public waters under Alabama Wildlife and Freshwater Fisheries jurisdiction.</span></li>
            <li><strong>Use legal angling methods.</strong><span>The application lists pole and line or rod and reel.</span></li>
            <li><strong>Meet the species size standard.</strong><span>Check the Master or Trophy weight and length values in the official table below.</span></li>
            <li><strong>Check license requirements.</strong><span>A valid Alabama fishing license is required when applying, with listed exemptions for people under 16 and Alabama residents age 65 or older.</span></li>
            <li><strong>Submit on time.</strong><span>Complete the official form and submit it within three months of the catch.</span></li>
          </ol>
          <a className="btn primary" href={links.application} target="_blank" rel="noreferrer">Get the application and rules ↗</a>
        </div>

        <aside className="challenge-side">
          <p className="eyebrow">DOCUMENT THE CATCH</p>
          <h2>Make the evidence clear.</h2>
          <p>Alabama’s application asks for enough documentation for Fisheries Section biologists to identify the fish and assess its measurements.</p>
          <ul className="alabama-evidence-list">
            <li>Include a clear side-view photo with a ruler or yardstick beside the fish and the graduations visible.</li>
            <li>Have a witness verify the information on the application.</li>
            <li>Attach a copy of the fishing license as directed by the official form.</li>
            <li>The form also asks for a second photo of the angler with the fish for possible use on the Department’s website.</li>
          </ul>
          <p>The Chief of Fisheries makes the final determination on whether an entry is legitimate. The agency form says specific catch locations will not be published.</p>
          <a className="btn secondary" href={links.application} target="_blank" rel="noreferrer">Review the official instructions ↗</a>
        </aside>
      </section>

      <section className="section qualification-section alabama-size-section" aria-labelledby="alabama-sizes-heading">
        <div className="section-heading">
          <p className="eyebrow">OFFICIAL MINIMUM QUALIFYING SIZES</p>
          <h2 id="alabama-sizes-heading">Compare all 18 species.</h2>
          <p>The Alabama application lists both a weight and length value for each Master and Trophy Angler level. Confirm the current form before fishing or submitting a catch.</p>
        </div>
        <div className="qualification-table-wrap alabama-table-wrap">
          <table>
            <caption className="visually-hidden">Alabama Master and Trophy Angler minimum qualifying weights and lengths by species</caption>
            <thead>
              <tr>
                <th scope="col" rowSpan={2}>Species</th>
                <th scope="colgroup" colSpan={2}>Master Angler</th>
                <th scope="colgroup" colSpan={2}>Trophy Angler</th>
              </tr>
              <tr>
                <th scope="col">Weight</th>
                <th scope="col">Length</th>
                <th scope="col">Weight</th>
                <th scope="col">Length</th>
              </tr>
            </thead>
            <tbody>
              {alabamaSpecies.map((fish) => (
                <tr key={fish.slug}>
                  <th scope="row">{fish.name}</th>
                  <td>{fish.masterWeight}</td>
                  <td>{fish.masterLength}</td>
                  <td>{fish.trophyWeight}</td>
                  <td>{fish.trophyLength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="alabama-threshold-note">These values are transcribed from the Alabama Master/Trophy Angler application. Its table notes that qualifying values use a relative weight of 110%; the application and Alabama Fisheries staff control interpretation and approval.</p>
        <div className="actions">
          <a className="btn primary" href={links.application} target="_blank" rel="noreferrer">Open Alabama’s application and full rules ↗</a>
          <a className="btn secondary" href={links.fishing} target="_blank" rel="noreferrer">Explore Alabama freshwater fishing ↗</a>
        </div>
      </section>

      <section className="section final-cta challenge-final">
        <p className="eyebrow">READY TO START?</p>
        <h2>Choose a species and check the official mark.</h2>
        <p>Plan a legal Alabama trip, review the published standard, and keep clear evidence for a complete application.</p>
        <div className="actions">
          <a className="btn primary" href={links.application} target="_blank" rel="noreferrer">Review the application ↗</a>
          <a className="btn secondary" href="/states">Back to all states</a>
        </div>
      </section>

      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </main>
  );
}
