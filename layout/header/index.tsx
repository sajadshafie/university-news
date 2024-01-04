import Appbutton from "@/common/Appbutton";
import Appimage from "@/common/Appimage";
import Appinput from "@/common/Appinput";
import Tooltip from "@/untils/tooltip";
import React from "react";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";

type headerTypes = {
  onSearch: () => void;
};

const Header: React.FC<Partial<headerTypes>> = (props) => {
  return (
    <div className="px-10 py-5 flex mt-4 justify-between">
      <div className="flex xs:w-6/12 items-center">
        <div style={{ height: "50px", width: "50px" }} className="ml-6">
          <Appimage fill src="/images/logos.png" />
        </div>
        <div className="xs:w-10/12">
          <Appinput placeholder="جستجوی محصول" onClickSearch={props.onSearch} />
        </div>
      </div>
      <div className="flex justify-end xs:w-4/12 items-center">
        <Appbutton>{"ورود | ثبت نام"}</Appbutton>
        <Tooltip
          content={
            <p className="text-white text-sm text-center">لیست علاقه مندی</p>
          }
        >
          <AiOutlineHeart
            size={26}
            className="text-secondary mx-6 cursor-pointer"
          />
        </Tooltip>

        <AiOutlineShopping
          size={26}
          className="text-secondary cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
