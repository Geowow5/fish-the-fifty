"use client";
import { FormEvent, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { memberClient as client, memberServiceConfigured } from "../../lib/member-client";
const states = "Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming".split("|");
type Progress = { state: string; status: "planned" | "fished" | "completed" };
type Catch = { id: string; state: string; species: string; water: string; caught_on: string; length_inches: number | null; notes: string };
type Snapshot = { tracker_key: string; data: unknown; updated_at: string };
type Mode = "login" | "signup" | "reset" | "new-password";
function labelFor(key: string) { return key.replace(/^fish-the-fifty-/, "").replace(/-v\d+$/, "").replace(/-/g, " "); }
export default function MemberDashboard() {
  const [user,setUser] = useState<User | null>(null);
  const [ready,setReady] = useState(!memberServiceConfigured);
  const [mode,setMode] = useState<Mode>("login");
  const [notice,setNotice] = useState("");
  const [busy,setBusy] = useState(false);
  const [loading,setLoading] = useState(false);
  const [progress,setProgress] = useState<Progress[]>([]);
  const [catches,setCatches] = useState<Catch[]>([]);
  const [snapshots,setSnapshots] = useState<Snapshot[]>([]);
  const [tier,setTier] = useState("free");
  const [selectedState,setSelectedState] = useState("Oklahoma");
  const [selectedStatus,setSelectedStatus] = useState<Progress["status"]>("planned");
  useEffect(() => {
    if (!client) return;
    let alive = true;
    if (new URLSearchParams(window.location.search).get("recovery") === "1") setMode("new-password");
    client.auth.getUser().then(({data}) => { if (alive) {setUser(data.user);setReady(true);} }).catch(() => {if(alive){setReady(true);setNotice("Could not connect to member services. Please try again.");}});
    const {data} = client.auth.onAuthStateChange((event,session) => {
      setUser(session?.user ?? null); setReady(true);
      if (event === "PASSWORD_RECOVERY") setMode("new-password");
      if (event === "SIGNED_OUT") {setProgress([]);setCatches([]);setSnapshots([]);setTier("free");}
    });
    return () => {alive=false;data.subscription.unsubscribe();};
  },[]);
  useEffect(() => {
    if (!user || !client) return;
    let alive = true; setLoading(true);
    Promise.all([
      client.from("member_profiles").select("membership_tier").eq("user_id",user.id).single(),
      client.from("state_progress").select("state,status").eq("user_id",user.id),
      client.from("catch_logs").select("id,state,species,water,caught_on,length_inches,notes").eq("user_id",user.id).order("caught_on",{ascending:false}).limit(200),
      client.from("tracker_snapshots").select("tracker_key,data,updated_at").eq("user_id",user.id),
    ]).then(([profile,p,c,s]) => {
      if (!alive) return;
      if (profile.error || p.error || c.error || s.error) setNotice("We could not load your records. Please try signing in again or contact the site owner.");
      else {setTier(profile.data.membership_tier);setProgress(p.data ?? []);setSelectedStatus(p.data?.find(x=>x.state===selectedState)?.status ?? "planned");setCatches(c.data ?? []);setSnapshots(s.data ?? []);}
      setLoading(false);
    }).catch(() => {if(alive){setLoading(false);setNotice("Could not connect to your saved records. Please try again.");}});
    return () => {alive=false;};
  },[user]);
  async function authenticate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (!client) return;
    const form = new FormData(e.currentTarget); const email=String(form.get("email") ?? "").trim(); const password=String(form.get("password") ?? "");
    setBusy(true);setNotice("");
    try {
      if (mode === "reset") {const {error}=await client.auth.resetPasswordForEmail(email,{redirectTo:`${window.location.origin}/members?recovery=1`});if(error)throw error;setNotice("If that email has an account, a password reset link will arrive shortly.");}
      else if (mode === "new-password") {const {error}=await client.auth.updateUser({password});if(error)throw error;setMode("login");window.history.replaceState(null,"","/members");setNotice("Password updated.");}
      else if (mode === "signup") {const {error}=await client.auth.signUp({email,password,options:{emailRedirectTo:`${window.location.origin}/members`}});if(error)throw error;setNotice("Check your email to confirm your account before signing in.");}
      else {const {error}=await client.auth.signInWithPassword({email,password});if(error)throw error;setNotice("Signed in.");}
    } catch (error) {
      const code = error && typeof error === "object" && "code" in error ? String(error.code) : "";
      if (code === "over_email_send_rate_limit") setNotice("A confirmation or reset email was recently requested. Check your inbox and spam folder for the newest message. Wait 60 seconds before requesting another email.");
      else if (code === "email_not_confirmed") setNotice("Confirm your email first. Open the newest confirmation email in your inbox or spam folder, then return here to sign in.");
      else if (code === "weak_password") setNotice("Choose a password with at least 12 characters.");
      else setNotice(mode === "login" ? "Sign-in failed. Check your email and password, or use password recovery." : "That request could not be completed. Check your details and try again.");
    }
    finally {setBusy(false);}
  }
  async function saveState(e: FormEvent) {
    e.preventDefault();if(!client || !user)return;setBusy(true);
    try {const {error}=await client.from("state_progress").upsert({user_id:user.id,state:selectedState,status:selectedStatus,updated_at:new Date().toISOString()},{onConflict:"user_id,state"});if(error)throw error;setProgress(p=>[...p.filter(x=>x.state!==selectedState),{state:selectedState,status:selectedStatus}]);setNotice("State progress saved to your account.");}catch {setNotice("State progress was not saved. Please try again.");}finally{setBusy(false);}
  }
  async function addCatch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();if(!client || !user)return;const element=e.currentTarget;const f=new FormData(element);setBusy(true);
    const entry={user_id:user.id,state:String(f.get("state")),species:String(f.get("species")).trim(),water:String(f.get("water")).trim(),caught_on:String(f.get("caught_on")),length_inches:f.get("length") ? Number(f.get("length")) : null,notes:String(f.get("notes")).trim()};
    try{const {data,error}=await client.from("catch_logs").insert(entry).select("id,state,species,water,caught_on,length_inches,notes").single();if(error)throw error;setCatches(c=>[data,...c].sort((a,b)=>b.caught_on.localeCompare(a.caught_on)));element.reset();setNotice("Catch saved to your account.");}catch{setNotice("Catch was not saved. Please try again.");}finally{setBusy(false);}
  }
  async function deleteCatch(id:string) {
    if(!client || !user || !window.confirm("Delete this catch from your account?"))return;setBusy(true);
    try{const {error}=await client.from("catch_logs").delete().eq("id",id).eq("user_id",user.id);if(error)throw error;setCatches(c=>c.filter(x=>x.id!==id));setNotice("Catch deleted.");}catch{setNotice("Catch could not be deleted.");}finally{setBusy(false);}
  }
  async function backup() {
    if(!client || !user)return;setBusy(true);
    try{
      const rows=[];
      for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(!key || !/^fish-the-fifty-[a-z0-9-]+-v\d+$/.test(key))continue;const raw=localStorage.getItem(key);if(!raw || raw.length>500000)continue;rows.push({user_id:user.id,tracker_key:key,data:JSON.parse(raw),updated_at:new Date().toISOString()});}
      if(!rows.length){setNotice("No saved state checklists were found in this browser.");return;}
      if(!window.confirm("Back up this browser’s checklists to your signed-in account? Matching cloud backups will be replaced."))return;
      const {error}=await client.from("tracker_snapshots").upsert(rows,{onConflict:"user_id,tracker_key"});if(error)throw error;
      const result=await client.from("tracker_snapshots").select("tracker_key,data,updated_at").eq("user_id",user.id);if(result.error)throw result.error;setSnapshots(result.data);setNotice("Checklists backed up to your account. Repeat after saving new progress on a state page.");
    }catch{setNotice("Backup was not completed. Your browser checklists have not changed.");}finally{setBusy(false);}
  }
  function restore(s:Snapshot) {
    if(!/^fish-the-fifty-[a-z0-9-]+-v\d+$/.test(s.tracker_key) || !window.confirm("Restore this checklist to this browser? Any local progress for this checklist will be replaced."))return;
    try{localStorage.setItem(s.tracker_key,JSON.stringify(s.data));setNotice("Checklist restored. Open or refresh its state challenge page to use it.");}catch{setNotice("This browser could not restore the checklist.");}
  }
  const authForm=<form className="member-form" onSubmit={authenticate}>
    {mode!=="new-password" && <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>}
    {mode!=="reset" && <label>Password<input name="password" type="password" autoComplete={mode==="login"?"current-password":"new-password"} minLength={mode==="login"?1:12} required maxLength={128}/></label>}
    {mode==="signup" && <p>Use at least 12 characters. Your account and progress are private. No payment information is required.</p>}
    <button className="btn primary" disabled={busy} type="submit">{busy?"Please wait…":mode==="signup"?"Create free account":mode==="reset"?"Send reset link":mode==="new-password"?"Save new password":"Sign in"}</button>
  </form>;
  if(!memberServiceConfigured)return <div className="member-panel"><p className="eyebrow">MEMBERSHIP PREVIEW</p><h2>Your free member dashboard is on the way.</h2><p>Member accounts and online saving are awaiting activation. Your existing state checklists still save in your browser.</p><div className="card-grid"><article className="challenge-card"><h3>Your fifty states</h3><p>Mark trips planned, states fished, and challenges completed.</p></article><article className="challenge-card"><h3>Your catch log</h3><p>Keep species, dates, waters, measurements and notes together.</p></article><article className="challenge-card"><h3>Your checklists</h3><p>Back up saved challenge checklists and restore them on another device.</p></article></div><a className="btn primary" href="/states">Explore state checklists →</a></div>;
  if(!ready)return <p role="status">Checking your account…</p>;
  if(!user || mode==="new-password")return <div className="member-panel"><h2>{mode==="signup"?"Start your free account.":mode==="reset"?"Reset your password.":mode==="new-password"?"Choose a new password.":"Welcome back."}</h2>{authForm}<div className="member-actions"><button type="button" onClick={()=>{setMode(mode==="signup"?"login":"signup");setNotice("");}}>{mode==="signup"?"Already a member? Sign in":"Create a free account"}</button><button type="button" onClick={()=>{setMode(mode==="reset"?"login":"reset");setNotice("");}}>{mode==="reset"?"Back to sign in":"Forgot your password?"}</button></div><p role="status" aria-live="polite">{notice}</p></div>;
  return <div className="member-dashboard">
    <div className="member-heading"><div><p className="eyebrow">{tier.toUpperCase()} MEMBERSHIP</p><h2>Your fishing journey.</h2><p>Signed in as {user.email}</p></div><button className="btn secondary" disabled={busy} onClick={async()=>{if(!client)return;setBusy(true);const {error}=await client.auth.signOut();setBusy(false);setNotice(error?"Sign-out failed. Please try again.":"Signed out.");}}>Sign out</button></div>
    <p role="status" aria-live="polite">{loading?"Loading saved progress…":notice}</p>
    <div className="member-stats"><div><strong>{progress.filter(p=>p.status!=="planned").length}/50</strong><span>States fished</span></div><div><strong>{progress.filter(p=>p.status==="completed").length}</strong><span>Challenges marked complete</span></div><div><strong>{catches.length}</strong><span>Catches shown</span></div></div>
    <section className="member-panel"><h3>Mark your next milestone.</h3><form className="member-form" onSubmit={saveState}><label>State<select value={selectedState} onChange={e=>{setSelectedState(e.target.value);setSelectedStatus(progress.find(p=>p.state===e.target.value)?.status ?? "planned");}}>{states.map(s=><option key={s}>{s}</option>)}</select></label><label>Progress<select value={selectedStatus} onChange={e=>setSelectedStatus(e.target.value as Progress["status"])}><option value="planned">Trip planned</option><option value="fished">State fished</option><option value="completed">Challenge completed</option></select></label><button className="btn primary" disabled={busy || loading}>Save state progress</button></form><p>These are your personal milestones. Official fishing awards still require the issuing program’s approval.</p><div className="member-state-list">{[...progress].sort((a,b)=>a.state.localeCompare(b.state)).map(p=><span key={p.state}>{p.state} · {p.status}</span>)}</div></section>
    <section className="member-panel"><h3>Record a catch.</h3><form className="member-form member-catch-form" onSubmit={addCatch}><label>State<select name="state">{states.map(s=><option key={s}>{s}</option>)}</select></label><label>Species<input name="species" required maxLength={100}/></label><label>Water<input name="water" required maxLength={150}/></label><label>Catch date<input name="caught_on" type="date" required/></label><label>Length in inches (optional)<input name="length" type="number" min="0" max="1000" step="0.01"/></label><label>Notes (optional)<textarea name="notes" maxLength={2000}/></label><button className="btn primary" disabled={busy || loading}>Save catch</button></form><div className="member-catches">{catches.length?catches.map(c=><article key={c.id}><h4>{c.species} · {c.state}</h4><p>{c.water} · {c.caught_on}{c.length_inches!==null?` · ${c.length_inches} inches`:""}</p>{c.notes && <p>{c.notes}</p>}<button type="button" disabled={busy} onClick={()=>deleteCatch(c.id)}>Delete catch</button></article>):<p>No catches saved yet.</p>}</div></section>
    <section className="member-panel"><h3>Bring your state checklists with you.</h3><p>Save your progress on a state page first, then back it up here. On another device, sign in and restore a checklist before opening that state page. Backups are manual and do not change your state milestones.</p><button className="btn primary" disabled={busy || loading} onClick={backup}>Back up browser checklists</button><div className="member-catches">{snapshots.map(s=><article key={s.tracker_key}><h4>{labelFor(s.tracker_key)}</h4><p>Backed up {new Date(s.updated_at).toLocaleDateString()}</p><button type="button" disabled={busy} onClick={()=>restore(s)}>Restore to this browser</button></article>)}</div></section>
  </div>;
}
