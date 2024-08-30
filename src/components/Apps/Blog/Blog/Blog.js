import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";

const Blog = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Blog</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"></Breadcrumb.Item>
          <Breadcrumb.Item active>Blog</Breadcrumb.Item>
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
    <Row className="row-sm">
      <Col xl={6} lg={12}>
        <Card className=" custom-card overflow-hidden">
          <div className="px-4 pt-4">
            <Link to={`/apps/blog/blogdetails`}>
              <img
                src={require("../../../../assets/img/media/blog9.jpg")}
                alt="blog9"
                className="rounded-lg w-100"
              />
            </Link>
          </div>
          <Card.Body className="blog-details">
            <div className="item-card-desc d-md-flex mb-3">
              <Link to="#" className="d-flex me-3 mb-2">
                <span className="fe fe-calendar text-muted me-2 tx-18"></span>
                <div className="mt-0 mt-0 text-dark">20-Mar-2021</div>
              </Link>
              <Link to="#" className="d-flex mb-2">
                <span className="fe fe-user text-muted me-2 tx-18"></span>
                <div className="mt-0 mt-0 text-dark">Dennis Mark</div>
              </Link>
              <div className="ms-auto mb-2">
                <Link to="#" className="me-0 d-flex">
                  <span className="fe fe-message-square text-muted me-2 tx-18"></span>
                  <div className="mt-0 mt-0 text-dark">6 Comments</div>
                </Link>
              </div>
            </div>
            <Link to="#" className="mt-4">
              <h5 className="font-weight-semibold">
                Excepteur occaecat cupidatat
              </h5>
            </Link>
            <p className="text">
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you Link
              complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure.
            </p>
            <div className="media mt-0 border-top">
              <div className="media mg-t-15 profile-footer">
                <div className="media-user">
                  <div className="demo-avatar-group">
                    <div className="main-img-user">
                      <img
                        alt="blog9"
                        className="rounded-circle"
                        src={require("../../../../assets/img/media/blog9.jpg")}
                      />
                    </div>
                    <div className="main-img-user">
                      <img
                        alt="blog3"
                        className="rounded-circle"
                        src={require("../../../../assets/img/media/blog3.jpg")}
                      />
                    </div>
                    <div className="main-img-user">
                      <img
                        alt="blog6"
                        className="rounded-circle"
                        src={require("../../../../assets/img/media/blog6.jpg")}
                      />
                    </div>
                    <div className="main-img-user">
                      <img
                        alt="blog5"
                        className="rounded-circle"
                        src={require("../../../../assets/img/media/blog5.jpg")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body className="p-3">
            <Row className="g-0 blog-list">
              <Col xl={5} lg={12} md={12}>
                <Card.Body className="p-0">
                  <div className="item-card-img">
                    <Link to={`/advanceUI/blogdetails/`}>
                      <img
                        className="card-img-left h-130 w-100"
                        src={require("../../../../assets/img/media/blog2.jpg")}
                        alt="blog2"
                      />
                    </Link>
                  </div>
                </Card.Body>
              </Col>
              <Col xl={7} lg={12} md={12}>
                <Card.Body className="p-2">
                  <Link to={`/advanceUI/blogdetails/`}>
                    <h5 className="font-weight-semibold mt-3">
                      Circumstances Certain claims
                    </h5>
                  </Link>
                  <p>
                    I of human happiness. sint occaecat ccaecat cupidatat non
                    proident, sunt in culpa qui officia cupidatat non proident,
                    sunt in culpa qui officia deserunt No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure.
                  </p>
                  <div className="media py-2 mt-0 border-top"></div>
                  <div className="item-card-desc d-flex">
                    <div className="main-avatar avatar online">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../../assets/img/users/2.jpg")}
                      />
                    </div>
                    <div className="main-contact-body">
                      <h6>Abigail Johnson</h6>
                      <span className="phone">2 days ago</span>
                    </div>
                    <div className="ms-auto mb-2">
                      <Link to="#" className="me-0 d-flex">
                        <span className="fe fe-message-square text-muted me-2 tx-18"></span>
                        <div className="mt-0 mt-0 text-dark">6 Comments</div>
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className=" custom-card">
          <Card.Body className="p-3">
            <Row className="g-0 blog-list">
              <Col xl={5} lg={12} md={12}>
                <Card.Body className="p-0">
                  <div className="item-card-img">
                    <Link to={`/advanceUI/blogdetails/`}>
                      <img
                        className="card-img-left h-130 w-100 op-8"
                        src={require("../../../../assets/img/media/blog4.jpg")}
                        alt="user2"
                      />
                    </Link>
                  </div>
                </Card.Body>
              </Col>
              <Col xl={7} lg={12} md={12}>
                <Card.Body className="p-2">
                  <Link to={`/advanceUI/blogdetails/`}>
                    <h5 className="font-weight-semibold mt-3">
                      Teri Dactyl Certain
                    </h5>
                  </Link>
                  <p className="text">
                    I of human happiness. sint occaecat ccaecat cupidatat non
                    proident, sunt in culpa qui officia cupidatat non proident,
                    sunt in culpa qui officia deserunt No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure.
                  </p>
                  <div className="media py-2 mt-0 border-top"></div>
                  <div className="item-card-desc d-flex">
                    <div className="main-avatar avatar online">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../../assets/img/users/2.jpg")}
                      />
                    </div>
                    <div className="main-contact-body">
                      <h6>Christian Lerio</h6>
                      <span className="phone">3 days ago</span>
                    </div>
                    <div className="ms-auto mb-2">
                      <Link to="#" className="me-0 d-flex">
                        <span className="fe fe-message-square text-muted me-2 tx-18"></span>
                        <div className="mt-0 mt-0 text-dark">5 Comments</div>
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className=" custom-card">
          <Card.Body className="p-3">
            <Row className="g-0 blog-list">
              <Col xl={5} lg={12} md={12}>
                <Card.Body className="p-0">
                  <div className="item-card-img">
                    <Link to={`/advanceUI/blogdetails/`}>
                      <img
                        className="card-img-left h-130 w-100 op-9"
                        src={require("../../../../assets/img/media/blog3.jpg")}
                        alt="blog3"
                      />
                    </Link>
                  </div>
                </Card.Body>
              </Col>
              <Col xl={7} lg={12} md={12}>
                <Card.Body className="p-2">
                  <Link to={`/advanceUI/blogdetails/`}>
                    <h5 className="font-weight-semibold mt-3">
                      Circumstances Certain claims
                    </h5>
                  </Link>
                  <p>
                    I of human happiness. sint occaecat ccaecat cupidatat non
                    proident, sunt in culpa qui officia cupidatat non proident,
                    sunt in culpa qui officia deserunt No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure.
                  </p>
                  <div className="media py-2 mt-0 border-top"></div>
                  <div className="item-card-desc d-flex">
                    <div className="main-avatar avatar online">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../../assets/img/users/5.jpg")}
                      />
                    </div>
                    <div className="main-contact-body">
                      <h6>Christian Lerio</h6>
                      <span className="phone">3 days ago</span>
                    </div>
                    <div className="ms-auto mb-2">
                      <Link to="#" className="me-0 d-flex">
                        <span className="fe fe-message-square text-muted me-2 tx-18"></span>
                        <div className="mt-0 mt-0 text-dark">2 Comments</div>
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className=" row-sm">
      <Col xl={3} md={6}>
        <Card className=" custom-card">
          <Link to={`/advanceUI/blogdetails/`}>
            <img
              className="card-img-top w-100 blog-img"
              src={require("../../../../assets/img/media/blog11.jpg")}
              alt=""
            />
          </Link>
          <Card.Body>
            <h5 className="main-content-label mb-3 tx-16">
              Excepteur occaecat cupidatat
            </h5>
            <p className="card-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
            <Link to="#" className="btn btn-sm ripple btn-primary">
              Read More<i className="fe fe-arrow-right ms-1"></i>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xl={3}>
        <Card className=" custom-card">
          <Link to={`/advanceUI/blogdetails/`}>
            <img
              className="card-img-top w-100 blog-img"
              src={require("../../../../assets/img/media/blog6.jpg")}
              alt="blog6"
            />
          </Link>
          <Card.Body>
            <h5 className="main-content-label mb-3 tx-16">
              Teri Dactyl Certain
            </h5>
            <p className="card-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
            <Link to="#" className="btn btn-sm ripple btn-primary">
              Read More<i className="fe fe-arrow-right ms-1"></i>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xl={3}>
        <Card className=" custom-card">
          <Link to={`/advanceUI/blogdetails/`}>
            <img
              className="card-img-top w-100 blog-img op-9"
              src={require("../../../../assets/img/media/blog9.jpg")}
              alt=""
            />
          </Link>
          <Card.Body>
            <h5 className="main-content-label mb-3 tx-16">
              Circumstances Certain claims
            </h5>
            <p className="card-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
            <Link to="#" className="btn btn-sm ripple btn-primary">
              Read More<i className="fe fe-arrow-right ms-1"></i>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xl={3}>
        <Card className=" custom-card">
          <Link to={`/advanceUI/blogdetails/`}>
            <img
              className="card-img-top w-100 blog-img op-9"
              src={require("../../../../assets/img/media/blog10.jpg")}
              alt="blog10"
            />
          </Link>
          <Card.Body>
            <h5 className="main-content-label mb-3 tx-16">
              The standard chunk of Lorem
            </h5>
            <p className="card-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
            <Link to="#" className="btn btn-sm ripple btn-primary">
              Read More<i className="fe fe-arrow-right ms-1"></i>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className=" row-sm">
      <Col lg={6}>
        <Card className=" card-aside custom-card">
          <Card.Body>
            <Link to={`/advanceUI/blogdetails/`}>
              <label className="main-content-label tx-16 mb-3">
                Blog Title
              </label>
            </Link>
            <div>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <div className="d-flex align-items-center pt-3 mt-auto">
              <div className="main-img-user avatar-sm me-3">
                <Link to={`/advanceUI/blogdetails/`}></Link>
                <img
                  src={require("../../../../assets/img/users/1.jpg")}
                  className="w-10 rounded-circle"
                  alt="user1"
                />
              </div>
              <div>
                <Link to={`/advanceUI/blogdetails/`} className="text-default">
                  Alica Nestle
                </Link>
                <small className="d-block text-muted">15 mintues ago</small>
              </div>
              <div className="ms-auto text-muted">
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-heart me-1"></i>
                </Link>
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-thumbs-up"></i>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} className="col-lg-6">
        <Card className="card card-aside custom-card">
          <Card.Body>
            <Link to={`/advanceUI/blogdetails/`}>
              <label className="main-content-label tx-16 mb-3">
                Blog Title
              </label>
            </Link>
            <div>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <div className="d-flex align-items-center pt-3 mt-auto">
              <div className="main-img-user avatar-sm me-3">
                <Link to={`/advanceUI/blogdetails/`}>
                  <img
                    src={require("../../../../assets/img/users/2.jpg")}
                    className="w-10 rounded-circle"
                    alt="avatar-img"
                  />
                </Link>
              </div>
              <div>
                <Link to={`/advanceUI/blogdetails/`} className="text-default">
                  Alica Nestle
                </Link>
                <small className="d-block text-muted">15 mintues ago</small>
              </div>
              <div className="ms-auto text-muted">
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-heart me-1"></i>
                </Link>
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-thumbs-up"></i>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
