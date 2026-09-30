// Derive species choices from the same authored data used by challenge pages.
const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
function literal(n) {
  if (!n) return undefined;
  if (ts.isAsExpression(n) || ts.isTypeAssertionExpression(n) || ts.isParenthesizedExpression(n)) return literal(n.expression);
  if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
  if (ts.isNumericLiteral(n)) return Number(n.text);
  if (ts.isArrayLiteralExpression(n)) return n.elements.map(literal);
  if (ts.isObjectLiteralExpression(n)) return Object.fromEntries(n.properties.filter(ts.isPropertyAssignment).map(p=>[p.name.text,literal(p.initializer)]));
}
function declarations(file) {
  const text = fs.readFileSync(file,'utf8');
  const ast = ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
  const result = {};
  for (const st of ast.statements) if (ts.isVariableStatement(st)) for (const d of st.declarationList.declarations) result[d.name.text] = literal(d.initializer);
  // Data-only modules also have parsed tables (Delaware) and derived groups (Colorado).
  if (!file.endsWith('tsx')) {
    const module = {exports:{}};
    const code=ts.transpileModule(text,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
    vm.runInNewContext(code,{module,exports:module.exports},{timeout:1000});
    Object.assign(result,module.exports);
  }
  return result;
}
function names(value) {
  if (!Array.isArray(value)) return [];
  return value.flatMap(v=>typeof v==='string'?[v]:Array.isArray(v)?(typeof v[0]==='string'?[v[0]]:[]):v&&typeof v==='object'?(Array.isArray(v.species)?names(v.species):typeof v.species==='string'?[v.species]:typeof v.name==='string'?[v.name]:[]):[]).filter(x=>!/^other\b/i.test(x));
}
const keys=['qualifyingSpecies','qualifyingGroups','alabamaSpecies','arizonaTroutSpecies','arkansasFish','heritageTrout','freshwater','saltwater','floridaLifeListSpecies','floridaReelBigFish','georgiaBassSpecies','targets','commonIllinoisSpecies','species','examples','newRecordMinimums','selected','inlandExamples','coastalExamples','trophyExamples','nativeFish','awardSpecies','ohioSpecies','freshwaterSpecies','saltwaterSpecies','masterSpecies','sizes'];
const programNames = {
'alabama':['Master Angler','Trophy Angler'], 'alaska':['Stream Slam','Stillwater Slam','Saltwater Slam','Five Salmon Slam','Master the Waters'],
'arizona':['AZGFD Trout Challenge','Wild Trout Challenge'], 'arkansas':['Master Angler','Arkansas Grand Slam','Legacy Lunker'],
'california':['Heritage Trout Challenge','Fishing Passport — Warmwater','Fishing Passport — Coldwater','Fishing Passport — Ocean','Fishing Passport — Shellfish'],
'colorado':['Master Angler'], 'connecticut':['Freshwater Trophy Fish Award','Youth Fishing Challenge'], 'delaware':['Freshwater Sport Fishing Tournament / Elite Angler','Saltwater Sport Fishing Tournament / Elite Angler'],
'florida':['Big Catch','TrophyCatch','Saltwater Life List','Reel Big Fish','Saltwater Grand Slam'], 'georgia':['Georgia Bass Slam'],
'hawaii':['Island Waters — Marine (self-guided)','Island Waters — Freshwater (self-guided)','Hawaii Fishing News Record (independent)'],
'idaho':['Certified-weight Record','Catch-and-release Record','Western Native Trout Challenge'], 'illinois':['Master Angler — Hook and Line','Master Angler — Bow Fishing'],
'indiana':['Fish of the Year','State Record'], 'iowa':['Master Angler','Species Specialist','First Fish'], 'kansas':['Master Angler'], 'kentucky':['Trophy Fish / Master Angler'],
'louisiana':['LOWA Top Ten — Rod and Reel','LOWA Top Ten — Fly Rod'], 'maine':['Tackle-Busters Club','Saltwater State Record'], 'maryland':['FishMaryland Species Award / Angler / Expert / Master'],
'massachusetts':['Freshwater Sportfishing Award','Saltwater Fishing Derby'], 'michigan':['Master Angler','State Record'], 'minnesota':['Catch-and-release Record','Certified-weight Record'],
'mississippi':['Freshwater State Record','Saltwater State Record'], 'missouri':['Missouri Blue Ribbon Trout Slam'], 'montana':['State Record'], 'nebraska':['Master Angler — Catch and Release','Master Angler — Harvested'],
'nevada':['Native Fish-Slam','Trophy Fish','First Fish'], 'new-hampshire':['Trophy Fish','State Record'], 'new-jersey':['Skillful Angler','Salmonid Slam','Bass Slam','Panfish Slam','Inshore Slam I','Inshore Slam II','Offshore Pelagics Slam','Marlin Slam'],
'new-mexico':['Trout Challenge','Bass Challenge','Master Angler','Record Fish'], 'new-york':['Angler Achievement Award','State Record'], 'north-carolina':['Freshwater Angler Recognition / Master Angler','Saltwater Tournament Citation'],
'north-dakota':['Classic Challenge','Sportfish Challenge','Rough Fish Challenge','100 Fish Challenge','Total Catch Challenge','Whopper Club','Catch and Release Club','State Record'],
'ohio':['Fish Ohio / Master Angler'], 'oklahoma':['Trophy Angler / Master Angler'], 'oregon':['Western Native Trout Challenge'], 'pennsylvania':['Angler Award','State Record'],
'rhode-island':['Game Fish Award — Freshwater','Game Fish Award — Saltwater','Freshwater State Record','Saltwater State Record',"Children’s First Fish"],
'south-carolina':['Freshwater State Record','Saltwater State Record'], 'south-dakota':['Proud Angler','State Record'], 'tennessee':['TARP Trophy Fish / Master Angler'],
'texas':['Big Fish / Elite Angler — Freshwater','Big Fish / Elite Angler — Saltwater','ShareLunker'], 'utah':['Utah Cutthroat Slam'], 'vermont':['Trophy Angler / Master Angler'],
'virginia':['Freshwater Trophy / Master / Expert Angler','Saltwater Tournament Citation'], 'washington':['Trout Derby','Sport Fish Record'],
'west-virginia':['Black Bass Slam','Catfish Slam','Panfish Slam','Nongame Slam','Predator Slam','Trout Slam'], 'wisconsin':['Anglers’ Club — Kept Fish','Anglers’ Club — Live Release','Mixed Bag'],
'wyoming':['Cutt-Slam','Master Angler']};
const overrides = {
'alaska':[['Rainbow trout','Arctic grayling','Dolly Varden'],['Lake trout','Burbot','Northern pike'],['Halibut','Lingcod','Rockfish'],['Chinook salmon','Chum salmon','Coho salmon','Pink salmon','Sockeye salmon']],
'arizona': [null,['Apache Trout','Brook Trout','Brown Trout','Gila Trout','Rainbow Trout']],
'arkansas':[null,['Catfish','Bass','Crappie','Bream','Trout'],['Largemouth Bass']],
'florida':[[],['Largemouth bass']], 'hawaii':[[],['Largemouth bass','Smallmouth bass','Tucunare (peacock bass)','Channel catfish','Rainbow trout'],[]],
'missouri':[['Rainbow trout','Brown trout']],
'new-mexico':[['Rio Grande cutthroat trout','Gila trout','Brown trout','Brook trout','Rainbow trout'],['Spotted bass','White bass','Largemouth bass','Smallmouth bass']],
'new-jersey':[null,['Lake trout','Brook trout','Brown trout','Rainbow trout','Landlocked Atlantic salmon'],['Largemouth bass','Smallmouth bass'],['Sunfish','Crappie','Yellow perch'],['Striped bass','Bluefish','Fluke'],['Black sea bass','Tautog','Weakfish'],['Bluefin tuna','Bigeye tuna','Yellowfin tuna','Dolphin'],['White marlin','Blue marlin']],
'north-dakota':[['Northern pike','Yellow perch','Smallmouth bass','Channel catfish'],['Bluegill','Walleye','Bass (specify type)','Trout (specify type)'],['Bullhead (specify type)','Carp (specify type)','Sucker (specify type)']],
'utah':[['Bonneville Cutthroat','Bear River Cutthroat','Colorado River Cutthroat','Yellowstone Cutthroat']], 'washington':[['Rainbow trout']],
'west-virginia':[['Largemouth bass','Smallmouth bass','Spotted bass'],['Blue catfish','Flathead catfish','Channel catfish'],['Sunfish','Rock bass','Black crappie','White crappie','Yellow perch'],['Fallfish','Bullhead','Freshwater drum','Common carp'],['Musky','Walleye','Hybrid striped bass','Striped bass'],['Brook trout','Brown trout','Golden rainbow trout','Rainbow trout','Tiger trout']],
'wyoming':[['Bonneville cutthroat trout','Colorado River cutthroat trout','Snake River cutthroat trout','Yellowstone cutthroat trout']]
};
const catalog={};
const supplemental=require('../lib/member-challenge-supplement.json');
for (const slug of fs.readdirSync(path.join(root,'app/states'))) {
 const dir=path.join(root,'app/states',slug,'challenge'); if(!fs.existsSync(path.join(dir,'page.tsx')))continue;
 const data={}; for(const file of fs.readdirSync(dir).filter(f=>/\.(ts|tsx)$/.test(f))) Object.assign(data,declarations(path.join(dir,file)));
 const species=[...new Set(keys.flatMap(k=>names(data[k])))].sort((a,b)=>a.localeCompare(b));
 let waters=[];
 if(slug==='missouri')waters=names(data.blueRibbonWaters);
 if(slug==='oklahoma')waters=['Lower Illinois River','Lower Mountain Fork River','Blue River','Sooner Lake','Lake Texoma','Lake Hefner','Lake Carl Blackwell','Great Salt Plains Lake'];
 const state=slug.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
 const program=(programNames[slug]||[]).map((name,i)=>({name,species:overrides[slug]?.[i]??species,strict: /Slam|Trout Challenge|Bass Challenge|Native Fish/.test(name) && name !== 'Saltwater Grand Slam'}));
 if(slug==='texas'){program[0].species=names(data.freshwaterSpecies);program[1].species=names(data.saltwaterSpecies);program[2].species=['Largemouth Bass'];}
 if(slug==='delaware'){program[0].species=names(data.freshwater);program[1].species=names(data.saltwater);}
 if(slug==='north-carolina'){program[0].species=names(data.inlandExamples);program[1].species=names(data.coastalExamples);}
 if(slug==='california'){program[0].species=names(data.heritageTrout);for(let i=1;i<program.length;i++)program[i].species=[];}
 if(slug==='illinois')program[1].species=[];
 if(slug==='connecticut')program[1].species=[];
 if(slug==='idaho'){program[0].species=[];program[1].species=[];program[2].species=names(data.targets);}
 if(slug==='nevada'){program[0].species=names(data.nativeFish);program[1].species=[];program[2].species=[];}
 if(slug==='florida'){program[2].species=names(data.floridaLifeListSpecies);program[3].species=names(data.floridaReelBigFish);program[4].species=names(data.floridaLifeListSpecies);}
 for(const p of program)if(/Saltwater/.test(p.name)&&!['alaska','delaware','florida','texas','north-carolina'].includes(slug))p.species=[];
 for(const p of program){const extra=supplemental[slug]?.[p.name];if(extra)p.species=extra;}
 catalog[state]={slug,programs:program,waters};
}
if(Object.keys(catalog).length!==50)throw Error('Expected fifty state pages');
fs.writeFileSync(path.join(root,'lib/member-challenges.json'),JSON.stringify(catalog,null,2)+'\n');
console.log('Generated catalog for '+Object.keys(catalog).length+' states');
