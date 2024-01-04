import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

export type ItemTypes = {
  title: string;
  children: string[];
  id: number;
};

export const Items: ItemTypes[] = [
  {
    id: 1,
    title: "راه های ارتباطی",
    children: [
      "تلفن پشتیبانی :021-3365789",
      "آدرس : شهرک غرب بلوار دادمان نبش کوچه درختی پلاک 109 طبقه 5",
      "ایمیل :info@abzarly.com",
    ],
  },
  {
    id: 2,
    title: "درباره ما ",
    children: ["بلاگ", "قوانین و مقررات", "روش های ارسال", "تست 1", "تست 12"],
  },
  {
    id: 3,
    title: "خدمات مشتریان و کاربران",
    children: [
      "شرایط مرجوعی کالا",
      "همکاری با شرکت",
      "فرصت های شغلی",
      "شرایط خرید",
      "شرایط تخفیف",
    ],
  },
];

export const Icons: React.ReactNode[] = [
  <AiFillInstagram size={35} className={"duration-100 hover:text-red"} />,
  <BsTelegram size={31} className={"duration-100 hover:text-blue-400"} />,
  <IoLogoWhatsapp size={31} className={"duration-100 hover:text-main"} />,
  <AiFillLinkedin size={31} className={"duration-100 hover:text-blue-600"} />,
];
