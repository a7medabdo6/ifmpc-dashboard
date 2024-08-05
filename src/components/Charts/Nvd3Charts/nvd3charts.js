import React, { Fragment } from "react";
import * as nvd from "../../../data/charts/nvd";
import Nvd3Charts from "react-nvd3";
import "../../../../node_modules/nvd3/build/nv.d3.css";
import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";

const NvdCharts = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Nvd3 Charts</h2>
        <Breadcrumb>
          <Breadcrumb.Item
            href="#">Charts
          </Breadcrumb.Item>
          <Breadcrumb.Item active >
            Nvd3 Charts
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
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
    <Row className=" row-sm">
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1"> Line Chart With Zooming Options</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic  Line Chart With Zooming Options example.
            </p>
          </Card.Header>
          <Card.Body>
            <div> <Nvd3Charts
              type="lineChart"
              datum={nvd.LineChart}
            />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} >
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Bar Chart</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic line chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div>
              <Nvd3Charts
                id="nvd3-chart1"
                type="discreteBarChart"
                datum={nvd.BarChart2}
                x="label"
                y="value"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} >
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Bar Chart</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic bar chart example..
            </p>
          </Card.Header>
          <Card.Body>
            <div>
              <Nvd3Charts
                id="nvd3-chart1"
                type="discreteBarChart"
                datum={nvd.BarChart2}
                x="label"
                y="value"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} >
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Bar Chart With Multiple colors</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic Bar Chart With Multiple colors example..
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id=""><Nvd3Charts
              id="nvd3-chart1"
              type="discreteBarChart"
              datum={nvd.BarChart}
              x="label"
              y="value"
            /> </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </Fragment>
);

NvdCharts.propTypes = {};

NvdCharts.defaultProps = {};

export default NvdCharts;
