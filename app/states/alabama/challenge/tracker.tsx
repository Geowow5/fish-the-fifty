"use client";

import { useEffect, useState } from "react";
import { alabamaSpecies } from "./program-data";

type Tier = "master" | "trophy";
type SpeciesProgress = { master: boolean; trophy: boolean };
type Progress = Record<string, SpeciesProgress>;

const STORAGE_KEY = "fish-the-fifty-alabama-angler-recognition-v1";

function readProgress(value: unknown): Progress {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  const saved = value as Record<string, unknown>;
  const clean: Progress = {};

  for (const fish of alabamaSpecies) {
    const entry = saved[fish.slug];
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;

    const flags = entry as Record<string, unknown>;
    clean[fish.slug] = {
      master: flags.master === true,
      trophy: flags.trophy === true,
    };
  }

  return clean;
}

export default function AlabamaTracker() {
  const [progress, setProgress] = useState<Progress>({});
  const [ready, setReady] = useState(false);
  const [storageIssue, setStorageIssue] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setProgress(readProgress(JSON.parse(raw)));
    } catch {
      setStorageIssue(true);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready || storageIssue) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      setStorageIssue(true);
    }
  }, [progress, ready, storageIssue]);

  const masterCount = alabamaSpecies.filter((fish) => progress[fish.slug]?.master).length;
  const trophyCount = alabamaSpecies.filter((fish) => progress[fish.slug]?.trophy).length;
  const checkedCount = masterCount + trophyCount;
  const percentage = (checkedCount / (alabamaSpecies.length * 2)) * 100;

  function update(slug: string, tier: Tier, checked: boolean) {
    setProgress((current) => ({
      ...current,
      [slug]: {
        ...(current[slug] ?? { master: false, trophy: false }),
        [tier]: checked,
      },
    }));
  }

  function clear() {
    setProgress({});
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      setStorageIssue(true);
    }
  }

  return (
    <div className="tracker-card alabama-tracker">
      <div className="tracker-top">
        <div>
          <p className="eyebrow">YOUR PRIVATE CHECKLIST</p>
          <h3>Track potential recognition</h3>
        </div>
        <strong>{checkedCount} / {alabamaSpecies.length * 2}</strong>
      </div>
      <div
        className="tracker-track"
        role="progressbar"
        aria-label="Alabama Master and Trophy Angler milestones checked"
        aria-valuemin={0}
        aria-valuemax={alabamaSpecies.length * 2}
        aria-valuenow={checkedCount}
      >
        <span style={{ width: percentage + "%" }} />
      </div>
      <p className="tracker-help">Mark a species after a catch appears to meet a Master or Trophy size. This checklist saves in this browser only; Alabama Fisheries staff decides whether a fish and application qualify.</p>

      <div className="alabama-progress-list">
        {alabamaSpecies.map((fish) => (
          <div className="alabama-progress-row" key={fish.slug}>
            <strong>{fish.name}</strong>
            <label htmlFor={fish.slug + "-master"}>
              <input
                id={fish.slug + "-master"}
                type="checkbox"
                disabled={!ready}
                checked={Boolean(progress[fish.slug]?.master)}
                onChange={(event) => update(fish.slug, "master", event.currentTarget.checked)}
              />
              <span>Master</span>
            </label>
            <label htmlFor={fish.slug + "-trophy"}>
              <input
                id={fish.slug + "-trophy"}
                type="checkbox"
                disabled={!ready}
                checked={Boolean(progress[fish.slug]?.trophy)}
                onChange={(event) => update(fish.slug, "trophy", event.currentTarget.checked)}
              />
              <span>Trophy</span>
            </label>
          </div>
        ))}
      </div>

      <div className="tracker-actions">
        <button className="tracker-clear" type="button" onClick={clear} disabled={!ready}>Clear checklist</button>
        <span className="tracker-saved" role="status">
          {!ready ? "Loading checklist…" : storageIssue ? "Browser storage is unavailable; changes are temporary." : "Saved in this browser."}
        </span>
      </div>
    </div>
  );
}
