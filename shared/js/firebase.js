import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInAnonymously, signOut } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getDatabase, ref, get, set, update } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

let app=null, auth=null, db=null;

export function firebaseReady(){
  return !!window.THP_FIREBASE_CONFIG;
}

export function initFirebase(){
  if(!window.THP_FIREBASE_CONFIG) return false;
  if(!app){
    app=initializeApp(window.THP_FIREBASE_CONFIG);
    auth=getAuth(app);
    db=getDatabase(app);
  }
  return true;
}

export function watchAuth(callback){
  if(!initFirebase()){ callback(null); return ()=>{}; }
  return onAuthStateChanged(auth,callback);
}

export async function anonymousLogin(){
  if(!initFirebase()) throw new Error("Firebase config is not installed.");
  return (await signInAnonymously(auth)).user;
}

export async function logout(){
  if(auth) await signOut(auth);
}

export async function readRTDB(path){
  if(!initFirebase()) return null;
  const snap=await get(ref(db,path));
  return snap.exists()?snap.val():null;
}

export async function writeRTDB(path,value){
  if(!initFirebase()) throw new Error("Firebase config is not installed.");
  await set(ref(db,path),value);
}

export async function patchRTDB(path,value){
  if(!initFirebase()) throw new Error("Firebase config is not installed.");
  await update(ref(db,path),value);
}

export function currentUser(){
  return auth?.currentUser || null;
}
