import {character as nova} from "./assets/characters/nova.js";
import {character as rook} from "./assets/characters/rook.js";
import {character as vex} from "./assets/characters/vex.js";
const chars=[nova,rook,vex],$=s=>document.querySelector(s);let selected=nova,score=0;
$("#characters").innerHTML=chars.map(c=>`<div class="char-card ${c===selected?"selected":""}" data-id="${c.id}">${c.icon} ${c.name}<br><small>${c.style}</small></div>`).join("");
document.querySelectorAll(".char-card").forEach(x=>x.onclick=()=>{selected=chars.find(c=>c.id===x.dataset.id);document.querySelectorAll(".char-card").forEach(y=>y.classList.remove("selected"));x.classList.add("selected")});
function attack(type){const p=$("#player"),e=$("#enemy");p.classList.remove("hit");void p.offsetWidth;p.classList.add("hit");score+=type==="finisher"?50:type==="heavy"?20:10;$("#score").textContent=score;if(type==="finisher")e.style.transform="translateX(0) scale(.5)";setTimeout(()=>e.style.transform="",250)}
$("#light").onclick=()=>attack("light");$("#heavy").onclick=()=>attack("heavy");$("#finisher").onclick=()=>attack("finisher");$("#reset").onclick=()=>{score=0;$("#score").textContent=0;$("#enemy").style.transform=""};
