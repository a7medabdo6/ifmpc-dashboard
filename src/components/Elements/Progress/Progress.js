import React, { Fragment, useState } from "react";
import { Breadcrumb, Button, Card, ProgressBar, Row, Col, Form, Collapse } from "react-bootstrap";
const now = 50;
const Progress = () => {
  const [BasicProgress, setBasicProgress] = useState(false);
  const [StripedProgress, setStripedProgress] = useState(false);
  const [ProgressSizes, setProgressSizes] = useState(false);
  const [ProgressLabel, setProgressLabel] = useState(false);
  const [AnimatedBars, setAnimatedBars] = useState(false);
  const [MultipleBars, setMultipleBars] = useState(false);
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Progress</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#" >
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Progress
            </Breadcrumb.Item>
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
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fg-filter me-2"></i> Filter
            </Button>
            <Button
              variant="primary" type="button" className=" my-2 btn-icon-text">
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row row-sm">
        <Col xl={9} lg={12} className="col-xl-9 col-lg-12">
          <Card className=" custom-card" id="basic">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Basic Progress</h6>
                <p className="text-muted card-sub-title">
                  A basic progress in all different colors.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicProgress(!BasicProgress)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar variant="primary" now={45} className=" mg-b-20 " />
                  <ProgressBar variant="secondary" now={55} className=" mg-b-20" />
                  <ProgressBar variant="info" now={65} className="mg-b-20" />
                  <ProgressBar variant="warning" now={75} className="mg-b-20" />
                  <ProgressBar variant="success" now={85} className=" mg-b-20" />
                </div>
                <Collapse in={BasicProgress}>
                  <pre>
                    <code>
                      {
                        `

<ProgressBar variant="primary" now={45} className=" mg-b-20 " />
<ProgressBar variant="secondary" now={55} className=" mg-b-20" />
<ProgressBar variant="info" now={65} className="mg-b-20" />
<ProgressBar variant="warning" now={75} className="mg-b-20" />
<ProgressBar variant="success" now={85} className=" mg-b-20" />

                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="striped">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Striped Progress</h6>
                <p className="text-muted card-sub-title">
                  A basic progress in all different colors.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setStripedProgress(!StripedProgress)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar striped variant="primary" now={45} className="mg-b-20" />
                  <ProgressBar striped variant="secondary" now={55} className="mg-b-20" />
                  <ProgressBar striped variant="info" now={65} className="mg-b-20" />
                  <ProgressBar striped variant="warning" now={75} className="mg-b-20" />
                  <ProgressBar striped variant="success" now={85} className="mg-b-20" />
                </div>
                <Collapse in={StripedProgress}>
                  <pre>
                    <code>
                      {
                        `

<ProgressBar striped variant="primary" now={45} className="mg-b-20"/>
<ProgressBar striped variant="secondary" now={55} className="mg-b-20"/>
<ProgressBar striped variant="info" now={65} className="mg-b-20"/>
<ProgressBar striped variant="warning" now={75} className="mg-b-20"/>
<ProgressBar striped variant="success" now={85} className="mg-b-20"/>

                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="sizes">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Progress Sizes</h6>
                <p className="text-muted card-sub-title">
                  A basic progress in different sizes.
                </p>
                <span className="tx-uppercase tx-11 d-block mg-b-5">
                  Size Super Extra Small
                </span>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setProgressSizes(!ProgressSizes)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar now={45} className=" ht-2 mg-b-10" variant="default" />
                  <ProgressBar now={55} className=" ht-2 mg-b-10" variant="secondary" />
                  <ProgressBar now={65} className=" ht-2 mg-b-10" variant="info" />
                </div>
                <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
                  Size Extra Small
                </span>
                <div className="text-wrap">
                  <div className="example">
                    <ProgressBar now={45} className="mg-b-10" />
                    <ProgressBar now={55} className=" mg-b-10" variant="secondary" />
                    <ProgressBar now={65} className=" mg-b-10" variant="info" />
                  </div>
                </div>
                <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
                  Size Small
                </span>
                <div className="text-wrap">
                  <div className="example">
                    <ProgressBar now={25} className="  mg-b-10" variant="default" />
                    <ProgressBar now={35} className=" mg-b-10" variant="secondary" />
                    <ProgressBar now={45} className="  mg-b-10" variant="info" />
                  </div>
                </div>
                <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
                  Size Normal
                </span>
                <div className="text-wrap">
                  <div className="example">
                    <ProgressBar now={25} className="mg-b-10" variant="default" />
                    <ProgressBar now={35} className=" mg-b-10" variant="secondary" />
                    <ProgressBar now={45} className=" mg-b-10" variant="info" />
                  </div>
                </div>
                <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
                  Size Large
                </span>
                <div className="text-wrap">
                  <div className="example">
                    <ProgressBar now={25} className=" mg-b-10" variant="default" />
                    <ProgressBar now={35} className="  mg-b-10" variant="secondary" />
                    <ProgressBar now={45} className="  mg-b-10" variant="info" />
                  </div>
                  <Collapse in={ProgressSizes}>
                    <pre>
                      <code>
                        {
                          `

<div className="example">
<ProgressBar now={45} className=" ht-2 mg-b-10" variant="default" />
<ProgressBar now={55} className=" ht-2 mg-b-10" variant="secondary" />
<ProgressBar now={65} className=" ht-2 mg-b-10" variant="info" />
</div>
<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
Size Extra Small
</span>
<div className="text-wrap">
<div className="example">
<ProgressBar now={45} className="mg-b-10" />
<ProgressBar now={55} className=" mg-b-10" variant="secondary" />
<ProgressBar now={65} className=" mg-b-10" variant="info" />
</div>
</div>
<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
Size Small
</span>
<div className="text-wrap">
<div className="example">
<ProgressBar now={25} className="  mg-b-10" variant="default" />
<ProgressBar now={35} className=" mg-b-10" variant="secondary" />
<ProgressBar now={45} className="  mg-b-10" variant="info" />
</div>
</div>
<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
Size Normal
</span>
<div className="text-wrap">
<div className="example">
<ProgressBar now={25} className="mg-b-10" variant="default" />
<ProgressBar now={35} className=" mg-b-10" variant="secondary" />
<ProgressBar now={45} className=" mg-b-10" variant="info" />
</div>
</div>
<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
Size Large
</span>
<div className="text-wrap">
<div className="example">
<ProgressBar now={25} className=" mg-b-10" variant="default" />
<ProgressBar now={35} className="  mg-b-10" variant="secondary" />
<ProgressBar now={45} className="  mg-b-10" variant="info" />
</div>
</div>
                        `
                        }

                      </code>
                    </pre>
                  </Collapse>
                </div>


              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="label">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Progress Label</h6>
                <p className="text-muted card-sub-title">
                  A basic progress in different sizes.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setProgressLabel(!ProgressLabel)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar className="mg-b-10" now={50} label={`${now}%`} />
                  <br />
                  <ProgressBar className=" mg-b-10" variant="secondary" now={75} label={`${now}%`} />
                  <br />
                  <ProgressBar
                    className=" mg-b-10"
                    variant="info"
                    now={95}
                    label={`${now}%`}
                  />
                  <br />
                </div>
                <Collapse in={ProgressLabel}>
                  <pre>
                    <code>
                      {
                        `
export const Landingpageapp = () => {
const now= 50;
return (
<Fragment>
<ProgressBar className="mg-b-10" now={50} label={"${now}%"} />
<br />
<ProgressBar className=" mg-b-10" variant="secondary" now={75} label={"${now}%"} />
<br />
<ProgressBar
className=" mg-b-10"
variant="info"
now={95}
label={"${now}%"}
</Fragment>
notes:In the place of $ before "" replace with backticks symbol.
);
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>

          <Card className=" custom-card" id="animate">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Animated Bars</h6>
                <p className="text-muted card-sub-title">
                  The striped gradient can also be animated. Add
                  <code>.progress-bar-animated</code> to
                  <code>.progress-bar</code> to animate the stripes right to left
                  via CSS3 animations.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setAnimatedBars(!AnimatedBars)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>

            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar animated now={45} className=" mg-b-10" />
                  <ProgressBar animated now={55} className=" mg-b-10" variant="secondary" />
                  <ProgressBar animated now={65} className=" mg-b-10" variant="info" />
                  <ProgressBar animated now={75} className="mg-b-10" variant="danger" />
                  <ProgressBar animated now={85} className=" mg-b-10" variant="warning" />
                  <ProgressBar animated now={95} className=" mg-b-10" variant="success" />
                </div>
                <Collapse in={AnimatedBars}>
                  <pre>
                    <code>
                      {
                        `
 <ProgressBar animated now={45} className=" mg-b-10" />
                  <ProgressBar animated now={55} className=" mg-b-10" variant="secondary" />
                  <ProgressBar animated now={65} className=" mg-b-10" variant="info" />
                  <ProgressBar animated now={75} className="mg-b-10" variant="danger" />
                  <ProgressBar animated now={85} className=" mg-b-10" variant="warning" />
                  <ProgressBar animated now={95} className=" mg-b-10" variant="success" />
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="multiple">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Multiple Bars</h6>
                <p className="text-muted card-sub-title">
                  Include multiple progress bars in a progress component if you
                  need.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setMultipleBars(!MultipleBars)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar className=" mg-b-10">
                    <ProgressBar variant="default" now={15} key={1} />
                    <ProgressBar variant="secondary" now={15} key={2} />
                    <ProgressBar variant="info" now={15} key={3} />
                  </ProgressBar>
                  <ProgressBar className=" mg-b-10">
                    <ProgressBar variant="danger" now={15} key={1} />
                    <ProgressBar variant="success" now={15} key={2} />
                    <ProgressBar variant="warning" now={15} key={3} />
                  </ProgressBar>
                  <ProgressBar className=" mg-b-10">
                    <ProgressBar variant="default" now={15} key={1} />
                    <ProgressBar variant="dark" now={15} key={2} />
                    <ProgressBar />
                  </ProgressBar>
                </div>
                <Collapse in={MultipleBars}>
                  <pre>
                    <code>
                      {
                        `
<ProgressBar className=" mg-b-10">
<ProgressBar variant="default" now={15} key={1} />
<ProgressBar variant="secondary" now={15} key={2} />
<ProgressBar variant="info" now={15} key={3} />
</ProgressBar>
<ProgressBar className=" mg-b-10">
<ProgressBar variant="danger" now={15} key={1} />
<ProgressBar variant="success" now={15} key={2} />
<ProgressBar variant="warning" now={15} key={3} />
</ProgressBar>
<ProgressBar className=" mg-b-10">
<ProgressBar variant="default" now={15} key={1} />
<ProgressBar variant="dark" now={15} key={2} />
<ProgressBar />
</ProgressBar>
 
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className=" custom-card">
              <div className="">
                <div className="p-3">
                  <h6>HTML Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>35%</span>
                    </div>

                    <ProgressBar className='xs' now={35} variant="primary"
                    />
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Wordpress Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>50%</span>
                    </div>
                    <ProgressBar className='xs' now={50} variant="secondary"
                    />
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Angular Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>40%</span>
                    </div>

                    <ProgressBar className='xs' now={40} variant="info" />
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>React Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>10%</span>
                    </div>
                    <ProgressBar className='xs' now={10} variant="danger" />
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>PHP Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>70%</span>
                    </div>

                    <ProgressBar className='xs'
                      now={70}
                      // className=""
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
}

Progress.propTypes = {};

Progress.defaultProps = {};

export default Progress;
