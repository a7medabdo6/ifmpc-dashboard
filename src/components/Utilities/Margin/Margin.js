import React, { Fragment } from 'react';
import { Row, Card, Col, Button, Table, Breadcrumb, Nav, } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Margin = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Margin</h2>
        <Breadcrumb >
          <Breadcrumb.Item href="#"> Utilities</Breadcrumb.Item>
          <Breadcrumb.Item active >Margin</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button
            variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button
            variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button
            variant="primary"
            type="button"
            className="my-2 btn-icon-text"
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
        <Card className="custom-card" id="setmargin">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Set Margin</h6>
              <p className="text-muted  card-sub-title">
                You can set a margin to an element instantly by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="d-flex">
              <div className="wd-150 ht-80 bg-light"></div>
              <div className="d-flex align-items-center justify-content-center text-center wd-150 ht-80 bg-light mg-l-20">
                .mg-l-20 (or) .ms-2
              </div>
              <div className="d-flex align-items-center justify-content-center text-center wd-150 ht-80 bg-light mg-l-40">
                .mg-l-40 (or) .ms-4
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Margin</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .mg-t-[value]
                        <br />
                        .mg-r-[value]
                        <br />
                        .mg-b-[value]
                        <br />
                        .mg-l-[value]
                      </code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                  <tr>
                    <td>
                      <code>
                        .mt-[value]
                        <br />
                        .me-[value]
                        <br />
                        .mb-[value]
                        <br />
                        .ms-[value]
                      </code>
                    </td>
                    <td>0 | 1 | 2 | 3 | 4 | 5</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Footer>
        </Card>
        <Card className="custom-card" id="mediamargin">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Media Query Margin</h6>
              <p className="text-muted  card-sub-title">
                You can also set a margin to a different media query using the
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
                      <code>
                        .mg-[breakpoint]-t-[value]
                        <br />
                        .mg-[breakpoint]-r-[value]
                        <br />
                        .mg-[breakpoint]-b-[value]
                        <br />
                        .mg-[breakpoint]-l-[value]
                      </code>
                    </td>
                    <td>
                      <p className="mg-b-5">
                        breakpoint: xs | sm | md | lg | xl
                      </p>
                      <p className="mg-b-0">
                        value: the margin value (refer to code above)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>
                        .mt-[breakpoint]-[value]
                        <br />
                        .me-[breakpoint]-[value]
                        <br />
                        .mb-[breakpoint]-[value]
                        <br />
                        .ms-[breakpoint]-[value]
                      </code>
                    </td>
                    <td>
                      <p className="mg-b-5">
                        breakpoint: xs | sm | md | lg | xl
                      </p>
                      <p className="mg-b-0">
                        value: the margin value (refer to code above)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="automargin">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Auto Margin</h6>
              <p className="text-muted  card-sub-title">
                You can also set a margin to a different media query using the
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
                      <code>.mg-t-auto</code> (or) <code>.mt-auto</code>
                    </td>
                    <td>Set a top margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-r-auto</code> (or) <code> .me-auto</code>
                    </td>
                    <td>Set a right margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-b-auto</code> (or) <code>.mb-auto</code>
                    </td>
                    <td>Set a bottom margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-l-auto</code> (or) <code>.ms-auto</code>
                    </td>
                    <td>Set a left margin to auto</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className="custom-card">
            <Card.Body className="component-item">
              <Nav className="nav flex-column">
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#setmargin">
                    Set Margin
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#mediamargin">
                    Media Query Margin
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#automargin">
                    Auto Margin
                  </Nav.Link></Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/4.jpg")} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1 tx-inverse">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/5.jpg")} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1 tx-inverse">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link to="#" className="btn ripple btn-secondary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  </Fragment>
);

Margin.propTypes = {};

Margin.defaultProps = {};

export default Margin;
