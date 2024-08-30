import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  Dropdown,
  Nav,
  Pagination,
  Row,
  Button,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { DropzoneAreaBase } from "material-ui-dropzone";
const FileManager = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [files, setFiles] = useState([]);
  const handleAdd = (newFiles) => {
    newFiles = newFiles.filter(
      (file) => !files.find((f) => f.data === file.data)
    );
    setFiles([...files, ...newFiles]);
  };
  const handleDelete = (deleted) => {
    setFiles(files.filter((f) => f !== deleted));
  };
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">File Manager</h2>
          <Breadcrumb>
            <BreadcrumbItem href="#">File</BreadcrumbItem>
            <BreadcrumbItem active>File Manager</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <button
              type="button"
              className="btn btn-white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </button>
            <button
              type="button"
              className="btn btn-white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </button>
            <button
              type="button"
              className="btn btn-primary my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- row --> */}
      <div className="row row-sm">
        <div className="col-lg-4 col-xxl-3">
          <Card className="custom-card">
            <div className="card-body text-center">
              <Button
                className="btn ripple btn-primary btn-block"
                onClick={handleShow}
              >
                Add New File
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DropzoneAreaBase
                    fileObjects={files}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Add
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="card-body tab-list-items py-3">
              <div className="main-content-left main-content-left-mail">
                <div className="main-mail-menu">
                  <Nav
                    className="nav main-nav-column mg-b-20"
                    defaultActiveKey="/"
                    activeKey="/home"
                  >
                    <Nav.Item>
                      <Nav.Link>
                        <i className="fe fe-video"></i> Video <span>30 MB</span>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link href="#">
                        <i className="fe fe-image"></i> Images{" "}
                        <span>21 MB</span>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link href="#">
                        <i className="fe fe-music"></i> Music <span>14 MB</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">
                        <i className="fe fe-download"></i>Download
                        <span>8 MB</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">
                        <i className="fe fe-file-text"></i> Docs
                        <span>16 MB</span>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link href="#">
                        <i className="fe fe-grid"></i> More <span>19 MB</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                {/* <!-- main-mail-menu --> */}
              </div>
            </div>
            <div className="card-body py-3">
              <div className="">
                <div className="main-mail-menu">
                  <label className="main-content-label main-content-label-sm">
                    Label
                  </label>
                  <Nav className="nav main-nav-column">
                    <Nav.Item>
                      <Nav.Link href="#" className="nav-link">
                        <i className="fe fe-folder fe fe-folder tx-10 bg-primary p-2 rounded-5"></i>
                        Social
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#" className="nav-link">
                        <i className="fe fe-folder fe fe-folder tx-10 bg-info p-2 rounded-5"></i>
                        Promotions
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link href="#" className="nav-link">
                        <i className="fe fe-folder fe fe-folder tx-10 bg-success p-2 rounded-5"></i>
                        Updates
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link href="#" className="nav-link">
                        <i className="fe fe-folder fe fe-folder tx-10 bg-danger p-2 rounded-5"></i>
                        Settings
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#" className="nav-link">
                        <i className="fe fe-folder fe fe-folder tx-10 bg-secondary p-2 rounded-5"></i>
                        Google Drive
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-lg-8 col-xxl-9">
          <div className="text-dark mb-2 ms-1 tx-20 font-weight-semibold">
            All Folders
          </div>
          {/* <!-- Row --> */}
          <div className="text-muted mb-2 tx-16">Recent Files</div>
          <Row>
            <Col xxl={3} lg={6} md={6}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex">
                    <div className="media align-items-center pos-relative">
                      <span className="tx-16 lh--7 my-auto">
                        <i className="bg-primary-light p-2 rounded-50 fe fe-image tx-18 me-2"></i>
                      </span>
                      <div className="media-body ms-3">
                        Image
                        <p className="tx-11 mg-b-0 tx-gray-500">
                          Last Opened 32 mins ago
                        </p>
                      </div>
                    </div>
                    <Dropdown className="float-end ms-auto pos-absolute r-5 t-15 fileimage">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i>open
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3} lg={6} md={6}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex">
                    <div className="media align-items-center pos-relative">
                      <span className="tx-16 lh--7 my-auto">
                        <i className="bg-primary-light p-2 rounded-50 fe fe fe-smartphone tx-18 me-2"></i>
                      </span>
                      <div className="media-body ms-3">
                        APK
                        <p className="tx-11 mg-b-0 tx-gray-500">
                          Last Opened 1 hrs ago
                        </p>
                      </div>
                    </div>
                    <Dropdown className="float-end ms-auto pos-absolute r-5 t-15 fileapk">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i>open
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3} lg={6} md={6}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex">
                    <div className="media align-items-center pos-relative">
                      <span className="tx-16 lh--7 my-auto">
                        <i className="bg-primary-light p-2 rounded-50 fe fe-video tx-18 me-2"></i>
                      </span>
                      <div className="media-body ms-3">
                        Video
                        <p className="tx-11 mg-b-0 tx-gray-500">
                          Last Opened 28 min ago
                        </p>
                      </div>
                    </div>
                    <Dropdown className="float-end ms-auto pos-absolute r-5 t-15 filevideo ">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i>open
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3} lg={6} md={6}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex">
                    <div className="media align-items-center pos-relative">
                      <span className="tx-16 lh--7 my-auto">
                        <i className="bg-primary-light p-2 rounded-50 fe fe-file-text  tx-18 me-2"></i>
                      </span>
                      <div className="media-body ms-3">
                        Docs
                        <p className="tx-11 mg-b-0 tx-gray-500">
                          Last Opened 1 hrs ago
                        </p>
                      </div>
                    </div>
                    <Dropdown className="float-end ms-auto pos-absolute r-5 t-15 filedocument ">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i>open
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3} lg={6} md={6}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex">
                    <div className="media align-items-center pos-relative">
                      <span className="tx-16 lh--7 my-auto">
                        <i className="bg-primary-light p-2 rounded-50 fe fe-music  tx-18 me-2"></i>
                      </span>
                      <div className="media-body ms-3">
                        Music
                        <p className="tx-11 mg-b-0 tx-gray-500">
                          Last Opened 2 hrs ago
                        </p>
                      </div>
                    </div>
                    <Dropdown className="float-end ms-auto pos-absolute r-5 t-15 filemusic ">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i>open
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3} lg={6} md={6}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex">
                    <div className="media align-items-center pos-relative">
                      <span className="tx-16 lh--7 my-auto">
                        <i className="bg-primary-light p-2 rounded-50 fe fe-file-text  tx-18 me-2"></i>
                      </span>
                      <div className="media-body ms-3">
                        PDF
                        <p className="tx-11 mg-b-0 tx-gray-500">
                          Last Opened 1 hrs ago
                        </p>
                      </div>
                    </div>
                    <Dropdown className="float-end ms-auto pos-absolute r-5 t-15 filepdf ">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i>open
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3} lg={6} md={6}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex">
                    <div className="media align-items-center pos-relative">
                      <span className="tx-16 lh--7 my-auto">
                        <i className="bg-primary-light p-2 rounded-50 fe fe-image tx-18 me-2"></i>
                      </span>
                      <div className="media-body ms-3">
                        Image
                        <p className="tx-11 mg-b-0 tx-gray-500">
                          Last Opened 32 mins ago
                        </p>
                      </div>
                    </div>
                    <Dropdown className="float-end ms-auto pos-absolute r-5 t-15 ">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i>open
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3} lg={6} md={6}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex">
                    <div className="media align-items-center pos-relative">
                      <span className="tx-16 lh--7 my-auto">
                        <i className="bg-primary-light p-2 rounded-50 fe fe fe-smartphone tx-18 me-2"></i>
                      </span>
                      <div className="media-body ms-3">
                        APK
                        <p className="tx-11 mg-b-0 tx-gray-500">
                          Last Opened 1 hrs ago
                        </p>
                      </div>
                    </div>
                    <Dropdown className="float-end ms-auto pos-absolute r-5 t-15 fileapk ">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i>open
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <div className="text-muted mb-2 tx-16">Folders and Files</div>
            <Row>
              <Col xxl={3} md={4} sm={6}>
                <div className="card custom-card border p-0 shadow-none">
                  <div className="d-flex align-items-center px-4 pt-2">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto foldervideos">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 text-center">
                    <Link
                      to={`/apps/file/filemangerlist`}
                      className="open-file"
                    >
                      <div className="file-manger-icon">
                        <img
                          src={require("../../../../assets/img/files/folder.png")}
                          alt="img"
                          className="br-7"
                        />
                      </div>
                      <h6 className="mb-1 font-weight-semibold mt-0">Videos</h6>
                      <span className="text-muted">4.23gb</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xxl={3} md={4} sm={6}>
                <div className="card custom-card border p-0 shadow-none">
                  <div className="d-flex align-items-center px-4 pt-2">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto floderdocument">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 text-center">
                    <Link to={`/apps/file/filemangerlist`}>
                      <div className="file-manger-icon">
                        <img
                          src={require("../../../../assets/img/files/file.png")}
                          alt="img"
                          className="br-7"
                        />
                      </div>
                      <h6 className="mb-1 font-weight-semibold mt-0">
                        document.pdf
                      </h6>
                      <span className="text-muted">23kb</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xxl={3} md={4} sm={6}>
                <div className="card custom-card border p-0 shadow-none">
                  <div className="d-flex align-items-center px-4 pt-2">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto folderimages">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 text-center">
                    <Link to="#" className="open-file">
                      <div className="file-manger-icon">
                        <img
                          src={require("../../../../assets/img/files/file.png")}
                          alt="img"
                          className="rounded-10"
                        />
                      </div>
                      <h6 className="mb-1 font-weight-semibold mt-1">Images</h6>
                      <span className="text-muted">23kb</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xxl={3} md={4} sm={6}>
                <div className="card custom-card border p-0 shadow-none">
                  <div className="d-flex align-items-center px-4 pt-2">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto folderimages">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 text-center">
                    <Link
                      to={`/apps/file/filemangerlist`}
                      className="open-file"
                    >
                      <div className="file-manger-icon">
                        <img
                          src={require("../../../../assets/img/files/folder.png")}
                          alt="img"
                          className="br-7"
                        />
                      </div>
                      <h6 className="mb-1 font-weight-semibold mt-0">Images</h6>
                      <span className="text-muted">1.23gb</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xxl={3} md={4} sm={6}>
                <div className="card custom-card border p-0 shadow-none">
                  <div className="d-flex align-items-center px-4 pt-2">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto folderimages">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 text-center">
                    <Link to={`/apps/file/filemangerlist`}>
                      <div className="file-manger-icon">
                        <img
                          src={require("../../../../assets/img/files/image.png")}
                          alt="img"
                          className="rounded-10"
                        />
                      </div>
                      <h6 className="mb-1 font-weight-semibold mt-1">Images</h6>
                      <span className="text-muted">23kb</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <div className="col-xxl-3 col-md-4 col-sm-6 ">
                <div className="card custom-card border p-0 shadow-none">
                  <div className="d-flex align-items-center px-4 pt-2">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto floderdocument">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 text-center">
                    <Link to={`/apps/file/filemangerlist`}>
                      <div className="file-manger-icon">
                        <img
                          src={require("../../../../assets/img/files/file.png")}
                          alt="img"
                          className="br-7"
                        />
                      </div>
                      <h6 className="mb-1 font-weight-semibold mt-0">
                        document.pdf
                      </h6>
                      <span className="text-muted">23kb</span>
                    </Link>
                  </div>
                </div>
              </div>
              <Col xxl={3} md={4} sm={6}>
                <div className="card custom-card border p-0 shadow-none">
                  <div className="d-flex align-items-center px-4 pt-2">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto folderdownload">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu-start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 text-center">
                    <Link
                      to={`/apps/file/filemangerlist`}
                      className="open-file"
                    >
                      <div className="file-manger-icon">
                        <img
                          src={require("../../../../assets/img/files/folder.png")}
                          alt="img"
                          className="br-7"
                        />
                      </div>
                      <h6 className="mb-1 font-weight-semibold mt-0">
                        Downloads
                      </h6>
                      <span className="text-muted">453kb</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xxl={3} md={4} sm={6}>
                <div className="card custom-card border p-0 shadow-none">
                  <div className="d-flex align-items-center px-4 pt-2">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto folderdownload">
                      <Dropdown.Toggle
                        variant="default"
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-start"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 text-center">
                    <Link to={`/apps/file/filemangerlist`}>
                      <div className="file-manger-icon">
                        <img
                          src={require("../../../../assets/img/files/word.png")}
                          alt="img"
                          className="br-7"
                        />
                      </div>
                      <h6 className="mb-1 font-weight-semibold mt-0">
                        Word document
                      </h6>
                      <span className="text-muted">23kb</span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <nav>
              <Pagination className=" justify-content-end">
                <Pagination.Item>Prev</Pagination.Item>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </nav>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

FileManager.propTypes = {};

FileManager.defaultProps = {};

export default FileManager;
