"use client";
import React from "react";
export default function EmailCompact(){
  const [messages,setMessages]=React.useState([]);
  React.useEffect(()=>{ setMessages([
    {id:"1", subject:"Bienvenue — email intelligent (mock)", from:"system@optimus", snippet:"Connexion Gmail à activer plus tard."},
    {id:"2", subject:"Sinao — Suivi", from:"michel-ange@sinao.fr", snippet:"Point mardi ?"},
    {id:"3", subject:"Vendredi Society — Lead", from:"hello@vendredi-society.fr", snippet:"Brief branding / WebGL."},
  ]); },[]);
  return (<div className="card p-5">
    <div className="font-semibold mb-3">Emails — Aperçu (mock)</div>
    <div className="space-y-3">
      {messages.map(m=> (<div key={m.id} className="rounded-2xl border p-3">
        <div className="font-medium">{m.subject}</div>
        <div className="text-xs text-gray-500">From: {m.from}</div>
        <p className="text-sm mt-1">{m.snippet}</p>
      </div>))}
    </div>
  </div>);
}
