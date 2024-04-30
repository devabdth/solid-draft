import { NAV_LINKS } from "@/prefs/consts";
import Image from "next/image";
import Link from "next/link";
import DefaultButton from "./DefaultButton";

const DefaultHeader = () => {
  return (
    <header className="default-container flex flex-row items-center justify-between w-full lg:h-[7vw] h-[10vh]">
      <Link
        href="/"
        className="w-[128px] flex flex-row items-center justify-start h-full"
      >
        <Image
          src="/logo-secondary-color.png"
          width={1024}
          height={1024}
          alt="Solid Constructions Logo"
          className="h-[60%] lg:max-w-[5vw] min-w-[32px] aspect-square object-contain object-center"
        ></Image>
        <h1 className="text-secondary font-black lg:text-[40px] text-[24px] leading-4 mt-2">
          Solid
          <br />
          <span className="text-sm leading-4">Constructions</span>
        </h1>
      </Link>
      <nav className="hidden lg:flex">
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
      <div className="hidden lg:flex">
      <DefaultButton
        type="shadow"
        onClick={() => {
          console.log("Header Button Clicked!");
        }}
        label="Book Meating"
      />
      </div>
    </header>
  );
};

export default DefaultHeader;
