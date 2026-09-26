"use client";

import { useEffect, useMemo, useState } from "react";
import { commonIllinoisSpecies } from "./species";

type Catch = { species: string; date: string; water: string; length: string; released: boolean };
type Method = "hook-line" | "bow";
const STORAGE_KEY = "fish-the-fifty-illinois-master-angler-v1";
const emptyCatch = (): Catch => ({ species: "", date: "", water: "", length: "", released: false });

export default function IllinoisTracker() {
  const [method, setMethod] = useState<Method>("hook-line");
  const [catches, setCatches] = useState<Catch[]>(Array.from({ length: 5 }, emptyCatch));
  const [saved, setSaved] = useState(false);
  useEffect(() => { try { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return; const value = JSON.parse(raw) as { method?: Method; catches?: Catch[] }; if (value.method) setMethod(value.method); if (Array.isArray(value.catches)) setCatches(Array.from({ length: 5 }, (_, i) => ({ ...emptyCatch(), ...(value.catches?.[i] ?? {}) }))); } catch { /* Keep tracker available. */ } }, []);
  const challengeYear = useMemo(() => catches.find((item) => item.date)?.date.slice(0, 4) || String(new Date().getFullYear()), [catches]);
  const complete = useMemo(() => catches.filter((item, index) => item.species.trim() && item.date.startsWith(challengeYear) && catches.findIndex((other) => other.species.trim().toLowerCase() === item.species.trim().toLowerCase() && other.date.startsWith(challengeYear)) === index).length, [catches, challengeYear]);
  const mixedYears = useMemo(() => new Set(catches.filter((item) => item.date).map((item) => item.date.slice(0, 4))).size > 1, [catches]);
  function update(index: number, field: keyof Catch, value: string | boolean) { setSaved(false); setCatches((current) => current.map((item, i) => i === index ? { ...item, [field]: value } : item)); }
  function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ method, catches })); } catch { /* Continue without persistence. */ } setSaved(true); }
  function clear() { setCatches(Array.from({ length: 5 }, emptyCatch)); setSaved(false); try { localStorage.removeItem(STORAGE_KEY); } catch { /* Nothing to clear. */ } }
  return <div className="tracker-card texas-tracker illinois-tracker"><div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE FIVE-SPECIES LOG</p><h3>{challengeYear} Illinois Master Angler</h3></div><strong>{complete} / 5</strong></div><div className="tracker-track"><span style={{ width: `${complete * 20}%` }} /></div><p className="tracker-help">Record five different species legally caught in Illinois waters. This planner saves only in your browser; use the official IDNR certificate page for recognition.</p><div className="illinois-method"><label><input type="radio" name="illinois-method" checked={method === "hook-line"} onChange={() => { setMethod("hook-line"); setSaved(false); }} /> Hook and line</label><label><input type="radio" name="illinois-method" checked={method === "bow"} onChange={() => { setMethod("bow"); setSaved(false); }} /> Bow fishing</label></div>{mixedYears && <p className="texas-below-minimum">Your catches span multiple years. Only {challengeYear} catches count in this season’s total.</p>}<datalist id="illinois-species">{commonIllinoisSpecies.map((species) => <option value={species} key={species} />)}</datalist><div className="texas-slots">{catches.map((item, index) => {
    const duplicate = Boolean(item.species && catches.findIndex((other) => other.species.trim().toLowerCase() === item.species.trim().toLowerCase()) !== index);
    return <section className="texas-slot" key={index}><div className="texas-slot-heading"><strong>Species {index + 1}</strong>{item.species && item.date && !duplicate && <span>Logged</span>}</div><label>Species<input list="illinois-species" value={item.species} onChange={(e) => update(index, "species", e.target.value)} placeholder="Choose or type a legal species" /></label><div className="texas-slot-fields"><label>Length (inches, optional)<input type="number" min="0" step="0.25" value={item.length} onChange={(e) => update(index, "length", e.target.value)} placeholder="Measured length" /></label><label>Catch date<input type="date" value={item.date} onChange={(e) => update(index, "date", e.target.value)} /></label></div>{duplicate && <p className="texas-below-minimum">Master Angler requires five different species; this species is already logged.</p>}<label>Illinois water<input value={item.water} onChange={(e) => update(index, "water", e.target.value)} placeholder="Lake, river, stream or pond" /></label>{method === "hook-line" && <label className="kansas-applied"><input type="checkbox" checked={item.released} onChange={(e) => update(index, "released", e.target.checked)} /> Fish was released</label>}</section>;
  })}</div><div className="tracker-actions"><button className="btn primary" type="button" onClick={save}>Save my catches</button><button className="tracker-clear" type="button" onClick={clear}>Clear catch log</button>{saved && <span className="tracker-saved">Saved in this browser.</span>}</div></div>;
}
