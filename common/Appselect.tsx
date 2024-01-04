import React from "react";
import Select from "react-select";

type SelectTypes = {
  options: any;
  onChange: (e: any) => void;
  value: string;
  placeholder: string;
};

const Appselect: React.FC<Partial<SelectTypes>> = (props) => {
  return (
    <Select
      className="text-sm h-10 w-full h-10"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      options={props.options}
    />
  );
};

export default Appselect;
