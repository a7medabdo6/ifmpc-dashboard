import React, { Fragment } from "react";
import { Breadcrumb, Button, Nav, Pagination, Col, Row, Card, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
const Search = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Search</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"> Advanced UI</Breadcrumb.Item>
          <Breadcrumb.Item active> Search</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button variant="primary" type="button" className="my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col sm={12} md={12}>
        <Card className="custom-card search-page">
          <Card.Body className="pb-2">
            <InputGroup className="mb-2">
              <FormControl
                type="text"
                className="ps-3"
                defaultValue="Volgh Admin template"
                placeholder="Searching....."
              />

              <span>
                <Button variant="primary" className="btn ripple" type="button">
                  <i className="fa fa-search"></i>
                </Button>
              </span>
            </InputGroup>
          </Card.Body>
          <Card.Body className="px-0 bd-t-0 pt-0">
            <div className="main-content-body-profile mb-3">
              <Nav variant="tabs" defaultActiveKey="#tab" className="pt-2 main-nav-line">
                <Nav.Item>
                  <Nav.Link href="#" className="d-flex">
                    <i className="bx bx-search-alt tx-18 me-2"></i>All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="d-flex" eventKey="tab2">
                    <i className="bx bx-image-alt tx-18 me-2"></i>Images
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className=" d-flex" eventKey="tab3">
                    <i className="bx bx-book tx-18  me-2"></i>Books
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className=" d-flex" eventKey="tab4">
                    <i className="bx bx-news tx-18 me-2"></i>News
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className=" d-flex" eventKey="tab5">
                    <i className="bx bx-video tx-18 me-2"></i>Videos
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <p className="text-muted mb-0 ps-3">
              About 12,546,90000 results (0.56 Seconds)
            </p>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div className="mb-2">
              <Link to="#"

                className="tx-18 font-weight-semibold text-primary"
              >
                Volgh - Bootstrap Admin Dashboard HTML Template
              </Link>
            </div>
            <p className="text-success mb-1">
              https://www.spruko.com/demo/volgh/volgh/LTR/Leftmenu-Icon-Sidebar/index.html
            </p>
            <p className="mb-0 text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </p>
            <div className="mt-2">
              <span className="tx-14 mt-2">
                <i className=" fa fa-star text-warning"></i>
                <i className=" fa fa-star text-warning"></i>
                <i className=" fa fa-star text-warning"></i>
                <i className=" fa fa-star text-warning"></i>
                <i className=" fa fa-star text-warning"></i>
              </span>
              (5)
              <span className="border-end mx-2 pe-2 tx-14">8 reviews</span>
              <span className="mx-2 tx-14">
                USD - $24.00
                <span className="mx-2 text-success tx-14">In stock</span>
              </span>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div className="mb-2">
              <Link to="#"

                className="tx-18 font-weight-semibold text-primary"
              >
                Volgh Laravel Admin Template Bootstrap4
              </Link>
            </div>
            <p className="text-success mb-1">
              https://laravel.spruko.com/volgh/leftmenu_icon_light/index
            </p>
            <p className="mb-0 text-muted">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text..
            </p>
            <div className="mt-2">
              <span className="tx-14">
                <i className=" fa fa-star text-warning"></i>
                <i className=" fa fa-star text-warning"></i>
                <i className=" fa fa-star text-warning"></i>
                <i className=" fa fa-star text-warning"></i>
                <i className=" fa fa-star text-warning"></i>
              </span>
              (5)
              <span className="border-end mx-2 pe-2 tx-14">8 reviews</span>
              <span className="mx-2 tx-14">
                USD - $29.00
                <span className="mx-2 text-success tx-14">In Stock</span>
              </span>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div className="mb-2">
              <Link to="#" className="tx-18 font-weight-semibold text-primary" >
                Volgh template Images
              </Link>
            </div>
            <div>
              <span className="tx-18">
                <span className="tag tag-default me-2">
                  Volgh laravel
                  <Link to="#" className="tag-addon">
                    <i className="fe fe-x"></i>
                  </Link>
                </span>
                <span className="tag tag-default me-2">
                  Volgh Images
                  <Link to="#" className="tag-addon">
                    <i className="fe fe-x"></i>
                  </Link>
                </span>
                <span className="tag tag-default me-2">
                  Volgh Landing
                  <Link to="#" className="tag-addon">
                    <i className="fe fe-x"></i>
                  </Link>
                </span>
                <span className="tag tag-default me-2">
                  Volgh leftmenu
                  <Link to="#" className="tag-addon">
                    <i className="fe fe-x"></i>
                  </Link>
                </span>
                <span className="tag tag-default me-2">
                  Volgh Horizontalmenu
                  <Link to="#" className="tag-addon">
                    <i className="fe fe-x"></i>
                  </Link>
                </span>
              </span>
            </div>
            <ul className="mt-3 search-imgs ps-0">
              <li>
                <img
                  src={require("../../../assets/img/media/screen1.jpg")}
                  alt="screen1"
                  className="wd-150 ht-150 border mb-2 mt-2"
                />
              </li>
              <li>
                <img
                  src={require("../../../assets/img/media/screen2.jpg")}
                  alt="screen2"
                  className="wd-150 ht-150 border mb-2 mt-2"
                />
              </li>
              <li>
                <img
                  src={require("../../../assets/img/media/screen3.jpg")}
                  alt="screen3"
                  className="wd-150 ht-150 border mb-2 mt-2"
                />
              </li>
              <li>
                <img
                  src={require("../../../assets/img/media/screen4.jpg")}
                  alt="screen4"
                  className="wd-150 ht-150 border mb-2 mt-2"
                />
              </li>
              <li>
                <img
                  src={require("../../../assets/img/media/screen5.jpg")}
                  alt="screen5"
                  className="wd-150 ht-150 border mb-2 mt-2"
                />
              </li>
            </ul>
            <br />
            <Link to="#" className="text-primary tx-15">
              <i className="fe fe-arrow-right me-2"></i>Related images
            </Link>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body className="d-lg-flex">
            <div>
              <iframe
                title="frame1"
                width="200"
                height="138"
                src="https://www.youtube.com/embed/7KlJK1aLk1A"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ms-lg-3 mt-3 mt-lg-0">
              <h3 className="tx-18 font-weight-semibold text-primary">
                <Link to="#">
                  Volgh- Admin & Dashboard HTML Template
                </Link>
              </h3>
              <p className="mb-0 text-success">
                <Link
                  to="#"
                  className="text-success"
                  target="_blank"
                >
                  https://www.spruko.com/demo/claylist/LTR/Claylist/HTML/index.html
                </Link>
              </p>
              <ul className="list-inline d-flex mt-2">
                <li>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i> 3 reviews
                </li>
                <li className="mx-3">USD - $24.00</li>
                <li className="text-success">In Stock</li>
              </ul>
              <p className="text-muted">
                <b>Volgh</b> Bootstrap Admin panel Dashboard HTML Template. This
                admin template Includes 200+ HTML Pages & 40+ Plugins. It has a
                Clean creative dashboard design layout and comes with several
                jQuery Plugins, Awesome cool color, charts, custom Tables and
                calendars
              </p>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body className="d-lg-flex">
            <div>
              <iframe
                title="frame2"
                width="200"
                height="138"
                src="https://www.youtube.com/embed/WmpPTEPS5mI"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ms-lg-3 mt-3 mt-lg-0">
              <h3 className="tx-18 font-weight-semibold text-primary">
                <Link to="#">
                  Dashlot - Bootstrap 4 Admin Dashboard HTML Template |
                  Themeforest Templates
                </Link>
              </h3>
              <p className="mb-0 text-success">
                <Link
                  to="#"
                  className="text-success"
                  target="_blank"
                >
                  {/* https://www.spruko.com/demo/claylist/LTR/Claylist/HTML/index.html */}
                </Link>
              </p>
              <ul className="list-inline d-flex mt-2">
                <li>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star-half text-warning"></i> 2 reviews
                </li>
                <li className="mx-3">USD - $24.00</li>
                <li className="text-success">In Stock</li>
              </ul>
              <p className="text-muted">
                <b>Dashlot </b> Bootstrap Responsive Admin panel Dashboard
                Template Ui Kit & Premium Dashboard Design Modern Flat HTML
                Template. This Template Includes 2000 HTML Pages & 90+ Plugins.
                No Need to do hard work for this template customization
              </p>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div className="mb-2">
              <Link
                to="#"
                className="tx-18 font-weight-semibold text-primary"
              >
                Azira - Admin Dashboard HTML Template
              </Link>
            </div>
            <p className="text-success mb-1">
              {/* https://www.spruko.com/demo/azira/Azira/LTR/Vertical-Toggle-Light-Sidebar/index.html */}
            </p>
            <p className="mb-0 text-muted">
              <b>Azira</b> is a modern, and creative admin and dashboard
              template using modern and minimal design. It is fully flexible
              user-friendly and responsive. Azira admin template is powered with
              HTML 5, SASS, & Bootstrap 4 which looks great on Desktops,
              Tablets, and Mobile Devices.
            </p>
            <div className="mt-2">
              <span className="border-end  me-2 pe-2 tx-14"> 1 reviews </span>
              <span className="mx-2 tx-14">
                USD - $24.00 - ‎
                <span className="mx-2 text-success tx-14">In Stock</span>
              </span>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div className="mb-2">
              <Link
                to="#"
                className="tx-18 font-weight-semibold text-primary"
              >
                Claylist - Bootstrap Responsive classNameifieds, Directory,
                Multipurpose Listing HTML Template
              </Link>
            </div>
            <p className="text-success mb-1">
              {/* https://www.spruko.com/demo/claylist/LTR/Claylist/HTML/index.html */}
            </p>
            <p className="mb-0 text-muted">
              <b>Claylist</b> is free classNameified ads website template with
              awesome responsive webdesign.It is suitable for all kinds of
              classNameified ads site .It is easy to customize. It has beautiful
              Home Pages and useful inner pages, and all the important sections
              required by a classNameified website
            </p>
            <div className="mt-2">
              <span className="border-end me-2 pe-2 tx-14"> 7 reviews </span>
              <span className="mx-2 tx-14">
                USD - $24.00 - ‎
                <span className="mx-2 text-success tx-14">In Stock</span>
              </span>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div className="mb-2">
              <Link
                to="#"
                className="tx-18 font-weight-semibold text-primary"
              >
                Autolist Car Dealer and classNameifieds HTML Template
              </Link>
            </div>
            <p className="text-success mb-1">
              {/* https://www.spruko.com/demo/autolist/AUTOLIST/Html/index.html */}
            </p>
            <p className="mb-0 text-muted">
              <b>Autolist</b> This Template Designed for Autotrader, Car
              classNameifieds, Car dealer, Car rental System and also
              Multipurpose auto classNameifieds Template.This Template Includes
              80+ HTML Pages & 30+ Plugins Includes.It is suitable for all kinds
              of auto websites Listing Business. It is especially designed for
              list of categories specific pages, multiple variations listing
              pages, car rental page, car auction page, car service page, car
              booking pages, etc.
            </p>
            <div className="mt-2">
              <span className="border-end me-2 pe-2 tx-14"> 5 reviews </span>
              <span className="mx-2 tx-14">
                USD - $24.00 - ‎
                <span className="mx-2 text-success tx-14">In stock</span>
              </span>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div className="mb-2">
              <Link
                to="#"
                className="tx-18 font-weight-semibold text-primary"
              >
                Eudica Online Education Courses HTML Template
              </Link>
            </div>
            <p className="text-success mb-1">
              <Link to="#"></Link>
            </p>
            <p className="mb-0 text-muted">
              <b>Eudica</b> Online Education & Learning Courses HTML CSS
              Responsive Template. This Template Includes 65+ HTML Pages & 55
              Plugins. No Need to do hard work for this template customization.
              We are design easily understandable code & User Friendly.Advanced
              Form-Elements like Date pickers,Advanced form elements etc.
            </p>
            <div className="mt-2">
              <span className="border-end me-2 pe-2 tx-14"> 3 reviews </span>
              <span className="mx-2 tx-14">
                USD - $24.00 - ‎
                <span className="mx-2 text-success tx-14">In stock</span>
              </span>
            </div>
          </Card.Body>
        </Card>
        <div className="text-center ms-3 mb-4">
          <Row className="row-sm">
            <nav>
              <Pagination className="mb-0 justify-content-end">
                <Pagination.Item>Previous</Pagination.Item>
                <Pagination.Item className="page-item disabled">
                  {1}
                </Pagination.Item>
                <Pagination.Item className="page-item" active>
                  {2}
                </Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </nav>
          </Row>
        </div>
      </Col>
    </Row>
    {/* <!-- row-end--> */}
  </Fragment>
);

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
