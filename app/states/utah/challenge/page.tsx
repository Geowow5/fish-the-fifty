import type { Metadata } from "next";
import UtahSlamTracker from "./tracker";

export const metadata: Metadata = {
  title: "Utah Cutthroat Slam | Fish the Fifty",
  description: "Plan the Utah Cutthroat Slam: catch and photograph four native cutthroat trout in their historic ranges, track your catches, and check official rules.",
};

const links = {
  rules: "https://www.utahcutthroatslam.org/rules-guidelines/",
  map: "https://www.utahcutthroatslam.org/utah-native-cutthroat-trout/",
  register: "https://secure.utah.gov/hflo/sales-direct.html",
  guidebook: "https://wildlife.utah.gov/guidebooks",
  bonneville: "https://www.utahcutthroatslam.org/bonneville-cutthroat-trout/",
  bear: "https://www.utahcutthroatslam.org/bear-river-cutthroat/",
  colorado: "https://www.utahcutthroatslam.org/colorado-river-cutthroat/",
  yellowstone: "https://www.utahcutthroatslam.org/yellowstone-cutthroat/",
};

const waters = [
  { name: "Bonneville Cutthroat", basin: "Bonneville Basin", examples: "Mill Creek in Millcreek Canyon; Mary Ellen Gulch; Upper South Fork Provo tributaries", href: links.bonneville },
  { name: "Bear River Cutthroat", basin: "Bear River drainage", examples: "Upper Bear River forks; Logan River above Third Dam; Bear Lake", href: links.bear },
  { name: "Colorado River Cutthroat", basin: "Green & Colorado River drainages", examples: "Native tributaries on the Uinta north slope and upper Green River country", href: links.colorado },
  { name: "Yellowstone Cutthroat", basin: "Raft River drainage", examples: "Remote Raft River Mountain tributaries in northwest Utah; best opportunities are generally summer into early fall", href: links.yellowstone },
];

export default function UtahCutthroatSlamPage() {
  return <main className="utah-page">
    <header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav></div></header>
    <div className="breadcrumb"><a href="/states">States</a><span aria-hidden="true"> / </span><a href="/states">Utah</a><span aria-hidden="true"> / </span><span>Competition</span></div>

    <section className="utah-hero"><div className="utah-hero-inner"><p className="utah-kicker">UTAH · OFFICIAL CONSERVATION CHALLENGE</p><h1>Four native trout.<br /><em>One Utah Slam.</em></h1><p className="utah-lead">Explore Utah’s waters and complete the Cutthroat Slam by catching and photographing one of each native subspecies within its historic range.</p><div className="utah-facts"><span>4 native subspecies</span><span>No expiration</span><span>All fishing methods</span><span>Conservation-supported</span></div><div className="utah-actions"><a className="utah-btn utah-btn-lime" href={links.register}>Register for the Slam ↗</a><a className="utah-btn utah-btn-outline" href={links.map}>Open the native-range map ↗</a></div></div></section>

    <section className="utah-section utah-intro"><div className="utah-section-heading"><p className="utah-kicker">THE CHALLENGE</p><h2>Find each fish in its home water.</h2><p>The qualifying subspecies are Bonneville, Bear River, Colorado River, and Yellowstone cutthroat trout. A fish only counts when it comes from its historic native range; a stocked cutthroat outside that range does not qualify.</p></div><div className="utah-rule-callout"><strong>Register before you fish for the Slam.</strong><span>The official program currently lists registration at $20 for adults and $10 for youth under 18. Slam registration is separate from a Utah fishing license, and the registration does not expire. Confirm current details with the program before registering.</span></div></section>

    <section className="utah-section utah-tracker-section"><div className="utah-tracker-copy"><p className="utah-kicker">PLAN YOUR SLAM</p><h2>Keep your four catches organized.</h2><p>Use this private checklist to note catch dates and waters. Fish the Fifty does not certify catches or submit records; when you finish, send your photos and details through the official completion form.</p><a className="utah-text-link" href={links.rules}>Read the official rules and submission steps ↗</a></div><UtahSlamTracker /></section>

    <section className="utah-section utah-waters"><div className="utah-section-heading"><p className="utah-kicker">STARTING POINTS</p><h2>Plan by drainage.</h2><p>These are examples named by the official program, not guarantees of access or catch success. Check the official map, land ownership, current conditions, and the fishing rules for each specific water before traveling.</p></div><div className="utah-water-grid">{waters.map((water, index) => <article className="utah-water-card" key={water.name}><span className="utah-water-number">0{index + 1}</span><p className="utah-water-basin">{water.basin}</p><h3>{water.name}</h3><p>{water.examples}</p><a href={water.href}>Species information & suggested waters ↗</a></article>)}</div><p className="utah-special-note"><strong>Weber River exception:</strong> A Weber drainage cutthroat may count as either Bonneville or Bear River, but not both. If you use it for one subspecies, catch the other in a separate qualifying drainage. Strawberry Reservoir, Scofield Reservoir, Panguitch Lake, and their tributaries do not count for the Slam.</p></section>

    <section className="utah-section utah-steps"><div className="utah-section-heading"><p className="utah-kicker">HOW TO COMPLETE IT</p><h2>Catch, document, submit.</h2></div><div className="utah-step-grid"><article><span>01</span><h3>Register first</h3><p>Register before catching fish intended for the Slam. A valid fishing license or permit may also be required for your trip.</p></article><article><span>02</span><h3>Verify the range</h3><p>Check the native-range map and water-specific regulations. The watershed matters more than a fish’s color or spots.</p></article><article><span>03</span><h3>Photograph carefully</h3><p>Take a clear photo that shows the fish and identifying features. Keep it wet, handle it gently, and release it quickly when appropriate.</p></article><article><span>04</span><h3>Submit all four</h3><p>Record the subspecies, date, waterbody, nearby town or county, and photo. Submit through the official completion form after all four are caught.</p></article></div></section>

    <section className="utah-final"><p className="utah-kicker">CHECK BEFORE YOU GO</p><h2>Use the official sources for the final call.</h2><p>Rules, native-range guidance, and water regulations can change. Confirm the latest details with Utah Cutthroat Slam and Utah Division of Wildlife Resources.</p><div className="utah-actions"><a className="utah-btn utah-btn-lime" href={links.rules}>Official Slam rules ↗</a><a className="utah-btn utah-btn-outline" href={links.guidebook}>Utah Fishing Guidebook ↗</a></div></section>
    <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
  </main>;
}
