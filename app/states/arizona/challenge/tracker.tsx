"use client";

import { useEffect, useMemo, useState } from "react";
import { arizonaTroutSpecies, arizonaWildSpecies, type ArizonaTroutSpecies } from "./species";

type ChallengeMode = "arizona" | "wild";
type GearUsed = "" | "Fly" | "Lure" | "Bait" | "Other";
type CatchRecord = { caught: boolean; date: string; water: string; gear: GearUsed; released: boolean };
type TrackRecords = Record<string, CatchRecord>;
type Progress = Record<ChallengeMode, TrackRecords>;

const STORAGE_KEY = "fish-the-fifty-arizona-trout-challenges-v1";

function blankTrack(species: ArizonaTroutSpecies[]): TrackRecords {
  return Object.fromEntries(species.map((fish) => [fish.slug, { caught: false, date: "", water: "", gear: "" as GearUsed, released: false }]));
}

function blankProgress(): Progress {
  return { arizona: blankTrack(arizonaTroutSpecies), wild: blankTrack(arizonaWildSpecies) };
}

function normalizeRecord(value: unknown): CatchRecord {
  if (!value || typeof value !== "object") return { caught: false, date: "", water: "", gear: "", released: false };
  const record = value as Partial<CatchRecord>;
  const gear = ["", "Fly", "Lure", "Bait", "Other"].includes(record.gear ?? "") ? record.gear as GearUsed : "";
  return {
    caught: record.caught === true,
    date: typeof record.date === "string" ? record.date : "",
    water: typeof record.water === "string" ? record.water : "",
    gear,
    released: record.released === true,
  };
}

function normalizeTrack(source: unknown, species: ArizonaTroutSpecies[]): TrackRecords {
  const saved = source && typeof source === "object" && !Array.isArray(source) ? source as Record<string, unknown> : {};
  return Object.fromEntries(species.map((fish) => [fish.slug, normalizeRecord(saved[fish.slug])]));
}

