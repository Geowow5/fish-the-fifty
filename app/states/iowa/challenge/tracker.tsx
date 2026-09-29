"use client";
import { useEffect, useState } from "react";
import { species } from "./species";
const key = "fish-the-fifty-iowa-master-angler-v1";
export default function IowaTracker() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => { try { const saved = JSON.parse(localStorage.getItem(key) || "{}"); if (saved && typeof saved === "object" && !Array.isArray(saved)) setCounts(saved); } catch { setIssue(true); } setReady(true); }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(counts)); } catch { setIssue(true); } }, [counts, ready]);
  const distinct = species.filter(([name]) => Number(counts[name]) > 0).length;
  const specialists = species.filter(([name]) => Number(counts[name]) >= 5).length;
  return <div className="tracker-card alabama-tracker"><div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Track qualifying catches</h3></div><strong>{distinct} species</strong></div>
    <div className="tracker-track" role="progressbar" aria-label="Iowa Gold Master Angler species progress" aria-valuemin={0} aria-valuemax={10} aria-valuenow={Math.min(distinct,10)}><span style={{ width: `${Math.min(distinct,10)*10}%` }} /></div>
    <p className="tracker-help">{distinct >= 10 ? "Gold species goal reached in this planner." : distinct >= 5 ? `Silver species goal reached; ${10-distinct} more different species toward Gold.` : distinct >= 1 ? `${5-distinct} more different species toward Silver.` : "One qualifying species starts the Master Angler path."} {specialists ? `${specialists} Species Specialist target${specialists === 1 ? "" : "s"} marked.` : "Five qualifying catches of one species mark a Species Specialist target."} Iowa DNR reviews official submissions.</p>
    <div className="alabama-progress-list">{species.map(([name]) => <div className="alabama-progress-row" key={name}><strong>{name}</strong><label htmlFor={`ia-${name}`}>Catches <select id={`ia-${name}`} disabled={!ready} value={Math.min(5,Math.max(0,Number(counts[name]) || 0))} onChange={e => setCounts(current => ({ ...current, [name]: Number(e.target.value) }))}>{[0,1,2,3,4,5].map(n => <option value={n} key={n}>{n}{n === 5 ? "+" : ""}</option>)}</select></label></div>)}</div>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setCounts({})}>Clear checklist</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div></div>;
}
