"use client";

import { useEffect, useMemo, useState } from "react";
import { freshwaterSpecies, saltwaterSpecies } from "./eligible-species";

type Slot = { species: string; length: string; date: string; water: string };
type SavedTracker = { division: "freshwater" | "saltwater"; slots: Slot[] };

const STORAGE_KEY = "fish-the-fifty-texas-elite-angler-v1";
const emptySlot = (): Slot => ({ species: "", length: "", date: "", water: "" });
const emptyTracker: SavedTracker = { division: "freshwater", slots: Array.from({ length: 5 }, emptySlot) };

export default function TexasEliteTracker() {
  const [tracker, setTracker] = useState<SavedTracker>(emptyTracker);
  const [saved, setSaved] = useState(false);
  const species = tracker.division === "freshwater" ? freshwaterSpecies : saltwaterSpecies;
  const selectedSpecies = tracker.slots.map((slot) => slot.species).filter(Boolean);
  const duplicateSpecies = new Set(selectedSpecies.filter((name, index) => selectedSpecies.indexOf(name) !== index));
  const completed = useMemo(() => new Set(tracker.slots.filter((slot) => {
    const minimum = species.find(([name]) => name === slot.species)?.[1];
    return minimum !== undefined && Number(slot.length) >= minimum ? slot.species : "";
  }).map((slot) => slot.species).filter(Boolean)).size, [tracker.slots, species]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const value = JSON.parse(raw) as SavedTracker;
      if ((value.division === "freshwater" || value.division === "saltwater") && Array.isArray(value.slots)) {
        setTracker({ division: value.division, slots: Array.from({ length: 5 }, (_, i) => ({ ...emptySlot(), ...(value.slots[i] ?? {}) })) });
      }
    } catch { /* Keep the checklist usable when browser storage is unavailable. */ }
  }, []);

  function changeDivision(division: SavedTracker["division"]) {
    setSaved(false);
    setTracker((current) => ({ division, slots: Array.from({ length: 5 }, emptySlot) }));
  }

  function updateSlot(index: number, field: keyof Slot, value: string) {
    setSaved(false);
    setTracker((current) => ({ ...current, slots: current.slots.map((slot, i) => i === index ? { ...slot, [field]: value, ...(field === "species" ? { length: "" } : {}) } : slot) }));
  }

  function save() {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tracker)); } catch { /* Continue without persistence. */ }
    setSaved(true);
  }

  function clear() {
    setTracker({ division: tracker.division, slots: Array.from({ length: 5 }, emptySlot) });
    setSaved(false);
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* Nothing to clear. */ }
  }

  return <div className="tracker-card texas-tracker">
    <div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Elite Angler progress</h3></div><strong>{completed} / 5</strong></div>
    <div className="tracker-track" aria-label={`${completed} of 5 species recorded`}><span style={{ width: `${completed * 20}%` }} /></div>
    <p className="tracker-help">Choose one division and record five different qualifying species. Switching divisions clears this checklist. Your notes stay in this browser and are not sent to TPWD.</p>
    <fieldset className="texas-division"><legend>Choose one division</legend><label><input type="radio" name="texas-division" checked={tracker.division === "freshwater"} onChange={() => changeDivision("freshwater")} /> Freshwater</label><label><input type="radio" name="texas-division" checked={tracker.division === "saltwater"} onChange={() => changeDivision("saltwater")} /> Saltwater</label></fieldset>
    <div className="texas-slots">{tracker.slots.map((slot, index) => {
      const chosen = species.find(([name]) => name === slot.species);
      const id = `texas-award-${index + 1}`;
      const meets = chosen && Number(slot.length) >= chosen[1];
      return <section className="texas-slot" key={index}>
        <div className="texas-slot-heading"><strong>Big Fish Award {index + 1}</strong>{meets && <span>Minimum met</span>}</div>
        <label htmlFor={`${id}-species`}>Species<select id={`${id}-species`} value={slot.species} onChange={(event) => updateSlot(index, "species", event.target.value)}><option value="">Choose a species…</option>{species.map(([name, inches]) => <option key={name} value={name}>{name} · {inches}&quot; minimum</option>)}</select></label>
        <div className="texas-slot-fields"><label htmlFor={`${id}-length`}>Length (inches)<input id={`${id}-length`} type="number" min="0" step="0.1" value={slot.length} onChange={(event) => updateSlot(index, "length", event.target.value)} placeholder={chosen ? `At least ${chosen[1]} in` : "Enter length"} /></label><label htmlFor={`${id}-date`}>Catch date<input id={`${id}-date`} type="date" value={slot.date} onChange={(event) => updateSlot(index, "date", event.target.value)} /></label></div>
        <label htmlFor={`${id}-water`}>Texas waterbody<input id={`${id}-water`} type="text" value={slot.water} onChange={(event) => updateSlot(index, "water", event.target.value)} placeholder="Lake, river, bay, or Gulf waters" /></label>
        {chosen && slot.length && !meets && <p className="texas-below-minimum" role="status">TPWD’s current Big Fish minimum for {chosen[0]} is {chosen[1]} inches.</p>}
      </section>;
    })}</div>
    {duplicateSpecies.size > 0 && <p className="tracker-warning" role="alert">Elite Angler requires five different species. Select a different species for each award.</p>}
    <div className="tracker-actions"><button className="btn primary" type="button" onClick={save}>Save my progress</button><button className="tracker-clear" type="button" onClick={clear}>Clear checklist</button>{saved && <span className="tracker-saved" role="status">Saved in this browser.</span>}</div>
  </div>;
}
