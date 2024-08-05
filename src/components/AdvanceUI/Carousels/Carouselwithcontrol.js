import Slider from "react-slick";
export function Carouselwithcontrol() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div>
        <Slider {...settings}>
          <div className="item">
            <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/11.jpg")} />
          </div>
          <div className="item">
            <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/8.jpg")} />
          </div>
          <div className="item">
            <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/6.jpg")} />
          </div>
        </Slider>
      </div>
    );
  }