import React, { Fragment } from 'react';
import * as c3barcharts1 from '../../../data/charts/c3barcharts1';
import C3Charts from 'react-c3js';
import { Breadcrumb, Button, Card, Col, Row } from 'react-bootstrap';


const C3barcharts = () => (
	<Fragment>
		{/* <!-- Page Header --> */}
		<div className="page-header">
			<div>
				<h2 className="main-content-title tx-24 mg-b-5">C3-Bar-Charts</h2>
				<Breadcrumb>
					<Breadcrumb.Item href="#">Charts</Breadcrumb.Item>
					<Breadcrumb.Item active >C3-Bar-Charts</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<div className="d-flex">
				<div className="justify-content-center">
					<Button variant="white" type="button" className=" btn-icon-text my-2 me-2">
						<i className="fe fe-download me-2"></i> Import
					</Button>
					<Button variant="white" type="button" className=" btn-icon-text my-2 me-2">
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
		<Row className="row-sm">
			<Col lg={6} md={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">Barchart</h6>
							<p className="text-muted  card-sub-title">Below is the basic Barchart example.</p>
						</div>
						<div className="chartjs-wrapper-demo">
							<C3Charts id="barchart" className="chartsh" data={c3barcharts1.BarChart.data} columns={c3barcharts1.BarChart.bar} />

						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={6} md={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">SingleBarchart</h6>
							<p className="text-muted  card-sub-title">Below is the basic SingleBarchart example.</p>
						</div>
						<div className="chartjs-wrapper-demo">
							<C3Charts id="singlebar" className="chartsh" data={c3barcharts1.SingleBarchart.data} columns={c3barcharts1.SingleBarchart.bar} />

						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- End Row --> */}

		{/* <!-- Row --> */}
		<Row className="row-sm">
			<Col lg={6} md={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">MultipleBarchart</h6>
							<p className="text-muted  card-sub-title">Below is the basic combinationofbar example.</p>
						</div>
						<div className="chartjs-wrapper-demo">
							<C3Charts id="multiplecharbar" className="chartsh" data={c3barcharts1.MultipleBarchart.data} columns={c3barcharts1.MultipleBarchart.bar} />

						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={6} md={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">CombinationofBar</h6>
							<p className="text-muted  card-sub-title">Below is the basic combinationofBar example.</p>
						</div>
						<div className="chartjs-wrapper-demo">
							<C3Charts id="chart-combination" className="chartsh" data={c3barcharts1.combinationofbar.data} columns={c3barcharts1.combinationofbar.bar} />

						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row className="row-sm">
			<Col lg={6} md={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">HorizontalBar</h6>
							<p className="text-muted  card-sub-title">Below are an example of HorizontalBar.</p>
						</div>
						<div className="chartjs-wrapper-demo">
							<C3Charts id="horizontal" className="chartsh" data={c3barcharts1.HorizontalBar.data} columns={c3barcharts1.HorizontalBar.bar} />

						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={6} md={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">Areaspline</h6>
							<p className="text-muted  card-sub-title">Below are an example of Areaspline.</p>
						</div>
						<div className="chartjs-wrapper-demo">
							<C3Charts id="areaspline" className="chartsh" data={c3barcharts1.Areaspline.data} columns={c3barcharts1.Areaspline.bar} />

						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- End Row --> */}

		{/* <!-- Row --> */}

		{/* <!-- End Row --> */}
	</Fragment>
);

C3barcharts.propTypes = {};

C3barcharts.defaultProps = {};

export default C3barcharts;
