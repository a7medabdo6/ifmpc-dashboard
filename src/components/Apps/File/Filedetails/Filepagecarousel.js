import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
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
//Filedetailscarousel
export function Filedetailscarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        ltr: true,
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
                    <div className="card">
                        <Card className=" custom-card overflow-hidden mb-0 ">
                            <Link to="#">
                                <img src={require("../../../../assets/img/files/img-3.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className=" custom-card overflow-hidden mb-0 ">
                            <Link to="#"><img src={require("../../../../assets/img/files/img-9.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link to="#"><img src={require("../../../../assets/img/files/img-8.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0">
                            <Link to="#"><img src={require("../../../../assets/img/files/img-7.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link to="#"><img src={require("../../../../assets/img/files/img-6.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link to="#"><img src={require("../../../../assets/img/files/img-5.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link to="#"><img src={require("../../../../assets/img/files/img-4.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link to="#"><img src={require("../../../../assets/img/files/img-2.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link to="#"><img src={require("../../../../assets/img/files/img-1.jpg")} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>

            </Slider>
        </div>
    );
}