import React from "react";
import style from "./style.module.css";

import { AiFillCaretUp } from "react-icons/ai";
type TooltipTypes = {
  children: React.ReactNode;
  content: React.ReactNode | string;
};

const Tooltip: React.FC<Partial<TooltipTypes>> = (props) => {
  return (
    <div className={style.container}>
      {props.children}
      <div
        className={`${style.popover} p-2 rounded bg-gray400 flex justify-center`}
      >
        {props.content}
        <div className={style.icon_arrow}>
          <AiFillCaretUp className={`text-gray400`} size={16} />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
