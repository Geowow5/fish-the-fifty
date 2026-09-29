"use client";
import { useEffect, useState } from "react";
import { freshwater, saltwater } from "./species";

type Mode = "weighed" | "released";
type Entry = { species: string; mode: Mode };
const key = "fish-the-fifty-delaware-elite-v1";
const options = [
  ...freshwater.map(f => ({ label: `${f.name} · freshwater`, id: `freshwater:${f.name}`, weighed: f.adultWeight !== "—", released: f.adultLength !== "—" })),
  ...saltwater.map(f => ({ label: `${f.name} · saltwater`, id: `saltwater:${f.name}`, weighed: f.adultWeight !== "—", released: f.adultLength !== "—" })),
];
export default function DelawareTracker() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [species, setSpecies] = useState("");
  const [mode, setMode] = useState<Mode>("weighed");
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => {
    try { const value = JSON.parse(localStorage.getItem(key) || "[]"); if (Array.isArray(value)) setEntries(value.filter(e => e && typeof e.species === "string" && (e.mode === "weighed" || e.mode === "released") && options.some(o => o.id === e.species)).slice(0, 50)); }
    catch { setIssue(true); }
    setReady(true);
  }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(entries)); } catch { setIssue(true); } }, [entries, ready]);
  const selected = options.find(o => o.id === species);
  const distinct = new Set(entries.map(e => e.species.split(":")[1])).size;
  const releases = entries.filter(e => e.mode === "released").length;
  return <div className="tracker-card alabama-tracker">
    <div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE PLANNER</p><h3>Five-species Elite goal</h3></div><strong>{Math.min(distinct, 5)} / 5</strong></div>
    <div className="tracker-track" role="progressbar" aria-label="Distinct species planned toward Delaware Elite Angler" aria-valuemin={0} aria-valuemax={5} aria-valuenow={Math.min(distinct, 5)}><span style={{ width: `${Math.min(distinct, 5) * 20}%` }} /></div>
    <p className="tracker-help">Log potential adult-division citations after qualifying catches. DNREC decides eligibility. Elite status requires five different species in one calendar year and no more than two live-release citations.</p>
    <div className="actions" style={{ margin: "22px 0" }}><label>Species<br /><select value={species} onChange={e => { setSpecies(e.target.value); const o = options.find(x => x.id === e.target.value); if (o && !o.weighed) setMode("released"); }} style={{ maxWidth: "100%", padding: "12px", marginTop: "8px" }}><option value="">Choose a species</option>{options.map(o => <option value={o.id} key={o.id}>{o.label}</option>)}</select></label><label>Entry type<br /><select value={mode} onChange={e => setMode(e.target.value as Mode)} style={{ padding: "12px", marginTop: "8px" }}><option value="weighed" disabled={selected ? !selected.weighed : false}>Weighed</option><option value="released" disabled={selected ? !selected.released : false}>Live release</option></select></label><button className="btn primary" type="button" disabled={!ready || !selected || (mode === "weighed" ? !selected.weighed : !selected.released) || entries.some(e => e.species.split(":")[1] === species.split(":")[1])} onClick={() => { setEntries(current => [...current, { species, mode }]); setSpecies(""); }}>Add potential citation</button></div>
    <div className="alabama-progress-list">{entries.map((e, i) => <div className="alabama-progress-row" key={`${e.species}-${i}`}><strong>{options.find(o => o.id === e.species)?.label}</strong><span>{e.mode === "released" ? "Live release" : "Weighed"}</span><button className="tracker-clear" type="button" onClick={() => setEntries(current => current.filter((_, j) => j !== i))} aria-label={`Remove ${e.species}`}>Remove</button></div>)}</div>
    <p className="tracker-help">{releases > 2 ? "More than two live-release entries are listed; only two can count toward Elite recognition." : `${releases} of up to 2 live-release citations planned.`} Record catches from the same calendar year and confirm official citations.</p>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready || !entries.length} onClick={() => setEntries([])}>Clear planner</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div>
  </div>;
}
