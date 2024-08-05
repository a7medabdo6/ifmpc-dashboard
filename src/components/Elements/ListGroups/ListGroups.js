import React, { Fragment, useState } from "react";
import {
  ListGroup,
  Badge,
  Breadcrumb,
  Button,
  Row,
  Card,
  Col,
  Form,
  Collapse,
} from "react-bootstrap";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
const ListGroups = () => {
  const [BasicExample, setBasicExample] = useState(false);
  const [ActiveItem, setActiveItem] = useState(false);
  const [DisabledItem, setDisabledItem] = useState(false);
  const [LinkandButtons, setLinkandButtons] = useState(false);
  const [UsingAvatars, setUsingAvatars] = useState(false);
  const [FlushList, setFlushList] = useState(false);
  const [Contextualclasses, setContextualclasses] = useState(false);
  const [Customcontent, setCustomcontent] = useState(false);
  const [orderListExample, setorderListExample] = useState(false);
  const [Withbadges, setWithbadges] = useState(false);
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">List-Group</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Elements</Breadcrumb.Item>
            <Breadcrumb.Item active>Breadcrumb.Itemst-Group</Breadcrumb.Item>
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
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" id="basic">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Basic Example</h6>
                <p className="text-muted card-sub-title">
                  The most basic list group is an unordered list with list items
                  and the proper classes. Build upon it with the options that
                  follow, or with your own CSS as needed.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicExample(!BasicExample)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </div>
                <Collapse in={BasicExample}>
                  <pre>
                    <code>
                      {`
<div className="example">
<ListGroup>
<ListGroup.Item>Cras justo odio</ListGroup.Item>
<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item>Morbi leo risus</ListGroup.Item>
<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
</div>
                        `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Active Item</h6>
                <p className="text-muted card-sub-title">
                  Add active className to a <code>.list-group-item</code> to
                  indicate the current active selection.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setActiveItem(!ActiveItem)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item active>
                      Dapibus ac facilisis in
                    </ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  </ListGroup>
                </div>
                <Collapse in={ActiveItem}>
                  <pre>
                    <code>
                      {`
<div className="example">
<ListGroup>
<ListGroup.Item>Cras justo odio</ListGroup.Item>
<ListGroup.Item active>
Dapibus ac facilisis in
</ListGroup.Item>
<ListGroup.Item>Morbi leo risus</ListGroup.Item>
<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
</div>
                        `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="disabled">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Disabled Item</h6>
                <p className="text-muted card-sub-title">
                  Add disabled className to a <code>.list-group-item</code> to
                  indicate the current active selection.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setDisabledItem(!DisabledItem)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item disabled>
                      Dapibus ac facilisis in
                    </ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  </ListGroup>
                </div>
                <Collapse in={DisabledItem}>
                  <pre>
                    <code>
                      {`
<div className="example">
<ListGroup>
<ListGroup.Item>Cras justo odio</ListGroup.Item>
<ListGroup.Item disabled>
Dapibus ac facilisis in
</ListGroup.Item>
<ListGroup.Item>Morbi leo risus</ListGroup.Item>
<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
</div>
                        `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="link">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Link and Buttons</h6>
                <p className="text-muted card-sub-title">
                  Use link tag or button to create actionable list group items
                  with hover, disabled, and active states by adding
                  <code>.list-group-item-action</code>.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setLinkandButtons(!LinkandButtons)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action active>
                      Cras justo odio
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      Dapibus ac facilisis in
                    </ListGroup.Item>
                    <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item action>
                      Porta ac consectetur ac
                    </ListGroup.Item>
                    <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>

                  <Collapse in={LinkandButtons}>
                    <pre>
                      <code>
                        {`
export function AlertClicked() {

  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action onClick={AlertClicked} active>
        Cras justo odio
      </ListGroup.Item><ListGroup.Item action onClick={AlertClicked}>
        Dapibus ac facilisis in
      </ListGroup.Item><ListGroup.Item action onClick={AlertClicked}>
        Morbi leo risus
      </ListGroup.Item>
      <ListGroup.Item action onClick={AlertClicked}>
        Porta ac consectetur ac
      </ListGroup.Item>
      <ListGroup.Item action onClick={AlertClicked}>
        Vestibulum at eros
      </ListGroup.Item>
    </ListGroup>

  )
}
                        `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="image">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Using Avatars</h6>
                <p className="text-muted card-sub-title">
                  A list that contain an image with the help of utility classes.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setUsingAvatars(!UsingAvatars)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ListGroup as="ul">
                    <ListGroup.Item
                      as="li"
                      className=" d-flex align-items-center"
                    >
                      <img
                        alt="avatar"
                        className="wd-30 rounded-circle mg-r-15"
                        src={require("../../../assets/img/users/5.jpg")}
                      />
                      <div>
                        <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                          Adrian Monino
                        </h6>
                        <span className="d-block tx-11 text-muted">
                          Premium Member
                        </span>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className=" d-flex align-items-center"
                    >
                      <img
                        alt="avatar"
                        className="wd-30 rounded-circle mg-r-15"
                        src={require("../../../assets/img/users/3.jpg")}
                      />
                      <div>
                        <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                          Joel Mendez
                        </h6>
                        <span className="d-block tx-11 text-muted">
                          Premium Member
                        </span>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className=" d-flex align-items-center"
                    >
                      <img
                        alt="avatar"
                        className="wd-30 rounded-circle mg-r-15"
                        src={require("../../../assets/img/users/4.jpg")}
                      />
                      <div>
                        <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                          Marianne Audrey
                        </h6>
                        <span className="d-block tx-11 text-muted">
                          Premium Member
                        </span>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <Collapse in={UsingAvatars}>
                  <pre>
                    <code>
                      {`
<ListGroup as="ul">
<ListGroup.Item as="li" className=" d-flex align-items-center">
<img
alt="avatar"
className="wd-30 rounded-circle mg-r-15"
src={require("../../../assets/img/users/5.jpg")}
/>
<div>
<h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
Adrian Monino
</h6>
<span className="d-block tx-11 text-muted">
Premium Member
</span>
</div>
</ListGroup.Item>
<ListGroup.Item as="li" className=" d-flex align-items-center">
<img
alt="avatar"
className="wd-30 rounded-circle mg-r-15"
src={require("../../../assets/img/users/3.jpg")}
/>
<div>
<h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
Joel Mendez
</h6>
<span className="d-block tx-11 text-muted">
Premium Member
</span>
</div>
</ListGroup.Item>
<ListGroup.Item as="li" className=" d-flex align-items-center">
<img
alt="avatar"
className="wd-30 rounded-circle mg-r-15"
src={require("../../../assets/img/users/4.jpg")}
/>
<div>
<h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
Marianne Audrey
</h6>
<span className="d-block tx-11 text-muted">
Premium Member
</span>
</div>
</ListGroup.Item>
</ListGroup>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="flush">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Flush List</h6>
                <p className="text-muted card-sub-title">
                  Add <code>.list-group-flush</code> to remove some borders and
                  rounded corners to render list group items edge-to-edge in a
                  parent container.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setFlushList(!FlushList)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  <Collapse in={FlushList}>
                    <pre>
                      <code>
                        {`
<ListGroup variant="flush">
<ListGroup.Item>Cras justo odio</ListGroup.Item>
<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item>Morbi leo risus</ListGroup.Item>
<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
                        `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="context">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Contextual classes</h6>
                <p className="text-muted card-sub-title">
                  Use contextual classes to style list items with a stateful
                  background and color.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setContextualclasses(!Contextualclasses)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ListGroup>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item variant="primary">
                      A simple primary list group item
                    </ListGroup.Item>
                    <ListGroup.Item variant="secondary">
                      A simple secondary list group item
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      A simple success list group item
                    </ListGroup.Item>
                    <ListGroup.Item variant="danger">
                      A simple danger list group item
                    </ListGroup.Item>
                    <ListGroup.Item variant="warning">
                      A simple warning list group item
                    </ListGroup.Item>
                    <ListGroup.Item variant="info">
                      A simple info list group item
                    </ListGroup.Item>
                    <ListGroup.Item variant="light">
                      A simple light list group item
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      A simple dark list group item
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <br />
                <Collapse in={Contextualclasses}>
                  <pre>
                    <code>
                      {`
<ListGroup>
<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item variant="primary">
A simple primary list group item
</ListGroup.Item>
<ListGroup.Item variant="secondary">
A simple secondary list group item
</ListGroup.Item>
<ListGroup.Item variant="success">
A simple success list group item
</ListGroup.Item>
<ListGroup.Item variant="danger">
A simple danger list group item
</ListGroup.Item>
<ListGroup.Item variant="warning">
A simple warning list group item
</ListGroup.Item>
<ListGroup.Item variant="info">
A simple info list group item
</ListGroup.Item>
<ListGroup.Item variant="light">
A simple light list group item
</ListGroup.Item>
<ListGroup.Item variant="dark">
A simple dark list group item
</ListGroup.Item>
</ListGroup>

                        `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="badge">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">With badges</h6>
                <p className="text-muted card-sub-title">
                  Add badges to any list group item to show unread counts,
                  activity, and more with the help of some.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setWithbadges(!Withbadges)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ListGroup>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">Cras justo odio</div>
                      <Badge variant="primary" pill>
                        16
                      </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        Dapibus ac facilisis in
                      </div>
                      <Badge variant="primary" pill>
                        8
                      </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">Morbi leo risus</div>
                      <Badge variant="primary" pill>
                        4
                      </Badge>
                    </ListGroup.Item>
                  </ListGroup>
                  <Collapse in={Withbadges}>
                    <pre>
                      <code>
                        {`
<ListGroup>
<ListGroup.Item
as="li"
className="d-flex justify-content-between align-items-start"
>
<div className="ms-2 me-auto">Cras justo odio</div>
<Badge variant="primary" pill>
16
</Badge>
</ListGroup.Item>
<ListGroup.Item
as="li"
className="d-flex justify-content-between align-items-start"
>
<div className="ms-2 me-auto">Dapibus ac facilisis in</div>
<Badge variant="primary" pill>
8
</Badge>
</ListGroup.Item>
<ListGroup.Item
as="li"
className="d-flex justify-content-between align-items-start"
>
<div className="ms-2 me-auto">Morbi leo risus</div>
<Badge variant="primary" pill>
4
</Badge>
</ListGroup.Item>
</ListGroup>

                        `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="content">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Custom content</h6>
                <p className="text-muted card-sub-title">
                  Add badges to any list group item to show unread counts,
                  activity, and more with the help of some.
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setCustomcontent(!Customcontent)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  
                  <>
                    <ListGroup defaultActiveKey="link1">
                      <ListGroup.Item action onClick={Customcontent} active>
                        <div className="list-group">
                          <Link
                            to="#"
                            className="list-group-item list-group-item-action active"
                          >
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="mb-1">List group item heading</h5>
                              <small>3 days ago</small>
                            </div>
                            <p className="mb-1">
                              Donec id elit non mi porta gravida at eget metus.
                              Maecenas sed diam eget risus varius blandit.
                            </p>
                            <small>Donec id elit non mi porta.</small>
                          </Link>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </>
                  <>
                    <div className="list-group">
                      <Link
                        to="#"
                        className="list-group-item list-group-item-action"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                          <small>3 days ago</small>
                        </div>
                        <p className="mb-1">
                          Donec id elit non mi porta gravida at eget metus.
                          Maecenas sed diam eget risus varius blandit.
                        </p>
                        <small>Donec id elit non mi porta.</small>
                      </Link>
                    </div>
                  </>
                  <>
                    <div className="list-group">
                      <Link
                        to="#"
                        className="list-group-item list-group-item-action"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                          <small>3 days ago</small>
                        </div>
                        <p className="mb-1">
                          Donec id elit non mi porta gravida at eget metus.
                          Maecenas sed diam eget risus varius blandit.
                        </p>
                        <small>Donec id elit non mi porta.</small>
                      </Link>
                    </div>
                  </>
                  <Collapse in={Customcontent}>
                    <pre>
                      <code>
                        {`
export function Customcontent() {

return (
<ListGroup defaultActiveKey="link1">
<ListGroup.Item action onClick={Customcontent} active>
<div className="list-group">
<Link to="#"
className="list-group-item list-group-item-action active"
>
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-1">List group item heading</h5>
<small>3 days ago</small>
</div>
<p className="mb-1">
Donec id elit non mi porta gravida at eget metus.
Maecenas sed diam eget risus varius blandit.
</p>
<small>Donec id elit non mi porta.</small>
</Link>
</div>
</ListGroup.Item>
</ListGroup>
)
}
                        `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className=" mg-b-20">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div className="main-content-label mg-b-5">
                List Example
                <p className="mg-b-20 text-muted card-sub-title">
                  It is Very Easy to Customize and it uses in your website
                  apllication
                </p>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setorderListExample(!orderListExample)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="listgroup-example">
                    <ListGroup>
                      <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li">
                          Dapibus ac facilisis in
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item as="li">Lorem</ListGroup.Item>
                        <ListGroup.Item as="li">established</ListGroup.Item>
                      </ListGroup>
                    </ListGroup>
                  </div>
                </div>
                <Collapse in={orderListExample}>
                  <pre>
                    <code>
                      {`
<ListGroup >
                      <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item as="li">Lorem</ListGroup.Item>
                        <ListGroup.Item as="li">established</ListGroup.Item>
                      </ListGroup>
                    </ListGroup>
                        `}
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
              <Card.Header className="custom-card-header">
                <h6 className="main-content-label mb-3">Project Status</h6>
              </Card.Header>
              <div className="">
                <div className="list d-flex align-items-center p-3">
                  <Stack spacing={2} direction="row">
                    <CircularProgress
                      style={{ color: "#51d866", fontSize: "20px" }}
                      variant="determinate"
                      value={100}
                    />
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
                <div className="list d-flex align-items-center p-3 border-top">
                  <Stack spacing={2} direction="row">
                    <CircularProgress
                      style={{ color: "#51d866", fontSize: "20px" }}
                      variant="determinate"
                      value={100}
                    />
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
                <div className="list d-flex align-items-center p-3 border-top">
                  <Stack spacing={2} direction="row">
                    <CircularProgress
                      style={{ color: "#53caed", fontSize: "20px" }}
                      variant="determinate"
                      value={75}
                    />
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
                <div className="list d-flex align-items-center  p-3 border-top">
                  <Stack spacing={2} direction="row">
                    <CircularProgress
                      style={{ color: "#f16d75", fontSize: "20px" }}
                      value={25}
                    />
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
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

ListGroups.propTypes = {};

ListGroups.defaultProps = {};

export default ListGroups;
