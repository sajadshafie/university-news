import React from "react";
import Slider from "react-slick";

type CarouselTypes = {
  settings: object;
  items: React.ReactNode[];
};

const Appcarousel: React.FC<Partial<CarouselTypes>> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {props.items?.map((v: React.ReactNode, i: number) => {
          return (
            <div key={i}>
              <h1>{i}</h1>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Appcarousel;
