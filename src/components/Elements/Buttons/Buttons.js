import React, { Fragment, useState } from "react";
import { Breadcrumb, Col, Button, Card, Dropdown, Row, Form, Collapse, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
// import * as badges from "../../../data/Elements/Badges/badges";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
const Buttons = () => {
  const [ThemeButtons, setThemeButtons] = useState(false);
  const [BootstrapButtons, setBootstrapButtons] = useState(false);
  const [DisabledButtons, setDisabledButtons] = useState(false);
  const [OutlineButtons, setOutlineButtons] = useState(false);
  const [RoundedButtons, setRoundedButtons] = useState(false);
  const [RoundedOutlineButtons, setRoundedOutlineButtons] = useState(false);
  const [ButtonSizes, setButtonSizes] = useState(false);
  const [ButtonwithIcons, setButtonwithIcons] = useState(false);
  const [ButtonGroups1, setButtonGroups1] = useState(false);
  const [DropdownButtons, setDropdownButtons] = useState(false);
  const [IconButtons, setIconButtons] = useState(false);

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Buttons</h2>
          <Breadcrumb >
            <Breadcrumb.Item href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Buttons
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

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">

              <div>
                <h6 className="main-content-label mb-1">Theme Buttons</h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic purpose.
                </p>
              </div>

              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setThemeButtons(!ThemeButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>

                  </div>
                </div>
                <Collapse in={ThemeButtons}>
                  <pre>
                    <code>
                      {
                        `
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="bootstrap">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Bootstrap Buttons</h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic purpose.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBootstrapButtons(!BootstrapButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="primary">primary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>
                  </div>
                </div>
                <Collapse in={BootstrapButtons}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-list">
<Button variant="primary">primary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="info">Info</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>
</div>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="disabledbootstrap">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Bootstrap Disabled Buttons
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic purpose.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setDisabledButtons(!DisabledButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="primary" disabled>
                      primary
                    </Button>
                    <Button variant="secondary" disabled>
                      Secondary
                    </Button>
                    <Button variant="success" disabled>
                      primary
                    </Button>
                    <Button variant="Warning" disabled>
                      Warning
                    </Button>
                    <Button variant="danger" disabled>
                      Danger
                    </Button>
                    <Button variant="info" disabled>
                      Info
                    </Button>
                    <Button variant="light" disabled>
                      Light
                    </Button>
                    <Button variant="dark" disabled>
                      Dark
                    </Button>
                  </div>
                </div>
                <Collapse in={DisabledButtons}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-list">
<Button variant="primary" disabled>
primary
</Button>
<Button variant="secondary" disabled>
Secondary
</Button>
<Button variant="success" disabled>
primary
</Button>
<Button variant="Warning" disabled>
Warning
</Button>
<Button variant="danger" disabled>
Danger
</Button>
<Button variant="info" disabled>
Info
</Button>
<Button variant="light" disabled>
Light
</Button>
<Button variant="dark" disabled>
Dark
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
          <Card className=" custom-card" id="outline">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Outline Buttons</h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic purpose.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setOutlineButtons(!OutlineButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-secondary">Secondary</Button>
                    <Button variant="outline-success">Success</Button>
                    <Button variant="outline-warning">Warning</Button>
                    <Button variant="outline-danger">Danger</Button>
                    <Button variant="outline-info">Info</Button>
                    <Button variant="outline-light">Light</Button>
                    <Button variant="outline-dark">Dark</Button>
                  </div>
                </div>
                <Collapse in={OutlineButtons}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-list">
<Button variant="outline-primary">Primary</Button>
<Button variant="outline-secondary">Secondary</Button>
<Button variant="outline-success">Success</Button>
<Button variant="outline-warning">Warning</Button>
<Button variant="outline-danger">Danger</Button>
<Button variant="outline-info">Info</Button>
<Button variant="outline-light">Light</Button>
<Button variant="outline-dark">Dark</Button>
</div>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="round">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">

              <div>
                <h6 className="main-content-label mb-1">Rounded Buttons</h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic purpose.
                </p>
              </div>

              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setRoundedButtons(!RoundedButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="primary btn-rounded">Primary</Button>
                    <Button variant="secondary btn-rounded">Secondary</Button>
                    <Button variant="success btn-rounded">Success</Button>
                    <Button variant="Warning btn-rounded">Warning</Button>
                    <Button variant="danger btn-rounded">danger</Button>
                    <Button variant="info btn-rounded">Info</Button>
                    <Button variant="light btn-rounded">Light</Button>
                    <Button variant="dark btn-rounded">Dark</Button>
                  </div>
                </div>
                <Collapse in={RoundedButtons}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-list">
<Button variant="primary btn-rounded">Primary</Button>
<Button variant="secondary btn-rounded">Secondary</Button>
<Button variant="success btn-rounded">Success</Button>
<Button variant="Warning btn-rounded">Warning</Button>
<Button variant="danger btn-rounded">danger</Button>
<Button variant="info btn-rounded">Info</Button>
<Button variant="light btn-rounded">Light</Button>
<Button variant="dark btn-rounded">Dark</Button>
</div>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="round-outline">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">

              <div>
                <h6 className="main-content-label mb-1">
                  Rounded Outline Buttons
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic purpose.
                </p>
              </div>

              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setRoundedOutlineButtons(!RoundedOutlineButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="outline-primary btn-rounded">Primary</Button>
                    <Button variant="outline-secondary btn-rounded">
                      Secondary
                    </Button>
                    <Button variant="outline-success btn-rounded">Success</Button>
                    <Button variant="outline-warning btn-rounded">Warning</Button>
                    <Button variant="outline-danger btn-rounded">Danger</Button>
                    <Button variant="outline-info btn-rounded">Info</Button>
                    <Button variant="outline-light btn-rounded">Light</Button>
                    <Button variant="outline-dark btn-rounded">Dark</Button>
                  </div>
                </div>
                <Collapse in={RoundedOutlineButtons}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-list">
<Button variant="outline-primary btn-rounded">Primary</Button>
<Button variant="outline-secondary btn-rounded">Secondary</Button>
<Button variant="outline-success btn-rounded">Success</Button>
<Button variant="outline-warning btn-rounded">Warning</Button>
<Button variant="outline-danger btn-rounded">Danger</Button>
<Button variant="outline-info btn-rounded">Info</Button>
<Button variant="outline-light btn-rounded">Light</Button>
<Button variant="outline-dark btn-rounded">Dark</Button>
</div>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="sizes">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Button Sizes</h6>
                <p className="text-muted card-sub-title">
                  Fancy larger or smaller buttons? Add <code>.btn-lg</code> or{" "}
                  <code>.btn-sm</code> and <code>.btn-block</code>for additional
                  sizes.
                </p>
              </div>

              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setButtonSizes(!ButtonSizes)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">

                    <Button variant="primary" size="lg">
                      Large button
                    </Button>
                    <Button variant="secondary" size="lg">
                      Large button
                    </Button>
                    <Button variant="primary" size="sm">
                      small button
                    </Button>
                    <Button variant="secondary" size="sm">
                      small button
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      className=" btn-block"
                    >
                      Primary button
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className=" btn-block"
                      active
                    >
                      Primary button
                    </Button>
                  </div>
                </div>
                <Collapse in={ButtonSizes}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-list">

<Button variant="primary" size="lg">Large button</Button>
<Button variant="secondary" size="lg">Large button</Button>
<Button variant="primary" size="sm">small button</Button>
<Button variant="secondary" size="sm">small button</Button>
<Button variant="primary"size="lg"className=" btn-block">Primary button</Button>
<Button variant="secondary"size="lg"className=" btn-block"active>Primary button</Button>
</div>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="icon">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Button with Icons</h6>
                <p className="text-muted card-sub-title">
                  A basic button with added icons.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setButtonwithIcons(!ButtonwithIcons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="primary" className="btn ripple">
                      <i className="fe fe-airplay"></i> Folder
                    </Button>
                    <Button variant="secondary">
                      <i className="fe fe-briefcase me-1"></i>Mail
                    </Button>
                    <Button variant="success">
                      <i className="fe fe-folder me-1"></i>Edit
                    </Button>
                  </div>
                </div>
                <Collapse in={ButtonwithIcons}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-list">
<Button variant="primary" className="btn ripple">
<i className="fe fe-airplay"></i> Folder
</Button>
<Button variant="secondary">
<i className="fe fe-briefcase me-1"></i>Mail
</Button>
<Button variant="success">
<i className="fe fe-folder me-1"></i>Edit
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
          <Card className=" custom-card" id="group">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Button Groups</h6>
                <p className="text-muted card-sub-title">
                  Group a series of buttons together on a single line with the
                  button group.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setButtonGroups1(!ButtonGroups1)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example  overflow-hidden">
                  <div className="btn-list">
                    <ButtonGroup
                      aria-label="Basic example"
                      className="btn btn-group"
                      role="group"
                    >

                      <Button
                        variant="secondary"
                        className=" pd-x-25"
                        type="button"
                      >
                        Left
                      </Button>
                      <Button
                        variant="secondary"
                        className=" pd-x-25"
                        type="button"
                      >
                        Center
                      </Button>
                      <Button
                        variant="secondary"
                        className=" pd-x-25"
                        type="button"
                      >
                        Right
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup
                      aria-label="Basic example"
                      className="btn btn-group"
                      role="group"
                    >
                      <Button
                        className=" btn-icon"
                        active
                        type="button"
                        variant="secondary"
                      >
                        <i className="typcn typcn-media-play-outline"></i>
                      </Button>
                      <Button
                        className=" btn-icon"
                        type="button"
                        variant="secondary"
                      >
                        <i className="typcn typcn-media-pause-outline"></i>
                      </Button>
                      <Button
                        className=" btn-icon"
                        type="button"
                        variant="secondary"
                      >
                        <i className="typcn typcn-media-stop-outline"></i>
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup
                      aria-label="Basic example"
                      className="btn btn-group"
                      role="group"
                    >
                      <Button type="button" variant="primary">
                        <i className="typcn typcn-media-play-outline"></i>
                      </Button>
                      <Button type="button" variant="primary">
                        <i className="typcn typcn-media-pause-outline"></i>
                      </Button>
                      <Button type="button" variant="primary">
                        <i className="typcn typcn-media-stop-outline"></i>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <Collapse in={ButtonGroups1}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-list">
<ButtonGroup
aria-label="Basic example"role="group">
<Button variant="secondary"className=" pd-x-25"type="button">Left</Button>
<Button variant="secondary"className=" pd-x-25"type="button">Center</Button>
<Button variant="secondary"className=" pd-x-25"type="button">Right</Button>
</ButtonGroup>
<ButtonGroup aria-label="Basic example"role="group">
<ButtonclassName=" btn-icon"activetype="button"variant="secondary"><i className="typcn typcn-media-play-outline"></i></Button>
<Button className=" btn-icon"type="button"variant="secondary"><i className="typcn typcn-media-pause-outline"></i></Button>
<Button className=" btn-icon"type="button"variant="secondary"><i className="typcn typcn-media-stop-outline"></i></Button>
</ButtonGroup>
<ButtonGroup aria-label="Basic example"role="group">
<Button type="button" variant="primary"><i className="typcn typcn-media-play-outline"></i></Button>
<Button type="button" variant="primary"><i className="typcn typcn-media-pause-outline"></i></Button>
<Button type="button" variant="primary"><i className="typcn typcn-media-stop-outline"></i></Button>
</ButtonGroup>
</div>
`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="dropdown">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Dropdown Buttons</h6>
                <p className="text-muted card-sub-title">
                  A button variant for using only icons.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setDropdownButtons(!DropdownButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Dropdown className=" btn btn-list ">
                    <Dropdown.Toggle variant="secondary">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ marginTop: "0px" }}>
                      <Dropdown.Item href="#">Profile</Dropdown.Item>
                      <Dropdown.Item href="#">Activity Logs</Dropdown.Item>
                      <Dropdown.Item href="#">Account Settings</Dropdown.Item>
                      <Dropdown.Item href="#">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className=" btn btn-list">
                    <Dropdown.Toggle variant="danger">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ marginTop: "0px" }}>
                      <Dropdown.Item href="#">Profile</Dropdown.Item>
                      <Dropdown.Item href="#">Activity Logs</Dropdown.Item>
                      <Dropdown.Item href="#">Account Settings</Dropdown.Item>
                      <Dropdown.Item href="#">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                </div>
                <Collapse in={DropdownButtons}>
                  <pre>
                    <code>
                      {
                        `
<Dropdown className="btn-list">
<Dropdown.Toggle variant="secondary">
Dropdown
</Dropdown.Toggle>
<Dropdown.Menu style={{ marginTop: "0px" }}>
<Dropdown.Item href="#">Profile</Dropdown.Item>
<Dropdown.Item href="#">Activity Logs</Dropdown.Item>
<Dropdown.Item href="#">Account Settings</Dropdown.Item>
<Dropdown.Item href="#">Logout</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown className="btn-list">
<Dropdown.Toggle variant="danger">
Dropdown
</Dropdown.Toggle>
<Dropdown.Menu style={{ marginTop: "0px" }}>
<Dropdown.Item href="#">Profile</Dropdown.Item>
<Dropdown.Item href="#">Activity Logs</Dropdown.Item>
<Dropdown.Item href="#">Account Settings</Dropdown.Item>
<Dropdown.Item href="#">Logout</Dropdown.Item>
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
          <Card className=" custom-card" id="icon1">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">

              <div>
                <h6 className="main-content-label mb-1">Icon Buttons</h6>
                <p className="text-muted card-sub-title">
                  A button variant for using only icons.
                </p>
              </div>

              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setIconButtons(!IconButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="btn-icon-list">
                    <Button variant="primary">
                      <i className="fe fe-airplay"></i>
                    </Button>
                    <Button variant="secondary">
                      <i className="fe fe-briefcase"></i>
                    </Button>
                    <Button variant="success">
                      <i className="fe fe-folder"></i>
                    </Button>
                    <Button variant="info">
                      <i className="fe fe-link"></i>
                    </Button>
                  </div>
                </div>
                <Collapse in={IconButtons}>
                  <pre>
                    <code>
                      {
                        `
<div className="btn-icon-list">
                    <Button variant="primary">
                      <i className="fe fe-airplay"></i>
                    </Button>
                    <Button variant="secondary">
                      <i className="fe fe-briefcase"></i>
                    </Button>
                    <Button variant="success">
                      <i className="fe fe-folder"></i>
                    </Button>
                    <Button variant="info">
                      <i className="fe fe-link"></i>
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
        <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <Card.Header className="border-bottom-0 custom-card-header">
                <h6 className="main-content-label mb-3">Project Status</h6>
              </Card.Header>
              <Card.Body>
                <div className="list d-flex align-items-center p-3">
                <Stack spacing={2} direction="row">
      <CircularProgress style={{ color: "#51d866", fontSize: '20px' }} variant="determinate" value={100} />
    </Stack>
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
                <div className="list d-flex align-items-center p-3">
                <Stack spacing={2} direction="row">
      <CircularProgress style={{ color: "#51d866", fontSize: '20px' }} variant="determinate" value={100} />
    </Stack>
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
                <div className="list d-flex align-items-center p-3">
                <Stack spacing={2} direction="row">
      <CircularProgress style={{ color: "#53caed", fontSize: '20px' }} variant="determinate" value={75} />
    </Stack>
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
                <div className="list d-flex align-items-center p-3">
                <Stack spacing={2} direction="row">
      <CircularProgress style={{ color: "#f16d75", fontSize: '20px' }} value={25} />
    </Stack>
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
              </Card.Body>
              <Card.Footer>
                <Link to="#" className="btn ripple btn-primary btn-block">
                  View More
                </Link>
              </Card.Footer>
            </Card>
          </div>
        </Col>
      </Row>
      {/* // <!-- End Row --> */}
    </Fragment>
  );
}

Buttons.propTypes = {};

Buttons.defaultProps = {};

export default Buttons;
