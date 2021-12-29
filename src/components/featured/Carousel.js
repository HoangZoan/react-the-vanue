import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  const slides = [slide_one, slide_two, slide_three];

  return (
    <div className="carousel_wrapper" style={{ height: window.innerHeight }}>
      <Slider {...settings}>
        {slides.map((item) => (
          <div key={item}>
            <div
              className="carousel_image"
              style={{
                backgroundImage: `url(${item})`,
                height: window.innerHeight,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
