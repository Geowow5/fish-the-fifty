const waters = [
  { name: "Lower Illinois River", detail: "Year-round tailwater trout fishing below Lake Tenkiller, with public access near Gore." },
  { name: "Blue River", detail: "A scenic public fishing area known for seasonal trout and warmwater fishing." },
  { name: "Lake Texoma", detail: "One of the country’s best-known inland striped bass fisheries." },
  { name: "Sooner Lake", detail: "A productive warmwater lake for striped bass hybrids, catfish, drum, and white bass." },
  { name: "Mountain Fork River", detail: "Cold-water trout fishing below Broken Bow Lake in southeastern Oklahoma." }
];

export default function OklahomaPage() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <div className="breadcrumb"><a href="/states">← All States</a></div>
      <section className="page-hero state-detail-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">STATE GUIDE 01</p>
          <h1>Fish Oklahoma.</h1>
          <p className="lead">From cold-water trout tailwaters to prairie reservoirs and rivers full of bass, catfish, and freshwater drum, Oklahoma offers more variety than many traveling anglers expect.</p>
          <div className="state-facts"><span>South Central</span><span>200+ lakes</span><span>Trout to trophy stripers</span><span>Year-round fishing</span></div>
        </div>
      </section>

      <section className="section detail-grid">
        <article className="detail-panel">
          <p className="eyebrow">START HERE</p>
          <h2>Featured public waters</h2>
          <p>A starter collection of distinctive Oklahoma fisheries. Access details, maps, seasonal notes, and regulations can be added as each water guide is completed.</p>
          <div className="water-cards">
            {waters.map((water) => <div className="water-card" key={water.name}><strong>{water.name}</strong><span>{water.detail}</span></div>)}
          </div>
        </article>

        <aside className="detail-panel">
          <p className="eyebrow">WHAT YOU CAN CATCH</p>
          <h2>Featured species</h2>
          <div className="species-list">
            {["Largemouth Bass", "Smallmouth Bass", "Striped Bass", "Hybrid Striped Bass", "Rainbow Trout", "Brown Trout", "Crappie", "Blue Catfish", "Freshwater Drum", "White Bass", "Walleye", "Paddlefish"].map((species) => <span key={species}>{species}</span>)}
          </div>
          <div className="challenge-callout">
            <p className="eyebrow">CHALLENGE SPOTLIGHT</p>
            <h3>Oklahoma fishing challenges</h3>
            <p>This section will connect official programs, qualifying species or waters, completion requirements, and submission links as they are verified.</p>
          </div>
          <a className="back-link" href="/states">Explore all 50 states →</a>
        </aside>
      </section>

      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </main>
  );
}
