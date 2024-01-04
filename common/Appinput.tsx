import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type InputProps = {
  type: string;
  value: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onClickSearch: () => void;
};

const Appinput: React.FC<Partial<InputProps>> = (props) => {
  return (
    <div className="relative">
      {props.onClickSearch && (
        <div className="absolute left-0 top-0 w-10 h-full flex justify-center items-center">
          <AiOutlineSearch
            size={26}
            className="text-secondary cursor-pointer"
          />
        </div>
      )}
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        className="w-full h-10 rounded border-gray border outline-none p-2 text-text hover:border-main hover:duration-100 focus:border-2 fucos:duration-100 focus:border-main_dark  text-md2"
      />
    </div>
  );
};

export default Appinput;
