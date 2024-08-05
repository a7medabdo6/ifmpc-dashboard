import React, { Fragment } from "react";
import { Breadcrumb, Button, Card, Col, Nav, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
const ViewMail = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">View-Mail</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            Apps
          </Breadcrumb.Item>
          <Breadcrumb.Item active >
            View-Mail
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
      <Col lg={4} xl={3} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <Link to={`${process.env.PUBLIC_URL}/apps/mail/mailcomposed`}
                variant="primary"
                className="btn btn-main-primary btn-block btn-compose"
                id="btnCompose"
              >
                Compose
              </Link>
              <div className="main-mail-menu pd-r-0 mg-t-20">
                <Nav className="nav main-nav-column mg-b-20" activeKey="/started">
                  <Nav.Item>
                    <Nav.Link active href="#">
                      <i className="fe fe-mail"></i> Inbox
                      <span className="badge bg-light">20</span>

                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="started">
                      <i className="fe fe-star"></i> Starred
                      <span className="badge bg-primary">3</span>

                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="important">
                      <i className="fe fe-bookmark"></i> Important
                      <span className="badge bg-secondary">10</span>

                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="sendmail">
                      <i className="fe fe-send"></i> Sent Mail
                      <span className="badge bg-success">8</span>

                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="drafts">
                      <i className="fe fe-edit-2"></i> Drafts
                      <span className="badge bg-danger">15</span>

                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="spam">
                      <i className="fe fe-disc"></i> Spam
                      <span className="badge bg-warning">128</span>

                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="trash">
                      <i className="fe fe-trash-2"></i> Trash
                      <span className="badge bg-info">6</span>

                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <label className="main-content-label main-content-label-sm">
                  Label
                </label>
                <Nav className="main-nav-column">

                  <Nav.Item>
                    <Nav.Link href="#" eventKey="social">
                      <i className="fe fe-folder"></i> Social
                      <span className="badge bg-primary">10</span>

                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#" eventKey="promotions">
                      <i className="fe fe-folder"></i> Promotions
                      <span className="badge bg-secondary">22</span>

                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#">
                      <i className="fe fe-folder"></i> Updates
                      <span className="badge bg-success">17</span>

                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={8} xl={9} md={12}>
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div className="email-media">
              <div className="mb-4 d-lg-flex">
                <h3>Congratulations on your goal you achieved ! </h3>
                <div className="ms-auto d-none d-md-flex fs-18">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Print</Tooltip>}
                  >
                    <i
                      className="fe fe-printer tx-inverse"
                      data-bs-toggle="tooltip"
                      title="print"
                      data-bs-original-title="Print"
                    ></i>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    class="me-3 tx-inverse"
                    overlay={<Tooltip>Undo</Tooltip>}
                  >
                    <i
                      className="fe fe-tag ms-3 tx-inverse"
                      data-bs-toggle="tooltip"
                      title="yndo"
                      data-bs-original-title="Undo"
                    ></i>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="media mt-0">
                <div className="main-img-user avatar-md me-3 online">
                  <img alt="avatar" className="rounded-circle"
                    src={require("../../../../assets/img/users/1.jpg")}
                  />
                </div>
                <div className="media-body tx-inverse">
                  <div className="float-end d-none d-md-flex fs-15">
                    <small className="me-2">Nov 2, 2020 12:45 pm</small>
                    <small className="me-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Rated</Tooltip>}
                      >
                        <i
                          className="fe fe-star"
                          data-bs-toggle="tooltip"
                          title="rated"
                          data-bs-original-title="Rated"
                        ></i>
                      </OverlayTrigger>
                    </small>

                    <small className="me-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Reply</Tooltip>}
                      >
                        <i
                          className="fa fa-reply"
                          data-bs-toggle="tooltip"
                          title="reply"
                          data-bs-original-title="Reply"
                        ></i>
                      </OverlayTrigger>
                    </small>
                  </div>
                  <div className="media-title font-weight-semiblod">
                    <span className="tx-18 font-weight-bold">Sonia Taylor</span>
                    <p className="mb-0 text-muted">sonai@gmail.com </p>
                    <small className="me-2 d-md-none">
                      Nov 2, 2020 12:45 pm
                    </small>
                    <small className="me-2 d-md-none">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Rated</Tooltip>}
                      >
                        <i
                          className="fa fa-reply"
                          data-bs-toggle="tooltip"
                          title="rated"
                        ></i>
                      </OverlayTrigger>
                    </small>
                    <small className="me-2 d-md-none">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>More</Tooltip>}
                      >
                        <i
                          className="fe fe-more-horizontal text-dark"
                          data-bs-toggle="tooltip"
                          title="more"
                        ></i>
                      </OverlayTrigger>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="eamil-body">
              <h6 className="mb-3">Hi Sir/Madam</h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia.
              </p>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it?
              </p>
              <p className="mb-0">Thanking you Sir/Madam</p>
              <hr />
              <div className="email-attch">
                <div className="float-end">

                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>download</Tooltip>}
                  >
                    <i
                      className="fa fa-download text-dark"
                      title="Download"
                    ></i>
                  </OverlayTrigger>
                </div>
                <p>
                  3 Attachments<Link to href="#"> View All Images</Link>
                </p>
                <div className="emai-img">
                  <div className="row row-sm">
                    <div className="col-sm-3">
                      <Link to href="#">
                        <img
                          className="w-100 rounded-5"
                          src={require("../../../../assets/img/media/18.jpg")}
                          alt="Generic placeholder"
                        />
                      </Link>
                      <h6 className="mb-3 mt-3 mb-lg-0">
                        img_01.jpg <small className="text-muted">12kb</small>
                      </h6>
                    </div>
                    <div className="col-sm-3">
                      <Link to href="#">
                        <img
                          className="w-100 rounded-5"
                          src={require("../../../../assets/img/media/19.jpg")}
                          alt="Generic placeholder "
                        />
                      </Link>
                      <h6 className="mb-3 mt-3 mb-lg-0">
                        img_02.jpg <small className="text-muted">18kb</small>
                      </h6>
                    </div>
                    <div className="col-sm-3">
                      <Link to href="#">
                        <img
                          className="w-100 rounded-5"
                          src={require("../../../../assets/img/media/20.jpg")}
                          alt="Generic placeholder"
                        />
                      </Link>
                      <h6 className=" mt-3 mb-lg-0">
                        img_03.jpg <small className="text-muted">21kb</small>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link to className="btn ripple btn-primary mt-1 mb-1 me-1" href="#">
              <i className="fa fa-reply"></i> Reply
            </Link>
            <Link to className="btn ripple btn-secondary mt-1 mb-1 me-1" href="#">
              <i className="fa fa-share"></i> Forward
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment >
);

ViewMail.propTypes = {};

ViewMail.defaultProps = {};

export default ViewMail;
