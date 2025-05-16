import Community from "@/components/commmunity";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FeatureSection } from "@/components/ImageFeatureSection";
import Navbar from "@/components/Navbar";
import ProblemSec from "@/components/ProblemSec";
import ToolsSection from "@/components/too-section";
import WorkFlow from "@/components/workflow";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureSection/>
      <ToolsSection/>
      <ProblemSec/>
      <WorkFlow/>
      <Community/>
      <Footer/>
    </div>
  );
}
