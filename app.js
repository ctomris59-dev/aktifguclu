const q = (s) => document.querySelector(s);
const qa = (s) => [...document.querySelectorAll(s)];

const dayInfo = {
  A: "Bacak · kalça · sırt · göğüs · core",
  B: "Bacak · arka bacak · omuz · denge",
  C: "Bacak · kalça · sırt · göğüs · core"
};

const flow = [
  {id:"catcamel",name:"Cat–Cow",muscles:"Omurga mobilitesi",sets:1,reps:"6 yavaş tekrar",weighted:false,cue:"Ağrısız aralıkta yavaş hareket et."},
  {id:"hiprotation",name:"Ayakta Kalça Rotasyonu",muscles:"Kalça mobilitesi",sets:1,reps:"6/yan",weighted:false,cue:"Gövdeyi mümkün olduğunca sabit tut."},
  {id:"chairpose",name:"Chair Pose",muscles:"Bacak · denge",sets:1,reps:"20–30 sn",weighted:false,cue:"Dizler ayak yönünde; nefesi tutma."},
  {id:"downdog",name:"Downward Dog",muscles:"Arka zincir · omuz",sets:1,reps:"20–30 sn",weighted:false,cue:"Dizleri hafif kırabilirsin; beli zorlamadan uzat."},
  {id:"childpose",name:"Child's Pose",muscles:"Rahatlama · mobilite",sets:1,reps:"30–45 sn",weighted:false,cue:"Rahat nefes al; zorlayıcı germe yapma."}
];

const week1 = {
  A:[
    {id:"bwsquat",name:"Bodyweight Squat",muscles:"Quadriceps · glute",sets:2,reps:"8",weighted:false,cue:"Rahat derinlikte, kontrollü in-kalk."},
    {id:"bridge",name:"Glute Bridge",muscles:"Kalça",sets:2,reps:"10",weighted:false,cue:"Üstte kalçayı sık; beli arkaya kırma."},
    {id:"row1",name:"One-arm Dumbbell Row",muscles:"Sırt · kol",sets:2,reps:"8/kol",weighted:true,cue:"Hafif ağırlıkla, dirseği kalçaya doğru çek."},
    {id:"floorpress",name:"Dumbbell Floor Press",muscles:"Göğüs · triceps",sets:2,reps:"8",weighted:true,cue:"Dirsekleri zemine kontrollü indir."},
    {id:"deadbug",name:"Dead Bug",muscles:"Core",sets:2,reps:"6/yan",weighted:false,cue:"Bel kontrolünü kaybetmeden yavaş yap."}
  ],
  B:[
    {id:"lunge",name:"Destekli Reverse Lunge",muscles:"Bacak · kalça",sets:2,reps:"6/bacak",weighted:false,cue:"Gerekirse sandalye/duvardan hafif destek al."},
    {id:"rdl",name:"Dumbbell Romanian Deadlift",muscles:"Hamstring · kalça",sets:2,reps:"8",weighted:true,cue:"Çok hafif ağırlıkla kalçayı geriye gönder."},
    {id:"shoulder",name:"Seated Dumbbell Shoulder Press",muscles:"Omuz · triceps",sets:2,reps:"8",weighted:true,cue:"Oturarak, kontrollü ve rahat ağırlıkla press et."},
    {id:"birddog",name:"Bird Dog",muscles:"Core · denge",sets:2,reps:"6/yan",weighted:false,cue:"Kalçayı döndürmeden karşı kol ve bacağı uzat."},
    {id:"calf",name:"Calf Raise",muscles:"Baldır",sets:2,reps:"12",weighted:false,cue:"Denge için bir yere hafifçe tutunabilirsin."}
  ],
  C:[
    {id:"goblet",name:"Hafif Goblet Squat",muscles:"Quadriceps · kalça",sets:2,reps:"8",weighted:true,cue:"Göğüs önünde hafif dumbbell; kontrollü in."},
    {id:"bridge",name:"Glute Bridge",muscles:"Kalça",sets:2,reps:"10–12",weighted:false,cue:"Topuklardan it ve üstte kısa süre sık."},
    {id:"row1",name:"One-arm Dumbbell Row",muscles:"Sırt · kol",sets:2,reps:"8/kol",weighted:true,cue:"Gövdeyi çevirmeden çek."},
    {id:"floorpress",name:"Dumbbell Floor Press",muscles:"Göğüs · triceps",sets:2,reps:"8–10",weighted:true,cue:"Rahat ağırlık kullan; acele etme."},
    {id:"sideplank",name:"Side Plank",muscles:"Core · denge",sets:2,reps:"15–20 sn/yan",weighted:false,cue:"Gerekirse alt dizi yerde tutarak kolaylaştır."}
  ]
};

