import NukaCarousel from "nuka-carousel";
import React from "react";

interface IProps {
  children?: React.ReactNode;
}

function Carousel({ children, ...rest }: IProps) {
  const carousel = (slides: any) => (
    <NukaCarousel slidesToScroll={1} slidesToShow={slides}>
      {children}
    </NukaCarousel>
  );

  return <div>{carousel(4)}</div>;
}

export default Carousel;
