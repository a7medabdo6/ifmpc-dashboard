import React, { Fragment, useState } from "react";
import { Spinner, Button, Breadcrumb, Row, Col, Card, Form, Collapse } from "react-bootstrap";


const Spinners = () => {
  const [BorderSpinners, setBorderSpinners] = useState(false);
  const [BorderColors, setBorderColors] = useState(false);
  const [GrowingSpinner, setGrowingSpinner] = useState(false);
  const [Spinnersize, setSpinnersize] = useState(false);
  const [ButtonwithSpinners, setButtonwithSpinners] = useState(false);
  const [Spinnergrow, setSpinnergrow] = useState(false);
  const [SpinnerAlign, setSpinnerAlign] = useState(false);
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Spinners</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#" >
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Spinners
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className="= btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              type="button"
              variant="white"
              className="= btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>

            <Button type="button" variant="primary" className="my-2 btn-icon-text">
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" id="bspinner">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Border Spinners</h6>
                <p className="text-muted card-sub-title">
                  Use the border spinners for a lightweight loading indicator.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBorderSpinners(!BorderSpinners)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
                <Collapse in={BorderSpinners}>
                  <pre>
                    <code>
                      {
                        `
<Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>
`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="bcolor">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Border Colors</h6>
                <p className="text-muted card-sub-title">
                  You can use any of our text color utilities on the standard
                  spinner.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBorderColors(!BorderColors)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <Spinner animation="border" variant="primary" />
                  <Spinner animation="border" variant="secondary" />
                  <Spinner animation="border" variant="success" />
                  <Spinner animation="border" variant="danger" />
                  <Spinner animation="border" variant="warning" />
                  <Spinner animation="border" variant="info" />
                  <Spinner animation="border" variant="light" />
                  <Spinner animation="border" variant="dark" />
                </div>
                <Collapse in={BorderColors}>
                  <pre>
                    <code>
                      {
                        `
<Spinner animation="border" variant="primary"/>
<Spinner animation="border" variant="secondary"/>
<Spinner animation="border" variant="success" />
<Spinner animation="border" variant="danger" />
<Spinner animation="border" variant="warning" />
<Spinner animation="border" variant="info" />
<Spinner animation="border" variant="light" />
<Spinner animation="border" variant="dark" />


`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Row className="row-sm">
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">Circle Loader</h6>
                    <p className="text-muted card-sub-title">
                      css loading animations
                    </p>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <div className="lds-circle">
                      <div></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders1">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">Ring Loader</h6>
                    <p className="text-muted card-sub-title">
                      css loading animations
                    </p>
                  </div>

                </Card.Header>
                <Card.Body>

                  <div className="text-center">
                    <div className="lds-dual-ring"></div>

                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders2">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">Lines Loader</h6>
                    <p className="text-muted card-sub-title">
                      css loading animations
                    </p>
                  </div>
                </Card.Header>
                <Card.Body>

                  <div className="text-center">
                    <div className="lds-facebook">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders3">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">Heart Loader</h6>
                    <p className="text-muted card-sub-title">
                      css loading animations
                    </p>
                  </div>
                </Card.Header>
                <Card.Body>

                  <div className="text-center">
                    <div className="lds-heart">
                      <div></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders4">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">Ripple Loader</h6>
                    <p className="text-muted card-sub-title">
                      css loading animations
                    </p>
                  </div>

                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders5">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">Spinner Loader</h6>
                    <p className="text-muted card-sub-title">
                      css loading animations
                    </p>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <div className="lds-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="custom-card" id="gspinner">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Growing Spinner</h6>
                <p className="text-muted card-sub-title">
                  If you don’t fancy a border spinner, switch to the grow spinner.
                  While it doesn’t technically spin, it does repeatedly grow!
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setGrowingSpinner(!GrowingSpinner)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Spinner animation="grow" />
                </div>
                <Collapse in={GrowingSpinner}>
                  <pre>
                    <code>
                      {
                        `

<div className="example">
<Spinner animation="grow" />
</div>

`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="gcolor">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Growing Color</h6>
                <p className="text-muted card-sub-title">
                  If you don’t fancy a border spinner, switch to the grow spinner.
                  While it doesn’t technically spin, it does repeatedly grow!
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setSpinnergrow(!Spinnergrow)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="light" />
                  <Spinner animation="grow" variant="dark" />
                </div>
                <Collapse in={Spinnergrow}>
                  <pre>
                    <code>
                      {
                        `
<Spinner animation="grow" variant="primary" />
<Spinner animation="grow" variant="secondary" />
<Spinner animation="grow" variant="success" />
<Spinner animation="grow" variant="danger" />
<Spinner animation="grow" variant="warning" />
<Spinner animation="grow" variant="info" />
<Spinner animation="grow" variant="light" />
<Spinner animation="grow" variant="dark" />

`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="align">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Alignment</h6>
                <p className="text-muted card-sub-title">
                  Use flexbox utilities or text alignment utilities to place
                  spinners exactly where you need them in any situation.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setSpinnerAlign(!SpinnerAlign)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div>
                    <div className="text-center mg-b-20">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                    <div className="text-end">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  </div>
                </div>
                <Collapse in={SpinnerAlign}>
                  <pre>
                    <code>
                      {
                        `

<div className="text-center mg-b-20">
<Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>
</div>
<div className="text-end">
<Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>
</div>

`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="size">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Size</h6>
                <p className="text-muted card-sub-title">
                  Add <code>.spinner-border-sm</code> and
                  <code>.spinner-grow-sm</code> to make a smaller spinner that can
                  quickly be used within other components.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setSpinnersize(!Spinnersize)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div>
                    <Spinner
                      animation="border"
                      role="status"
                      className="spinner-border spinner-border-sm"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <Spinner
                      animation="grow"
                      className="spinner-grow spinner-grow-sm"
                    />

                  </div>
                </div>
                <Collapse in={Spinnersize}>
                  <pre>
                    <code>
                      {
                        `
<div>
<Spinner
animation="border"
role="status"
className="spinner-border spinner-border-sm"
>
<span className="visually-hidden">Loading...</span>
</Spinner>
<Spinner
animation="grow"
className="spinner-grow spinner-grow-sm"
/>
</div>
`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="buton">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Button with Spinners</h6>
                <p className="text-muted card-sub-title">
                  Use spinners within buttons to indicate an action is currently
                  processing or taking place. You may also swap the text out of
                  the spinner element and utilize button text as needed.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setButtonwithSpinners(!ButtonwithSpinners)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Loading...</span>
                    </Button>

                    <Button variant="secondary" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>
                  </div>
                </div>
                <Collapse in={ButtonwithSpinners}>
                  <pre>
                    <code>
                      {
                        `

<div className="btn-list">
<Button variant="primary" disabled>
<Spinner
as="span"
animation="border"
size="sm"
role="status"
aria-hidden="true"
/>
<span className="visually-hidden">Loading...</span>
</Button>

<Button variant="secondary" disabled>
<Spinner
as="span"
animation="grow"
size="sm"
role="status"
aria-hidden="true"
/>
Loading...
</Button>
</div>

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
            <Card className="custom-card">
              <Card.Body className=" text-center">
                <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                  <i className="fe fe-user"></i>
                </div>
                <p className="mb-1 text-muted">Total Users</p>

                <h3 className="mb-0">34,789</h3>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Body className=" text-center">
                <div className="icon-service bg-secondary-transparent rounded-circle text-secondary">
                  <i className="fe fe-trending-up"></i>
                </div>
                <p className="mb-1 text-muted">Total Sales</p>
                <h3 className="mb-0">98,674</h3>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Spinners.propTypes = {};

Spinners.defaultProps = {};

export default Spinners;
