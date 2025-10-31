"use client";
import Link from "next/link";
export default function QuickActions(){
  return (<div className="card p-5">
    <div className="font-semibold mb-3">Actions rapides</div>
    <div className="grid grid-cols-1 gap-2">
      <Link href="/crm/kanban" className="block p-3 rounded-2xl border bg-white hover:shadow-sm">
        <div className="font-medium">Ouvrir le CRM</div>
        <div className="text-xs text-gray-500">Board Kanban, drag & drop</div>
      </Link>
      <Link href="/clients" className="block p-3 rounded-2xl border bg-white hover:shadow-sm">
        <div className="font-medium">Ouvrir la boîte email</div>
        <div className="text-xs text-gray-500">Sous-comptes, connexion plus tard</div>
      </Link>
    </div>
  </div>);
}
