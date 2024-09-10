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
// import { useNavigate } from "react-router-dom";

// import Searchable from "react-searchable-dropdown";
// import EditPublications from "./Edit/index";
// import CircularProgress from "@mui/material/CircularProgress";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
// import user1 from "../../../assets/img/users/1.jpg";
// import { usePublications } from "../../../Api/Publications/index";
// import { Link } from "react-router-dom";
// import {
//   useDeletePublication,
//   useEditPublication,
// } from "../../../Api/Publications";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const Publications = () => {
//   const navigate = useNavigate(); // Initialize navigate function

//   const { mutate } = useDeletePublication();
//   const { mutate: mutateEdit } = useEditPublication();

//   const [Basic, setShow1] = useState(false);
//   const [id, setId] = useState();
//   const [itemData, setItemData] = useState();
//   const [title, setTitle] = useState(false);
//   useEffect(() => {
//     if (title && id) {
//       navigate(`/pages/publication/edit/${id}`, {
//         state: { id: id },
//       });
//     }
//   }, [title, id, navigate]);
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

//   const { data, error, isLoading } = usePublications();

//   console.log(data);

//   return (
//     <Fragment>
//       {/* <!-- Page Header --> */}
//       <div className="page-header">
//         <div>
//           <h2 className="main-content-title tx-24 mg-b-5">Publications Page</h2>
//           <Breadcrumb>
//             <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
//             <Breadcrumb.Item active>Publications Page</Breadcrumb.Item>
//           </Breadcrumb>
//         </div>
//         <div className="d-flex">
//           <div className="justify-content-center">
//             <Link to={"/pages/Publications/create"}>
//               <Button
//                 variant="primary"
//                 type="button"
//                 className="my-2 btn-icon-text"
//               >
//                 <i className="fe fe-plus me-2"></i> Create
//               </Button>
//             </Link>
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
//                   <label className="main-content-label mb-2">
//                     Publications
//                   </label>
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
//                       <th className="wd-lg-10p">name</th>
//                       {/* <th className="wd-lg-20p">content</th> */}
//                       <th className="wd-lg-20p ">category</th>

//                       <th className="wd-lg-20p">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data?.results.map((item, index) => {
//                       return (
//                         <tr key={index} data-index={index}>
//                           <td className="font-weight-semibold">
//                             <div className="d-flex">
//                               <span className="mt-1">{item.name}</span>
//                             </div>
//                           </td>
//                           {/* <td className="font-weight-semibold">
//                             <div className="d-flex">
//                               <span className="mt-1">{item.content}</span>
//                             </div>
//                           </td>{" "} */}
//                           <td className="font-weight-semibold">
//                             <div className="d-flex">
//                               <span className="mt-1">
//                                 {item.category?.name}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="font-weight-semibold">
//                             <div className="d-flex">
//                               <Button
//                                 type="submit"
//                                 onClick={() => {
//                                   return (
//                                     setId(item?.id),
//                                     setTitle(true),
//                                     setItemData(item)
//                                   );
//                                 }}
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 onClick={() => {
//                                   return setId(item?.id), viewDemoShow("Basic");
//                                 }}
//                                 type="submit"
//                                 style={{ marginInline: "5px" }}
//                                 className="mr-1 ml-1"
//                                 variant="danger"
//                               >
//                                 Delete
//                               </Button>
//                             </div>
//                           </td>
//                         </tr>
//                       );
//                     })}

//                     <Modal show={Basic} size="large">
//                       <Modal.Header
//                         closeButton
//                         onClick={() => {
//                           viewDemoClose("Basic");
//                         }}
//                       >
//                         <h6>Confirm Deletion</h6>
//                       </Modal.Header>
//                       <Modal.Body>
//                         {/* <h6>Modal Body</h6> */}
//                         Are you sure you want to delete this item?
//                         <br />
//                       </Modal.Body>
//                       <Modal.Footer>
//                         <Button
//                           variant="primary"
//                           onClick={() => {
//                             viewDemoClose("Basic");
//                             handleDelete();
//                           }}
//                           className="text-center"
//                         >
//                           Delete
//                         </Button>
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
//                         <Publications
//                           id={id}
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

// Publications.propTypes = {};

// Publications.defaultProps = {};

// export default Publications;

/* eslint-disable default-case */
import React, { Fragment, useEffect, useState } from "react";
import {
  Breadcrumb,
  Card,
  Col,
  Row,
  Table,
  Button,
  Modal,
  Pagination,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom"; // Add Link import
import { usePublications } from "../../../Api/Publications/index";
import { useDeletePublication } from "../../../Api/Publications";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Publications = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const { mutate } = useDeletePublication();
  const [Basic, setShow1] = useState(false);
  const [id, setId] = useState();
  const [itemData, setItemData] = useState();
  const [title, setTitle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const { data, error, isLoading } = usePublications();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data!</div>;

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.results.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.results.length / itemsPerPage);

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
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
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className=" sidemenu-height">
        <Col lg={12}>
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                <div>
                  <label className="main-content-label mb-2">
                    Publications
                  </label>
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
                    {currentItems.map((item, index) => (
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
                                setItemData(item);
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
                    ))}
                  </tbody>
                </Table>
                {/* Pagination */}
                <Pagination>
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Pagination.Item
                      key={i + 1}
                      active={i + 1 === currentPage}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* Confirm Deletion Modal */}
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

      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </Fragment>
  );
};

Publications.propTypes = {};

Publications.defaultProps = {};

export default Publications;
