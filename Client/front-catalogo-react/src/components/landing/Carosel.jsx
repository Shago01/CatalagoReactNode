import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";

function Carousel({ data, cont, ClassName }) {
  const cantidad = cont >= 4 ? 4 : cont;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: cantidad,
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
    <div style={{ margin: "0 auto" }}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <Card data={item} className={ClassName} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
