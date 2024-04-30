import { SERVICES } from "@/prefs/consts";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="w-full default-container flex flex-col items-center justify-between h-[45vw] py-16 gap-8">
      <h2 className="text-primary heading-two">Our Services</h2>
      <p className="text-primary font-light text-sm text-center px-[22%]">
        SOLID delivers a comprehensive range of construction services, from
        general contracting to infrastructure. We combine proven methods with
        field expertise to tailor solutions for every project.
      </p>
      <div className="w-full h-full grid grid-cols-2 justify-end items-center gap-8">
        {SERVICES.map((service, i) => (
          <div className="w-[full] h-[10vw] relative bg-tranparent" key={i}>
            <div className="absolute h-full w-[90%] bg-variant right-0 rounded-lg shadow-lg shadow-black/50 flex flex-row items-center justify-end px-12 py-6">
              <div className="w-[90%] h-full right-0 flex flex-col items-start justify-center gap-2">
                <h3 className="text-secondary font-bold text-2xl">
                  {service.title}
                </h3>
                <p className="text-primary text-justify font-normal text-sm">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="h-[6vw] bg-secondary aspect-square rounded-lg shadow-lg shadow-black/50 flex flex-col items-center justify-center absolute left-[2vw] top-[2vw]">
              <Image
                src={service.iconSrc}
                alt={service.iconAlt}
                width={128}
                height={128}
                className="w-[60%] object-center object-cover border-2"
              ></Image>
            </div>
            <p className="text-transparent">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
