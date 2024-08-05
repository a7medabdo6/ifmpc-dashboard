import React, { Fragment } from 'react';
import { Row, Card, Col, Button, Table, Breadcrumb, } from 'react-bootstrap';

const Border = () => (
	<Fragment>
		{/* <!-- Page Header --> */}
		<div className="page-header">
			<div>
				<h2 className="main-content-title tx-24 mg-b-5">Border</h2>
				<Breadcrumb >
					<Breadcrumb.Item href="#">Utilities</Breadcrumb.Item>
					<Breadcrumb.Item active >Border</Breadcrumb.Item>
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
					<Button variant="primary" type="button" className=" my-2 btn-icon-text">
						<i className="fe fe-download-cloud me-2"></i> Download Report
					</Button>
				</div>
			</div>
		</div>
		{/* <!-- End Page Header --> */}

		{/* <!-- Row --> */}
		<Row className=" row-sm">
			<Col xl={9} lg={12}>
				<Card className="custom-card" id="brset">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">Set Border</h6>
							<p className="text-muted  card-sub-title">The following border utilities classNamees will add border to any side of an element.</p>
						</div>
						<Row className=" row-sm">
							<Col md={6} xl={4}>
								<div className="p-3 p-3 bg-light bd bd-2">.border</div>
								<div className="p-3 p-3 bg-light bd-l bd-2 mt-4 mb-4 mb-xl-0">.border-start</div>
							</Col>
							<Col md={6} xl={4}>
								<div className="p-3 p-3 bg-light bd-t bd-2 ">.border-top</div>
								<div className="p-3 p-3 bg-light bd-y bd-2 mt-4 mb-4 mb-xl-0">.border-top & .border-bottom</div>
							</Col>
							<Col md={6} xl={4}>
								<div className="p-3 p-3 bg-light bd-r bd-2">.border-end</div>
								<div className="p-3 p-3 bg-light bd-x bd-2 mt-4 mb-4 mb-xl-0">.border-start & .border-end</div>
							</Col>
							<Col md={6} xl={4} className=" mt-4">
								<div className="p-3 p-3 bg-light bd-b bd-2 mb-0">.border-bottom</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Footer>
						<div className="table-responsive">
							<Table className="table main-table-reference mt-0 mb-0">
								<thead>
									<tr>
										<th className="wd-30p">className</th>
										<th className="wd-70p">Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd"</code></td>
										<td>Add border in all sides of an element using default color and width.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd-t"</code></td>
										<td>Add border to top side of element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd-r"</code></td>
										<td>Add border to right side of element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd-b"</code></td>
										<td>Add border to bottom side of element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd-l"</code></td>
										<td>Add border to left side of element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd-x"</code></td>
										<td>Add border to left and right side of element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd-y"</code></td>
										<td>Add border to top and bottom side of element.</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</Card.Footer>
				</Card>
				<Card className="custom-card" id="brsizes">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">Border Sizes</h6>
							<p className="text-muted  card-sub-title">Below are the available border size utilities classNamees.</p>
						</div>
						<Row className=" row-sm">
							<Col md={6} xl={3}>
								<div className="p-3 p-3 bg-light bd mb-4 mb-xl-0">.border</div>
							</Col>
							<Col md={6} xl={3}>
								<div className="p-3 p-3 bg-light bd bd-2 mb-4 mb-xl-0">.border</div>
							</Col>
							<Col md={6} xl={3}>
								<div className="p-3 p-3 bg-light bd bd-3 mb-4 mb-xl-0">.border</div>
							</Col>
							<Col md={6} xl={3}>
								<div className="p-3 p-3 bg-light bd bd-4 mb-4 mb-xl-0">.border</div>
							</Col>
							<Col md={6} xl={3}>
								<div className="p-3 p-3 bg-light bd bd-5">.border</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Footer>
						<div className="table-responsive">
							<Table className="table main-table-reference mt-0 mb-0">
								<thead>
									<tr>
										<th className="wd-30p">className</th>
										<th className="wd-70p">Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd"</code></td>
										<td>Set 1px (default) border to element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd bd-2"</code></td>
										<td>Set 2px border to element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd bd-3"</code></td>
										<td>Set 3px border to element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd bd-4"</code></td>
										<td>Set 4px border to element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">className="bd bd-5"</code></td>
										<td>Set 5px border to element.</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</Card.Footer>
				</Card>
				<Card className="custom-card" id="brremove">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">Remove Border</h6>
							<p className="text-muted  card-sub-title">You can remove a border to a single side of an element by using the following border utilities classNamees.</p>
						</div>
						<Row className=" row-sm">
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bg-light bd bd-2 bd-t-0">.border</div>
							</Col>
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bg-light bd bd-2 bd-r-0">.border</div>
							</Col>
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bg-light bd bd-2 bd-b-0">.border</div>
							</Col>
							<Col md={6} xl={4} className="mb-4 mb-xl-0">
								<div className="p-3 p-3 bg-light bd bd-2 bd-l-0">.border</div>
							</Col>
							<Col md={6} xl={4} className="mb-4 mb-xl-0">
								<div className="p-3 p-3 bg-light  bd bd-2 bd-x-0">.border</div>
							</Col>
							<Col md={6} xl={4}>
								<div className="p-3 p-3 bg-light bd bd-2 bd-y-0">.border</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Footer>
						<div className="table-responsive">
							<Table className="table main-table-reference mt-0 mb-0">
								<thead>
									<tr>
										<th className="wd-30p">className</th>
										<th className="wd-70p">Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-t-0</code></td>
										<td>Remove top border of an element</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-r-0</code></td>
										<td>Remove right border of an element</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-b-0</code></td>
										<td>Remove bottom border of an element</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-l-0</code></td>
										<td>Remove left border of an element</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-x-0</code></td>
										<td>Remove left and right border of an element</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-y-0</code></td>
										<td>Remove top and bottom border of an element</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-[t||r|bl|x|y]-0-f</code></td>
										<td>Force remove border of any side of an element.</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</Card.Footer>
				</Card>
				<Card className="custom-card" id="brcolor">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">Border Color</h6>
							<p className="text-muted  card-sub-title">You can set a border color of any side of an element by adding the following utilities classNamees below.</p>
						</div>
						<Row className=" row-sm">
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bd bd-2 bd-primary">.border</div>
							</Col>
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bd bd-2 bd-success">.border</div>
							</Col>
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bd bd-2 bd-warning">.border</div>
							</Col>
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bd bd-2 bd-danger">.border</div>
							</Col>
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bd bd-2 bd-info">.border</div>
							</Col>
							<Col md={6} xl={4} className=" mb-4">
								<div className="p-3 p-3 bd bd-2 bd-gray-500">.border</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Footer>
						<div className="table-responsive">
							<Table className="table main-table-reference mt-0 mb-0">
								<thead>
									<tr>
										<th className="wd-30p">className</th>
										<th className="wd-70p">Value</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-[value]</code></td>
										<td>primary | success | warning | danger | info | indigo | purple | pink | teal | orange</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">.bd-gray-[value]</code></td>
										<td>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</Card.Footer>
				</Card>
				<Card className="custom-card" id="brradius">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">Border Radius</h6>
							<p className="text-muted  card-sub-title">You can set a border to any element by using the following utilities classNamees below.</p>
						</div>
						<div className="d-md-flex">
							<div className="wd-60 mt-md-0 ht-60 mg-l-10 bd rounded"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-5"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-10"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-20"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-30"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-top"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-end"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-bottom"></div>
							<div className="wd-80 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-start"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-circle"></div>
							<div className="wd-60 mt-md-0 mt-4 ht-60 mg-l-10 bd rounded-0"></div>
						</div>
					</Card.Body>
					<Card.Footer>
						<div className="table-responsive">
							<Table className="table main-table-reference mt-0 mb-0">
								<thead>
									<tr>
										<th className="wd-30p">className</th>
										<th className="wd-70p">Description / Value</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code className="pd-0 bg-transparent">.rounded</code></td>
										<td>Set a border radius of 2px (default) to an element.</td>
									</tr>
									<tr>
										<td><code className="pd-0 bg-transparent">.rounded-[value]</code></td>
										<td>5 | 10 | 20 | 30 | 40 | 50 | circle</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</Card.Footer>
				</Card>
			</Col>
			<Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
				<div className="main-content-left-components">
					<Card className="custom-card">
						<Card.Body className="card-body text-center">
							<div className="icon-service bg-primary-transparent rounded-circle text-primary">
								<i className="fe fe-user"></i>
							</div>
							<p className="mb-1 text-muted">Total Users</p>
							<h3 className="mb-0">34,789</h3>
						</Card.Body>
					</Card>
					<Card className="custom-card">
						<Card.Body className="card-body text-center">
							<div className="icon-service bg-secondary-transparent rounded-circle text-secondary">
								<i className="fe fe-trending-up"></i>
							</div>
							<p className="mb-1 text-muted">Total Sales</p>
							<h3 className="mb-0">98,674</h3>
						</Card.Body>
					</Card>
					<Card className="custom-card">
						<Card.Body className="card-body text-center">
							<div className="icon-service bg-info-transparent rounded-circle text-info">
								<i className="fe fe-dollar-sign"></i>
							</div>
							<p className="mb-1 text-muted">Total Profits</p>
							<h3 className="mb-0"><span>$</span>45,078</h3>
						</Card.Body>
					</Card>
				</div>
			</Col>
		</Row>
		{/* <!-- End Row --> */}
	</Fragment>
);

Border.propTypes = {};

Border.defaultProps = {};

export default Border;
