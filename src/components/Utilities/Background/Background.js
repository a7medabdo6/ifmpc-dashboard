import React, { Fragment } from "react";

import { Breadcrumb, Card, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Background = () => {
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Background</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Utilities</Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item" active>
              Background
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant=""
              type="button"
              className="btn btn-white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant=""
              type="button"
              className="btn btn-white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              variant=""
              type="button"
              className="btn btn-primary my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" id="graybg">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Gray Set</h6>
                <p className="text-muted  card-sub-title">
                  A set of gray background utilities classNamees.
                </p>
              </div>
              <div className="gray-set">
                <div className="flex-1 bg-gray-100 ht-100p p-3">
                  .bg-gray-100
                </div>
                <div className="flex-1 bg-gray-200 ht-100p p-3">
                  .bg-gray-200
                </div>
                <div className="flex-1 bg-gray-300 ht-100p p-3">
                  .bg-gray-300
                </div>
                <div className="flex-1 bg-gray-400 ht-100p p-3">
                  .bg-gray-400
                </div>
                <div className="flex-1 bg-gray-500 ht-100p p-3">
                  .bg-gray-500
                </div>
                <div className="flex-1 bg-gray-600 ht-100p p-3">
                  .bg-gray-600
                </div>
                <div className="flex-1 bg-gray-700 ht-100p p-3 tx-white-7">
                  .bg-gray-700
                </div>
                <div className="flex-1 bg-gray-800 ht-100p p-3 tx-white-7">
                  .bg-gray-800
                </div>
                <div className="flex-1 bg-gray-900 ht-100p p-3 tx-white-7">
                  .bg-gray-900
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="p-4">
              <Table responsive className="main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-40p">className Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>className="bg-gray-[value]"</code>
                    </td>
                    <td>900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Footer>
          </Card>
          <Card className="custom-card" id="solidbg">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Solid Background Set
                </h6>
                <p className="text-muted  card-sub-title">
                  set of solid background utilities classNamees.
                </p>
              </div>
              <div className="#">
                <div className="flex-1 bg-primary p-3 tx-white">
                  .bg-primary
                </div>
                <div className="flex-1 bg-secondary p-3 tx-white">
                  .bg-secondary
                </div>
                <div className="flex-1 bg-success p-3 tx-white">
                  .bg-success
                </div>
                <div className="flex-1 bg-warning p-3 tx-white">
                  .bg-warning
                </div>
                <div className="flex-1 bg-danger p-3 tx-white">.bg-danger</div>
                <div className="flex-1 bg-info p-3 tx-white">.bg-info</div>
                <div className="flex-1 bg-purple p-3 tx-white">.bg-purple</div>
                <div className="flex-1 bg-pink p-3 tx-white">.bg-pink</div>
                <div className="flex-1 bg-teal p-3 tx-white">.bg-teal</div>
              </div>
            </Card.Body>
            <Card.Footer className="p-4">
              <Table responsive className="main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-40p">className Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>className="bg-[value]"</code>
                    </td>
                    <td>
                      primary | secondary | success | warning | danger | info |
                      indigo | purple | pink | teal | orange
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Footer>
          </Card>
          <Card className="custom-card" id="whitebg">
            <Card.Header className="main-content-label mb-1">
              <h6> Transparent White Set</h6>
              <p className="text-muted fs-12 text-capitalize font-weight-normal">
                  A set of overlay transparent white background utilities
                  classNames.
              </p>
            </Card.Header>
            <Card.Body className="card-body">
              <div className="d-flex flex-wrap ht-50 mb-lg-5">
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-1"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-2"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-3"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-4"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-5"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-6"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-7"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-8"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-9"></div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className=" p-4">
              <Table
                responsive
                className="table main-table-reference mt-0 mb-0"
              >
                <thead>
                  <tr>
                    <th className="wd-40p">className Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>className="bg-white-[value]"</code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Footer>
          </Card>
          <Card className="custom-card" id="blackbg">
              <Card.Header>
                  <h6 className="main-content-label mb-1">
                    Transparent Black Set
                  </h6>
                  <p className="text-muted fs-12 text-capitalize font-weight-normal">
                    A set of overlay transparent black background utilities
                    classNamees.
                  </p>
              </Card.Header>
            <Card.Body className="card-body">
              <div className="d-flex flex-wrap ht-50 mb-lg-5">
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-1"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-2"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-3"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-4"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-5"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-6"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-7"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-8"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-9"></div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="p-4">
              <Table
                responsive
                className="table main-table-reference mt-0 mb-0"
              >
                <thead>
                  <tr>
                    <th className="wd-40p">className Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>className="bg-black-[value]"</code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Footer>
          </Card>

          <Card className="custom-card" id="colortrans">
              <Card.Header>
                <h6 className="main-content-label mb-1">
                  Transparent Colors Set
                </h6>
                <p className="text-muted fs-12 text-capitalize font-weight-normal">
                  A set of overlay transparent colors background utilities
                  classNamees.
                </p>
              </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap ht-50 mb-lg-5">
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-transparent"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-dark-transparent"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-primary-transparent"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-secondary-transparent"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-success-transparent"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-info-transparent"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-warning-transparent "></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-danger-transparent"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-pink-transparent"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <Card.Img
                    alt="media7"
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/media/7.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-purple-transparent"></div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="card-footer p-4">
              <Table
                responsive
                className="table main-table-reference mt-0 mb-0"
              >
                <thead>
                  <tr>
                    <th className="wd-40p">className Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>className="bg-[value]-transparent"</code>
                    </td>
                    <td>
                      light | dark | primary | secondary | success | info |
                      warning | danger | pink | purple
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <div className="alert text-center fade show p-3">
                <Button
                  variant=""
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </Button>
                <i className="fe fe-upload-cloud fs-50 text-success"></i>
                <h5 className="mt-2 mb-1">Success !</h5>
                <p className="mb-3 mb-3 tx-inverse">
                  Data Upload Successfully{" "}
                </p>
                <Link className="btn ripple btn-success" to="#">
                  Continue
                </Link>
              </div>
            </Card>
            <Card className="custom-card">
              <div className="alert text-center fade show p-3">
                <Button
                  variant=""
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </Button>
                <i className="fe fe-download-cloud fs-50 text-danger"></i>
                <h5 className="mt-2 mb-1">Oops!</h5>
                <p className="mb-3 mb-3 tx-inverse">Something went wrong</p>
                <Link className="btn ripple btn-danger" to="#">
                  Try again
                </Link>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Background.propTypes = {};

Background.defaultProps = {};

export default Background;
