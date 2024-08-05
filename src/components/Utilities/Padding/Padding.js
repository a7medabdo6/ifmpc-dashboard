import React, { Fragment } from 'react';
import {
  Row,
  Card,
  Col,
  Button,
  Table,
  Breadcrumb,
  Nav,
} from "react-bootstrap";

const Padding = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Padding</h2>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item" href="#">
            Utilities
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Padding
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
    <Row className=" row-sm">
      <Col xl={9} lg={12}>
        <Card className=" custom-card" id="setpd">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Set Padding</h6>
              <p className="text-muted  card-sub-title">
                You can set a padding to an element instantly by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="d-md-flex">
              <div className="wd-200 ht-100 bg-gray-500 pd-t-30">
                <div className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
                  .pd-t-30
                </div>
              </div>
              <div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-t-50 mt-4 mt-md-0">
                <div className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
                  .pd-t-50
                </div>
              </div>
              <div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-t-70 mt-4 mt-md-0">
                <div className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
                  .pd-t-70
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Padding</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .pd-t-[value]
                        <br />
                        .pd-r-[value]
                        <br />
                        .pd-b-[value]
                        <br />
                        .pd-l-[value]
                      </code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                  <tr>
                    <td>
                      <code>
                        .pt-[value]
                        <br />
                        .pe-[value]
                        <br />
                        .pb-[value]
                        <br />
                        .ps-[value]
                      </code>
                    </td>
                    <td>0 | 1 | 2 | 3 | 4 | 5 </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Bigger Padding</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .pd-t-[value]
                        <br />
                        .pd-r-[value]
                        <br />
                        .pd-b-[value]
                        <br />
                        .pd-l-[value]
                      </code>
                    </td>
                    <td>15 | 20 | 25 | 30 | ... | 120 &nbsp; (step of 5)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Even Bigger Padding</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .pd-t-[value]
                        <br />
                        .pd-r-[value]
                        <br />
                        .pd-b-[value]
                        <br />
                        .pd-l-[value]
                      </code>
                    </td>
                    <td>
                      110 | 120 | 130 | 140 | ... | 200 &nbsp; (step of 10)
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Footer>
        </Card>
        <Card className=" custom-card" id="mediapd">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Media Query Padding</h6>
              <p className="text-muted  card-sub-title">
                You can also set a padding to a different media query using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th>className</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.pd-[size]-t-[value] </code> (or){" "}
                      <code>.pt-[size]-[value]</code>
                      <br />
                      <code>.pd-[size]-r-[value]</code> (or){" "}
                      <code>.pe-[size]-[value]</code> <br />
                      <code> .pd-[size]-b-[value]</code> (or){" "}
                      <code>.pb-[size]-[value]</code> <br />
                      <code> .pd-[size]-l-[value]</code> (or){" "}
                      <code>.ps-[size]-[value]</code>
                    </td>
                    <td>
                      <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">
                        value: the padding value (refer to code above)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3}lg={12} className="d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className=" custom-card">
            <Card.Body className="card-body component-item">
              <Nav className="nav flex-column">
                <Nav.Item>
				<Nav.Link className="nav-link" href="#setpd">
                  Set Padding
                </Nav.Link>
				</Nav.Item>
                <Nav.Item>
				<Nav.Link className="nav-link" href="#mediapd">
                  Media Query Padding
                </Nav.Link>
				</Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card className=" custom-card">
            <Card.Header className="card-header custom-card-header border-bottom-0">
              <h6 className="main-content-label mb-0">Sales Summary</h6>
            </Card.Header>
            <Card.Body>
              <div className="border">
                <div className="main-list-item p-3">
                  <div>
                    <h6>Total Revenue</h6>
                    <span>weekly profit</span>
                  </div>
                  <div>
                    <h5>$15,300</h5>
                  </div>
                </div>
                <div className="main-list-item p-3 border-top">
                  <div>
                    <h6>Total Tax</h6>
                    <span>weekly profit</span>
                  </div>
                  <div>
                    <h5>$1,625</h5>
                  </div>
                </div>
                <div className="main-list-item p-3 border-top">
                  <div>
                    <h6>Total Income</h6>
                    <span>weekly profit</span>
                  </div>
                  <div>
                    <h5>$55,897</h5>
                  </div>
                </div>
                <div className="main-list-item p-3 border-top">
                  <div>
                    <h6>Total Loss</h6>
                    <span>weekly profit</span>
                  </div>
                  <div>
                    <h5>20%</h5>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  </Fragment>
);

Padding.propTypes = {};

Padding.defaultProps = {};

export default Padding;
