"use client";
import { useEffect, useState } from "react";
const targets = ["Arctic Grayling", "Black Crappie", "Brown Trout", "Brook Trout", "Rainbow Trout", "Westslope Cutthroat Trout", "Yellowstone Cutthroat Trout", "Lake Trout", "Mountain Whitefish", "Walleye", "Northern Pike", "Smallmouth Bass", "Largemouth Bass", "Channel Catfish", "Burbot", "Kokanee Salmon"];
const key = "fish-the-fifty-montana-record-targets-v1";
export default function MontanaTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => { try { const value = JSON.parse(localStorage.getItem(key) || "{}"); if (value && typeof value === "object" && !Array.isArray(value)) setChecked(value); } catch { setIssue(true); } setReady(true); }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setIssue(true); } }, [checked, ready]);
  const count = targets.filter(name => checked[name]).length;
  return <div className="tracker-card alabama-tracker"><div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE WATCH LIST</p><h3>Record fish targets</h3></div><strong>{count} / {targets.length}</strong></div><div className="tracker-track" role="progressbar" aria-label="Montana record target species checked" aria-valuemin={0} aria-valuemax={targets.length} aria-valuenow={count}><span style={{ width: `${count / targets.length * 100}%` }} /></div><p className="tracker-help">Check species you want to research. This is a personal planning list, not an FWP record entry. Confirm a species, standing record, season, and harvest rules with Montana FWP before fishing.</p><div className="alabama-progress-list">{targets.map(name => <div className="alabama-progress-row" key={name}><label htmlFor={`mt-${name}`}><input id={`mt-${name}`} type="checkbox" disabled={!ready} checked={!!checked[name]} onChange={e => setChecked(current => ({ ...current, [name]: e.target.checked }))} /><span>{name}</span></label></div>)}</div><div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear watch list</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div></div>;
}
