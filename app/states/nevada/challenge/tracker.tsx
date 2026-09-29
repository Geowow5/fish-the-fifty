"use client";
import { useEffect, useState } from "react";
import { nativeFish } from "./species";

const key = "fish-the-fifty-nevada-native-slam-v1";

export default function NevadaTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "{}");
      if (value && typeof value === "object" && !Array.isArray(value)) setChecked(value);
    } catch { setIssue(true); }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setIssue(true); }
  }, [checked, ready]);
  const count = nativeFish.filter(name => checked[name]).length;
  return <div className="tracker-card alabama-tracker">
    <div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Six Nevada natives</h3></div><strong>{count} / 6 caught</strong></div>
    <div className="tracker-track" role="progressbar" aria-label="Nevada Native Fish-Slam progress" aria-valuemin={0} aria-valuemax={6} aria-valuenow={count}><span style={{ width: `${count / 6 * 100}%` }} /></div>
    <p className="tracker-help">Check a species after a legal Nevada catch and photograph. Submit its official entry to NDOW within 60 days; this checklist stays in your browser and is not an application.</p>
    <div className="alabama-progress-list">{nativeFish.map((name, index) => <div className="alabama-progress-row" key={name}><label htmlFor={`nevada-fish-${index}`}><input id={`nevada-fish-${index}`} type="checkbox" disabled={!ready} checked={!!checked[name]} onChange={event => setChecked(current => ({ ...current, [name]: event.target.checked }))} /><span>{name}</span></label></div>)}</div>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear checklist</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div>
  </div>;
}
