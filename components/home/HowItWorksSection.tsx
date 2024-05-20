import { HOW_IT_WORKS_SNIPPETS } from "@/prefs/consts";
import React from "react";
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <section className="w-full default-container h-[480px] flex flex-col items-center justify-between py-12 gap-4">
      <h2 className="text-5xl font-extrabold text-primary">How it Works?</h2>
      <p className="px-[25%] text-md font-normal text-primary text-center">
        Your vision, our expertise. Explore our streamlined process, from
        initial consultation to project completion. We guide you every step of
        the way.
      </p>
      <div className="w-full h-full flex flex-row items-center justify-between gap-8">
        {HOW_IT_WORKS_SNIPPETS.map((snippet, i) => (
          <div key={i} className="w-[25vw] relative h-full">
            <div className="w-[24vw] h-[192px] rounded-xl bg-variant absolute bottom-0 left-[50%] -translate-x-[50%] flex flex-col items-center justify-center gap-2 px-8">
              <div className="w-full h-[30%]"></div>
              <h3 className="font-extrabold text-3xl text-secondary">{snippet.title}</h3>
              <p className="font-normal text-sm text-primary/50 text-center px-2">{snippet.description}</p>
            </div>
            <div className="w-[6vw] h-[6vw] aspect-square rounded-xl bg-variant left-[50%] absolute -translate-x-[50%] shadow-xl shadow-black/50 flex flex-row items-center justify-center">
              <Image
                src={snippet.iconSrc}
                alt={snippet.iconAlt}
                width={1024}
                height={1024}
                className="w-[70%] object-contain object-center"
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
