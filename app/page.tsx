import { accessAreas, guidePath } from "./states/oklahoma/lower-illinois-river/guide-data";

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const featured = [
  { state: "Alabama", title: "Alabama Master & Trophy Angler", detail: "Compare the official weight and length standards for 18 freshwater species and track potential recognition.", href: "/states/alabama/challenge" },
  { state: "Alaska", title: "Alaska Fishing Slams", detail: "Plan the Stream, Stillwater, Saltwater, and Five Salmon challenges, plus Master the Waters.", href: "/states/alaska/challenge" },
  { state: "Arizona", title: "Arizona Trout & Wild Trout Challenges", detail: "Catch six of eight trout species, or complete the five-species Wild Trout Challenge.", href: "/states/arizona/challenge" },
  { state: "Arkansas", title: "Arkansas Master Angler", detail: "Catch qualifying trophy fish from four of eight categories—across as many years as needed.", href: "/states/arkansas/challenge" },
  { state: "California", title: "California Heritage Trout", detail: "Catch six of California’s 11 native trout forms within their historic drainages.", href: "/states/california/challenge" },
  { state: "Colorado", title: "Colorado Master Angler", detail: "Catch a fish that meets Colorado’s official trophy-length standard.", href: "/states/colorado/challenge" },
  { state: "Connecticut", title: "Connecticut Trophy Fish Awards", detail: "Compare DEEP freshwater trophy sizes, plan catch-and-release entries, and explore its youth challenge.", href: "/states/connecticut/challenge" },
  { state: "Delaware", title: "Delaware Elite Angler", detail: "Earn citations for five different species in one calendar year through Delaware’s Sport Fishing Tournament.", href: "/states/delaware/challenge" },
  { state: "Florida", title: "Florida FWC Angler Recognition", detail: "Track Big Catch, 8-pound TrophyCatch bass, and the 75-species saltwater Life List.", href: "/states/florida/challenge" },
  { state: "Georgia", title: "Georgia Bass Slam", detail: "Catch five of Georgia’s 10 eligible black bass species in a calendar year.", href: "/states/georgia/challenge" },
  { state: "Hawaii", title: "Hawaii Island Waters Challenge", detail: "Make a personal marine and freshwater checklist, and explore independently maintained fish records.", href: "/states/hawaii/challenge" },
  { state: "Idaho", title: "Idaho State Record Fish", detail: "Explore certified-weight and catch-and-release records, plus Idaho native trout targets.", href: "/states/idaho/challenge" },
  { state: "Illinois", title: "Illinois Master Angler", detail: "Catch five different Illinois species and create an official personalized certificate.", href: "/states/illinois/challenge" },
  { state: "Indiana", title: "Indiana Fish of the Year", detail: "Pursue the longest fish of the year or challenge an all-time state record by weight.", href: "/states/indiana/challenge" },
  { state: "Iowa", title: "Iowa Master Angler", detail: "Catch qualifying fish across five species for Silver or ten for Gold; track species and sizes.", href: "/states/iowa/challenge" },
  { state: "Kansas", title: "Kansas Master Angler", detail: "Catch a fish that meets Kansas’s official trophy-length standard.", href: "/states/kansas/challenge" },
  { state: "Kentucky", title: "Kentucky Master Angler", detail: "Register qualifying trophy fish from three different species with no overall completion deadline.", href: "/states/kentucky/challenge" },
  { state: "Missouri", title: "Blue Ribbon Trout Slam", detail: "Fish 5, 7, or all 9 Blue Ribbon Trout Areas for Bronze, Silver, or Gold.", href: "/states/missouri/challenge" },
  { state: "Montana", title: "Montana Fish Records", detail: "Compare standing state records and prepare the certified-weight and FWP verification steps.", href: "/states/montana/challenge" },
  { state: "New Mexico", title: "New Mexico Fish Challenges", detail: "Complete the five-trout or four-bass official species challenge.", href: "/states/new-mexico/challenge" },
  { state: "New York", title: "New York Angler Achievement Awards", detail: "Compare adult and youth trophy lengths for 40 freshwater species and plan entries.", href: "/states/new-york/challenge" },
  { state: "Ohio", title: "Fish Ohio & Master Angler", detail: "Catch one qualifying trophy fish—or four different species in one year for Master Angler.", href: "/states/ohio/challenge" },
  { state: "Pennsylvania", title: "Pennsylvania Angler Awards", detail: "Earn recognition by weight, catch-and-release length, first fish, or a 50-inch musky.", href: "/states/pennsylvania/challenge" },
  { state: "Texas", title: "Texas Elite Angler", detail: "Earn Big Fish awards for five different freshwater or saltwater species.", href: "/states/texas/challenge" },
  { state: "Utah", title: "Utah Cutthroat Slam", detail: "Catch Utah’s four native cutthroat trout subspecies in their native ranges.", href: "/states/utah/challenge" },
  { state: "Wyoming", title: "Wyoming Cutt-Slam & Master Angler", detail: "Catch four native cutthroats or pursue qualifying fish across 24 Master Angler species.", href: "/states/wyoming/challenge" }
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
          <p>Catch trout in five of Missouri’s nine Blue Ribbon Trout Areas for Bronze, seven for Silver, or all nine for Gold. Explore the official stream reaches and keep a private checklist as you plan.</p>
          <div className="tiers">
            <div><span>BRONZE</span><strong>5 / 9</strong></div>
            <div><span>SILVER</span><strong>7 / 9</strong></div>
            <div><span>GOLD</span><strong>9 / 9</strong></div>
          </div>
          <a className="btn primary" href="/states/missouri/challenge">Open the Missouri guide →</a>
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
            <a key={state} href={state === "Hawaii" ? "/states/hawaii/challenge" : state === "Alabama" ? "/states/alabama/challenge" : state === "Alaska" ? "/states/alaska/challenge" : state === "Connecticut" ? "/states/connecticut/challenge" : state === "Delaware" ? "/states/delaware/challenge" : state === "Idaho" ? "/states/idaho/challenge" : state === "Indiana" ? "/states/indiana/challenge" : state === "Iowa" ? "/states/iowa/challenge" : state === "Kentucky" ? "/states/kentucky/challenge" : state === "Montana" ? "/states/montana/challenge" : state === "Wyoming" ? "/states/wyoming/challenge" : state === "New York" ? "/states/new-york/challenge" : state === "Oklahoma" ? "/states/oklahoma" : state === "Missouri" ? "/states/missouri" : state === "Arizona" ? "/states/arizona/challenge" : state === "Kansas" ? "/states/kansas/challenge" : state === "Utah" ? "/states/utah/challenge" : state === "Texas" ? "/states/texas/challenge" : state === "New Mexico" ? "/states/new-mexico/challenge" : state === "Colorado" ? "/states/colorado/challenge" : state === "Pennsylvania" ? "/states/pennsylvania/challenge" : state === "Ohio" ? "/states/ohio/challenge" : state === "Illinois" ? "/states/illinois/challenge" : state === "Arkansas" ? "/states/arkansas/challenge" : state === "California" ? "/states/california/challenge" : state === "Florida" ? "/states/florida/challenge" : state === "Georgia" ? "/states/georgia/challenge" : "/states"}>
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
