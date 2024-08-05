import React, { Fragment } from "react";
import * as chart from "../../../data/charts/chart";
import { Bar, Pie, Radar, Line, Doughnut, PolarArea } from "react-chartjs-2";
import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";
export const ChartJs = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">ChartJs Charts</h2>
        <Breadcrumb>
          <Breadcrumb.Item
            href="#">Charts
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            ChartJs Charts
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

    <Row className=" row-sm">
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body className="card-body">
            <div>
              <h6 className="main-content-label mb-1">Line Chart</h6>
              <p className="text-muted  card-sub-title">
                Below is the basic line chart example.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              {/* <canvas id="chartLine"></canvas> */}

              <Line
                options={chart.Linechart}
                data={chart.linechartdata}
                className="barchart"
                height="250"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Bar Chart1</h6>
              <p className="text-muted  card-sub-title">
                Below is the basic bar chart example.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Bar
                options={chart.Barchart1}
                data={chart.barchart1data}
                className="barchart"
                height="250"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="row-sm">
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Bar Chart2</h6>
              <p className="text-muted  card-sub-title">
                Below is the basic bar chart example.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Bar
                options={chart.Barchart2}
                data={chart.barchart2data}
                className="barchart"
                height="250"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Area Chart</h6>
              <p className="text-muted  card-sub-title">
                Below is the basic area chart example.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Line
                options={chart.Areachart}
                data={chart.areachart}
                className="barchart"
                height="250"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-ARCardow --> */}
    <div className="row row-sm">
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Donut Chart</h6>
              <p className="text-muted  card-sub-title">
                Below are an example of data in a donut chart.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Doughnut
                data={chart.dchart}
                className="chartjs-render-monitor w-auto ht-250 m-auto"
                height="120"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Pie Chart</h6>
              <p className="text-muted  card-sub-title">
                Below are an example of data in a pie chart.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Pie
                data={chart.piechart}
                className="chartjs-render-monitor w-auto ht-250 m-auto "
                height="120"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
    {/* <!-- End Row --> */}

    {/* <!-ARCardow --> */}
    <Row className="row-sm">
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Radar Chart</h6>
              <p className="text-muted  card-sub-title">
                Below are an example of data in a radar chart.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Radar
                data={chart.Radarchart1}
                className="chartjs-render-monitor w-auto ht-250 m-auto "
                height="120"
              />

            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Polar Chart</h6>
              <p className="text-muted  card-sub-title">
                Below are an example of data in a polar chart.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <PolarArea
                data={chart.Polarchart1}
                className="chartjs-render-monitor w-auto ht-250 m-auto "
                height="120"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

ChartJs.propTypes = {};

ChartJs.defaultProps = {};

export default ChartJs;
