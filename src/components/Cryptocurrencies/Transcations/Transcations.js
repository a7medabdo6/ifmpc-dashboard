import React, { Fragment } from "react";
import { Card, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { Basicdatatable } from "../../../data/crypotocurriencies/transcationdetails";
const Transcations = () => (
	<Fragment>
		{/* <!-- Page Header --> */}
		<div className="page-header">
			<div>
				<h2 className="main-content-title tx-24 mg-b-5">Crypto Currencies</h2>
				<Breadcrumb className="breadcrumb">
					<Breadcrumb.Item href="#">	Crypto Currencies</Breadcrumb.Item>
					<Breadcrumb.Item active>Crypto-transcations	</Breadcrumb.Item>
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
						variant="primary" type="button" className="btn btn-primary my-2 btn-icon-text">
						<i className="fe fe-download-cloud me-2"></i> Download Report
					</Button>
				</div>
			</div>
		</div>
		{/* <!-- End Page Header --> */}

		{/* <!-- row --> */}
		<Row className=" row-sm">
			<Col md={12} lg={12} xl={12}>
				<Card className=" custom-card transcation-crypto">
					<Card.Header className="border-bottom-0">
						<h6 className="main-content-label mb-1">Transaction History</h6>
					</Card.Header>
					<Card.Body className="card-body">

						<Basicdatatable />

					</Card.Body>
				</Card>

				{/* <!-- Row End --> */}
			</Col>
		</Row>
		{/* <!-- Row End --> */}
	</Fragment>
);

Transcations.propTypes = {};

Transcations.defaultProps = {};

export default Transcations;
