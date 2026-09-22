/* ==================== EDIT HERE ====================
   修改網站文字時，只需要編輯下面這一區。
   圖片檔名不同時，可在 IMAGE_OVERRIDES 指定。 */
const TEXT = {
  homeLead: "92人の候補から直感で選んで、<br>あなたの「顔が好き」TOP9を決めよう。",
  preTitle: "予選",
  preDesc: "表示されたメンバーの中から、<br>「顔が好き」と思う人を選んでね。",
  preRules: "複数選択OK！<br><b>4人画面・3人画面ともに 0〜3人</b>まで。",
  preStart: "予選スタート →",
  preSelectTitle: "この中で好きな顔を選んでね",
  preSelectSub: "複数OK。深く考えず、直感でどうぞ ♡",
  preDoneTitle: "予選終了！",
  preDoneDesc: "好き顔候補は <b id=\"preN\">0</b> 人でした。",
  mainIntroTitle: "本選",
  mainIntroDesc: "この中で好きな顔を<br><b>一位 → 二位</b> の順に選んでね！",
  mainRules: "① 一番好きな顔をタップ<br>② 次に好きな顔をタップ<br><br><b>本選は3ROUND。</b><br>後半ほど近い候補同士を比べます。",
  mainStart: "本選スタート",
  mainQuestion1: "① 一番好きな顔は？",
  mainQuestion2: "② 次に好きな顔は？",
  mainSub: "まず一位 → 次に二位",
  lastTitle: "本選 最終戦",
  lastDesc: "決勝進出をかけた<br>ラストバトル！",
  lastRules: "ボーダー付近の候補をもう一度比べます。<br><br><b>本選上位は決勝進出をキープ。</b><br>ボーダーだけを再比較します。",
  lastStart: "最終戦スタート",
  finalistsTitle: "決勝進出18人決定！",
  finalistsDesc: "ここからは完全二択。<br>あなたの好き顔TOP9を、一位から九位まで決めます。",
  finalStart: "👑 決勝へ",
  finalTitle: "決勝 TOP9選考中",
  finalQuestion: "どっちの顔が好き？",
  finalSub: "直感で1人をタップ。TOP9が確定したら終了。",
  resultSubtitle: "あなたの「顔が好き」TOP9",
  copyDone: "結果をコピーしました ♡",
  copyFail: "コピーできませんでした",
  rank: ["一位", "二位", "三位", "四位", "五位", "六位", "七位", "八位", "九位"],
  rank1: "一位",
  candidateCount: 92
};

// 如果 GitHub images 資料夾內的檔名和程式不同，在這裡填實際檔名。
// 例如："Whan": "images/W han.jpg"
const IMAGE_OVERRIDES = {};

