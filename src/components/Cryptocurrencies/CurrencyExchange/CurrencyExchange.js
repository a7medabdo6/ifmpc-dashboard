import React, { Fragment } from "react";
import * as currencyexchange from "../../../data/crypotocurriencies/currencyexchange.js";
import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Searchable from "react-searchable-dropdown";
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const CurrencyExchange = () => {
  const Singleselectdata1 = [
    { label: "BTC", value: "btc" },
    { label: "LTC", value: "ltc" },
    { label: "NEO", value: "neo" },
    { label: "DASH", value: "dash" },
    { label: " XRP", value: "xrp " },
    ]
    const Singleselectdata2 = [
    { label: "USD", value: "usd" },
    { label: "EURO", value: "euro" },
    { label: "RUPEE", value: "rupee" },
    { label: "POUND", value: "pound" },
    { label: " WON", value: "won " },
    { label: " DINAR", value: "dinar " },
    { label: " RIAL", value: "rial " },
    ]
  return(
    <Fragment>
    <div className="page-header">
    <div>
    <h2 className="main-content-title tx-24 mg-b-5">Crypto Currencies</h2>
    <Breadcrumb>
    <Breadcrumb.Item href="#">
    Crypto Currencies
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
    Currency-exchange
    </Breadcrumb.Item>
    </Breadcrumb>
    </div>
    <div className="d-flex">
    <div className="justify-content-center">
    <Button
    type="button"
    variant="white" size="md"
    className="my-2 me-2"
    >
    <i className="fe fe-download me-2"></i> Import
    </Button>
    <Button
    type="button"
    variant="white" size="md"
    className="my-2 me-2"
    >
    <i className="fe fe-filter me-2"></i> Filter
    </Button>
    <Button type="button"
    
    variant="primary" size="md"
    className="my-2">
    <i className="fe fe-download-cloud me-2"></i> Download Report
    </Button>
    </div>
    </div>
    </div>
    <Row>
    <Col md={12}>
    <Card className="pt-0  custom-card pt-7 bg-background2 card pb-7 border-0 overflow-hidden">
    <div className="header-text mb-0">
    <Container fluid className="p-5">
    <div className="text-start text-white background-text">
    <h1 className="mb-3 tx-50 font-weight-semibold">
    Buy and sell Coins without additional fees
    </h1>
    <p className="tx-18 mb-5 text-white-50">
    Buy now and get +50% extra bonus Minimum pre-sale amount 100
    Crypto Coin. We accept BTC crypto-currency..
    </p>
    </div>
    <Row>
    <Col xl={12} lg={12} md={12} className="d-block mx-auto">
    <div className="item-search-tabs mb-6 background-text">
    <div className="buy-sell">
    <Form className=" row mx-auto justify-content-center d-flex p-4 form">
    <Form.Group className="col-xl-6 col-lg-6 col-md-12 mb-0">
    <Form.Control
    type="text"
    className="mb-4 mb-lg-0"
    id="text7"
    placeholder="13.2458"
    />
    </Form.Group>
    <Form.Group className="col-xl-6 col-lg-6 col-md-12 mb-0">
    <Searchable className="form-control select2"
    value="test"
    placeholder="Choose one" // by default "Search"
    notFoundText="No result found" // by default "No result found"
    noInput
    options={Singleselectdata1}
    onSelect={(value) => {
    console.log(value);
    }}
    listMaxHeight={140} //by default 140
    />
    </Form.Group>
    <Col xl={12} lg={12} md={12} className="my-3 text-start">
    <i className=" pe-7s-repeat exchange-icon tx-30 text-white inline-block"></i>
    </Col>
    <Form.Group className="col-xl-6 col-lg-6 col-md-12 mb-0">
    <Form.Control
    type="text"
    className="mb-4 mb-lg-0"
    id="text6"
    placeholder="02.24"
    />
    </Form.Group>
    <Form.Group className=" col-xl-6 col-lg-6 col-md-12 mb-0">
    <Searchable className="form-control select2"
    value="test"
    placeholder="Choose one" // by default "Search"
    notFoundText="No result found" // by default "No result found"
    noInput
    options={Singleselectdata2}
    onSelect={(value) => {
    console.log(value);
    }}
    listMaxHeight={140} //by default 140
    />
    </Form.Group>
    </Form>
    </div>
    </div>
    <div className="text-center background-text">
    <Link
    to="#"
    className="btn btn-warning ps-6 pe-6 pt-2 pb-2 mx-auto float-start mt-5"
    >
    EXCHANGE NOW
    </Link>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    </Card>
    </Col>
    <Col md={12}>
    <Row className="row-sm">
    <Col xl={4} md={12} lg={6}>
    <Card className="custom-card crypto-card overflow-hidden">
    <Card.Body className="pb-0">
    <div className="mb-0 d-flex">
    <h5 className="d-flex mb-0">
    <span className="cryp-icon bg-primary me-2">
    <i className="cf cf-btc"></i>
    </span>
    Bitcoin BTC
    </h5>
    <span className="float-end ms-auto btn btn-success btn-sm">
    24h
    </span>
    </div>
    <div className="d-flex justify-content-between mt-2">
    <h5 className="d-flex my-auto font-weight-normal">
    0.00000434
    <span className="text-info tx-14 mt-auto ms-2">$0.04</span>
    </h5>
    <div className="text-danger">
    <i className="me-1 text-success"></i> +4.16%
    </div>
    </div>
    <div className="chart-wrapper">
    <Line options={currencyexchange.Bitcoinexhange} data={currencyexchange.bitcoinexchange} id="bitcoin-chart" />
    </div>
    </Card.Body>
    </Card>
    </Col>
    <Col xl={4} md={12} lg={6}>
    <Card className="custom-card crypto-card overflow-hidden">
    <Card.Body className="card-body pb-0">
    <div className="mb-0 d-flex">
    <h5 className="d-flex mb-0">
    <span className="cryp-icon bg-primary me-2">
    <i className="cf cf-eth"></i>
    </span>
    Ethereum ETH
    </h5>
    <span className="float-end ms-auto btn btn-success btn-sm">
    24h
    </span>
    </div>
    <div className="d-flex justify-content-between mt-2">
    <h5 className="d-flex my-auto font-weight-normal">
    0.00000235
    <span className="text-info tx-14 mt-auto ms-2">$0.12</span>
    </h5>
    <div className="text-danger">
    <i className="me-1 text-success"></i> +2.12%
    </div>
    </div>
    <div className="chart-wrapper">
    <Line options={currencyexchange.Ethereumexchange} data={currencyexchange.ethereumexchange} id="ethereum-chart" />
    </div>
    </Card.Body>
    </Card>
    </Col>
    <Col xl={4} md={12} lg={6}>
    <Card className=" custom-card crypto-card overflow-hidden">
    <Card.Body className=" pb-0">
    <div className="mb-0 d-flex">
    <h5 className="d-flex mb-0">
    <span className="cryp-icon bg-primary me-2">
    <i className="cf cf-xrp"></i>
    </span>
    Ripple XRP
    </h5>
    <span className="float-end ms-auto btn btn-success btn-sm">
    24h
    </span>
    </div>
    <div className="d-flex justify-content-between mt-2">
    <h5 className="d-flex my-auto font-weight-normal">
    0.00000434
    <span className="text-info tx-14 mt-auto ms-2">$0.03</span>
    </h5>
    <div className="text-danger">
    <i className="me-1 text-success"></i> +3.12%
    </div>
    </div>
    <div className="chart-wrapper">
    <Line options={currencyexchange.Rippleexchange} data={currencyexchange.rippleexchange} id="ripple-chart" />
    </div>
    </Card.Body>
    </Card>
    </Col>
    <Col xl={4} md={12} lg={6}>
    <Card className="custom-card crypto-card overflow-hidden">
    <Card.Body className="pb-0">
    <div className="mb-0 d-flex">
    <h5 className="d-flex mb-0">
    <span className="cryp-icon bg-primary me-2">
    <i className="cf cf-dash"></i>
    </span>
    Dash DASH
    </h5>
    <span className="float-end ms-auto btn btn-success btn-sm">
    24h
    </span>
    </div>
    <div className="d-flex justify-content-between mt-2">
    <h5 className="d-flex my-auto font-weight-normal">
    0.00000372
    <span className="text-info tx-14 mt-auto ms-2">$0.12</span>
    </h5>
    <div className="text-danger">
    <i className="me-1 text-success"></i> +4.23%
    </div>
    </div>
    <div className="chart-wrapper">
    <Line options={currencyexchange.Dashexchange} data={currencyexchange.dashexchange} id="ripple-chart" />
    </div>
    </Card.Body>
    </Card>
    </Col>
    <Col xl={4} md={12} lg={6}>
    <Card className=" custom-card crypto-card overflow-hidden">
    <Card.Body className="card-body pb-0">
    <div className="mb-0 d-flex">
    <h5 className="d-flex mb-0">
    <span className="cryp-icon bg-primary me-2">
    <i className="cf cf-neos"></i>
    </span>
    Neo NEO
    </h5>
    <span className="float-end ms-auto btn btn-success btn-sm">
    24h
    </span>
    </div>
    <div className="d-flex justify-content-between mt-2">
    <h5 className="d-flex my-auto font-weight-normal">
    0.00000257
    <span className="text-info tx-14 mt-auto ms-2">$0.07</span>
    </h5>
    <div className="text-danger">
    <i className="me-1 text-success"></i> +2.17%
    </div>
    </div>
    <div className="chart-wrapper">
    <Line options={currencyexchange.Neoexchange} data={currencyexchange.neoexchange} id="neo-chart" />
    </div>
    </Card.Body>
    </Card>
    </Col>
    <Col xl={4} md={12} lg={6}>
    <Card className=" custom-card crypto-card overflow-hidden">
    <Card.Body className="pb-0">
    <div className="mb-0 d-flex">
    <h5 className="d-flex mb-0">
    <span className="cryp-icon bg-primary me-2">
    <i className="cf cf-ltc"></i>
    </span>
    Litecoin LTC
    </h5>
    <span className="float-end ms-auto btn btn-success btn-sm">
    24h
    </span>
    </div>
    <div className="d-flex justify-content-between mt-2">
    <h5 className="d-flex my-auto font-weight-normal">
    0.00000534
    <span className="text-info tx-14 mt-auto ms-2">$0.32</span>
    </h5>
    <div className="text-danger">
    <i className="me-1 text-success"></i> +2.12%
    </div>
    </div>
    <div className="chart-wrapper">
    <Line options={currencyexchange.Litecoinexchange} data={currencyexchange.litecoinexchange} id="litecoin-chart" />
    </div>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Col>
    </Row>
    
    </Fragment>
    );
}


CurrencyExchange.propTypes = {};

CurrencyExchange.defaultProps = {};

export default CurrencyExchange;
