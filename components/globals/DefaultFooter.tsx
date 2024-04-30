import { FOOTER_LINKS, SOCIALS } from "@/prefs/consts";
import {
  faAddressBook,
  faAddressCard,
  faEnvelope,
  faLocation,
  faLocationDot,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
const DefaultFooter = () => {
  return (
    <footer className="bg-primary w-full default-container h-[20vw] lg:flex hidden flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-between w-full h-full gap-16 px-4 py-6">
        <div className="flex min-w-[30vw] h-full items-start justify-center flex-col px-2 py-2 gap-2">
          <Link
            href="/"
            className="max-w-[30vw] flex flex-row items-center justify-start h-full"
          >
            <Image
              src="/logo-accent-color.png"
              width={1024}
              height={1024}
              alt="Solid Constructions Logo"
              className="h-[60%] max-w-[5vw] aspect-square object-contain object-center"
            ></Image>
            <p className="text-beige font-black text-[40px] leading-4 mt-2">
              Solid
              <br />
              <span className="text-sm leading-4">Constructions</span>
            </p>
          </Link>
          <p className="text-beige/75 font-normal text-sm text-justify">
            Solid builds exceptional spaces. We combine expertise with passion
            to craft structures that endure. From dream homes to thriving
            businesses, trust Solid for quality you can rely on.
          </p>
          <div className="w-full items-center justify-start gap-2 flex flex-row">
            {SOCIALS.links.map((social, i) => (
              <div key={i} className="p-2 bg-variant rounded-full">
                <FontAwesomeIcon
                  icon={social}
                  width={16}
                  height={16}
                  color="#315029"
                />
              </div>
            ))}
          </div>
        </div>
        {FOOTER_LINKS.map((column, i) => (
          <div
            className="w-full h-full flex items-start justify-start flex-col gap-3"
            key={i}
          >
            <label className="text-lg font-bold text-variant">
              {column.title}
            </label>
            {column.links.map((link, i) => (
              <Link
                href={link}
                key={i}
                className="capitalize transition-all text-transparent/50 hover:text-transparent px-4"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
        <div className="min-w-[20vw] h-full flex items-start justify-start flex-col gap-6">
          <label className="text-lg font-bold text-variant">
            Contact Information
          </label>
          <div className="flex flex-row items-center justify-start gap-4 px-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              width={16}
              height={16}
              color="#F8F3E5"
            />
            <p className="text-start text-sm text-beige font-semibold">
              Pyramids Heights Giza, Giza Governorate, Egypt 11211
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 px-4">
            <FontAwesomeIcon
              icon={faPhone}
              width={16}
              height={16}
              color="#F8F3E5"
            />
            <p className="text-start text-sm text-beige font-semibold">
              +2 02 353620383
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 px-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              width={16}
              height={16}
              color="#F8F3E5"
            />
            <p className="text-start text-sm text-beige font-semibold">
              info@solidegypt.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-2 flex flex-row items-center justify-center">
        <p className="text-center text-variant/50 text-md font-normal">
          All Copyrights Rerserved © TreGuru EG, 2024.
        </p>
      </div>
    </footer>
  );
};

export default DefaultFooter;
