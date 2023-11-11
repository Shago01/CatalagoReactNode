import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";

function Carousel({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    style: {
      margin: "0 auto",
    },
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}>
          <Card data={item} />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
