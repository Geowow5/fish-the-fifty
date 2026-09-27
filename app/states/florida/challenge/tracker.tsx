"use client";

import { useEffect, useMemo, useState } from "react";
import { floridaGrandSlams, floridaLifeListSpecies, floridaReelBigFish } from "./program-data";

type ListKey = "lifeList" | "reelBigFish" | "grandSlams";
type FloridaProgress = {
  bigCatchCount: number;
  trophyCatchCount: number;
  lifeList: string[];
  reelBigFish: string[];
  grandSlams: string[];
};

const STORAGE_KEY = "fish-the-fifty-florida-challenges-v1";
const emptyProgress = (): FloridaProgress => ({
  bigCatchCount: 0,
  trophyCatchCount: 0,
  lifeList: [],
  reelBigFish: [],
  grandSlams: [],
});

function lifeListLevel(count: number) {
  if (count >= 75) return "Life List Master Angler";
  if (count >= 50) return "50-Fish Club";
  if (count >= 30) return "30-Fish Club";
  if (count >= 10) return "10-Fish Club";
  return "Building toward first club";
}

function reelBigLevel(count: number) {
  if (count >= 30) return "Reel Big Master Angler";
  if (count >= 20) return "Tier 3";
  if (count >= 10) return "Tier 2";
  if (count >= 5) return "Tier 1";
  return "Building toward first tier";
}

function grandSlamLevel(count: number) {
  if (count >= 9) return "Master Angler";
  if (count >= 6) return "Tier 2";
  if (count >= 3) return "Tier 1";
  return "Building toward first tier";
}

