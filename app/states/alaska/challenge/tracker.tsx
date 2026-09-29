"use client";

import { useEffect, useState } from "react";

const groups = [
  { name: "Stream Slam", fish: ["Rainbow trout", "Arctic grayling", "Dolly Varden"] },
  { name: "Stillwater Slam", fish: ["Lake trout", "Burbot", "Northern pike"] },
  { name: "Saltwater Slam", fish: ["Halibut", "Lingcod", "Rockfish"] },
  { name: "Five Salmon Family", fish: ["Chinook", "Chum", "Coho", "Pink", "Sockeye"] },
];
const key = "fish-the-fifty-alaska-challenges-v1";

export default function AlaskaTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [storageIssue, setStorageIssue] = useState(false);
  useEffect(() => {
    try { const saved = JSON.parse(localStorage.getItem(key) || "{}"); if (saved && typeof saved === "object" && !Array.isArray(saved)) setChecked(saved); }
    catch { setStorageIssue(true); }
    setReady(true);
  }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setStorageIssue(true); } }, [checked, ready]);
  const total = groups.reduce((n, g) => n + g.fish.length, 0);
  const count = groups.reduce((n, g) => n + g.fish.filter(f => checked[`${g.name}:${f}`]).length, 0);
  return <div className="tracker-card"><div className="tracker-top"><div><p className="eyebrow">PLANNING PROGRESS</p><h3>Species checklist</h3></div><strong>{count} / {total}</strong></div>
    <div className="tracker-track" role="progressbar" aria-label="Alaska species checked" aria-valuemin={0} aria-valuemax={total} aria-valuenow={count}><span style={{ width: `${count / total * 100}%` }} /></div>
    <p className="tracker-help">The three Slams each require catches within one 24-hour period. A checked box alone does not establish eligibility; keep the required photos and submit the official form.</p>
    <div className="alabama-progress-list">{groups.map(g => <div key={g.name}><h3>{g.name}</h3>{g.fish.map(f => { const id = `${g.name}:${f}`; return <div className="alabama-progress-row" key={id}><label htmlFor={id}><input id={id} type="checkbox" disabled={!ready} checked={!!checked[id]} onChange={e => setChecked(current => ({ ...current, [id]: e.target.checked }))} /><span>{f}</span></label></div>; })}</div>)}</div>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear checklist</button><span className="tracker-saved" role="status">{storageIssue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div>
  </div>;
}
