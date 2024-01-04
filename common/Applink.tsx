import React from "react";
import Link from "next/link";

type LinkTypes = {
  href: string;
  children: string | React.ReactNode;
  title: string;
};

const Applink: React.FC<Partial<LinkTypes>> = (props) => {
  return (
    <Link title={props.title} href={props.href ? props.href : "/"}>
      {props.children}
    </Link>
  );
};

export default Applink;
