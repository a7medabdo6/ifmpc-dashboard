import React, { Fragment, useState } from "react";
import { Dropdown, DropdownButton, ProgressBar, Breadcrumb, Button, Row, Card, Col, Collapse, Form, } from "react-bootstrap";
const DropDowns = () => {
  const [Dropdowncode, setDropdowncode] = useState(false);
  const [Dropdowncode1, setDropdowncode1] = useState(false);
  const [Dropdownend, setDropdownend] = useState(false);
  const [Dropdownactive, setDropdownactive] = useState(false);
  const [Dropdowndisabled, setDropdowndisabled] = useState(false);
  const [Dropdownheader, setDropdownheader] = useState(false);
  const [Dropdowndivder, setDropdowndivder] = useState(false);
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">DropDowns</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              DropDowns
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
              variant="primary" type="button" className="my-2 btn-icon-text">
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
                <h6 className="main-content-label mb-1">Basic Example</h6>
                <p className="text-muted card-sub-title">
                  Wrap the dropdown’s toggle (your button or link) and the
                  dropdown menu within .dropdown, or another element that declares
                  position relative. Dropdowns can be triggered from link or
                  button elements to better fit your potential needs.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setDropdowncode(!Dropdowncode)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Dropdown>
                    <Dropdown.Toggle variant="success">
                      Dropdown Menu
                      <i className="fas fa-caret-down ms-1"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ marginTop: "0px" }}>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Collapse in={Dropdowncode}>
                  <pre>
                    <code>
                      {
                        `
<Dropdown>
<Dropdown.Toggle variant="success">
Dropdown Menu
<i className="fas fa-caret-down ms-1"></i>
</Dropdown.Toggle>
<Dropdown.Menu style={{ marginTop: "0px" }}>
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
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
                <h6 className="main-content-label mb-1">Dropup</h6>
                <p className="text-muted card-sub-title">
                  Trigger dropdown menus above elements by adding dropup className
                  to the parent element.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { setDropdowncode1(!Dropdowncode1) }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <DropdownButton drop="up" variant="secondary" title="Dropdown Menu" style={{ marginTop: "0px" }}>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              <Collapse in={Dropdowncode1}>
                <pre>
                  <code>
                    {
                      `

<Dropdown>
<Dropdown.Toggle variant="success">
Dropdown Menu
<i className="fas fa-caret-down ms-1"></i>
</Dropdown.Toggle>
<Dropdown.Menu style={{ marginTop: "0px" }}>
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
                        `
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Dropright & Dropleft</h6>
                <p className="text-muted card-sub-title">
                  Trigger dropdown menus above elements by adding dropright &
                  dropleft className to the parent element.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { setDropdownend(!Dropdownend) }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row className=" row-xs">
                    <Col sm={6} md={3}>
                      <DropdownButton drop="end" variant="info" title="Dropdown Menu">
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                      </DropdownButton>
                    </Col>
                    <Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
                      <DropdownButton drop="end" variant="danger" title="dropdown Menu">
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </div>
                <Collapse in={Dropdownend}>
                  <pre>
                    <code>
                      {`
<DropdownButton drop="end" variant="info" title="Dropdown Menu">
<Dropdown.Item href="#">Action</Dropdown.Item>
<Dropdown.Item href="#">Another action</Dropdown.Item>
<Dropdown.Item href="#">
Something else here
</Dropdown.Item>
</DropdownButton>
                      ` }
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Active Menu Item</h6>
                <p className="text-muted card-sub-title">
                  Add active className to items in the dropdown to style them as
                  active.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { setDropdownactive(!Dropdownactive) }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Dropdown>
                    <Dropdown.Toggle variant="warning">
                      Dropdown Menu
                      <i className="fas fa-caret-down ms-1"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ marginTop: "0px" }}>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item active href="#"> Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Collapse in={Dropdownactive}>
                  <pre>
                    <code>
                      {`
<Dropdown>
<Dropdown.Toggle variant="warning">
Dropdown Menu
<i className="fas fa-caret-down ms-1"></i>
</Dropdown.Toggle>
<Dropdown.Menu style={{ marginTop: "0px" }}>
<Dropdown.Item href="#">Action</Dropdown.Item>
<Dropdown.Item active href="#"> Another action</Dropdown.Item>
<Dropdown.Item href="#">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
                      ` }
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center" >
              <div>
                <h6 className="main-content-label mb-1">Disabled Menu Item</h6>
                <p className="text-muted card-sub-title">
                  Add disabled className to items in the dropdown to style them as
                  disabled.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { setDropdowndisabled(!Dropdowndisabled) }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Dropdown>
                    <Dropdown.Toggle variant="success">
                      Dropdown Menu
                      <i className="fas fa-caret-down ms-1"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" tx-13" style={{ marginTop: "0px" }}>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#" disabled>
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <Collapse in={Dropdowndisabled}>
                  <pre>
                    <code>
                      {`
<Dropdown>
<Dropdown.Toggle variant="success">
Dropdown Menu
<i className="fas fa-caret-down ms-1"></i>
</Dropdown.Toggle>
<Dropdown.Menu className=" tx-13" style={{ marginTop: "0px" }}>
<Dropdown.Item href="#">Action</Dropdown.Item>
<Dropdown.Item href="#" disabled>
Another action
</Dropdown.Item>
<Dropdown.Item href="#">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
                      ` }
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Dropdown Header</h6>
                <p className="text-muted card-sub-title">
                  Add a header to label sections of actions in any dropdown menu.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { setDropdownheader(!Dropdownheader) }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary">
                      Dropdown Menu
                      <i className="fas fa-caret-down ms-1"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" tx-13" style={{ marginTop: "0px" }}>
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown Menu
                      </h6>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Collapse in={Dropdownheader}>
                  <pre>
                    <code>
                      {`
<Dropdown>
<Dropdown.Toggle variant="primary">
Dropdown Menu
<i className="fas fa-caret-down ms-1"></i>
</Dropdown.Toggle>
<Dropdown.Menu className=" tx-13" style={{ marginTop: "0px" }}>
<h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
Dropdown Menu
</h6>
<Dropdown.Item href="#">Action</Dropdown.Item>
<Dropdown.Item href="#">Another action</Dropdown.Item>
<Dropdown.Item href="#">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
                      ` }
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Dropdown Divider</h6>
                <p className="text-muted card-sub-title">
                  Separate groups of related menu items with a divider.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { setDropdowndivder(!Dropdowndivder) }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Dropdown>
                    <Dropdown.Toggle variant="info">
                      Dropdown Menu
                      <i className="fas fa-caret-down ms-1"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" tx-13" style={{ marginTop: "0px" }}>
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Collapse in={Dropdowndivder}>
                  <pre>
                    <code>
                      {`
<Dropdown>
<Dropdown.Toggle variant="primary">
Dropdown Menu
<i className="fas fa-caret-down ms-1"></i>
</Dropdown.Toggle>
<Dropdown.Menu className=" tx-13" style={{ marginTop: "0px" }}>
<h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
Dropdown Menu
</h6>
<Dropdown.Item href="#">Action</Dropdown.Item>
<Dropdown.Item href="#">Another action</Dropdown.Item>
<Dropdown.Item href="#">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
                      ` }
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <div className="">
                <div className="p-3">
                  <h6>HTML Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>35%</span>
                    </div>
                    <ProgressBar now={35}>

                    </ProgressBar>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Wordpress Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>50%</span>
                    </div>
                    <ProgressBar className="xs  " variant="secondary" now={50}>

                    </ProgressBar>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Angular Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>40%</span>
                    </div>
                    <ProgressBar className="" variant="info" now={40}>

                    </ProgressBar>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>React Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>10%</span>
                    </div>
                    <ProgressBar className="" variant="danger" now={10}>

                    </ProgressBar>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>PHP Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>70%</span>
                    </div>
                    <ProgressBar className="" variant="success" now={70}>

                    </ProgressBar>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment >
  );
}

DropDowns.propTypes = {};

DropDowns.defaultProps = {};

export default DropDowns;