const baseProgram = {
  A:[
    {id:"goblet",name:"Goblet Squat",muscles:"Quadriceps · kalça",reps:"8–12",weighted:true,cue:"Ayak tabanını tam bas; kontrollü in."},
    {id:"bridge",name:"Glute Bridge",muscles:"Kalça",reps:"10–15",weighted:false,cue:"Üstte kalçayı sık; belden yükselme."},
    {id:"row1",name:"One-arm Dumbbell Row",muscles:"Sırt · kol",reps:"8–12/kol",weighted:true,cue:"Dirseği kalçaya çek; omzu kulağa kaldırma."},
    {id:"floorpress",name:"Dumbbell Floor Press",muscles:"Göğüs · triceps",reps:"8–12",weighted:true,cue:"Dirsekleri kontrollü indir."},
    {id:"deadbug",name:"Dead Bug",muscles:"Core",reps:"6–10/yan",weighted:false,cue:"Bel kontrolü bozulursa hareket mesafesini kısalt."}
  ],
  B:[
    {id:"lunge",name:"Reverse Lunge",muscles:"Bacak · kalça",reps:"8–10/bacak",weighted:true,cue:"İlk haftalarda ağırlıksız yapabilirsin."},
    {id:"rdl",name:"Dumbbell Romanian Deadlift",muscles:"Hamstring · kalça",reps:"8–12",weighted:true,cue:"Kalçadan menteşe yap; sırtı nötr tut."},
    {id:"shoulder",name:"Seated Dumbbell Shoulder Press",muscles:"Omuz · triceps",reps:"8–12",weighted:true,cue:"Rahat ağırlıkla oturarak press et."},
    {id:"birddog",name:"Bird Dog",muscles:"Core · denge",reps:"6–10/yan",weighted:false,cue:"Pelvisi döndürmeden uzat."},
    {id:"calf",name:"Calf Raise",muscles:"Baldır",reps:"12–20",weighted:false,cue:"Yukarıda kısa süre bekle; kontrollü in."}
  ],
  C:[
    {id:"goblet",name:"Goblet Squat",muscles:"Quadriceps · kalça",reps:"8–12",weighted:true,cue:"Form rahatken küçük ağırlık artışları yap."},
    {id:"bridge",name:"Glute Bridge",muscles:"Kalça",reps:"10–15",weighted:false,cue:"Üstte kalçayı sık."},
    {id:"row1",name:"One-arm Dumbbell Row",muscles:"Sırt · kol",reps:"8–12/kol",weighted:true,cue:"Kontrollü çek ve yavaş indir."},
    {id:"floorpress",name:"Dumbbell Floor Press",muscles:"Göğüs · triceps",reps:"8–12",weighted:true,cue:"Son tekrarlar hissedilsin ama form bozulmasın."},
    {id:"sideplank",name:"Side Plank",muscles:"Core · denge",reps:"20–30 sn/yan",weighted:false,cue:"Gerekirse alt dizi yere koyarak kolaylaştır."}
  ]
};

