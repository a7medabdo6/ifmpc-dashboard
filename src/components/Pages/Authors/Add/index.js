import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useCreateAuthor } from "../../../../Api/Authors";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  image: yup.mixed().required("An image is required"),
});

const AddAuthors = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submitting
  const { mutate, data } = useCreateAuthor();
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully created.");
      setTimeout(() => {
        navigate("/pages/authors/");
      }, 2000);
    }
  }, [data, navigate]);

  const handleSubmit = (values, { setSubmitting }) => {
    setIsSubmitting(true); // Set submitting to true when starting submission
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", values.image);

    console.log("FormData values:", values); // للتحقق من القيم

    mutate(formData)
      .then(() => {
        setSubmitting(false); // Set submitting to false when submission is successful
        setIsSubmitting(false); // Set submitting to false when submission is successful
      })
      .catch(() => {
        setSubmitting(false); // Set submitting to false in case of an error
        setIsSubmitting(false); // Set submitting to false in case of an error
      });
  };

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Create Author</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Create Author</Breadcrumb.Item>
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
                name: "",
                image: null,
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
                // Check if any of the fields are empty or if there are validation errors
                const isFormValid = values.name && values.image;
                const isButtonDisabled = !isFormValid || isSubmitting;

                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikname"
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
                            console.log(file); // طباعة قيمة الصورة في الـ console
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

export default AddAuthors;
