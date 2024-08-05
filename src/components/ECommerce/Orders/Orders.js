import React, { Fragment } from "react";
import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";
import { Orderdatatable } from "../../../data/ecommerce/orders";
function Orders() {

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Orders</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Ecommerce
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Orders
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
      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className=" custom-card">
            <Card.Header className=" border-bottom-0 pb-0">
              <div>
                <div className="d-flex">
                  <label className="main-content-label my-auto pt-2">
                    All Orders
                  </label>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Row className="table-filter">
                <Col lg={3}>
                </Col>
                <Col lg={9} className="d-lg-flex">
                  <div className="d-flex ms-auto mt-4 me-4 mt-lg-0"></div>
                  <div className="d-flex mt-4 mt-lg-0">
                    <div className="filter-group"></div>
                  </div>
                </Col>
              </Row>

              
              
                <Orderdatatable />
             
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Orders.propTypes = {};

Orders.defaultProps = {};

export default Orders;
