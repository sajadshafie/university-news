import React, { ReactNode, useState } from "react";
import Loading from "./Loading";
import style from "./style.module.css";
interface appProps {
  children: ReactNode | string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
  loading: boolean;
  style: React.CSSProperties;
  variant: "outlined" | "contained";
  fullWidth: boolean;
  disabled: boolean;
  text: string;
  bold: boolean;
  className: string;
}

const Appbutton: React.FC<Partial<appProps>> = (props) => {
  const [effect, setEffect] = useState<boolean>(false);
  const onPressed = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEffect(true);
    props.onClick && props.onClick(e);
  };
  return (
    <button
      style={props.style}
      onClick={onPressed}
      className={`${props.variant == "outlined" ? "text-main" : "text-white"} ${
        props.variant == "outlined" ? "border-main" : "bg-main"
      } px-2 h-10  rounded ${props.className}  ${effect && "animate-wiggle"}`}
      onAnimationEnd={() => setEffect(false)}
    >
      <span
        style={{ color: "inherit" }}
        className={props.bold ? "font-bold" : "font-normal"}
      >
        <span className="text-md2">{props.children}</span>
      </span>
      {props.loading && <Loading />}
    </button>
  );
};

export default Appbutton;
