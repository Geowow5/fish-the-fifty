const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const featured = [
  { state: "Missouri", title: "Blue Ribbon Trout Slam", detail: "Fish 5, 7, or all 9 Blue Ribbon Trout Areas for Bronze, Silver, or Gold." },
  { state: "Utah", title: "Utah Cutthroat Slam", detail: "Catch Utah’s four native cutthroat trout subspecies in their native ranges." },
  { state: "Wyoming", title: "Wyoming Cutt-Slam", detail: "Pursue four native cutthroat subspecies across Wyoming’s historic drainages." }
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <div className="brand">FISH THE FIFTY</div>
          <nav>
            <a href="#states">States</a>
            <a href="#challenges">Challenges</a>
            <a href="#progress">My Progress</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">50 STATES. COUNTLESS WATERS. ONE ADVENTURE.</p>
            <h1>Fish the state.<br />Complete the challenge.</h1>
            <p className="lead">Discover fishing opportunities across all 50 states, find public access, explore official state fishing challenges, plan trips, and track the waters you’ve conquered.</p>
            <div className="actions">
              <a className="btn primary" href="#states">Explore the 50 States</a>
              <a className="btn secondary" href="#challenges">Find a Challenge</a>
            </div>
          </div>
          <div className="hero-logo-card">
            <img src="/fish-the-fifty-logo.png" alt="Fish the Fifty logo" />
          </div>
        </div>
      </section>

      <section className="stats">
        <div><strong>50</strong><span>States to Explore</span></div>
        <div><strong>100+</strong><span>Challenge Opportunities</span></div>
        <div><strong>1</strong><span>National Adventure</span></div>
      </section>

      <section id="challenges" className="section">
        <div className="section-heading">
          <p className="eyebrow">FEATURED ADVENTURES</p>
          <h2>State fishing challenges worth traveling for</h2>
          <p>Start with a goal, then use Fish the Fifty to find the water, access points, trip logistics, and your path to completion.</p>
        </div>
        <div className="card-grid">
          {featured.map((item, index) => (
            <article className="challenge-card" key={item.title}>
              <div className="card-number">0{index + 1}</div>
              <span className="state-pill">{item.state}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <a href="#missouri">View challenge →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="missouri" className="section featured-slam">
        <div className="slam-copy">
          <p className="eyebrow">FIRST FULL BUILD</p>
          <h2>Missouri Blue Ribbon Trout Slam</h2>
          <p>Our first complete Fish the Fifty adventure will connect the challenge itself with access, parking, fishing notes, trip planning, and progress tracking.</p>
          <div className="tiers">
            <div><span>BRONZE</span><strong>5 / 9</strong></div>
            <div><span>SILVER</span><strong>7 / 9</strong></div>
            <div><span>GOLD</span><strong>9 / 9</strong></div>
          </div>
        </div>
        <div className="progress-card">
          <div className="progress-top"><span>Your Progress</span><strong>0 / 9</strong></div>
          <div className="progress-track"><span /></div>
          <div className="water-list">
            {["Barren Fork Creek","Blue Springs Creek","Crane Creek","Current River","Eleven Point River","Little Piney Creek","Mill Creek","North Fork","Spring Creek"].map((water) => (
              <div key={water}><span className="check" />{water}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="states" className="section states-section">
        <div className="section-heading">
          <p className="eyebrow">EXPLORE THE COUNTRY</p>
          <h2>Pick a state. Find your next adventure.</h2>
          <p>Every state will eventually have its own challenge guide, fishing waters, access information, and trip-planning tools.</p>
        </div>
        <div className="states-grid">
          {states.map((state) => <button key={state}>{state}</button>)}
        </div>
      </section>

      <section id="progress" className="section final-cta">
        <p className="eyebrow">THE BIG IDEA</p>
        <h2>How many states have you fished?</h2>
        <p>Fish the Fifty will give anglers one place to track states, species, waters, slams, and the fishing adventures still ahead.</p>
        <a className="btn primary" href="#states">Start Your Fifty</a>
      </section>

      <footer>
        <strong>FISH THE FIFTY</strong>
        <span>Built for anglers who want to fish farther.</span>
      </footer>
    </main>
  );
}
