import React, { Fragment, useState } from "react";
import { Tooltip, OverlayTrigger, Button, Breadcrumb, Row, Col, Card, Form, Collapse } from "react-bootstrap";

const Tooltips = () => {
  const [BasicTToolips, setBasicTToolips] = useState(false)
  const [Colorhover, setColorhover] = useState(false)
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Tooltip</h2>
          <Breadcrumb >
            <Breadcrumb.Item href="#" >
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Tooltip
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
              variant="" type="button" className="btn btn-primary my-2 btn-icon-text">
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Default Tooltip</h6>
                <p className="text-muted card-sub-title">
                  Below are basic pagination navigation.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicTToolips(!BasicTToolips)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="main-content-label main-content-label-sm mg-b-10">
                Static Example
              </div>
              <div className="tooltip-static-demo mg-b-20">
                <Row className="row-sm">
                  <Col sm={6} lg={3} >
                    <div className="tooltip bs-tooltip-top" role="tooltip">
                      <div className="arrow"></div>
                      <div className="tooltip-inner">Tooltip on the bottom</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div className="tooltip bs-tooltip-bottom" role="tooltip">
                      <div className="arrow"></div>
                      <div className="tooltip-inner">Tooltip on the top</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div className="tooltip bs-tooltip-left" role="tooltip">
                      <div className="arrow"></div>
                      <div className="tooltip-inner">Tooltip on the left</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div className="tooltip bs-tooltip-right" role="tooltip">
                      <div className="arrow"></div>
                      <div className="tooltip-inner">Tooltip on the right</div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="main-content-label main-content-label-sm mg-b-10">
                Live Example
              </div>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row-sm tx-center">
                    <Col sm={6} lg={3} >
                      <div>
                        {["bottom"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="secondary">Hover me</Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </Col>
                    <Col sm={6} lg={3} className=" mg-t-30  mg-sm-t-0">
                      <div>
                        {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="primary">Hover me</Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </Col>
                    <Col sm={6} lg={3}>
                      <div>
                        {["left"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="info">Hover me</Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </Col>
                    <Col sm={6} lg={3}>
                      <div>
                        {["right"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="danger">Hover me</Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </div>
                <Collapse in={BasicTToolips}>
                  <pre>
                    <code>
                      {
                        `<div>
<div>
{["top"].map((placement) => (
<OverlayTrigger
key={placement}
placement={placement}
overlay={
<Tooltip id={"tooltip-${"placement}"}>
Tooltip on <strong>{placement}</strong>.
</Tooltip>
}
>
<Button
variant="primary">Hover me</Button>
</OverlayTrigger>
))}
</div>
<div>
{["bottom"].map((placement) => (
<OverlayTrigger
key={placement}
placement={placement}
overlay={
<Tooltip id={"tooltip-${"placement}"}>
Tooltip on <strong>{placement}</strong>.
</Tooltip>
}
>
<Button
variant="primary">Hover me</Button>
</OverlayTrigger>
))}
</div>
<div>
{["left"].map((placement) => (
<OverlayTrigger
key={placement}
placement={placement}
overlay={
<Tooltip id={"tooltip-${"placement}"}>
Tooltip on <strong>{placement}</strong>.
</Tooltip>
}
>
<Button
variant="primary">Hover me</Button>
</OverlayTrigger>
))}
</div>
<div>
{["right"].map((placement) => (
<OverlayTrigger
key={placement}
placement={placement}
overlay={
<Tooltip id={"tooltip-${"placement}"}>
Tooltip on <strong>{placement}</strong>.
</Tooltip>
}
>
<Button
variant="primary">Hover me</Button>
</OverlayTrigger>
))}
</div>
</div>


Note: In the place of <Tooltip id={"tooltip-${"placement}"}  remove the semicons replace with backtick symbols.
`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Colored Tooltip</h6>
                <p className="text-muted card-sub-title">
                  Colored tooltip. Four options are available: top, right, bottom,
                  and left aligned.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setColorhover(!Colorhover)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="main-content-label main-content-label-sm mg-b-10">
                Static Example
              </div>
              <div className="tooltip-static-demo mg-b-20">
                <Row className="row-sm">
                  <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                    <div
                      className="tooltip tooltip-primary bs-tooltip-top"
                      role="tooltip"
                    >
                      <div className="arrow"></div>
                      <div className="tooltip-inner">Tooltip on the top</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div
                      className="tooltip tooltip-secondary bs-tooltip-bottom"
                      role="tooltip"
                    >
                      <div className="arrow"></div>
                      <div className="tooltip-inner">Tooltip on the bottom</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div
                      className="tooltip tooltip-info bs-tooltip-left"
                      role="tooltip"
                    >
                      <div className="arrow"></div>
                      <div className="tooltip-inner">Tooltip on the left</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div
                      className="tooltip tooltip-danger bs-tooltip-right"
                      role="tooltip"
                    >
                      <div className="arrow"></div>
                      <div className="tooltip-inner">Tooltip on the right</div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="main-content-label main-content-label-sm mg-b-10">
                Live Example
              </div>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row-sm tx-center">
                    <Col sm={6} lg={3} className="">
                      <div>
                        {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip
                                className="tooltip tooltip-primary bs-tooltip-top"
                                id={`tooltip-${placement} `}
                              >
                                <strong> Tooltip on {placement}</strong>.
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="primary">Hover me</Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </Col>
                    <Col sm={6} lg={3}>
                      <div>
                        {["bottom"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip
                                className="tooltip tooltip-secondary bs-tooltip-bottom"
                                id={`tooltip-${placement} `}
                              >
                                <strong> Tooltip on {placement}</strong>.
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="secondary">Hover me</Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </Col>
                    <Col sm={6} lg={3}>
                      <div>
                        {["left"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip
                                className="tooltip tooltip-info bs-tooltip-left"
                                id={`tooltip-${placement} `}
                              >
                                <strong> Tooltip on {placement}</strong>.
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="info">Hover me</Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </Col>
                    <Col sm={6} lg={3}>
                      <div>
                        {["right"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip
                                className="tooltip tooltip-danger bs-tooltip-right"
                                id={`tooltip-${placement} `}
                              >
                                <strong> Tooltip on {placement}</strong>.
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="danger">Hover me</Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </div>
                <Collapse in={Colorhover}>
                  <pre>
                    <code>
                      {
                        `


                    <div>
                    {["top"].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                    <Tooltip
                    className="tooltip tooltip-primary bs-tooltip-top"
                    id={"tooltip-${"placement}"}
                    >
                    <strong> Tooltip on {placement}</strong>.
                    </Tooltip>
                    }
                    >
                    <Button
                    variant="primary">Hover me</Button>
                    </OverlayTrigger>
                    ))}
                    </div>

                    <div>
                    {["bottom"].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                    <Tooltip
                    className="tooltip tooltip-secondary bs-tooltip-bottom"
                    id={"tooltip-${`placement}`}
                    >
                    <strong> Tooltip on {placement}</strong>.
                    </Tooltip>
                    }
                    >
                    <Button
                    variant="secondary">Hover me</Button>
                    </OverlayTrigger>
                    ))}
                    </div>

                    <div>
                    {["left"].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                    <Tooltip
                    className="tooltip tooltip-info bs-tooltip-left"
                    id={'tooltip-${'placement}'}
                    >
                    <strong> Tooltip on {placement}</strong>.
                    </Tooltip>
                    }
                    >
                    <Button
                    variant="info">Hover me</Button>
                    </OverlayTrigger>
                    ))}
                    </div>



                    <div>
                    {["right"].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                    <Tooltip
                    className="tooltip tooltip-danger bs-tooltip-right"
                    id={'tooltip-${"placement}"}
                    >
                    <strong> Tooltip on {placement}</strong>.
                    </Tooltip>
                    }
                    >
                    <Button
                    variant="danger">Hover me</Button>
                    </OverlayTrigger>
                    ))}
                    </div>
            Note: In the place of <Tooltip id={"tooltip-${"placement}"} remove the semicons replace with backtick symbols.

            `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-xl-3 col-lg-12 d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <div className="card-body component-item">
                <nav className="nav flex-column">
                  <a className="nav-link" href="#default">
                    Default Tooltip
                  </a>
                  <a className="nav-link" href="#colored">
                    Colored Tooltip
                  </a>
                </nav>
              </div>
            </Card>
            <Card className="custom-card">
              <div className="card-body text-center">
                <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                  <i className="fe fe-user"></i>
                </div>
                <p className="mb-1 text-muted">Total Users</p>
                <h3 className="mb-0">34,789</h3>
              </div>
            </Card>
            <Card className="custom-card">
              <div className="card-body text-center">
                <div className="icon-service bg-secondary-transparent rounded-circle text-secondary">
                  <i className="fe fe-trending-up"></i>
                </div>
                <p className="mb-1 text-muted">Total Sales</p>
                <h3 className="mb-0">98,674</h3>
              </div>
            </Card>
            <Card className="custom-card">
              <div className="card-body text-center">
                <div className="icon-service bg-info-transparent rounded-circle text-info">
                  <i className="fe fe-dollar-sign"></i>
                </div>
                <p className="mb-1 text-muted">Total Profits</p>
                <h3 className="mb-0">
                  <span>$</span>45,078
                </h3>
              </div>
            </Card>
          </div>
        </div>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}


Tooltips.propTypes = {};

Tooltips.defaultProps = {};

export default Tooltips;
