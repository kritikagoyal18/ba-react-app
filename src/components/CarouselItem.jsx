import React from "react";
import Title from "./base/Title";
import Text from "./base/Text";
import ContentFragment from "./base/ContentFragment";
import "./CarouselItem.scss";

const { REACT_APP_HOST_URI } = process.env;


const CarouselItem = ({ cf, navigate }) => {
  const image = REACT_APP_HOST_URI + cf?.backgroundImage?._path;
  const title = cf?.title;
  const subtitle = cf?.subtitle;
  const price = cf?.price;
  const cta = cf?.cta;
  const ctalink = cf?.ctaLink;

  return (
    <ContentFragment
      cf={cf}
      className="carousel-item"
    >         
      <div
  className="carousel-caption"
  style={{ backgroundImage: `url(${image})` }}>
        <Title heading="h5" prop="title" className="color-light">
          {title}
        </Title>
        <Text
          content={subtitle}
          prop="description"
          className="font-size-large"
        />
        <p>{price}</p>
        <p>{cta}</p>
        <p>{ctalink}</p>
      </div>
    </ContentFragment>
  );
};

export default CarouselItem;
