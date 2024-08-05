import React, { Fragment } from "react";
import { Table, Button, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import { Listpages } from "../../../../data/tables/basicdatatable";
const Reactbasicables = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Basic Tables</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            Maps & Tables
          </Breadcrumb.Item>
          <Breadcrumb.Item active >
            Basic Tables
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
    <Row className="row row-sm">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Simple Table</h6>
              <p className="text-muted card-sub-title">
                Using the most basic table markup
              </p>
            </div>

            <div esponsive="true" className="table-responsive border border-bottom-0">
              <Table className="table text-nowrap text-md-nowrap mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  {Listpages.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.POSITION} </td>
                      <td>{list.SALARY}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row row-sm">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Striped Rows</h6>
              <p className="text-muted card-sub-title">
                Add zebra-striping to any table row.
              </p>
            </div>
            <div className="table-responsive border border-bottom-0" responsive="true">
              <Table className="table  text-nowrap text-md-nowrap table-striped mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  {Listpages.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.POSITION} </td>
                      <td>{list.SALARY}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row row-sm">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Bordered Table</h6>
              <p className="text-muted card-sub-title">
                Add borders on all sides of the table and cells.
              </p>
            </div>
            <div className="table-responsive" responsive="true">
              <Table className="table text-nowrap text-md-nowrap table-bordered mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  {Listpages.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.POSITION} </td>
                      <td>{list.SALARY}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row row-sm">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Hoverable Rows Table</h6>
              <p className="text-muted card-sub-title">
                To enable a hover state on table rows.
              </p>
            </div>
            <div className="table-responsive border border-bottom-0" responsive="true">
              <table className="table text-nowrap text-md-nowrap table-hover mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  {Listpages.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.POSITION} </td>
                      <td>{list.SALARY}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Reactbasicables.propTypes = {};

Reactbasicables.defaultProps = {};

export default Reactbasicables;
