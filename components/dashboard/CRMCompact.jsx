"use client";
import React from "react"; import Link from "next/link";
const STAGES=[{id:"todo",label:"À contacter"},{id:"discovery",label:"RDV à venir"},{id:"thinking",label:"En réflexion"},{id:"signing",label:"En cours de signature"},{id:"integration",label:"Intégration technique"},{id:"live",label:"Opérationnel"},{id:"lost",label:"Non intéressé"}];
export default function CRMCompact(){
  const [data,setData]=React.useState({});
  React.useEffect(()=>{ try{ const raw=localStorage.getItem("optimus_kanban_v1"); if(raw) setData(JSON.parse(raw)); }catch{} },[]);
  return (<div className="card p-5">
    <div className="flex items-center justify-between mb-4">
      <div className="font-semibold">CRM — Vue compacte</div>
      <Link href="/crm/kanban" className="btn">Ouvrir</Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
      {STAGES.map(s=>{ const arr=data?.[s.id]||[]; const sum=arr.reduce((acc,c)=>acc+Number(c.value||0),0);
        return (<div key={s.id} className="rounded-2xl border p-3">
          <div className="text-sm text-gray-500">{s.label}</div>
          <div className="text-xl font-semibold">{arr.length} <span className="text-sm text-gray-400">opps</span></div>
          <div className="text-xs text-gray-400 mt-1">€{sum.toLocaleString()}</div>
        </div>);
      })}
    </div>
  </div>);
}
