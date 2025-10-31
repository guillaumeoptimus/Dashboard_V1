"use client";
import React from "react";
function Card({ title, value, hint }){
  return (<div className="card p-5">
    <div className="text-xs uppercase tracking-wide text-gray-400">{title}</div>
    <div className="text-2xl font-semibold">{value}</div>
    {hint ? <div className="text-xs text-gray-400 mt-1">{hint}</div> : null}
  </div>);
}
export default function KPIs(){
  const [crmCount,setCrmCount]=React.useState(0);
  const [pipeline,setPipeline]=React.useState(0);
  const [todo,setTodo]=React.useState(0);
  React.useEffect(()=>{ try{
    const raw=localStorage.getItem("optimus_kanban_v1"); if(!raw) return;
    const data=JSON.parse(raw); let count=0,sum=0,t=0;
    Object.keys(data||{}).forEach(stage=>{ const arr=data[stage]||[]; count+=arr.length; if(stage==='todo') t+=arr.length; arr.forEach(c=> sum+=Number(c.value||0)); });
    setCrmCount(count); setPipeline(sum); setTodo(t);
  }catch{} },[]);
  return (<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
    <Card title="Total opportunités" value={crmCount} hint="Cartes sur le board"/>
    <Card title="Pipeline estimé" value={`€${pipeline.toLocaleString()}`} hint="Somme des montants"/>
    <Card title="À contacter" value={todo} hint="Entrée de funnel"/>
    <Card title="Emails connectés" value={"Mock"} hint="Activation plus tard"/>
  </div>);
}