export default function FloridaTracker() {
  const [progress, setProgress] = useState<FloridaProgress>(emptyProgress);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const value = JSON.parse(raw) as Partial<FloridaProgress>;
      setProgress({
        bigCatchCount: Math.min(33, Math.max(0, Number(value.bigCatchCount) || 0)),
        trophyCatchCount: Math.max(0, Number(value.trophyCatchCount) || 0),
        lifeList: Array.isArray(value.lifeList)
          ? value.lifeList.filter((name): name is string => floridaLifeListSpecies.includes(name as never))
          : [],
        reelBigFish: Array.isArray(value.reelBigFish)
          ? value.reelBigFish.filter((name): name is string => floridaReelBigFish.some((fish) => fish.name === name))
          : [],
        grandSlams: Array.isArray(value.grandSlams)
          ? value.grandSlams.filter((name): name is string => floridaGrandSlams.some((slam) => slam.name === name))
          : [],
      });
    } catch {
      /* Keep the tracker usable if saved browser data is unavailable. */
    }
  }, []);

  const lifeCount = progress.lifeList.length;
  const reelCount = progress.reelBigFish.length;
  const slamCount = progress.grandSlams.length;
  const completedPrograms = useMemo(
    () => Number(progress.bigCatchCount > 0) + Number(progress.trophyCatchCount > 0) + Number(lifeCount > 0 || reelCount > 0 || slamCount > 0),
    [progress.bigCatchCount, progress.trophyCatchCount, lifeCount, reelCount, slamCount],
  );

  function changeCount(key: "bigCatchCount" | "trophyCatchCount", rawValue: string) {
    const parsed = Math.max(0, Number(rawValue) || 0);
    setProgress((current) => ({
      ...current,
      [key]: key === "bigCatchCount" ? Math.min(33, parsed) : parsed,
    }));
    setSaved(false);
  }

  function toggleItem(key: ListKey, value: string) {
    setProgress((current) => {
      const values = current[key];
      return {
        ...current,
        [key]: values.includes(value) ? values.filter((item) => item !== value) : [...values, value],
      };
    });
    setSaved(false);
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      /* Continue without browser storage. */
    }
    setSaved(true);
  }

  function clearProgress() {
    setProgress(emptyProgress());
    setSaved(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* Nothing to clear. */
    }
  }

  return (
    <div className="florida-tracker">
      <div className="florida-progress-summary">
        <div className="tracker-top">
          <div>
            <p className="eyebrow">YOUR FLORIDA PROGRESS</p>
            <h3>Three program tracks</h3>
          </div>
          <strong>{completedPrograms} / 3</strong>
        </div>
        <p className="tracker-help">This private checklist stays in this browser after you save. FWC reviews and approves official submissions.</p>
      </div>

      <div className="florida-count-grid">
        <article className="tracker-card florida-count-card">
          <div className="tracker-top">
            <div><p className="eyebrow">FRESHWATER</p><h3>Big Catch</h3></div>
            <strong>{progress.bigCatchCount} / 33</strong>
          </div>
          <div className="tracker-track"><span style={{ width: Math.min(100, progress.bigCatchCount / 33 * 100) + "%" }} /></div>
          <label className="florida-number-label">Qualifying species recorded
            <input type="number" min="0" max="33" value={progress.bigCatchCount} onChange={(event) => changeCount("bigCatchCount", event.target.value)} />
          </label>
          <p className="tracker-help">Count only catches that meet the current adult or youth length-or-weight standard on the FWC species list.</p>
        </article>

        <article className="tracker-card florida-count-card">
          <div className="tracker-top">
            <div><p className="eyebrow">FRESHWATER</p><h3>TrophyCatch</h3></div>
            <strong>{progress.trophyCatchCount}</strong>
          </div>
          <div className="tracker-track"><span style={{ width: progress.trophyCatchCount > 0 ? "100%" : "0%" }} /></div>
          <label className="florida-number-label">Documented bass at 8 pounds or heavier
            <input type="number" min="0" value={progress.trophyCatchCount} onChange={(event) => changeCount("trophyCatchCount", event.target.value)} />
          </label>
          <p className="tracker-help">TrophyCatch centers on documenting and releasing trophy largemouth bass. Check FWC’s current submission requirements.</p>
        </article>
      </div>

      <div className="florida-saltwater-heading">
        <p className="eyebrow">SALTWATER · CATCH A FLORIDA MEMORY</p>
        <h3>Track the 2026 challenge paths</h3>
      </div>

      <div className="florida-saltwater-grid">
        <section className="tracker-card florida-list-card">
          <div className="tracker-top">
            <div><p className="eyebrow">LIFE LIST</p><h3>{lifeCount} / 75 species</h3></div>
            <strong>{lifeCount}</strong>
          </div>
          <p className="tracker-help">{lifeListLevel(lifeCount)} · milestones at 10, 30, 50 and 75 species.</p>
          <details className="florida-checklist">
            <summary>Show the 75 eligible species</summary>
            <div className="florida-checkbox-list">
              {floridaLifeListSpecies.map((species) => (
                <label key={species}><input type="checkbox" checked={progress.lifeList.includes(species)} onChange={() => toggleItem("lifeList", species)} /><span>{species}</span></label>
              ))}
            </div>
          </details>
        </section>

        <section className="tracker-card florida-list-card">
          <div className="tracker-top">
            <div><p className="eyebrow">REEL BIG FISH</p><h3>{reelCount} / 30 species</h3></div>
            <strong>{reelCount}</strong>
          </div>
          <p className="tracker-help">{reelBigLevel(reelCount)} · milestones at 5, 10, 20 and 30 species.</p>
          <details className="florida-checklist">
            <summary>Show qualifying length targets</summary>
            <div className="florida-reel-list">
              {floridaReelBigFish.map((fish) => (
                <label key={fish.name} className="florida-reel-row">
                  <input type="checkbox" checked={progress.reelBigFish.includes(fish.name)} onChange={() => toggleItem("reelBigFish", fish.name)} />
                  <span><strong>{fish.name}</strong><small>Adult {fish.adult}&Prime; · youth {fish.youth}&Prime; · {fish.measure}</small></span>
                </label>
              ))}
            </div>
          </details>
        </section>

        <section className="tracker-card florida-list-card">
          <div className="tracker-top">
            <div><p className="eyebrow">GRAND SLAMS</p><h3>{slamCount} / 9 slams</h3></div>
            <strong>{slamCount}</strong>
          </div>
          <p className="tracker-help">{grandSlamLevel(slamCount)} · milestones at 3, 6 and all 9 slams.</p>
          <details className="florida-checklist">
            <summary>Show all nine slams</summary>
            <div className="florida-slam-list">
              {floridaGrandSlams.map((slam) => (
                <label key={slam.name} className="florida-slam-row">
                  <input type="checkbox" checked={progress.grandSlams.includes(slam.name)} onChange={() => toggleItem("grandSlams", slam.name)} />
                  <span><strong>{slam.name}</strong><small>{slam.species}{slam.note ? " · " + slam.note : ""}</small></span>
                </label>
              ))}
            </div>
            <p className="florida-checklist-note">Each slam requires its listed catches within a 24-hour period. The Small Fry Slam is for anglers age 15 and under.</p>
          </details>
        </section>
      </div>

      <div className="tracker-actions florida-tracker-actions">
        <button className="btn primary" type="button" onClick={saveProgress}>Save Florida progress</button>
        <button className="tracker-clear" type="button" onClick={clearProgress}>Clear Florida progress</button>
        {saved && <span className="tracker-saved" role="status">Saved in this browser.</span>}
      </div>
    </div>
  );
}
