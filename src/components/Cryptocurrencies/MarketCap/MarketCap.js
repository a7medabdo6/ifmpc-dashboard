import React, { Fragment } from "react";

import * as marketcap from "../../../data/crypotocurriencies/marketcap";
import { Breadcrumb, Card, Col, Row, Table, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function MarketCap() {
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Crypto Currencies</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Crypto Currencies</Breadcrumb.Item>
            <Breadcrumb.Item active>Crypto-Market</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className="white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant="white"
              type="button"
              className="white btn-icon-text my-2 me-2"
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
      <Row className="row-sm">
        <Col lg={6} xl={6} xxl={3} md={6} >
          <Card className="custom-card">
            <Card.Body className="">
              <h5 className="tx-14">BTC / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">34.4324 <span className="text-muted tx-12">$29.42</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-danger me-2 font-weight-bold">-0.22%</span>
                    Volume - 76,434 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} id="btc-market" options={marketcap.Marketcap1} className="ms-auto float-end" data={marketcap.marketcap1} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className=" ">
              <h5 className="tx-14">ETH / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">29.4124 <span className="text-muted tx-12">$23.15</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-success me-2 font-weight-bold">+0.23%
                    </span>
                    Volume - 23,346 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap2} className="ms-auto float-end" data={marketcap.marketcap2} id="ethereum-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className=" ">
              <h5 className="tx-14">XRP / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">34.5674 <span className="text-muted tx-12">$45.24</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-danger me-2 font-weight-bold">-0.42%</span>
                    Volume - 56,456 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap3} className="ms-auto float-end" data={marketcap.marketcap3} id="xrp-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className="">
              <h5 className="tx-14">LTC / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">45.4542 <span className="text-muted tx-12">$63.34</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-success me-2 font-weight-bold">-0.12%</span>
                    Volume - 34,462 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap4} className="ms-auto float-end" data={marketcap.marketcap4} id="ltc-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0"><label className="main-content-label my-auto">Crypt Marketing Values</label></Card.Header>
            <Card.Body>

              <Table hover responsive className="table text-nowrap border">
                <thead className="table border-bottom">
                  <tr>
                    <th className="bg-transparent">No</th>
                    <th className="bg-transparent">Name</th>
                    <th className="bg-transparent">Last Price</th>
                    <th className="bg-transparent">Market Cap</th>
                    <th className="bg-transparent">Change(24h)</th>
                    <th className="bg-transparent"></th>
                  </tr>
                </thead>
                <tbody>
                  {marketcap.CryptMarketingValues.map((items, index) => (
                    <tr key={index} data-index={index}>
                      <td>{items.ID}</td>
                      <td><img src={items.IMAGES} className="wd-30 ht-30 me-3" alt="img" />{items.Name} <b>{items.crypt}</b></td>
                      <td>{items.MarkerCap}</td>
                      <td>{items.lastprice}</td>
                      <td><span className={`text-${items.Change}`}>+3.49%</span></td>
                      <td><b className="btn btn-outline-primary btn-sm">{items.platform}</b></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

MarketCap.propTypes = {};

MarketCap.defaultProps = {};

export default MarketCap;
