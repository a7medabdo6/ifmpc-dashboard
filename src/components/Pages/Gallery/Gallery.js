import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import * as gallery from "./gallerydata";
const Gallery = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Gallery</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
          <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
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
      <Col lg={12} md={12}>
        <Card className=" custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">React-light-gallery</h6>
              <p className="text-muted card-sub-title">
                gif A customizable, modular, responsive,react-photoswipe-gallery
              </p>
            </div>
            <gallery.Gallery2 />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
