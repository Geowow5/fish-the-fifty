"use client";
import { useEffect, useState } from "react";

const species = ["Bluegill", "Black crappie", "Largemouth bass", "Smallmouth bass", "Walleye", "Yellow perch", "Channel catfish", "Blue catfish", "Brown trout", "Brook trout", "Chinook salmon", "Coho salmon", "Steelhead", "Common carp", "Bowfin", "Shovelnose sturgeon"];
const key = "fish-the-fifty-indiana-fish-of-year-v1";
export default function IndianaTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => { try { const value = JSON.parse(localStorage.getItem(key) || "{}"); if (value && typeof value === "object" && !Array.isArray(value)) setChecked(value); } catch { setIssue(true); } setReady(true); }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setIssue(true); } }, [checked, ready]);
  const count = species.filter(s => checked[s]).length;
  return <div className="tracker-card alabama-tracker"><div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE WATCH LIST</p><h3>Species to pursue</h3></div><strong>{count} / {species.length}</strong></div><div className="tracker-track" role="progressbar" aria-label="Indiana target species checked" aria-valuemin={0} aria-valuemax={species.length} aria-valuenow={count}><span style={{ width: `${count / species.length * 100}%` }} /></div>
    <p className="tracker-help">Check off species you want to pursue or have documented. This is a planning list, not an official entry or a count of awards. Verify eligibility and current leaders with Indiana DNR.</p>
    <div className="alabama-progress-list">{species.map(s => <div className="alabama-progress-row" key={s}><label htmlFor={`in-${s}`}><input id={`in-${s}`} type="checkbox" disabled={!ready} checked={!!checked[s]} onChange={e => setChecked(current => ({ ...current, [s]: e.target.checked }))} /><span>{s}</span></label></div>)}</div>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear watch list</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div></div>;
}
