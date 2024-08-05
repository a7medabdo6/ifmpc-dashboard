import React, { Fragment } from "react";
import { Button, Col, Row, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const Avatars = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Avatars</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Elementss</Breadcrumb.Item>
          <Breadcrumb.Item active>Avatars</Breadcrumb.Item>
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
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Avatar Sizes</h6>
              <p className="text-muted card-sub-title">
                An avatar can have different sizes like larger and smaller
                avatar.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-img-user avatar-xs">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/users/2.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-sm">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/users/3.jpg")}
                    />
                  </div>
                  <div className="main-img-user">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/users/4.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/users/2.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-lg d-none d-sm-block">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/users/6.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-xl d-none d-sm-block">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/users/7.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-xxl d-none d-sm-block">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/users/2.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="shapes">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Avatar Shapes</h6>
              <p className="text-muted card-sub-title">
                An avatar can have different shapes like square and round,
                radius avatars.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/users/2.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="square"
                      src={require("../../../assets/img/users/5.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="radius"
                      src={require("../../../assets/img/users/6.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Initials Avatars</h6>
              <p className="text-muted card-sub-title">
                An avatar can have a temporary use of user's initial name while
                their photos are not yet available.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group avatar-list">
                  <div className="avatar avatar-xs bg-primary">A</div>
                  <div className="avatar avatar-sm bg-secondary">U</div>
                  <div className="avatar bg-info">C</div>
                  <div className="avatar avatar-md bg-success">X</div>
                  <div className="avatar avatar-lg bg-warning d-none d-sm-flex ">E</div>
                  <div className="avatar avatar-xl d-none d-sm-flex bg-danger">
                    M
                  </div>
                  <div className="avatar avatar-xxl d-none d-sm-flex bg-pink">
                    NB
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Status Indicator</h6>
              <p className="text-muted card-sub-title">
                An avatar can have a status indicator to indicate users
                availability.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-avatar avatar online">
                    <img
                      alt="avatar"
                      className="rounded-circle avatar"
                      src={require("../../../assets/img/users/9.jpg")}
                    />
                  </div>
                  <div className="main-avatar avatar-md offline">eb</div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card >
      </Col >
      <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img
                  alt="avatar"
                  className="rounded-circle"
                  src={require("../../../assets/img/users/5.jpg")}
                />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1 tx-inverse">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link to="#" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img
                  alt="avatar"
                  className="rounded-circle"
                  src={require("../../../assets/img/users/4.jpg")}
                />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1 tx-inverse">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link to="#" className="btn ripple btn-secondary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row >
    {/* <!-- End Row --> */}
  </Fragment >
);

Avatars.propTypes = {};

Avatars.defaultProps = {};

export default Avatars;
