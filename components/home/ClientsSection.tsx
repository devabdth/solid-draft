import { CLIENTS } from "@/prefs/consts";
import Image from "next/image";
const ClientsSection = () => {
  return (
    <section className="w-full h-[288px] bg-primary flex flex-col items-center justify-between py-14">
      <h2 className="text-transparent font-bold text-2xl">
        Our Trusted Partners
      </h2>
      <div className="border-green-500 w-full flex flex-row h-[160px] overflow-hidden gap-4 items-center justify-between default-container">
        {CLIENTS.map((client, i) => (
          <div
            className="flex flex-col items-center justify-center gap-2"
            key={i}
          >
            <Image
              src={client.logoSrc}
              width={1024}
              height={1024}
              alt="TreGuru Logo"
              className="h-[96px] object-contain object-center aspect-square opacity-50 grayscale"
            ></Image>
            <p className="text-transparent paragraph-two">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
