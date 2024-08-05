import React, { Fragment } from 'react';
import { Row, Card, Col, Button, Table, Breadcrumb, Nav, } from "react-bootstrap";

const Position = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Position</h2>
        <Breadcrumb >
          <Breadcrumb.Item href="#">Utilities</Breadcrumb.Item>
          <Breadcrumb.Item active > Position</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white" type="button" className="btn-icon-text my-2 me-2"><i className="fe fe-download me-2"></i> Import</Button>
          <Button variant="white" type="button" className="btn-icon-text my-2 me-2"><i className="fe fe-filter me-2"></i> Filter</Button>
          <Button variant="primary" type="button" className="btn btn-primary my-2 btn-icon-text"><i className="fe fe-download-cloud me-2"></i> Download Report</Button>
        </div>
      </div>
    </div>

    <Row className="row-sm">
      <Col xl={9} lg={12}>
        <Card className=" custom-card" id="setposition">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Set Position</h6>
              <p className="text-muted  card-sub-title">
                You can set a position to an element instantly by using the
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
                      <code>.pos-relative</code>
                    </td>
                    <td>Set a relative position to an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.pos-absolute</code>
                    </td>
                    <td>Set an absolute position to an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.pos-fixed</code>
                    </td>
                    <td>Set a fixed position to an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.pos-static</code>
                    </td>
                    <td>Set a static position to an element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className=" custom-card" id="cornering">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Cornering</h6>
              <p className="text-muted  card-sub-title">
                You can set a top,right,bottom and left position to an element
                using the following utilities classNamees.
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
                      <code>.t-[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.r-[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.b-[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.l-[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className=" custom-card" id="zyposition">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">X and Y Position</h6>
              <p className="text-muted  card-sub-title">
                You can set a top,right,bottom and left position to an element
                using the following utilities classNamees.
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
                      <code>.t-[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.r-[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.b-[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.l-[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className=" custom-card" id="negative">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Negative Corner</h6>
              <p className="text-muted  card-sub-title">
                You can set a negative positioning to an element using the
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
                      <code>.t--[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.r--[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.b--[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.l--[value]</code>
                    </td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className=" custom-card" id="zindex">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Z-Index Property</h6>
              <p className="text-muted  card-sub-title">
                You can set a z-index to an element instantly using the
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
                      <code>.z-index-[value]</code>
                    </td>
                    <td>10 | 50 | 100 | 150 | 200</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className=" custom-card">
            <Card.Body className="card-body component-item">
              <Nav className="nav flex-column">
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#setposition">
                    Set Position
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#cornering">
                    Cornering
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#zyposition">
                    X and Y Position
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#negative">
                    Negative Corner
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#zindex">
                    Z-Index Property
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
    {/* <!-- End Row --> */}
  </Fragment>
);

Position.propTypes = {};

Position.defaultProps = {};

export default Position;
