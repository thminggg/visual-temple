import { Button } from "@/components/Button/Button";
import HorizontalIcons from "./HorizontalIcons/HorizontalIcons";
import VerticalIcons from "./VerticalIcons/VerticalIcons";
const BrowseButton = () => <Button className="mt-12 text-2xl" text="Browse" />;

const LandingHero = () => (
  <div
    className={`flex flex-wrap space-between gap-12 items-center h-[100vh] p-12 bg-slate-100`}
  >
    {/* Left side */}
    <div className="lg:flex-1">
      <p className="text-3xl md:text-5xl font-semibold text-accent">
        Visualization
      </p>
      <p className="text-5xl md:text-7xl mt-12 font-semibold">
        Visualize your respects by making a temple
      </p>
      <p className="mt-8 text-xl text-wrap">
        Worship the hard work done by others, showing supports and loves to
        Contributors
      </p>
      <BrowseButton />
    </div>

    {/* Right side */}
    <div className="overflow-hidden lg:flex-1">
      <VerticalIcons className="hidden lg:flex" />
      <HorizontalIcons className="lg:hidden" />
    </div>
  </div>
);

export default LandingHero;
