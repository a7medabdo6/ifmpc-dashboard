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
import { Link } from 'react-router-dom';


const Height = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Height</h2>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item" href="#">
            Utilities
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Height
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
        <Card className="custom-card" id="seth">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Set Height</h6>
              <p className="text-muted  card-sub-title">
                You can set a height to an element instantly by using the
                following utilities classNamees for height.
              </p>
            </div>
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-light">
                .ht-80
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-150 bg-light mg-l-20">
                .ht-150
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-100 bg-light mg-l-20">
                .ht-100
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Height</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-[value]</code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive mt-0">
              <Table className="table main-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Regular Height</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-[value]</code>
                    </td>
                    <td>15 | 20 | 25 | 30 | ... | 100 &nbsp; (step of 5)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Bigger Height</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-[value]</code>
                    </td>
                    <td>
                      150 | 200 | 250 | 300 | ... | 850 &nbsp; (step of 50)
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Footer>
        </Card>
        <Card className="custom-card" id="percentage">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Percentage Height</h6>
              <p className="text-muted  card-sub-title">
                You can set a height through percentage using the following
                utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-[value]p</code>
                    </td>
                    <td>10 | 20 | 30 | 40 | ... | 100 &nbsp; (step of 10)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="media">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Media Query Height</h6>
              <p className="text-muted  card-sub-title">
                You can also set a height to a different media query using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-[size]-[value]</code>
                    </td>
                    <td className="bd-l" rowSpan="2">
                      <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">
                        value: the height value (refer to code above)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.ht-[size]-[value]p</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="extra">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">
                Extra Height classNamees
              </h6>
              <p className="text-muted  card-sub-title">
                You can also set a height using the extra utilities classNamees
                below.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-100v</code>
                    </td>
                    <td>
                      Set a height to an element based on viewport height.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.ht-auto</code>
                    </td>
                    <td>Set an auto height to an element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className="custom-card">
            <Card.Body className="component-item">
              <Nav className="nav flex-column">
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#seth">
                    Set Height
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#percentage">
                    Percentage Height
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#media">
                    Media Query Height
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#extra">
                    Extra Height classNamees
                  </Nav.Link></Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <div className="bg-white box-shadow">
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
              <h5 className="mt-2 mb-1 ">Success !</h5>
              <p className="mb-3 mb-3 tx-inverse">Data Upload Successfully </p>
              <Link to="#" className="btn ripple btn-success">
                Continue
              </Link>
            </div>
          </div>
          <div className="bg-white box-shadow">
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
              <Link to="#" className="btn ripple btn-danger">
                Try again
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Height.propTypes = {};

Height.defaultProps = {};

export default Height;
