// import React, { Fragment, useEffect, useState } from "react";
// import { Breadcrumb, Button, Col, Row, Card, Spinner } from "react-bootstrap";
// import { Formik } from "formik";
// import { Form, InputGroup } from "react-bootstrap";
// import * as yup from "yup";
// import { useEditCategory } from "../../../../Api/Categories";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const schema = yup.object().shape({
//   name_en: yup.string().required("Name (English) is required"),
//   name_ar: yup.string().required("Name (Arabic) is required"),
//   publication_count: yup.string().required("Publication count is required"),
//   project_count: yup.string().required("Project count is required"),
// });

// const Editcategories = ({ id, itemData, viewDemoClose, setShow10 }) => {
//   const { mutate, data, isLoading } = useEditCategory();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (data) {
//       toast.success("This item has been successfully edited.");
//       setIsSubmitting(false);
//       setShow10(false);
//     }
//   }, [data]);

//   return (
//     <Fragment>
//       <div className="col-xl-12 col-lg-12 col-md-12">
//         <div className="card custom-card">
//           <div className="card-body">
//             <Formik
//               validationSchema={schema}
//               onSubmit={(data) => {
//                 setIsSubmitting(true);
//                 mutate({
//                   data,
//                   id,
//                 });
//               }}
//               initialValues={{
//                 name_en: itemData?.name_en || "",
//                 name_ar: itemData?.name_ar || "",
//                 publication_count: itemData?.publication_count || "",
//                 project_count: itemData?.project_count || "",
//               }}
//             >
//               {({
//                 handleSubmit,
//                 handleChange,
//                 values,
//                 touched,
//                 errors,
//                 isValid,
//               }) => (
//                 <Form noValidate onSubmit={handleSubmit}>
//                   <Row className="mb-3">
                   
//                     <Form.Group
//                       as={Col}
//                       md="4"
//                       controlId="validationFormik102"
//                       className="position-relative"
//                     >
//                       <Form.Label>Name (English)</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name_en"
//                         value={values.name_en}
//                         onChange={handleChange}
//                         isInvalid={touched.name_en && !!errors.name_en}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.name_en}
//                       </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group
//                       as={Col}
//                       md="4"
//                       controlId="validationFormik103"
//                       className="position-relative"
//                     >
//                       <Form.Label>Name (Arabic)</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name_ar"
//                         value={values.name_ar}
//                         onChange={handleChange}
//                         isInvalid={touched.name_ar && !!errors.name_ar}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.name_ar}
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group
//                       as={Col}
//                       md="4"
//                       controlId="validationFormik104"
//                       className="position-relative"
//                     >
//                       <Form.Label>Publication Count</Form.Label>
//                       <Form.Control
//                         type="number"
//                         name="publication_count"
//                         value={values.publication_count}
//                         onChange={handleChange}
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
//                       controlId="validationFormik105"
//                       className="position-relative"
//                     >
//                       <Form.Label>Project Count</Form.Label>
//                       <InputGroup hasValidation>
//                         <Form.Control
//                           type="number"
//                           name="project_count"
//                           value={values.project_count}
//                           onChange={handleChange}
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

//                   <div className="d-flex flex-row-reverse">
//                     <Button
//                       className="ms-3"
//                       variant="secondary"
//                       onClick={() => viewDemoClose("show10")}
//                       disabled={isSubmitting}
//                     >
//                       Cancel
//                     </Button>
//                     <Button type="submit" disabled={!isValid || isSubmitting}>
//                       {isSubmitting ? (
//                         <Spinner
//                           as="span"
//                           animation="border"
//                           size="sm"
//                           role="status"
//                           aria-hidden="true"
//                         />
//                       ) : (
//                         "Save"
//                       )}
//                     </Button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </Fragment>
//   );
// };

// export default Editcategories;

import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { useEditCategory } from "../../../../Api/Categories";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name_en: yup.string().required("Name (English) is required"),
  name_ar: yup.string().required("Name (Arabic) is required"),
  publication_count: yup.string().required("Publication count is required"),
});

const Editcategories = ({ id, itemData, viewDemoClose, setShow10 }) => {
  const { mutate, data, isLoading } = useEditCategory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully edited.");
      setIsSubmitting(false);
      setShow10(false);
    }
  }, [data]);

  return (
    <Fragment>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(data) => {
                setIsSubmitting(true);
                mutate({
                  data,
                  id,
                });
              }}
              initialValues={{
                name_en: itemData?.name_en || "",
                name_ar: itemData?.name_ar || "",
                publication_count: itemData?.publication_count || "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
                isValid,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                   
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik102"
                      className="position-relative"
                    >
                      <Form.Label>Name (English)</Form.Label>
                      <Form.Control
                        type="text"
                        name="name_en"
                        value={values.name_en}
                        onChange={handleChange}
                        isInvalid={touched.name_en && !!errors.name_en}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_en}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik103"
                      className="position-relative"
                    >
                      <Form.Label>Name (Arabic)</Form.Label>
                      <Form.Control
                        type="text"
                        name="name_ar"
                        value={values.name_ar}
                        onChange={handleChange}
                        isInvalid={touched.name_ar && !!errors.name_ar}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_ar}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik104"
                      className="position-relative"
                    >
                      <Form.Label>Publication Count</Form.Label>
                      <Form.Control
                        type="number"
                        name="publication_count"
                        value={values.publication_count}
                        onChange={handleChange}
                        isInvalid={
                          touched.publication_count &&
                          !!errors.publication_count
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.publication_count}
                      </Form.Control.Feedback>
                    </Form.Group>

                 
                  </Row>

                  <div className="d-flex flex-row-reverse">
                    <Button
                      className="ms-3"
                      variant="secondary"
                      onClick={() => viewDemoClose("show10")}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={!isValid || isSubmitting}>
                      {isSubmitting ? (
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
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Editcategories;