function imagePath(name, originalPath) { return IMAGE_OVERRIDES[name] || originalPath; }
function imageCandidates(name, originalPath) {
  if (IMAGE_OVERRIDES[name]) return [IMAGE_OVERRIDES[name]];
  const slash = originalPath.lastIndexOf('/') + 1;
  const dir = originalPath.slice(0, slash);
  const file = originalPath.slice(slash);
  const dot = file.lastIndexOf('.');
  const stem = dot > 0 ? file.slice(0, dot) : file;
  const ext = dot > 0 ? file.slice(dot) : '.jpg';
  const cap = stem.charAt(0).toUpperCase() + stem.slice(1);
  const noDup = stem.replace(/-2$/, '');
  return [...new Set([
    `${dir}${cap}${ext}`,
    `${dir}${stem.toLowerCase()}${ext}`,
    `${dir}${noDup}${ext}`,
    `${dir}${noDup.charAt(0).toUpperCase() + noDup.slice(1)}${ext}`
  ])].filter(x => x !== originalPath);
}
function handleImageError(img) { const list=JSON.parse(decodeURIComponent(img.dataset.fallback||'%5B%5D')); const next=list.shift(); if(next){img.dataset.fallback=encodeURIComponent(JSON.stringify(list));img.src=next;}else{img.style.display='none';} }
function bindImageFallbacks() {}
function applyText() {
  const set = (selector, value) => { const el = document.querySelector(selector); if (el) el.innerHTML = value; };
  set('#home .lead', TEXT.homeLead);
  set('#preIntro h2', TEXT.preTitle); set('#preIntro > p:nth-of-type(2)', TEXT.preDesc); set('#preIntro .rules', TEXT.preRules); set('#preIntro .primary', TEXT.preStart);
  set('#pre h3', TEXT.preSelectTitle); set('#pre .sub', TEXT.preSelectSub);
  set('#preDone h2', TEXT.preDoneTitle); set('#preDone > p:nth-of-type(2)', TEXT.preDoneDesc);
  set('#mainIntro h2', TEXT.mainIntroTitle); set('#mainIntro > p:nth-of-type(2)', TEXT.mainIntroDesc); set('#mainIntro .rules', TEXT.mainRules); set('#mainIntro .primary', TEXT.mainStart);
  set('#main .sub', TEXT.mainSub);
  set('#lastIntro h2', TEXT.lastTitle); set('#lastIntro > p:nth-of-type(2)', TEXT.lastDesc); set('#lastIntro .rules', TEXT.lastRules); set('#lastIntro .primary', TEXT.lastStart);
  set('#finalists h2', TEXT.finalistsTitle); set('#finalists > p:nth-of-type(2)', TEXT.finalistsDesc); set('#finalists .primary', TEXT.finalStart);
  set('#final h2', TEXT.finalTitle); set('#final h3', TEXT.finalQuestion); set('#final .sub', TEXT.finalSub);
  set('#result .resultHead > p:last-child', TEXT.resultSubtitle);
}

