"use client";
import { useEffect, useState } from "react";

const targets = [
  { name: "Redband trout", note: "Native trout challenge" },
  { name: "Westslope cutthroat trout", note: "Native trout challenge" },
  { name: "Yellowstone cutthroat trout", note: "Native trout challenge" },
  { name: "Bonneville cutthroat trout", note: "Native trout challenge" },
  { name: "Bull trout", note: "Release required; check local rules" },
];
const key = "fish-the-fifty-idaho-native-trout-v1";
export default function IdahoTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);
  const [issue, setIssue] = useState(false);
  useEffect(() => { try { const value = JSON.parse(localStorage.getItem(key) || "{}"); if (value && typeof value === "object" && !Array.isArray(value)) setChecked(value); } catch { setIssue(true); } setReady(true); }, []);
  useEffect(() => { if (!ready) return; try { localStorage.setItem(key, JSON.stringify(checked)); } catch { setIssue(true); } }, [checked, ready]);
  const count = targets.filter(t => checked[t.name]).length;
  return <div className="tracker-card alabama-tracker"><div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Idaho native trout targets</h3></div><strong>{count} / {targets.length}</strong></div>
    <div className="tracker-track" role="progressbar" aria-label="Idaho native trout targets checked" aria-valuemin={0} aria-valuemax={targets.length} aria-valuenow={count}><span style={{ width: `${count / targets.length * 100}%` }} /></div>
    <p className="tracker-help">These five Idaho fish are eligible toward the Western Native Trout Challenge, which requires catches across multiple states. A checked box does not submit a fish or complete that program.</p>
    <div className="alabama-progress-list">{targets.map(t => <div className="alabama-progress-row" key={t.name}><label htmlFor={`id-${t.name}`}><input id={`id-${t.name}`} type="checkbox" disabled={!ready} checked={!!checked[t.name]} onChange={e => setChecked(current => ({ ...current, [t.name]: e.target.checked }))} /><span>{t.name}</span></label><span>{t.note}</span></div>)}</div>
    <div className="tracker-actions"><button className="tracker-clear" type="button" disabled={!ready} onClick={() => setChecked({})}>Clear checklist</button><span className="tracker-saved" role="status">{issue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}</span></div>
  </div>;
}
