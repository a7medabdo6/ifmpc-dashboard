import React, { Fragment, useEffect } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditUser } from "../../../../Api/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  name: yup.string().required("Name is required"),
  url: yup.string().required("URL is required"), // Updated validation schema for URL as a string
});

const EditUsers = ({ username, itemData, viewDemoClose, setShow10 }) => {
  const { mutate, data, isLoading } = useEditUser(); // Add isLoading here

  useEffect(() => {
    if (data !== undefined) {
      toast.success("This item has been successfully edited.");
      setShow10(false);
    }
  }, [data, setShow10]);

  return (
    <Fragment>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                mutate({
                  data: values,
                  username,
                }).finally(() => setSubmitting(false)); // Ensure setSubmitting(false) is called in both success and error cases
              }}
              initialValues={{
                username: itemData?.username || "",
                name: itemData?.name || "",
                url: itemData?.url || "", // Set initial value for URL as an empty string
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
                isSubmitting, // Add isSubmitting here
              }) => {
                // Check if any of the fields are empty or if there are validation errors
                const isFormValid =
                  values.username && values.name && values.url;
                const isButtonDisabled = !isFormValid || isSubmitting;
                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik101"
                        className="position-relative"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isValid={touched.username && !errors.username}
                          isInvalid={!!errors.username} // Add error handling
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.username}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik102"
                        className="position-relative"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          isValid={touched.name && !errors.name}
                          isInvalid={!!errors.name} // Add error handling
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormikUrl"
                        className="position-relative"
                      >
                        <Form.Label>URL</Form.Label>
                        <Form.Control
                          type="text" // Changed input type to text
                          name="url"
                          value={values.url}
                          onChange={handleChange}
                          isValid={touched.url && !errors.url}
                          isInvalid={!!errors.url} // Add error handling
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.url}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <div className="d-flex flex-row-reverse">
                      <Button
                        className="ms-3"
                        variant="secondary"
                        onClick={() => viewDemoClose("show10")}
                        disabled={isSubmitting} // Disable the button during submission
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isButtonDisabled} // Disable the button if form is invalid or submitting
                      >
                        {isSubmitting ? (
                          <div className="d-flex align-items-center">
                            <span className="spinner-border spinner-border-sm me-2" />
                            Saving...
                          </div>
                        ) : (
                          "Save"
                        )}
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default EditUsers;
