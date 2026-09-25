import type { Metadata } from "next";
import TexasEliteTracker from "./tracker";
import { freshwaterSpecies, saltwaterSpecies } from "./eligible-species";

export const metadata: Metadata = {
  title: "Texas Elite Angler Challenge | Fish the Fifty",
  description: "Track five different qualifying Big Fish Awards toward Texas Parks and Wildlife's Elite Angler recognition.",
};

const links = {
  awards: "https://tpwd.texas.gov/fishboat/fish/programs/fishrecords/rules/other_awards.phtml",
  instructions: "https://tpwd.texas.gov/fishboat/fish/programs/fishrecords/rules/",
  records: "https://tpwd.texas.gov/fishboat/fish/programs/fishrecords/",
  shareLunker: "https://texassharelunker.com/",
  fishing: "https://tpwd.texas.gov/fishing/",
};

function MinimumTable({ title, fish }: { title: string; fish: readonly (readonly [string, number])[] }) {
  return <div className="qualification-table-wrap"><table><caption className="texas-table-caption">{title}</caption><thead><tr><th scope="col">Eligible species</th><th scope="col">Big Fish minimum</th></tr></thead><tbody>{fish.map(([species, inches]) => <tr key={species}><th scope="row">{species}</th><td>{inches}&quot;</td></tr>)}</tbody></table></div>;
}

export default function TexasCompetitionPage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states">Texas</a><span aria-hidden="true"> / </span><span>Competition</span></div>

    <section className="page-hero challenge-hero texas-hero"><div className="page-hero-inner"><p className="eyebrow">TEXAS · OFFICIAL TPWD PROGRAM</p><h1>Earn your<br />Elite Angler status.</h1><p className="lead">Catch five qualifying trophy fish from five different species in one division—freshwater or saltwater—and work toward Texas Parks and Wildlife Department’s Elite Angler Award.</p><div className="state-facts"><span>5 different species</span><span>Freshwater or saltwater</span><span>No time limit to complete</span><span>Photos required</span></div><div className="actions"><a className="btn primary" href={links.awards}>Read Elite Angler rules ↗</a><a className="btn secondary" href={links.records}>TPWD Fish Records & Awards ↗</a></div></div></section>

    <section className="section challenge-layout">
      <div><TexasEliteTracker /><div className="challenge-note"><strong>Planning tool only.</strong><p>Your checklist is saved in this browser. Fish the Fifty does not verify catches or submit awards. TPWD requires a separate application for each Big Fish Award.</p></div></div>
      <aside className="challenge-side"><p className="eyebrow">HOW THE CHALLENGE WORKS</p><h2>Five species. One division.</h2><ol className="challenge-steps"><li><strong>Choose freshwater or saltwater.</strong><span>Elite Angler requires five freshwater awards or five saltwater awards. The two divisions cannot be combined for this award.</span></li><li><strong>Meet each Big Fish minimum.</strong><span>Catch one trophy-class fish for each of five different species. Weighing is encouraged but not required; minimum lengths apply.</span></li><li><strong>Take clear photos.</strong><span>Photos are required with Big Fish Award applications. Measure the fish with its jaw closed and tail positioned for maximum length.</span></li><li><strong>Apply within 60 days.</strong><span>There is no deadline for completing all five species, but each Big Fish application must be received by TPWD within 60 days of that fish’s catch.</span></li></ol><a className="btn primary" href={links.instructions}>TPWD application instructions ↗</a></aside>
    </section>

    <section className="section qualification-section texas-minimums"><div className="section-heading"><p className="eyebrow">TPWD BIG FISH MINIMUM LENGTHS</p><h2>Know the qualifying size.</h2><p>Each fish must meet or exceed the current minimum for its species. The tables below reflect TPWD’s published Big Fish Award thresholds; check the official rules before submitting.</p></div><div className="texas-tables"><MinimumTable title="Freshwater division" fish={freshwaterSpecies} /><MinimumTable title="Saltwater division" fish={saltwaterSpecies} /></div></section>

    <section className="section texas-side-program"><div className="texas-share-card"><div><p className="eyebrow">BASS-SPECIFIC RECOGNITION</p><h2>Chasing a Texas lunker?</h2><p>TPWD’s Toyota ShareLunker is a separate largemouth bass program. Anglers can enter a bass at least 8 pounds or 24 inches during its year-round season. Larger fish have additional recognition classes, including the 13-pound Legacy Class.</p></div><a className="btn secondary" href={links.shareLunker}>Explore Toyota ShareLunker ↗</a></div></section>

    <section className="section final-cta challenge-final"><p className="eyebrow">READY TO START?</p><h2>Check the rules, then go fishing.</h2><p>Every qualifying fish must be legally caught in Texas waters. TPWD’s program controls eligibility, applications, and award decisions; check current regulations and submission instructions before your trip.</p><div className="actions"><a className="btn primary" href={links.awards}>Official Big Fish & Elite rules ↗</a><a className="btn secondary" href={links.fishing}>TPWD fishing resources ↗</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
