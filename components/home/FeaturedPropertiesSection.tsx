import { PROJECTS } from "@/prefs/consts";
import Image from "next/image";
import React from "react";
import { DefaultButton } from "../globals";

const FeaturedPropertiesSection = () => {
  return (
    <section className="w-full default-container flex flex-col items-center justify-center h-[50vw] gap-2 bg-variant">
      <h2 className="text-6xl font-extrabold text-primary">
        Featured Projects
      </h2>
      <p className="px-[28%] font-normal text-primary/75 text-center">
        Explore our finest work! Discover diverse projects showcasing Solid's
        expertise in design, quality, and exceeding expectations.
      </p>
      <div className="w-full flex flex-row items-center justify-between h-[35vw] gap-4 mt-[2vw]">
        <div className="w-[40vw] h-full flex relative rounded-2xl overflow-hidden">
          <Image
            src={PROJECTS[0].image}
            alt={PROJECTS[0].imageAlt}
            width={1920}
            height={1080}
            className="w-full h-full absolute top-0 object-cover object-center"
          ></Image>
          <div className="w-full h-full absolute bg-primary/25"></div>
          <div className="w-[90%] absolute bottom-[24px] left-[5%] rounded-2xl bg-primary flex flex-col items-start justify-center px-4 py-2 gap-6">
            <h3 className="text-variant text-4xl font-extrabold">
              {PROJECTS[0].title}
            </h3>
            <p className="text-normal text-sm font-light text-variant/75">
              {PROJECTS[0].description.length > 120
                ? `${PROJECTS[0].description.substring(0, 120)}...`
                : PROJECTS[0].description}
            </p>

            <div className="w-full flex items-center justify-start flex-row">
              <div className="w-full flex flex-row items-center justify-start gap-2">
                <Image
                  src="/space.svg"
                  alt="Project Space"
                  width={32}
                  height={32}
                  className="w-[24px] h-[24px] object-contain object-center"
                ></Image>
                <p className="text-md font-normal text-variant/80">
                  {PROJECTS[0].space}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-center gap-2">
                <Image
                  src="/star.svg"
                  alt="Project Rating"
                  width={32}
                  height={32}
                  className="w-[24px] h-[24px] object-contain object-center"
                ></Image>
                <p className="text-md font-normal text-variant/80">
                  {PROJECTS[0].rate}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-center gap-2">
                <Image
                  src="/location.svg"
                  alt="Project Location"
                  width={32}
                  height={32}
                  className="w-[24px] h-[24px] object-contain object-center"
                ></Image>
                <p className="text-md font-normal text-variant/80">
                  {PROJECTS[0].location}
                </p>
              </div>
            </div>
            <DefaultButton type="main" onClick={() => {}} label="Explore" />
          </div>
          <div
            className={`top-[1vw] right-[1vw] w-[48px] h-[48px]  rounded-full absolute flex flex-col items-center justify-center bg-secondary`}
          >
            <Image
              src="/love-filled.svg"
              alt="Favourite Icon"
              width={32}
              height={32}
              className="object-center object-contain"
            ></Image>
          </div>
        </div>
        <div>
          <div className="w-[50vw] h-full grid grid-cols-2 gap-2 items-center justify-end">
            {PROJECTS.slice(1).map((project, i) => (
              <div className="w-full h-[17.3vw] flex relative rounded-2xl overflow-hidden" key={i}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1920}
                  height={1080}
                  className="w-full h-full absolute top-0 object-cover object-center"
                ></Image>
                <div className="w-full h-full absolute bg-primary/25"></div>
                <div className="w-full h-[40%] absolute bottom-0 bg-gradient-to-t from-primary/50 to-primary/0 flex flex-col items-start justify-center px-4 py-2"></div>
                <div className="w-full h-[40%] absolute bottom-0 bg-gradient-to-t from-secondary to-secondary/0 flex flex-col items-start justify-center px-4 py-2">
                  <h3 className="text-variant text-2xl font-extrabold">
                    {project.title}
                  </h3>
                  <p className="text-normal text-sm font-light text-variant/75">
                    {project.description.length > 40
                      ? `${project.description.substring(0, 40)}...`
                      : project.description}
                  </p>
                  <div className="w-full flex items-center justify-start flex-row mt-[0.5vw]">
                    <div className="w-full flex flex-row items-center justify-start gap-2">
                      <Image
                        src="/space.svg"
                        alt="Project Space"
                        width={32}
                        height={32}
                        className="w-[16px] h-[16px] object-contain object-center"
                      ></Image>
                      <p className="text-[12px] font-normal text-variant/80">
                        {project.space}
                      </p>
                    </div>
                    <div className="w-full flex flex-row items-center justify-center gap-2">
                      <Image
                        src="/star.svg"
                        alt="Project Rating"
                        width={32}
                        height={32}
                        className="w-[16px] h-[16px] object-contain object-center"
                      ></Image>
                      <p className="text-[12px] font-normal text-variant/80">
                        {project.rate}
                      </p>
                    </div>
                    <div className="w-full flex flex-row items-center justify-center gap-2">
                      <Image
                        src="/location.svg"
                        alt="Project Location"
                        width={32}
                        height={32}
                        className="w-[16px] h-[16px] object-contain object-center"
                      ></Image>
                      <p className="text-[12px] font-normal text-variant/80">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`top-[1vw] right-[1vw] w-[48px] h-[48px]  rounded-full absolute flex flex-col items-center justify-center ${
                    i === 0 || i === 3 ? "bg-variant" : "bg-secondary"
                  }`}
                >
                  <Image
                    src={i === 0 || i === 3 ? "/love.svg" : "/love-filled.svg"}
                    alt="Favourite Icon"
                    width={32}
                    height={32}
                    className="object-center object-contain"
                  ></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
