"use client";

import { useEffect, useMemo, useState } from "react";
import { qualifyingSpecies } from "./qualifying-species";

type Catch = { species: string; length: string; date: string; water: string; released: boolean; submitted: boolean };
const STORAGE_KEY = "fish-the-fifty-colorado-master-angler-v1";
const emptyCatch = (): Catch => ({ species: "", length: "", date: "", water: "", released: true, submitted: false });
const initial = Array.from({ length: 5 }, emptyCatch);

export default function ColoradoMasterAnglerTracker() {
  const [catches, setCatches] = useState<Catch[]>(initial);
  const [saved, setSaved] = useState(false);
  const recorded = useMemo(() => catches.filter((item) => item.species && item.length).length, [catches]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const value = JSON.parse(raw) as Catch[];
      if (Array.isArray(value)) setCatches(Array.from({ length: 5 }, (_, index) => ({ ...emptyCatch(), ...(value[index] ?? {}) })));
    } catch { /* Keep the tracker usable without storage. */ }
  }, []);

  function update(index: number, field: keyof Catch, value: string | boolean) {
    setSaved(false);
    setCatches((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, [field]: value } : item));
  }
  function save() { try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(catches)); } catch { /* Continue without persistence. */ } setSaved(true); }
  function clear() { setCatches(Array.from({ length: 5 }, emptyCatch)); setSaved(false); try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* Nothing to clear. */ } }

  return <div className="tracker-card texas-tracker colorado-tracker">
    <div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CATCH LOG</p><h3>Colorado trophy catches</h3></div><strong>{recorded}</strong></div>
    <div className="tracker-track" aria-label={`${recorded} potential awards recorded`}><span style={{ width: `${recorded * 20}%` }} /></div>
    <p className="tracker-help">Log up to five catches. The tracker compares your entered length with CPW’s published minimum, but only CPW can approve an award.</p>
    <div className="texas-slots">{catches.map((item, index) => {
      const id = `colorado-catch-${index + 1}`;
      const target = qualifyingSpecies.find(([name]) => name === item.species)?.[1];
      const measured = Number(item.length);
      const below = target && measured > 0 && measured < target;
      return <section className="texas-slot" key={index}>
        <div className="texas-slot-heading"><strong>Catch {index + 1}</strong>{item.submitted && <span>Submitted to CPW</span>}</div>
        <label htmlFor={`${id}-species`}>Species<select id={`${id}-species`} value={item.species} onChange={(event) => update(index, "species", event.target.value)}><option value="">Choose a species…</option>{qualifyingSpecies.map(([name, inches]) => <option key={name} value={name}>{name} — {inches}&quot;</option>)}</select></label>
        <div className="texas-slot-fields"><label htmlFor={`${id}-length`}>Length (inches)<input id={`${id}-length`} type="number" min="0" step="0.01" value={item.length} onChange={(event) => update(index, "length", event.target.value)} placeholder={target ? `Minimum ${target} inches` : "Total length"} /></label><label htmlFor={`${id}-date`}>Catch date<input id={`${id}-date`} type="date" value={item.date} onChange={(event) => update(index, "date", event.target.value)} /></label></div>
        {below && <p className="texas-below-minimum">This entry is below the published {target}&quot; Master Angler minimum.</p>}
        <label htmlFor={`${id}-water`}>Colorado waterbody<input id={`${id}-water`} value={item.water} onChange={(event) => update(index, "water", event.target.value)} placeholder="Lake, reservoir, river or stream" /></label>
        <div className="colorado-checks"><label><input type="checkbox" checked={item.released} onChange={(event) => update(index, "released", event.target.checked)} /> Fish released</label><label><input type="checkbox" checked={item.submitted} onChange={(event) => update(index, "submitted", event.target.checked)} /> Online application submitted</label></div>
      </section>;
    })}</div>
    <div className="tracker-actions"><button className="btn primary" type="button" onClick={save}>Save my catches</button><button className="tracker-clear" type="button" onClick={clear}>Clear catch log</button>{saved && <span className="tracker-saved" role="status">Saved in this browser.</span>}</div>
  </div>;
}
