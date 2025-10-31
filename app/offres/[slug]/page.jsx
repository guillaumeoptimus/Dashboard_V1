import Link from "next/link";

const MAP = {
  "mise-en-place": {
    title: "Mise en place",
    price: "Forfait ≈ 2 500 €",
    intro: "Pack de départ pour poser des bases solides et lancer votre prospection en moins de 2 semaines.",
    modules: [
      "Audit express du parcours commercial & ICP",
      "Mise en place stack (HubSpot light / séquences mail / call)",
      "Scripts d’appels + email + LinkedIn",
      "Assets nécessaires (landing courte, cadences, templates)",
      "Lancement test sur 50–100 cibles & itérations"
    ],
    deliverables: [
      "Dossier ICP + scripts",
      "Séquences prêtes à l’emploi",
      "Checklist & playbook d’exécution"
    ]
  },
  "developpement": {
    title: "Développement",
    price: "≈ 3 000 €/mois",
    intro: "Exécution continue pour générer des RDV qualifiés et alimenter votre pipe.",
    modules: [
      "Prospection multi-canal (email, call, social)",
      "Prise de RDV & gestion des relances",
      "Itérations hebdo sur messages / ICP",
      "Reporting hebdomadaire clair"
    ],
    deliverables: [
      "Tableau de bord KPI",
      "Liste RDV planifiés",
      "Journal d’actions hebdo"
    ]
  },
  "direction-commerciale-externalisee": {
    title: "Direction commerciale externalisée",
    price: "Sur-mesure",
    intro: "Pilotage global : stratégie, process, équipe, closing, et gouvernance pipeline.",
    modules: [
      "Stratégie commerciale & organisation",
      "Pilotage hebdo du pipe et forecast",
      "Coaching / accompagnement aux négociations",
      "Mise en place des incentives & variable au succès"
    ],
    deliverables: [
      "Roadmap trimestrielle",
      "Process & playbooks",
      "Comex pack (indicateurs & risques)"
    ]
  }
};

export default function OffreDetail({ params }){
  const data = MAP[params.slug] || null;
  if(!data){
    return (<div className="space-y-4"><h1 className="text-2xl font-semibold">Offre introuvable</h1>
      <Link href="/offres" className="btn">Retour aux offres</Link></div>);
  }
  return (
    <div className="space-y-6">
      <Link href="/offres" className="text-sm text-gray-500 hover:underline">← Retour aux offres</Link>
      <div className="card p-6">
        <div className="text-sm text-gray-500">{data.price}</div>
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <p className="text-gray-600 mt-2">{data.intro}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-6">
          <div className="font-semibold">Modules</div>
          <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
            {data.modules.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>
        <div className="card p-6">
          <div className="font-semibold">Livrables</div>
          <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
            {data.deliverables.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>
      </div>
      <div className="card p-6">
        <div className="font-semibold mb-2">Intéressé ?</div>
        <div className="flex gap-2">
          <Link href="/contact" className="btn">Demander un échange</Link>
          <Link href="/app-connexion" className="btn">Créer un compte & accéder au dashboard</Link>
        </div>
      </div>
    </div>
  );
}