const NAMES = [['Pam', 'images/pam.jpg'], ['Arhoung', 'images/arhoung.jpg'], ['May', 'images/may.jpg'], ['Yuyu', 'images/yuyu.jpg'], ['Apple', 'images/apple.jpg'], ['Nycha', 'images/nycha.jpg'], ['Myyu', 'images/myyu.jpg'], ['Piploy', 'images/piploy.jpg'], ['Enjoy', 'images/enjoy.jpg'], ['Bonnie', 'images/bonnie.jpg'], ['Lilly', 'images/lilly.jpg'], ['Faye', 'images/faye.jpg'], ['Tan', 'images/tan.jpg'], ['Engfa', 'images/engfa.jpg'], ['Jayna', 'images/jayna.jpg'], ['Aya', 'images/aya.jpg'], ['Fond', 'images/fond.jpg'], ['Ciize', 'images/ciize.jpg'], ['Jaoying', 'images/jaoying.jpg'], ['Oaey', 'images/oaey.jpg'], ['Namtan', 'images/namtan.jpg'], ['Tungpang', 'images/tungpang.jpg'], ['Mint', 'images/mint.jpg'], ['Mim', 'images/mim-2.jpg'], ['Mingming', 'images/mingming.jpg'], ['Gift', 'images/gift.jpg'], ['Aosin', 'images/aosin.jpg'], ['Puyfai', 'images/puyfai.jpg'], ['Orm', 'images/orm.jpg'], ['Opal', 'images/opal.jpg'], ['Earn', 'images/earn.jpg'], ['June', 'images/june-2.jpg'], ['Janeyeh', 'images/janeyeh.jpg'], ['June', 'images/june.jpg'], ['Fay', 'images/fay.jpg'], ['Tk', 'images/tk.jpg'], ['Film', 'images/film.jpg'], ['Anda', 'images/anda.jpg'], ['Nur', 'images/nur.jpg'], ['Grace', 'images/grace.jpg'], ['Belle', 'images/belle.jpg'], ['Namwan', 'images/namwan.jpg'], ['Niky', 'images/niky.jpg'], ['Mewnich', 'images/mewnich.jpg'], ['Jingjing', 'images/jingjing.jpg'], ['Natt', 'images/natt.jpg'], ['Pahn', 'images/pahn.jpg'], ['Becky', 'images/becky.jpg'], ['Mie', 'images/mie.jpg'], ['Kapook', 'images/kapook.jpg'], ['Shu', 'images/shu.jpg'], ['Lookhmee', 'images/lookhmee.jpg'], ['Yada', 'images/yada.jpg'], ['Whan', 'images/whan.jpg'], ['Noey', 'images/noey.jpg'], ['Fay', 'images/fay-2.jpg'], ['Lookkaew', 'images/lookkaew.jpg'], ['Charlotte', 'images/charlotte.jpg'], ['Meen', 'images/meen.jpg'], ['Oom', 'images/oom.jpg'], ['Gene', 'images/gene.jpg'], ['Lena', 'images/lena.jpg'], ['Milk', 'images/milk.jpg'], ['Pangjie', 'images/pangjie.jpg'], ['Atom', 'images/atom.jpg'], ['Sonya', 'images/sonya.jpg'], ['Nile', 'images/nile.jpg'], ['Lingling', 'images/lingling.jpg'], ['Ginny', 'images/ginny.jpg'], ['Miu', 'images/miu.jpg'], ['Bam', 'images/bam.jpg'], ['Mook', 'images/mook.jpg'], ['Kao', 'images/kao.jpg'], ['Freen', 'images/freen.jpg'], ['Jessie', 'images/jessie.jpg'], ['England', 'images/england.jpg'], ['Love', 'images/love.jpg'], ['Namneung', 'images/namneung.jpg'], ['Chanya', 'images/chanya.jpg'], ['Pitcha', 'images/pitcha.jpg'], ['View', 'images/view.jpg'], ['Emi', 'images/emi.jpg'], ['Puinnoon', 'images/puinnoon.jpg'], ['Mable', 'images/mable.jpg'], ['Mim', 'images/mim.jpg'], ['Babe', 'images/babe.jpg'], ['Bint', 'images/bint.jpg'], ['Jan', 'images/jan.jpg'], ['Yoko', 'images/yoko.jpg'], ['Prim', 'images/prim.jpg'], ['Nepjune', 'images/nepjune.jpg'], ['Ploy', 'images/ploy.jpg']];

const A = NAMES.map((x, i) => ({ id: i, name: x[0], group: "", image: imagePath(x[0], x[1]) }));

let S={pre:[],candidates:[],score:{},round:1,pairs:[],pi:0,first:null,finalists:[],lastPairs:[],li:0,ranking:[],pool:[]};
const $=s=>document.querySelector(s), screens=["home","preIntro","pre","preDone","mainIntro","main","mainDone","lastIntro","last","finalists","final","result"];
function show(id){screens.forEach(x=>$("#"+x).classList.toggle("hidden",x!==id));bindImageFallbacks();scrollTo(0,0)}
function toast(t){$("#toast").textContent=t;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),1400)}
function c(i){return["#a87388","#c18c8e","#817395","#c18d76","#8d7c93","#b17c87","#7c8196","#bd9480","#967080","#7c7188"][i%10]}
function init(a,badge=""){const fb=encodeURIComponent(JSON.stringify(imageCandidates(a.name,a.image)));const badgeHtml=badge?'<span class="badge">'+badge+'</span>':'';return '<div class="photo" style="background:'+c(a.id)+'"><img src="'+a.image+'" data-fallback="'+fb+'" onerror="handleImageError(this)">'+badgeHtml+'</div>'}
function get(id){return A.find(a=>a.id===id)}
function card(id,cls="card"){let a=get(id);return `<button class="${cls}" data-id="${id}">${init(a)}<div class="name">${a.name}</div></button>`}
function resetAll(){S={pre:[],candidates:[],score:{},round:1,pairs:[],pi:0,first:null,finalists:[],lastPairs:[],li:0,ranking:[],pool:[]};show("home")}

