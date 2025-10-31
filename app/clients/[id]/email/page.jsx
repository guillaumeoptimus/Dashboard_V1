"use client";
import React from "react"; import { useParams } from "next/navigation";
export default function ClientEmailPage(){
  const { id } = useParams(); const [client,setClient]=React.useState(null);
  React.useEffect(()=>{ try{ const raw=localStorage.getItem("optimus_clients_v1"); const list=raw?JSON.parse(raw):[]; setClient(list.find(c=>c.id===id)||null);}catch{ setClient(null);} },[id]);
  return (<div className="space-y-4">
    <h1 className="text-2xl font-semibold">Email — {client?.name || "Client"}</h1>
    <div className="card p-4">
      <div className="flex items-center justify-between"><div><div className="font-medium">Connexion</div><div className="text-sm text-gray-500">Aucun compte connecté (mock).</div></div>
        <button className="btn" onClick={()=>alert("Connexion Gmail prévue dans la version full.")}>Connecter Gmail</button></div>
    </div>
  </div>);
}
