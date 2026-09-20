export const THP = {
  games: [
    {id:"factory-panic",name:"Factory Panic",tag:"Factory / QTE / Management",icon:"🏭",url:"games/FactoryPanic/index.html"},
    {id:"crossfall",name:"Crossfall",tag:"Platform Fighter",icon:"⚔️",url:"games/Crossfall/index.html"},
    {id:"rift",name:"RIFT",tag:"P2P Arena",icon:"◈",url:"games/RIFT/index.html"}
  ],
  projects: [
    {id:"lumina",name:"Lumina",tag:"THP Project / Desktop Web OS",icon:"🦊",url:"projects/Lumina/index.html"}
  ]
};

export function escapeHTML(v){
  return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
