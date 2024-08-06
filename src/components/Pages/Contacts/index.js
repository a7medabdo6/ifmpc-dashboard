/* eslint-disable default-case */
import React, { Fragment, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  ProgressBar,
  Alert,
  Row,
  Col,
  Table,
  Card,
  Container,
  Button,
  Modal,
} from "react-bootstrap";
import Searchable from "react-searchable-dropdown";
import EditeContacts from "./Edit/index";
import CircularProgress from "@mui/material/CircularProgress";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import user1 from "../../../assets/img/users/1.jpg";
import { useContacts } from "../../../Api/Contacts/index";
import { Link } from "react-router-dom";
import { useDeleteContact, useEditContact } from "../../../Api/Contacts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contacts = () => {
  const { mutate } = useDeleteContact();
  const { mutate: mutateEdite } = useEditContact();

  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [itemData, setItemData] = useState();

  const handleDelete = () => {
    mutate(id);
    toast.success("This item has been successfully deleted.");
  };
  const [show10, setShow10] = useState(false);
  let viewDemoShow = (modal) => {
    //  [eslint]
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

  const { data, error, isLoading } = useContacts();

  console.log(data);

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Contacts Page</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Contacts Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/spruha/preview/pages/contacts/create"}>
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
      <Row className=" sidemenu-height">
        <Col lg={12}>
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                <div>
                  <label className="main-content-label mb-2">Contacts</label>
                </div>
              </Card.Header>
              <div className=" tasks">
                <Table
                  responsive
                  hover
                  className="card-table table-vcenter text-nowrap mb-0
border hover"
                >
                  <thead>
                    <tr>
                      <th className="wd-lg-10p">first_name</th>
                      <th className="wd-lg-20p">last_name</th>
                      <th className="wd-lg-20p ">email</th>
                      <th className="wd-lg-20p ">phone</th>
                      <th className="wd-lg-20p ">description</th>

                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.results.map((item, index) => {
                      return (
                        <tr key={index} data-index={index}>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.first_name}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.last_name}</span>
                            </div>
                          </td>{" "}
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">
                                {item.email}
                              </span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.phone}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.description}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <Button
                                type="submit"
                                onClick={() => {
                                  return (
                                    setId(item?.id), viewDemoShow("show10"), setItemData(item)
                                  );
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => {
                                  return setId(item?.id), viewDemoShow("Basic");
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
                        <Modal.Title>Edit categorie</Modal.Title>
                        <EditeContacts id={id} itemData={itemData} viewDemoClose={viewDemoClose} />
                      </Modal.Body>
                      {/* <Modal.Footer>
                        <Button
                          variant="primary"
                          onClick={() => viewDemoClose("show10")}
                        >
                          Save Changes
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => viewDemoClose("show10")}
                        >
                          Close
                        </Button>
                      </Modal.Footer> */}
                    </Modal>

                    {/* {TASKS.map((items, index) => (
                      <tr key={index} data-index={index}>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <label className="ckbox my-auto me-4">
                              <input readOnly="" type="checkbox" />
                              <span></span>
                            </label>
                            <span className="mt-1">{items.Task}</span>
                          </div>
                        </td>
                        <td className="text-nowrap">
                          <div className="demo-avatar-group my-auto float-start">
                            <div className="main-img-user avatar-sm">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={items.TeamMember1}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          37<i className=""></i>
                        </td>
                        <td className={`text-${items.Profittext}`}>
                          {items.TaskProfit}
                        </td>
                        <td>
                          <span
                            className={`badge bg-pill bg-${items.Statustext}-light`}
                          >
                            {items.Status}
                          </span>
                        </td>
                      </tr>
                    ))} */}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Contacts.propTypes = {};

Contacts.defaultProps = {};

export default Contacts;
