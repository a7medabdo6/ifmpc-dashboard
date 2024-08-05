import React, { Fragment } from 'react';
import { Row, Card, Col, Button, Table, Breadcrumb, Nav, } from "react-bootstrap";

const Width = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Width</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"> Utilities </Breadcrumb.Item>
          <Breadcrumb.Item active > Width </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white" type="button" className="btn-icon-text my-2 me-2" ><i className="fe fe-download me-2"></i> Import</Button>
          <Button variant="white" type="button" className="btn-icon-text my-2 me-2"><i className="fe fe-filter me-2"></i> Filter</Button>
          <Button variant="primary" type="button" className=" my-2 btn-icon-text"><i className="fe fe-download-cloud me-2"></i> Download Report</Button>
        </div>
      </div>
    </div>
    <Row className="row-sm">
      <Col xl={9} lg={12}>
        <Card className="custom-card" id="set">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Set Width</h6>
              <p className="text-muted  card-sub-title">
                You can set a width to an element instantly by using the
                following utilities classNamees for width.
              </p>
            </div>
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center wd-80 ht-80 bg-light">
                .wd-80
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-light mg-l-20">
                .wd-150
              </div>
              <div className="d-flex align-items-center justify-content-center wd-100 ht-80 bg-light mg-l-20">
                .wd-100
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Regular Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
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
                    <th className="wd-30p">Bigger Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
                    </td>
                    <td>
                      150 | 200 | 250 | 300 | ... | 1000 &nbsp; (step of 50)
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
              <h6 className="main-content-label mb-1">Percentage Width</h6>
              <p className="text-muted  card-sub-title">
                You can set a width through percentage using the following
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
                      <code>.wd-[value]p</code>
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
              <h6 className="main-content-label mb-1">Media Query Width</h6>
              <p className="text-muted  card-sub-title">
                You can also set a width to a different media query using the
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
                      <code>.wd-[size]-[value]</code>
                    </td>
                    <td rowSpan="2">
                      <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">
                        value: the width value (refer to code above)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.wd-[size]-[value]p</code>
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
                Extra Width classNamees
              </h6>
              <p className="text-muted  card-sub-title">
                You can also set a width using the extra utilities classNamees
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
                      <code>.wd-100v</code>
                    </td>
                    <td>Set a width to an element based on viewport width.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.wd-auto</code>
                    </td>
                    <td>Set an auto width to an element.</td>
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
            <Card.Body className="card-body component-item">
              <Nav className="nav flex-column">
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#set">
                    Set Width
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#percentage">
                    Percentage Width
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#media">
                    Media Query Width
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#extra">
                    Extra Width classNamees
                  </Nav.Link></Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card className="custom-card">
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

Width.propTypes = {};

Width.defaultProps = {};

export default Width;
