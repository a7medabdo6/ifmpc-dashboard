import React, { Fragment } from 'react';
import * as echarts from '../../../data/charts/echarts';
import ReactEcharts from 'echarts-for-react';
import { Breadcrumb, Button, Card, Col, Row } from 'react-bootstrap';

const Echart = () => (
	<Fragment>
		{/* <!-- Page Header --> */}
		<div className="page-header">
			<div>
				<h2 className="main-content-title tx-24 mg-b-5">Echart</h2>
				<Breadcrumb >
					<Breadcrumb.Item href="#">Charts</Breadcrumb.Item>
					<Breadcrumb.Item active>Echart</Breadcrumb.Item>
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
		<Row className=" row-sm">
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Line Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic Bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts className="chartsh" option={echarts.echart2.option} series={echarts.echart2.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Combination line & Bar Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic combination line & bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart2" className="chartsh" option={echarts.echart1.option} series={echarts.echart1.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- End Row --> */}

		{/* <!-- Row --> */}
		<Row className="row-sm">
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Horizonatal Line Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic horizontal line chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart1" className="chartsh" option={echarts.echart4.option} series={echarts.echart4.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Horizonatal Combination line & Bar Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic horizontal combination line & bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart1" className="chartsh" option={echarts.echart3.option} series={echarts.echart3.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- End Row --> */}

		{/* <!-- Row --> */}
		<Row className="row-sm">
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Stacked Bar Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic Stacked Bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart5" className="chartsh" option={echarts.echart5.option} series={echarts.echart5.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Horizonatal Stacked Bar Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic horizontal stacked bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart6" className="chartsh" option={echarts.echart6.option} series={echarts.echart6.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>

		</Row>

		{/* <!-- End Row --> */}
	</Fragment>
);

Echart.propTypes = {};

Echart.defaultProps = {};

export default Echart;
