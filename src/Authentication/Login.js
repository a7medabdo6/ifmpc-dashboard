// import React, { Fragment, useState } from "react";
// import {
//   Button,
//   Col,
//   Form,
//   Row,
//   Alert,
//   Container,
//   Card,
// } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../Firebase/firebase";
// import { useDispatch } from "react-redux";
// import { login } from "../features/auth/authSlice";
// const SignIn = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     dispatch(login({ username: "user" }));
//     navigate("/dashboard");
//   };
//   const [err, setError] = useState("");
//   const [data, setData] = useState({
//     email: "adminreact@gmail.com",
//     password: "1234567890",
//   });
//   const { email, password } = data;
//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//     setError("");
//   };
//   const routeChange = () => {
//     let path = `/dashboard`;
//     navigate(path);
//   };

//   const Login = (e) => {
//     e.preventDefault();
//     dispatch(login({ username: "user" }));

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((user) => {
//         console.log(user);
//         routeChange();
//       })
//       .catch((err) => {
//         console.log(err);
//         setError(err.message);
//       });
//   };

//   return (
//     <>
//       <Fragment>
//         {/* <!-- Row --> */}
//         <div className="page main-signin-wrapper">
//           <Row className="signpages text-center">
//             <Col md={12}>
//               <Card>
//                 <Row className="row-sm">
//                   <Col
//                     lg={6}
//                     xl={5}
//                     className="d-none d-lg-block text-center bg-primary details"
//                   >
//                     <div className="mt-5 pt-4 p-2 pos-absolute">
//                       <img
//                         src={require("../assets/img/brand/logo-light.png")}
//                         className="header-brand-img mb-4"
//                         alt="logo-light"
//                       />
//                       <div className="clearfix"></div>
//                       <img
//                         src={require("../assets/img/svgs/user.svg").default}
//                         className="ht-100 mb-0"
//                         alt="user"
//                       />
//                       <h5 className="mt-4 text-white">Create Your Account</h5>
//                       <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
//                         Signup to create, discover and connect with the global
//                         community
//                       </span>
//                     </div>
//                   </Col>
//                   <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
//                     <Container fluid>
//                       <Row className="row-sm">
//                         <Card.Body className="mt-2 mb-2">
//                           <img
//                             src={require("../assets/img/brand/logo.png")}
//                             className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
//                             alt="logo"
//                           />
//                           <img
//                             src={require("../assets/img/brand/logo-light.png")}
//                             className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
//                             alt="logo"
//                           />
//                           <div className="clearfix"></div>
//                           {err && <Alert variant="danger">{err}</Alert>}
//                           <Form>
//                             <h5 className="text-start mb-2">
//                               Signin to Your Account
//                             </h5>
//                             <p className="mb-4 text-muted tx-13 ms-0 text-start">
//                               Signin to create, discover and connect with the
//                               global community
//                             </p>
//                             <Form.Group
//                               className="text-start form-group"
//                               controlId="formEmail"
//                             >
//                               <Form.Label>Email</Form.Label>
//                               <Form.Control
//                                 className="form-control"
//                                 placeholder="Enter your email"
//                                 name="email"
//                                 type="text"
//                                 value={email}
//                                 onChange={changeHandler}
//                                 required
//                               />
//                             </Form.Group>
//                             <Form.Group
//                               className="text-start form-group"
//                               controlId="formpassword"
//                             >
//                               <Form.Label>Password</Form.Label>
//                               <Form.Control
//                                 className="form-control"
//                                 placeholder="Enter your password"
//                                 name="password"
//                                 type="password"
//                                 value={password}
//                                 onChange={changeHandler}
//                                 required
//                               />
//                             </Form.Group>
//                             <Button
//                               onClick={Login}
//                               className="btn ripple btn-main-primary btn-block mt-2"
//                             >
//                               Sign In
//                             </Button>
//                           </Form>
//                           <div className="text-start mt-5 ms-0">
//                             <div className="mb-1">
//                               <Link to="#"> Forgot password ?</Link>
//                             </div>
//                             <div>
//                               Don't have an account?
//                               <Link
//                                 to={`/authentication/signup`}
//                               >
//                                 {" "}
//                                 Resgister Here
//                               </Link>
//                             </div>
//                           </div>
//                         </Card.Body>
//                       </Row>
//                     </Container>
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>
//           </Row>
//         </div>

//         {/* <!-- End Row --> */}
//       </Fragment>
//     </>
//   );
// };

// SignIn.propTypes = {};

// SignIn.defaultProps = {};

// export default SignIn;

import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  Alert,
  Container,
  Card,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useLoginUser } from "../Api/Auth/index";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate, data: DataLoginResponse } = useLoginUser();
  console.log(DataLoginResponse);

  const [err, setError] = useState("");
  const [data, setData] = useState({
    username: "ehapsamy", // Change email to username
    password: "123456789++",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };
  const Login = async (e) => {
    e.preventDefault();

    // Use username for login instead of email
    // dispatch(login({ access: DataLoginResponse?.access }));

    let data = {
      username,
      password,
    };

    await mutate(data);
    // routeChange()
  };
  useEffect(() => {
    if (DataLoginResponse?.access) {
      dispatch(login({ access: DataLoginResponse?.access }));
      localStorage.setItem("accessToken", DataLoginResponse.access);

      routeChange();
    }
  }, [DataLoginResponse?.access, routeChange]);

  return (
    <Fragment>
      <div className="page main-signin-wrapper">
        <Row className="signpages text-center">
          <Col md={12}>
            <Card>
              <Row className="row-sm">
                <Col
                  lg={6}
                  xl={5}
                  className="d-none d-lg-block text-center bg-primary details"
                >
                  <div className="mt-5 pt-4 p-2 pos-absolute">
                    <img
                      src={require("../assets/img/brand/logo-light.png")}
                      className="header-brand-img mb-4"
                      alt="logo-light"
                    />
                    <div className="clearfix"></div>
                    <img
                      src={require("../assets/img/svgs/user.svg").default}
                      className="ht-100 mb-0"
                      alt="user"
                    />
                    <h5 className="mt-4 text-white">Create Your Account</h5>
                    <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                      Signup to create, discover and connect with the global
                      community
                    </span>
                  </div>
                </Col>
                <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                  <Container fluid>
                    <Row className="row-sm">
                      <Card.Body className="mt-2 mb-2">
                        <img
                          src={require("../assets/img/brand/logo.png")}
                          className="d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                          alt="logo"
                        />
                        <img
                          src={require("../assets/img/brand/logo-light.png")}
                          className="d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                          alt="logo"
                        />
                        <div className="clearfix"></div>
                        {err && <Alert variant="danger">{err}</Alert>}
                        <Form>
                          <h5 className="text-start mb-2">
                            Signin to Your Account
                          </h5>
                          <p className="mb-4 text-muted tx-13 ms-0 text-start">
                            Signin to create, discover and connect with the
                            global community
                          </p>
                          <Form.Group
                            className="text-start form-group"
                            controlId="formUsername" // Updated ID
                          >
                            <Form.Label>Username</Form.Label>{" "}
                            {/* Updated label */}
                            <Form.Control
                              className="form-control"
                              placeholder="Enter your username" // Updated placeholder
                              name="username"
                              type="text"
                              value={username}
                              onChange={changeHandler}
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className="text-start form-group"
                            controlId="formPassword" // Updated ID
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              className="form-control"
                              placeholder="Enter your password"
                              name="password"
                              type="password"
                              value={password}
                              onChange={changeHandler}
                              required
                            />
                          </Form.Group>
                          <Button
                            onClick={Login}
                            className="btn ripple btn-main-primary btn-block mt-2"
                          >
                            Sign In
                          </Button>
                        </Form>
                        <div className="text-start mt-5 ms-0">
                          <div className="mb-1">
                            <Link to="#"> Forgot password ?</Link>
                          </div>
                          <div>
                            Don't have an account?
                            <Link to={`/authentication/signup`}>
                              {" "}
                              Register Here
                            </Link>
                          </div>
                        </div>
                      </Card.Body>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
