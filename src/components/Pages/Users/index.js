// /* eslint-disable default-case */
// import React, { Fragment, useEffect, useState } from "react";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   Dropdown,
//   ProgressBar,
//   Alert,
//   Row,
//   Col,
//   Table,
//   Card,
//   Container,
//   Button,
//   Modal,
// } from "react-bootstrap";
// import Searchable from "react-searchable-dropdown";
// import EditUsers from "./Edit/index";
// import CircularProgress from "@mui/material/CircularProgress";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
// import user1 from "../../../assets/img/users/1.jpg";
// import { useUsers } from "../../../Api/User/index";
// import { Link } from "react-router-dom";
// import { useDeleteUser, useEditUser } from "../../../Api/User";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import OneUser from "./OneUser/index";
// const Users = () => {
//   const { mutate } = useDeleteUser();
//   const { mutate: mutateEdit } = useEditUser();

//   const [Basic, setShow1] = useState(false);
//   const [id, setId] = useState();
//   const [username, setUserName] = useState();

//   const [itemData, setItemData] = useState();

//   const handleDelete = () => {
//     mutate(id);
//     toast.success("This item has been successfully deleted.");
//   };
//   const [show10, setShow10] = useState(false);
//   let viewDemoShow = (modal) => {
//     //  [eslint]
//     switch (modal) {
//       case "Basic":
//         setShow1(true);
//         break;

//       case "show10":
//         setShow10(true);
//         break;
//     }
//   };

//   let viewDemoClose = (modal) => {
//     switch (modal) {
//       case "Basic":
//         setShow1(false);
//         break;

//       case "show10":
//         setShow10(false);
//         break;
//     }
//   };

//   const { data, error, isLoading } = useUsers();

//   console.log(data);

//   return (
//     <Fragment>
//       {/* <!-- Page Header --> */}
//       <div className="page-header">
//         <div>
//           <h2 className="main-content-title tx-24 mg-b-5">Users Page</h2>
//           <Breadcrumb>
//              
//             <Breadcrumb.Item active>Users Page</Breadcrumb.Item>
//           </Breadcrumb>
//         </div>
//         <div className="d-flex">
//           <div className="justify-content-center">
//             {/* <Link to={"/pages/Users/create"}>
//               <Button
//                 variant="primary"
//                 type="button"
//                 className="my-2 btn-icon-text"
//               >
//                 <i className="fe fe-plus me-2"></i> Create
//               </Button>
//             </Link> */}
//           </div>
//         </div>
//       </div>
//       {/* <!-- End Page Header --> */}

//       {/* <!-- Row --> */}
//       <Row className=" sidemenu-height">
//         <Col lg={12}>
//           <Card className="custom-card mg-b-20">
//             <Card.Body>
//               <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
//                 <div>
//                   <label className="main-content-label mb-2">Users</label>
//                 </div>
//               </Card.Header>
//               <div className=" tasks">
//                 <Table
//                   responsive
//                   hover
//                   className="card-table table-vcenter text-nowrap mb-0
// border hover"
//                 >
//                   <thead>
//                     <tr>
//                       <th className="wd-lg-10p">username</th>
//                       <th className="wd-lg-20p">name</th>
//                       <th className="wd-lg-20p ">url</th>

//                       <th className="wd-lg-20p">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data?.results.map((item, index) => {
//                       return (
//                         <tr key={index} data-index={index}>
//                           <td className="font-weight-semibold">
//                             <div className="d-flex">
//                               <span className="mt-1">{item.username}</span>
//                             </div>
//                           </td>
//                           <td className="font-weight-semibold">
//                             <div className="d-flex">
//                               <span className="mt-1">{item.name}</span>
//                             </div>
//                           </td>{" "}
//                           <td className="font-weight-semibold">
//                             <div className="d-flex">
//                               <span className="mt-1">{item.url}</span>
//                             </div>
//                           </td>
//                           <td className="font-weight-semibold">
//                             <div className="d-flex">
//                               <Button
//                                 type="submit"
//                                 onClick={() => {
//                                   return (
//                                     setId(item?.id),
//                                     viewDemoShow("show10"),
//                                     setItemData(item)
//                                   );
//                                 }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 onClick={() => {
//                                   return (
//                                     setUserName(item?.username),
//                                     viewDemoShow("Basic")
//                                   );
//                                 }}
//                                 type="submit"
//                                 style={{ marginInline: "5px" }}
//                                 className="mr-1 ml-1"
//                                 variant="danger"
//                               >
//                                 Info
//                               </Button>
//                             </div>
//                           </td>
//                         </tr>
//                       );
//                     })}

//                     <Modal show={Basic} size="xl">
//                       <Modal.Header
//                         closeButton
//                         onClick={() => {
//                           viewDemoClose("Basic");
//                         }}
//                       >
//                         <h6>Confirm Deletion</h6>
//                       </Modal.Header>
//                       <Modal.Body>
//                         <OneUser username={username} />
//                       </Modal.Body>
//                       <Modal.Footer>
//                         {/* <Button
//                           variant="primary"
//                           onClick={() => {
//                             viewDemoClose("Basic");
//                             handleDelete();
//                           }}
//                           className="text-center"
//                         >
//                           Delete
//                         </Button> */}
//                         <Button
//                           variant="danger"
//                           onClick={() => {
//                             viewDemoClose("Basic");
//                           }}
//                           className="text-center"
//                         >
//                           Cancel
//                         </Button>
//                       </Modal.Footer>
//                     </Modal>

