import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
type DefaultButtonProps = {
  label: string;
  onClick: Function;
  type: "shadow" | "main" | "main-black";
  icon?: IconDefinition;
  iconAlt?: string;
};
const DefaultButton = (props: DefaultButtonProps) => {
  return (
    <button
      className={`${
        props.type === "main-black"
          ? "bg-primary px-12 py-2 text-variant"
          : props.type !== "shadow"
          ? "bg-secondary text-variant w-full py-4"
          : "bg-transparent text-secondary border-2 border-secondary"
      } rounded-full px-4 py-2 font-bold cursor-pointer flex flex-row items-center justify-between gap-12`}
    >
      {props.label}
      {props.icon && (
        <div className="h-full px-2 aspect-square rounded-full bg-variant flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={props.icon!}
            width={24}
            height={24}
            color="#315029"
          ></FontAwesomeIcon>
        </div>
      )}
    </button>
  );
};

export default DefaultButton;
