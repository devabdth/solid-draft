import React from "react";
import { DefaultButton } from "../globals";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CallToActionSection = () => {
  return (
    <section className="w-full h-[30vw] default-container flex flex-col items-center justify-center gap-4 bg-secondary">
      <h2 className="text-variant font-extrabold text-6xl text-center leading-[4vw]">
        <span className="text-[3.5rem]">What are You Waiting for,</span>
        <br /> Trust Everything to Us!
      </h2>
      <DefaultButton label="Get Started" type="main-black" onClick={() => {}} icon={faArrowRight} />
    </section>
  );
};

export default CallToActionSection;
