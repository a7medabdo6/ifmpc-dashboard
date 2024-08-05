import React, { Fragment } from 'react';
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
// import * as cards from '../../../data/Cards/cards'
import { Link } from 'react-router-dom';
import { Basiccard } from './Basiccard';
import { Fullscreenbutton } from './Fullscreenbutton';
const Cards = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Cards</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"> Apps </Breadcrumb.Item>
          <Breadcrumb.Item active> Cards</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white" type="button" className="btn-icon-text my-2 me-2">
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white" type="button" className="btn-icon-text my-2 me-2">
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button variant="primary" type="button" className=" my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card.Body className="card custom-card card-body">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem ipsum dolor sit amet
            consictetur...
          </Card.Text>
        </Card.Body>
      </div>
      <div className="col-md">
        <Card.Body className="card custom-card bg-primary tx-white">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem ipsum dolor sit amet
            consictetur...
          </Card.Text>
        </Card.Body>
      </div>
      <div className="col-md">
        <Card.Body className="card custom-card bg-gray-800 tx-white">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem ipsum dolor sit amet
            consictetur...
          </Card.Text>
        </Card.Body>
      </div>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card className="custom-card">
          <Card.Body>
            <h5 className="main-content-label tx-dark tx-medium mg-b-10">
              The Card Title
            </h5>
            <p className="card-subtitle mg-b-15">This is the card subtitle</p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">
              Card link
            </Card.Link>
            <Card.Link href="#">
              Another link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md ">
        <Card className="custom-card bg-primary tx-white">
          <Card.Body>
            <h5 className="main-content-label tx-white tx-medium mg-b-10">
              The Card Title
            </h5>
            <p className="card-subtitle mg-b-15 tx-white-8">
              This is the card subtitle
            </p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link className=" tx-white-7 hover-white" href="#">
              Card link
            </Card.Link>
            <Card.Link className=" tx-white-7 hover-white" href="#">
              Another link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="custom-card  bg-gray-800 tx-white">
          <Card.Body>
            <h5 className="main-content-label tx-white tx-medium mg-b-10">
              The Card Title
            </h5>
            <p className="card-subtitle tx-white-8 mg-b-15">
              This is the card subtitle
            </p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link className=" tx-white-7 hover-white" href="#">
              Card link
            </Card.Link>
            <Card.Link className=" tx-white-7 hover-white" href="#">
              Another link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Row>
    {/* <!--End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col md={12} xl={4}>
        <Basiccard />
      </Col>
      <Col md={12} xl={4}>
        <Fullscreenbutton />
      </Col>
      <Col md={12} xl={4}>
        <Card className="custom-card">
          <Card.Header className="custom-card-header border-bottom-0 ">
            <h5 className="main-content-label tx-dark my-auto tx-medium mb-0">
              Basic Card
            </h5>
            <div className="card-options">
              <Card.Link href="#" className="btn btn-primary btn-sm">
                Action 1
              </Card.Link>
              <Card.Link href="#" className="btn btn-secondary btn-sm ms-2">
                Action 2
              </Card.Link>
            </div>
          </Card.Header>
          <Card.Body>
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet
          </Card.Body>
          <Card.Footer>This is Basic card footer</Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12} xl={4} md={12} sm={12} className="col-12">
        <Card className="custom-card">
          <Card.Header className="custom-card-header border-bottom-0">
            <h5 className="main-content-label tx-dark tx-medium mb-0">
              Card Header
            </h5>
          </Card.Header>
          <Card.Body>
            <h6>Special title treatment</h6>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Card.Link href="#" className="btn btn-primary ripple btn-block">
              View
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} xl={4} md={12} sm={12} className="col-12">
        <Card className="custom-card">
          <Card.Header className="custom-card-header border-bottom-0">
            <h5 className="main-content-label tx-dark tx-medium mb-0">
              Card Header
            </h5>
          </Card.Header>
          <Card.Body>
            <h6 className="">Special title treatment</h6>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h6 className="mb-0">Card-footer</h6>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg={12} xl={4} md={12} sm={12} className="col-12">
        <Card className="custom-card">
          <Card.Header className="custom-card-header border-bottom-0">
            <h5 className="main-content-label tx-dark tx-medium mb-0">
              Blockquote
            </h5>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col md={6} lg={3}>
        <Card className="overflow-hidden custom-card ">
          <img alt="media1" className="img-fluid b-img" src={require("../../../assets/img/media/1.jpg")} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="overflow-hidden custom-card">
          <img alt="media2" className="img-fluid b-img" src={require("../../../assets/img/media/2.jpg")} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="overflow-hidden custom-card">
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <img alt="media3" className="img-fluid b-img" src={require("../../../assets/img/media/3.jpg")} />
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="overflow-hidden custom-card">
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <img alt="media4" className="img-fluid b-img" src={require("../../../assets/img/media/4.jpg")} />
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card className="overflow-hidden card-blog-overlay1 custom-card">
          <Card.Body className="text-white z-index2">
            <h3 className="main-content-label text-white">card-with image</h3>
            <p className="tx-white-7 tx-13 mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
          <Card.Footer className=" text-white z-index2">
            This is Basic card footer
          </Card.Footer>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="overflow-hidden card-blog-overlay2 custom-card">
          <Card.Header className="border-bottom-0 custom-card-header">
            <h3 className="main-content-label text-white mb-0">
              card-with image
            </h3>
          </Card.Header>
          <Card.Body className="text-white z-index2">
            <p className="tx-white-7 tx-13">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
            <Link to="#" className="tx-white">
              Read more
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="overflow-hidden card-blog-overlay custom-card">
          <Card.Body className="text-white z-index2">
            <h3 className="main-content-label text-white">card-with image</h3>
            <p className="tx-white-7 tx-13">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
            <Link to="#" className="tx-white">
              Read more
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="p-3 tx-medium my-auto tx-white bg-primary">
            Description
          </Card.Header>
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="p-3 tx-medium my-auto tx-white bg-secondary">
            Description
          </Card.Header>
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="p-3 tx-medium my-auto tx-white bg-success">
            Description
          </Card.Header>
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card className="custom-card">
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
          <Card.Footer>January, 20, 2017 4:30am</Card.Footer>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="custom-card">
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
          <Card.Footer className=" tx-center">
            <Link to="#">Read more</Link>
          </Card.Footer>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="custom-card">
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
          <Card.Footer className=" tx-right">
            Share <i className="icon ion-logo-facebook mx-2"></i>
            <i className="icon ion-logo-twitter"></i>
          </Card.Footer>
        </Card>
      </div>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card.Body className="custom-card tx-white-8 bg-primary border-0 card">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
        </Card.Body>
      </div>
      <div className="col-md ">
        <Card.Body className="custom-card tx-white-8 bg-secondary border-0 card">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
        </Card.Body>
      </div>
      <div className="col-md ">
        <Card.Body className="custom-card tx-white-8 bg-gray-800 border-0 card">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
        </Card.Body>
      </div>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={6}>
        <Card className="card-aside custom-card">
          <img alt='media11'
            src={require("../../../assets/img/media/11.jpg")}
            className="card-aside-column  cover-image rounded-start-11"
          />
          <Card.Body>
            <h5 className="main-content-label tx-dark tx-medium mg-b-10">
              The Card Title
            </h5>
            <div className="">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <div className="d-flex align-items-center pt-3 mt-auto">
              <div className="main-img-user avatar-sm me-3">
                <img
                  src={require("../../../assets/img/users/1.jpg")}
                  className="w-10 rounded-circle"
                  alt="user1"
                />
              </div>
              <div>
                <Card.Link href="#" className="text-default">
                  Alica Nestle
                </Card.Link>
                <small className="d-block text-muted">15 mintues ago</small>
              </div>
              <div className="ms-auto text-muted">
                <Card.Link href="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-heart me-1"></i>
                </Card.Link>
                <Card.Link href="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-thumbs-up"></i>
                </Card.Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <img src={require('./logo.jpeg')} /> */}
      <Col lg={6}>
        <Card className="card-aside custom-card">
          <Card.Body>
            <h5 className="main-content-label tx-dark tx-medium mg-b-10">
              The Card Title
            </h5>
            <div>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <div className="d-flex align-items-center pt-3 mt-auto">
              <div className="main-img-user avatar-sm me-3">
                <img
                  src={require("../../../assets/img/users/2.jpg")}
                  className="w-10 rounded-circle"
                  alt="user2"
                />
              </div>
              <div>
                <Link to="#" className="text-default">
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
          <img
            src={require("../../../assets/img/media/13.jpg")}
            alt="media13"
            className="card-aside-column  cover-image rounded-end-11"
          />
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Cards.propTypes = {};

Cards.defaultProps = {};

export default Cards;
