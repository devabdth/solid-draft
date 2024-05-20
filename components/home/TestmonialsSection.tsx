import Image from "next/image";
const TestmonialsSection = () => {
  return (
    <section className="w-full h-[448px] relative">
      <Image
        src="/testmonials-background.jpg"
        alt="What Our Cliens Say"
        width={1920}
        height={1080}
        className="w-full h-full absolute object-cover object-center top-0"
      ></Image>
      <div className="w-full h-full absolute object-cover object-center top-0 bg-secondary/50 bg-blend-darken"></div>
      <div className="w-full h-full absolute object-cover object-center top-0 bg-primary/25"></div>
      <div className="w-[60%] h-[80%] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] absolute flex flex-col items-center justify-between py-24">
        <h2 className="text-5xl text-variant font-extrabold">
          What Our Clients Say
        </h2>
        <p className="text-md text-variant font-semibold text-justify text-last-center w-[85%]">
          Solid Constructions was fantastic to work with on our new office
          build-out. They were professional, responsive, and always kept us
          informed throughout the process. The final result exceeded our
          expectations – the space is not only beautiful but also highly
          functional for our team. We highly recommend Solid Constructions for
          any construction project.
        </p>
        <div className="w-[30%] flex flex-row items-center justify-center">
          <Image
            src="/love-filled.svg"
            width={16}
            height={16}
            alt="Favourite Filled Icon"
          ></Image>
          <Image
            src="/love-filled.svg"
            width={16}
            height={16}
            alt="Favourite Filled Icon"
          ></Image>
          <Image
            src="/love-filled.svg"
            width={16}
            height={16}
            alt="Favourite Filled Icon"
          ></Image>
          <Image
            src="/love-filled.svg"
            width={16}
            height={16}
            alt="Favourite Filled Icon"
          ></Image>
          <Image
            src="/love-filled.svg"
            width={16}
            height={16}
            alt="Favourite Filled Icon"
          ></Image>
        </div>
        <p className="font-normal text-md text-variant/75">
          9.9 / 10
        </p>
        <div className="w-[30%] h-[1px] rounded-full bg-variant"></div>
        <p className="font-semibold text-md text-variant">Abdullah T. Adam</p>
        <p className="font-normal text-md text-variant/75">
          @treguru
        </p>
      </div>
    </section>
  );
};

export default TestmonialsSection;
