"use client";
import React from "react"; import Link from "next/link";
function useClients(){
  const [list,setList]=React.useState([]);
  React.useEffect(()=>{ try{ const raw=localStorage.getItem("optimus_clients_v1"); setList(raw?JSON.parse(raw):[]);}catch{ setList([]);} },[]);
  React.useEffect(()=>{ try{ localStorage.setItem("optimus_clients_v1", JSON.stringify(list)); }catch{} },[list]);
  return [list,setList];
}
export default function ClientsPage(){
  const [clients,setClients]=useClients(); const [name,setName]=React.useState("");
  const add=(e)=>{ e.preventDefault(); if(!name.trim()) return; setClients([{id:String(Date.now()), name, isArchived:false}, ...clients]); setName(""); };
  const toggle=(id)=> setClients(clients.map(c=>c.id===id?{...c,isArchived:!c.isArchived}:c));
  const active=clients.filter(c=>!c.isArchived); const archived=clients.filter(c=>c.isArchived);
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><h1 className="text-2xl font-semibold">Sous-comptes (Clients)</h1>
      <form onSubmit={add} className="flex gap-2"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Nom du client" className="px-3 py-2 border rounded-xl"/><button className="btn">Ajouter</button></form></div>
    <section className="space-y-2"><h2 className="text-lg font-medium">Actifs</h2>
      <div className="grid md:grid-cols-3 gap-3">{active.map(c=>(<div key={c.id} className="card p-4">
        <div className="flex items-center justify-between"><div className="font-medium">{c.name}</div><button onClick={()=>toggle(c.id)} className="text-sm px-2 py-1 border rounded-lg">Archiver</button></div>
        <div className="mt-3 flex gap-2"><Link href={`/clients/${c.id}/email`} className="btn">Email (mock)</Link></div>
      </div>))}</div></section>
    <section className="space-y-2"><h2 className="text-lg font-medium">Archivés</h2>
      <div className="grid md:grid-cols-3 gap-3">{archived.map(c=>(<div key={c.id} className="card p-4 bg-gray-50">
        <div className="flex items-center justify-between"><div className="font-medium">{c.name}</div><button onClick={()=>toggle(c.id)} className="text-sm px-2 py-1 border rounded-lg">Désarchiver</button></div>
      </div>))}</div></section>
  </div>);
}
