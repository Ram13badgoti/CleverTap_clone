import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} controls={false} onSelect={handleSelect}>
      <Carousel.Item>
        <div
          className="slick-slide slick-cloned"
          aria-hidden="true"
          tabIndex="-1"
          style={{ width: "127px" }}
        >
          <div>
            <img
              alt="lenskart Internet"
              className=" lazyloading"
              src="https://d35fo82fjcw0y8.cloudfront.net/2022/08/25055607/Lenskart_black_logo%402x1.png"
              style={{ width: "100%", display: "inline-block", opacity: "1" }}
            ></img>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          aria-hidden="true"
          tabIndex="-1"
          style={{ width: "127px" }}
        >
          <div>
            <img
              alt="Kotak-Mahindra"
              className=" lazyloading"
              src="https://d35fo82fjcw0y8.cloudfront.net/2022/08/25053301/Kotak-Mahindra-Bank_black_logo%402x.png"
              style={{ width: "100%", display: "inline-block", opacity: "1" }}
            ></img>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          aria-hidden="true"
          tabIndex="-1"
          style={{ width: "127px" }}
        >
          <div>
            <img
              alt="Domino's"
              className=" lazyloading"
              src="https://d35fo82fjcw0y8.cloudfront.net/2022/08/25053205/Dominos_black_logo%402x.png"
              style={{ width: "100%", display: "inline-block", opacity: "1" }}
            ></img>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          aria-hidden="true"
          tabIndex="-1"
          style={{ width: "127px" }}
        >
          <div>
            <img
              alt="Pharmeasy"
              className=" lazyloading"
              src="https://d35fo82fjcw0y8.cloudfront.net/2022/08/25055644/Pharmeasy_black_logo%402x.png"
              style={{ width: "100%", display: "inline-block", opacity: "1" }}
            ></img>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="slick-slide slick-cloned"
          aria-hidden="true"
          tabIndex="-1"
          style={{ width: "127px" }}
        >
          <div>
            <img
              alt="Swiggy"
              className=" lazyloaded"
              src="https://d35fo82fjcw0y8.cloudfront.net/2022/08/25055716/Swiggy_black_logo%402x.png"
              style={{ width: "100%", display: "inline-block", opacity: "1" }}
            ></img>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          aria-hidden="true"
          tabIndex="-1"
          style={{ width: "127px" }}
        >
          <div>
            <img
              alt="Dream11"
              className=" lazyloaded"
              src="https://d35fo82fjcw0y8.cloudfront.net/2022/08/25055509/Dream11_black_logo%402x1.png"
              style={{ width: "100%", display: "inline-block", opacity: "1" }}
            />
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          aria-hidden="true"
          tabIndex="-1"
          style={{ width: "127px" }}
        >
          <div>
            <img
              alt="Blinkit"
              className=" lazyloaded"
              src="https://d35fo82fjcw0y8.cloudfront.net/2022/08/25053124/Blinkit_black_logo%402x.png"
              style={{ width: "100%", display: "inline-block", opacity: "1" }}
            ></img>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          aria-hidden="true"
          tabIndex="-1"
          style={{ width: "127px" }}
        >
          <div>
            <img
              alt="SonyLiv"
              className=" lazyloaded"
              src="https://d35fo82fjcw0y8.cloudfront.net/2022/08/25055708/SonyLIV_black_logo%402x.png"
              style={{ width: "100%", display: "inline-block", opacity: "1" }}
            ></img>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
