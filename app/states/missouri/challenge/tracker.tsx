"use client";

import { useEffect, useState } from "react";
import type { MissouriWaterGuide } from "../guides";

const STORAGE_KEY = "fish-the-fifty-missouri-blue-ribbon-trout-slam";

export default function MissouriSlamTracker({ waters }: { waters: MissouriWaterGuide[] }) {
  const [caught, setCaught] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCaught(parsed.filter((slug): slug is string => typeof slug === "string" && waters.some((water) => water.slug === slug)));
        }
      }
    } catch { /* Keep the checklist usable if local storage is unavailable. */ }
    setLoaded(true);
  }, [waters]);

  function toggleWater(slug: string) {
    setSaved(false);
    setCaught((current) => {
      const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
      try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* Keep the current page state. */ }
      setSaved(true);
      return next;
    });
  }

  function clearProgress() {
    setCaught([]);
    setSaved(false);
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* Nothing to clear. */ }
  }

  const completed = caught.length;

  return (
    <section className="tracker-card slam-tracker" aria-labelledby="tracker-heading">
      <div className="tracker-top">
        <div><p className="eyebrow">YOUR PRIVATE CHECKLIST</p><h3 id="tracker-heading">Missouri Slam progress</h3></div>
        <strong>{completed} / 9</strong>
      </div>
      <div className="tracker-track" role="progressbar" aria-label="Missouri trout slam progress" aria-valuemin={0} aria-valuemax={9} aria-valuenow={completed}><span style={{ width: `${completed / 9 * 100}%` }} /></div>
      <div className="slam-milestones" aria-label="Slam levels">
        {[{ name: "Bronze", count: 5 }, { name: "Silver", count: 7 }, { name: "Gold", count: 9 }].map((level) => (
          <div className={completed >= level.count ? "earned" : ""} key={level.name}><span>{level.name}</span><strong>{level.count} waters</strong><small>{completed >= level.count ? "Reached" : "In progress"}</small></div>
        ))}
      </div>
      <p className="tracker-help">Check a stream after a qualifying catch. Progress saves in this browser only; it is not submitted to MDC.</p>
      <div className="slam-water-list">
        {waters.map((water) => (
          <div className="slam-water-item" key={water.slug}>
            <label className="slam-water-option">
              <input type="checkbox" checked={caught.includes(water.slug)} onChange={() => toggleWater(water.slug)} disabled={!loaded} />
              <span><strong>{water.name}</strong><small>{water.county} · {water.miles}</small></span>
            </label>
            <a href={`/states/missouri/${water.slug}`}>Guide ↗</a>
          </div>
        ))}
      </div>
      <div className="tracker-actions">
        <button className="tracker-clear" type="button" onClick={clearProgress}>Clear checklist</button>
        {saved && <span className="tracker-saved" role="status">Saved in this browser.</span>}
      </div>
    </section>
  );
}
