import LandingHero from "@/components/LandingHero/LandingHero";
import LandingIntro from "@/components/LandingIntro/LandingIntro";
import Separator from "@/components/Separator/Separator";

export default function Home() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <LandingHero />
      <Separator />
      <LandingIntro />
    </div>
  );
}
