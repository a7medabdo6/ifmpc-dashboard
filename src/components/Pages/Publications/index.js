import React, { Fragment, useEffect, useState } from "react";
import {
  Breadcrumb,
  Card,
  Col,
  Row,
  Table,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { usePublications } from "../../../Api/Publications/index";
import { useDeletePublication } from "../../../Api/Publications";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomPagination from '../../../components/CustomPagination'

const Publications = () => {
  const navigate = useNavigate();
  const { mutate } = useDeletePublication();
  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [title, setTitle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // استخدام usePublications مع limit وoffset
  const { data, error, isLoading } = usePublications(itemsPerPage, (currentPage - 1) * itemsPerPage);

  useEffect(() => {
    if (title && id) {
      navigate(`/pages/publication/edit/${id}`, {
        state: { id: id },
      });
    }
  }, [title, id, navigate]);

  const handleDelete = () => {
    mutate(id);
    toast.success("This item has been successfully deleted.");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data!</div>;

  const totalPages = Math.ceil(data.count / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Fragment>
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Publications Page</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Publications Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/pages/Publications/create"}>
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
      <Row className="sidemenu-height">
        <Col lg={12}>
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                <div>
                  <label className="main-content-label mb-2">Publications</label>
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
                      <th className="wd-lg-20p">Category</th>
                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.results.map((item, index) => (
                      <tr key={index} data-index={index}>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.name}</span>
                          </div>
                        </td>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.category?.name}</span>
                          </div>
                        </td>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <Button
                              type="submit"
                              onClick={() => {
                                setId(item?.id);
                                setTitle(true);
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => {
                                setId(item?.id);
                                setShow1(true);
                              }}
                              type="submit"
                              style={{ marginInline: "5px" }}
                              className="mr-1 ml-1"
                              variant="danger"
                            >
                              Delete
                            </Button>
                            <Button
                              onClick={() =>
                                window.open(
                                  `https://ifpmc.org/en/research/Publications/${item?.id}`,
                                  "_blank"
                                )
                              }
                              type="button"
                              variant="info"
                              style={{ marginInline: "5px" }}
                            >
                             En Preview
                            </Button>
                            <Button
                              onClick={() =>
                                window.open(
                                  `https://ifpmc.org/ar/research/Publications/${item?.id}`,
                                  "_blank"
                                )
                              }
                              type="button"
                              variant="info"
                              style={{ marginInline: "5px" }}
                            >
                             Ar Preview
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <CustomPagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* End Row */}

      {/* Confirm Deletion Modal */}
      <Modal show={Basic} size="large">
        <Modal.Header closeButton onClick={() => setShow1(false)}>
          <h6>Confirm Deletion</h6>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this item?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow1(false);
              handleDelete();
            }}
            className="text-center"
          >
            Delete
          </Button>
          <Button
            variant="danger"
            onClick={() => setShow1(false)}
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

export default Publications;
