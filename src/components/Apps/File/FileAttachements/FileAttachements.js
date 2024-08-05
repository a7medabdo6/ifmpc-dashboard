import React, { Fragment } from 'react';
import { Breadcrumb, Row, Button, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const FileAttachements = () => (
    <Fragment>
        {/* <!-- Page Header --> */}
        <div className="page-header">
            <div>
                <h2 className="main-content-title tx-24 mg-b-5">File-Attachements</h2>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Elements</Breadcrumb.Item>
                    <Breadcrumb.Item active >File-Attachements Page</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="d-flex">
                <div className="justify-content-center">
                    <Button
                        variant="white"
                        type="button" className="btn-icon-text my-2 me-2">
                        <i className="fe fe-download me-2"></i> Import
                    </Button>
                    <Button
                        variant="white"
                        type="button" className="btn-icon-text my-2 me-2">
                        <i className="fe fe-filter me-2"></i> Filter
                    </Button>
                    <Button
                        variant="primary"
                        type="button" className=" my-2 btn-icon-text">
                        <i className="fe fe-download-cloud me-2"></i> Download Report
                    </Button>
                </div>
            </div>
        </div>
        {/* <!-- End Page Header --> */}

        {/* <!-- Row --> */}
        <Row className="row sidemenu-height">
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements with rounded</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments rounded-30 bg-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> <span className="">Image01..._jpg </span><i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-30 bg-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30 bg-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30 bg-success"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30 bg-danger"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-30 bg-primary"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30 bg-info"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30 bg-warning text-white"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-30 bg-secondary"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements with outline</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments rounded-30  tag-outline-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30 tag-outline-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30  tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30  tag-outline-success"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30  tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30   tag-outline-primary"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30   tag-outline-info"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30   tag-outline-warning"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-30   tag-outline-secondary"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements with radius</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments rounded-3 bg-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-3 bg-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3 bg-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3 bg-success"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3 bg-danger"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-3 bg-primary"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3 bg-info"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3 bg-warning text-white"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-3 bg-secondary"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements with outline-radius</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments rounded-3  tag-outline-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3 tag-outline-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3  tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3  tag-outline-success"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3  tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3   tag-outline-primary"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3   tag-outline-info"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3   tag-outline-warning"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments rounded-3   tag-outline-secondary"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements with square</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments  bg-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   bg-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments bg-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  bg-success"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  bg-danger"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   bg-primary"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  bg-info"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  bg-warning text-white"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   bg-secondary"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements with Outline-square</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments  tag-outline-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments tag-outline-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  tag-outline-success"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   tag-outline-primary"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   tag-outline-info"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   tag-outline-warning"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   tag-outline-secondary"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements  sizes</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments-sm rounded-30 bg-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-30 bg-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments-lg rounded-30 bg-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements  sizes</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments-sm rounded-30 tag-outline-warning mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-30 tag-outline-success"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments-lg rounded-30 tag-outline-secondary"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements  sizes</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments-sm rounded-3 bg-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-3 bg-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments-lg rounded-3 bg-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements  sizes</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments-sm rounded-3 tag-outline-warning mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments  rounded-3 tag-outline-success"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments-lg rounded-3 tag-outline-secondary"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements  sizes</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments-sm  bg-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   bg-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments-lg  bg-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="custom-card">
                    <Card.Body>
                        <div>
                            <h6 className="main-content-label mb-1">File-Attachements  sizes</h6>
                            <p className="text-muted card-sub-title"></p>
                        </div>
                        <div className="tags">
                            <span className="tag tag-attachments-sm  tag-outline-warning mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments   tag-outline-success"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <i className="fe fe-x mt-2 ms-4"></i></span>

                            <span className="tag tag-attachments-lg  tag-outline-secondary"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <i className="fe fe-x mt-2 ms-4"></i></span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Row className="row">
                <Col xl={3} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1 card-sub-title">Image-attachment</h6>
                                <p className="text-muted card-sub-title"></p>
                            </div>
                            <div className="h-100  attached-file-grid6">
                                <div className="pro-img-box attached-file-image">
                                    <Link to="#">
                                        <img className=" pic-1 pos-relative rounded-5 w-100" src={require("../../../../assets/img/media/blog5.jpg")} alt="blog5" /><span className="image-pic">123image.jpg</span>
                                    </Link>
                                    <ul className="icons">
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="download"><i className="fe fe-download"></i></Link></li>
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="delete"><i className="fe fe-trash"></i></Link></li>
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="share"><i className="fe fe-share"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">Image-attachment</h6>
                                <p className="text-muted card-sub-title"></p>
                            </div>
                            <div className="h-100  attached-file-grid6">
                                <div className="pro-img-box attached-file-image">
                                    <Link to="#">
                                        <img className=" pic-1 pos-relative rounded-5 w-100" src={require("../../../../assets/img/media/blog6.jpg")} alt="blog6" /><span className="image-pic">123image.jpg</span>
                                    </Link>
                                    <ul className="icons">
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="download"><i className="fe fe-download"></i></Link></li>
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="delete"><i className="fe fe-trash"></i></Link></li>
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="share"><i className="fe fe-share"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">Image-attachment</h6>
                                <p className="text-muted card-sub-title"></p>
                            </div>
                            <div className="h-100  attached-file-grid6">
                                <div className="pro-img-box attached-file-image">
                                    <Link to="#">
                                        <img className=" pic-1 pos-relative rounded-5 w-100" src={require("../../../../assets/img/media/blog9.jpg")} alt="blog9" /><span className="image-pic">123image.jpg</span>
                                    </Link>
                                    <ul className="icons">
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="download"><i className="fe fe-download"></i></Link></li>
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="delete"><i className="fe fe-trash"></i></Link></li>
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="share"><i className="fe fe-share"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">Image-attachment</h6>
                                <p className="text-muted card-sub-title"></p>
                            </div>
                            <div className="h-100  attached-file-grid6">
                                <div className="pro-img-box attached-file-image">
                                    <Link to="#">
                                        <img className=" pic-1 pos-relative rounded-5 w-100" src={require("../../../../assets/img/media/blog8.jpg")} alt="blog8" /><span className="image-pic">123image.jpg</span>
                                    </Link>
                                    <ul className="icons">
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="download"><i className="fe fe-download"></i></Link></li>
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="delete"><i className="fe fe-trash"></i></Link></li>
                                        <li className="me-1"><Link to="#" data-placement="top" data-bs-toggle="tooltip" title="share"><i className="fe fe-share"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Row>
        {/* <!-- End Row --> */}
    </Fragment>
);

FileAttachements.propTypes = {};

FileAttachements.defaultProps = {};

export default FileAttachements;
