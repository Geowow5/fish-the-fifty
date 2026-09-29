import type { Metadata } from "next";
import AlaskaTracker from "./tracker";

export const metadata: Metadata = {
  title: "Alaska Fishing Slams & Master the Waters | Fish the Fifty",
  description: "Plan Alaska's official Stream, Stillwater, Saltwater, and Five Salmon Slams and explore Master the Waters recognition.",
};

const official = "https://www.adfg.alaska.gov/index.cfm?adfg=FishingSportFishAK.AnglerRecognition";
const master = "https://www.adfg.alaska.gov/index.cfm?adfg=FishingSportFishAK.MasterTheWaters";
const slams = [
  { name: "Stream Slam", place: "Rivers and streams · 24 hours", fish: "Rainbow trout · Arctic grayling · Dolly Varden", detail: "Catch all three in flowing water. Different rivers or streams may be used; lakes, ponds, and sloughs do not qualify." },
  { name: "Stillwater Slam", place: "Lakes, ponds, or sloughs · 24 hours", fish: "Lake trout · Burbot · Northern pike", detail: "Catch all three in still water. Different waterbodies may be used; flowing rivers and streams do not qualify." },
  { name: "Saltwater Slam", place: "Marine waters · 24 hours", fish: "Halibut · Lingcod · Rockfish", detail: "Catch a halibut, lingcod, and any rockfish in the genus Sebastes. Follow ADF&G deepwater release guidance for rockfish that are released." },
];

export default function AlaskaChallengePage() {
  return <main>
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><span>Alaska</span></div>
    <section className="page-hero challenge-hero"><div className="page-hero-inner">
      <p className="eyebrow">ALASKA · DEPARTMENT OF FISH AND GAME</p>
      <h1>Alaska fishing<br />challenges.</h1>
      <p className="lead">Choose a three-species Slam, catch all five Pacific salmon with your group, or work toward Master the Waters recognition across Alaska’s streams, lakes, and coast.</p>
      <div className="state-facts"><span>3 one-day Slams</span><span>5 Pacific salmon</span><span>3 Master the Waters categories</span></div>
      <div className="actions"><a className="btn primary" href="#slams">Explore the Slams ↓</a><a className="btn secondary" href={official} target="_blank" rel="noreferrer">Official ADF&amp;G programs ↗</a></div>
    </div></section>
    <section className="section" id="slams"><div className="section-heading"><p className="eyebrow">THREE OFFICIAL SLAMS</p><h2>Three species. One 24-hour window.</h2><p>Each Slam requires clear photos showing the species. Fish must be caught legally in waters open to sport fishing. There is no minimum length, and harvest is not required.</p></div>
      <div className="card-grid">{slams.map(s => <article className="challenge-card" key={s.name}><span className="state-pill">{s.place}</span><h3>{s.name}</h3><p><strong>{s.fish}</strong></p><p>{s.detail}</p><a href={official} target="_blank" rel="noreferrer">Rules and affidavit ↗</a></article>)}</div>
    </section>
    <section className="section" id="tracker"><div className="section-heading"><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h2>Plan your Alaska catches.</h2><p>Save a planning checklist in this browser. ADF&amp;G reviews photos and applications for official recognition.</p></div><AlaskaTracker /></section>
    <section className="section challenge-layout"><div><p className="eyebrow">FIVE SALMON SLAM</p><h2>Bring the whole crew.</h2><p>ADF&amp;G’s Five Salmon Family program recognizes a family or angling group that documents Chinook, chum, coho, pink, and sockeye salmon legally caught in public Alaska waters. Photos must identify each species and show responsible angling at or near the fishing site.</p><p>One application and photo release covers the family or group. Check current openings and methods for each location before fishing.</p><a className="btn primary" href={official} target="_blank" rel="noreferrer">Five Salmon application ↗</a></div>
      <aside className="challenge-side"><p className="eyebrow">LONG-TERM GOAL</p><h2>Master the Waters</h2><p>Register with ADF&amp;G before beginning to receive its official tracking form. Complete the required species for Stream, Stillwater, or Saltwater; finish all three for Elite Master Angler recognition.</p><p>There is no completion deadline. Only fish caught after January 1, 2026, count. Adult divisions have species-specific size standards; youth requirements differ. Use the agency’s full species tables and documentation rules.</p><a className="btn secondary" href={master} target="_blank" rel="noreferrer">Register and see requirements ↗</a></aside>
    </section>
    <section className="section final-cta challenge-final"><p className="eyebrow">BEFORE YOU GO</p><h2>Check the water and the rules.</h2><p>Review the current Alaska regulations and emergency orders for your exact water and species, carry the required sport fishing license, and use the official affidavits for submissions. ADF&amp;G also offers Stocked Waters, Trophy Fish, and My First Fish recognition.</p><div className="actions"><a className="btn primary" href={official} target="_blank" rel="noreferrer">View all official programs ↗</a><a className="btn secondary" href="/states">Back to all states</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
