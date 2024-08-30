/* eslint-disable default-case */
import React, { Fragment, useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDeleteProject, useEditProject } from "../../../Api/Projects";
import { useProjects } from "../../../Api/Projects/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProjects from "./Edit/index";

const Projects = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const { mutate } = useDeleteProject();
  const { mutate: mutateEdit } = useEditProject();
  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [itemData, setItemData] = useState();
  const [show10, setShow10] = useState(false);
  const [title, setTitle] = useState(false);
  useEffect(() => {
    if (title && id) {
      navigate("/pages/Projects/edit", {
        state: { id: id },
      });
    }
  }, [title, id, navigate]);
  const handleDelete = () => {
    mutate(id);
    toast.success("This item has been successfully deleted.");
  };

  const viewDemoShow = (modal) => {
    // eslint-disable-next-line default-case
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

  const { data, error, isLoading } = useProjects();

  return (
    <Fragment>
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Projects Page</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Projects Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/pages/Projects/create"}>
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
      {/* End Page Header */}

      {/* Row */}
      <Row className=" sidemenu-height">
        <Col lg={12}>
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                <div>
                  <label className="main-content-label mb-2">Projects</label>
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
                      <th className="wd-lg-20p">name</th>
                      <th className="wd-lg-10p">category_name</th>
                      {/* <th className="wd-lg-20p">content</th> */}
                      <th className="wd-lg-20p">popularity_count</th>
                      {/* <th className="wd-lg-20p">name_en</th>
                      <th className="wd-lg-20p">name_ar</th>
                      <th className="wd-lg-20p">name</th> */}
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
                            <span className="mt-1">{item?.category?.name}</span>
                          </div>
                        </td>
                        {/* <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item?.content}</span>
                          </div>
                        </td> */}
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">
                              {item.popularity_count}
                            </span>
                          </div>
                        </td>
                        {/* <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.name_en}</span>
                          </div>
                        </td>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.name_ar}</span>
                          </div>
                        </td>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.name}</span>
                          </div>
                        </td> */}
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <Button
                              onClick={() => {
                                setId(item?.id);
                                setTitle(true);
                                if (id) {
                                  navigate("/pages/Projects/edit", {
                                    state: { id: item?.id },
                                  });
                                }
                              }}
                              type="submit"
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
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
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
          {/* <h6>Modal Body</h6> */}
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
      <ToastContainer />
    </Fragment>
  );
};

export default Projects;
