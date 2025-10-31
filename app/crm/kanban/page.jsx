"use client";
import React from "react"; import * as Papa from "papaparse"; import jsPDF from "jspdf";
const STAGES=["todo","discovery","thinking","signing","integration","live","lost"];
function Card({ c }){ return (<div className="p-3 rounded-xl border bg-white shadow-sm"><div className="font-medium">{c.title}</div><div className="text-xs text-gray-500">{c.company||"—"}</div><div className="text-xs text-gray-400 mt-1">€{Number(c.value||0).toLocaleString()}</div></div>); }
export default function Kanban(){
  const [data,setData]=React.useState({ todo:[], discovery:[], thinking:[], signing:[], integration:[], live:[], lost:[] });
  const [title,setTitle]=React.useState(""); const [value,setValue]=React.useState("");
  React.useEffect(()=>{ try{ const raw=localStorage.getItem("optimus_kanban_v1"); setData(raw?JSON.parse(raw):data);}catch{} },[]);
  React.useEffect(()=>{ try{ localStorage.setItem("optimus_kanban_v1", JSON.stringify(data)); }catch{} },[data]);
  const add=(e)=>{ e.preventDefault(); if(!title.trim()) return; const card={id:String(Date.now()), title, value:Number(value||0), company:"", stage:"todo"}; setData({ ...data, todo:[card, ...data.todo] }); setTitle(""); setValue(""); };
  const onDrop=(e,stage)=>{ e.preventDefault(); const id=e.dataTransfer.getData("text/plain"); const sourceStage=e.dataTransfer.getData("text/stage"); if(!id||!sourceStage||sourceStage===stage) return; const srcList=data[sourceStage].filter(c=>c.id!==id); const moved=data[sourceStage].find(c=>c.id===id); if(!moved) return; moved.stage=stage; const destList=[moved,...data[stage]]; setData({ ...data, [sourceStage]:srcList, [stage]:destList }); };
  const onDragStart=(e,card,stage)=>{ e.dataTransfer.setData("text/plain", card.id); e.dataTransfer.setData("text/stage", stage); };
  const exportCSV=()=>{ const rows=[]; STAGES.forEach(s=>(data[s]||[]).forEach(c=>rows.push({stage:s,title:c.title,value:c.value,company:c.company}))); const csv=Papa.unparse(rows); const blob=new Blob([csv],{type:"text/csv;charset=utf-8"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download="pipeline.csv"; a.click(); URL.revokeObjectURL(url); };
  const exportPDF=()=>{ const doc=new jsPDF(); doc.text("Pipeline CRM",14,16); let y=24; STAGES.forEach(s=>{ doc.text(s.toUpperCase(),14,y); y+=6; (data[s]||[]).forEach(c=>{ doc.text(`- ${c.title} (€${c.value})`,18,y); y+=6; if(y>270){ doc.addPage(); y=20; } }); y+=4; }); doc.save("pipeline.pdf"); };
  return (<div className="space-y-4">
    <div className="flex items-center justify-between"><h1 className="text-2xl font-semibold">CRM — Kanban</h1>
      <div className="flex gap-2"><button onClick={exportCSV} className="btn">Export CSV</button><button onClick={exportPDF} className="btn">Export PDF</button></div></div>
    <form onSubmit={add} className="flex gap-2"><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Titre opportunité" className="px-3 py-2 border rounded-xl"/><input value={value} onChange={e=>setValue(e.target.value)} type="number" placeholder="Valeur (€)" className="px-3 py-2 border rounded-xl w-40"/><button className="btn">Ajouter</button></form>
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7 gap-3">
      {STAGES.map(stage=>(<div key={stage} onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>onDrop(e,stage)} className="rounded-2xl border p-3 bg-gray-50 min-h-[200px]">
        <div className="text-sm font-medium capitalize mb-2">{stage}</div>
        <div className="space-y-2">{(data[stage]||[]).map(c=>(<div key={c.id} draggable onDragStart={(e)=>onDragStart(e,c,stage)}><Card c={c}/></div>))}</div>
      </div>))}
    </div>
  </div>);
}
