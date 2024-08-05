import { Fragment } from "react";
import { Breadcrumb, Card, Col, Form, Nav, OverlayTrigger, Row, Button, Tooltip } from "react-bootstrap";
const Mailcomposed = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Mail-Compose</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            Apps
          </Breadcrumb.Item>
          <Breadcrumb.Item active >
            Mail-Compose
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

    <Row className="row-sm">
      <Col md={12} lg={4} xl={3} >
        <Card className=" custom-card">
          <Card.Body>
            <div>
              <div className="main-mail-menu">
                <Nav className=" main-nav-column mg-b-20" defaultActiveKey="/inbox">
                  <Nav.Item>
                    <Nav.Link className="nav-link" eventKey="/inbox">
                      <i className="fe fe-mail"></i> Inbox
                      <span className="badge bg-light">20</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="starred">
                      <i className="fe fe-star"></i> Starred
                      <span className="badge bg-primary">3</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="important">
                      <i className="fe fe-bookmark"></i> Important
                      <span className="badge bg-secondary">10</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sentmail">
                      <i className="fe fe-send"></i> Sent Mail
                      <span className="badge bg-success">8</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="drafts">
                      <i className="fe fe-edit-2"></i> Drafts
                      <span className="badge bg-danger">15</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="spam">
                      <i className="fe fe-disc"></i> Spam
                      <span className="badge bg-warning">128</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="trash">
                      <i className="fe fe-trash-2"></i> Trash
                      <span className="badge bg-info">6</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <label className="main-content-label main-content-label-sm">
                  Label
                </label>
                <Nav defaultActiveKey="/social" className="nav main-nav-column">
                  <Nav.Item>
                    <Nav.Link eventKey="/social">
                      <i className="fe fe-folder"></i> Social
                      <span className="badge bg-primary">10</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="promotions" >
                      <i className="fe fe-folder"></i> Promotions
                      <span className="badge bg-secondary">22</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="upadates">
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
        <Card className=" custom-card">
          <Card.Header>
            <h3 className="card-title tx-18">
              <label className="main-content-label tx-15">
                Compose New Message
              </label>
            </h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="form-group">
                <div className="row align-items-center">
                  <Form.Label className="col-sm-3 col-xl-2  tx-semibold">
                    To
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <div className="row align-items-center">
                  <Form.Label className="col-sm-3 col-xl-2  tx-semibold">
                    CC
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <div className="row align-items-center">
                  <Form.Label className="col-sm-3 col-xl-2  tx-semibold">
                    BC
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <div className="row align-items-center">
                  <Form.Label className="col-sm-3 col-xl-2  tx-semibold">
                    Subject
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <div className="row">
                  <Form.Label className="col-sm-3 col-xl-2 form-label tx-semibold">
                    Message
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <textarea rows="10" className="form-control"></textarea>
                  </div>
                </div>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className=" d-sm-flex rounded-0">
            <div className="">

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Attach</Tooltip>}
              >
                <i
                  className="fe fe-paperclip btn px-2  fs-16"
                  data-bs-toggle="tooltip"
                  title="Attach"
                  data-bs-original-title="Attach"
                ></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Link</Tooltip>}
              >
                <i
                  className="fe fe-link btn px-2 fs-16"
                  data-bs-toggle="tooltip"
                  title="Link"
                  data-bs-original-title="Link"
                ></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Photos</Tooltip>}
              >
                <i
                  className="fe fe-image btn px-2 fs-16"
                  data-bs-toggle="tooltip"
                  title="Photos"
                  data-bs-original-title="Photos"
                ></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Delete</Tooltip>}
              >
                <i
                  className="fe fe-trash btn px-2 fs-16"
                  data-bs-toggle="tooltip"
                  title="Delete"
                  data-bs-original-title="Delete"
                ></i>
              </OverlayTrigger>
            </div>
            <div className="btn-list ms-auto">
              <Button
                variant="Danger" className="btn btn-danger">Cancel</Button>
              <Button
                variant="primary" className="btn btn-primary">Send message</Button>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
Mailcomposed.propTypes = {};

Mailcomposed.defaultProps = {};

export default Mailcomposed;
