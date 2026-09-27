"use client";

import { useEffect, useMemo, useState } from "react";
import { blueRibbonWaters } from "./waters";

type CatchRecord = { caught: boolean; date: string; notes: string };
type CatchRecords = Record<string, CatchRecord>;

const STORAGE_KEY = "fish-the-fifty-missouri-blue-ribbon-slam-v1";

function emptyRecords(): CatchRecords {
  return Object.fromEntries(blueRibbonWaters.map((water) => [water.slug, { caught: false, date: "", notes: "" }])) as CatchRecords;
}

function normalizeRecord(value: unknown): CatchRecord {
  if (!value || typeof value !== "object") return { caught: false, date: "", notes: "" };
  const record = value as Partial<CatchRecord>;
  return {
    caught: record.caught === true,
    date: typeof record.date === "string" ? record.date : "",
    notes: typeof record.notes === "string" ? record.notes : "",
  };
}

export default function MissouriSlamTracker() {
  const [records, setRecords] = useState<CatchRecords>(emptyRecords);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const stored: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null");
      if (stored && typeof stored === "object" && !Array.isArray(stored)) {
        const saved = stored as Record<string, unknown>;
        setRecords(Object.fromEntries(blueRibbonWaters.map((water) => [water.slug, normalizeRecord(saved[water.slug])] )) as CatchRecords);
      }
    } catch { /* Keep an empty checklist if storage is unavailable or invalid. */ }
    setReady(true);
  }, []);

  const completed = useMemo(() => blueRibbonWaters.filter((water) => records[water.slug]?.caught).length, [records]);
  const tier = completed >= 9 ? "Gold" : completed >= 7 ? "Silver" : completed >= 5 ? "Bronze" : "Keep going";

  function update(slug: string, field: keyof CatchRecord, value: string | boolean) {
    setStatus("Unsaved changes.");
    setRecords((current) => ({ ...current, [slug]: { ...current[slug], [field]: value } }));
  }

  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      setStatus("Saved in this browser.");
    } catch {
      setStatus("This browser could not save the checklist.");
    }
  }

  function clear() {
    setRecords(emptyRecords());
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      setStatus("Checklist cleared.");
    } catch {
      setStatus("Checklist cleared for this visit.");
    }
  }

  return (
    <div className="missouri-tracker">
      <div className="missouri-tracker-top"><div><p className="missouri-kicker">PRIVATE CHECKLIST</p><h3>Slam progress</h3><p>{tier}{completed >= 5 ? " level reached" : " — Bronze starts at 5 streams"}</p></div><strong>{completed}<small> / 9</small></strong></div>
      <div className="missouri-progress" role="progressbar" aria-label={`${completed} of 9 streams recorded`} aria-valuemin={0} aria-valuemax={9} aria-valuenow={completed}><span style={{ width: `${(completed / 9) * 100}%` }} /></div>
      <div className="missouri-catch-list">{blueRibbonWaters.map((water) => {
        const record = records[water.slug] ?? { caught: false, date: "", notes: "" };
        const dateId = `${water.slug}-date`;
        const notesId = `${water.slug}-notes`;
        return <article className={`missouri-catch${record.caught ? " is-complete" : ""}`} key={water.slug}>
          <label className="missouri-catch-check"><input type="checkbox" checked={record.caught} onChange={(event) => update(water.slug, "caught", event.target.checked)} /><span><strong>{water.name}</strong><small>{water.county}</small></span></label>
          <div className="missouri-catch-fields"><label htmlFor={dateId}>Catch date<input id={dateId} type="date" value={record.date} onChange={(event) => update(water.slug, "date", event.target.value)} /></label><label htmlFor={notesId}>Notes<input id={notesId} type="text" value={record.notes} onChange={(event) => update(water.slug, "notes", event.target.value)} placeholder="Access, fly, or catch details" /></label></div>
        </article>;
      })}</div>
      <div className="missouri-tracker-actions"><button type="button" className="missouri-button is-bright" disabled={!ready} onClick={save}>Save my checklist</button><button type="button" className="missouri-clear" onClick={clear}>Clear checklist</button><span role="status" aria-live="polite">{status}</span></div>
    </div>
  );
}
