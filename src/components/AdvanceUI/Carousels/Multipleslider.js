import Slider from "react-slick";
import { Link } from "react-router-dom";
function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
  
          height: "20px",
          fontSize: "1.3rem",
          borderRadius: "50%",
          width: "3rem",
          // height: "3rem",
          textAlign: "center",
          background: "rgb(255 255 255)",
          border: "1px solid #e8ebf3 !important",
          zIndex: "99",
          boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgb(255 255 255)",
          height: "20px",
          fontSize: "1.3rem",
          borderRadius: "50%",
          width: "3rem",
          // height: "3rem",
          textAlign: "center",
  
          border: "1px solid #e8ebf3 !important",
          zIndex: "99",
          boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
        }}
        onClick={onClick}
      />
    );
  }
  export function Multipleslider() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // rtl: true,
  
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow2 />,
      prevArrow: <SamplePrevArrow2 />,
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
          <div className="item  pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/1.jpg")} alt="media1" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/2.jpg")} alt="media2" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/3.jpg")} alt="media3" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/4.jpg")} alt="media4" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/5.jpg")} alt="media5" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/6.jpg")} alt="media6" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/7.jpg")} alt="media7" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank ">
              <img src={require("../../../assets/img/media/8.jpg")} alt="media8" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/9.jpg")} alt="media9" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/10.jpg")} alt="media10" />
            </Link>
          </div>
          <div className="item pe-3">
            <Link to="#" target="_blank">
              <img src={require("../../../assets/img/media/11.jpg")} alt="media11" />
            </Link>
          </div>
        </Slider>
      </div>
    );
  }