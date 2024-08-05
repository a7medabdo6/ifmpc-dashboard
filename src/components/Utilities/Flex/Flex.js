import React, { Fragment } from 'react';
import { Row, Card, Col, Button, Breadcrumb, Nav, } from "react-bootstrap";
const Flex = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Flex</h2>
        <Breadcrumb >
          <Breadcrumb.Item href="#"> Utilities </Breadcrumb.Item>
          <Breadcrumb.Item active > Flex</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button
            variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button
            variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button
            variant="primary"
            type="button"
            className=" my-2 btn-icon-text"
          >
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <Row className=" row-sm">
      <Col xl={9} lg={12} md={12}>
        <Card className="custom-card" id="enable">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Enable Flex</h6>
              <p className="text-muted  card-sub-title">
                Apply display utilities to create a flexbox container and
                transform direct children elements into flex items.
              </p>
            </div>
            <div className="d-flex pd-10 bg-light">
              I'm a flexbox container!
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="direc">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Direction</h6>
              <p className="text-muted  card-sub-title">
                Set the direction of flex items in a flex container with
                direction utilities.
              </p>
            </div>
            <div>
              <div className="d-flex flex-row bg-light mg-b-20">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row-reverse bg-light">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="justcont">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Justify Content</h6>
              <p className="text-muted  card-sub-title">
                Use justify-content utilities on flexbox containers to change
                the alignment of flex items on the main axis.
              </p>
            </div>
            <div>
              <div className="d-flex flex-row justify-content-start bg-light mg-b-20">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-end bg-light mg-b-20">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-center bg-light mg-b-20">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-between bg-light mg-b-20">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-around bg-light">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="alignitems">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Align Items</h6>
              <p className="text-muted  card-sub-title">
                Use align-items utilities on flexbox containers to change the
                alignment of flex items on the cross axis.
              </p>
            </div>
            <div>
              <div className="d-flex flex-row align-items-start bg-light ht-100 mg-b-20">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-center bg-light ht-100 mg-b-20">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-end bg-light ht-100 mg-b-20">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-stretch bg-light ht-100">
                <div className="pd-10 bg-gray-100">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="alignself">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Align Self</h6>
              <p className="text-muted  card-sub-title">
                Use align-self utilities on flexbox items to individually change
                their alignment on the cross axis.
              </p>
            </div>
            <div>
              <div className="d-flex flex-row bg-light ht-100 mg-b-20">
                <div className="pd-10 bg-gray-100 align-self-start">
                  Flex item 1
                </div>
                <div className="pd-10 bg-gray-300 align-self-center">
                  Flex item 2
                </div>
                <div className="pd-10 bg-gray-400 align-self-end">
                  Flex item 3
                </div>
                <div className="pd-10 bg-gray-500 align-self-stretch">
                  Flex item 4
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="fill">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Fill</h6>
              <p className="text-muted  card-sub-title">
                Use the <code>.flex-fill</code> className on a series of sibling
                elements to force them into widths equal to their content.
              </p>
            </div>
            <div>
              <div className="d-flex bg-light">
                <div className="pd-10 bg-gray-100 flex-fill">
                  Flex item with a lot of content
                </div>
                <div className="pd-10 bg-gray-300 flex-fill">Flex item</div>
                <div className="pd-10 bg-gray-400 flex-fill">Flex item</div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="grow">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Grow and Shrink</h6>
              <p className="text-muted  card-sub-title">
                Use <code>.flex-grow</code> utilities to toggle a flex item’s
                ability to grow to fill available space.
              </p>
            </div>
            <div>
              <div className="d-flex bg-light">
                <div className="pd-10 bg-gray-100 flex-grow-1">Flex item</div>
                <div className="pd-10 bg-gray-300">Flex item</div>
                <div className="pd-10 bg-gray-400">Third flex item</div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="automargin">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Auto Margins</h6>
              <p className="text-muted  card-sub-title">
                Flexbox can do some pretty awesome things when you mix flex
                alignments with auto margins.
              </p>
            </div>
            <div>
              <div className="d-flex bg-light">
                <div className="pd-10 bg-gray-100">Flex item</div>
                <div className="pd-10 bg-gray-300">Flex item</div>
                <div className="pd-10 bg-gray-400 mg-l-auto">
                  Third flex item
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="order">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Order</h6>
              <p className="text-muted  card-sub-title">
                Change the visual order of specific flex items with a handful of
                order utilities.
              </p>
            </div>
            <div>
              <div className="d-flex bg-light">
                <div className="pd-10 bg-gray-100 order-3">First Item</div>
                <div className="pd-10 bg-gray-300 order-2">Second Item</div>
                <div className="pd-10 bg-gray-400 order-1">Third Item</div>
              </div>
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
                  <Nav.Link className="nav-link" href="#enable">
                    Enable Flex
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#direc">
                    Direction
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#justcont">
                    Justify Content
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#alignitems">
                    Align Items
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#alignself">
                    Align Self
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#fill">
                    Fill
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#grow">
                    Grow and Shrink
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#automargin">
                    Auto Margins
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#order">
                    Order
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="custom-card-header">
              <h6 className="main-content-label mb-3">Project Status</h6>
            </Card.Header>
            <div className="">
              <div className="list d-flex align-items-center p-3">
                <span
                  className="peity-donut"
                  data-peity='{ "fill": ["#38d250", "#77778e33"], "innerRadius": 14, "radius": 20 }'
                >
                  1
                </span>
                <div className="wrappe ms-3">
                  <h6 className="mb-1">Project Planning</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="mb-0 text-muted">
                        <i className="fas fa-check-circle me-2"></i>100%
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center p-3 border-top">
                <span
                  className="peity-donut"
                  data-peity='{ "fill": ["#38d250", "#77778e33"], "innerRadius": 14, "radius": 20 }'
                >
                  1
                </span>
                <div className="wrappe ms-3">
                  <h6 className="mb-1">Project Desiging</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="mb-0 text-muted">
                        <i className="fas fa-check-circle me-2"></i>100%
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center p-3 border-top">
                <span
                  className="peity-donut"
                  data-peity='{ "fill": ["#53caed", "#77778e33"], "innerRadius": 14, "radius": 20 }'
                >
                  4/6
                </span>
                <div className="wrappe ms-3">
                  <h6 className="mb-1">Project Development</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="mb-0 text-muted">
                        <i className="fas fa-spinner me-2"></i>76% Progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center  p-3 border-top">
                <span
                  className="peity-donut"
                  data-peity='{ "fill": ["#f16d75", "#77778e33"], "innerRadius": 14, "radius": 20 }'
                >
                  1/5
                </span>
                <div className="wrappe ms-3">
                  <h6 className="mb-1">Project Testing</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="mb-0 text-muted">
                        <i className="fas fa-info-circle me-2"></i>Waiting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Flex.propTypes = {};

Flex.defaultProps = {};

export default Flex;
