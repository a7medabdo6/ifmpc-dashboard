import Slider from "react-slick";
export function Carouselwithfade() {
    const settings = {
      dots: true,
      fade: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
  
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="d-block w-100" src={require("../../../assets/img/media/1.jpg")} alt="media1" />
          </div>
          <div>
            <img className="d-block w-100" src={require("../../../assets/img/media/18.jpg")} alt="media18" />
          </div>
          <div>
            <img className="d-block w-100" src={require("../../../assets/img/media/9.jpg")} alt="media9" />
          </div>
          <div>
            <img className="d-block w-100" src={require("../../../assets/img/media/3.jpg")} alt="media3" />
          </div>
        </Slider>
      </div>
    );
  }