export const metadata = { title: "Contact — Optimus Lead" };
export default function Contact(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <div className="card p-6">
        <p className="text-sm text-gray-600">Écrivez à <a className="underline" href="mailto:guillaume@optimuslead.com">guillaume@optimuslead.com</a> ou prenez un rendez-vous.</p>
        <p className="text-xs text-gray-400 mt-2">Formulaire natif à venir — ici on mettra Calendly / Tidycal.</p>
      </div>
    </div>
  );
}
