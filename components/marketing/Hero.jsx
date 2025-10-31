import Link from "next/link";
export default function Hero(){
  return (
    <section className="card p-8 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="pro-badge mb-3">Externalisation commerciale</div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Accélérez vos ventes avec<br/>une <span className="text-gray-700">Direction Commerciale Externalisée</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Structuration go-to-market, prospection multi‑canale, prise de RDV et pilotage du pipe. Une équipe
            pragmatique qui livre du résultat—pas des slides.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/offres" className="btn">Voir les offres</Link>
            <Link href="/app-connexion" className="btn">Créer un compte & accéder au dashboard</Link>
          </div>
        </div>
        <div className="justify-self-center">
          <img src="/site-illustration.svg" alt="Optimus Lead" className="w-full max-w-md"/>
        </div>
      </div>
      <div className="absolute right-6 top-6 text-xs text-gray-400">Optimus Lead</div>
    </section>
  );
}
