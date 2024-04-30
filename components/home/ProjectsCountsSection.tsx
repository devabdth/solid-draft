import { PROJECTS_COUNTS } from "@/prefs/consts";
import Image from "next/image";
const ProjectsCountsSection = () => {
  return (
    <section className="w-full h-[65vw] flex flex-col items-center justify-between gap-8 bg-variant py-12">
      <h2 className="text-6xl text-primary font-extrabold px-72 text-center">
        Good Things Happen to
        <br />
        <span className="text-secondary text-[3.25rem]">
          Those Who Are Interseted!
        </span>
      </h2>
      <p className="px-[25%] font-normal text-primary text-md text-center">
        See Solid's Success Stories! Explore our extensive portfolio showcasing
        the impressive variety and exceptional quality of our completed
        projects.
      </p>
      <div className="w-full min-h-[35vw] flex flex-row items-center justify-between gap-16">
        <div className="w-full rounded-r-lg h-full overflow-hidden">
          <Image
            src="/project-one.jpg"
            alt="Project One"
            width={1920}
            height={1080}
            className="flex w-full h-full object-cover object-center"
          ></Image>
        </div>
        <div className="w-full rounded-l-lg h-full overflow-hidden">
          <Image
            src="/project-two.jpg"
            alt="Project Two"
            width={1920}
            height={1080}
            className="flex w-full h-full object-cover object-center"
          ></Image>
        </div>
      </div>
      <div className="w-full default-container flex flex-row items-center justify-between h-full">
        {PROJECTS_COUNTS.map((projectCount, i) => (
          <div className="flex flex-col items-center justify-between gap-2 h-[7vw]" key={i}>
            <h4 className="text-6xl font-black text-secondary">{projectCount.count}</h4>
            <p className="text-md font-semibold text-primary px-16 text-center">{projectCount.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCountsSection;
