import { NAV_LINKS } from "@/prefs/consts";
import Image from "next/image";
import Link from "next/link";
import DefaultButton from "./DefaultButton";

const DefaultHeader = () => {
  return (
    <header className="default-container flex flex-row items-center justify-between w-full h-[7vw]">
      <Link
        href="/"
        className="max-w-[30vw] flex flex-row items-center justify-start h-full"
      >
        <Image
          src="/logo-secondary-color.png"
          width={1024}
          height={1024}
          alt="Solid Constructions Logo"
          className="h-[60%] max-w-[5vw] aspect-square object-contain object-center"
        ></Image>
        <h1 className="text-secondary font-black text-[40px] leading-4 mt-2">
          Solid
          <br />
          <span className="text-sm leading-4">Constructions</span>
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-4">
          {NAV_LINKS.map((tab, i) => (
            <Link
              href={tab.href}
              key={i}
              className={`${
                tab.label == "Home"
                  ? "text-accent font-bold"
                  : "text-primary opacity-70 paragraph-one hover:font-bold hover:opacity-100 transition-all"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </ul>
      </nav>
      <DefaultButton
        type="shadow"
        onClick={() => {
          console.log("Header Button Clicked!");
        }}
        label="Book Meating"
      />
    </header>
  );
};

export default DefaultHeader;
