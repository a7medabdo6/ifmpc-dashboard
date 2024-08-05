import React, { Fragment, useState } from "react";
import { Breadcrumb, Tab, Button, Tabs, Card, Col, Row, Nav, Form, Collapse } from "react-bootstrap";
const Tabse = () => {
  const [BasicStyleTabs, setBasicStyleTabs] = useState(false);
  const [BasicStyle2Tabs, setBasicStyle2Tabs] = useState(false);
  const [HorizontalTabs, setHorizontalTabs] = useState(false);
  const [VerticalTabs, setVerticalTabs] = useState(false);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Tabs</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Elements</Breadcrumb.Item>
            <Breadcrumb.Item active>Tabs</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              type="button"
              variant=""
              className="btn btn-white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              type="button"
              variant=""
              className="btn btn-white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              type="button"
              variant=""
              className="btn btn-primary my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>

      <Row className=" row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card" id="basic-alert">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div className="main-content-label mg-b-5">Basic Style Tabs
                <p className="text-muted card-sub-title">
                  It is Very Easy to Customize and it uses in your website
                  apllication.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicStyleTabs(!BasicStyleTabs)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="panel panel-primary tabs-style-1">
                    <div className=" tab-menu-heading">
                      <div className="tabs-menu1 ">
                        <Tabs
                          defaultActiveKey="home"
                          className="nav panel-tabs  main-nav-line"
                        >
                          <Tab className="border border-top-0" eventKey="home" title="Home">
                            <div>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui officia
                              deserunt mollitia animi, id est laborum et dolorum
                              fuga. Et harum quidem rerum facilis est et
                              expedita distinctio. Nam libero tempore, cum
                              soluta nobis est eligendi optio cumque nihil
                              impedit quo minus id quod maxime placeat facere
                              possimus, omnis voluptas assumenda est, omnis
                              dolor repellendus.
                            </div>
                          </Tab>
                          <Tab
                            className="border border-top-0"
                            eventKey="Profile"
                            title="Profile"
                          >
                            <div>
                              <p>
                                dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga.
                              </p>
                              <p>
                                Et harum quidem rerum facilis est et expedita
                                distinctio. Nam libero tempore, cum soluta nobis
                                est eligendi optio cumque nihil impedit quo
                                minus id quod maxime
                              </p>
                              <p className="mb-0">
                                placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus.
                              </p>
                            </div>
                          </Tab>
                          <Tab
                            className="border border-top-0"
                            eventKey="Contact"
                            title="Contact"
                          >
                            <div>
                              <p>
                                praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident,
                              </p>
                              <p className="mb-0">
                                similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga.
                                Et harum quidem rerum facilis est et expedita
                                distinctio. Nam libero tempore, cum soluta nobis
                                est eligendi optio cumque nihil impedit quo
                                minus id quod maxime placeat facere possimus,
                                omnis voluptas assumenda est, omnis dolor
                                repellendus.
                              </p>
                            </div>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
                <Collapse in={BasicStyleTabs}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<div className="panel panel-primary tabs-style-1">
<div className=" tab-menu-heading">
<div className="tabs-menu1 ">
<Tabs
defaultActiveKey="home"
className="nav panel-tabs  main-nav-line"
>
<Tab className="border border-top-0" eventKey="home" title="Home">
<div>
At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditiis praesentium voluptatum
deleniti atque corrupti quos dolores et quas
molestias excepturi sint occaecati cupiditate non
provident, similique sunt in culpa qui officia
deserunt mollitia animi, id est laborum et dolorum
fuga. Et harum quidem rerum facilis est et
expedita distinctio. Nam libero tempore, cum
soluta nobis est eligendi optio cumque nihil
impedit quo minus id quod maxime placeat facere
possimus, omnis voluptas assumenda est, omnis
dolor repellendus.
</div>
</Tab>
<Tab
className="border border-top-0"
eventKey="Profile"
title="Profile"
>
<div>
<p>
dignissimos ducimus qui blanditiis praesentium
voluptatum deleniti atque corrupti quos dolores
et quas molestias excepturi sint occaecati
cupiditate non provident, similique sunt in
culpa qui officia deserunt mollitia animi, id
est laborum et dolorum fuga.
</p>
<p>
Et harum quidem rerum facilis est et expedita
distinctio. Nam libero tempore, cum soluta nobis
est eligendi optio cumque nihil impedit quo
minus id quod maxime
</p>
<p className="mb-0">
placeat facere possimus, omnis voluptas
assumenda est, omnis dolor repellendus.
</p>
</div>
</Tab>
<Tab
className="border border-top-0"
eventKey="Contact"
title="Contact"
>
<div>
<p>
praesentium voluptatum deleniti atque corrupti
quos dolores et quas molestias excepturi sint
occaecati cupiditate non provident,
</p>
<p className="mb-0">
similique sunt in culpa qui officia deserunt
mollitia animi, id est laborum et dolorum fuga.
Et harum quidem rerum facilis est et expedita
distinctio. Nam libero tempore, cum soluta nobis
est eligendi optio cumque nihil impedit quo
minus id quod maxime placeat facere possimus,
omnis voluptas assumenda est, omnis dolor
repellendus.
</p>
</div>
</Tab>
</Tabs>
</div>
</div>
</div>
</div>

`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12} className="col-xl-12">
          <Card className="custom-card mg-b-20" id="tabs-style2">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div className="main-content-label mg-b-5">Basic Style2 Tabs
                <p className="text-muted card-sub-title">
                  It is Very Easy to Customize and it uses in your website
                  apllication.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicStyle2Tabs(!BasicStyle2Tabs)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="panel panel-primary tabs-style-2">
                    <div className=" tab-menu-heading">
                      <div className="tabs-menu1">
                        <Tab.Container defaultActiveKey="tab4">
                          <Nav
                            variant="pills"
                            className="nav panel-tabs main-nav-line"
                          >
                            <Nav.Item>
                              <Nav.Link eventKey="tab4" className="mt-1">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="tab5" className="mt-1">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="tab6" className="mt-1">Tab 3</Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="tab4" className="border">
                              At vero eos et accusamus et iusto odio
                              dignissimos ducimus qui blanditiis praesentium
                              voluptatum deleniti atque corrupti quos dolores
                              et quas molestias excepturi sint occaecati
                              cupiditate non provident, similique sunt in
                              culpa qui officia deserunt mollitia animi, id
                              est laborum et dolorum fuga. Et harum quidem
                              rerum facilis est et expedita distinctio. Nam
                              libero tempore, cum soluta nobis est eligendi
                              optio cumque nihil impedit quo minus id quod
                              maxime placeat facere possimus, omnis voluptas
                              assumenda est, omnis dolor repellendus.
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab5" className="border">
                              <p>
                                dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique
                                sunt in culpa qui officia deserunt mollitia
                                animi, id est laborum et dolorum fuga.
                              </p>
                              <p>
                                Et harum quidem rerum facilis est et expedita
                                distinctio. Nam libero tempore, cum soluta
                                nobis est eligendi optio cumque nihil impedit
                                quo minus id quod maxime
                              </p>
                              <p className="mb-0">
                                placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus.
                              </p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="tab6" className="border">
                              <p>
                                praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident,
                              </p>
                              <p className="mb-0">
                                similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum
                                fuga. Et harum quidem rerum facilis est et
                                expedita distinctio. Nam libero tempore, cum
                                soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat
                                facere possimus, omnis voluptas assumenda est,
                                omnis dolor repellendus.
                              </p>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>
                  </div>
                </div>
                <Collapse in={BasicStyle2Tabs}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<div className="panel panel-primary tabs-style-2">
<div className=" tab-menu-heading">
<div className="tabs-menu1">
<Tab.Container defaultActiveKey="tab4">
<Nav
variant="pills"
className="nav panel-tabs main-nav-line"
>
<Nav.Item>
<Nav.Link eventKey="tab4" className="mt-1">Tab 1</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="tab5" className="mt-1">Tab 2</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="tab6" className="mt-1">Tab 3</Nav.Link>
</Nav.Item>
</Nav>
<Tab.Content>
<Tab.Pane eventKey="tab4" className="border">
At vero eos et accusamus et iusto odio
dignissimos ducimus qui blanditiis praesentium
voluptatum deleniti atque corrupti quos dolores
et quas molestias excepturi sint occaecati
cupiditate non provident, similique sunt in
culpa qui officia deserunt mollitia animi, id
est laborum et dolorum fuga. Et harum quidem
rerum facilis est et expedita distinctio. Nam
libero tempore, cum soluta nobis est eligendi
optio cumque nihil impedit quo minus id quod
maxime placeat facere possimus, omnis voluptas
assumenda est, omnis dolor repellendus.
</Tab.Pane>
<Tab.Pane eventKey="tab5" className="border">
<p>
dignissimos ducimus qui blanditiis praesentium
voluptatum deleniti atque corrupti quos
dolores et quas molestias excepturi sint
occaecati cupiditate non provident, similique
sunt in culpa qui officia deserunt mollitia
animi, id est laborum et dolorum fuga.
</p>
<p>
Et harum quidem rerum facilis est et expedita
distinctio. Nam libero tempore, cum soluta
nobis est eligendi optio cumque nihil impedit
quo minus id quod maxime
</p>
<p className="mb-0">
placeat facere possimus, omnis voluptas
assumenda est, omnis dolor repellendus.
</p>
</Tab.Pane>

<Tab.Pane eventKey="tab6" className="border">
<p>
praesentium voluptatum deleniti atque corrupti
quos dolores et quas molestias excepturi sint
occaecati cupiditate non provident,
</p>
<p className="mb-0">
similique sunt in culpa qui officia deserunt
mollitia animi, id est laborum et dolorum
fuga. Et harum quidem rerum facilis est et
expedita distinctio. Nam libero tempore, cum
soluta nobis est eligendi optio cumque nihil
impedit quo minus id quod maxime placeat
facere possimus, omnis voluptas assumenda est,
omnis dolor repellendus.
</p>
</Tab.Pane>
</Tab.Content>
</Tab.Container>
</div>
</div>
</div>
</div>
`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12}>
          <Card className="custom-card mg-b-20" id="tabs-style">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div className="main-content-label mg-b-5">Horizontal Tabs
                <p className="text-muted card-sub-title">
                  It is Very Easy to Customize and it uses in your website
                  apllication.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setHorizontalTabs(!HorizontalTabs)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="panel panel-primary tabs-style-3">
                    <div className="tab-menu-heading">
                      <div className="tabs-menu ">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="tab11" >
                          <Row>
                            <Nav variant="pills" className="panel-body tabs-menu-body">
                              <Nav.Item>
                                <Nav.Link eventKey="tab11">Tab Style 01</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tab12">Tab Style 02</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tab13">Tab Style 03</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tab14">Tab Style 04</Nav.Link>
                              </Nav.Item>
                            </Nav>
                            <Tab.Content>
                              <Tab.Pane eventKey="tab11">
                                <p className="mb-0">
                                  Et harum quidem rerum facilis est et expedita
                                  distinctio. Nam libero tempore, cum soluta nobis est
                                  eligendi optio cumque nihil impedit quo minus id
                                  quod maxime placeat facere possimus, omnis voluptas
                                  assumenda est, omnis dolor repellendus.
                                </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="tab12">
                                <p>
                                  At vero eos et accusamus et iusto odio dignissimos
                                  ducimus qui blanditiis praesentium voluptatum
                                  deleniti atque corrupti quos dolores et quas
                                  molestias excepturi sint occaecati cupiditate non
                                  provident, similique sunt in culpa qui officia
                                  deserunt mollitia animi, id est laborum et dolorum
                                  fuga.
                                </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="tab13">
                                <p>
                                  At vero eos et accusamus et iusto odio dignissimos
                                  ducimus qui blanditiis praesentium voluptatum
                                  deleniti atque corrupti quos dolores et quas
                                  molestias excepturi sint occaecati cupiditate non
                                  provident, similique sunt in culpa qui officia
                                  deserunt mollitia animi, id est laborum et dolorum
                                  fuga.
                                </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="tab14">
                                <p>
                                  At vero eos et accusamus et iusto odio dignissimos
                                  ducimus qui blanditiis praesentium voluptatum
                                  deleniti atque corrupti quos dolores et quas
                                  molestias excepturi sint occaecati cupiditate non
                                  provident, similique sunt in culpa qui officia
                                  deserunt mollitia animi, id est laborum et dolorum
                                  fuga.
                                </p>
                              </Tab.Pane>
                            </Tab.Content>
                          </Row>
                        </Tab.Container>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <Collapse in={HorizontalTabs}>
                <pre>
                  <code>
                    {
                      `
<div className="example">
<div className="panel panel-primary tabs-style-3">
<div className="tab-menu-heading">
<div className="tabs-menu ">
<Tab.Container id="left-tabs-example" defaultActiveKey="tab11" >
<Row>
<Nav variant="pills" className="panel-body tabs-menu-body">
<Nav.Item>
<Nav.Link eventKey="tab11">Tab Style 01</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="tab12">Tab Style 02</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="tab13">Tab Style 03</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="tab14">Tab Style 04</Nav.Link>
</Nav.Item>
</Nav>
<Tab.Content>
<Tab.Pane eventKey="tab11">
<p className="mb-0">
Et harum quidem rerum facilis est et expedita
distinctio. Nam libero tempore, cum soluta nobis est
eligendi optio cumque nihil impedit quo minus id
quod maxime placeat facere possimus, omnis voluptas
assumenda est, omnis dolor repellendus.
</p>
</Tab.Pane>
<Tab.Pane eventKey="tab12">
<p>
At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditiis praesentium voluptatum
deleniti atque corrupti quos dolores et quas
molestias excepturi sint occaecati cupiditate non
provident, similique sunt in culpa qui officia
deserunt mollitia animi, id est laborum et dolorum
fuga.
</p>
</Tab.Pane>
<Tab.Pane eventKey="tab13">
<p>
At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditiis praesentium voluptatum
deleniti atque corrupti quos dolores et quas
molestias excepturi sint occaecati cupiditate non
provident, similique sunt in culpa qui officia
deserunt mollitia animi, id est laborum et dolorum
fuga.
</p>
</Tab.Pane>
<Tab.Pane eventKey="tab14">
<p>
At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditiis praesentium voluptatum
deleniti atque corrupti quos dolores et quas
molestias excepturi sint occaecati cupiditate non
provident, similique sunt in culpa qui officia
deserunt mollitia animi, id est laborum et dolorum
fuga.
</p>
</Tab.Pane>
</Tab.Content>
</Row>
</Tab.Container>
</div>
</div>
</div>
</div>
`
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12} className="col-xl-12">
          <Card className="custom-card" id="tabs-style43">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div className="main-content-label mg-b-5">Vertical Tabs
                <p className="text-muted card-sub-title">
                  It is Very Easy to Customize and it uses in your website
                  apllication.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setVerticalTabs(!VerticalTabs)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="d-md-flex">
                    <div className="">
                      <div className="panel panel-primary ">
                        <div className="tab-menu-heading">
                          <div className="tabs-menu ">

                            <Tab.Container id="left-tabs-example" defaultActiveKey="tab21">
                              <Row>
                                <Col sm={3}>
                                  <Nav variant="pills" className="flex-column nav panel-tabs me-3" >
                                    <Nav.Item>
                                      <Nav.Link eventKey="tab21">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="tab22">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="tab23">Tab 3</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="tab24">Tab 4</Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                                <Col sm={9}>
                                  <Tab.Content className="panel-body tabs-menu-body">
                                    <Tab.Pane eventKey="tab21">
                                      <p>
                                        At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum
                                        deleniti atque corrupti quos dolores et quas
                                        molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt in culpa qui officia
                                        deserunt mollitia animi, id est laborum et dolorum
                                        fuga.
                                      </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab22">
                                      At vero eos et accusamus et iusto odio dignissimos
                                      ducimus qui blanditiis praesentium voluptatum
                                      deleniti atque corrupti quos dolores et quas
                                      molestias excepturi sint occaecati cupiditate non
                                      provident, similique sunt in culpa qui officia
                                      deserunt mollitia animi, id est laborum et dolorum
                                      fuga.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab23">
                                      <p className="mb-0">
                                        Et harum quidem rerum facilis est et expedita
                                        distinctio. Nam libero tempore, cum soluta nobis
                                        est eligendi optio cumque nihil impedit quo minus
                                        id quod maxime placeat facere possimus, omnis
                                        voluptas assumenda est, omnis dolor repellendus.
                                      </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab24">
                                      <p>
                                        Et harum quidem rerum facilis est et expedita
                                        distinctio. Nam libero tempore, cum soluta nobis
                                        est eligendi optio cumque nihil impedit quo minus
                                        id quod maxime placeat facere possimus, omnis
                                        voluptas assumenda est, omnis dolor repellendus.
                                      </p>
                                      <p>
                                        Et harum quidem rerum facilis est et expedita
                                        distinctio. Nam libero tempore, cum soluta nobis
                                        est eligendi optio cumque nihil impedit quo minus
                                        id quod maxime placeat facere possimus, omnis
                                        voluptas assumenda est, omnis dolor repellendus.
                                      </p>
                                      <p className="mb-0">
                                        At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum
                                        deleniti atque corrupti quos dolores et quas
                                        molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt in culpa qui officia
                                        deserunt mollitia animi, id est laborum et dolorum
                                        fuga.
                                      </p>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Collapse in={VerticalTabs}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<div className="d-md-flex">
