"use client";
import { useEffect, useState } from "react";
import { species } from "./species";
const key = "fish-the-fifty-new-york-angler-awards-v1";
export default function NewYorkTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => { try { const value = JSON.parse(localStorage.getItem(key) || "{}"); if (value && typeof value === "object" && !Array.isArray(value)) setChecked(value); } catch { setIssue(true); } setReady(true); }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setIssue(true); } }, [checked, ready]);
  const count = species.filter(([name]) => checked[name]).length;
  return <div className="tracker-card alabama-tracker"><div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Species awards to pursue</h3></div><strong>{count} / {species.length}</strong></div><div className="tracker-track" role="progressbar" aria-label="New York Angler Award species checked" aria-valuemin={0} aria-valuemax={species.length} aria-valuenow={count}><span style={{ width: `${count/species.length*100}%` }} /></div><p className="tracker-help">Mark potential qualifying species after checking the correct adult or youth length for the water. DEC awards at most one sticker per species to an angler each year. This browser list is not an official entry.</p><div className="alabama-progress-list">{species.map(([name]) => <div className="alabama-progress-row" key={name}><label htmlFor={`ny-${name}`}><input id={`ny-${name}`} type="checkbox" disabled={!ready} checked={!!checked[name]} onChange={e => setChecked(current => ({ ...current, [name]: e.target.checked }))} /><span>{name}</span></label></div>)}</div><div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear checklist</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div></div>;
}
