import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ArtSlideshow.css";

import image1 from "../../Assets/Projects/Slideshow/1.png";
import image2 from "../../Assets/Projects/Slideshow/2.png";
import image3 from "../../Assets/Projects/Slideshow/3.png";
import image4 from "../../Assets/Projects/Slideshow/4.png";
import image5 from "../../Assets/Projects/Slideshow/5.png";
import image6 from "../../Assets/Projects/Slideshow/6.png";
import image7 from "../../Assets/Projects/Slideshow/7.png";
import image8 from "../../Assets/Projects/Slideshow/8.png";
import image9 from "../../Assets/Projects/Slideshow/9.png";
import image10 from "../../Assets/Projects/Slideshow/10.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

function ArtSlideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="art-slideshow">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`3D Art ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ArtSlideshow;
