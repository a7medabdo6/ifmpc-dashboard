import React, { Fragment } from 'react';
import C3Charts from 'react-c3js';
import * as c3piecharts from '../../../data/charts/c3piechart'

import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";
const Piacharts = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Pia Charts</h2>
        <Breadcrumb >
          <Breadcrumb.Item href="#"> Charts </Breadcrumb.Item>
          <Breadcrumb.Item active> Pia Chart </Breadcrumb.Item>
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
            className="btn-icon-text my-2 me-2"
          >
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
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic area chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <C3Charts
              id="chart-pie2"
              className="chartsh"
              data={c3piecharts.Piechart3.data}
              columns={c3piecharts.Piechart3.pie}
            />

          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart2</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic area chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisArea2">
              <C3Charts
                id="chart-pie2"
                className="chartsh"
                data={c3piecharts.Piechart2.data}
                columns={c3piecharts.Piechart2.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart3</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic line chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisLine1">
              <C3Charts
                id="chart-pie2"
                className="chartsh"
                data={c3piecharts.Piechart3.data}
                columns={c3piecharts.Piechart3.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart4</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic line chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisLine2">
              <C3Charts
                id="chart-pie2"
                className="chartsh"
                data={c3piecharts.Piechart.data}
                columns={c3piecharts.Piechart.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

Piacharts.propTypes = {};

Piacharts.defaultProps = {};

export default Piacharts;
