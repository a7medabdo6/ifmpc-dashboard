import React, { Fragment, useState } from "react";
import { Nav, Col, Tab, Breadcrumb, Button, Row, Card, Navbar, Form, Collapse } from "react-bootstrap";
const Navigation = () => {
  const [BasicNavigation, setBasicNavigation] = useState(false);
  const [PillsNavigation, setPillsNavigation] = useState(false);
  const [Verticalnavpill, setVerticalnavpill] = useState(false);
  const [HorizontalAlignment, setHorizontalAlignment] = useState(false);
  const [SimpleTabNavigation, setSimpleTabNavigation] = useState(false);
  const [Colorednav, setColorednav] = useState(false);
  const [ComplexTabNavigation, setComplexTabNavigation] = useState(false);



  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Navigation</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Navigation
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button variant="white" type="button" className="btn-icon-text my-2 me-2" ><i className="fe fe-download me-2"></i>Import</Button>
            <Button variant="white" type="button" className="btn-icon-text my-2 me-2"><i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button

              variant="primary"
              type="button" className="my-2 btn-icon-text">
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Basic Navigation</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of a basic navigation
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicNavigation(!BasicNavigation)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 bg-light">
                    <Navbar
                      className="main-nav flex-column flex-md-row"
                      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                      <Nav defaultActiveKey="Home">
                        <Nav.Item>
                          <Nav.Link eventKey="Home">
                            Home
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="About">
                            About
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Pages">
                            Pages
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Custom">
                            Custom
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Navbar>
                  </div>
                </div>
                <Collapse in={BasicNavigation}>
                  <pre>
                    <code>
                      {
                        `
               
<Navbar className="main-nav flex-column flex-md-row"onSelect={(selectedKey) => alert("selected ${"selectedKey"}")}>
<Nav defaultActiveKey="Home">
<Nav.Item><Nav.Link eventKey="Home">Home</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="About">About</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="Pages">Pages</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="Custom">Custom</Nav.Link></Nav.Item>
</Nav>
</Navbar>

Note:In onSelect please replace the  blacktick symbol in the place of "".

                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>

            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Pills Navigation</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of a pill navigation
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setPillsNavigation(!PillsNavigation)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 bg-light">
                    <Nav
                      variant="pills"
                      defaultactivekey="home"

                    >
                      <Nav.Item>
                        <Nav.Link eventKey="home">
                          Home
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="About" >
                          About
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Pages" >
                          Pages
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                          disabled
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>

              </div>
              <Collapse in={PillsNavigation}>
                <pre>
                  <code>
                    {
                      `
                     <Nav variant="pills" defaultactivekey="/home">
                      <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="About">About</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="Pages">Pages</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="disabled" disabled>disabled</Nav.Link></Nav.Item>
                    </Nav>
                  `
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Vertical Pills Navigation
                </h6>
                <p className="text-muted card-sub-title">
                  Below is an example of a pill navigation in vertical mode
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setVerticalnavpill(!Verticalnavpill)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 bg-light">
                    <Nav
                      variant="pills"
                      // defaultactivekey="/home"
                      className="flex-column"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="Home" >
                          Home
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="About">
                          About
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Pages" >
                          Pages
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Custom">
                          Custom
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Verticalnavpill}>
                <pre>
                  <code>
                    {
                      `
<Nav variant="pills" className="flex-column">
                      <Nav.Item><Nav.Link eventKey="Home">Home</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="About">About</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="Pages" >Pages</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="Custom">Custom</Nav.Link>
                      </Nav.Item>
                    </Nav>
                        `
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Horizontal Alignment</h6>
                <p className="text-muted card-sub-title">
                  A navigation with center and right in which left is the default.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setHorizontalAlignment(!HorizontalAlignment)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 bg-light mb-3">
                    <Nav
                      defaultactivekey="/home"
                      className="nav main-nav flex-column flex-md-row justify-content-start "
                    >
                      <Nav.Link eventKey="/home" >
                        Home
                      </Nav.Link>

                      <Nav.Link eventKey="About" >
                        About
                      </Nav.Link>

                      <Nav.Link eventKey="Pages" >
                        Pages
                      </Nav.Link>

                      <Nav.Link eventKey="Custom" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 bg-light mb-3">
                    <Nav
                      defaultactivekey="/home"
                      className="nav main-nav flex-column flex-md-row justify-content-center  "
                    >
                      <Nav.Link eventKey="/home" >
                        Home
                      </Nav.Link>

                      <Nav.Link eventKey="About" >
                        About
                      </Nav.Link>

                      <Nav.Link eventKey="Pages" >
                        Pages
                      </Nav.Link>

                      <Nav.Link eventKey="Custom" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 bg-light">
                    <Nav
                      defaultactivekey="/home"
                      className="nav main-nav flex-column flex-md-row justify-content-end "
                    >
                      <Nav.Link eventKey="/home" >
                        Home
                      </Nav.Link>

                      <Nav.Link eventKey="About" >
                        About
                      </Nav.Link>

                      <Nav.Link eventKey="Pages" >
                        Pages
                      </Nav.Link>

                      <Nav.Link eventKey="Custom" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={HorizontalAlignment}>
                <pre>
                  <code>
                    {
                      `
 <div className="p-3 bg-light mb-3">
                    <Nav defaultactivekey="/home" className="nav main-nav flex-column flex-md-row justify-content-start">
                      <Nav.Link eventKey="home">Home</Nav.Link>
                      <Nav.Link eventKey="About">About</Nav.Link>
                      <Nav.Link eventKey="Pages">Pages</Nav.Link>
                      <Nav.Link eventKey="Custom">Custom</Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 bg-light mb-3">
                    <Nav defaultactivekey="/home" className="nav main-nav flex-column flex-md-row justify-content-center">
                      <Nav.Link eventKey="home">Home</Nav.Link>
                      <Nav.Link eventKey="About">About</Nav.Link>
                      <Nav.Link eventKey="Pages">Pages</Nav.Link>
                      <Nav.Link eventKey="Custom">Custom</Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 bg-light">
                    <Nav defaultactivekey="/home" className="nav main-nav flex-column flex-md-row justify-content-end ">
                      <Nav.Link eventKey="home">Home</Nav.Link>
                      <Nav.Link eventKey="About">About</Nav.Link>
                      <Nav.Link eventKey="Pages">Pages</Nav.Link>
                      <Nav.Link eventKey="Custom">Custom</Nav.Link>
                    </Nav>
                  </div>
                        `
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Colored Nav Variations
                </h6>
                <p className="text-muted card-sub-title">
                  A navigation with colored nav that wrapped the navigation.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setColorednav(!Colorednav)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 bg-primary mb-3" >
                    <Nav defaultActiveKey="home"
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"

                    >
                      <Nav.Link evenkey="home">
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="About">
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="Pages">
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="Custom">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 bg-secondary">
                    <Nav defaultActiveKey="home"
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"

                    >
                      <Nav.Link eventKey="home">
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="About">
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="Pages">
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="Custom">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Colorednav}>
                <pre>
                  <code>
                    {
                      `
 <Nav defaultActiveKey="home" className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
                      <Nav.Link  href=">Home</Nav.Link>
                      <Nav.Link eventKey="About">
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="Pages" >
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="Custom" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 bg-secondary">
                    <Nav defaultActiveKey="home"
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"
                    >
                      <Nav.Link  href="home">
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="About" >
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="Pages" >
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="Custom" >
                        Custom
                      </Nav.Link>
                    </Nav>
                        `
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card className="custom-card" id="tab">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Simple Tab Navigation</h6>
                <p className="text-muted card-sub-title">
                  Below is a tab navigation that have only few links.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setSimpleTabNavigation(!SimpleTabNavigation)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="border">
                    <Tab.Container defaultActiveKey="first">
                      <Col className=" bg-gray-300 nav-bg">
                        <Nav variant="pills">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Contact</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col>
                        <Tab.Content>
                          <Tab.Pane eventKey="first" id="tabCont3">
                            Itaque earum rerum hic tenetur a sapiente delectus, ut
                            aut reiciendis voluptatibus maiores alias consequatur
                            aut perferendis doloribus asperiores repellat.
                          </Tab.Pane>
                          <Tab.Pane eventKey="second" id="tabCont3">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum deleniti
                            atque corrupti quos dolores et quas molestias
                            excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia
                            animi, id est laborum et dolorum fuga.
                          </Tab.Pane>
                          <Tab.Pane eventKey="third" id="tabCont3">
                            Itaque earum rerum hic tenetur a sapiente delectus, ut
                            aut reiciendis voluptatibus maiores alias consequatur
                            aut perferendis doloribus asperiores repellat.
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <Collapse in={SimpleTabNavigation}>
                <pre>
                  <code>
                    {
                      `
<Tab.Container defaultActiveKey="first">
<Col className=" bg-gray-300 nav-bg">
<Nav variant="pills">
<Nav.Item><Nav.Link eventKey="first">Home</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="second">About</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="third">Contact</Nav.Link></Nav.Item>
</Nav>
</Col>
<Col>
<Tab.Content>
<Tab.Pane eventKey="first" id="tabCont3">
Itaque earum rerum hic tenetur a sapiente delectus, ut
aut reiciendis voluptatibus maiores alias consequatur
aut perferendis doloribus asperiores repellat.
</Tab.Pane>
<Tab.Pane eventKey="second" id="tabCont3">
At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditiis praesentium voluptatum deleniti
atque corrupti quos dolores et quas molestias
excepturi sint occaecati cupiditate non provident,
similique sunt in culpa qui officia deserunt mollitia
animi, id est laborum et dolorum fuga.
</Tab.Pane>
<Tab.Pane eventKey="third" id="tabCont3">
Itaque earum rerum hic tenetur a sapiente delectus, ut
aut reiciendis voluptatibus maiores alias consequatur
aut perferendis doloribus asperiores repellat.
</Tab.Pane>
</Tab.Content>
</Col>
</Tab.Container>
                        `
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Complex Tab Navigation
                </h6>
                <p className="text-muted card-sub-title">
                  Below is a tab navigation that have many links using
                  lightslider.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setComplexTabNavigation(!ComplexTabNavigation)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <div className="border">
                    <Tab.Container defaultActiveKey="mainTab1" className="card-header-tab" variant="tabs">
                      <Col className=" bg-gray-300 nav-bg main-nav-tabs p-0">
                        <Nav variant="pills">
                          <Nav.Item>
                            <Nav.Link eventKey="mainTab1">
                              Dashboard
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="mainTab2">
                              Apps
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="mainTab3">
                              Maps
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="mainTab4">
                              Tables
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="mainTab5">
                              UI Elements
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="mainTab6">
                              Forms
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="mainTab7">
                              Charts
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="mainTab8">
                              Pages
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col>
                        <Tab.Content className="card-body tab-content">
                          <Tab.Pane
                            eventKey="mainTab1"
                            className="main-tab-content"
                          >
                            <h6 className="tx-gray-900">Dashboard</h6>
                            <span>
                              Nam libero tempore, cum soluta nobis est eligendi
                              optio cumque nihil impedit quo minus id quod maxime
                              placeat facere possimus, omnis voluptas assumenda
                              est
                            </span>
                          </Tab.Pane>
                          <Tab.Pane
                            className="main-tab-pane"
                            id="mainTab2"
                            eventKey="mainTab2"
                          >
                            <h6 className="tx-gray-900">Apps</h6>
                            <span>
                              These cases are perfectly simple and easy to
                              distinguish. In a free hour, when our power of
                              choice is untrammelled and when nothing prevents our
                              being able to do what we like best
                            </span>
                          </Tab.Pane>
                          <Tab.Pane
                            className="main-tab-pane"
                            id="mainTab3"
                            eventKey="mainTab3"
                          >
                            <h6 className="tx-gray-900">Maps</h6>
                            <span>
                              But I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system, and expound the actual teachings of the
                              great explorer of the truth, the master-builder of
                              human happiness. No one rejects, dislikes, or avoids
                              pleasure itself, because it is pleasure, but because
                              those who do not know how to pursue pleasure
                              rationally encounter consequences that are extremely
                              painful.
                            </span>
                          </Tab.Pane>
                          <Tab.Pane
                            className="main-tab-pane"
                            id="mainTab4"
                            eventKey="mainTab4"
                          >
                            <h6 className="tx-gray-900">Tables</h6>
                            <span>
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia consequuntur
                              magni dolores eos qui ratione voluptatem sequi
                              nesciunt. Neque porro quisquam est, qui dolorem
                              ipsum quia dolor sit amet, consectetur, adipisci
                              velit, sed quia non numquam eius modi tempora
                              incidunt ut labore et dolore magnam aliquam quaerat
                              voluptatem..
                            </span>
                          </Tab.Pane>
                          <Tab.Pane
                            className="main-tab-pane"
                            id="mainTab5"
                            eventKey="mainTab5"
                          >
                            <h6 className="tx-gray-900">UI Elements</h6>
                            <span>
                              There are many variations of passages of Lorem Ipsum
                              available, but the majority have suffered alteration
                              in some form, by injected humour, or randomised
                              words which don't look even slightly believable.
                            </span>
                          </Tab.Pane>
                          <Tab.Pane
                            className="main-tab-pane"
                            id="mainTab6"
                            eventKey="mainTab6"
                          >
                            <h6 className="tx-gray-900">Forms</h6>
                            <span>
                              On the other hand, we denounce with righteous
                              indignation and dislike men who are so beguiled and
                              demoralized by the charms of pleasure of the moment,
                              so blinded by desire, that they cannot foresee the
                              pain and trouble that are bound to ensue; and equal
                              blame belongs to those who fail in their duty
                              through weakness of will, which is the same as
                              saying through shrinking from toil and pain..
                            </span>
                          </Tab.Pane>
                          <Tab.Pane
                            className="main-tab-pane"
                            id="mainTab7"
                            eventKey="mainTab7"
                          >
                            <h6 className="tx-gray-900">Charts</h6>
                            <span>
                              Duis aute irure dolor in reprehenderit in voluptate
                              velit esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat non proident, sunt
                              in culpa qui officia deserunt mollit anim id est
                              laborum.
                            </span>
                          </Tab.Pane>
                          <Tab.Pane
                            className="main-tab-pane"
                            id="mainTab8"
                            eventKey="mainTab8"
                          >
                            <h6 className="tx-gray-900">Pages</h6>
                            <span>
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia consequuntur
                              magni dolores eos qui ratione voluptatem sequi
                              nesciunt. Neque porro quisquam est, qui dolorem
                              ipsum quia dolor sit amet, consectetur, adipisci
                              velit, sed quia non numquam eius modi tempora
                              incidunt ut labore et dolore magnam aliquam quaerat
                              voluptatem.
                            </span>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Tab.Container>

                  </div>
                </div>
              </div>
              <Collapse in={ComplexTabNavigation}>
                <pre>
                  <code>
                    {
                      `
<Tab.Container defaultActiveKey="mainTab1" className="card-header-tab" variant="tabs">
<Col className=" bg-gray-300 nav-bg main-nav-tabs p-0">
<Nav variant="pills">
<Nav.Item><Nav.Link eventKey="mainTab1">Dashboard</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="mainTab2">Apps</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="mainTab3">Maps</Nav.Link></Nav.Item><Nav.Item>
<Nav.Link eventKey="mainTab4">Tables</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="mainTab5">UI Elements</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="mainTab6">Forms</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="mainTab7">Charts</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="mainTab8">Pages</Nav.Link></Nav.Item>
</Nav>
</Col>
<Col>
<Tab.Content className="card-body tab-content">
<Tab.Pane
eventKey="mainTab1"
className="main-tab-content"
>
<h6 className="tx-gray-900">Dashboard</h6>
<span>
Nam libero tempore, cum soluta nobis est eligendi
optio cumque nihil impedit quo minus id quod maxime
placeat facere possimus, omnis voluptas assumenda
est
</span>
</Tab.Pane>
<Tab.Pane
className="main-tab-pane"
id="mainTab2"
eventKey="mainTab2"
>
<h6 className="tx-gray-900">Apps</h6>
<span>
These cases are perfectly simple and easy to
distinguish. In a free hour, when our power of
choice is untrammelled and when nothing prevents our
being able to do what we like best
</span>
</Tab.Pane>
<Tab.Pane
className="main-tab-pane"
id="mainTab3"
eventKey="mainTab3"
>
<h6 className="tx-gray-900">Maps</h6>
<span>
But I must explain to you how all this mistaken idea
of denouncing pleasure and praising pain was born
and I will give you a complete account of the
system, and expound the actual teachings of the
great explorer of the truth, the master-builder of
human happiness. No one rejects, dislikes, or avoids
pleasure itself, because it is pleasure, but because
those who do not know how to pursue pleasure
rationally encounter consequences that are extremely
painful.
</span>
</Tab.Pane>
<Tab.Pane
className="main-tab-pane"
id="mainTab4"
eventKey="mainTab4"
>
<h6 className="tx-gray-900">Tables</h6>
<span>
Nemo enim ipsam voluptatem quia voluptas sit
aspernatur aut odit aut fugit, sed quia consequuntur
magni dolores eos qui ratione voluptatem sequi
nesciunt. Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur, adipisci
velit, sed quia non numquam eius modi tempora
incidunt ut labore et dolore magnam aliquam quaerat
voluptatem..
</span>
</Tab.Pane>
<Tab.Pane
className="main-tab-pane"
id="mainTab5"
eventKey="mainTab5"
>
<h6 className="tx-gray-900">UI Elements</h6>
<span>
There are many variations of passages of Lorem Ipsum
available, but the majority have suffered alteration
in some form, by injected humour, or randomised
words which don't look even slightly believable.
</span>
</Tab.Pane>
<Tab.Pane
className="main-tab-pane"
id="mainTab6"
eventKey="mainTab6"
>
<h6 className="tx-gray-900">Forms</h6>
<span>
On the other hand, we denounce with righteous
indignation and dislike men who are so beguiled and
demoralized by the charms of pleasure of the moment,
so blinded by desire, that they cannot foresee the
pain and trouble that are bound to ensue; and equal
blame belongs to those who fail in their duty
through weakness of will, which is the same as
saying through shrinking from toil and pain..
</span>
</Tab.Pane>
<Tab.Pane
className="main-tab-pane"
id="mainTab7"
eventKey="mainTab7"
>
<h6 className="tx-gray-900">Charts</h6>
<span>
Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt
in culpa qui officia deserunt mollit anim id est
laborum.
</span>
</Tab.Pane>
<Tab.Pane
className="main-tab-pane"
id="mainTab8"
eventKey="mainTab8"
>
<h6 className="tx-gray-900">Pages</h6>
<span>
Nemo enim ipsam voluptatem quia voluptas sit
aspernatur aut odit aut fugit, sed quia consequuntur
magni dolores eos qui ratione voluptatem sequi
nesciunt. Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur, adipisci
velit, sed quia non numquam eius modi tempora
incidunt ut labore et dolore magnam aliquam quaerat
voluptatem.
</span>
</Tab.Pane>
</Tab.Content>
</Col>
</Tab.Container>
                        `
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-xl-3 col-lg-12 d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <Card.Header className="custom-card-header border-bottom-0">
                <h6 className="main-content-label mb-0">Sales Summary</h6>
              </Card.Header>

              <Card.Body>
                <div className="border">
                  <div className="main-list-item p-3">
                    <div>
                      <h6>Total Revenue</h6>
                      <span>weekly profit</span>
                    </div>
                    <div>
                      <h5>$15,300</h5>
                    </div>
                  </div>
                  <div className="main-list-item p-3 border-top">
                    <div>
                      <h6>Total Tax</h6>
                      <span>weekly profit</span>
                    </div>
                    <div>
                      <h5>$1,625</h5>
                    </div>
                  </div>
                  <div className="main-list-item p-3 border-top">
                    <div>
                      <h6>Total Income</h6>
                      <span>weekly profit</span>
                    </div>
                    <div>
                      <h5>$55,897</h5>
                    </div>
                  </div>
                  <div className="main-list-item p-3 border-top">
                    <div>
                      <h6>Total Loss</h6>
                      <span>weekly profit</span>
                    </div>
                    <div>
                      <h5>20%</h5>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

      </Row>

      {/* <!-- End Row --> */}
    </Fragment >
  );
}


Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
