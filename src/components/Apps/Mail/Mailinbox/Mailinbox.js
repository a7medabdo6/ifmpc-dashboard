import React, { Fragment } from "react";
import {
  Breadcrumb,
  Col,
  Dropdown,
  Row,
  Card,
  Nav,
  Button,
  Table,
} from "react-bootstrap";

import { Link } from "react-router-dom";
const Mailinbox = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Mail-Inbox</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Apps</Breadcrumb.Item>
          <Breadcrumb.Item active>Mail-Inbox</Breadcrumb.Item>
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
            type="button"
            className="my-2 btn-icon-text"
          >
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col xl={3} lg={4}>
        <Card className=" custom-card mail-container task-container overflow-hidden">
          <div className="">
            <div className="p-4 border-bottom">
              <Link
                to={`/apps/mail/mailcomposed`}
                variant="primary"
                className="btn btn-main-primary btn-block btn-compose"
                id="btnCompose"
              >
                Compose
              </Link>
            </div>
            <Card.Body className="card-body tab-list-items">
              <div className="main-content-left main-content-left-mail">
                <div className="main-mail-menu">
                  <Nav
                    className=" main-nav-column mg-b-20"
                    defaultActiveKey="Inbox"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="Inbox">
                        <i className="fe fe-mail"></i> Inbox <span>20</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Starred">
                        <i className="fe fe-star"></i> Starred <span>3</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Important">
                        <i className="fe fe-bookmark"></i> Important
                        <span>10</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="SentMail">
                        <i className="fe fe-send"></i> Sent Mail <span>8</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Drafts">
                        <i className="fe fe-edit"></i> Drafts <span>15</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Spam">
                        <i className="fe fe-disc"></i> Spam <span>128</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Trash">
                        <i className="fe fe-trash"></i> Trash <span>6</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <label className="main-content-label main-content-label-sm">
                    Label
                  </label>
                  <Nav className="nav main-nav-column mg-b-20">
                    <Nav.Item>
                      <Nav.Link eventKey="Social">
                        <i className="fe fe-folder"></i> Social <span>10</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Work">
                        <i className="fe fe-folder"></i> Work <span>22</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Personal">
                        <i className="fe fe-folder"></i> Personal{" "}
                        <span>22</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Promotions">
                        <i className="fe fe-folder"></i> Promotions
                        <span>22</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Updates">
                        <i className="fe fe-folder-plus"></i> Updates
                        <span>17</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <label className="main-content-label main-content-label-sm">
                    Tags
                  </label>
                  <Nav className="nav main-nav-column">
                    <Nav.Item>
                      <Nav.Link eventKey="Twitter">
                        <i className="fe fe-twitter"></i> Twitter <span>2</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Github">
                        <i className="fe fe-github"></i> Github <span>32</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Gitlab">
                        <i className="fe fe-gitlab"></i> Gitlab <span>23</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                {/* <!-- main-mail-menu --> */}
              </div>
            </Card.Body>
          </div>
        </Card>
      </Col>
      <Col xl={9} lg={8} className=" main-content-body-mail1">
        <Card className="custom-card mail-container task-container overflow-hidden">
          <div className="inbox-body p-4">
            <div className="mail-option">
              <div className="chk-all border-0">
                <Dropdown className="btn-group me-1">
                  <Dropdown.Toggle
                    variant="default"
                    href="#"
                    className="btn mini all"
                  >
                    All
                    {/* <i className="fe fe-chevron-down"></i> */}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">None</Dropdown.Item>
                    <Dropdown.Item href="#">Read</Dropdown.Item>
                    <Dropdown.Item href="#">Unread</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="btn-group me-1">
                <Link
                  to="#"
                  data-bs-original-title="Refresh"
                  data-bs-placement="top"
                  className="btn mini tooltips"
                >
                  <i className="fe fe-refresh-cw"></i>
                </Link>
              </div>
              <Dropdown className="btn-group hidden-phone">
                <Dropdown.Toggle
                  href="#"
                  className="btn mini blue"
                  aria-expanded="false"
                >
                  More
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item href="#">
                    <i className="fe fe-edit me-2"></i> Mark as Read
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="fe fe fe-slash me-2"></i> Spam
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="fe fe-trash me-2"></i> Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <ul className="unstyled inbox-pagination">
                <li>
                  <span>1-50 of 234</span>
                </li>

                <li>
                  <Link to="#" className="btn np-btn">
                    <i className="fe fe-chevron-right pagination-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="table-responsive">
              <Table className="table table-inbox text-md-nowrap table-hover text-nowrap">
                <tbody>
                  <tr>
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star text-warning"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Tim Reid, S P N
                    </td>
                    <td className="view-message">Boost Your Website Traffic</td>
                    <td className="view-message text-end font-weight-semibold">
                      April 01
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Freelancer.com
                    </td>
                    <td className="view-message">Stop wasting your visitors</td>
                    <td className="view-message text-end font-weight-semibold">
                      May 23
                    </td>
                  </tr>
                  <tr className="unread">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark text-danger"></i>
                    </td>
                    <td className="view-message  dont-show">PHPClass</td>
                    <td className="view-message ">
                      Added a new className: Login className Fast Site
                    </td>
                    <td className="view-message  text-end">9:27 AM</td>
                  </tr>

                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Facebook
                    </td>
                    <td className="view-message view-message">
                      Somebody requested a new Password
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      June 13
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star text-warning"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Skype
                    </td>
                    <td className="view-message view-message">
                      Password successfully changed
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      March 24
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Google+
                    </td>
                    <td className="view-message">alireza, do you know</td>
                    <td className="view-message text-end font-weight-semibold">
                      March 09
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      WOW Slider
                    </td>
                    <td className="view-message">
                      New WOW Slider v7.8 - 67% off
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      March 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started text-warning"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      LinkedIn Pulse
                    </td>
                    <td className="view-message">
                      The One Sign Your Co-Worker Will Stab
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      Feb 19
                    </td>
                  </tr>
                  <tr className="unread">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Google Webmaster
                    </td>
                    <td className="view-message">
                      Improve the search presence of WebSite
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      March 15
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      JW Player
                    </td>
                    <td className="view-message">
                      Last Chance: Upgrade to Pro for
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      March 15
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Drupal Community
                    </td>
                    <td className="view-message view-message">
                      Welcome to the Drupal Community
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      March 04
                    </td>
                  </tr>

                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started text-warning"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="dont-show font-weight-semibold">Zoosk </td>
                    <td className="view-message">
                      7 new singles we think you'll like
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      May 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark text-danger"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      LinkedIn
                    </td>
                    <td className="view-message">
                      Alireza: Nokia Networks, System Group and
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      February 25
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="dont-show font-weight-semibold">Facebook</td>
                    <td className="view-message view-message">
                      Your account was recently logged into
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      March 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Twitter
                    </td>
                    <td className="view-message">
                      Your Twitter password has been changed
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      April 07
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      InternetSeer
                    </td>
                    <td className="view-message">Performance Report</td>
                    <td className="view-message text-end font-weight-semibold">
                      July 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark text-danger"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Bertina
                    </td>
                    <td className="view-message">
                      IMPORTANT: Don't lose your domains!
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      June 16
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark text-danger"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Laura Gaffin, S P N
                    </td>
                    <td className="view-message">
                      Your Website On Google (Higher Rankings Are Better)
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      August 10
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Facebook
                    </td>
                    <td className="view-message view-message">
                      Alireza Zare Login faild
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      feb 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      AddMe.com
                    </td>
                    <td className="view-message">
                      Submit Your Website to the AddMe Business Directory
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      August 10
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show font-weight-semibold">
                      Terri Rexer, S P N
                    </td>
                    <td className="view-message view-message">
                      Forget Google AdWords: Un-Limited Clicks fo
                    </td>
                    <td className="view-message text-end font-weight-semibold">
                      April 14
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          {/* <inbox.SimpleSnackbar/> */}
          {/* <!-- mail-content --> */}
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}
  </Fragment>
);

Mailinbox.propTypes = {};

Mailinbox.defaultProps = {};

export default Mailinbox;
