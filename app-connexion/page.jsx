import { Suspense } from "react";
import ConnexionForm from "./ConnexionForm";

export const dynamic = "force-dynamic";

export default function AppConnexionPage(){
  return (
    <Suspense fallback={<div className="text-sm text-gray-500">Chargement…</div>}>
      <ConnexionForm />
    </Suspense>
  );
}