const tenorPosts = {
  catcamel:{id:"3241472213518054401",url:"https://tenor.com/view/cat-cow-stretch-gif-3241472213518054401",ratio:"1"},
  hiprotation:{id:"13808788",url:"https://tenor.com/view/shaking-hip-rotation-hip-rotating-relaxing-fitness-gif-13808788",ratio:"1.77"},
  bwsquat:{id:"20516887",url:"https://tenor.com/view/squat-james-smith-james-smith-pt-perfect-form-working-out-gif-20516887",ratio:"0.56"},
  bridge:{id:"16591507",url:"https://tenor.com/view/glute-bridge-exercise-workout-gif-16591507",ratio:"1"},
  deadbug:{id:"19407840",url:"https://tenor.com/view/deadbug-core-gif-19407840",ratio:"1.78"},
  row1:{id:"25623538",url:"https://tenor.com/view/db-tripod-row-gif-25623538",ratio:"1.79"},
  goblet:{id:"25623494",url:"https://tenor.com/view/db-goblet-squats-gif-25623494",ratio:"1.79"},
  rdl:{id:"16373163138971048501",url:"https://tenor.com/view/dumbbell-rdl-gif-16373163138971048501",ratio:"1"},
  shoulder:{id:"17350548",url:"https://tenor.com/view/shoulder-press-seated-shoulder-press-lift-work-out-exercise-gif-17350548",ratio:"1"},
  sideplank:{id:"12670642771450085987",url:"https://tenor.com/view/noequipmentexercisesmen-sideplanks-gif-12670642771450085987",ratio:"1.77"},
  floorpress:{id:"14058573",url:"https://tenor.com/view/lifting-weights-dumbbell-press-gains-training-exercise-gif-14058573",ratio:"1.78"},
  lunge:{id:"25623789",url:"https://tenor.com/view/db-reverse-lunge-gif-25623789",ratio:"1.79"},
  birddog:{id:"27559649",url:"https://tenor.com/view/bird-dog-gif-27559649",ratio:"1.53"},
  calf:{id:"6189261415732733300",url:"https://tenor.com/view/calf-raise-gif-6189261415732733300",ratio:"0.56"},
  downdog:{id:"163870655752330559",url:"https://tenor.com/view/downward-dog-yoga-gif-163870655752330559",ratio:"1.50"},
  childpose:{id:"13663141",url:"https://tenor.com/view/child-pose-stretching-eyes-closed-yoga-meditating-gif-13663141",ratio:"1.78"},
  chairpose:{id:"14823777",url:"https://tenor.com/view/yoga-level-up-your-dex-meghan-caves-twitch-workout-gif-14823777",ratio:"1.78"}
};

function todayKey(){ const d=new Date().getDay(); if(d===1)return "A"; if(d===3)return "B"; if(d===5)return "C"; return "A"; }
function baseState(){ return {week:1,selectedDay:todayKey(),logs:[],done:{}}; }
function state(){
  try{
    const saved=JSON.parse(localStorage.getItem("aktifGucluV1"))||{};
    return {...baseState(),...saved,selectedDay:saved.selectedDay||todayKey(),logs:saved.logs||[],done:saved.done||{}};
  }catch{return baseState();}
}
function saveState(s){ localStorage.setItem("aktifGucluV1",JSON.stringify(s)); }
function weekScope(week,scope){ return `w${week}::${scope}`; }

function programForWeek(week){
  if(+week===1) return week1;
  const sets = +week===2 ? 2 : 3;
  const program={};
  Object.entries(baseProgram).forEach(([day,rows])=>{
    program[day]=rows.map((r,idx)=>({...r,sets:(idx>=3 && +week===2)?2:sets}));
  });
  if(+week===2){
    program.B=program.B.map(r=>r.id==="lunge"?{...r,weighted:false,cue:"Önce ağırlıksız ve kontrollü yap; kolaylaşınca dumbbell ekle."}:r);
  }
  return program;
}

function latestLogForExercise(id){
  return (state().logs||[]).find(x=>x.id===id && x.weight!==undefined && x.weight!==null && String(x.weight).trim()!=="");
}

