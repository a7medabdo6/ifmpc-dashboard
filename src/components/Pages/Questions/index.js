import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  Button,
  Row,
  Col,
  Table,
  Card,
  Modal,
  Pagination,
} from "react-bootstrap";
import { useQuestions } from "../../../Api/Questions/index";
import { Link } from "react-router-dom";
import { useDeleteQuestion } from "../../../Api/Questions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditQuestions from "./Edit/index";

const Questions = () => {
  const { mutate } = useDeleteQuestion();
  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [itemData, setItemData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const { data, error, isLoading } = useQuestions();

  // Ensure data.results is defined and has a valid length
  const results = data?.results || [];
  const totalPages = Math.ceil(results.length / itemsPerPage);

  // Handle cases where totalPages or currentPage might be invalid
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  const currentItems = results.slice(
    (safeCurrentPage - 1) * itemsPerPage,
    safeCurrentPage * itemsPerPage
  );

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Questions Page</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Questions Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/pages/Questions/create"}>
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

      <Row className="sidemenu-height">
        <Col lg={12}>
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                <div>
                  <label className="main-content-label mb-2">Questions</label>
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
                      <th className="wd-lg-20p">Name</th>
                      <th className="wd-lg-20p">Description</th>
                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item, index) => (
                      <tr key={index} data-index={index}>
                        <td className="font-weight-semibold">
                          <span className="mt-1">{item.name}</span>
                        </td>
                        <td className="font-weight-semibold">
                          <span className="mt-1">{item.desc}</span>
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
                <Pagination>
                  <Pagination.Prev
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  />
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index}
                      active={index + 1 === currentPage}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, totalPages)
                      )
                    }
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ToastContainer />

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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              viewDemoClose("Basic");
              handleDelete();
            }}
          >
            Delete
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              viewDemoClose("Basic");
            }}
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
          <Modal.Title>Edit category</Modal.Title>
          <EditQuestions
            setShow10={setShow10}
            id={id}
            itemData={itemData}
            viewDemoClose={viewDemoClose}
          />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Questions;
