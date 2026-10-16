import Hero from "@/components/home/Hero";
import {
  CallToAction,
  Compliance,
  Differentiators,
  HowItWorks,
  Industries,
  Integrations,
  PlatformGrid,
  Problem,
} from "@/components/home/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <PlatformGrid />
      <Differentiators />
      <Industries />
      <HowItWorks />
      <Integrations />
      <Compliance />
      <CallToAction />
    </>
  );
}
