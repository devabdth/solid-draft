import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[40vw] flex flex-row items-center justify-between">
      <div className="lg:w-[40%] w-full flex flex-col lg:items-start items-center lg:justify-center: justify-start gap-[2vw] ml-[5vw]">
        <h1 className="heading-two text-primary lg:leading-[5vw]">
          <span className="paragraph-one leading-[2vw]">
            Solid Constructions
          </span>
          <br />
          Building Futures, Built <span className="text-secondary">Solid</span>!
        </h1>
        <p className="text-primary paragraph-two">
          Turn your vision into a reality. From dream homes to thriving
          workplaces, we craft exceptional spaces that endure. We combine
          expertise with passion to build structures that are not only beautiful
          but also functional and long-lasting. Let Solid Constructions be your
          partner in building a solid future.
        </p>
        <div className="rounded-full shadow-[0_12px_30px_1px_rgba(0,0,0,0.15)] w-[20vw] h-[4vw] overflow-hidden px-2 flex items-center justify-between flex-row">
          <input
            className="active:border-none focus:border-none active:outline-none focus:outline-none w-[70%] h-full bg-transparent text-primary"
            placeholder="Search in Properties..."
          ></input>
          <div className="bg-secondary aspect-square rounded-full flex flex-row items-center justify-center border-2 h-[75%] border-none">
            <FontAwesomeIcon
              icon={faArrowRight}
              width={16}
              height={16}
              color="var(--bg-color)"
            />
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-[2vw] mt-[2vw]">
          <h2 className="text-center heading-two leading-5">
            4.9
            <br />
            <span className="whitespace-nowrap paragraph-two">
              Total Ratings
            </span>
          </h2>
          <h2 className="text-center heading-two leading-5">
            50+
            <br />
            <span className="whitespace-nowrap paragraph-two">
              Projects Completed
            </span>
          </h2>
          <div className="w-full h-[1px] bg-gray-600/25 roudned-full"></div>
        </div>
      </div>
      <div className="w-[55%] h-full flex-col items-center justify-center overflow-hidden">
        <Image
          src="/hero-house.png"
          alt="3D House Rendereing"
          width={2048}
          height={1024}
          className="w-[100%] h-full scale-[128%] object-cover object-center ml-[10vw] hue-rotate-90"
        ></Image>
      </div>
    </section>
  );
};

export default HeroSection;