//                     <Modal show={show10} size="xl" backdrop="static">
//                       <Modal.Header
//                         closeButton
//                         onClick={() => {
//                           viewDemoClose("show10");
//                         }}
//                       >
//                         <Modal.Title>Confirm Editing</Modal.Title>
//                       </Modal.Header>
//                       <Modal.Body>
//                         <Modal.Title>Edit categorie</Modal.Title>
//                         <EditUsers
//                           setShow10={setShow10}
//                           username={itemData?.username}
//                           itemData={itemData}
//                           viewDemoClose={viewDemoClose}
//                         />
//                       </Modal.Body>
//                       {/* <Modal.Footer>
//                         <Button
//                           variant="primary"
//                           onClick={() => viewDemoClose("show10")}
//                         >
//                           Save Changes
//                         </Button>
//                         <Button
//                           variant="secondary"
//                           onClick={() => viewDemoClose("show10")}
//                         >
//                           Close
//                         </Button>
//                       </Modal.Footer> */}
//                     </Modal>

//                     {/* {TASKS.map((items, index) => (
//                       <tr key={index} data-index={index}>
//                         <td className="font-weight-semibold">
//                           <div className="d-flex">
//                             <label className="ckbox my-auto me-4">
//                               <input readOnly="" type="checkbox" />
//                               <span></span>
//                             </label>
//                             <span className="mt-1">{items.Task}</span>
//                           </div>
//                         </td>
//                         <td className="text-nowrap">
//                           <div className="demo-avatar-group my-auto float-start">
//                             <div className="main-img-user avatar-sm">
//                               <img
//                                 alt="avatar"
//                                 className="rounded-circle"
//                                 src={items.TeamMember1}
//                               />
//                             </div>
//                           </div>
//                         </td>
//                         <td className="text-center">
//                           37<i className=""></i>
//                         </td>
//                         <td className={`text-${items.Profittext}`}>
//                           {items.TaskProfit}
//                         </td>
//                         <td>
//                           <span
//                             className={`badge bg-pill bg-${items.Statustext}-light`}
//                           >
//                             {items.Status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))} */}
//                   </tbody>
//                 </Table>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       {/* <button onClick={notify}>Notify!</button> */}
//       <ToastContainer />
//       {/* <!-- End Row --> */}
//     </Fragment>
//   );
// };

// Users.propTypes = {};

// Users.defaultProps = {};

// export default Users;

import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  Card,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Pagination,
} from "react-bootstrap";
import { useUsers } from "../../../Api/User";
import { useDeleteUser } from "../../../Api/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OneUser from "./OneUser";
import EditUsers from "./Edit";

const Users = () => {
  const { mutate } = useDeleteUser();
  const { data, error, isLoading } = useUsers();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Limit of 5 items per page
  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [username, setUserName] = useState();
  const [itemData, setItemData] = useState();
  const [show10, setShow10] = useState(false);

  const handleDelete = () => {
    mutate(id);
    toast.success("This item has been successfully deleted.");
  };

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

  // Ensure data.results is defined and has elements
  if (!data || !data.results || data.results.length === 0) {
    return <div>No users available.</div>;
  }

  // Logic for displaying items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.results.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for displaying page numbers
  const totalPages = Math.ceil(data.results.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Users Page</h2>
          <Breadcrumb>
             
            <Breadcrumb.Item active>Users Page</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Row className="sidemenu-height">
        <Col lg={12}>
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                <div>
                  <label className="main-content-label mb-2">Users</label>
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
                      <th className="wd-lg-10p">username</th>
                      <th className="wd-lg-20p">name</th>
                      <th className="wd-lg-20p">url</th>
                      <th className="wd-lg-20p">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item, index) => (
                      <tr key={index} data-index={index}>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.username}</span>
                          </div>
                        </td>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.name}</span>
                          </div>
                        </td>
                        <td className="font-weight-semibold">
                          <div className="d-flex">
                            <span className="mt-1">{item.url}</span>
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
                                setUserName(item?.username);
                                viewDemoShow("Basic");
                              }}
                              type="submit"
                              style={{ marginInline: "5px" }}
                              className="mr-1 ml-1"
                              variant="danger"
                            >
                              Info
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                {/* Pagination Component */}
                {totalPages  && (
                  <Pagination>
                    <Pagination.First
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                    />
                    <Pagination.Prev
                      onClick={() =>
                        handlePageChange(
                          currentPage > 1 ? currentPage - 1 : 1
                        )
                      }
                      disabled={currentPage === 1}
                    />
                    {[...Array(totalPages)].map((_, index) => (
                      <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      onClick={() =>
                        handlePageChange(
                          currentPage < totalPages
                            ? currentPage + 1
                            : totalPages
                        )
                      }
                      disabled={currentPage === totalPages}
                    />
                    <Pagination.Last
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modals */}
      <Modal show={Basic} size="xl">
        <Modal.Header closeButton onClick={() => viewDemoClose("Basic")}>
          <h6>Confirm Deletion</h6>
        </Modal.Header>
        <Modal.Body>
          <OneUser username={username} />
        </Modal.Body>
        <Modal.Footer>
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
        <Modal.Header closeButton onClick={() => viewDemoClose("show10")}>
          <Modal.Title>Confirm Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUsers
            setShow10={setShow10}
            username={itemData?.username}
            itemData={itemData}
            viewDemoClose={viewDemoClose}
          />
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </Fragment>
  );
};

export default Users;
