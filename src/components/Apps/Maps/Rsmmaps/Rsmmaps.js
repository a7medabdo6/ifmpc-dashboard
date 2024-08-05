import React, { Fragment, useState } from "react";
import { Breadcrumb, Card, Col, Row, Button } from "react-bootstrap";
import * as rsmmapsdata from "../../../../data/rsmmapsdata";
function Rsmmaps() {
  const [content, setContent] = useState("");
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">React Simple Maps</h2>
          <Breadcrumb >
            <Breadcrumb.Item href="#">
              Maps & Tables
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Vector Maps
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
              variant="primary"
              type="button"
              className="my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM maps</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the world map.
                </p>
              </div>
              <div className="ht-300 ht-lg-400" id="vmap">
                <rsmmapsdata.MapChart setTooltipContent={setContent} />
                {content}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM:Basic markers</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the South America map.
                </p>
              </div>
              <div className="ht-300" id="vmap3 ">
                <rsmmapsdata.Basicmarkers />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM:Coustommarkers</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the usa map.
                </p>
              </div>
              <div className="ht-300" id="vmap2">
                <rsmmapsdata.Custommarkers />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM:Line Map</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the Line map.
                </p>
              </div>
              <div className="ht-300 text-center" id="vmap3 ">
                <rsmmapsdata.Linemap />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM:Graticule</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the Graticule map.
                </p>
              </div>
              <div className="ht-300" id="vmap2">
                <rsmmapsdata.Graticule1 />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Rsmmaps.propTypes = {};

Rsmmaps.defaultProps = {};

export default Rsmmaps;