let groups=[],gi=0,picked=[];
function makeGroups(){
  groups=[];
  let i=0;
  while(i<A.length){
    const left=A.length-i;
    // Keep every preliminary screen at 3 or 4 candidates.
    // For 92 candidates this becomes 23 groups of 4.
    const n = left===6 || left%4===3 ? 3 : 4;
    groups.push(A.slice(i,i+n));
    i+=n;
  }
}
function startPre(){makeGroups();gi=0;S.pre=[];renderPre();show("pre")}
function renderPre(){let g=groups[gi];$("#preTitle").textContent=`預選 ${gi+1} / ${groups.length}`;picked=[];$("#preGrid").innerHTML=g.map(a=>card(a.id)).join("");$("#preCount").textContent="目前選擇 0 / 3";
document.querySelectorAll("#preGrid .card").forEach(x=>x.onclick=()=>{let id=+x.dataset.id;if(picked.includes(id)){picked=picked.filter(v=>v!==id);x.classList.remove("selected");x.querySelector(".check")?.remove()}else if(picked.length<3){picked.push(id);x.classList.add("selected");let z=document.createElement("span");z.className="check";z.textContent="✓";x.querySelector(".photo").append(z)}else toast("1画面につき3人まで");$("#preCount").textContent=`選択中 ${picked.length} / 3`})}
$("#preNext").onclick=()=>{S.pre.push(...picked);gi++;if(gi<groups.length)renderPre();else{S.candidates=[...new Set(S.pre)];$("#preN").textContent=S.candidates.length;show("preDone")}}

function pairList(ids){let x=[...ids].sort(()=>Math.random()-.5),p=[];for(let i=0;i<x.length-1;i+=2)p.push([x[i],x[i+1]]);if(x.length%2)p.push([x[x.length-1],x[0]]);return p}
function startMain(){S.score={};S.candidates.forEach(id=>S.score[id]=0);S.round=1;prepareMain();show("main")}
function prepareMain(){let sorted=[...S.candidates].sort((a,b)=>S.score[b]-S.score[a]||a-b);S.pairs=S.round===1?pairList(S.candidates):pairList(sorted);S.pi=0;S.first=null;renderMain()}
function renderMain(){if(S.pi>=S.pairs.length){if(S.round<3){S.round++;prepareMain()}else show("mainDone");return}let p=S.pairs[S.pi];$("#mainTitle").textContent=`ROUND ${S.round} / 3`,$("#mainProgress").textContent=`${S.pi+1} / ${S.pairs.length}`,$("#mainPrompt").textContent=S.first===null?TEXT.mainQuestion1:TEXT.mainQuestion2;$("#mainPair").innerHTML=p.map(id=>card(id,"duel")).join("");document.querySelectorAll("#mainPair .duel").forEach(x=>x.onclick=()=>mainPick(+x.dataset.id))}
function mainPick(id){let p=S.pairs[S.pi];if(S.first===null){S.first=id;renderMain();return}if(id===S.first)return toast("別の候補を選んでください");S.score[S.first]+=2;S.score[id]++;S.pi++;S.first=null;renderMain()}

function startLast(){let sorted=[...S.candidates].sort((a,b)=>S.score[b]-S.score[a]||a-b);S.finalists=sorted.slice(0,Math.min(18,sorted.length));let b=S.finalists.slice(Math.max(0,S.finalists.length-6));S.lastPairs=pairList(b);S.li=0;S.first=null;renderLast();show("last")}
function renderLast(){if(S.li>=S.lastPairs.length){finishLast();return}let p=S.lastPairs[S.li];$("#lastPair").innerHTML=p.map(id=>card(id,"duel")).join("");document.querySelectorAll("#lastPair .duel").forEach(x=>x.onclick=()=>lastPick(+x.dataset.id))}
function lastPick(id){let p=S.lastPairs[S.li];if(S.first===null){S.first=id;return}if(id===S.first)return toast("別の候補を選んでください");S.score[S.first]+=4;S.score[id]+=2;S.li++;S.first=null;renderLast()}
function finishLast(){let sorted=[...S.candidates].sort((a,b)=>S.score[b]-S.score[a]||a-b);S.finalists=sorted.slice(0,Math.min(18,sorted.length));show("finalists")}

