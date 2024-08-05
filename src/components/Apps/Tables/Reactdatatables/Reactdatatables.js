import React, { Fragment } from "react";
import { BasicDatatable, DataTables, ExportCSV, Hoverdatatable, } from "../../../../data/tables/datable";
import { Button, Breadcrumb, Card, Row, Col } from "react-bootstrap";
const Reactdatatables = () => (
	<Fragment>
		{/* <!-- Page Header --> */}
		<div className="page-header">
			<div>
				<h2 className="main-content-title tx-24 mg-b-5">DataTable</h2>
				<Breadcrumb>
					<Breadcrumb.Item href="#">
						Maps & Tables
					</Breadcrumb.Item>
					<Breadcrumb.Item active>
						DataTable
					</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<div className="d-flex">
				<div className="justify-content-center">
					<Button
						variant="white"
						type="button"
						className="btn-icon-text my-2 me-2"
					>
						<i className="fe fe-download me-2"></i> Import
					</Button>
					<Button
						variant="white"
						type="button"
						className="btn-icon-text my-2 me-2"
					>
						<i className="fe fe-filter me-2"></i> Filter
					</Button>
					<Button
						variant="primary" type="button" className="my-2 btn-icon-text">
						<i className="fe fe-download-cloud me-2"></i> Download Report
					</Button>
				</div>
			</div>
		</div>
		{/* <!-- End Page Header --> */}

		{/* <!-- Row --> */}
		<Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">BasicData</h6>
							<p className="text-muted card-sub-title">
								A simple example with no frills.
							</p>
						</div>
						<div className="responsive">
							<BasicDatatable />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">datatable</h6>
							<p className="text-muted card-sub-title">
								A simple example with no frills.
							</p>
						</div>
						<div className="responsive">
							<Hoverdatatable />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">
								Custom pagination actions
							</h6>
							<p className="text-muted card-sub-title">
								Custom pagination actions is an extension for DataTables.
							</p>
						</div>

						<div className="table-responsive">
							<ExportCSV />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">
								Custom pagination actions
							</h6>
							<p className="text-muted card-sub-title">

							</p>
						</div>

						<div className="table-responsive">
							<DataTables />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</Fragment>
);

Reactdatatables.propTypes = {};

Reactdatatables.defaultProps = {};

export default Reactdatatables;
