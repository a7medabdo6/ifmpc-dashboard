
import React, { Fragment, useState } from "react";
import { Badge, Breadcrumb, Button, Card, Row, Col, Form } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
// import * as badges from '../../../data/Elements/Badges/badges.js'
const Badges = () => {
  const [Badgecode, setBadgecode] = useState(false);
  const [ContextualVariations, setContextualVariations] = useState(false);
  const [Pillcode, setPillcode] = useState(false);
  const [BBadgecode, setBBadgecode] = useState(false);



  const Badgetshowcode = () => {
    if (Badgecode === false) {
      setBadgecode(true)
    }
    else if (Badgecode === true) {
      setBadgecode(false)
    }
  }
  const ContextualVariationshowcode = () => {
    if (ContextualVariations === false) {
      setContextualVariations(true)
    }
    else if (ContextualVariations === true) {
      setContextualVariations(false)
    }
  }

  const Pillshowcode = () => {
    if (Pillcode === false) {
      setPillcode(true)
    }
    else if (Pillcode === true) {
      setPillcode(false)
    }
  }
  const Buttonbadgeshowcode = () => {
    if (BBadgecode === false) {
      setBBadgecode(true)
    }
    else if (BBadgecode === true) {
      setBBadgecode(false)
    }
  }

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Badges</h2>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active >
              Badges
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
                  Badges scale to match the size of the immediate parent element
                  by using relative font sizing and em units..
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Badgetshowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div>
                  <h1>
                    Heading 01 <Badge bg="dark">New</Badge>
                  </h1>
                  <h2>
                    Heading 02 <Badge bg="dark">New</Badge>
                  </h2>
                  <h3>
                    Heading 03 <Badge bg="dark">New</Badge>
                  </h3>
                  <h4>
                    Heading 04 <Badge bg="dark">New</Badge>
                  </h4>
                  <h5>
                    Heading 05 <Badge bg="dark">New</Badge>
                  </h5>
                  <h6>
                    Heading 06 <Badge bg="dark">New</Badge>
                  </h6>
                </div>
                {Badgecode ? (
                  <pre>
                    {
                      `
<h1>Heading 01 <Badge bg="dark">New</Badge></h1>
<h2>Heading 02 <Badge bg="dark">New</Badge></h2>
<h3>Heading 03 <Badge bg="dark">New</Badge></h3>
<h4>Heading 04 <Badge bg="dark">New</Badge></h4>
<h5>Heading 05 <Badge bg="dark">New</Badge></h5>
<h6>Heading 06 <Badge bg="dark">New</Badge></h6>
`
                    }
                  </pre>
                ) : null
                }
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Contextual Variations</h6>
                <p className="text-muted card-sub-title">
                  Add any of the below mentioned modifier classes to change the
                  appearance of a badge.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { ContextualVariationshowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div>
                    <Badge bg="primary me-1" >Primary</Badge>
                    <Badge bg="secondary  me-1">Secondary</Badge>
                    <Badge bg="success  me-1">Success</Badge>
                    <Badge bg="danger  me-1">Danger</Badge>
                    <Badge bg="warning  me-1" text="dark">
                      Warning
                    </Badge>
                    <Badge bg="info  me-1">Info</Badge>
                    <Badge bg="light  me-1" text="dark">
                      Light
                    </Badge>
                    <Badge bg="dark  me-1">Dark</Badge>
                  </div>
                </div>
                {ContextualVariations ? (
                  <pre>
                    {
                      `
<Badge bg="primary>Primary</Badge>
<Badge bg="secondary Secondary</Badge>
<Badge bg="success Success</Badge>
<Badge bg="danger Danger</Badge>
<Badge bg="warning text="dark">Warning</Badge>
<Badge bg="info Info</Badge>
<Badge bg="light text="dark">Light</Badge>
<Badge bg="dark Dark</Badge>
`
                    }
                  </pre>
                ) : null
                }
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Pill</h6>
                <p className="text-muted card-sub-title">
                  Use the <code>.bg-pill</code> modifier className to make badges
                  more rounded.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Pillshowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div>
                    <Badge pill bg="primary  me-1">
                      Primary
                    </Badge>
                    <Badge pill bg="secondary  me-1">
                      Secondary
                    </Badge>
                    <Badge pill bg="success  me-1">
                      Success
                    </Badge>
                    <Badge pill bg="danger  me-1">
                      Danger
                    </Badge>
                    <Badge pill bg="warning  me-1" text="dark">
                      Warning
                    </Badge>
                    <Badge pill bg="info  me-1">
                      Info
                    </Badge>
                    <Badge pill bg="ligh  me-1t" text="dark">
                      Light
                    </Badge>
                    <Badge pill bg="dark  me-1">
                      Dark
                    </Badge>
                  </div>
                </div>
                {Pillcode ? (
                  <pre>
                    {
                      `
<Badge pill bg="primary">Primary</Badge>
<Badge pill bg="secondary">Secondary</Badge>
<Badge pill bg="success">Success</Badge>
<Badge pill bg="danger">Danger</Badge>
<Badge pill bg="warning" text="dark">Warning</Badge>
<Badge pill bg="info">Info</Badge>
<Badge pill bg="light" text="dark">Light</Badge>
<Badge pill bg="dark">Dark</Badge>

`

                    }
                  </pre>
                ) : null
                }
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Buttons With Badges</h6>
                <p className="text-muted card-sub-title">
                  Badges can be used as part of links or buttons to provide a
                  counter.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { Buttonbadgeshowcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button
                      variant="primary" type="button" className="btn ripple ">
                      Notifications <Badge className="badge bg-light ms-2">4</Badge>
                    </Button>
                    <Button
                      variant="secondary" type="button" className="btn ripple ">
                      Notifications <Badge className="badge bg-dark ms-2">78</Badge>
                    </Button>
                    <Button
                      variant="success" type="button" className="btn ripple">
                      Notifications
                      <Badge className="badge bg-danger ms-2">12</Badge>
                    </Button>
                    <Button
                      variant="info" type="button" className="btn ripple">
                      Notifications
                      <Badge className="badge bg-warning ms-2">67</Badge>
                    </Button>
                    <Button
                      variant="danger" type="button" className="btn ripple">
                      Notifications
                      <Badge className="badge bg-primary ms-2">45</Badge>
                    </Button>
                    <Button
                      variant="warning" type="button" className="btn ripple">
                      Notifications
                      <Badge className="badge bg-info ms-2">120</Badge>
                    </Button>
                  </div>
                </div>
                {BBadgecode ? (
                  <pre>
                    {
                      `
<Button variant="primary">
Profile <Badge bg="secondary">4</Badge>
<span className="visually-hidden">unread messages</span>
</Button>

`
                    }
                  </pre>
                ) : null
                }
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={3} className=" d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <div className="card-header border-bottom-0 custom-card-header">
                <h6 className="main-content-label mb-3">Project Status</h6>
              </div>

              <Card.Body>
                <div className="list d-flex align-items-center p-3">
                <Stack spacing={2} direction="row">
      <CircularProgress style={{ color: "#51d866", fontSize: '20px' }} variant="determinate" value={100} />
    </Stack>

                  <div className="wrappe ms-3">
                    <h6 className="mb-1">Project Planning</h6>
                    <div>
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
                    <div>
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
                <div className="list d-flex align-items-center  p-3">
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
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Badges.propTypes = {};

Badges.defaultProps = {};

export default Badges;
