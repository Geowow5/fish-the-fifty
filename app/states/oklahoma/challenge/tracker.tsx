"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "fish-the-fifty-oklahoma-master-angler";

const qualifyingSpecies = [
  ["Largemouth bass", 23], ["Smallmouth bass", 20], ["Spotted bass", 18],
  ["Striped bass", 34], ["White bass", 19], ["Striped/white hybrid", 28],
  ["Channel catfish", 34], ["Blue catfish", 41], ["Flathead catfish", 42],
  ["Black/white crappie", 15], ["Sauger", 19], ["Walleye", 26], ["Saugeye", 25],
  ["Sunfish (all species)", 9], ["Rainbow trout", 20], ["Brown trout", 21]
] as const;

const emptySlots = ["", "", "", "", ""];

export default function MasterAnglerTracker() {
  const [slots, setSlots] = useState<string[]>(emptySlots);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length === 5) setSlots(parsed);
      }
    } catch { /* Private browsing can disable local storage. */ }
  }, []);

  const counts = useMemo(() => slots.reduce<Record<string, number>>((all, species) => {
    if (species) all[species] = (all[species] ?? 0) + 1;
    return all;
  }, {}), [slots]);
  const overLimit = Object.values(counts).some((count) => count > 2);
  const completed = slots.filter(Boolean).length;

  function updateSlot(index: number, value: string) {
    setSaved(false);
    setSlots((current) => current.map((slot, slotIndex) => slotIndex === index ? value : slot));
  }

  function saveProgress() {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slots)); } catch { /* Continue without persistence. */ }
    setSaved(true);
  }

  function clearProgress() {
    setSlots(emptySlots);
    setSaved(false);
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* Nothing to clear. */ }
  }

  return (
    <div className="tracker-card">
      <div className="tracker-top"><div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3>Master Angler progress</h3></div><strong>{completed} / 5</strong></div>
      <div className="tracker-track" aria-label={`${completed} of 5 awards selected`}><span style={{ width: `${completed * 20}%` }} /></div>
      <p className="tracker-help">Choose the species for up to five Trophy Angler awards. This checklist stays in this browser; it does not submit anything to ODWC.</p>
      <div className="tracker-slots">
        {slots.map((slot, index) => <label key={index}><span>Award {index + 1}</span><select value={slot} onChange={(event) => updateSlot(index, event.target.value)}><option value="">Choose a species…</option>{qualifyingSpecies.map(([species, length]) => <option value={species} key={species}>{species} · {length}&quot; minimum</option>)}</select></label>)}
      </div>
      {overLimit && <p className="tracker-warning" role="alert">Master Angler allows no more than two of the same species. Change one of the selections above.</p>}
      <div className="tracker-actions"><button className="btn primary" type="button" onClick={saveProgress}>Save my progress</button><button className="tracker-clear" type="button" onClick={clearProgress}>Clear checklist</button>{saved && <span className="tracker-saved" role="status">Saved in this browser.</span>}</div>
    </div>
  );
}
