import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useEditAuthor } from "../../../../Api/Authors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  image: yup.mixed().required("An image is required"),
});

const EditAuthors = ({ id, itemData, viewDemoClose, setShow10 }) => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submitting
  const { mutate, data } = useEditAuthor();

  useEffect(() => {
    if (data !== undefined) {
      toast.success("This item has been successfully edited.");
      setTimeout(() => {
        setShow10(false);
      }, 2000); // Adjust the delay as needed
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
                setIsSubmitting(true); // Set submitting to true when starting submission
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("image", values.image);

                mutate({ data: formData, id })
                  .then(() => {
                    setIsSubmitting(false); // Set submitting to false when submission is successful
                  })
                  .catch(() => {
                    setIsSubmitting(false); // Set submitting to false in case of an error
                  });
              }}
              initialValues={{
                name: itemData?.name || "",
                image: itemData?.image || null,
              }}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                touched,
                errors,
              }) => {
                // Check if the form is valid and if submission is in progress
                const isFormValid = values.name && values.image;
                const isButtonDisabled = !isFormValid || isSubmitting;

                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikName"
                        className="position-relative"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          isValid={touched.name && !errors.name}
                          isInvalid={touched.name && !!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikImage"
                        className="position-relative"
                      >
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                          type="file"
                          name="image"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("image", file);
                            console.log(file); // Print image details to the console
                          }}
                          isValid={touched.image && !errors.image}
                          isInvalid={touched.image && !!errors.image}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.image}
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
                            <Spinner
                              animation="border"
                              size="sm"
                              className="me-2"
                            />
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

export default EditAuthors;
