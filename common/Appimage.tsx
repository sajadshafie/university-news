import React from "react";
import Image from "next/image";

type Appprops = {
  src: string;
  width: number;
  height: number;
  fill: boolean;
  alt: string;
};

const Appimage: React.FC<Partial<Appprops>> = (props) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={props.src ? props.src : "/"}
        alt={props.alt ? props.alt : "/"}
        fill={props.fill}
      />
    </div>
  );
};

export default Appimage;
