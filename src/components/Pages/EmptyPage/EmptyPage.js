import React, { Fragment } from 'react';
import { Breadcrumb, Button, Col, Row, Card } from 'react-bootstrap';
const EmptyPage = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Empty Page</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
          <Breadcrumb.Item active>Empty Page</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button variant="primary" type="button" className="my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <Row className=" sidemenu-height">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>Typing Some text here....</Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

EmptyPage.propTypes = {};

EmptyPage.defaultProps = {};

export default EmptyPage;
