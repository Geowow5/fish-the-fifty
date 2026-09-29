"use client";

import { useMemo, useState } from "react";

const states = [
  ["Alabama", "Alabama bass, crappie, catfish, sunfish"], ["Alaska", "Salmon, halibut, Arctic grayling"],
  ["Arizona", "Trout, largemouth bass, striped bass"], ["Arkansas", "Trout, bass, catfish"],
  ["California", "Trout, salmon, largemouth bass"], ["Colorado", "Trout, kokanee salmon, pike"],
  ["Connecticut", "Striped bass, trout, blackfish"], ["Delaware", "Striped bass, flounder, largemouth bass"],
  ["Florida", "Tarpon, snook, largemouth bass"], ["Georgia", "Black bass, trout, redfish"],
  ["Hawaii", "Bonefish, trevally, peacock grouper"], ["Idaho", "Trout, steelhead, salmon"],
  ["Illinois", "Largemouth bass, crappie, catfish"], ["Indiana", "Bass, walleye, steelhead"],
  ["Iowa", "Walleye, catfish, trout"], ["Kansas", "Walleye, crappie, channel catfish"],
  ["Kentucky", "Largemouth bass, crappie, trout"], ["Louisiana", "Redfish, speckled trout, bass"],
  ["Maine", "Brook trout, landlocked salmon, striped bass"], ["Maryland", "Striped bass, snakehead, trout"],
  ["Massachusetts", "Striped bass, trout, tuna"], ["Michigan", "Trout, salmon, smallmouth bass"],
  ["Minnesota", "Walleye, northern pike, muskie"], ["Mississippi", "Crappie, catfish, redfish"],
  ["Missouri", "Trout, smallmouth bass, catfish"], ["Montana", "Trout, grayling, walleye"],
  ["Nebraska", "Walleye, catfish, trout"], ["Nevada", "Trout, striped bass, largemouth bass"],
  ["New Hampshire", "Trout, landlocked salmon, smallmouth bass"], ["New Jersey", "Striped bass, fluke, trout"],
  ["New Mexico", "Trout, northern pike, largemouth bass"], ["New York", "Trout, salmon, striped bass"],
  ["North Carolina", "Trout, red drum, largemouth bass"], ["North Dakota", "Walleye, northern pike, perch"],
  ["Ohio", "Walleye, smallmouth bass, steelhead"], ["Oklahoma", "Largemouth bass, crappie, trout"],
  ["Oregon", "Salmon, steelhead, trout"], ["Pennsylvania", "Trout, smallmouth bass, steelhead"],
  ["Rhode Island", "Striped bass, tautog, fluke"], ["South Carolina", "Redfish, largemouth bass, crappie"],
  ["South Dakota", "Walleye, trout, northern pike"], ["Tennessee", "Smallmouth bass, trout, crappie"],
  ["Texas", "Largemouth bass, redfish, speckled trout"], ["Utah", "Cutthroat trout, tiger muskie, kokanee"],
  ["Vermont", "Trout, landlocked salmon, smallmouth bass"], ["Virginia", "Trout, striped bass, largemouth bass"],
  ["Washington", "Salmon, steelhead, trout"], ["West Virginia", "Trout, smallmouth bass, muskie"],
  ["Wisconsin", "Walleye, muskie, trout"], ["Wyoming", "Cutthroat trout, grayling, lake trout"]
];

