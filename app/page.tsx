import { accessAreas, guidePath } from "./states/oklahoma/lower-illinois-river/guide-data";

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const featured = [
  { state: "Missouri", title: "Blue Ribbon Trout Slam", detail: "Fish 5, 7, or all 9 Blue Ribbon Trout Areas for Bronze, Silver, or Gold.", href: "#missouri" },
  { state: "Utah", title: "Utah Cutthroat Slam", detail: "Catch Utah’s four native cutthroat trout subspecies in their native ranges.", href: "/states/utah/challenge" },
  { state: "Texas", title: "Texas Elite Angler", detail: "Earn Big Fish awards for five different freshwater or saltwater species.", href: "/states/texas/challenge" },
  { state: "Kansas", title: "Kansas Master Angler", detail: "Catch a fish that meets Kansas’s official trophy-length standard.", href: "/states/kansas/challenge" },
  { state: "New Mexico", title: "New Mexico Fish Challenges", detail: "Complete the five-trout or four-bass official species challenge.", href: "/states/new-mexico/challenge" },
  { state: "Colorado", title: "Colorado Master Angler", detail: "Catch a fish that meets Colorado’s official trophy-length standard.", href: "/states/colorado/challenge" },
  { state: "Pennsylvania", title: "Pennsylvania Angler Awards", detail: "Earn recognition by weight, catch-and-release length, first fish, or a 50-inch musky.", href: "/states/pennsylvania/challenge" },
  { state: "Ohio", title: "Fish Ohio & Master Angler", detail: "Catch one qualifying trophy fish—or four different species in one year for Master Angler.", href: "/states/ohio/challenge" },
  { state: "Illinois", title: "Illinois Master Angler", detail: "Catch five different Illinois species and create an official personalized certificate.", href: "/states/illinois/challenge" }
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <div className="brand">FISH THE FIFTY</div>
          <nav>
            <a href="/states">States</a>
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
              <a className="btn primary" href="/states">Explore the 50 States</a>
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
        <div><strong>{featured.length}</strong><span>Featured Challenges</span></div>
        <div><strong>1</strong><span>National Adventure</span></div>
      </section>

      <section className="water-guide-feature" aria-labelledby="featured-water-heading">
        <div><p className="eyebrow">NEW · OKLAHOMA WATER GUIDE</p><h2 id="featured-water-heading">Meet the Lower Illinois River.</h2><p>{accessAreas.length} public access areas, map links, and official resources for planning your next trip.</p></div>
        <a className="btn primary" href={guidePath}>Explore the river →</a>
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
              <a href={item.href}>View challenge →</a>
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
          {states.map((state) => (
            <a key={state} href={state === "Oklahoma" ? "/states/oklahoma" : state === "Kansas" ? "/states/kansas/challenge" : state === "Utah" ? "/states/utah/challenge" : state === "Texas" ? "/states/texas/challenge" : state === "New Mexico" ? "/states/new-mexico/challenge" : state === "Colorado" ? "/states/colorado/challenge" : state === "Pennsylvania" ? "/states/pennsylvania/challenge" : state === "Ohio" ? "/states/ohio/challenge" : state === "Illinois" ? "/states/illinois/challenge" : "/states"}>
              {state}
            </a>
          ))}
        </div>
      </section>

      <section id="progress" className="section final-cta">
        <p className="eyebrow">THE BIG IDEA</p>
        <h2>How many states have you fished?</h2>
        <p>Fish the Fifty will give anglers one place to track states, species, waters, slams, and the fishing adventures still ahead.</p>
        <a className="btn primary" href="/states">Start Your Fifty</a>
      </section>

      <footer>
        <strong>FISH THE FIFTY</strong>
        <span>Built for anglers who want to fish farther.</span>
      </footer>
    </main>
  );
}