<div className="">
<div className="panel panel-primary ">
<div className="tab-menu-heading">
<div className="tabs-menu ">

<Tab.Container id="left-tabs-example" defaultActiveKey="tab21">
<Row>
<Col sm={3}>
<Nav variant="pills" className="flex-column nav panel-tabs me-3" >
<Nav.Item>
<Nav.Link eventKey="tab21">Tab 1</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="tab22">Tab 2</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="tab23">Tab 3</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="tab24">Tab 4</Nav.Link>
</Nav.Item>
</Nav>
</Col>
<Col sm={9}>
<Tab.Content className="panel-body tabs-menu-body">
<Tab.Pane eventKey="tab21">
<p>
At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditiis praesentium voluptatum
deleniti atque corrupti quos dolores et quas
molestias excepturi sint occaecati cupiditate non
provident, similique sunt in culpa qui officia
deserunt mollitia animi, id est laborum et dolorum
fuga.
</p>
</Tab.Pane>
<Tab.Pane eventKey="tab22">
At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditiis praesentium voluptatum
deleniti atque corrupti quos dolores et quas
molestias excepturi sint occaecati cupiditate non
provident, similique sunt in culpa qui officia
deserunt mollitia animi, id est laborum et dolorum
fuga.
</Tab.Pane>
<Tab.Pane eventKey="tab23">
<p className="mb-0">
Et harum quidem rerum facilis est et expedita
distinctio. Nam libero tempore, cum soluta nobis
est eligendi optio cumque nihil impedit quo minus
id quod maxime placeat facere possimus, omnis
voluptas assumenda est, omnis dolor repellendus.
</p>
</Tab.Pane>
<Tab.Pane eventKey="tab24">
<p>
Et harum quidem rerum facilis est et expedita
distinctio. Nam libero tempore, cum soluta nobis
est eligendi optio cumque nihil impedit quo minus
id quod maxime placeat facere possimus, omnis
voluptas assumenda est, omnis dolor repellendus.
</p>
<p>
Et harum quidem rerum facilis est et expedita
distinctio. Nam libero tempore, cum soluta nobis
est eligendi optio cumque nihil impedit quo minus
id quod maxime placeat facere possimus, omnis
voluptas assumenda est, omnis dolor repellendus.
</p>
<p className="mb-0">
At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditiis praesentium voluptatum
deleniti atque corrupti quos dolores et quas
molestias excepturi sint occaecati cupiditate non
provident, similique sunt in culpa qui officia
deserunt mollitia animi, id est laborum et dolorum
fuga.
</p>
</Tab.Pane>
</Tab.Content>
</Col>
</Row>
</Tab.Container>
</div>
</div>
</div>
</div>
</div>
</div>
`
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Tabse;