function loadTenorDemo(container,id){
  if(container.dataset.loaded==="1")return;
  const t=tenorPosts[id];
  if(!t){container.innerHTML='<div class="empty">GIF bulunamadı.</div>';return;}
  container.innerHTML=`<div class="tenor-box"><div class="tenor-gif-embed" data-postid="${t.id}" data-share-method="host" data-aspect-ratio="${t.ratio}" data-width="100%"><a href="${t.url}">Egzersiz GIF</a></div><a class="tenor-credit" href="${t.url}" target="_blank" rel="noopener">Via Tenor</a></div>`;
  container.dataset.loaded="1";
  const script=document.createElement("script");
  script.src="https://tenor.com/embed.js?ts="+Date.now();
  script.async=true;
  document.body.appendChild(script);
}

function renderDaySwitch(){
  const st=state();
  q("#daySwitch").innerHTML=["A","B","C"].map(d=>`<button class="day-choice ${st.selectedDay===d?"active":""}" data-day="${d}"><strong>Gün ${d}</strong><small>${dayInfo[d]}</small></button>`).join("");
  q("#daySwitch").querySelectorAll(".day-choice").forEach(btn=>btn.onclick=()=>{
    const s=state(); s.selectedDay=btn.dataset.day; saveState(s); renderDaySwitch(); renderWorkout(); updateStats();
  });
}

function renderExercise(ex,parent,scope,week){
  const tpl=q("#exerciseTemplate").content.cloneNode(true);
  const root=tpl.querySelector(".exercise");
  const fullScope=weekScope(week,scope);
  const demo=tpl.querySelector(".demo");
  tpl.querySelector(".exercise-name").textContent=ex.name;
  tpl.querySelector(".exercise-meta").textContent=`${ex.muscles} · ${ex.sets} × ${ex.reps}`;
  tpl.querySelector(".sets").value=ex.sets;
  tpl.querySelector(".reps").value=ex.reps;
  tpl.querySelector(".cues").innerHTML=`<li>${ex.cue}</li>`;

  const weightInput=tpl.querySelector(".weight");
  const weightLabel=tpl.querySelector(".weight-label");
  const last=tpl.querySelector(".last-used");
  const prev=latestLogForExercise(ex.id);
  if(ex.weighted===false){
    weightLabel.hidden=true;
  }else if(prev){
    weightInput.value=prev.weight;
    last.hidden=false;
    last.textContent=`Son: ${prev.weight} kg`;
  }

  tpl.querySelector(".done").checked=!!state().done[fullScope+"::"+ex.id];

  tpl.querySelector(".demo-toggle").onclick=(e)=>{
    const wrap=e.currentTarget.parentElement.nextElementSibling;
    const open=wrap.hidden;
    wrap.hidden=!wrap.hidden;
    if(open)loadTenorDemo(demo,ex.id);
    e.currentTarget.textContent=wrap.hidden?"Göster":"Kapat";
  };

  tpl.querySelector(".done").onchange=(e)=>{
    const st=state(); st.done[fullScope+"::"+ex.id]=e.target.checked; saveState(st); updateStats();
  };

  tpl.querySelector(".save-log").onclick=(e)=>{
    const card=e.currentTarget.closest(".exercise");
    const st=state();
    st.logs.unshift({
      time:new Date().toISOString(),
      week,scope,id:ex.id,name:ex.name,
      sets:card.querySelector(".sets").value,
      reps:card.querySelector(".reps").value,
      weight:ex.weighted===false?"":card.querySelector(".weight").value
    });
    st.done[fullScope+"::"+ex.id]=true;
    saveState(st);
    card.querySelector(".done").checked=true;
    e.currentTarget.textContent="Kaydedildi ✓";
    setTimeout(()=>e.currentTarget.textContent="Kaydet",900);
    updateStats();
    renderHistory();
  };
  parent.appendChild(tpl);
}

function renderWorkout(){
  const st=state(), w=+st.week, day=st.selectedDay, program=programForWeek(w), el=q("#workout");
  el.innerHTML=`<div class="section-head"><h2>${w===5?"5+":w}. Hafta · Gün ${day}</h2><span>${program[day].length} hareket</span></div>`;
  program[day].forEach(ex=>renderExercise(ex,el,"day"+day,w));
}

