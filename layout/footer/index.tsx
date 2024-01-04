import React from "react";
import { Items, Icons, ItemTypes } from "./items";
import Appbutton from "@/common/Appbutton";
import Appinput from "@/common/Appinput";

const Footer: React.FC = () => {
  return (
    <div className="bg-light px-6 py-10">
      <div className="flex justify-between ">
        {Items.map((v: ItemTypes, i: number) => {
          return (
            <div key={i}>
              <h3 className="mb-4 font-bold text-text">{v.title}</h3>
              {v.children.map((child: string, index: number) => {
                return (
                  <p
                    className={`text-md2 text-secondary p-2 ${
                      v.id == 1
                        ? ""
                        : "cursor-pointer duration-100 hover:text-text hover:font-bold  rounded"
                    }`}
                    key={index}
                  >
                    {child}
                  </p>
                );
              })}
            </div>
          );
        })}
        <div>
          <h3 className="mb-4 text-text font-bold">
            ما را در شبکه های اجتماعی دنبال کنید
          </h3>
          <div className="flex justify-between items-center mb-3">
            {Icons.map((v: React.ReactNode, i: number) => {
              return (
                <p key={i} className="text-md2 text-secondary p-2">
                  {v}
                </p>
              );
            })}
          </div>
          <p className="text-md2 mb-2">
            {"ایمیل خود را وارد کنید تا از اخبار ابزارلی مطلع شوید"}
          </p>
          <div className="flex justify-between">
            <div className="w-9/12">
              <Appinput placeholder={"ایمیل خود را وارد کنید"} />
            </div>
            <Appbutton>ارسال</Appbutton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