export default function StatesPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => states.filter(([state, fish]) => `${state} ${fish}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <main>
      <header className="nav-shell">
        <div className="nav-wrap">
          <a className="brand" href="/">FISH THE FIFTY</a>
          <nav><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/#progress">My Progress</a></nav>
        </div>
      </header>

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">EXPLORE THE COUNTRY</p>
          <h1>Choose your next state.</h1>
          <p className="lead">Browse fishing opportunities across all 50 states. Start with our growing Oklahoma guide and its first detailed water guide, the Lower Illinois River. More state pages are on the way.</p>
        </div>
      </section>

      <div className="search-wrap">
        <input
          className="state-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by state or featured fish…"
          aria-label="Search states"
        />
      </div>

      <section className="section directory-section">
        <p className="directory-meta">Showing {filtered.length} of 50 states</p>
        <div className="directory-grid">
          {filtered.map(([state, fish]) => {
            const isLive = state === "Rhode Island" || state === "Oregon" || state === "North Dakota" || state === "North Carolina" || state === "New Jersey" || state === "New Hampshire" || state === "Nevada" || state === "Mississippi" || state === "Minnesota" || state === "Michigan" || state === "Massachusetts" || state === "Maryland" || state === "Maine" || state === "Nebraska" || state === "Louisiana" || state === "Hawaii" || state === "Alabama" || state === "Alaska" || state === "Connecticut" || state === "Delaware" || state === "Idaho" || state === "Indiana" || state === "Iowa" || state === "Kentucky" || state === "Montana" || state === "Wyoming" || state === "New York" || state === "Oklahoma" || state === "Utah" || state === "Texas" || state === "Kansas" || state === "New Mexico" || state === "Colorado" || state === "Pennsylvania" || state === "Ohio" || state === "Illinois" || state === "Arkansas" || state === "California" || state === "Florida" || state === "Missouri" || state === "Arizona" || state === "Georgia";
            const stateHref = state === "Rhode Island" ? "/states/rhode-island/challenge" : state === "Oregon" ? "/states/oregon/challenge" : state === "North Dakota" ? "/states/north-dakota/challenge" : state === "North Carolina" ? "/states/north-carolina/challenge" : state === "New Jersey" ? "/states/new-jersey/challenge" : state === "New Hampshire" ? "/states/new-hampshire/challenge" : state === "Nevada" ? "/states/nevada/challenge" : state === "Mississippi" ? "/states/mississippi/challenge" : state === "Minnesota" ? "/states/minnesota/challenge" : state === "Michigan" ? "/states/michigan/challenge" : state === "Massachusetts" ? "/states/massachusetts/challenge" : state === "Maryland" ? "/states/maryland/challenge" : state === "Maine" ? "/states/maine/challenge" : state === "Nebraska" ? "/states/nebraska/challenge" : state === "Louisiana" ? "/states/louisiana/challenge" : state === "Hawaii" ? "/states/hawaii/challenge" : state === "Alabama" ? "/states/alabama/challenge" : state === "Alaska" ? "/states/alaska/challenge" : state === "Connecticut" ? "/states/connecticut/challenge" : state === "Delaware" ? "/states/delaware/challenge" : state === "Idaho" ? "/states/idaho/challenge" : state === "Indiana" ? "/states/indiana/challenge" : state === "Iowa" ? "/states/iowa/challenge" : state === "Kentucky" ? "/states/kentucky/challenge" : state === "Montana" ? "/states/montana/challenge" : state === "Wyoming" ? "/states/wyoming/challenge" : state === "New York" ? "/states/new-york/challenge" : state === "Oklahoma" ? "/states/oklahoma" : state === "Utah" ? "/states/utah/challenge" : state === "Texas" ? "/states/texas/challenge" : state === "Kansas" ? "/states/kansas/challenge" : state === "New Mexico" ? "/states/new-mexico/challenge" : state === "Colorado" ? "/states/colorado/challenge" : state === "Pennsylvania" ? "/states/pennsylvania/challenge" : state === "Ohio" ? "/states/ohio/challenge" : state === "Illinois" ? "/states/illinois/challenge" : state === "Arkansas" ? "/states/arkansas/challenge" : state === "California" ? "/states/california/challenge" : state === "Florida" ? "/states/florida/challenge" : state === "Missouri" ? "/states/missouri" : state === "Arizona" ? "/states/arizona/challenge" : state === "Georgia" ? "/states/georgia/challenge" : "";
            const linkLabel = state === "Rhode Island" ? "Open Rhode Island Game Fish Awards →" : state === "Oregon" ? "Open Oregon native trout challenge →" : state === "North Dakota" ? "Open North Dakota Fish Challenge →" : state === "North Carolina" ? "Open North Carolina angler awards →" : state === "New Jersey" ? "Open New Jersey Skillful Angler →" : state === "New Hampshire" ? "Open New Hampshire Trophy Fish →" : state === "Nevada" ? "Open Nevada Native Fish-Slam →" : state === "Mississippi" ? "Open Mississippi fish records →" : state === "Minnesota" ? "Open Minnesota fish records →" : state === "Michigan" ? "Open Michigan Master Angler →" : state === "Massachusetts" ? "Open Massachusetts fishing awards →" : state === "Maryland" ? "Open FishMaryland awards →" : state === "Maine" ? "Open Maine Tackle-Busters →" : state === "Nebraska" ? "Open Nebraska Master Angler →" : state === "Louisiana" ? "Open Louisiana fish records →" : state === "Hawaii" ? "Open Hawaii island challenge →" : state === "Alabama" ? "Open Alabama Master/Trophy Angler →" : state === "Alaska" ? "Open Alaska fishing challenges →" : state === "Connecticut" ? "Open Connecticut trophy awards →" : state === "Delaware" ? "Open Delaware Elite Angler →" : state === "Idaho" ? "Open Idaho record fish →" : state === "Indiana" ? "Open Indiana Fish of the Year →" : state === "Iowa" ? "Open Iowa Master Angler →" : state === "Kentucky" ? "Open Kentucky Master Angler →" : state === "Montana" ? "Open Montana fish records →" : state === "Wyoming" ? "Open Wyoming challenges →" : state === "New York" ? "Open New York angler awards →" : state === "Missouri" ? "Open Blue Ribbon Trout Slam →" : state === "Arizona" ? "Open Arizona trout challenges →" : state === "Georgia" ? "Open Georgia Bass Slam →" : state === "Utah" ? "Open Utah Cutthroat Slam →" : state === "Texas" ? "Open Texas challenge →" : state === "Kansas" ? "Open Kansas Master Angler →" : state === "New Mexico" ? "Open New Mexico challenges →" : state === "Colorado" ? "Open Colorado Master Angler →" : state === "Pennsylvania" ? "Open Pennsylvania awards →" : state === "Ohio" ? "Open Fish Ohio challenge →" : state === "Illinois" ? "Open Illinois Master Angler →" : state === "Arkansas" ? "Open Arkansas challenges →" : state === "California" ? "Open California challenges →" : state === "Florida" ? "Open Florida angler recognition →" : "Explore Oklahoma →";
            return (
              <article className={`state-card${isLive ? " featured" : ""}`} key={state}>
                <div className="state-card-top">
                  <h2>{state}</h2>
                  <span className={`status-pill${isLive ? " live" : ""}`}>{isLive ? (state === "Oklahoma" ? "GUIDE LIVE" : "CHALLENGE LIVE") : "COMING SOON"}</span>
                </div>
                <p>Featured fishing: {fish}</p>
                {isLive ? <a className="card-link" href={stateHref}>{linkLabel}</a> : <span className="disabled-link">Guide in development</span>}
              </article>
            );
          })}
          {!filtered.length && <div className="empty-state">No states match that search.</div>}
        </div>
      </section>

      <footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer>
    </main>
  );
}
