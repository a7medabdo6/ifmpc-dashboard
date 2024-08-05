import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Card, Col, Row, Table } from "react-bootstrap";
import { Filedetailscarousel } from "./Filepagecarousel";
const Filedetails = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">File-Details</h2>
        <Breadcrumb className="breadcrumb">

          <Breadcrumb.Item href="#">Advanced UI</Breadcrumb.Item>

          <Breadcrumb.Item active aria-current="page">
            File-Details
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <button
            type="button"
            className="btn btn-white btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </button>
          <button
            type="button"
            className="btn btn-white btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </button>
          <button type="button" className="btn btn-primary my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}
    {/* <!-- Row --> */}
    <Row className=" row-sm">
      <Col xl={8} lg={12} md={12}>
        <Card className=" custom-card overflow-hidden">
          <Card.Body className=" px-4 pt-4">
            <Link to="#">
              <img src={require("../../../../assets/img/media/blog-details.jpg")} alt="img" className="rounded-5 w-100" />
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} lg={12} md={12}>
        <Card className=" custom-card">
          <Card.Body className=" card-body ">
            <h5 className="mb-3">File details :</h5>
            <div className="table">
              <Row>
                <Col xl={12}>
                  <div className="table-responsive">
                    <Table className="table mb-0 border-top table-bordered text-nowrap">
                      <tbody>
                        <tr>
                          <th scope="row">File-name</th>
                          <td>image.jpg</td>
                        </tr>
                        <tr>
                          <th scope="row">File-size</th>
                          <td>12.45mb</td>
                        </tr>
                        <tr>
                          <th scope="row">uploaded-date</th>
                          <td>01-12-2020</td>
                        </tr>
                        <tr>
                          <th scope="row">uploaded-by</th>
                          <td>prityy abodh</td>
                        </tr>
                        <tr>
                          <th scope="row">image-width</th>
                          <td>1000</td>
                        </tr>
                        <tr>
                          <th scope="row">image-height</th>
                          <td>600</td>
                        </tr>
                        <tr>
                          <th scope="row">File-formate</th>
                          <td>jpg</td>
                        </tr>
                        <tr>
                          <th scope="row">File-location</th>
                          <td>storage/photos/image.jpg</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={8} lg={12} md={12}>
        <div className=" multiside filedetails-slide mb-4">
          <Filedetailscarousel/>
        </div>
      </Col>
      <Col xl={4} lg={12} md={12}>
        <Card className=" custom-card">
          <Card.Body>
            <h5 className="mb-3">Recent Files</h5>
            <Row className="row row-sm">
              <Col xl={3} >
                <div className="card custom-card">
                  <img src={require("../../../../assets/img/files/img-8.jpg")} alt="img" height="100%" width="100%" className="rounded-5" />
                </div>
              </Col>
              <Col xl={3} >
                <div className="card custom-card">
                  <img src={require("../../../../assets/img/files/img-6.jpg")} alt="img" height="100%" width="100%" className="rounded-5" />
                </div>
              </Col>
              <Col xl={3} >
                <div className="card custom-card">
                  <img src={require("../../../../assets/img/files/img-7.jpg")} alt="img" height="100%" width="100%" className="rounded-5" />
                </div>
              </Col>
              <Col xl={3} >
                <div className="card custom-card">
                  <img src={require("../../../../assets/img/files/img-2.jpg")} alt="img" height="100%" width="100%" className="rounded-5" />
                </div>
              </Col>
              <Col xl={3} >
                <div className="card custom-card">
                  <img src={require("../../../../assets/img/files/img-5.jpg")} alt="img" height="100%" width="100%" className="rounded-5" />
                </div>
              </Col>
              <Col xl={3} >
                <div className="card custom-card">
                  <img src={require("../../../../assets/img/files/img-4.jpg")} alt="img" height="100%" width="100%" className="rounded-5" />
                </div>
              </Col>
              <Col xl={3} >
                <div className="card custom-card">
                  <img src={require("../../../../assets/img/files/img-3.jpg")} alt="img" height="100%" width="100%" className="rounded-5" />
                </div>
              </Col>
              <Col xl={3} >
                <div className="card custom-card">
                  <img src={require("../../../../assets/img/files/img-9.jpg")} alt="img" height="100%" width="100%" className="rounded-5" />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Filedetails.propTypes = {};

Filedetails.defaultProps = {};

export default Filedetails;
