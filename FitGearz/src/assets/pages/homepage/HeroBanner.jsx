import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroBanner() {
  const settings = {
    dots: true, // bottom dots show agum
    infinite: true, // loop ah run aagum
    speed: 500, // animation speed
    slidesToShow: 1, // oru slide mattum time la
    slidesToScroll: 1,
    autoplay: true, // auto scroll agum
    autoplaySpeed: 3000, // 3 sec ku oru slide
  };

  return (
    <div className="hero-banner-wrapper">
      <Slider {...settings}>
        <div>
          <img src="/ads/gym.jpeg" alt="Banner 1" className="banner-img" />
        </div>
        <div>
          <img src="/ads/sport.jpeg" alt="Banner 2" className="banner-img" />
        </div>
      </Slider>
      
    </div>
  );
}

export default HeroBanner;
