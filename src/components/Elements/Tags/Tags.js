import React, { Fragment, useState } from "react";
import { Badge, Breadcrumb, Button, Card, Col, Row, Form, Collapse } from "react-bootstrap";
// import * as badges from "../../../data/Elements/Badges/badges";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { TagsInput } from "react-tag-input-component";
import { Link } from "react-router-dom";
const Tags = () => {

  // Input Tags
  const [selected, setSelected] = useState([
    "Javascript",
    "ReactJs",
    "AngularJs",
    "VueJs",
    "jQuery",
  ]);
  // input-end
  const [Pillstags, setPillstags] = useState(false);
  const [Tags1, setTags1] = useState(false);

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Tags</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Tags
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className=" btn-icon-text my-2 me-2"
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
          <Card className=" custom-card" id="pill">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Pill Tags</h6>
                <p className="text-muted card-sub-title">
                  Below is the pill tags example
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setPillstags(!Pillstags)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <Badge pill bg="primary " className="mt-1 mb-1 me-1"> Primary</Badge>
                  <Badge pill bg="secondary" className=" mt-1 mb-1 me-1">Secondary</Badge>
                  <Badge pill bg="success" className=" mt-1 mb-1 me-1">Success</Badge>
                  <Badge pill bg="danger" className=" mt-1 mb-1 me-1"> Danger</Badge>
                  <Badge pill bg="warning" className=" mt-1 mb-1 me-1">Warning</Badge>
                  <Badge pill bg="info" className=" mt-1 mb-1 me-1">Info</Badge>
                  <Badge pill bg="light" text="dark" className=" mt-1 mb-1 me-1">Light</Badge>
                  <Badge pill bg="dark" className=" mt-1 mb-1 me-1">Dark</Badge>
                </div>
              </div>
              <Collapse in={Pillstags}>
                <pre>
                  <code>
                    {
                      `
<div className="example">
<Badge pill bg="primary " className="mt-1 mb-1"> Primary</Badge>
<Badge pill bg="secondary" className=" mt-1 mb-1">Secondary</Badge>
<Badge pill bg="success" className=" mt-1 mb-1">Success</Badge>
<Badge pill bg="danger" className=" mt-1 mb-1"> Danger</Badge>
<Badge pill bg="warning" text="dark" className=" mt-1 mb-1">Warning</Badge>
<Badge pill bg="info">Info</Badge>
<Badge pill bg="light" text="dark" className=" mt-1 mb-1">Light</Badge>
<Badge pill bg="dark" className=" mt-1 mb-1">Dark</Badge>
</div>

`
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="default">

            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Default Tags Addon</h6>
                <p className="text-muted card-sub-title">
                  Below is the default tags addon example
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <span className="tag tag-default">
                      One
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag tag-default">
                      Two
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag tag-default">
                      Three
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag tag-default">
                      Four
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="inptags">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Input Tags</h6>
                <p className="text-muted card-sub-title">
                  using  Pulgin:<code>react-tag-input-component </code> to your input
                  field to automatically change it to a tags input field.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setTags1(!Tags1)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="form-group ">
                    <div className="form-group mb-0">
                      <TagsInput className="form-control bg-info" value={selected} onChange={setSelected} name="courses" />
                    </div>
                  </div>
                </div>
                <Collapse in={Tags1}>
                  <pre>
                    <code>
                      {
                        `
export function Popoverbottom() {
import { TagsInput } from "react-tag-input-component";
const [selected, setSelected] = useState([
"Javascript",
"ReactJs",
"AngularJs",
"VueJs",
"jQuery",
]);
return (
<div className="example">
<div className="form-group ">
<div className="form-group mb-0">
<TagsInput className="form-control bg-info" value={selected} onChange={setSelected} name="courses" />
</div>
</div>
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
            <Card className=" custom-card">
              <Card.Header className="card-header  border-bottom-0 custom-card-header">
                <h6 className="main-content-label mb-0">Project Status</h6>
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

Tags.propTypes = {};

Tags.defaultProps = {};

export default Tags;