function renderFlow(){
  const w=+state().week, el=q("#flow");
  el.innerHTML=`<div class="section-head"><h2>Akış & Mobilite</h2><span>8–10 dk</span></div>
    <div class="flow-card card">
      <div class="flow-intro">
        <div class="flow-chip"><b>Yavaş</b><small>acele yok</small></div>
        <div class="flow-chip"><b>Rahat</b><small>ağrısız aralık</small></div>
        <div class="flow-chip"><b>Nefes</b><small>tutmadan</small></div>
      </div>
    </div>`;
  flow.forEach(ex=>renderExercise(ex,el,"flow",w));
}

function openWorkoutDay(day){
  const st=state(); st.selectedDay=day; saveState(st);
  setTab("workout"); renderDaySwitch(); renderWorkout(); updateStats(); window.scrollTo({top:0,behavior:"smooth"});
}

function renderProgram(){
  const w=+state().week, program=programForWeek(w), el=q("#program");
  el.innerHTML=`<div class="section-head"><h2>Program</h2><span>${w===5?"5+":w}. hafta</span></div>`;
  Object.entries(program).forEach(([day,rows])=>{
    const card=document.createElement("article");
    card.className="program-card card";
    card.innerHTML=`<h3>Gün ${day}</h3><p>${dayInfo[day]}</p><div class="program-list">${rows.map(r=>`<div class="program-item"><div><b>${r.name}</b><small>${r.muscles}</small></div><strong>${r.sets} × ${r.reps}</strong></div>`).join("")}</div><button class="primary open-day">Gün ${day}'yı aç</button>`;
    card.querySelector(".open-day").onclick=()=>openWorkoutDay(day);
    el.appendChild(card);
  });
}

function renderHistory(){
  const logs=state().logs||[], el=q("#history");
  el.innerHTML='<div class="section-head"><h2>Geçmiş</h2><span>Son kayıtlar</span></div>';
  if(!logs.length){el.insertAdjacentHTML("beforeend",'<div class="history-card card empty">Henüz kayıt yok.</div>');return;}
  const box=document.createElement("div"); box.className="history-card card";
  logs.slice(0,100).forEach(x=>{
    const d=new Date(x.time);
    const where=x.scope==="flow"?"Akış":x.scope.replace("day","Gün ");
    box.insertAdjacentHTML("beforeend",`<div class="log-item"><b>${x.name}</b><small>${d.toLocaleString("tr-TR")} · Hafta ${x.week} · ${where} · ${x.sets} set · ${x.reps}${x.weight?` · ${x.weight} kg`:""}</small></div>`);
  });
  el.appendChild(box);
}

function updateStats(){
  const st=state(), w=+st.week, day=st.selectedDay, program=programForWeek(w), scope=weekScope(w,"day"+day);
  const total=program[day].length, done=program[day].filter(r=>st.done[scope+"::"+r.id]).length;
  q("#todayDone").textContent=Math.round(done*100/total)+"%";
  let wd=0;
  ["A","B","C"].forEach(k=>{
    const ds=weekScope(w,"day"+k);
    if(program[k].every(r=>st.done[ds+"::"+r.id]))wd++;
  });
  q("#weekDone").textContent=wd+"/3";
  q("#logCount").textContent=(st.logs||[]).length;
}

function setTab(id){
  qa(".navbtn").forEach(b=>b.classList.toggle("active",b.dataset.tab===id));
  qa(".panel").forEach(p=>p.classList.toggle("active",p.id===id));
}

qa(".navbtn").forEach(b=>b.onclick=()=>setTab(b.dataset.tab));

const initial=state();
q("#weekSelect").value=initial.week;
q("#weekSelect").onchange=(e)=>{
  const st=state(); st.week=+e.target.value; saveState(st); renderAll();
};

let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;q("#installBtn").hidden=false;});
q("#installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;q("#installBtn").hidden=true;};
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));}

function renderAll(){renderDaySwitch();renderWorkout();renderFlow();renderProgram();renderHistory();updateStats();}
renderAll();
