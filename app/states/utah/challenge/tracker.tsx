"use client";

import { useEffect, useMemo, useState } from "react";

type CatchRecord = { complete: boolean; date: string; water: string };
type Records = Record<string, CatchRecord>;

const STORAGE_KEY = "fish-the-fifty-utah-cutthroat-slam-v1";
const species = [
  ["Bonneville Cutthroat", "Bonneville Basin (excluding the Bear River drainage)"],
  ["Bear River Cutthroat", "Bear River drainage, including Bear Lake and native tributaries"],
  ["Colorado River Cutthroat", "Green and Colorado River drainages"],
  ["Yellowstone Cutthroat", "Snake River drainage in northwest Utah"],
] as const;

const emptyRecords = Object.fromEntries(species.map(([name]) => [name, { complete: false, date: "", water: "" }])) as Records;

export default function UtahSlamTracker() {
  const [records, setRecords] = useState<Records>(emptyRecords);
  const [saved, setSaved] = useState(false);
  const completed = useMemo(() => Object.values(records).filter((record) => record.complete).length, [records]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored) as Records;
      if (parsed && typeof parsed === "object") {
        setRecords(Object.fromEntries(species.map(([name]) => [name, { ...emptyRecords[name], ...(parsed[name] ?? {}) }])) as Records);
      }
    } catch { /* Keep the checklist usable when browser storage is unavailable. */ }
  }, []);

  function update(name: string, field: keyof CatchRecord, value: string | boolean) {
    setSaved(false);
    setRecords((current) => ({ ...current, [name]: { ...current[name], [field]: value } }));
  }

  function save() {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); } catch { /* Continue without persistence. */ }
    setSaved(true);
  }

  function clear() {
    setRecords(emptyRecords);
    setSaved(false);
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* Nothing to clear. */ }
  }

  return (
    <div className="utah-tracker">
      <div className="utah-tracker-top"><div><p className="utah-kicker">YOUR PRIVATE CHECKLIST</p><h2>Slam progress</h2></div><strong>{completed}<small> / 4</small></strong></div>
      <div className="utah-progress" aria-label={`${completed} of 4 cutthroat recorded`}><span style={{ width: `${completed * 25}%` }} /></div>
      <p className="utah-tracker-help">Record where and when you caught each subspecies. Your notes stay in this browser and are not sent to the Utah Cutthroat Slam.</p>
      <div className="utah-catch-list">
        {species.map(([name, range]) => {
          const record = records[name];
          const id = name.toLowerCase().replaceAll(" ", "-");
          return <article className={`utah-catch${record.complete ? " is-complete" : ""}`} key={name}>
            <label className="utah-catch-check"><input type="checkbox" checked={record.complete} onChange={(event) => update(name, "complete", event.target.checked)} /><span><strong>{name}</strong><small>{range}</small></span></label>
            <div className="utah-catch-fields"><label htmlFor={`${id}-date`}>Date caught<input id={`${id}-date`} type="date" value={record.date} onChange={(event) => update(name, "date", event.target.value)} /></label><label htmlFor={`${id}-water`}>Water or stream<input id={`${id}-water`} type="text" value={record.water} onChange={(event) => update(name, "water", event.target.value)} placeholder="Add your catch location" /></label></div>
          </article>;
        })}
      </div>
      <div className="utah-tracker-actions"><button className="utah-btn utah-btn-light" type="button" onClick={save}>Save my progress</button><button className="utah-clear" type="button" onClick={clear}>Clear checklist</button>{saved && <span role="status">Saved in this browser.</span>}</div>
    </div>
  );
}
