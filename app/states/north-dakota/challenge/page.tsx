import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "North Dakota Fish Challenge | Fish the Fifty",
  description: "Explore North Dakota's annual Fish Challenge plus Whopper Club, Catch and Release Club, and state record recognition.",
};

const challenge = "https://gf.nd.gov/fishing/fish-challenge";
const rules = "https://gf.nd.gov/fishing/fish-challenge/rules";
const clubs = "https://gf.nd.gov/fishing/clubs";
const records = "https://gf.nd.gov/fishing/record-fish";

const challenges = [
  ["Classic Challenge", "Catch northern pike, yellow perch, smallmouth bass, and channel catfish."],
  ["Sportfish Challenge", "Catch bluegill, walleye, one qualifying bass type, and one qualifying trout type."],
  ["Rough Fish Challenge", "Catch a bullhead, a carp, and a sucker from the eligible groups."],
  ["100 Fish Challenge", "Catch 100 fish of any species in North Dakota and submit the required final documentation."],
  ["Total Catch Challenge", "Coach a new angler, clean up a fishing area, cook a catch, and share a fishing story."],
] as const;

const trophyExamples = [
  ["Northern pike", "20 lb", "36 in"],
  ["Walleye", "8 lb", "25 in"],
  ["Yellow perch", "1 lb 12 oz", "13 in"],
  ["Smallmouth bass", "3 lb", "18 in"],
  ["Channel catfish", "12 lb", "30 in"],
  ["Rainbow trout", "5 lb", "21 in"],
  ["Freshwater drum", "6 lb", "—"],
] as const;

export default function NorthDakotaChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/members">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>North Dakota</span></div>

    <section className="page-hero challenge-hero"><div className="page-hero-inner">
      <p className="eyebrow">NORTH DAKOTA · FIVE 2026 CHALLENGES</p>
      <h1>North Dakota<br />Fish Challenge.</h1>
      <p className="lead">Choose from five official challenge tracks, document your catches or activities, and earn a certificate and challenge-specific sticker after verification by North Dakota Game and Fish.</p>
      <div className="state-facts"><span>May 1–Aug. 15, 2026</span><span>Residents &amp; nonresidents</span><span>5 challenge tracks</span></div>
      <div className="actions"><a className="btn primary" href="#annual">Explore the challenges ↓</a><a className="btn secondary" href="#clubs">Trophy clubs ↓</a></div>
    </div></section>

    <section className="section" id="annual"><div className="section-heading">
      <p className="eyebrow">2026 ANNUAL FISH CHALLENGE</p><h2>Pick the challenge that fits your trip.</h2>
      <p>The 2026 contest runs May 1 through August 15. Fish must come from North Dakota waters, and anglers age 16 or older must hold a valid current North Dakota fishing license while participating.</p>
    </div><div className="card-grid">{challenges.map(([name, description]) => <article className="challenge-card" key={name}><span className="state-pill">2026 FISH CHALLENGE</span><h3>{name}</h3><p>{description}</p><a href={challenge} target="_blank" rel="noreferrer">Official challenge details ↗</a></article>)}</div></section>

    <section className="section challenge-layout"><div>
      <p className="eyebrow">HOW TO COMPLETE IT</p><h2>Catch, document, submit.</h2>
      <ol className="challenge-steps">
        <li><strong>Choose one or more challenge tracks.</strong><span>No preregistration is required for the 2026 challenge.</span></li>
        <li><strong>Complete each required catch or activity.</strong><span>For species-based challenges, photograph the fish and record the catch information required by the official form.</span></li>
        <li><strong>Submit your progress online.</strong><span>Each fish submission includes the catch date, water, contact information, fishing license number, and a photo. The 100 Fish Challenge uses a final photo plus a species-count list.</span></li>
        <li><strong>Mark the challenge complete.</strong><span>On the final submission, indicate that you completed the challenge so Game and Fish can verify the entries.</span></li>
      </ol>
      <a className="btn primary" href={rules} target="_blank" rel="noreferrer">Read the 2026 official rules ↗</a>
    </div><aside className="challenge-side"><p className="eyebrow">RECOGNITION</p><h2>Certificate + sticker.</h2><p>Verified finishers receive a certificate of achievement and a challenge-specific sticker, and may be listed among the department's 2026 challenge winners.</p><p>The annual challenge is separate from North Dakota's ongoing Whopper Club, Catch and Release Club, and state record program.</p><a className="btn secondary" href={challenge} target="_blank" rel="noreferrer">North Dakota Fish Challenge ↗</a></aside></section>

    <section className="section qualification-section alabama-size-section" id="clubs"><div className="section-heading">
      <p className="eyebrow">WHOPPER &amp; CATCH AND RELEASE CLUBS</p><h2>Turn one big fish into official recognition.</h2>
      <p>The Whopper Club recognizes listed species that meet a minimum weight. The Catch and Release Club uses minimum lengths for eligible species that are released unharmed.</p>
    </div><div className="qualification-table-wrap alabama-table-wrap"><table><caption className="visually-hidden">Selected North Dakota Whopper Club and Catch and Release Club minimums</caption><thead><tr><th scope="col">Species</th><th scope="col">Whopper weight</th><th scope="col">Release length</th></tr></thead><tbody>{trophyExamples.map(([name, weight, length]) => <tr key={name}><th scope="row">{name}</th><td>{weight}</td><td>{length}</td></tr>)}</tbody></table></div>
      <p className="alabama-threshold-note">Whopper Club entries must be submitted within 90 days and only one application per species is allowed in an angler's lifetime. Catch and Release entries also have a 90-day deadline and allow up to five recognized entries per species per year.</p>
      <div className="actions"><a className="btn primary" href={clubs} target="_blank" rel="noreferrer">All club minimums &amp; applications ↗</a></div>
    </section>

    <section className="section challenge-layout"><div><p className="eyebrow">WHOPPER CLUB</p><h2>Weight-based trophy recognition.</h2><p>A qualifying fish must be legally harvested from North Dakota waters open to public fishing and weighed on a scale used in trade. The application records weight, length, catch date and water, plus signatures from the angler and person weighing the fish.</p><a className="btn primary" href={clubs} target="_blank" rel="noreferrer">Whopper Club details ↗</a></div><aside className="challenge-side"><p className="eyebrow">CATCH AND RELEASE CLUB</p><h2>Length-based recognition.</h2><p>Meet the published minimum length, release the fish unharmed, and have another angler witness and verify both the measurement and release.</p><a className="btn secondary" href={clubs} target="_blank" rel="noreferrer">Catch and Release details ↗</a></aside></section>

    <section className="section final-cta challenge-final"><p className="eyebrow">STATE RECORD PATH</p><h2>Think you caught the biggest?</h2><p>North Dakota's state record process is separate and requires a legally harvested fish, certified commercial-scale weight, witness verification, a recognizable photo, and visual verification of the actual fish by Game and Fish within 30 days.</p><div className="actions"><a className="btn primary" href={records} target="_blank" rel="noreferrer">State record requirements ↗</a><a className="btn secondary" href="/states">Back to all states</a></div></section>

    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
