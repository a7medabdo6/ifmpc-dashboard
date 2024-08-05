import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
export function SliderSlick() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);
  
    //i dont seem to need this
  
    useEffect(() => {
      setNav1(slider1.current);
      setNav2(slider2.current);
    }, []);
    const settings = {
      arrows: true,
      // rtl: true,
    };
    return (
      <div>
        <Slider
          className="mainSlider"
          asNavFor={nav2}
          ref={slider1}
          {...settings}
        >
          <div>
            <div className="item thum">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/7.jpg")} />
            </div>
          </div>
          <div>
            <div className="item thum">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/8.jpg")} />
            </div>
          </div>
          <div>
            <div className="item thum">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/9.jpg")} />
            </div>
          </div>
          <div>
            <div className="item thum">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/10.jpg")} />
            </div>
          </div>
          <div>
            <div className="item thum">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/11.jpg")} />
            </div>
          </div>
          <div>
            <div className="item thum">
              <img alt="img" className="d-block w-100" src={require("../../../assets/img/media/1.jpg")} />
            </div>
          </div>
        </Slider>
  
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings}
        >
          <div>
             <img alt="img" className="d-block pe-2" src={require("../../../assets/img/media/7.jpg")} /> 
           </div>
          <div>
            <img alt="img" className="d-block pe-2" src={require("../../../assets/img/media/8.jpg")} />
          </div>
          <div>
            <img alt="img" className="d-block pe-2" src={require("../../../assets/img/media/9.jpg")} />
          </div>
          <div>
            <img alt="img" className="d-block pe-2" src={require("../../../assets/img/media/10.jpg")} />
          </div>
          <div>
            <img alt="img" className="d-block pe-2" src={require("../../../assets/img/media/11.jpg")} />
          </div>
          <div> 
            <img alt="img" className="d-block pe-2" src={require("../../../assets/img/media/1.jpg")} /> 
          </div>
        </Slider>
      </div>
    );
  }