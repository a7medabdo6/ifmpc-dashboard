import React, { Fragment, useState, useEffect } from "react";
import {
  Breadcrumb,
  Button,
  Row,
  Col,
  Table,
  Card,
  Modal,
  Pagination,
  Form,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditServicesItems from "./Edit/index";
import { useServicesItems } from "../../../Api/ServicesItems/index";
import { useDeleteServiceItems, useEditServiceItems } from "../../../Api/ServicesItems";
import { useNavigate, Link } from "react-router-dom";

const ServicesItems = () => {
  const { mutate } = useDeleteServiceItems();
  const { mutate: mutateEdit } = useEditServiceItems();

  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [itemData, setItemData] = useState();
  const navigate = useNavigate();
  const [title, setTitle] = useState(false);

  const handleDelete = (id) => {
    mutate(id);
    toast.success("This item has been successfully deleted.");
  };

  const handleEdit = (id) => {
    navigate(`/pages/ServicesItems/edit/${id}`);
  };

  useEffect(() => {
    if (title && id) {
      navigate(`/pages/ServicesItems/edit/${id}`, {
        state: { id: id },
      });
    }
  }, [title, id, navigate]);

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

  const { data, error, isLoading } = useServicesItems();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = data?.results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">ServicesItems Page</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>ServicesItems Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/pages/ServicesItems/create"}>
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
                  <label className="main-content-label mb-2">ServicesItems</label>
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
                      <th className="wd-lg-20p">Icon</th>
                      <th className="wd-lg-20p">Title</th>
                      <th className="wd-lg-20p">Description</th>
                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData?.map((item, index) => {
                      return (
                        <tr key={index} data-index={index}>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <img src={item.icon} alt="icon" width="50" height="50" />
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.title}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.description}</span>
                            </div>
                          </td>
                          <td>
                            <Button variant="info" onClick={() => handleEdit(item.id)} className="me-2">Edit</Button>
                            <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                          </td>
                        </tr>
                      );
                    })}
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

export default ServicesItems;
