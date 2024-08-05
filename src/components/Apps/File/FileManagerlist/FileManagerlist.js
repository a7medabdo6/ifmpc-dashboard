import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Card, Col, Pagination, Row } from 'react-bootstrap';

const FileManagerlist = () => (
	<Fragment>

		{/* <!-- Page Header --> */}
		<div className="page-header">
			<div>
				<h2 className="main-content-title tx-24 mg-b-5">File-manager-list</h2>
				<Breadcrumb>
					<Breadcrumb.Item href="#" >Apps</Breadcrumb.Item>
					<Breadcrumb.Item active>File-manager-list</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<div className="d-flex">
				<div className="justify-content-center">
					<button type="button" className="btn btn-white btn-icon-text my-2 me-2">
						<i className="fe fe-download me-2"></i> Import
					</button>
					<button type="button" className="btn btn-white btn-icon-text my-2 me-2">
						<i className="fe fe-filter me-2"></i> Filter
					</button>
					<button type="button" className="btn btn-primary my-2 btn-icon-text">
						<i className="fe fe-download-cloud me-2"></i> Download Report
					</button>
				</div>
			</div>
		</div>
		{/* <!-- End Page Header --> */}
		{/* <!-- Row --> */}
		<Row>
			<Col xl={2} md={3} lg={6}
			>
				<Card className=" custom-card border shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`} ><img src={require("../../../../assets/img/files/folder.png")} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">videos</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`} ><img src={require("../../../../assets/img/files/folder.png")} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">images</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`} ><img src={require('../../../../assets/img/files/word.png')} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`} ><img src={require('../../../../assets/img/files/word.png')} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require('../../../../assets/img/files/word.png')} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/doc.png")} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to path={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/doc.png")} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to path={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/doc.png")} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/file.png")} alt="img" className="br-7" /></Link>

						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/file.png")} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/file2.png")} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/file2.png")} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/img-1.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">221.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/img-2.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">567.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}>
						<img src={require("../../../../assets/img/files/img-3.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">367.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/img-4.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">211.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/Filedetails`}><img src={require("../../../../assets/img/files/img-5.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">541.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/Filedetails`}><img src={require("../../../../assets/img/files/img-6.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">345.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/Filedetails`}><img src={require("../../../../assets/img/files/img-7.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">213.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<div className="col-xl-2  col-md-3  col-lg-6">
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/Filedetails`}><img src={require("../../../../assets/img/files/img-8.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">1324.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</div>
			<div className="col-xl-2  col-md-3 col-lg-6">
				<Card className="custom-card overflow-hidden">
					<Link to={`${process.env.PUBLIC_URL}/apps/file/filedetails`}><img src={require("../../../../assets/img/files/img-9.jpg")} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">123.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</div>
			<nav>

				<Pagination className="pagination justify-content-end">

					<Pagination.Item >Prev</Pagination.Item>
					<Pagination.Item active >{1}</Pagination.Item>
					<Pagination.Item >{2}</Pagination.Item>
					<Pagination.Item >{3}</Pagination.Item>
					<Pagination.Item >{4}</Pagination.Item>
					<Pagination.Item  >{5}</Pagination.Item>
					<Pagination.Item >Next</Pagination.Item>

				</Pagination>
			</nav>
		</Row>
		{/* <!-- End Row --> */}
	</Fragment>
);

FileManagerlist.propTypes = {};

FileManagerlist.defaultProps = {};

export default FileManagerlist;
