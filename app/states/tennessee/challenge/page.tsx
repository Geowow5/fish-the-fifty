import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennessee Angler Recognition Program | Fish the Fifty",
  description: "Explore Tennessee TARP trophy lengths, Master Angler levels I–V, measurement evidence, and the 90-day application deadline.",
};
const tarp = "https://www.tn.gov/twra/fishing/tennessee-angler-recognition-program.html";
const regulations = "https://www.tn.gov/twra/fishing-regs.html";
const records = "https://www.tn.gov/twra/fishing/awards-fish-records-photos.html";
const firstFish = "https://www.tn.gov/twra/fishing/youth-fishing.html";
const species = [
  ["Largemouth bass",22],["Spotted bass",18],["Smallmouth bass",20],["Striped bass",40],
  ["Cherokee bass (hybrid striped bass)",28],["White bass",18],["Yellow bass",11],
  ["Crappie (black or white)",14],["Bluegill",10],["Redear sunfish",11],["Rock bass",10],
  ["Sauger",20],["Walleye",28],["Yellow perch",11],["Muskellunge",40],
  ["Brook trout",10],["Brown trout",26],["Rainbow trout",24],["Lake trout",28],
  ["Channel catfish",28],["Blue catfish",36],["Flathead catfish",36],["Common carp",34],
  ["Freshwater drum",28],["Bowfin",26],["Longnose gar",45],
] as const;
const levels = [
  ["Trophy Fish Certificate", "One qualifying fish", "Species certificate; $5 processing fee per application."],
  ["Master Angler I", "Five qualifying fish in any combination", "Certificate and patch."],
  ["Master Angler II", "Five different qualifying species", "Certificate and patch."],
  ["Master Angler III", "Ten different qualifying species", "Certificate and patch; TWRA also lists a sponsor gift card."],
  ["Master Angler IV", "Fifteen different qualifying species", "Certificate, patch and trophy."],
  ["Master Angler V", "Twenty different qualifying species", "Certificate, patch and engraved plaque."],
] as const;

export default function TennesseeChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/members">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>Tennessee</span></div>
    <section className="page-hero challenge-hero"><div className="page-hero-inner"><p className="eyebrow">TENNESSEE · TWRA ANGLER RECOGNITION</p><h1>Trophy fish.<br />Master Angler goals.</h1><p className="lead">Measure a qualifying Tennessee catch and work toward trophy certificates or five Master Angler levels through the Tennessee Angler Recognition Program, known as TARP.</p><div className="state-facts"><span>27 qualifying species</span><span>Length-based awards</span><span>Mail within 90 days</span></div><div className="actions"><a className="btn primary" href="#levels">Choose your award goal ↓</a><a className="btn secondary" href="#sizes">Qualifying lengths ↓</a></div></div></section>
    <section className="section" id="levels"><div className="section-heading"><p className="eyebrow">SIX RECOGNITION LEVELS</p><h2>Start with one fish. Build your collection.</h2><p>Master Angler awards are issued at no additional cost. Each individual Trophy Fish application has a $5 processing fee. Check TWRA for current award details.</p></div><div className="card-grid">{levels.map(([name, goal, reward]) => <article className="challenge-card" key={name}><span className="state-pill">TARP</span><h3>{name}</h3><p><strong>{goal}</strong></p><p>{reward}</p><a href={tarp} target="_blank" rel="noreferrer">Official award details ↗</a></article>)}</div></section>
    <section className="section challenge-layout"><div><p className="eyebrow">QUALIFY AND APPLY</p><h2>Measure, verify, mail.</h2><ol className="challenge-steps"><li><strong>Catch a qualifying fish legally.</strong><span>Use rod and reel or cane pole in Tennessee waters. Anglers of any age may participate; TWRA requires anglers age 13 or older to provide their license number.</span></li><li><strong>Verify the length.</strong><span>Use a witness who completes the application section, or photograph the fish lying flat on or beside a flat ruler or measuring tape. TWRA may request a fish photo for any entry.</span></li><li><strong>Complete one form per fish.</strong><span>Include measurement evidence and the $5 processing fee for each Trophy Fish application, following the official form's payment instructions.</span></li><li><strong>Mail within 90 days of the catch.</strong><span>Send the completed form and required evidence to the address on TWRA's application.</span></li></ol><a className="btn primary" href={tarp} target="_blank" rel="noreferrer">Official rules &amp; application ↗</a></div><aside className="challenge-side"><p className="eyebrow">CATCH AND RELEASE</p><h2>A trophy does not need to be a record.</h2><p>TARP recognizes fish by length and encourages catch and release. Tennessee's state record program is separate and recognizes the largest recorded fish by weight.</p><p>A TARP qualifying length does not replace a water's legal harvest limits. Check current regulations for your exact species and water.</p><a className="btn secondary" href={regulations} target="_blank" rel="noreferrer">Fishing regulations ↗</a></aside></section>
    <section className="section qualification-section alabama-size-section" id="sizes"><div className="section-heading"><p className="eyebrow">TARP QUALIFYING LENGTHS</p><h2>Know your trophy benchmark.</h2><p>Fish must meet or exceed these lengths in inches. TWRA lists black and white crappie together in its minimum-length chart; they appear separately in its entry summary. Confirm the current official table before applying.</p></div><div className="qualification-table-wrap alabama-table-wrap"><table><caption className="visually-hidden">Tennessee TARP qualifying species and minimum lengths</caption><thead><tr><th scope="col">Species</th><th scope="col">Minimum length</th></tr></thead><tbody>{species.map(([name, length]) => <tr key={name}><th scope="row">{name}</th><td>{length} in</td></tr>)}</tbody></table></div><div className="actions"><a className="btn secondary" href={tarp} target="_blank" rel="noreferrer">Check current TWRA lengths ↗</a></div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">OTHER TENNESSEE RECOGNITION</p><h2>First catches and record fish.</h2></div><div className="card-grid"><article className="challenge-card"><span className="state-pill">STATE RECORD</span><h3>A possible new record</h3><p>Contact a TWRA fisheries biologist promptly for species identification and the official record application. Review the full process before retaining a potential record.</p><a href={records} target="_blank" rel="noreferrer">State record rules ↗</a></article><article className="challenge-card"><span className="state-pill">FIRST FISH</span><h3>Celebrate the first catch</h3><p>TWRA offers a First Fish certificate, including an option to request a signed certificate through its official form.</p><a href={firstFish} target="_blank" rel="noreferrer">First Fish certificate ↗</a></article></div></section>
    <section className="section final-cta challenge-final"><p className="eyebrow">READY TO START?</p><h2>Pick your first TARP target.</h2><p>Check the minimum length, pack a flat measuring rule, and keep the application deadline in mind.</p><div className="actions"><a className="btn primary" href={tarp} target="_blank" rel="noreferrer">Open Tennessee TARP ↗</a><a className="btn secondary" href="/states">Back to all states</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
