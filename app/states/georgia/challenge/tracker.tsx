"use client";

import { useEffect, useMemo, useState } from "react";
import { georgiaBassSpecies, type GeorgiaBassSpecies } from "./species";

type CatchRecord = { caught: boolean; date: string; water: string; length: string };
type CatchRecords = Record<string, CatchRecord>;
const STORAGE_KEY = "fish-the-fifty-georgia-bass-slam-v1";

function blankRecords(): CatchRecords {
  return Object.fromEntries(georgiaBassSpecies.map((fish) => [fish.slug, { caught: false, date: "", water: "", length: "" }]));
}

function normalizeRecord(value: unknown): CatchRecord {
  if (!value || typeof value !== "object") return { caught: false, date: "", water: "", length: "" };
  const record = value as Partial<CatchRecord>;
  return {
    caught: record.caught === true,
    date: typeof record.date === "string" ? record.date : "",
    water: typeof record.water === "string" ? record.water : "",
    length: typeof record.length === "string" ? record.length : "",
  };
}

function normalizeRecords(value: unknown, species: GeorgiaBassSpecies[]): CatchRecords {
  const stored = value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
  return Object.fromEntries(species.map((fish) => [fish.slug, normalizeRecord(stored[fish.slug])]));
}

export default function GeorgiaBassTracker() {
  const [records, setRecords] = useState<CatchRecords>(blankRecords);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("");
  const completed = useMemo(() => georgiaBassSpecies.filter((fish) => records[fish.slug]?.caught).length, [records]);

  useEffect(() => {
    try {
      const stored: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null");
      if (stored) setRecords(normalizeRecords(stored, georgiaBassSpecies));
    } catch { /* Start with an empty checklist when saved data is unavailable. */ }
    setReady(true);
  }, []);

  function update(slug: string, field: keyof CatchRecord, value: string | boolean) {
    setStatus("Unsaved changes.");
    setRecords((current) => ({ ...current, [slug]: { ...current[slug], [field]: value } }));
  }

  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      setStatus("Checklist saved in this browser.");
    } catch {
      setStatus("This browser could not save the checklist.");
    }
  }

  function clear() {
    setRecords(blankRecords());
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      setStatus("Checklist cleared.");
    } catch {
      setStatus("Checklist cleared for this visit.");
    }
  }

  return (
    <div className="ga-tracker">
      <section className="ga-tracker-panel" aria-label="Georgia Bass Slam checklist">
        <div className="ga-tracker-top">
          <div><p className="ga-kicker">FIVE DISTINCT SPECIES</p><h3>Your Bass Slam progress</h3><p>{completed >= 5 ? "Five species recorded. Review the official submission rules." : (5 - completed) + " more species to reach the goal."}</p></div>
          <strong>{completed}<small> / 10</small></strong>
        </div>
        <div className="ga-progress" role="progressbar" aria-label={completed + " of 5 species toward the Georgia Bass Slam"} aria-valuemin={0} aria-valuemax={5} aria-valuenow={Math.min(completed, 5)}><span style={{ width: Math.min(completed / 5, 1) * 100 + "%" }} /></div>
        <div className="ga-catch-list">{georgiaBassSpecies.map((fish) => {
          const record = records[fish.slug];
          return <article className={"ga-catch" + (record.caught ? " is-caught" : "")} key={fish.slug}>
            <label className="ga-catch-check">
              <input type="checkbox" checked={record.caught} onChange={(event) => update(fish.slug, "caught", event.target.checked)} />
              <span><strong>{fish.name}</strong><small>{fish.note ?? fish.range}</small></span>
            </label>
            <div className="ga-catch-fields">
              <label htmlFor={"ga-date-" + fish.slug}>Catch date<input id={"ga-date-" + fish.slug} type="date" value={record.date} onChange={(event) => update(fish.slug, "date", event.target.value)} /></label>
              <label htmlFor={"ga-water-" + fish.slug}>Water or location<input id={"ga-water-" + fish.slug} type="text" value={record.water} onChange={(event) => update(fish.slug, "water", event.target.value)} placeholder="River, lake, or public water" /></label>
              <label htmlFor={"ga-length-" + fish.slug}>Length (inches)<input id={"ga-length-" + fish.slug} type="number" min="0" step="0.1" inputMode="decimal" value={record.length} onChange={(event) => update(fish.slug, "length", event.target.value)} placeholder="Optional" /></label>
            </div>
          </article>;
        })}</div>
        <div className="ga-tracker-actions"><button type="button" className="ga-button is-copper" disabled={!ready} onClick={save}>Save checklist</button><button type="button" className="ga-clear" onClick={clear}>Clear all progress</button><span role="status" aria-live="polite">{status}</span></div>
        <p className="ga-tracker-note">Saved only in this browser. This checklist does not store photos or send an entry to Georgia DNR. Compare each fish with the official identification and size rules before submitting.</p>
      </section>
    </div>
  );
}
