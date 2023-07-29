import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopCarousel = ({ clothes }) => {
  let i = 0;
  return (
    <div className="carousel-container">
      <Carousel infiniteLoop showStatus={false} showThumbs={false}>
        {clothes.map(
          (clothing, index) =>
            clothing.type === "top" && (
              <div key={index}>
                <img
                  key={i++}
                  src={clothing.photo}
                  alt={clothing.type}
                  style={{ width: "300px" }}
                />
              </div>
            )
        )}
      </Carousel>
    </div>
  );
};

const BottomCarousel = ({ clothes }) => {
  let i = 0;
  return (
    <div className="carousel-container">
      <Carousel infiniteLoop showStatus={true} showThumbs={false}>
        {clothes.map(
          (clothing, index) =>
            clothing.type === "bottom" &&
            (console.log(clothing),
            (
              <div key={i++}>
                <img
                  key={i++}
                  src={clothing.photo}
                  alt={clothing.type}
                  style={{ width: "300px" }}
                />
              </div>
            ))
        )}
      </Carousel>
    </div>
  );
};

const ShoesCarousel = ({ clothes }) => {
  let i = 0;
  return (
    <div className="carousel-container">
      <Carousel infiniteLoop showStatus={false} showThumbs={false}>
        {clothes.map(
          (clothing, index) =>
            clothing.type === "shoes" && (
              <div key={index}>
                <img
                  key={i++}
                  src={clothing.photo}
                  alt={clothing.type}
                  style={{ width: "300px" }}
                />
              </div>
            )
        )}
      </Carousel>
    </div>
  );
};

const AccessoriesCarousel = ({ clothes }) => {
  let i = 0;
  return (
    <div className="carousel-container">
      <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
        {clothes.map(
          (clothing, index) =>
            clothing.type === "accessories" && (
              <div key={index}>
                <img
                  key={i++}
                  src={clothing.photo}
                  alt={clothing.type}
                  style={{ width: "300px" }}
                />
              </div>
            )
        )}
      </Carousel>
    </div>
  );
};

const CombinePage = ({ clothes }) => {
  return (
    <div>
      <TopCarousel clothes={clothes} />
      <BottomCarousel clothes={clothes} />
      <ShoesCarousel clothes={clothes} />
      <AccessoriesCarousel clothes={clothes} />
    </div>
  );
};

export default CombinePage;
