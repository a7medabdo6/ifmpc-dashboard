import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  ProgressBar,
  Row,
  Form,
  Collapse,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";

const Popovers = () => {
  const [DefaultPopoverexample, setDefaultPopoverexample] = useState(false);
  const [ColoredHeadPopover, setColoredHeadPopover] = useState(false);
  const [FullColoredPopover, setFullColoredPopover] = useState(false);
  

  const data = [
    { colors: "primary", name: "top" },
    { colors: "warning", name: "right" },
    { colors: "info", name: "left" },
    { colors: "danger", name: "bottom" },
  ];
  const datas = [
    {
      color: "primary",
      name: "top",
    },
{
  color: "secondary",
  name: "top",
}

  ]
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Popover</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Elements</Breadcrumb.Item>
            <Breadcrumb.Item active>Popover</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              type="button"
              variant="white"
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
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" id="static">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Static Example</h6>
                <p className="text-muted card-sub-title">
                  Documentation and examples for adding Bootstrap popovers, like
                  those found in iOS, to any element on your site.
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="popover-static-demo">
                <Row className="row-sm">
                  <div className="col-md-6">
                    <div className="popover bs-popover-top">
                      <div className="arrow"></div>
                      <h3 className="popover-header">Popover bottom</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mg-t-30 mg-md-t-0">
                    <div className="popover bs-popover-bottom">
                      <div className="arrow"></div>
                      <h3 className="popover-header">Popover top</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mg-t-30">
                    <div className="popover bs-popover-left">
                      <div className="arrow"></div>
                      <h3 className="popover-header">Popover Left</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mg-t-30">
                    <div className="popover bs-popover-right">
                      <div className="arrow"></div>
                      <h3 className="popover-header">Popover Right</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="default">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Default Popover</h6>
                <p className="text-muted card-sub-title">
                  Documentation and examples for adding Bootstrap popovers, like
                  those found in iOS, to any element on your site.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setDefaultPopoverexample(!DefaultPopoverexample)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row row-sm tx-center">
                    <>
                      {data.map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={Math.random()}
                          placement={placement.name}
                          overlay={
                            <Popover
                              id={`popover-positioned-${placement.name}`}
                              style={{ margin: 0 }}
                            >
                              <Popover.Header as="h3">{`Popover ${placement.name}`}</Popover.Header>
                              <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this
                                info.
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Col sm={6} lg={3} className=" mg-t-30 mg-lg-t-0">
                            <Button variant={`${placement.colors}`}>
                              Popover on {placement.name}
                            </Button>
                          </Col>
                        </OverlayTrigger>
                      ))}
                    </>
                  </Row>
                </div>
                <Collapse in={DefaultPopoverexample}>
                  <pre>
                    <code>
                      {`
export function Popoverbottom() {
const [show, setShow] = useState(false);
const [target, setTarget] = useState(null);
const ref = useRef(null);

const handleClick = (event) => {
setShow(!show);
setTarget(event.target);
};

return (
<div ref={ref}>
<Button onClick={handleClick} variant="secondary">
Popover Bottom
</Button>

<Overlay
show={show}
target={target}
placement="bottom"
container={ref}
containerPadding={20}
>
<Popover id="popover-contained">
<Popover.Header as="h3" variant="default">
POPOVER Bottom
</Popover.Header>
<Popover.Body>
<strong>
Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
</strong>
</Popover.Body>
</Popover>
</Overlay>
</div>
);
}
                        `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Row className="row-sm">
            <Col lg={12}>
              <Card className="custom-card" id="color">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">
                      Colored Head Popover
                    </h6>
                    <p className="text-muted card-sub-title">
                      A demonstration of colored title background of popover
                      available in all four directions.
                    </p>
                  </div>
                  <Form.Check
                    className="mb-3 mb-sm-0"
                    aria-controls="example-collapse-text"
                    onClick={() => setColoredHeadPopover(!ColoredHeadPopover)}
                    type="switch"
                    label="ShowCode"
                  />
                </Card.Header>
                <Card.Body>
                  <div className="text-wrap">
                    <div className="example">
                      <div className="btn btn-list d-flex">
                      {datas.map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={Math.random()}
                          placement={placement.name}
                          overlay={
                            <Popover
                              id={`popover-positioned-${placement.name}`}
                              style={{ margin: 0 }}
                            >
                                <Popover.Header className={`bg-${placement.color} popover-${placement.color} `} as="h3">{`popover ${placement.name}`}</Popover.Header>
                              <Popover.Body  >
                              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                              </Popover.Body>
                            </Popover>
                          }
                        >
                       
                            <Button variant={`${placement.color}`} className="me-2 popover-body ">
                              Header Color
                            </Button>
                       
                        </OverlayTrigger>
                      ))}
                      </div>
                    </div>

                    <Collapse in={ColoredHeadPopover}>
                      <pre>
                        <code>
                          {`
export function Popoverheader1() {
const [show, setShow] = useState(false);
const [target, setTarget] = useState(null);
const ref = useRef(null);

const handleClick = (event) => {
setShow(!show);
setTarget(event.target);
};

return (
<div ref={ref}>
<Button onClick={handleClick} variant="primary" className="me-2">
Color Header
</Button>

<Overlay
show={show}
target={target}
placement="top"
container={ref}
containerPadding={20}
>
<Popover id="popover-contained">
<Popover.Header as="h3" variant="primary" className="head-secondary">
POPOVER TOP
</Popover.Header>
<Popover.Body>
<strong>
Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
</strong>
</Popover.Body>
</Popover>
</Overlay>
</div>
);
}
                        `}
                        </code>
                      </pre>
                    </Collapse>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="custom-card" id="full">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">
                      Full Colored Popover
                    </h6>
                    <p className="text-muted card-sub-title">
                      A demonstration of colored body background of popover
                      available in all four directions.
                    </p>
                  </div>
                  <Form.Check
                    className="mb-3 mb-sm-0"
                    aria-controls="example-collapse-text"
                    onClick={() => setFullColoredPopover(!FullColoredPopover)}
                    type="switch"
                    label="ShowCode"
                  />
                </Card.Header>
                <Card.Body>
                  <div className="text-wrap">
                    <div className="example">
                      <div className="btn btn-list d-flex">
                        
                       
                      {datas.map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={Math.random()}
                          placement={placement.name}
                          overlay={
                            <Popover
                              id={`popover-positioned-${placement.name}`}
                              style={{ margin: 0 }}
                              className={`bg-${placement.color} popover-${placement.color} `}
                            >
                                <Popover.Header as="h3">{`popover ${placement.name}`}</Popover.Header>
                              <Popover.Body className={`bg-${placement.color}`} >
                              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                              </Popover.Body>
                            </Popover>
                          }
                        >
                       
                            <Button variant={`${placement.color}`} className="me-2 popover-body ">
                              Full Color
                            </Button>
                       
                        </OverlayTrigger>
                      ))}
                 
                      </div>
                    </div>
                    <Collapse in={FullColoredPopover}>
                      <pre>
                        <code>
                          {`
export function Popoverscreen2() {
const [show, setShow] = useState(false);
const [target, setTarget] = useState(null);
const ref = useRef(null);

const handleClick = (event) => {
setShow(!show);
setTarget(event.target);
};

return (
<div ref={ref}>
<Button onClick={handleClick} variant="primary" className="me-2 popover-body">
Color Header
</Button>

<Overlay
show={show}
target={target}
placement="top"
container={ref}
containerPadding={20}
>
<Popover id="popover-contained" className="bg-primary popover-primary">
<Popover.Body className="bg-primary">
<p>POPOVER TOP</p>
<strong>
Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
</strong>
</Popover.Body>
</Popover>
</Overlay>
</div>
);
}
                        `}
                        </code>
                      </pre>
                    </Collapse>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <div className="">
                <div className="p-3">
                  <h6>HTML Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>35%</span>
                    </div>
                    <ProgressBar now={60} className="progress-bar-xs" />
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Wordpress Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>50%</span>
                    </div>
                    <ProgressBar
                      now={50}
                      className="progress-bar-xs"
                      variant="secondary"
                    />
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Angular Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>40%</span>
                    </div>
                    <ProgressBar
                      now={40}
                      className="progress-bar-xs"
                      variant="info"
                    />
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>React Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>10%</span>
                    </div>
                    <ProgressBar
                      now={10}
                      className="progress-bar-xs"
                      variant="danger"
                    />
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>PHP Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>70%</span>
                    </div>
                    <ProgressBar
                      now={70}
                      className="progress-bar-xs"
                      variant="success"
                    />
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
};

Popovers.propTypes = {};

Popovers.defaultProps = {};

export default Popovers;
