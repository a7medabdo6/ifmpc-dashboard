import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Carouselwithindicator() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // rtl:true,
  
  
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
            <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/12.jpg")} />
          </div>
          <div className="item">
            <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/15.jpg")} />
          </div>
          <div className="item">
            <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/16.jpg")} />
          </div>
        </Slider>
      </div>
    );
  }
  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
  
          fontSize: "1.3rem",
          borderRadius: "50%",
          width: "3rem",
          height: "3rem",
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
  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgb(255 255 255)",
          // height: "20px",
          fontSize: "1.3rem",
          borderRadius: "50%",
          width: "3rem",
          height: "3rem",
          textAlign: "center",
  
          border: "1px solid #e8ebf3 !important",
          zIndex: "99",
          boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
        }}
        onClick={onClick}
      />
    );
  }
  export function Slickcarousel() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // rtl: true,
  
      nextArrow: <SampleNextArrow1 />,
      prevArrow: <SamplePrevArrow1 />,
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
            <Card className="me-3 ">
              <Card.Body className=" user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/5.jpg")} />
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Reynante</h5>
                  <p className="mb-1">Web Developer</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i> Verified
                  </span>
                </div>
                <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card className="me-3">
              <Card.Body className="user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/4.jpg")} />
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Joyce Chua</h5>
                  <p className="mb-1">Team Leader</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i> Verified
                  </span>
                </div>
                <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card className="me-3">
              <Card.Body className="user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/6.jpg")} />
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Owen Bongcaras</h5>
                  <p className="mb-1">Web Designer</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i> Verified
                  </span>
                </div>
                <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card className="me-3">
              <Card.Body className="user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/7.jpg")} />
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Mariane Galeon</h5>
                  <p className="mb-1">Php Developer</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i> Verified
                  </span>
                </div>
                <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card className="me-3">
              <Card.Body className="user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/8.jpg")} />
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Reynante</h5>
                  <p className="mb-1">Web Developer</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i> Verified
                  </span>
                </div>
                <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card className="me-3">
              <Card.Body className="user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/9.jpg")} />
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Joyce Chua</h5>
                  <p className="mb-1">Team Leader</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i> Verified
                  </span>
                </div>
                <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="item ">
            <Card className="me-3">
              <Card.Body className="user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/10.jpg")} />
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Owen Bongcaras</h5>
                  <p className="mb-1">Web Designer</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i> Verified
                  </span>
                </div>
                <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="item">
            <Card className="me-3">
              <Card.Body className="user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/11.jpg")} />
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Mariane Galeon</h5>
                  <p className="mb-1">Php Developer</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i> Verified
                  </span>
                </div>
                <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }