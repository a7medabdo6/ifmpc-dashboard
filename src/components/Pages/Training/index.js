/* eslint-disable default-case */
import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  Button,
  Row,
  Col,
  Table,
  Card,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTrainings from "./Edit/index";
import { useTrainings } from "../../../Api/Training/index";
import { useDeleteTraining, useEditTraining } from "../../../Api/Training";

const Trainings = () => {
  const { mutate } = useDeleteTraining();
  const { mutate: mutateEdit } = useEditTraining();

  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [itemData, setItemData] = useState();

  const handleDelete = () => {
    mutate(id);
    toast.success("This item has been successfully deleted.");
  };

  const [show10, setShow10] = useState(false);
  const viewDemoShow = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(true);
        break;
      case "show10":
        setShow10(true);
        break;
    }
  };

  const viewDemoClose = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(false);
        break;
      case "show10":
        setShow10(false);
        break;
    }
  };

  const { data, error, isLoading } = useTrainings();

  console.log(data);

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Trainings Page</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Trainings Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/spruha/preview/pages/training/create"}>
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
                  <label className="main-content-label mb-2">Trainings</label>
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
                      <th className="wd-lg-10p">title</th>
                      <th className="wd-lg-20p">title_en</th>
                      <th className="wd-lg-20p">title_ar</th>
                      <th className="wd-lg-20p">description</th>
                      <th className="wd-lg-20p">description_en</th>
                      <th className="wd-lg-20p">description_ar</th>
                      <th className="wd-lg-20p">image</th>
                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.results.map((item, index) => {
                      return (
                        <tr key={index} data-index={index}>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.title}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.title_en}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.title_ar}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.description}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">
                                {item.description_en}
                              </span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">
                                {item.description_ar}
                              </span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <img
                                src={item.image}
                                alt="Training Image"
                                style={{ width: "50px", height: "50px" }}
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
                      );
                    })}

                    <Modal show={Basic} size="large">
                      <Modal.Header
                        closeButton
                        onClick={() => {
                          viewDemoClose("Basic");
                        }}
                      >
                        <h6>Confirm Deletion</h6>
                      </Modal.Header>
                      <Modal.Body>Are you Sure to delete Item ? </Modal.Body>
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
                        <Modal.Title>Edit Training</Modal.Title>
                        <EditTrainings
                          setShow10={setShow10}
                          id={id}
                          itemData={itemData}
                          viewDemoClose={viewDemoClose}
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
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

export default Trainings;
