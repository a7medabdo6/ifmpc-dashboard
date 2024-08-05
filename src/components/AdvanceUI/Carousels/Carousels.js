import React, { Fragment } from "react";
import { Breadcrumb, Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { Carouselwithcontrol } from "./Carouselwithcontrol";
import { Carouselwithfade } from "./Carouselwithfate";
import { Carouselwithindicator, Slickcarousel } from "./Carouselwithindicator";
import { Multipleslider } from "./Multipleslider";
import { SliderSlick } from "./SliderSlick";
import { Staticcarousel } from "./Staticcarousel";
const Carousels = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Carousel</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"> Advanced UI </Breadcrumb.Item>
          <Breadcrumb.Item active>Carousel</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button variant="primary" type="button" className="my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    <Row className="row-sm">
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">Static Carousel</h6>
              <p className="text-muted card-sub-title">
                Here's a carousel with slides only.
              </p>
            </div>
            <div>
              <div
                id="carouselExampleSlidesOnly"
              >
                <div className="carousel-inner ap">
                  <Staticcarousel/>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">With Controls</h6>
              <p className="text-muted card-sub-title">
                Adding in the previous and next controls.
              </p>
            </div>
            <div>
              <div id="carouselExample2">
              <Carouselwithcontrol/>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">
                With Indicator/With Controls
              </h6>
              <p className="text-muted card-sub-title">
                You can also add the indicators to the carousel.
              </p>
            </div>
            <div>
              <div id="carouselExample3">
                <Carouselwithindicator/>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">With Caption</h6>
              <p className="text-muted card-sub-title">
                Add captions to your slides easily with the
                <code>.carousel-caption</code> element within any
                <code>.carousel-item.</code>
              </p>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../../../assets/img/media/18.jpg")}
                    alt="First"
                  />
                  <Carousel.Caption>
                    <h4>First slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque,
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../../../assets/img/media/19.jpg")}
                    alt="Second"
                  />

                  <Carousel.Caption>
                    <h4>Second slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../../../assets/img/media/17.jpg")}
                    alt="Third"
                  />

                  <Carousel.Caption>
                    <h4>Third slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">Fade Animate Carousel</h6>
              <p className="text-muted card-sub-title">
                Add fade transition to your carousel to animate slides with a
                fade transition instead of a slide.
              </p>
            </div>
            <div>
              <div id="carouselExample5">
                <Carouselwithfade/>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">
                Carousel With Thumbnails
              </h6>
              <p className="text-muted card-sub-title">
                The Carousel controls the Thumbnails easily design the images
                <br />
                with thumbnails
              </p>
            </div>
            <div id="carouselExample6">

              <SliderSlick />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">React slick Carousel</h6>
            <p className="text-muted card-sub-title">Touch enabled React slick plugin that lets you create a
              beautiful responsive carousel slider.</p>
          </Card.Header>
          <Card.Body className="h-100">
            <Slickcarousel />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1"> Slick Multi Slider</h6>
            <p className="text-muted card-sub-title">
              Slick Multislider is a React Slick powered slideshow that
              specializes in showing more than one slide at a time. There's no
              need to find messy CSS and JS work arounds for other
              single-slide solutions. Multislider allows the developer to
              focus fully on each individual slide as it's own component, and
              then displays as many slides as you decide in a manner that is
              fluid, consistent, and dymanic.
            </p>
          </Card.Header>
          <Card.Body className="h-100">
            <div id="basicSlider">
              <Multipleslider />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <div></div>
    {/* <!-- End Row --> */}
  </Fragment>
);

Carousels.propTypes = {};

Carousels.defaultProps = {};

export default Carousels;
