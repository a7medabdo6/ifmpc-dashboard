import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  ProgressBar,
  Row,
  Col,
  Table,
  Card,
  Container,
  Button,
} from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import user1 from "../../../assets/img/users/1.jpg";
import { useCategories } from "../../../Api/Categories/index";
import { Link } from "react-router-dom";
const Categories = () => {
  const { data, error, isLoading } = useCategories();
  console.log(data);

  const TASKS = [
    {
      Task: "Evaluating the design",
      TeamMember1: user1,

      OpenTask: "37",
      TaskProfit: "High",
      Profittext: "primary",
      Status: "Completed",
      Statustext: "primary",
    },
    {
      Task: "Generate ideas for design",
      TeamMember1: user1,

      OpenTask: "37",
      TaskProfit: "Normal",
      Profittext: "secondary",
      Status: "pending",
      Statustext: "warning",
    },
    {
      Task: "Define the problem",
      TeamMember1: user1,

      OpenTask: "37",
      TaskProfit: "Low",
      Profittext: "warning",
      Status: "Completed",
      Statustext: "primary",
    },
    {
      Task: "Empathize with users",
      TeamMember1: user1,

      OpenTask: "37",
      TaskProfit: "high",
      Profittext: "primary",
      Status: "Rejected",
      Statustext: "danger",
    },
  ];
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Categories Page</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Categories Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Link to={"/spruha/preview/pages/categories/create"}>
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
                  <label className="main-content-label mb-2">Categories</label>
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
                      <th className="wd-lg-10p">Name</th>
                      <th className="wd-lg-20p">project_count</th>
                      <th className="wd-lg-20p ">publication_count</th>
                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.results.map((item, index) => {
                      return (
                        <tr key={index} data-index={index}>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.name}</span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">{item.project_count}</span>
                            </div>
                          </td>{" "}
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <span className="mt-1">
                                {item.publication_count}
                              </span>
                            </div>
                          </td>
                          <td className="font-weight-semibold">
                            <div className="d-flex">
                              <Button type="submit">Edit</Button>
                              <Button
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
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
