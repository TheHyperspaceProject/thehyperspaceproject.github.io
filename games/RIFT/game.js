import {model} from "./assets/models/player.js";
import {weapon} from "./assets/weapons/pulse-rifle.js";
const $=s=>document.querySelector(s);let hp=100,ammo=12,score=0;
const p=document.createElement("div");p.className="rift-player";$("#arena").appendChild(p);
for(let i=0;i<3;i++){const e=document.createElement("div");e.className="rift-enemy";e.style.left=(15+i*30)+"%";e.style.top=(18+i*18)+"%";$("#arena").appendChild(e)}
function render(){$("#hp").textContent=hp;$("#ammo").textContent=ammo;$("#score").textContent=score}
$("#fire").onclick=()=>{if(ammo<=0)return;ammo--;score+=10;render();const s=document.createElement("div");s.className="shot";s.style.left="52%";s.style.top="50%";$("#arena").appendChild(s);setTimeout(()=>s.remove(),250)};
$("#reload").onclick=()=>{ammo=12;render()};$("#dash").onclick=()=>{p.animate([{transform:"translateX(0)"},{transform:"translateX(80px)"},{transform:"translateX(0)"}],300)};
$("#reset").onclick=()=>{hp=100;ammo=12;score=0;render()};render();
