
import React, { Fragment, useState } from "react";
import watch2 from "../../../assets/img/pngs/shirt-2.png";
import watch3 from "../../../assets/img/pngs/shirt-3.png";
import watch4 from "../../../assets/img/pngs/shirt-4.png";
import watch5 from "../../../assets/img/pngs/shirt-5.png";
import { Breadcrumb, Button, Card, Col, Form, Row, Table, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Searchable from "react-searchable-dropdown";


const Productdeatils = () => {
  const QuantitySelect=[
    {
        value: "",
        label: "1"

    },
    {
        value: "it projects",
        label: "2"
    },
    {
        value: "business case",
        label: "3"
    },
    {
        value: "microsoft project",
        label: "4"
    },
    {
        value: "risk ]management",
        label: "5"
    },


]

  let [img, setimg] = useState(watch4);

  let click = (id) => {
    // console.log(id)
    if ((id) === "watch3") {
      setimg(watch3)
    }
    else if ((id) === "watch2") {
      setimg(watch2)
    }
    else if ((id) === "watch4") {
      setimg(watch4)
    }
    else if ((id) === "watch5") {
      setimg(watch5)
    }
  }

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Product-Details</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Ecommerce </Breadcrumb.Item>
            <Breadcrumb.Item>Product-Details</Breadcrumb.Item>
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

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className=" custom-card productdesc">
            <Card.Body className="h-100">
              <Row>
                <Col xl={6} lg={12} md={12}>
                  <Row>
                    <div className="col-2">
                      <div className="clearfix carousel-slider">
                        <div className="carousel slide">
                          <div className="carousel-inner">
                            <div>
                              <div

                                className="thumb my-2"
                              >
                                <img src={require("../../../assets/img/pngs/shirt-2.png")} alt="img" onClick={() => { click("watch2") }} />

                              </div>
                              <div
                                data-bs-slide-to="1"
                                className="thumb my-2"
                              >

                                <img src={require("../../../assets/img/pngs/shirt-3.png")} alt="img" onClick={() => { click("watch3") }} />

                              </div>
                              <div
                                data-bs-slide-to="2"
                                className="thumb my-2"
                              >
                                <img src={require("../../../assets/img/pngs/shirt-4.png")} alt="img" onClick={() => { click("watch4") }} />
                              </div>
                              <div
                                data-bs-slide-to="3"
                                className="thumb my-2"
                              >
                                <img src={require("../../../assets/img/pngs/shirt-5.png")} alt="img" onClick={() => { click("watch5") }} />

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 offset-md-1 col-sm-9 col-8">
                      <div className="product-carousel">
                        <div
                          id="carousel"
                          className="carousel slide"
                          data-bs-ride="false"
                        >
                          <div className="carousel-inner">
                            <div>
                              <img
                                src={img}
                                alt="img"
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                            <div className="carousel-item">

                              <img
                                src={require("../../../assets/img/pngs/shirt-5.png")}
                                alt="img"
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                            <div className="carousel-item">

                              <img
                                src={require("../../../assets/img/pngs/shirt-4.png")}
                                alt="img"
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                            <div className="carousel-item">

                              <img
                                src={require("../../../assets/img/pngs/shirt-2.png")}
                                alt="img"
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="text-center mt-4 mb-4 btn-list">
                            <Link
                              to={`${process.env.PUBLIC_URL}/ecommerce/eccart/`}
                              className="btn ripple btn-primary"
                            >
                              <i className="fe fe-shopping-cart"> </i> Add to cart
                            </Link>
                            <Link to="#" className="btn ripple btn-secondary">
                              <i className="fe fe-credit-card"> </i> Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col xl={6} lg={12} md={12}>
                  <div className="mt-4 mb-4">
                    <h4 className="mt-1 mb-3">
                      Touch Screen Waterproof Smartwatch
                    </h4>

                    <p className="text-muted float-start me-3">
                      <span className="fe fe-star text-warning"></span>
                      <span className="fe fe-star text-warning"></span>
                      <span className="fe fe-star text-warning"></span>
                      <span className="fe fe-star text-warning"></span>
                      <span className="fe fe-star"></span>
                    </p>
                    <p className="text-muted mb-4">( 135 Customers Review )</p>
                    <h6 className="text-success text-uppercase">20 % Off</h6>
                    <h5 className="mb-2">
                      Price :
                      <span className="text-muted me-2">
                        <del>  $499 USD </del>
                      </span>
                      <b>$299 USD</b>
                    </h5>
                    <p className="tx-13 text-muted">
                      FREE SHIPPING on above Purchase of <b>$359</b>
                    </p>
                    <h6 className="mt-4 fs-16">Description</h6>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in culpa
                      qui officia deserunt mollitia animi, id est laborum et
                      dolorum fuga.
                    </p>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized .
                    </p>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system.
                    </p>
                  </div>
                  <div className="d-flex  mt-2">
                    <div className="mt-2 sizes">Quantity:</div>
                    <div className="d-flex ms-2">
                      <Form.Group>
                      <Searchable className="form-control select2"
                value="test"
                placeholder="Choose one" // by default "Search"
                notFoundText="No result found" // by default "No result found"
                noInput
                options={QuantitySelect}
                onSelect={(value) => {
                    console.log(value);
                }}
                listMaxHeight={140} //by default 140
            />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="colors d-flex me-3 mt-3">
                    <span className="mt-2">colors:</span>
                    <div className="d-flex gutters-xs ms-4">
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="radio"
                            defaultValue="azure"
                            className="colorinput-input" defaultChecked
                          />
                          <span className="colorinput-color bg-dark"></span>
                        </label>
                      </div>
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="radio"
                            defaultValue="indigo"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-secondary"></span>
                        </label>
                      </div>
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="radio"
                            defaultValue="purple"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-danger"></span>
                        </label>
                      </div>
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="radio"
                            defaultValue="pink"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-pink"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="mt-4">
                <h5 className="mb-3">Specifications :</h5>
                <div>
                  <Row>
                    <Col xl={12}>
                      <div className="table-responsive">
                        <Table className="mb-0 border-top table-bordered text-nowrap">
                          <tbody>
                            <tr>
                              <th scope="row">Category</th>
                              <td>Watches</td>
                            </tr>
                            <tr>
                              <th scope="row">Brand</th>
                              <td>Willful</td>
                            </tr>
                            <tr>
                              <th scope="row">Color</th>
                              <td>White</td>
                            </tr>
                            <tr>
                              <th scope="row">Connections</th>
                              <td>Bluetooth</td>
                            </tr>
                            <tr>
                              <th scope="row">Application</th>
                              <td>
                                Messages, Phone, Pedometer, Heart Rate Monitor
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Supported </th>
                              <td>Fitness Tracker, Sleep Monitor, Reminders</td>
                            </tr>
                            <tr>
                              <th scope="row">Warranty Summary</th>
                              <td>1 Year</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                    <Col xl={12} className="mt-4">
                      <div className="card">
                        <Card.Body className="p-0">
                          <div className="d-flex p-3">
                            <h5 className="float-start main-content-label mb-0 mt-2">
                              All Ratings and Reviews
                            </h5>
                            <Link to="#"
                              href="#"
                              className="btn btn-outline-primary btn-sm float-end ms-auto"
                            >
                              Top Rated
                            </Link>
                          </div>
                          <div className="media mt-0 p-4 border-bottom border-top">
                            <div className="d-flex me-3">
                              <Link to="#">
                                <img
                                  className="media-image avatar avatar-md rounded-circle"
                                  alt="64x64"
                                  src={require("../../../assets/img/users/8.jpg")}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                                Bruce Tran

                              </h5>
                              <span className="text-muted tx-13">
                                Tue, 20 Mar 2020
                              </span>
                              <div className="text-warning mt-1">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                              </div>
                              <p className="font-13  mb-2 mt-2">
                                Lorem Ipsum available, quis Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam
                                eius modi tempora incidunt ut labore et nostrud
                                exercitation ullamco laboris commodo consequat.
                              </p>
                              <Link to="#" className="me-2">
                                <span className="badge bg-primary">Helpful</span>
                              </Link>
                              <Link to="#" className="me-2">
                                <span>Comment</span>
                              </Link>
                              <Link to="#" className="me-2">
                                <span>Report</span>
                              </Link>
                            </div>
                          </div>
                          <div className="media mt-0  p-4 border-bottom">
                            <div className="d-flex me-3">
                              <Link to="#">
                                <img
                                  className="media-image avatar avatar-md rounded-circle"
                                  alt="64x64"
                                  src={require("../../../assets/img/users/3.jpg")}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                                Mina Harpe
                                <span
                                  className="fs-14 ms-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="verified"
                                >
                                  
                                </span>
                              </h5>
                              <span className="text-muted tx-13">
                                Tue, 20 Mar 2020
                              </span>
                              <div className="text-warning mt-1">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                              </div>
                              <p className="font-13  mb-2 mt-2">
                                Lorem Ipsum available, quis Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam
                                eius modi tempora incidunt ut labore et nostrud
                                exercitation ullamco laboris commodo consequat.
                              </p>
                              <Link to="#" className="me-2">
                                <span className="badge bg-primary">Helpful</span>
                              </Link>
                              <Link to="#" className="me-2">
                                <span>Comment</span>
                              </Link>
                              <Link to="#" className="me-2">
                                <span>Report</span>
                              </Link>
                            </div>
                          </div>
                          <div className="media mt-0 p-4 border-bottom">
                            <div className="d-flex me-3">
                              <Link to="#">
                                <img
                                  className="media-image avatar avatar-md rounded-circle"
                                  alt="64x64"
                                  src={require("../../../assets/img/users/4.jpg")}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                                Maria Quinn
                                <span
                                  className="fs-14 ms-0"

                                >
                                </span>
                              </h5>
                              <span className="text-muted tx-13">
                                Tue, 20 Mar 2020
                              </span>
                              <div className="text-warning mt-1">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star text-light"></i>
                              </div>
                              <p className="font-13  mb-2 mt-2">
                                Lorem Ipsum available, quis Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam
                                eius modi tempora incidunt ut labore et nostrud
                                exercitation ullamco laboris commodo consequat.
                              </p>
                              <Link to="#" className="me-2">
                                <span className="badge bg-primary">Helpful</span>
                              </Link>
                              <Link to="#" className="me-2">
                                <span>Comment</span>
                              </Link>
                              <Link to="#" className="me-2">
                                <span>Report</span>
                              </Link>
                            </div>
                          </div>
                          <Link to="#"
                            className="text-center w-100 d-block p-3 font-weight-bold"

                          >
                            See All Reviews
                          </Link>
                        </Card.Body>
                        <div className="border-top px-4 pb-2 pt-4">
                          <h5 className="mb-4">Leave Comment</h5>
                          <div className="mb-1">
                            <Row>
                              <Form.Group className=" col-md-6">
                                <div className="mb-3 font-weight-semibold">
                                  Your Name
                                </div>
                                <Form.Control
                                  placeholder="Your Name"
                                  className="mb-3"
                                  type="text"
                                />
                              </Form.Group>
                              <Form.Group className=" col-md-6">
                                <div className="mb-3 font-weight-semibold">
                                  Email Address
                                </div>
                                <Form.Control
                                  placeholder="Email Address"
                                  className="mb-3"
                                  type="text"
                                />
                              </Form.Group>
                            </Row>
                          </div>
                          <span className="star-rating">
                            <Link to="#">
                              <i className="icofont-ui-rating icofont-2x"></i>
                            </Link>
                            <Link to="#">
                              <i className="icofont-ui-rating icofont-2x"></i>
                            </Link>
                            <Link to="#">
                              <i className="icofont-ui-rating icofont-2x"></i>
                            </Link>
                            <Link to="#">
                              <i className="icofont-ui-rating icofont-2x"></i>
                            </Link>
                            <Link to="#">
                              <i className="icofont-ui-rating icofont-2x"></i>
                            </Link>
                          </span>
                          <form>
                            <Form.Group>
                              <div className="mb-3 font-weight-semibold">
                                Your Comment
                              </div>
                              <Form.Control as="textarea" aria-label="With textarea"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Button variant="primary"
                                className=" mt-3 mb-0"
                                type="button"
                              >
                                Post your review
                              </Button>
                            </Form.Group>
                          </form>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment >
  )
}

Productdeatils.propTypes = {};

Productdeatils.defaultProps = {};

export default Productdeatils;
