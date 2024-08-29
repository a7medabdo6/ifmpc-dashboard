/* eslint-disable default-case */
import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Table,
  Image,
} from "react-bootstrap";
import EditAuthors from "./Edit/index";
import { useAuthors } from "../../../Api/Authors/index";
import { Link } from "react-router-dom";
import { useDeleteAuthor, useEditAuthor } from "../../../Api/Authors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authors = () => {
  const { mutate } = useDeleteAuthor();
  const { mutate: mutateEdit } = useEditAuthor();

  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [itemData, setItemData] = useState();

  const handleDelete = () => {
    mutate(id);
    toast.success("This item has been successfully deleted.");
  };

  const [show10, setShow10] = useState(false);

  let viewDemoShow = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(true);
        break;
      case "show10":
        setShow10(true);
        break;
    }
  };

  let viewDemoClose = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(false);
        break;
      case "show10":
        setShow10(false);
        break;
    }
  };

  const { data, error, isLoading } = useAuthors();

  console.log(data);

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Authors Page</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Authors Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/pages/Authors/create"}>
              <Button
                variant="primary"
                type="button"
                className="my-2 btn-icon-text"
              >
                <i className="fe fe-plus me-2"></i> Create
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="sidemenu-height">
        <Col lg={12}>
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                <div>
                  <label className="main-content-label mb-2">Authors</label>
                </div>
              </Card.Header>
              <div className="tasks">
                <Table
                  responsive
                  hover
                  className="card-table table-vcenter text-nowrap mb-0 border hover"
                >
                  <thead>
                    <tr>
                      <th className="wd-lg-10p">Name</th>
                      <th className="wd-lg-20p">Image</th>
                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.results.map((item, index) => (
                      <tr key={index} data-index={index}>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.name}</span>
                          </div>
                        </td>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <Image
                              src={item.image}
                              roundedCircle
                              style={{ width: "40px", height: "40px" }}
                            />
                          </div>
                        </td>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <Button
                              type="submit"
                              onClick={() => {
                                setId(item?.id);
                                viewDemoShow("show10");
                                setItemData(item);
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => {
                                setId(item?.id);
                                viewDemoShow("Basic");
                              }}
                              type="submit"
                              style={{ marginInline: "5px" }}
                              className="mr-1 ml-1"
                              variant="danger"
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    <Modal show={Basic} size="large">
                      <Modal.Header
                        closeButton
                        onClick={() => {
                          viewDemoClose("Basic");
                        }}
                      >
                        <h6>Confirm Deletion</h6>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to delete this item?
                        <br />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          onClick={() => {
                            viewDemoClose("Basic");
                            handleDelete();
                          }}
                          className="text-center"
                        >
                          Delete
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            viewDemoClose("Basic");
                          }}
                          className="text-center"
                        >
                          Cancel
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <Modal show={show10} size="xl" backdrop="static">
                      <Modal.Header
                        closeButton
                        onClick={() => {
                          viewDemoClose("show10");
                        }}
                      >
                        <Modal.Title>Confirm Editing</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Modal.Title>Edit Author</Modal.Title>
                        <EditAuthors
                          id={id}
                          itemData={itemData}
                          viewDemoClose={viewDemoClose}
                          setShow10={setShow10}
                        />
                      </Modal.Body>
                    </Modal>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Fragment>
  );
};

Authors.propTypes = {};

Authors.defaultProps = {};

export default Authors;
