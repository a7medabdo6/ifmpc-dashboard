import React, { Fragment } from "react";
import { Breadcrumb, Col, Button, Nav, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Settings = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Settings</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
          <Breadcrumb.Item active>Settings </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button variant="primary" type="button" className="my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    <Row className="row-sm">
      <Col lg={4} xl={3}>
        <Card className="custom-card">
          <Card.Header>
            <div>
              <h3 className="card-title tx-18">
                <label className="main-content-label tx-15">Settings</label>
              </h3>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="main-content-left main-content-left-mail">
              <div className="main-mail-menu">
                <Nav className="nav main-nav-column mg-b-20" defaultActiveKey="/home">

                  <Nav.Item>


                    <Nav.Link eventKey="home" className="thumb  mb-2">
                      <i className="fe fe-user"></i> Account
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>


                  </Nav.Item>
                  <Nav.Link eventKey="Privacy&Security"

                    className="thumb mb-2"
                  >
                    <i className="fe fe-lock"></i> Privacy & Security
                  </Nav.Link>

                  <Nav.Item>


                  </Nav.Item>
                  <Nav.Link
                    className="thumb mb-2"
                    eventKey="General"
                  >
                    <i className="fe fe-edit-2"></i> General
                  </Nav.Link>

                  <Nav.Item>


                  </Nav.Item>
                  <Nav.Link
                    className="thumb mb-2"
                    eventKey="Help"
                  >
                    <i className="fe fe-info"></i> Help & Support
                  </Nav.Link>

                  <Nav.Item>


                  </Nav.Item>
                  <Nav.Link
                    className="thumb mb-2"
                    eventKey="Emails"
                  >
                    <i className="fe fe-mail"></i> Emails
                  </Nav.Link>

                  <Nav.Item>


                  </Nav.Item>
                  <Nav.Link
                    className="thumb mb-2"
                    eventKey="Language"
                  >
                    <i className="fe fe-flag"></i> Language & Region
                  </Nav.Link>

                  <Nav.Item>


                  </Nav.Item>
                  <Nav.Link
                    className="thumb mb-2"
                    eventKey="Notifications"
                  >
                    <i className="fe fe-bell"></i> Notifications
                  </Nav.Link>

                  <Nav.Item>


                  </Nav.Item>
                  <Nav.Link
                    className="thumb mb-2"
                    eventKey="Blog"
                  >
                    <i className="fe fe-settings"></i> Blog
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="px-4 ">
            <Button variant="primary" className="w-lg">Save Changes</Button>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg={8} xl={9}>
        <Row className="row-sm">
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-home fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="tx-14 d-flex text-dark tx-uppercase">
                          Dashboard
                        </h5>
                        <p className="tx-13 text-muted mb-0">
                          Dashboard Settings such as sidemenu,header and main
                          page can be Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  to="#"
                  className="tx-14 mb-0"
                >
                  Go to Settings
                </Link>
                <label className="custom-switch float-end mb-0">
                  <Link
                    to="#"

                    className="tx-14 mb-0 me-2 text-dark"
                  >
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-layout-grid2 fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="tx-14 d-flex text-dark tx-uppercase">
                          Web Apps
                        </h5>
                        <p className="tx-13 text-muted mb-0">
                          Web apps settings such as Apps,Elements,Advanced Ui &
                          Mail can be Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  to="#"
                  className="tx-14 mb-0"
                >
                  Go to Settings
                </Link>
                <label className="custom-switch float-end mb-0">
                  <Link
                    to="#"

                    className="tx-14 mb-0 me-2 text-dark"
                  >
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-pencil fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="tx-14 d-flex text-dark tx-uppercase">
                          General
                        </h5>
                        <p className="tx-13 text-muted mb-0">
                          General settings such as Icons,Charts,Ecommerce can be
                          Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  to="#"
                  className="tx-14 mb-0"
                >
                  Go to Settings
                </Link>
                <label className="custom-switch float-end mb-0">
                  <Link
                    to="#"

                    className="tx-14 mb-0 me-2 text-dark"
                  >
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-flag-alt-2 fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="tx-14 d-flex text-dark tx-uppercase">
                          Language & Region
                        </h5>
                        <p className="tx-13 text-muted mb-0">
                          In this settings we can change the region and language
                          manually.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  to="#"
                  className="tx-14 mb-0"
                >
                  Go to Settings
                </Link>
                <label className="custom-switch float-end mb-0">
                  <Link
                    to="#"

                    className="tx-14 mb-0 me-2 text-dark"
                  >
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-bell fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="tx-14 d-flex text-dark tx-uppercase">
                          Notification
                        </h5>
                        <p className="tx-13 text-muted mb-0">
                          Notification settings we can control the notification
                          privacy and security.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  to="#"
                  className="tx-14 mb-0"
                >
                  Go to Settings
                </Link>
                <label className="custom-switch float-end mb-0">
                  <Link
                    to="#"

                    className="tx-14 mb-0 me-2 text-dark"
                  >
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-settings fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="tx-14 d-flex text-dark tx-uppercase">
                          Blog
                        </h5>
                        <p className="tx-13 text-muted mb-0">
                          In this settings we can modify all Blog related
                          settings in this template.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  to="#"
                  className="tx-14 mb-0"
                >
                  Go to Settings
                </Link>
                <label className="custom-switch float-end mb-0">
                  <Link
                    to="#"

                    className="tx-14 mb-0 me-2 text-dark"
                  >
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-lock fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="tx-14 d-flex text-dark tx-uppercase">
                          Privacy & Security
                        </h5>
                        <p className="tx-13 text-muted mb-0">
                          In this we can control the privacy related settings.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  to="#"
                  className="tx-14 mb-0"
                >
                  Go to Settings
                </Link>
                <label className="custom-switch float-end mb-0">
                  <Link
                    to="#"

                    className="tx-14 mb-0 me-2 text-dark"
                  >
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-info-alt fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="tx-14 d-flex text-dark tx-uppercase">
                          Help & Support
                        </h5>
                        <p className="tx-13 text-muted mb-0">
                          In this we can know about how to change settings.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  to="#"
                  className="tx-14 mb-0"
                >
                  Go to Settings
                </Link>
                <label className="custom-switch float-end mb-0">
                  <Link
                    to="#"
                    className="tx-14 mb-0 me-2 text-dark"
                  >
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Fragment>
);
Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
