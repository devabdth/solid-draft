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
  <>
    <main className="hidden xl:block">
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <ProjectsCountsSection />
      <HowItWorksSection />
      <FeaturedPropertiesSection />
      <TestmonialsSection />
      <CallToActionSection />
    </main>

    <main className="block xl:hidden">
        <div className="w-full h-[100vh] flex-col flex items-center justify-center gap-4">
         <Image
            className="w-[50%] h-[50vw] max-w-[450px] max-h-[450px] object-contain object-center"
            alt="Computer" src="/computer.png"
            width={750} height={750}
         ></Image>
        <p className="font-secondary text-[3vw]">For a better experience, Please use your desktop!</p>

        </div>
    </main>
    </>
  );
}
