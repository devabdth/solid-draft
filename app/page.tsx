import Image from "next/image";
import {
  TestmonialsSection,
  ServicesSection,
  ProjectsCountsSection,
  HeroSection,
  FeaturedPropertiesSection,
  ClientsSection,
  CallToActionSection,
  HowItWorksSection,
} from "@/components/home/";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <ProjectsCountsSection />
      <HowItWorksSection />
      <FeaturedPropertiesSection />
      <TestmonialsSection />
      <CallToActionSection />
    </main>
  );
}
