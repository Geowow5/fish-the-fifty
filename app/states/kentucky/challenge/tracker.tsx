"use client";
import { useEffect, useState } from "react";
import { species } from "./species";
const key = "fish-the-fifty-kentucky-master-angler-v1";
export default function KentuckyTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => { try { const value = JSON.parse(localStorage.getItem(key) || "{}"); if (value && typeof value === "object" && !Array.isArray(value)) setChecked(value); } catch { setIssue(true); } setReady(true); }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setIssue(true); } }, [checked, ready]);
  const count = species.filter(([name]) => checked[name]).length;
  return <div className="tracker-card alabama-tracker"><div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Three different trophy species</h3></div><strong>{Math.min(count,3)} / 3</strong></div><div className="tracker-track" role="progressbar" aria-label="Kentucky Master Angler species progress" aria-valuemin={0} aria-valuemax={3} aria-valuenow={Math.min(count,3)}><span style={{ width: `${Math.min(count,3)/3*100}%` }} /></div>
    <p className="tracker-help">{count >= 3 ? "Three species marked; request Master Angler after Kentucky approves each official Trophy Fish submission." : `${3-count} more different species toward a potential Master Angler application.`} This checklist saves in this browser; it does not submit a catch.</p>
    <div className="alabama-progress-list">{species.map(([name]) => <div className="alabama-progress-row" key={name}><label htmlFor={`ky-${name}`}><input id={`ky-${name}`} type="checkbox" disabled={!ready} checked={!!checked[name]} onChange={e => setChecked(current => ({ ...current, [name]: e.target.checked }))} /><span>{name}</span></label></div>)}</div>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear checklist</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div></div>;
}
