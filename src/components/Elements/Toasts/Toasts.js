import React, { Fragment, useState } from "react";
import { ProgressBar, Breadcrumb, Button, Row, Card, Col, Form, Collapse } from "react-bootstrap";
import { Toastbasic } from "./Toastbasic";
import { Toastcenter } from "./Toastcenter";
import { Toastright } from "./Toastright";
import { Toaststack } from "./Toaststack";
// import * as Toastlist from "../../../data/Elements/Toasts/Toastlist";

const Toasts = () => {
  const [BasicToast, setBasicToast] = useState(false);
  const [TRANSLUCENT, setTRANSLUCENT] = useState(false);
  const [ToastStacking, setToastStacking] = useState(false);
  const [ToastAlign, setToastAlign] = useState(false);

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Toast</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active >
              Toast
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
              variant="primary" type="button" className=" my-2 btn-icon-text">
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="card custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Basic Example</h6>
                <p className="text-muted card-sub-title">
                  Toasts are as flexible as you need and have very little required
                  markup. At a minimum, we require a single element to contain
                  your “toasted” content and strongly encourage a dismiss button.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicToast(!BasicToast)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body className="card-body">
              <div className="text-wrap">
                <div className="example">
                  <div className="demo-static-toast">
                    <Toastbasic />
                  </div>
                </div>
                <Collapse in={BasicToast}>
                  <pre>
                    <code>
                      {
                        `
export function Toastbasic() {
const [showA, setShowA] = useState(true);
const toggleShowA = () => setShowA(!showA);

return (
<Row>
<Col md={6} className="mb-2">
<Toast show={showA} onClose={toggleShowA} className="ms-2 mb-1">
<Toast.Header>
<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
<small className="text-muted">11 mins ago</small>
</Toast.Header>
<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
</Col>
</Row>
);
}

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
                <h6 className="main-content-label mb-1">Translucent</h6>
                <p className="text-muted card-sub-title">
                  Toasts are slightly translucent, too, so they blend over
                  whatever they might appear over.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setTRANSLUCENT(!TRANSLUCENT)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body className="card-body">

              <div className="text-wrap">
                <div className="example">
                  <div className="demo-static-toast">
                  <Toastbasic />
                  </div>
                </div>
                <Collapse in={TRANSLUCENT}>
                  <pre>
                    <code>
                      {
                        `
export function Toastbasic() {
const [showA, setShowA] = useState(true);
const toggleShowA = () => setShowA(!showA);

return (
<Row>
<Col md={6} className="mb-2">
<Toast show={showA} onClose={toggleShowA} className="ms-2 mb-1">
<Toast.Header>
<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
<small className="text-muted">11 mins ago</small>
</Toast.Header>
<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
</Col>
</Row>
);
}

`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="stacking">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Stacking</h6>
                <p className="text-muted card-sub-title">
                  When you have multiple toasts, we default to vertiaclly stacking
                  them in a readable manner.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setToastStacking(!ToastStacking)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body className="card-body">

              <div className="text-wrap">
                <div className="example">
                  <div className="demo-static-toast">
                    <Toaststack />
                    <Toaststack />
                  </div>
                </div>


                <Collapse in={ToastStacking}>
                  <pre>
                    <code>
                      {
                        `
export function Toaststack() {
const [showA, setShowA] = useState(true);
const toggleShowA = () => setShowA(!showA);

return (
<Row>
<Col md={6} className="mb-2">
<Toast show={showA} onClose={toggleShowA}>
<Toast.Header>
<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
<small className="text-muted">11 mins ago</small>
</Toast.Header>
<Toast.Body>See? Just like this.</Toast.Body>
</Toast>
</Col>
</Row>
);
}
`
                      }

                    </code>
                  </pre>
                </Collapse>


              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="place">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Placement</h6>
                <p className="text-muted card-sub-title">
                  Place toasts with custom CSS as you need them. The top right is
                  often used for notifications, as is the top middle.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setToastAlign(!ToastAlign)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body className="card-body">
              <div className="text-wrap mb-3">
                <div className="text-wrap">
                  <div className="example">
                    <div className="ht-150 pos-relative">
                      <Toastbasic />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrap mb-3">
                <div className="example">
                  <Toastcenter />
                </div>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="ht-150 pos-relative">
                    <Toastright />
                  </div>
                </div>
                <Collapse in={ToastAlign}>
                  <pre>
                    <code>
                      {
                        `
export function Toastbasic() {
const [showA, setShowA] = useState(true);
const toggleShowA = () => setShowA(!showA);

return (
<Row>
<Col md={6} className="mb-2">
<Toast show={showA} onClose={toggleShowA} className="ms-2 mb-1">
<Toast.Header>
<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
<small className="text-muted">11 mins ago</small>
</Toast.Header>
<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
</Col>
</Row>
);
}

====
export function Toastcenter() {
const [showA, setShowA] = useState(true);
const toggleShowA = () => setShowA(!showA);

return (
<div
// aria-live="polite"
// aria-atomic="true"
className=" position-relative"
style={{ minHeight: "240px" }}
>
<ToastContainer position="middle-center" className="">
<Toast show={showA} onClose={toggleShowA}>
<Toast.Header>
<strong className="me-auto">Notification</strong>
<small className="text-muted">11 mins ago</small>
</Toast.Header>
<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
</ToastContainer>
</div>
);
}

====
export function Toastright() {
const [showA, setShowA] = useState(true);
const toggleShowA = () => setShowA(!showA);

return (
<div
aria-live="polite"
aria-atomic="true"
className=" position-relative"
style={{ minHeight: "240px" }}
>
<ToastContainer position="top-end" >
<Toast show={showA} onClose={toggleShowA}>
<Toast.Header>
<strong className="me-auto">Notification</strong>
<small className="text-muted">11 mins ago</small>
</Toast.Header>
<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
</ToastContainer>
</div>
);
}
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
              <Card.Body >
                <div className="p-3">
                  <h6>HTML Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>35%</span>
                    </div>
                    <div className="progress">
                      <ProgressBar now={35} variant="primary" className="xs wd-35p" />

                    </div>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Wordpress Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>50%</span>
                    </div>
                    <div className="progress progress-bar-xs">
                      <ProgressBar now={50} variant="secondary" className="xs wd-50p" />
                    </div>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Angular Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>40%</span>
                    </div>
                    <div className="progress progress-bar-xs">
                      <ProgressBar now={40} variant="info" className="xs  wd-40p" />

                    </div>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>React Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>10%</span>
                    </div>
                    <div className="progress progress-bar-xs">
                      <ProgressBar now={10} variant="danger" className="xs  wd-10p" />
                    </div>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>PHP Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>70%</span>
                    </div>
                    <div className="progress progress-bar-xs">
                      <ProgressBar now={70} variant="success" className="xs  wd-70p" />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );

}

Toasts.propTypes = {};

Toasts.defaultProps = {};

export default Toasts;
