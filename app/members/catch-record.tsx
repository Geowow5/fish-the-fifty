"use client";
import { FormEvent, useState } from "react";
import catalog from "../../lib/member-challenges.json";
import { memberClient as client } from "../../lib/member-client";
export type CatchDetails = Record<string, string>;
export type CatchRecord = { id: string; state: string; species: string; water: string; caught_on: string; length_inches: number | null; notes: string; details: CatchDetails };
type Program = {name:string;species:string[];strict?:boolean};
type StateChallenge = {slug:string;programs:Program[];waters:string[]};
const challenges: Record<string,StateChallenge> = catalog;
export const memberStates = Object.keys(challenges).sort();
export const catchColumns = "id,state,species,water,caught_on,length_inches,notes,details";
const personal = "Personal catch log";
const awardCategories:Record<string,string[]>={
 Alabama:['Master Angler','Trophy Angler'], Alaska:['Stream Slam','Stillwater Slam','Saltwater Slam','Five Salmon Slam','Master the Waters'],
 Arkansas:['Black Bass','Temperate Bass','Bream','Crappie','Perch','Catfish','Trout','Miscellaneous'],
 California:['Angler','Accomplished Angler','Master Angler','Supreme Master Angler'],
 Florida:['Specialist','Master Angler','Elite Angler','Lunker Club','Trophy Club','Hall of Fame Club','Small Fry Slam','Nearshore Slam','Blue Water Slam','Reefs & Rubble Slam','Shoreline Slam','Bay & Estuary Slam','Florida Slam','Inshore Slam','Family Slam'],
 Iowa:['Species Award','Silver','Gold','Species Specialist','First Fish'], Maryland:['Species Award','Angler','Expert','Master'],
 Massachusetts:['Bronze pin','Gold pin'], Missouri:['Bronze','Silver','Gold'],
 'New Jersey':['Specialist','Master','Elite'], Tennessee:['Trophy Fish Certificate','Master Angler I','Master Angler II','Master Angler III','Master Angler IV','Master Angler V'],
 Virginia:['Trophy Citation','Master Angler I','Master Angler II','Master Angler III','Master Angler IV','Master Angler V','Master Angler VI','Expert Angler']
};
export default function CatchRecordForm({userId,initial,onSaved,onCancel}:{userId:string;initial?:CatchRecord;onSaved:(catchRecord:CatchRecord)=>void;onCancel:()=>void}) {
 const [state,setState]=useState(initial?.state??"Oklahoma");
 const [programName,setProgramName]=useState(initial?.details?.program??personal);
 const [species,setSpecies]=useState(initial?.species??"");
 const [water,setWater]=useState(initial?.water??"");
 const [category,setCategory]=useState(initial?.details?.category??'');
 const [busy,setBusy]=useState(false); const [notice,setNotice]=useState("");
 const config=challenges[state]; const program=config.programs.find(p=>p.name===programName);
 const speciesChoices=program?.species??[...new Set(config.programs.flatMap(p=>p.species))].sort();
 const speciesChoice=speciesChoices.includes(species)?species:species?"__other":"";
 const waterChoice=config.waters.includes(water)?water:water?"__other":"";
 const d=initial?.details??{};
 const native=/Native|Heritage|Cutt-Slam|Cutthroat Slam|Wild Trout/.test(programName);
 const timed=state==="Alaska" || state==="Florida" && programName.includes("Grand Slam");
 function changeState(next:string){setState(next);setProgramName(personal);setCategory('');setSpecies("");setWater("");setNotice("");}
 async function save(e:FormEvent<HTMLFormElement>){
  e.preventDefault(); if(!client)return;const form=e.currentTarget;const f=new FormData(form);
  const text=(key:string)=>String(f.get(key)??"").trim();
  const details:CatchDetails={program:programName};
  for(const key of ['division','category','species_identification','water_type','location','county','latitude','longitude','catch_time','time_zone','method','bait','disposition','length_type','weight_pounds','scale','witnesses','evidence_status','photo_url','measurement_url','application_status','submitted_on','approved_on','certificate','tag','native_range','group'])if(text(key))details[key]=text(key);
  const length=text('length');const date=text('caught_on');
  if(!species.trim()||!water.trim()){setNotice('Choose or enter the species and waterbody.');return;}
  const now=new Date();const today=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');
  if(date>today){setNotice('The catch date cannot be in the future.');return;}
  if(program?.strict&&!program.species.includes(species)){setNotice('Choose a species listed for this challenge, or use Personal catch log.');return;}
  if((details.length_type !== 'Not measured' && !length) || (details.length_type === 'Not measured' && length) || (details.scale !== 'Not weighed' && !details.weight_pounds) || (details.scale === 'Not weighed' && details.weight_pounds)){setNotice('Match each measurement to its length type or scale type.');return;}
  if((details.application_status==='Submitted'&&!details.submitted_on) || (details.application_status==='Approved by issuing program'&&(!details.approved_on||!details.certificate))){setNotice('Add the submission date, or the approval date and certificate/reference for an approved award.');return;}
  const entry={user_id:userId,state,species:species.trim(),water:water.trim(),caught_on:date,length_inches:length?Number(length):null,notes:text('notes'),details};
  setBusy(true);setNotice('');
  try{const query=initial?client.from('catch_logs').update(entry).eq('id',initial.id).eq('user_id',userId):client.from('catch_logs').insert(entry);const {data,error}=await query.select(catchColumns).single();if(error)throw error;onSaved(data as CatchRecord);if(!initial){form.reset();setSpecies('');setWater('');}setNotice(initial?'Catch updated.':'Catch saved to your account.');}
  catch{setNotice('The catch was not saved. Your entries are still here; please try again.');}finally{setBusy(false);}
 }
 return <section className="member-panel member-catch-panel" id="catch-form"><p className="eyebrow">YOUR PRIVATE CHALLENGE RECORD</p><h3>{initial?'Edit your catch.':'Record a catch.'}</h3>
 <form className="member-form member-catch-form" onSubmit={save}>
 <fieldset disabled={busy}><legend>1. Choose your challenge</legend><div className="member-field-grid">
 <label>State<select value={state} onChange={e=>changeState(e.target.value)}>{memberStates.map(s=><option key={s}>{s}</option>)}</select></label>
 <label>Program or challenge<select value={programName} onChange={e=>{setProgramName(e.target.value);setCategory('');setSpecies('');setNotice('');}}><option>{personal}</option>{config.programs.map(p=><option key={p.name}>{p.name}</option>)}</select></label>
 <label>Angler division<select name="division" defaultValue={d.division??'Adult'}><option>Adult</option><option>Youth</option><option>Not applicable</option></select></label>
 <label>Award level / category (optional)<select value={category && !(awardCategories[state]??[]).includes(category)?'__other':category} onChange={e=>setCategory(e.target.value==='__other'?' ':e.target.value)}><option value="">Not selected</option>{(awardCategories[state]??[]).map(v=><option key={v}>{v}</option>)}<option value="__other">Other / enter category</option></select></label>{category && !(awardCategories[state]??[]).includes(category)?<label>Exact award category<input name="category" value={category} onChange={e=>setCategory(e.target.value)} maxLength={150}/></label>:<input type="hidden" name="category" value={category}/>}
 </div><p className="tracker-help"><a href={`/states/${config.slug}/challenge`} target="_blank" rel="noreferrer">Review the {state} challenge page and official requirements</a>. This log does not submit an application or verify eligibility.</p></fieldset>
 <fieldset disabled={busy}><legend>2. Identify the catch and water</legend><div className="member-field-grid">
 <label>Species<select required value={speciesChoice} onChange={e=>setSpecies(e.target.value==='__other'?' ':e.target.value)}><option value="">Choose a species</option>{speciesChoices.map(s=><option key={s}>{s}</option>)}{!program?.strict&&<option value="__other">Other / enter exact species</option>}</select></label>
 {speciesChoice==='__other'&&<label>Exact species<input required value={species} onChange={e=>setSpecies(e.target.value)} maxLength={100} /></label>}
 <label>Exact species / subspecies (for grouped categories, optional)<input name="species_identification" defaultValue={d.species_identification} maxLength={150}/></label>
 <label>Waterbody<select required value={waterChoice} onChange={e=>setWater(e.target.value==='__other'?' ':e.target.value)}><option value="">Choose a waterbody</option>{config.waters.map(w=><option key={w}>{w}</option>)}<option value="__other">Other / enter waterbody</option></select></label>
 {waterChoice==='__other'&&<label>Exact waterbody<input required value={water} onChange={e=>setWater(e.target.value)} maxLength={150}/></label>}
 <label>Water type / region<select name="water_type" required defaultValue={d.water_type??''}><option value="">Choose water type</option>{['Freshwater lake / reservoir','Freshwater river / stream','Freshwater pond / slough','Saltwater / marine','Brackish / estuary','Lake Erie','Great Lakes','Other'].map(v=><option key={v}>{v}</option>)}</select></label>
 <label>County / island (optional)<input name="county" defaultValue={d.county} maxLength={100}/></label>
 <label>Exact location / reach<input name="location" required defaultValue={d.location} maxLength={300} placeholder="Access point, stream reach, or nearest landmark"/></label>
 <label>Catch date<input name="caught_on" type="date" required defaultValue={initial?.caught_on}/></label>
 <label>Catch time{timed?' (required for timed slams)':' (optional)'}<input name="catch_time" type="time" required={timed} defaultValue={d.catch_time}/></label>
 <label>Time zone{timed?' (required)':' (optional)'}<select name="time_zone" required={timed} defaultValue={d.time_zone??''}><option value="">Choose time zone</option>{['America/New_York','America/Chicago','America/Denver','America/Phoenix','America/Los_Angeles','America/Anchorage','America/Adak','Pacific/Honolulu'].map(z=><option key={z}>{z}</option>)}</select></label>
 <label>Latitude (optional)<input name="latitude" type="number" min="-90" max="90" step="any" defaultValue={d.latitude}/></label><label>Longitude (optional)<input name="longitude" type="number" min="-180" max="180" step="any" defaultValue={d.longitude}/></label>
 {native&&<label>Native range / drainage verification<select name="native_range" required defaultValue={d.native_range??''}><option value="">Choose range status</option><option>Verified against official challenge map</option><option>Not yet verified</option></select></label>}
 <label>Trip / slam group (optional)<input name="group" defaultValue={d.group} maxLength={100} placeholder="Use the same name for catches in one slam"/></label>
 </div><p className="tracker-help">Choices come from the state guides and challenge lists. Some pages show selected species only; enter the exact species from the official list when needed. A listed water is a planning suggestion, not proof of an eligible reach.</p></fieldset>
 <fieldset disabled={busy}><legend>3. Measurements and fishing details</legend><div className="member-field-grid">
 <label>Length in inches (if measured)<input name="length" type="number" min="0.01" max="1000" step="0.01" defaultValue={initial?.length_inches??''}/></label>
 <label>Length measurement<select name="length_type" defaultValue={d.length_type??'Not measured'}>{['Not measured','Total length','Fork length','Other — explain in notes'].map(v=><option key={v}>{v}</option>)}</select></label>
 <label>Weight in pounds (if weighed)<input name="weight_pounds" type="number" min="0.001" max="5000" step="0.001" defaultValue={d.weight_pounds}/></label>
 <label>Scale / weight verification<select name="scale" defaultValue={d.scale??'Not weighed'}>{['Not weighed','Personal scale — not certified','Certified / commercial scale','Official weigh station'].map(v=><option key={v}>{v}</option>)}</select></label>
 <label>Fishing method<select name="method" required defaultValue={d.method??''}><option value="">Choose method</option>{['Fly rod','Rod and reel','Hook and line — other','Bow fishing','Handline','Other — explain in notes'].map(v=><option key={v}>{v}</option>)}</select></label>
 <label>Fly / lure / bait (optional)<input name="bait" defaultValue={d.bait} maxLength={150}/></label>
 <label>Fish disposition<select name="disposition" required defaultValue={d.disposition??''}><option value="">Choose disposition</option><option>Released alive</option><option>Kept / harvested</option></select></label>
 <label>Witness names / certification details (optional)<input name="witnesses" defaultValue={d.witnesses} maxLength={500}/></label>
 </div></fieldset>
 <fieldset disabled={busy}><legend>4. Evidence and official submission</legend><div className="member-field-grid">
 <label>Evidence status<select name="evidence_status" defaultValue={d.evidence_status??'Not yet documented'}>{['Not yet documented','Fish photo saved','Fish and measurement photos saved','Official certification / witness documents saved'].map(v=><option key={v}>{v}</option>)}</select></label>
 <label>Application status<select name="application_status" defaultValue={d.application_status??'Not submitted'}>{['Not submitted','Submitted','Approved by issuing program','Declined by issuing program','Not applicable — personal record'].map(v=><option key={v}>{v}</option>)}</select></label>
 <label>Fish photo link (optional)<input type="url" name="photo_url" pattern="https?://.*" defaultValue={d.photo_url} maxLength={1000} placeholder="https://…"/></label>
 <label>Measurement / document link (optional)<input type="url" name="measurement_url" pattern="https?://.*" defaultValue={d.measurement_url} maxLength={1000} placeholder="https://…"/></label>
 <label>Application submitted on (if submitted)<input name="submitted_on" type="date" defaultValue={d.submitted_on}/></label>
 <label>Award approved on (if approved)<input name="approved_on" type="date" defaultValue={d.approved_on}/></label>
 <label>Certificate / application reference<input name="certificate" defaultValue={d.certificate} maxLength={150}/></label>
 {state==='Washington'&&<label>Trout Derby tag number (if tagged)<input name="tag" defaultValue={d.tag} maxLength={100}/></label>}
 </div><p className="tracker-help">Keep original photos and signed documents. Links are saved privately in your account; this form does not upload photos. Approval status is your record of the issuing program’s decision.</p>
 <label>Notes (optional)<textarea name="notes" defaultValue={initial?.notes} maxLength={2000}/></label></fieldset>
 <div className="member-actions"><button className="btn primary" disabled={busy}>{busy?'Saving…':initial?'Save catch changes':'Save catch'}</button>{initial&&<button type="button" disabled={busy} onClick={onCancel}>Cancel edit</button>}</div>
 <p role="status" aria-live="polite">{notice}</p>
 </form></section>;
}
