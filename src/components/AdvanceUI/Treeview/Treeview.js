import React, { Fragment } from "react";
import TreeView from "deni-react-treeview";
import { Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5, Checkbox6, Folder1, Folder2, Folder3, Folder4, Folder5, Folder6, Tech, treeview1, treeview2, treeview3, treeview4, treeview5, treeview6, Xrp, } from "../../../data/treeveiw";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
const Treeviews = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Tree view</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Accordion UI </Breadcrumb.Item>
          <Breadcrumb.Item active >Tree view</Breadcrumb.Item>
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
    {/* <!-- row --> */}
    <Row>
      <Col md={12}>
        <Card className="custom-card mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Basic Treeview</div>
            <p className="text-muted card-sub-title">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <Row>
              {/* <!-- col --> */}
              <Col lg={4}>
                <ul id="treeview1" className="ps-0">
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Tech}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Xrp}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                </ul>
              </Col>
              <Col lg={4} className=" mt-4 mt-lg-0">
                <ul id="treeview2" className="ps-0">
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Tech}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Xrp}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                </ul>
              </Col>
              <Col lg={4} className=" mt-4 mt-lg-0">
                <ul id="treeview3" className="ps-0">
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Tech}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Xrp}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                </ul>
              </Col>

            </Row>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div className="main-content-label mg-b-5">Tree View Styles</div>
            <p className="text-muted card-sub-title">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <Row>
              <Col lg={4}>
                <ul id="tree1" className="ps-0">
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={treeview1}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={treeview2}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={treeview3}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={treeview4}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={treeview5}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={treeview6}
                      selectRow={true}
                      showIcon={false}
                    />
                  </li>
                </ul>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col lg={4} className=" mt-4 mt-lg-0">
                <ul id="tree2" className="ps-0">
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Folder1}
                      selectRow={true}
                      showIcon={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Folder2}
                      selectRow={true}
                      showIcon={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Folder3}
                      selectRow={true}
                      showIcon={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Folder4}
                      selectRow={true}
                      showIcon={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Folder5}
                      selectRow={true}
                      showIcon={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Folder6}
                      selectRow={true}
                      showIcon={true}
                    />
                  </li>

                </ul>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col lg={4} className=" mt-4 mt-lg-0">
                <ul id="tree3" className="ps-0">

                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Checkbox1}
                      selectRow={true}
                      showIcon={true}
                      showCheckbox={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Checkbox2}
                      selectRow={true}
                      showIcon={true}
                      showCheckbox={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Checkbox3}
                      selectRow={true}
                      showIcon={true}
                      showCheckbox={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Checkbox4}
                      selectRow={true}
                      showIcon={true}
                      showCheckbox={true}
                    />
                  </li>
                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Checkbox5}
                      selectRow={true}
                      showIcon={true}
                      showCheckbox={true}
                    />
                  </li>

                  <li className="branch">
                    <TreeView
                      style={{ height: "auto", width: "auto" }}
                      items={Checkbox6}
                      selectRow={true}
                      showIcon={true}
                      showCheckbox={true}
                    />
                  </li>
                </ul>
              </Col>
              {/* <!-- /col --> */}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}
  </Fragment>
);

Treeviews.propTypes = {};

Treeviews.defaultProps = {};

export default Treeviews;
