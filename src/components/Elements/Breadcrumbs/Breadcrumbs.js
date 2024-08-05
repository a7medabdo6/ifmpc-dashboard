import React, { Fragment, useState } from "react";
import { Breadcrumb, Badge, Button, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Breadcrumbs = () => {
  const [Breadcrumbcode, setBreadcrumbcode] = useState(false);
  const [Customstylecode, setCustomstylecode] = useState(false);
  const [Customdividercode, setCustomdividercode] = useState(false);
  const [Breadcrumbcenter, setBreadcrumbcenter] = useState(false);
  const [Breadcrumbright, setBreadcrumbright] = useState(false);
  const [Breadcrumbstyle, setBreadcrumbstyle] = useState(false);

  const Breadcrumbshowcode = () => {
    if (Breadcrumbcode === false) {
      setBreadcrumbcode(true)
    }
    else if (Breadcrumbcode === true) {
      setBreadcrumbcode(false)
    }
  }
  const Customstyleshowcode = () => {
    if (Customstylecode === false) {
      setCustomstylecode(true)
    }
    else if (Customstylecode === true) {
      setCustomstylecode(false)
    }
  }
  const Customdividershowcode = () => {
    if (Customdividercode === false) {
      setCustomdividercode(true)
    }
    else if (Customdividercode === true) {
      setCustomdividercode(false)
    }
  }
  const Breadcrumbcentershowcode = () => {
    if (Breadcrumbcenter === false) {
      setBreadcrumbcenter(true)
    }
    else if (Breadcrumbcenter === true) {
      setBreadcrumbcenter(false)
    }
  }
  const Breadcrumbrightshowcode = () => {
    if (Breadcrumbright === false) {
      setBreadcrumbright(true)
    }
    else if (Breadcrumbright === true) {
      setBreadcrumbright(false)
    }
  }
  const Breadcrumbstyleshowcode = () => {
    if (Breadcrumbstyle === false) {
      setBreadcrumbstyle(true)
    }
    else if (Breadcrumbstyle === true) {
      setBreadcrumbstyle(false)
    }
  }

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Breadcrumbs</h2>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Breadcrumbs
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
              className="btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              variant="primary"
              type="button" className="my-2 btn-icon-text">
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Basic Styling</h6>
                <p className="text-muted card-sub-title">
                  The example below is the basic styling of the breadcrumb from
                  Bootstrap.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Breadcrumbshowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <nav aria-label="breadcrumb">
                    <Breadcrumb className="mg-b-0">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>
                </div>
                {Breadcrumbcode ? (
                  <pre>

                    {`
                    <nav aria-label="breadcrumb">
                    <Breadcrumb className="mg-b-0">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>

                      `
                    }</pre>

                ) : null

                }
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center"            >
              <div>
                <h6 className="main-content-label mb-1">Custom Styling</h6>
                <p className="text-muted card-sub-title">
                  The example below is the custom styling of the breadcrumb used
                  by this template.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Customstyleshowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <nav aria-label="breadcrumb">
                    <Breadcrumb className=" mg-b-0 breadcrumb-style1">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>
                </div>
                {Customstylecode ? (
                  <pre>

                    {`
                    <nav aria-label="breadcrumb breadcrumb-style1">
                    <Breadcrumb className="mg-b-0">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>

                      `
                    }</pre>

                ) : null

                }
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center"            >
              <div>
                <h6 className="main-content-label mb-1">Custom Divider</h6>
                <p className="text-muted card-sub-title">
                  The example below is the custom styling of the breadcrumb using
                  different divider.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Customdividershowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <nav aria-label="breadcrumb">
                    <Breadcrumb className="style2 mb-0 breadcrumb-style2">
                      <Breadcrumb.Item> Home</Breadcrumb.Item>
                      <Breadcrumb.Item> Library</Breadcrumb.Item>
                      <Breadcrumb.Item active> Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>
                </div>
                {Customdividercode ? (
                  <pre>

                    {`
                    <nav aria-label="breadcrumb >
                    <Breadcrumb className="mg-b-0 breadcrumb-style2"">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>

                      `
                    }</pre>

                ) : null

                }
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Breadcrumbs-Center align
                </h6>
                <p className="text-muted card-sub-title">
                  The example below is the center aligment of the breadcrumb
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Breadcrumbcentershowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <nav className="breadcrumb-3">
                    <Breadcrumb className=" breadcrumb-style1">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>
                </div>
                {Breadcrumbcenter ? (
                  <pre>

                    {`
                    <nav aria-label="breadcrumb-3">
                    <Breadcrumb className="mg-b-0 breadcrumb-style1">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>

                      `
                    }</pre>

                ) : null

                }
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="right">
            <Card.Header className="d-sm-flex justify-content-between align-items-center"            >
              <div>
                <h6 className="main-content-label mb-1">
                  Breadcrumbs-Right align
                </h6>
                <p className="text-muted card-sub-title">
                  The example below is the Right aligment of the breadcrumb
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Breadcrumbrightshowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <nav className="breadcrumb-4">
                    <Breadcrumb className=" breadcrumb-style1">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>
                </div>
                {Breadcrumbright ? (
                  <pre>

                    {`
                    <nav aria-label="breadcrumb breadcrumb-style2">
                    <Breadcrumb className="mg-b-0">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </nav>

                      `
                    }</pre>

                ) : null

                }
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="style1">
            <Card.Header className="d-sm-flex justify-content-between align-items-center"            >
              <div>
                <h6 className="main-content-label mb-1">Breadcrumb style</h6>
                <p className="text-muted card-sub-title">
                  The example below is the Right aligment of the breadcrumb
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Breadcrumbstyleshowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Breadcrumb className="breadcrumb-5" >
                    <div className="breadcrumb flat" >
                      <Link to="#">
                        <Badge className="badge bg-dark me-3">1</Badge>
                        <span className="breadcrumbitem" href="#">Browser</span>
                      </Link>
                      <Link to="#">
                        <Badge className=" bg-dark me-3">2</Badge>
                        <span className="breadcrumbitem">Compare</span>
                      </Link>
                      <Link to="#">
                        <Badge className="bg-dark me-3">3</Badge>
                        <span className="breadcrumbitem">Order</span>
                      </Link>
                      <Link to="#">
                        <Badge className="bg-dark me-3">4</Badge>
                        <span className="breadcrumbitem">Checkout</span>
                      </Link>
                    </div>
                  </Breadcrumb>
                </div>
                {Breadcrumbstyle ? (
                  <pre>

                    {`
                  <Breadcrumb className="breadcrumb-5" >
                    <div className="breadcrumb flat" >
                      <Link to="#">
                        <Badge className="badge bg-dark me-3">1</Badge>
                        <span className="breadcrumbitem" href="#">Browser</span>
                      </Link>
                      <Link to="#">
                        <Badge className=" bg-dark me-3">2</Badge>
                        <span className="breadcrumbitem">Compare</span>
                      </Link>
                      <Link to="#">
                        <Badge className="bg-dark me-3">3</Badge>
                        <span className="breadcrumbitem">Order</span>
                      </Link>
                      <Link to="#">
                        <Badge className="bg-dark me-3">4</Badge>
                        <span className="breadcrumbitem">Checkout</span>
                      </Link>
                    </div>
                  </Breadcrumb>

                      `
                    }</pre>

                ) : null

                }
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <Card.Body className="text-center">
                <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                  <i className="fe fe-user"></i>
                </div>
                <p className="mb-1 text-muted">Total Users</p>
                <h3 className="mb-0">34,789</h3>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Body className="text-center">
                <div className="icon-service bg-secondary-transparent rounded-circle text-secondary">
                  <i className="fe fe-trending-up"></i>
                </div>
                <p className="mb-1 text-muted">Total Sales</p>
                <h3 className="mb-0">98,674</h3>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Body className="text-center">
                <div className="icon-service bg-info-transparent rounded-circle text-info">
                  <i className="fe fe-dollar-sign"></i>
                </div>
                <p className="mb-1 text-muted">Total Profits</p>
                <h3 className="mb-0">
                  <span>$</span>45,078
                </h3>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Breadcrumbs.propTypes = {};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
