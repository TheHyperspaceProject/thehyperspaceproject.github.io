import {machine as power} from "./assets/machines/power-optimizer.js";
import {machine as heat} from "./assets/machines/heat-recovery.js";
import {machine as auto} from "./assets/machines/auto-operator.js";
import {machine as maintenance} from "./assets/machines/maintenance-bot.js";
import {machine as turbo} from "./assets/machines/turbo-press.js";
import {machine as scrap} from "./assets/machines/scrap-recycler.js";
import {machine as mixer} from "./assets/machines/precision-mixer.js";
import {machine as cooler} from "./assets/machines/industrial-cooler.js";
import {machine as ai} from "./assets/machines/ai-controller.js";

const $=s=>document.querySelector(s);
const factory={machines:[],cash:5000,power:100,products:0,day:1,loan:0,bankrupt:false};
const all=[power,heat,auto,maintenance,turbo,scrap,mixer,cooler,ai];
const achievements=[
  ["first-product","First Product",()=>factory.products>=1],
  ["cash-five","Five Grand",()=>factory.cash>=5000],
  ["machine-owner","Engineer",()=>factory.machines.length>=3],
  ["survivor","Still Standing",()=>factory.day>=10]
];
let unlocked=new Set();

function render(){
  $("#cash").textContent=Math.max(0,Math.floor(factory.cash));
  $("#power").textContent=Math.max(0,Math.floor(factory.power));
  $("#products").textContent=factory.products;
  $("#day").textContent=factory.day;
  $("#factory").innerHTML="";
  for(let i=0;i<20;i++){
    const m=factory.machines[i];
    const d=document.createElement("div"); d.className="machine-tile";
    d.textContent=m?m.icon+" "+m.name:"Empty";
    $("#factory").appendChild(d);
  }
  $("#machines").innerHTML=factory.machines.map(m=>`<div class="machine-row"><span>${m.icon} ${m.name}</span><span>${Math.round(m.efficiency*100)}%</span></div>`).join("")||"<span class='muted'>No machines installed.</span>";
  $("#achievements").innerHTML=achievements.map(a=>{const done=a[2]();if(done)unlocked.add(a[0]);return `<div class="achievement ${done?"done":""}">${done?"✓":"○"} ${a[1]}</div>`}).join("");
}
function bankruptcy(){factory.bankrupt=true;$("#event").innerHTML="<b class='danger'>BANKRUPT.</b> This company is permanently over."}
$("#produce").onclick=()=>{
 if(factory.bankrupt)return;
 const cost=25+factory.machines.length*3; factory.cash-=cost; factory.power-=5;
 if(factory.cash<0||factory.power<=0){bankruptcy();render();return}
 factory.products+=1; factory.day+=0.1;
 if(Math.random()<0.18) triggerQTE(); else $("#event").textContent="Production completed.";
 render();
};
$("#sell").onclick=()=>{if(factory.products){factory.cash+=factory.products*80;factory.products=0;$("#event").textContent="Stock sold."}render()};
$("#buy").onclick=()=>{if(factory.cash>=1000){factory.cash-=1000;factory.machines.push(all[factory.machines.length%all.length]);$("#event").textContent="New machine installed."}render()};
$("#loan").onclick=()=>{if(factory.bankrupt)return;factory.cash+=2500;factory.loan+=3000;$("#event").textContent="Loan received. Repayment balance: $"+factory.loan;render()};
function triggerQTE(){
 const keys=["E","R","T","Y","F"];const key=keys[Math.floor(Math.random()*keys.length)];
 $("#qte").classList.remove("hidden");$("#qte").innerHTML=`<div>⚠️ MACHINE EMERGENCY</div><div class="qte-key">${key}</div><small>Press the key before the failure.</small>`;
 const handler=e=>{if(e.key.toUpperCase()===key){factory.power=Math.min(100,factory.power+8);$("#event").textContent="Emergency handled!";$("#qte").classList.add("hidden");document.removeEventListener("keydown",handler)}};document.addEventListener("keydown",handler);
}
render();
