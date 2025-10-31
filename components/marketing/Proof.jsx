function Stat({kpi, label}){
  return (<div className="card p-5"><div className="text-2xl font-semibold">{kpi}</div><div className="text-xs text-gray-500">{label}</div></div>);
}
export default function Proof(){
  return (
    <section className="grid md:grid-cols-3 gap-4">
      <Stat kpi="8–10 RDV/mois" label="Vendredi Society (prise de RDV)"/>
      <Stat kpi="4 RDV/mois" label="Noé Gestion (prise de RDV)"/>
      <Stat kpi="Cycle complet" label="Sinao (prospection, RDV, suivi)"/>
    </section>
  );
}