function normalizeWater(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export default function ArizonaTroutTracker() {
  const [mode, setMode] = useState<ChallengeMode>("arizona");
  const [records, setRecords] = useState<Progress>(blankProgress);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const stored: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null");
      if (stored && typeof stored === "object" && !Array.isArray(stored)) {
        const saved = stored as Partial<Record<ChallengeMode, unknown>>;
        setRecords({
          arizona: normalizeTrack(saved.arizona, arizonaTroutSpecies),
          wild: normalizeTrack(saved.wild, arizonaWildSpecies),
        });
      }
    } catch { /* Keep a fresh checklist when browser storage is unavailable or invalid. */ }
    setReady(true);
  }, []);

  const species = mode === "wild" ? arizonaWildSpecies : arizonaTroutSpecies;
  const required = mode === "wild" ? 5 : 6;
  const completed = useMemo(() => species.filter((fish) => records[mode][fish.slug]?.caught).length, [mode, records, species]);
  const otherMode: ChallengeMode = mode === "wild" ? "arizona" : "wild";
  const duplicateWaters = useMemo(() => species.filter((fish) => {
    const here = records[mode][fish.slug];
    const other = records[otherMode][fish.slug];
    return Boolean(here?.caught && other?.caught && normalizeWater(here.water) && normalizeWater(here.water) === normalizeWater(other.water));
  }), [mode, otherMode, records, species]);
  const trackLabel = mode === "wild" ? "Wild Trout Challenge" : "Arizona Trout Challenge";

  function update(slug: string, field: keyof CatchRecord, value: string | boolean) {
    setStatus("Unsaved changes.");
    setRecords((current) => ({
      ...current,
      [mode]: { ...current[mode], [slug]: { ...current[mode][slug], [field]: value } },
    }));
  }

  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      setStatus("Both checklists saved in this browser.");
    } catch {
      setStatus("This browser could not save the checklist.");
    }
  }

  function clear() {
    setRecords(blankProgress());
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      setStatus("Both checklists cleared.");
    } catch {
      setStatus("Checklists cleared for this visit.");
    }
  }

  return (
    <div className="az-tracker">
      <div className="az-tracker-tabs" role="tablist" aria-label="Choose an Arizona trout challenge">
        <button type="button" role="tab" aria-selected={mode === "arizona"} aria-controls="az-tracker-panel" onClick={() => setMode("arizona")}>Arizona Trout <span>6 of 8</span></button>
        <button type="button" role="tab" aria-selected={mode === "wild"} aria-controls="az-tracker-panel" onClick={() => setMode("wild")}>Wild Trout <span>5 of 5</span></button>
      </div>
      <section className="az-tracker-panel" role="tabpanel" id="az-tracker-panel" aria-label={`${trackLabel} checklist`}>
        <div className="az-tracker-top"><div><p className="az-kicker">{trackLabel.toUpperCase()}</p><h3>Catch progress</h3><p>{completed >= required ? "Challenge target reached" : `${required - completed} more ${required - completed === 1 ? "species" : "species"} to reach the target`}</p></div><strong>{completed}<small> / {species.length}</small></strong></div>
        <div className="az-progress" role="progressbar" aria-label={`${completed} of ${species.length} species recorded for ${trackLabel}`} aria-valuemin={0} aria-valuemax={species.length} aria-valuenow={completed}><span style={{ width: `${Math.min(completed / required, 1) * 100}%` }} /></div>
        {duplicateWaters.length > 0 && <p className="az-duplicate-note" role="alert">Same water entered in both tracks for {duplicateWaters.map((fish) => fish.name).join(", ")}. AZGFD requires those species to come from different waters for the second challenge.</p>}
        <div className="az-catch-list">{species.map((fish) => {
          const record = records[mode][fish.slug];
          const idBase = `${mode}-${fish.slug}`;
          return <article className={`az-catch${record.caught ? " is-complete" : ""}`} key={fish.slug}>
            <label className="az-catch-check"><input type="checkbox" checked={record.caught} onChange={(event) => update(fish.slug, "caught", event.target.checked)} /><span><strong>{fish.name}</strong><small>{fish.nativeToArizona ? "Arizona native trout" : fish.inWildChallenge ? "Included in the Wild Trout Challenge" : "Arizona Trout Challenge species"}</small></span></label>
            <div className="az-catch-fields">
              <label htmlFor={`${idBase}-date`}>Date caught<input id={`${idBase}-date`} type="date" value={record.date} onChange={(event) => update(fish.slug, "date", event.target.value)} /></label>
              <label htmlFor={`${idBase}-water`}>Water or location<input id={`${idBase}-water`} type="text" value={record.water} onChange={(event) => update(fish.slug, "water", event.target.value)} placeholder="Enter the AZGFD-listed water" /></label>
              <label htmlFor={`${idBase}-gear`}>Gear<select id={`${idBase}-gear`} value={record.gear} onChange={(event) => update(fish.slug, "gear", event.target.value as GearUsed)}><option value="">Choose</option><option>Fly</option><option>Lure</option><option>Bait</option><option>Other</option></select></label>
              <label className="az-released" htmlFor={`${idBase}-released`}><input id={`${idBase}-released`} type="checkbox" checked={record.released} onChange={(event) => update(fish.slug, "released", event.target.checked)} /> Fish released</label>
            </div>
          </article>;
        })}</div>
        <div className="az-tracker-actions"><button type="button" className="az-button is-copper" disabled={!ready} onClick={save}>Save both checklists</button><button type="button" className="az-clear" onClick={clear}>Clear all progress</button><span role="status" aria-live="polite">{status}</span></div>
        <p className="az-tracker-footnote">This is a private planning aid. Keep your labeled catch photos separately, then submit them with AZGFD’s application.</p>
      </section>
    </div>
  );
}
