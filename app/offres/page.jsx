import Link from "next/link";
export const metadata = { title: "Offres — Optimus Lead" };

const OFFRES = [
  { slug:"mise-en-place", title:"Mise en place", price:"Forfait ≈ 2 500 €",
    bullets:["Audit & ICP","Stack & scripts","Séquences & assets","Lancement tests"] },
  { slug:"developpement", title:"Développement", price:"≈ 3 000 €/mois",
    bullets:["Prospection continue","Prise de RDV","Optimisation hebdo","Reporting clair"] },
  { slug:"direction-commerciale-externalisee", title:"Direction commerciale externalisée", price:"Sur-mesure",
    bullets:["Pilotage pipe","Coaching & closing","Stratégie commerciale","Part variable au succès"] },
];

export default function Offres(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Nos offres</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {OFFRES.map(o => (
          <div key={o.slug} className="card p-6">
            <div className="text-sm text-gray-500">{o.price}</div>
            <div className="text-xl font-semibold">{o.title}</div>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5 space-y-1">
              {o.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
            </ul>
            <div className="mt-4"><Link href={`/offres/${o.slug}`} className="btn">Voir le détail</Link></div>
          </div>
        ))}
      </div>
    </div>
  );
}
