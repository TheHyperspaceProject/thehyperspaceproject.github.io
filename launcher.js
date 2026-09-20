import {THP} from "./shared/js/thp.js";
import {watchAuth,anonymousLogin,logout,firebaseReady} from "./shared/js/firebase.js";

const $=s=>document.querySelector(s);
function card(item){
  return `<article class="card game-card"><div><div class="game-art">${item.icon}</div><h3>${item.name}</h3><p>${item.tag}</p></div><div class="actions"><a class="btn primary" href="${item.url}">Launch</a></div></article>`;
}
$("#gameGrid").innerHTML=THP.games.map(card).join("");
$("#gamesGrid2").innerHTML=THP.games.map(card).join("");
$("#projectsGrid").innerHTML=THP.projects.map(card).join("");
$("#playFeatured").onclick=()=>location.href=THP.games[0].url;
document.querySelectorAll(".nav button").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".nav button").forEach(x=>x.classList.remove("active"));b.classList.add("active");
  document.querySelectorAll("main section").forEach(x=>x.classList.add("hidden"));$("#"+b.dataset.section).classList.remove("hidden");
});
$("#firebaseState").textContent=firebaseReady()?"Configured":"Demo mode";
$("#login").onclick=async()=>{
  try{const u=await anonymousLogin(); $("#account").textContent=u.uid.slice(0,8);$("#login").textContent="Connected";}
  catch(e){alert(e.message);}
};
watchAuth(u=>{
  if(u){$("#account").textContent=u.email||("User "+u.uid.slice(0,8));$("#accountName").textContent=u.email||"Anonymous THP user";$("#accountAction").textContent="Connected";}
});
$("#accountAction").onclick=()=>alert("Add your Firebase Web App config to shared/js/firebase-config.js to enable account services.");
