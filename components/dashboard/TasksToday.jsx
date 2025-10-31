"use client";
import React from "react";
function Row({ t, onToggle, onDelete }){
  return (<div className="flex items-start gap-3 p-3 border rounded-xl bg-white">
    <input type="checkbox" checked={!!t.done} onChange={onToggle} className="mt-1"/>
    <div className="flex-1">
      <div className={"font-medium " + (t.done ? "line-through text-gray-400" : "")}>{t.title}</div>
      <div className="text-xs text-gray-500">{t.client || "Général"} • {t.due || "Aujourd’hui"}</div>
    </div>
    <button onClick={onDelete} className="text-xs px-2 py-1 border rounded-lg">Suppr</button>
  </div>);
}
export default function TasksToday(){
  const [list,setList]=React.useState([]); const [title,setTitle]=React.useState("");
  React.useEffect(()=>{ try{ const raw=localStorage.getItem("optimus_tasks_v1"); setList(raw?JSON.parse(raw):[]);}catch{ setList([]);} },[]);
  React.useEffect(()=>{ try{ localStorage.setItem("optimus_tasks_v1", JSON.stringify(list)); }catch{} },[list]);
  const add=(e)=>{ e.preventDefault(); if(!title.trim()) return; setList([{id:String(Date.now()), title, client:"Général", due:"Aujourd’hui", done:false}, ...list]); setTitle(""); };
  const toggle=(id)=> setList(list.map(x=>x.id===id?{...x,done:!x.done}:x));
  const remove=(id)=> setList(list.filter(x=>x.id!==id));
  return (<div className="card p-5">
    <div className="flex items-center justify-between mb-4">
      <div className="font-semibold">Tâches d’aujourd’hui</div>
      <form onSubmit={add} className="flex gap-2">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Ajouter une tâche…" className="px-3 py-2 border rounded-xl"/>
        <button className="btn">Ajouter</button>
      </form>
    </div>
    <div className="space-y-2">
      {list.length? list.map(t=> <Row key={t.id} t={t} onToggle={()=>toggle(t.id)} onDelete={()=>remove(t.id)} />) : <div className="text-sm text-gray-500">Aucune tâche. Ajoutez votre première action.</div>}
    </div>
  </div>);
}
