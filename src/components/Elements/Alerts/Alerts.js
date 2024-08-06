import React, { Fragment, useState } from "react";
import {
  Alert,
  Row,
  Col,
  Breadcrumb,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  initialList,
  initialListdismissing,
  initialListicons,
} from "../../../data/Alertsdata";
function Alerts() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [alertData, setalertData] = useState(initialList);
  const [outline, setoutline] = useState(initialList);
  //Showcodealerts
  const [Alertscode, setAlertscode] = useState(false);
  const [Alertsouterline, setAlertsouterline] = useState(false);
  const [solidalert, setsolidalert] = useState(false);
  const [linkalert, setlinkalert] = useState(false);
  const [addtionalalert, setaddtionalalert] = useState(false);
  const [solid, setsolid] = useState(initialList);
  const [icondismiss, seticondismiss] = useState(false);
  const [dismissingalert1, setdismissingalert1] = useState(false);
  const [dismissingalert, setdismissingalert] = useState(false);
  const [Alertdismissing, setAlertdismissing] = useState(initialListdismissing);
  const [iconsdismissing, seticonsdismissing] = useState(initialListicons);
  let handleRemove = (id) => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  };
  let handleRemoveoutline = (id) => {
    const newList = outline.filter((list) => list.id !== id);
    setoutline(newList);
  };
  let handleRemovesolid = (id) => {
    const newList = solid.filter((list) => list.id !== id);
    setsolid(newList);
  };
  let handleRemovedismissing = (id) => {
    const newList = Alertdismissing.filter((list) => list.id !== id);
    setAlertdismissing(newList);
  };
  let handleRemoveicons = (id) => {
    const newList = iconsdismissing.filter((list) => list.id !== id);
    seticonsdismissing(newList);
  };
  const Alertcode = () => {
    if (Alertscode === false) {
      setAlertscode(true);
    } else if (Alertscode === true) {
      setAlertscode(false);
    }
  };
  const outerlineshowcode = () => {
    if (Alertscode === false) {
      setAlertsouterline(true);
    } else if (Alertscode === true) {
      setAlertsouterline(false);
    }
  };
  const solidalertcode = () => {
    if (solidalert === false) {
      setsolidalert(true);
    } else if (solidalert === true) {
      setsolidalert(false);
    }
  };
  const linkalertcode = () => {
    if (linkalert === false) {
      setlinkalert(true);
    } else if (linkalert === true) {
      setlinkalert(false);
    }
  };
  const addtionalertshowcode = () => {
    if (addtionalalert === false) {
      setaddtionalalert(true);
    } else if (addtionalalert === true) {
      setaddtionalalert(false);
    }
  };
  const dismissingalertshowcode = () => {
    if (dismissingalert === false) {
      setdismissingalert(true);
    } else if (dismissingalert === true) {
      setdismissingalert(false);
    }
  };
  const icondismisshowcode = () => {
    if (icondismiss === false) {
      seticondismiss(true);
    } else if (icondismiss === true) {
      seticondismiss(false);
    }
  };
  const dismissingalertcode = () => {
    if (dismissingalert1 === false) {
      setdismissingalert1(true);
    } else if (dismissingalert1 === true) {
      setdismissingalert1(false);
    }
  };

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Alerts</h2>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="#">Elements</Breadcrumb.Item>
            <Breadcrumb.Item active>Alerts</Breadcrumb.Item>
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
              className=" my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" id="basic-alert">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Basic Alerts</h6>
                <p className="text-muted card-sub-title">
                  Use one of the four required contextual classes.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => {
                  Alertcode();
                }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>

            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <React.Fragment>
                    {alertData.map((item, k) => (
                      <React.Fragment key={k}>
                        <Alert
                          className="alert alert-dismissible fade show "
                          variant={item.variant}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            variant=""
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            className="btn-close btn"
                          >
                            <span aria-hidden="true">×</span>
                          </Button>
                        </Alert>
                      </React.Fragment>
                    ))}
                  </React.Fragment>

                  {/* <alerts.AlertSuccess /> */}
                  {/* <alerts.Alertinfo /> */}
                  {/* <alerts.AlertWarning /> */}
                  {/* <alerts.Alertdanger /> */}
                  {Alertscode ? (
                    <pre>
                      {`
export function AlertSuccess(){
const [show, setShow] = useState(true);
if (show) {
return (
<Alert variant="success">
<Button  onClick={() => setShow(false)} className="float-end btn-close" variant="default"><span aria-hidden="true">×</span></Button>
<strong>Oh snap!</strong> Change a few things up and try submittingagain.
</Alert>
);
}
return <p onClick={() => setShow(true)}></p>;
}`}
                    </pre>
                  ) : null}
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Outline Alerts</h6>
                <p className="text-muted card-sub-title">
                  Use one of the four required contextual classes.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => {
                  outerlineshowcode();
                }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>

            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <React.Fragment>
                    {outline.map((item, k) => (
                      <React.Fragment key={k}>
                        <Alert
                          variant=""
                          className={`alert fade show alert-dismissible alert-outline-${item.variant}`}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            variant=""
                            type="button"
                            onClick={() => handleRemoveoutline(item.id)}
                            className="btn-close"
                          >
                            <span aria-hidden="true">×</span>
                          </Button>
                        </Alert>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                  {/* <alerts.Alertsuccessouterline /> */}
                  {/* <alerts.Alertinfoouterline /> */}
                  {/* <alerts.Alertwarninguterline /> */}
                  {/* <alerts.Alertdangeruterline /> */}
                  {Alertsouterline ? (
                    <pre>
                      {`

export function Alertsuccessouterline() {
const [show, setShow] = useState(true);
if (show) {
return (
<Alert variant=" alert-outline-success">
<Button
onClick={() => setShow(false)}
className="float-end btn-close"
variant="default"
>
<span aria-hidden="true">×</span>
</Button>
<strong>Oh snap!</strong> Change a few things up and try submitting
again.
</Alert>
);
}
return <p onClick={() => setShow(true)}> </p>;
}
                      `}
                    </pre>
                  ) : null}
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="solid-alert">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Solid Colored Alerts
                </h6>
                <p className="text-muted card-sub-title">
                  Use one of the four required contextual classes.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => {
                  solidalertcode();
                }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <React.Fragment>
                    {solid.map((item, k) => (
                      <React.Fragment key={k}>
                        <Alert
                          variant=""
                          className={`alert fade show alert-dismissible alert-solid-${item.variant}`}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            variant=""
                            type="button"
                            onClick={() => handleRemovesolid(item.id)}
                            className="btn-close"
                          >
                            <span aria-hidden="true">×</span>
                          </Button>
                        </Alert>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                  {/* <alerts.AlertSuccesssolid /> */}

                  {/* <alerts.Alertinfosolid /> */}

                  {/* <alerts.Alertdangerutersolid /> */}
                  {solidalert ? (
                    <pre>
                      {`
export function Alertdangerutersolid() {
const [show, setShow] = useState(true);
if (show) {
return (
<Alert variant="danger alert-solid-danger">
<strong>Oh snap!</strong> Change a few things up and try submitting
again.
</Alert>
);
}
return <p onClick={() => setShow(true)}> </p>;
}
                        `}
                    </pre>
                  ) : null}
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="link-alerts">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Link color Alerts</h6>
                <p className="text-muted card-sub-title">
                  Use the <code className="highlighter-rouge">.alert-link</code>
                  utility className to quickly provide matching colored links
                  within any alert.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => {
                  linkalertcode();
                }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Alert className="alert alert-primary" role="alert">
                    This is a primary alert with
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                  <Alert className="alert alert-secondary" role="alert">
                    This is a secondary alert with
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                  <Alert className="alert alert-success" role="alert">
                    This is a success alert with
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                  <Alert className="alert alert-danger" role="alert">
                    This is a danger alert with
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                  <Alert className="alert alert-warning" role="alert">
                    This is a warning alert with
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                  <Alert className="alert alert-info" role="alert">
                    This is a info alert with
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                  <Alert className="alert alert-light" role="alert">
                    This is a light alert with
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                  <Alert className="alert alert-dark mb-0" role="alert">
                    This is a dark alert with
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                </div>
                {linkalert ? (
                  <pre>
                    {`

<div className="example">
<Alert className="alert alert-primary" role="alert">
This is a primary alert with
<Alert.Link href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
<Alert className="alert alert-secondary" role="alert">
This is a secondary alert with
<Alert.Link href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
<Alert className="alert alert-success" role="alert">
This is a success alert with
<Alert.Link href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
<Alert className="alert alert-danger" role="alert">
This is a danger alert with
<Alert.Link href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
<Alert className="alert alert-warning" role="alert">
This is a warning alert with
<Alert.Link href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
<Alert className="alert alert-info" role="alert">
This is a info alert with
<Alert.Link href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
<Alert className="alert alert-light" role="alert">
This is a light alert with
<Alert.Link href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
<Alert className="alert alert-dark mb-0" role="alert">
This is a dark alert with
<Alert.Link href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
</div>
                    `}
                  </pre>
                ) : null}
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="additional-alerts">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Additional Content Alert
                </h6>
                <p className="text-muted card-sub-title">
                  Alerts can also contain additional HTML elements like
                  headings, paragraphs and dividers.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => {
                  addtionalertshowcode();
                }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Alert className="alert alert-success mb-0" role="alert">
                    <Alert.Heading className="alert-heading">
                      Well done!
                    </Alert.Heading>
                    <p>
                      Aww yeah, you successfully read this important alert
                      message. This example text is going to run a bit longer so
                      that you can see how spacing within an alert works with
                      this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to
                      keep things nice and tidy.
                    </p>
                  </Alert>
                </div>
                {addtionalalert ? (
                  <pre>
                    {`
<Alert className="alert alert-success mb-0" role="alert">
<Alert.Heading className="alert-heading">Well done!</Alert.Heading>
<p>
Aww yeah, you successfully read this important alert
message. This example text is going to run a bit longer so
that you can see how spacing within an alert works with
this kind of content.
</p>
<hr />
<p className="mb-0">
Whenever you need to, be sure to use margin utilities to
keep things nice and tidy.
</p>
</Alert>

                    `}
                  </pre>
                ) : null}
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Dismissing Alerts</h6>
                <p className="text-muted card-sub-title">
                  Using the alert JavaScript plugin, it’s possible to dismiss
                  any alert inline.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => {
                  dismissingalertshowcode();
                }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <React.Fragment>
                    {Alertdismissing.map((playerData) => (
                      <React.Fragment key={playerData.id}>
                        <Alert
                          variant=""
                          className={`alert fade show alert-dismissible alert-${playerData.variant}`}
                        >
                          {" "}
                          <strong>{playerData.show}</strong> {playerData.text}
                          <Button
                            variant=""
                            type="button"
                            onClick={() =>
                              handleRemovedismissing(playerData.id)
                            }
                            className="btn-close"
                          >
                            <span aria-hidden="true">×</span>
                          </Button>
                        </Alert>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                  {/* <alerts.AlertWarning /> */}

                  {/* <alerts.AlertSuccess /> */}

                  {/* <alerts.Alertdanger /> */}

                  {/* <alerts.Alertinfo /> */}
                </div>
              </div>
              {dismissingalert ? (
                <pre>
                  {`
export function AlertWarning() {
const [show, setShow] = useState(true);
if (show) {
return (
<Alert variant="warning">
<Button
onClick={() => setShow(false)}
className="float-end btn-close"
variant="default"
>
<span aria-hidden="true">×</span>
</Button>
<strong>Warning!</strong> Better check yourself, you're not looking too
good.
</Alert>
);
}
return <p onClick={() => setShow(true)}> </p>;
}

                    `}
                </pre>
              ) : null}
            </Card.Body>
          </Card>
          <Card className="custom-card" id="icon-alerts">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Alert With Icon</h6>
                <p className="text-muted card-sub-title">
                  Alerts can also contain additional HTML elements like
                  headings, paragraphs and dividers.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => {
                  icondismisshowcode();
                }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Alert variant="default" role="alert">
                    <span className="alert-inner--icon">
                      <i className="fe fe-download me-2"></i>
                    </span>
                    <span className="alert-inner--text">
                      <strong>Default!</strong> This is a warning alert—check it
                      out that has an icon too!
                    </span>
                  </Alert>
                  <div className="alert alert-primary" role="alert">
                    <span className="alert-inner--icon">
                      <i className="fe fe-check-square me-2"></i>
                    </span>
                    <span className="alert-inner--text">
                      <strong>Primary!</strong> This is a warning alert—check it
                      out that has an icon too!
                    </span>
                  </div>
                  <div className="alert alert-success" role="alert">
                    <span className="alert-inner--icon">
                      <i className="fe fe-thumbs-up me-2"></i>
                    </span>
                    <span className="alert-inner--text">
                      <strong>Success!</strong> This is a warning alert—check it
                      out that has an icon too!
                    </span>
                  </div>
                  <div className="alert alert-info" role="alert">
                    <span className="alert-inner--icon">
                      <i className="fe fe-bell me-2"></i>
                    </span>
                    <span className="alert-inner--text">
                      <strong>Info!</strong> This is a warning alert—check it
                      out that has an icon too!
                    </span>
                  </div>
                  <div className="alert alert-warning" role="alert">
                    <span className="alert-inner--icon">
                      <i className="fe fe-info me-2"></i>
                    </span>
                    <span className="alert-inner--text">
                      <strong>Warning!</strong> This is a warning alert—check it
                      out that has an icon too!
                    </span>
                  </div>
                  <div className="alert alert-danger mb-0" role="alert">
                    <span className="alert-inner--icon">
                      <i className="fe fe-slash me-2"></i>
                    </span>
                    <span className="alert-inner--text">
                      <strong>Danger!</strong> This is a warning alert—check it
                      out that has an icon too!
                    </span>
                  </div>
                  {icondismiss ? (
                    <pre>
                      {`
<Alert variant="default" role="alert">
<span className="alert-inner--icon">
<i className="fe fe-download me-2"></i>
</span>
<span className="alert-inner--text">
<strong>Default!</strong> This is a warning alert—check it
out that has an icon too!
</span>
</Alert>

                    `}
                    </pre>
                  ) : null}
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="icon-dismissalerts">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Alert With Icon Dismissing
                </h6>
                <p className="text-muted card-sub-title">
                  Alerts can also contain additional HTML elements like
                  headings, paragraphs and dividers.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => {
                  dismissingalertcode();
                }}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <React.Fragment>
                    {iconsdismissing.map((playerData) => (
                      <React.Fragment key={playerData.id}>
                        <Alert
                          variant=""
                          className={`alert fade show alert-dismissible alert-${playerData.variant}`}
                        >
                          {" "}
                          <span className="alert-inner--icon">
                            <i className={`${playerData.icons} `}></i>
                          </span>{" "}
                          <span className="alert-inner--text">
                            <strong>{playerData.show}</strong> {playerData.text}
                          </span>
                          <Button
                            variant=""
                            type="button"
                            onClick={() => handleRemoveicons(playerData.id)}
                            className="btn-close"
                          >
                            <span aria-hidden="true">×</span>
                          </Button>
                        </Alert>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                  {/* <alerts.Alerticons /> */}

                  {/* <alerts.Primaryicons /> */}

                  {/* <alerts.Successicons /> */}

                  {/* <alerts.Warningicons /> */}

                  {/* <alerts.Infoicons /> */}

                  {/* <alerts.Dangericons /> */}
                </div>

                {dismissingalert1 ? (
                  <pre>
                    {`
export function Alerticons() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="default">
        {" "}
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
          <i className="fe fe-download me-2"></i>
        </span>
        <span className="alert-inner--text">
          <strong>Default!</strong> This is a default alert—check it out!
        </span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}

                    `}
                  </pre>
                ) : null}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <div className="bg-white box-shadow custom-card card">
              {show1 ? (
                <div className="alert text-center fade show p-3">
                  <Button
                    variant="default"
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setShow1(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                  <i className="fe fe-upload-cloud fs-50 text-success"></i>
                  <h5 className="mt-2 mb-1">Success !</h5>
                  <p className="mb-3 mb-3 tx-inverse">
                    Data Upload Successfully
                  </p>
                  <Link to="#" className="btn ripple btn-success">
                    Continue
                  </Link>
                </div>
              ) : null}
            </div>
            <div className="bg-white box-shadow custom-card card">
              {show2 ? (
                <div className="alert text-center fade show p-3">
                  <Button
                    variant="default"
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setShow2(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                  <i className="fe fe-download-cloud fs-50 text-danger"></i>
                  <h5 className="mt-2 mb-1">Oops!</h5>
                  <p className="mb-3 mb-3 tx-inverse">Something went wrong</p>
                  <Link to="#" className="btn ripple btn-danger">
                    Try again
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
