import type { Metadata } from "next";
import NewMexicoTracker from "./tracker";

export const metadata: Metadata = {
  title: "New Mexico Fishing Challenges | Fish the Fifty",
  description: "Plan and track New Mexico's official Trout Challenge and Bass Challenge, with links to Master Angler and Record Fish recognition.",
};

const links = {
  trout: "https://wildlife.dgf.nm.gov/fishing/fishing-challenges/nmtc/",
  bass: "https://wildlife.dgf.nm.gov/fishing/fishing-challenges/nmbc/",
  master: "https://wildlife.dgf.nm.gov/fishing/fishing-challenges/new-mexico-master-angler/",
  records: "https://wildlife.dgf.nm.gov/fishing/fishing-challenges/record-fish-award/",
  license: "https://wildlife.dgf.nm.gov/hunting/licenses-and-permits/licenses-permits/",
  reports: "https://wildlife.dgf.nm.gov/fishing/weekly-report/",
};

const programs = [
  { title: "Trout Challenge", target: "5 species", detail: "Rio Grande cutthroat, Gila, brown, brook and rainbow trout.", href: links.trout },
  { title: "Bass Challenge", target: "4 species", detail: "Spotted, white, largemouth and smallmouth bass.", href: links.bass },
  { title: "Master Angler", target: "26 species", detail: "Meet the official minimum length for one—or pursue all—eligible species.", href: links.master },
  { title: "Record Fish", target: "25 species", detail: "Exceed the current weight record and complete official certification.", href: links.records },
];

export default function NewMexicoChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states/new-mexico/challenge">New Mexico</a><span aria-hidden="true"> / </span><span>Challenges</span></div>

    <section className="page-hero challenge-hero nm-hero"><div className="page-hero-inner"><p className="eyebrow">NEW MEXICO · OFFICIAL NMDOW PROGRAMS</p><h1>Desert bass.<br />Native trout.</h1><p className="lead">Complete New Mexico’s official five-species Trout Challenge, four-species Bass Challenge—or pursue trophy recognition through Master Angler and Record Fish.</p><div className="state-facts"><span>2 multispecies challenges</span><span>No entry fee</span><span>No completion deadline</span><span>Residents and visitors eligible</span></div><div className="actions"><a className="btn primary" href={links.trout}>Official Trout Challenge ↗</a><a className="btn secondary" href={links.bass}>Official Bass Challenge ↗</a></div></div></section>

    <section className="section challenge-layout">
      <div><NewMexicoTracker /><div className="challenge-note"><strong>Planning tool only.</strong><p>Fish the Fifty does not verify catches or submit entries. New Mexico Department of Wildlife controls eligibility, challenge verification and awards.</p></div></div>
      <aside className="challenge-side"><p className="eyebrow">HOW TO COMPLETE A CHALLENGE</p><h2>Catch, document, submit.</h2><ol className="challenge-steps"><li><strong>Choose trout or bass.</strong><span>You may pursue either official challenge—or work on both during the same New Mexico adventure.</span></li><li><strong>Fish eligible public waters.</strong><span>Private Class A lakes and other privately stocked waters are excluded. Follow all current water-specific regulations.</span></li><li><strong>Photograph every species.</strong><span>Keep the waterbody and catch date with each photo. A Customer Identification Number is required for every participant.</span></li><li><strong>Submit the complete set.</strong><span>Email all catches together to dgf-fishingchallenges@dgf.nm.gov with the information required by the official rules.</span></li></ol><a className="btn primary" href={links.license}>New Mexico licenses ↗</a></aside>
    </section>

    <section className="section nm-programs"><div className="section-heading"><p className="eyebrow">FOUR OFFICIAL PATHS</p><h2>Choose the achievement that fits your trip.</h2><p>The state’s two species challenges award a certificate, collectible coin and Hall of Fame listing after verification. Trophy-focused anglers can also pursue Master Angler or a state record.</p></div><div className="card-grid">{programs.map((program, index) => <article className="challenge-card compact" key={program.title}><div className="card-number">0{index + 1}</div><span className="state-pill">{program.target}</span><h3>{program.title}</h3><p>{program.detail}</p><a href={program.href}>Official program →</a></article>)}</div></section>

    <section className="section texas-side-program"><div className="texas-share-card"><div><p className="eyebrow">OFFICIAL RECOGNITION</p><h2>What successful challenge anglers receive</h2><p>After the Department verifies a completed Trout or Bass Challenge, the angler receives a certificate of achievement, a challenge coin and a place in the program’s online Hall of Fame.</p></div><a className="btn secondary" href={links.trout}>Review official rules ↗</a></div></section>

    <section className="section final-cta challenge-final"><p className="eyebrow">PLAN THE FIRST CATCH</p><h2>Check conditions before you travel.</h2><p>Review the official challenge rules, current fishing regulations and weekly reports before selecting a water. Native trout waters may have special tackle, season or harvest restrictions.</p><div className="actions"><a className="btn primary" href={links.reports}>New Mexico fishing reports ↗</a><a className="btn secondary" href={links.master}>Explore Master Angler ↗</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
