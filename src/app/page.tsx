import { Button } from "@/components/Button/Button";
import styles from "./app.module.scss";

const StartButton = () => (
  <Button className="w-fit mt-8 text-2xl" text="Get Started" />
);

const Slogan = () => (
  <div
    className={`flex flex-wrap space-between items-center h-[100vh] ${styles.hero}`}
  >
    <div className="flex-1 md:pl-12">
      <p className="text-5xl md:text-7xl font-semibold text-main">Celebrate</p>
      <p className="text-5xl md:text-7xl font-semibold">the Art You Cherish</p>
      <p className="mt-4 text-xl text-wrap">
        Welcome to a space where we honour and uplift anything. Join a community
        of like-minded enthusiasts
      </p>
      <StartButton />
    </div>
    {/* Placeholder to keep the slogan on the left */}
    <div className="md:flex-1"></div>
  </div>
);

export default function Home() {
  return <Slogan />;
}
