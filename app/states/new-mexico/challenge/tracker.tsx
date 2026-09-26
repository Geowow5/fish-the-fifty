"use client";

import { useEffect, useMemo, useState } from "react";

type CatchRecord = { complete: boolean; date: string; water: string };
type Records = Record<string, CatchRecord>;

const STORAGE_KEY = "fish-the-fifty-new-mexico-challenges-v1";
const groups = [
  { title: "Trout Challenge", species: ["Rio Grande Cutthroat Trout", "Gila Trout", "Brown Trout", "Brook Trout", "Rainbow Trout"] },
  { title: "Bass Challenge", species: ["Spotted Bass", "White Bass", "Largemouth Bass", "Smallmouth Bass"] },
] as const;
const allSpecies = groups.flatMap((group) => group.species);
const emptyRecords = Object.fromEntries(allSpecies.map((name) => [name, { complete: false, date: "", water: "" }])) as Records;

export default function NewMexicoTracker() {
  const [records, setRecords] = useState<Records>(emptyRecords);
  const [saved, setSaved] = useState(false);
  const completed = useMemo(() => Object.values(records).filter((record) => record.complete).length, [records]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored) as Records;
      setRecords(Object.fromEntries(allSpecies.map((name) => [name, { ...emptyRecords[name], ...(parsed[name] ?? {}) }])) as Records);
    } catch { /* Keep the checklist available without browser storage. */ }
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

  return <div className="tracker-card nm-tracker">
    <div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>New Mexico progress</h3></div><strong>{completed} / 9</strong></div>
    <div className="tracker-track" aria-label={`${completed} of 9 challenge species recorded`}><span style={{ width: `${(completed / 9) * 100}%` }} /></div>
    <p className="tracker-help">Record the date and water for each catch. Your information stays in this browser and is not submitted to the state.</p>
    {groups.map((group) => {
      const groupCount = group.species.filter((name) => records[name].complete).length;
      return <section className="nm-tracker-group" key={group.title}><div className="nm-tracker-heading"><h4>{group.title}</h4><span>{groupCount} / {group.species.length}</span></div><div className="nm-catch-list">
        {group.species.map((name) => {
          const record = records[name];
          const id = name.toLowerCase().replaceAll(" ", "-");
          return <article className={`nm-catch${record.complete ? " is-complete" : ""}`} key={name}>
            <label className="nm-catch-check"><input type="checkbox" checked={record.complete} onChange={(event) => update(name, "complete", event.target.checked)} /><strong>{name}</strong></label>
            <div className="nm-catch-fields"><label htmlFor={`${id}-date`}>Date<input id={`${id}-date`} type="date" value={record.date} onChange={(event) => update(name, "date", event.target.value)} /></label><label htmlFor={`${id}-water`}>New Mexico water<input id={`${id}-water`} value={record.water} onChange={(event) => update(name, "water", event.target.value)} placeholder="Lake, river or stream" /></label></div>
          </article>;
        })}
      </div></section>;
    })}
    <div className="tracker-actions"><button className="btn secondary" type="button" onClick={save}>Save my progress</button><button className="tracker-clear" type="button" onClick={clear}>Clear checklist</button>{saved && <span className="tracker-saved" role="status">Saved in this browser.</span>}</div>
  </div>;
}
