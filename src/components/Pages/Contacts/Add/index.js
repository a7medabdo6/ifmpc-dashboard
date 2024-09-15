import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useCreateContact } from "../../../../Api/Contacts";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  description: yup.string().required("Description is required"),
});

const AddContacts = () => {
  const [loading, setLoading] = useState(false); 
  const [isFormValid, setIsFormValid] = useState(false); // Add state for form validity
  const { mutate, data, isError } = useCreateContact(); 
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully created.");
        navigate("/pages/contacts/");
    }
    if (isError) {
      toast.error("An error occurred while creating the contact.");
    }
  }, [data, isError, navigate]);

  const handleInputChange = (e, handleChange, values) => {
    handleChange(e);
    const allFieldsFilled = Object.values(values).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(allFieldsFilled);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true); 
    mutate(values, {
      onSuccess: () => {
        setLoading(false); 
        setSubmitting(false);
      },
      onError: () => {
        setLoading(false); 
        setSubmitting(false);
      },
    });
  };

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Create Contact</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Create Contact</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                first_name: "",
                last_name: "",
                email: "user@example.com",
                phone: "",
                description: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
                isSubmitting,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik101"
                      className="position-relative"
                    >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={(e) => handleInputChange(e, handleChange, values)}
                        isInvalid={touched.first_name && !!errors.first_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.first_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik102"
                      className="position-relative"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        value={values.last_name}
                        onChange={(e) => handleInputChange(e, handleChange, values)}
                        isInvalid={touched.last_name && !!errors.last_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.last_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikEmail"
                      className="position-relative"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => handleInputChange(e, handleChange, values)}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik103"
                      className="position-relative"
                    >
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={(e) => handleInputChange(e, handleChange, values)}
                        isInvalid={touched.phone && !!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationFormik104"
                      className="position-relative"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        value={values.description}
                        onChange={(e) => handleInputChange(e, handleChange, values)}
                        isInvalid={touched.description && !!errors.description}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.description}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Button
                    type="submit"
                    disabled={isSubmitting || loading || !isFormValid} // Disable button if form is invalid
                  >
                    {isSubmitting || loading ? (
                      <div className="d-flex align-items-center">
                        <span className="spinner-border spinner-border-sm me-2" />
                        Saving...
                      </div>
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
      <ToastContainer />
    </Fragment>
  );
};

export default AddContacts;
