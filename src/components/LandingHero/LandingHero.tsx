import { Button } from "@/components/Button/Button";
import styles from "./LandingHero.module.scss";

const StartButton = () => (
  <Button className="mt-8 text-2xl" text="Get Started" />
);

const LandingHero = () => (
  <div className={`flex flex-wrap items-center h-[100vh] p-12 ${styles.hero}`}>
    {/* Left side */}
    <div className="lg:flex-1">
      <p className="text-5xl md:text-7xl font-semibold text-accent">
        Celebrate
      </p>
      <p className="text-5xl md:text-7xl font-semibold">the Art You Cherish</p>
      <p className="mt-8 text-xl text-wrap">
        Welcome to a space where we honour and uplift anything.
        <br />
        Join a community of like-minded enthusiasts
      </p>
      <StartButton />
    </div>

    {/* Right side */}
    <div className="lg:flex-1"></div>
  </div>
);

export default LandingHero;
