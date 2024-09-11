// import React, { Fragment, useState, useEffect } from "react";
// import { Breadcrumb, Button, Col, Row, Spinner } from "react-bootstrap";
// import { Formik } from "formik";
// import { Form, InputGroup } from "react-bootstrap";
// import * as yup from "yup";
// import { useCreateCategory } from "../../../../Api/Categories";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const schema = yup.object().shape({
//   name_ar: yup.string().required(),
//   name_en: yup.string().required(),
//   publication_count: yup.string().required(),
//   project_count: yup.string().required(),
//   // other fields
// });

// const AddEditcategories = () => {
//   const { mutate, data, isLoading } = useCreateCategory(); // Add isLoading from the mutation hook
//   const navigate = useNavigate(); // Initialize navigate function
//   const [loading, setLoading] = useState(false); // Manage loading state for button

//   useEffect(() => {
//     if (data) {
//       toast.success("This item has been successfully Created.");

//       navigate("/pages/categories/");
//     }
//   }, [data, navigate]);

//   return (
//     <Fragment>
//       <div className="page-header">
//         <div>
//           <h2 className="main-content-title tx-24 mg-b-5">
//             Create categories
//           </h2>
//           <Breadcrumb>
//             <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
//             <Breadcrumb.Item active>Create categories</Breadcrumb.Item>
//           </Breadcrumb>
//         </div>
//       </div>

//       <div className="col-xl-12 col-lg-12 col-md-12">
//         <div className="card custom-card">
//           <div className="card-body">
//             <Formik
//               validationSchema={schema}
//               onSubmit={(data) => {
//                 setLoading(true); // Set loading to true when form is submitted
//                 mutate(data, {
//                   onSettled: () => {
//                     setLoading(false); // Set loading to false after mutation is settled
//                   },
//                 });
//               }}
//               initialValues={{
//                 name_ar: "",
//                 name_en: "",
//                 publication_count: "",
//                 project_count: "",
//                 // other fields
//               }}
//             >
//               {({ handleSubmit, handleChange, values, touched, errors }) => (
//                 <Form noValidate onSubmit={handleSubmit}>
//                   <Row className="mb-3">
       

//                     <Form.Group
//                       as={Col}
//                       md="4"
//                       controlId="validationFormikNameAr"
//                       className="position-relative"
//                     >
//                       <Form.Label>Name (Arabic)</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name_ar"
//                         value={values.name_ar}
//                         onChange={handleChange}
//                         isValid={touched.name_ar && !errors.name_ar}
//                         isInvalid={touched.name_ar && !!errors.name_ar}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.name_ar}
//                       </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group
//                       as={Col}
//                       md="4"
//                       controlId="validationFormikNameEn"
//                       className="position-relative"
//                     >
//                       <Form.Label>Name (English)</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name_en"
//                         value={values.name_en}
//                         onChange={handleChange}
//                         isValid={touched.name_en && !errors.name_en}
//                         isInvalid={touched.name_en && !!errors.name_en}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.name_en}
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group
//                       as={Col}
//                       md="4"
//                       controlId="validationFormikPublicationCount"
//                       className="position-relative"
//                     >
//                       <Form.Label>Publication Count</Form.Label>
//                       <Form.Control
//                         type="number"
//                         name="publication_count"
//                         value={values.publication_count}
//                         onChange={handleChange}
//                         isValid={
//                           touched.publication_count && !errors.publication_count
//                         }
//                         isInvalid={
//                           touched.publication_count &&
//                           !!errors.publication_count
//                         }
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.publication_count}
//                       </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group
//                       as={Col}
//                       md="4"
//                       controlId="validationFormikProjectCount"
//                       className="position-relative"
//                     >
//                       <Form.Label>Project Count</Form.Label>
//                       <InputGroup hasValidation>
//                         <Form.Control
//                           type="number"
//                           aria-describedby="inputGroupPrepend"
//                           name="project_count"
//                           value={values.project_count}
//                           onChange={handleChange}
//                           isValid={
//                             touched.project_count && !errors.project_count
//                           }
//                           isInvalid={
//                             touched.project_count && !!errors.project_count
//                           }
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           {errors.project_count}
//                         </Form.Control.Feedback>
//                       </InputGroup>
//                     </Form.Group>
//                   </Row>

//                   <Button
//                     type="submit"
//                     disabled={
//                       loading ||
//                       !values.name_ar ||
//                       !values.name_en ||
//                       !values.publication_count ||
//                       !values.project_count
//                     }
//                   >
//                     {loading ? (
//                       <Spinner
//                         as="span"
//                         animation="border"
//                         size="sm"
//                         role="status"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       "Save"
//                     )}
//                   </Button>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default AddEditcategories;

import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { useCreateCategory } from "../../../../Api/Categories";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name_ar: yup.string().required(),
  name_en: yup.string().required(),
  // other fields
});

const AddEditcategories = () => {
  const { mutate, data, isLoading } = useCreateCategory(); // Add isLoading from the mutation hook
  const navigate = useNavigate(); // Initialize navigate function
  const [loading, setLoading] = useState(false); // Manage loading state for button

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully Created.");

      navigate("/pages/categories/");
    }
  }, [data, navigate]);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Create categories
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Create categories</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(data) => {
                setLoading(true); // Set loading to true when form is submitted
                mutate(data, {
                  onSettled: () => {
                    setLoading(false); // Set loading to false after mutation is settled
                  },
                });
              }}
              initialValues={{
                name_ar: "",
                name_en: "",
                // other fields
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
       

                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikNameAr"
                      className="position-relative"
                    >
                      <Form.Label>Name (Arabic)</Form.Label>
                      <Form.Control
                        type="text"
                        name="name_ar"
                        value={values.name_ar}
                        onChange={handleChange}
                        isValid={touched.name_ar && !errors.name_ar}
                        isInvalid={touched.name_ar && !!errors.name_ar}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_ar}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikNameEn"
                      className="position-relative"
                    >
                      <Form.Label>Name (English)</Form.Label>
                      <Form.Control
                        type="text"
                        name="name_en"
                        value={values.name_en}
                        onChange={handleChange}
                        isValid={touched.name_en && !errors.name_en}
                        isInvalid={touched.name_en && !!errors.name_en}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_en}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                

                  <Button
                    type="submit"
                    disabled={
                      loading ||
                      !values.name_ar ||
                      !values.name_en 
                    }
                  >
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Save"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddEditcategories;

