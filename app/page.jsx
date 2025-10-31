import Hero from "@/components/marketing/Hero";
import Proof from "@/components/marketing/Proof";
import OffersGrid from "@/components/marketing/OffersGrid";
import CTA from "@/components/marketing/CTA";

export default function SiteLanding(){
  return (
    <div className="space-y-10">
      <Hero />
      <Proof />
      <OffersGrid />
      <CTA />
    </div>
  );
}
