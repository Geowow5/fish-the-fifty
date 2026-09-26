"use client";

import { useEffect, useMemo, useState } from "react";

type Catch = { species: string; length: string; date: string; water: string; applied: boolean };

const STORAGE_KEY = "fish-the-fifty-kansas-master-angler-v1";
const species = [
  "Black crappie", "Blue catfish", "Bluegill", "Channel catfish", "Common carp",
  "Flathead catfish", "Freshwater drum", "Largemouth bass", "Rainbow trout",
  "Redear sunfish", "Saugeye", "Smallmouth bass", "Walleye", "White bass",
  "White crappie", "Wiper", "Other qualifying Kansas species"
];
const emptyCatch = (): Catch => ({ species: "", length: "", date: "", water: "", applied: false });
const initial = Array.from({ length: 5 }, emptyCatch);

export default function KansasMasterAnglerTracker() {
  const [catches, setCatches] = useState<Catch[]>(initial);
  const [saved, setSaved] = useState(false);
  const recorded = useMemo(() => catches.filter((item) => item.species && item.length).length, [catches]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const value = JSON.parse(raw) as Catch[];
      if (Array.isArray(value)) setCatches(Array.from({ length: 5 }, (_, index) => ({ ...emptyCatch(), ...(value[index] ?? {}) })));
    } catch { /* The tracker still works when browser storage is unavailable. */ }
  }, []);

  function update(index: number, field: keyof Catch, value: string | boolean) {
    setSaved(false);
    setCatches((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, [field]: value } : item));
  }

  function save() {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(catches)); } catch { /* Continue without persistence. */ }
    setSaved(true);
  }

  function clear() {
    setCatches(Array.from({ length: 5 }, emptyCatch));
    setSaved(false);
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* Nothing to clear. */ }
  }

  return <div className="tracker-card texas-tracker">
    <div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CATCH LOG</p><h3>Kansas Master Angler catches</h3></div><strong>{recorded}</strong></div>
    <div className="tracker-track" aria-label={`${recorded} qualifying catches recorded`}><span style={{ width: `${recorded * 20}%` }} /></div>
    <p className="tracker-help">Log up to five potential awards. A saved entry is a planning note, not confirmation that the fish qualifies. Compare every catch with the current KDWP minimum-length table before applying.</p>
    <div className="texas-slots">{catches.map((item, index) => {
      const id = `kansas-catch-${index + 1}`;
      return <section className="texas-slot" key={index}>
        <div className="texas-slot-heading"><strong>Catch {index + 1}</strong>{item.applied && <span>Application sent</span>}</div>
        <label htmlFor={`${id}-species`}>Species<select id={`${id}-species`} value={item.species} onChange={(event) => update(index, "species", event.target.value)}><option value="">Choose a species…</option>{species.map((name) => <option key={name} value={name}>{name}</option>)}</select></label>
        <div className="texas-slot-fields"><label htmlFor={`${id}-length`}>Length (inches)<input id={`${id}-length`} type="number" min="0" step="0.1" value={item.length} onChange={(event) => update(index, "length", event.target.value)} placeholder="Measured total length" /></label><label htmlFor={`${id}-date`}>Catch date<input id={`${id}-date`} type="date" value={item.date} onChange={(event) => update(index, "date", event.target.value)} /></label></div>
        <label htmlFor={`${id}-water`}>Kansas waterbody<input id={`${id}-water`} type="text" value={item.water} onChange={(event) => update(index, "water", event.target.value)} placeholder="Lake, reservoir, river, or pond" /></label>
        <label className="kansas-applied" htmlFor={`${id}-applied`}><input id={`${id}-applied`} type="checkbox" checked={item.applied} onChange={(event) => update(index, "applied", event.target.checked)} /> I submitted the official KDWP application</label>
      </section>;
    })}</div>
    <div className="tracker-actions"><button className="btn primary" type="button" onClick={save}>Save my catches</button><button className="tracker-clear" type="button" onClick={clear}>Clear catch log</button>{saved && <span className="tracker-saved" role="status">Saved in this browser.</span>}</div>
  </div>;
}