function startFinal(){
  // Final: stable head-to-head merge sort. Every finalist is compared directly
  // against the appropriate opponent; no arbitrary point weighting or adjacent
  // one-pass scoring is used.
  S.ranking=[];
  S.finalRuns=S.finalists.map(id=>[id]);
  S.finalNextRuns=[];
  S.finalRunIndex=0;
  S.finalJob=null;
  show("final");
  nextFinal();
}

function beginNextFinalLevel(){
  if(S.finalRuns.length<=1){
    S.ranking=S.finalRuns[0].slice(0,9);
    return result();
  }
  S.finalNextRuns=[];
  S.finalRunIndex=0;
  S.finalJob=null;
  nextFinal();
}

function nextFinal(){
  if(S.finalRuns.length<=1){
    S.ranking=S.finalRuns[0].slice(0,9);
    return result();
  }
  // Finish the current merge level.
  if(S.finalRunIndex>=S.finalRuns.length){
    S.finalRuns=S.finalNextRuns;
    return beginNextFinalLevel();
  }
  if(!S.finalJob){
    const left=S.finalRuns[S.finalRunIndex];
    const right=S.finalRuns[S.finalRunIndex+1];
    if(!right){
      S.finalNextRuns.push(left.slice());
      S.finalRunIndex+=2;
      return nextFinal();
    }
    S.finalJob={left:[...left],right:[...right],i:0,j:0,out:[]};
  }
  const j=S.finalJob;
  if(j.i>=j.left.length){
    j.out.push(...j.right.slice(j.j));
    S.finalNextRuns.push(j.out);
    S.finalRunIndex+=2; S.finalJob=null;
    return nextFinal();
  }
  if(j.j>=j.right.length){
    j.out.push(...j.left.slice(j.i));
    S.finalNextRuns.push(j.out);
    S.finalRunIndex+=2; S.finalJob=null;
    return nextFinal();
  }
  const a=j.left[j.i], b=j.right[j.j];
  $("#finalPair").innerHTML=[card(a,"duel"),card(b,"duel")].join("");
  if($("#finalPrompt")) $("#finalPrompt").textContent=TEXT.finalQuestion;
  if($("#finalProgress")) $("#finalProgress").textContent=`最終戦比較 · ${S.finalRunIndex/2+1}`;
  document.querySelectorAll("#finalPair .duel").forEach(x=>x.onclick=()=>finalPick(+x.dataset.id));
}

function finalPick(id){
  const j=S.finalJob;
  if(!j)return;
  const a=j.left[j.i], b=j.right[j.j];
  if(id===a){j.out.push(a);j.i++;}
  else if(id===b){j.out.push(b);j.j++;}
  else return;
  nextFinal();
}

function jpRank(i){return TEXT.rank[i]||String(i+1)+"位"}
function result(){let ids=S.ranking.slice(0,9);$("#resultGrid").innerHTML=ids.map((id,i)=>{let a=get(id);return '<div class="card">'+init(a,i===0?'👑 '+TEXT.rank1:jpRank(i))+'<div class="name">'+a.name+'</div></div>'}).join("");$("#resultList").innerHTML=ids.map((id,i)=>'<li><span>'+(i===0?'👑 ':'')+jpRank(i)+'</span><span>'+get(id).name+'</span></li>').join("");show("result")}
async function copyResult(){let t="私のタイ女性芸能人 好き顔TOP9 👑\n"+S.ranking.slice(0,9).map((id,i)=>`${jpRank(i)} ${get(id).name}`).join("\n");try{await navigator.clipboard.writeText(t);toast(TEXT.copyDone)}catch(e){toast(TEXT.copyFail)}}

window.addEventListener("DOMContentLoaded",()=>{applyText();bindImageFallbacks();});
