import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  Row,
  Col,
  Table,
  Card,
  Button,
  Modal,
  Pagination,
} from "react-bootstrap";
import EditTags from "./Edit/index";
import { useTags } from "../../../Api/Tags";
import { Link } from "react-router-dom";
import { useDeleteTage } from "../../../Api/Tags";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tags = () => {
  const { mutate } = useDeleteTage();
  const [Basic, setShow1] = useState(false);
  const [show10, setShow10] = useState(false);
  const [id, setId] = useState();
  const [itemData, setItemData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleDelete = () => {
    mutate(id);
    toast.success("This item has been successfully deleted.");
  };

  const { data, error, isLoading } = useTags();

  // Calculate the index of the last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item of the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items
  const currentItems = data?.results.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data?.results.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Tags Page</h2>
          <Breadcrumb>
             
            <Breadcrumb.Item active>Tags Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/pages/Tags/create"}>
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
                  <label className="main-content-label mb-2">Tags</label>
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
                      <th className="wd-lg-10p">Name_en</th>
                      <th className="wd-lg-10p">Name_ar</th>
                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems?.map((item, index) => {
                      return (
                        <tr key={index} data-index={index}>
                       
                          <td className="font-weight-semibold">
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
                              <Button
                                type="submit"
                                onClick={() => {
                                  setId(item?.id);
                                  setItemData(item);
                                  setShow10(true);
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
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              {/* Pagination */}
              <Pagination className="mt-4">
                <Pagination.Prev
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                />
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
      {/* <!-- End Row --> */}
      <Modal show={Basic} size="large">
        <Modal.Header
          closeButton
          onClick={() => setShow1(false)}
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

      <Modal show={show10} size="xl" backdrop="static">
        <Modal.Header
          closeButton
          onClick={() => setShow10(false)}
        >
          <Modal.Title>Confirm Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Edit category</Modal.Title>
          <EditTags
            setShow10={setShow10}
            id={id}
            itemData={itemData}
            viewDemoClose={() => setShow10(false)}
          />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Tags;
