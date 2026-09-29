import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Jersey Skillful Angler | Fish the Fifty",
  description: "Explore New Jersey Skillful Angler divisions, multi-fish awards, slams, qualifying sizes, and official entry instructions.",
};

const official = "https://dep.nj.gov/njfw/fishing/freshwater/skillful-angler-program/";
const board = "https://dep.nj.gov/njfw/fishing/freshwater/skillful-angler-leaderboards/";
const records = "https://dep.nj.gov/njfw/fishing/freshwater/new-jersey-state-record-fish-program/";
const selected = [
  ["Largemouth bass", "Fresh", "6 lb", "4 lb", "21 in"],
  ["Smallmouth bass", "Fresh", "4 lb", "3 lb", "19 in"],
  ["Brook trout", "Fresh", "3 lb", "2 lb", "11 in"],
  ["Crappie", "Fresh", "2 lb", "1 lb 8 oz", "14 in"],
  ["Striped bass", "Salt", "40 lb", "36 lb", "42 in"],
  ["Fluke", "Salt", "8 lb", "7 lb", "27 in"],
  ["Tautog", "Salt", "8 lb", "7 lb", "22 in"],
] as const;

const slams = [
  ["Salmonid Slam", "Three qualifying species among lake, brook, brown, and rainbow trout and landlocked Atlantic salmon."],
  ["Bass Slam", "One qualifying largemouth bass and one qualifying smallmouth bass."],
  ["Panfish Slam", "One qualifying sunfish, crappie, and yellow perch."],
  ["Inshore Slam I", "One qualifying striped bass, bluefish, and fluke."],
  ["Inshore Slam II", "One qualifying black sea bass, tautog, and weakfish."],
  ["Offshore Pelagics & Marlin", "Qualifying bluefin, bigeye, yellowfin tuna and dolphin for the Offshore Pelagics Slam; white and blue marlin for the Marlin Slam."],
] as const;

export default function NewJerseyChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/members">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>New Jersey</span></div>
    <section className="page-hero challenge-hero"><div className="page-hero-inner"><p className="eyebrow">NEW JERSEY · FISH &amp; WILDLIFE</p><h1>New Jersey<br />Skillful Angler.</h1><p className="lead">A qualifying catch can earn a certificate and patch. Pursue a single trophy fish, build toward Specialist, Master, Elite, or Grandmaster recognition, or complete a freshwater or saltwater Slam.</p><div className="state-facts"><span>43 fish species</span><span>Fresh &amp; saltwater</span><span>30-day entry window</span></div><div className="actions"><a className="btn primary" href="#award-paths">Explore awards ↓</a><a className="btn secondary" href={official} target="_blank" rel="noreferrer">Official Skillful Angler ↗</a></div></div></section>
    <section className="section challenge-layout" id="award-paths"><div><p className="eyebrow">FOUR DIVISIONS</p><h2>Pick the right entry.</h2><ol className="challenge-steps"><li><strong>Adult or Junior.</strong><span>Adult and Junior (under 16) qualifying catches use species-specific weight thresholds. The junior minimums differ from adult minimums.</span></li><li><strong>Catch and Release.</strong><span>Qualify by length. Compare the species-specific minimum, and check the official list because some species have no release category.</span></li><li><strong>First Fish.</strong><span>New anglers of any age can commemorate their first fish, of any species and size, with a certificate.</span></li><li><strong>Send the application.</strong><span>Email the completed official form and photo or photos to NJSkillfulAngler@dep.nj.gov within 30 days of the catch. Follow the current form’s evidence instructions.</span></li></ol><a className="btn primary" href={official} target="_blank" rel="noreferrer">Rules, sizes, and application ↗</a></div><aside className="challenge-side"><p className="eyebrow">QUALIFYING CATCHES</p><h2>Build a year of awards.</h2><p><strong>Specialist:</strong> five qualifying fish of one species. <strong>Master:</strong> five qualifying fish of five different species. <strong>Elite:</strong> at least ten qualifying fish. <strong>Grandmaster:</strong> at least ten qualifying fish of different species.</p><p>Each multi-fish award must be completed within one calendar year. Freshwater and saltwater qualifying fish can count together for Master, Elite, and Grandmaster.</p><a className="btn secondary" href={official} target="_blank" rel="noreferrer">See award categories ↗</a></aside></section>
    <section className="section qualification-section alabama-size-section" id="sizes"><div className="section-heading"><p className="eyebrow">SELECTED QUALIFYING SIZES</p><h2>Check your division’s minimum.</h2><p>These are examples from NJ Fish &amp; Wildlife’s published Skillful Angler table. Review the complete current table, legal seasons, and harvest limits before fishing.</p></div><div className="qualification-table-wrap alabama-table-wrap"><table><caption className="visually-hidden">Selected New Jersey Skillful Angler minimums</caption><thead><tr><th scope="col">Species</th><th scope="col">Water</th><th scope="col">Adult weight</th><th scope="col">Junior weight</th><th scope="col">Release length</th></tr></thead><tbody>{selected.map(([name, water, adult, junior, release]) => <tr key={`${water}-${name}`}><th scope="row">{name}</th><td>{water}</td><td>{adult}</td><td>{junior}</td><td>{release}</td></tr>)}</tbody></table></div><p className="alabama-threshold-note">Saltwater striped bass and freshwater striped bass have different qualification thresholds. A qualifying award weight does not override a species’ harvest restrictions.</p><div className="actions"><a className="btn primary" href={official} target="_blank" rel="noreferrer">See all 43 species ↗</a></div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">FRESHWATER &amp; SALTWATER SLAMS</p><h2>Make a year of it.</h2><p>Each Slam calls for qualifying fish of its specified species within one calendar year. A catch must meet its Adult, Junior, or Catch and Release standard as applicable; a species sighting alone does not qualify.</p></div><div className="card-grid">{slams.map(([name, description]) => <article className="challenge-card" key={name}><span className="state-pill">SKILLFUL ANGLER SLAM</span><h3>{name}</h3><p>{description}</p><a href={official} target="_blank" rel="noreferrer">Official Slam rules ↗</a></article>)}</div></section>
    <section className="section challenge-layout"><div><p className="eyebrow">LEADER BOARD</p><h2>See this year’s contenders.</h2><p>NJ Fish &amp; Wildlife posts current leaders by species for freshwater and saltwater Adult, Junior, and Catch and Release categories. Qualifying entrants receive a certificate and qualifier patch; annual winners also receive a winner certificate and patch.</p><a className="btn primary" href={board} target="_blank" rel="noreferrer">Current Skillful Angler leaders ↗</a></div><aside className="challenge-side"><p className="eyebrow">ALL-TIME RECORDS</p><h2>For an exceptional fish.</h2><p>New Jersey maintains a separate State Record Fish Program. Check its record list and specific verification procedure if your catch might challenge an all-time mark.</p><a className="btn secondary" href={records} target="_blank" rel="noreferrer">State record program ↗</a></aside></section>
    <section className="section final-cta challenge-final"><p className="eyebrow">READY TO START?</p><h2>Choose a species or a Slam.</h2><p>Check the live rules and minimums, document your legal catch, and email your official application and photos within 30 days.</p><div className="actions"><a className="btn primary" href={official} target="_blank" rel="noreferrer">New Jersey Skillful Angler ↗</a><a className="btn secondary" href="/states">Back to all states</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
