import Link from "next/link";
export default function CTA(){
  return (
    <section className="card p-6 text-center">
      <h2 className="text-2xl font-semibold">Prêt à structurer votre machine commerciale ?</h2>
      <p className="text-sm text-gray-600 mt-2">Créez un compte et accédez au dashboard pour suivre vos actions.</p>
      <div className="mt-4 flex gap-3 justify-center">
        <Link href="/app-connexion" className="btn">Créer un compte</Link>
        <Link href="/offres" className="btn">Voir les offres</Link>
      </div>
    </section>
  );
}
