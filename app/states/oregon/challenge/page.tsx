import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oregon Native Trout Challenge | Fish the Fifty",
  description: "Explore Oregon's five Western Native Trout Challenge species and plan a legal native trout trip with ODFW resources.",
};

const odfw = "https://myodfw.com/articles/meet-western-native-trout-challenge";
const challenge = "https://westernnativetroutchallenge.org/";
const regulations = "https://myodfw.com/articles/oregon-fishing-hunting-regulations-and-updates";
const fishing = "https://myodfw.com/fishing";

const species = [
  ["Redband trout", "Central and southeastern Oregon native waters"],
  ["Coastal cutthroat trout", "Coastal drainages and their tributaries"],
  ["Westslope cutthroat trout", "Northeastern Oregon native range"],
  ["Lahontan cutthroat trout", "Southeastern Oregon native range"],
  ["Bull trout", "Designated waters only; carefully check special rules"],
] as const;

export default function OregonChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/members">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>Oregon</span></div>
    <section className="page-hero challenge-hero"><div className="page-hero-inner"><p className="eyebrow">OREGON · WESTERN NATIVE TROUT CHALLENGE</p><h1>Five native trout.<br />One Oregon adventure.</h1><p className="lead">Oregon contributes five trout and char to the Western Native Trout Challenge. Explore their native ranges, photograph qualifying wild catches, and build toward recognition across the West.</p><div className="state-facts"><span>5 Oregon species</span><span>Wild native trout and char</span><span>Multi-state challenge</span></div><div className="actions"><a className="btn primary" href="#species">Explore Oregon species ↓</a><a className="btn secondary" href={challenge} target="_blank" rel="noreferrer">Official challenge ↗</a></div></div></section>
    <section className="section" id="species"><div className="section-heading"><p className="eyebrow">THE OREGON CHECKLIST</p><h2>Find your native fish.</h2><p>ODFW identifies these five Oregon species as part of the Western Native Trout Challenge. A species appearing here does not mean every population or water is open to fishing; verify the current rule for the exact location.</p></div><div className="card-grid">{species.map(([name, range]) => <article className="challenge-card" key={name}><span className="state-pill">NATIVE TROUT TARGET</span><h3>{name}</h3><p>{range}</p><a href={odfw} target="_blank" rel="noreferrer">ODFW species guide ↗</a></article>)}</div></section>
    <section className="section challenge-layout"><div><p className="eyebrow">CHALLENGE PATH</p><h2>Make each catch count.</h2><ol className="challenge-steps"><li><strong>Read the official challenge rules.</strong><span>Check current qualifying species, native range requirements, photo instructions, registration, and award levels with the program organizer.</span></li><li><strong>Choose an open water.</strong><span>ODFW's fishing zones and in-season updates determine seasons, gear, harvest, and release rules for each water.</span></li><li><strong>Photograph and release carefully.</strong><span>Document the species and location as required by the challenge while minimizing handling time, especially for protected native fish.</span></li><li><strong>Submit through the organizer.</strong><span>The Western Native Trout Challenge is a regional program; its official site handles registration and recognition.</span></li></ol><a className="btn primary" href={challenge} target="_blank" rel="noreferrer">Review challenge rules ↗</a></div><aside className="challenge-side"><p className="eyebrow">BEFORE YOU GO</p><h2>Check today's rules.</h2><p>Oregon licenses, tags, endorsements, and fishing restrictions depend on the species and water. Some native populations have special conservation rules. Consult ODFW's current regulations and in-season updates before making a trip.</p><div className="actions"><a className="btn secondary" href={regulations} target="_blank" rel="noreferrer">Regulations &amp; updates ↗</a><a className="btn secondary" href={fishing} target="_blank" rel="noreferrer">ODFW fishing hub ↗</a></div></aside></section>
    <section className="section final-cta challenge-final"><p className="eyebrow">READY TO PLAN?</p><h2>Start with one native trout.</h2><p>Pick a species, locate its native range, check the water's current rules, and carry the organizer's photo requirements with you.</p><div className="actions"><a className="btn primary" href={odfw} target="_blank" rel="noreferrer">ODFW Oregon trout guide ↗</a><a className="btn secondary" href="/states">Back to all states</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
