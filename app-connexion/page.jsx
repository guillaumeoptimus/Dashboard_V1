"use client";
import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ConnexionForm(){
  const [email,setEmail] = React.useState("");
  const router = useRouter();
  const q = useSearchParams();

  const submit = (e) => {
    e.preventDefault();
    const v = email.trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){ alert("Email invalide"); return; }
    try { localStorage.setItem("optimus_user_email", v); } catch {}
    const redirect = q.get("redirect") || "/dashboard";
    router.replace(redirect);
  };

  return (
    <div className="space-y-4 max-w-lg">
      <h1 className="text-3xl font-semibold">Créer un compte</h1>
      <p className="text-sm text-gray-600">Saisissez votre email pour accéder au dashboard. Aucun mot de passe requis.</p>
      <form onSubmit={submit} className="flex gap-2">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="votre@email"
               className="px-3 py-2 border rounded-xl flex-1"/>
        <button className="px-4 py-2 border rounded-xl">Accéder</button>
      </form>
      <p className="text-xs text-gray-400">Vous pourrez vous déconnecter à tout moment.</p>
    </div>
  );
}

export const dynamic = "force-dynamic";

export default function AppConnexionPage(){
  return (
    <Suspense fallback={<div className="text-sm text-gray-500">Chargement…</div>}>
      <ConnexionForm />
    </Suspense>
  );
}
