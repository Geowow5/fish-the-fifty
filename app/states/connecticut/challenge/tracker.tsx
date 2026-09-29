"use client";
import { useEffect, useState } from "react";
import { freshwater } from "./species";

const key = "fish-the-fifty-connecticut-trophy-v1";
export default function ConnecticutTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => {
    try { const value = JSON.parse(localStorage.getItem(key) || "{}"); if (value && typeof value === "object" && !Array.isArray(value)) setChecked(value); }
    catch { setIssue(true); }
    setReady(true);
  }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setIssue(true); } }, [checked, ready]);
  const count = freshwater.filter(([name]) => checked[name]).length;
  return <div className="tracker-card alabama-tracker">
    <div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Potential freshwater awards</h3></div><strong>{count} / {freshwater.length}</strong></div>
    <div className="tracker-track" role="progressbar" aria-label="Connecticut freshwater species checked" aria-valuemin={0} aria-valuemax={freshwater.length} aria-valuenow={count}><span style={{ width: `${count / freshwater.length * 100}%` }} /></div>
    <p className="tracker-help">Check a species after a potential qualifying catch. This list is for planning; DEEP determines eligibility after an official submission.</p>
    <div className="alabama-progress-list">{freshwater.map(([name]) => <div className="alabama-progress-row" key={name}><label htmlFor={`ct-${name}`}><input type="checkbox" id={`ct-${name}`} disabled={!ready} checked={!!checked[name]} onChange={e => setChecked(current => ({ ...current, [name]: e.target.checked }))} /><span>{name}</span></label></div>)}</div>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear checklist</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div>
  </div>;
}
