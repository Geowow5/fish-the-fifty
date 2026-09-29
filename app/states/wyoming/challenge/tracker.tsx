"use client";
import { useEffect, useState } from "react";
import { cutthroats, masterSpecies } from "./species";
const key = "fish-the-fifty-wyoming-challenges-v1";
export default function WyomingTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => { try { const value = JSON.parse(localStorage.getItem(key) || "{}"); if (value && typeof value === "object" && !Array.isArray(value)) setChecked(value); } catch { setIssue(true); } setReady(true); }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setIssue(true); } }, [checked, ready]);
  const cutCount = cutthroats.filter(t => checked[`cutt:${t.name}`]).length;
  const masterCount = masterSpecies.filter(([name]) => checked[`master:${name}`]).length;
  function item(name: string, id: string) { return <div className="alabama-progress-row" key={id}><label htmlFor={id}><input id={id} type="checkbox" disabled={!ready} checked={!!checked[id]} onChange={e => setChecked(current => ({ ...current, [id]: e.target.checked }))} /><span>{name}</span></label></div>; }
  return <div className="tracker-card alabama-tracker"><div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Two Wyoming goals</h3></div><strong>{cutCount} / 4 Cutt-Slam</strong></div>
    <div className="tracker-track" role="progressbar" aria-label="Wyoming Cutt-Slam progress" aria-valuemin={0} aria-valuemax={4} aria-valuenow={cutCount}><span style={{ width: `${cutCount*25}%` }} /></div><p className="tracker-help">Check a cutthroat only after documenting a catch in its Wyoming native range. Save each photo, date, and location for the official application.</p><div className="alabama-progress-list">{cutthroats.map(t => item(`${t.name} cutthroat`, `cutt:${t.name}`))}</div>
    <div className="tracker-top" style={{ marginTop: "32px" }}><div><p className="eyebrow">MASTER ANGLER</p><h3>Different qualifying species</h3></div><strong>{masterCount} / 10 Ultimate</strong></div><div className="tracker-track" role="progressbar" aria-label="Wyoming Ultimate Angler species progress" aria-valuemin={0} aria-valuemax={10} aria-valuenow={Math.min(masterCount,10)}><span style={{ width: `${Math.min(masterCount,10)*10}%` }} /></div><p className="tracker-help">One species starts Master Angler; five different species reach Trophy Angler; ten reach Ultimate Angler. Check only fish meeting the official length and submit catches to Wyoming Game and Fish.</p><div className="alabama-progress-list">{masterSpecies.map(([name]) => item(name, `master:${name}`))}</div>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear checklist</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div></div>;
}
