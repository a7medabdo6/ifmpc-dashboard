import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useCreateTage } from "../../../../Api/Tags";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name_en: yup.string().required("Name (English) is required"),
  name_ar: yup.string().required("Name (Arabic) is required"),
  post_count: yup.number().required("Post count is required").positive("Post count must be a positive number"),
});

const AddTags = () => {
  const [loading, setLoading] = useState(false);
  const { mutate, data } = useCreateTage();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully created.");
      setLoading(false);

        navigate("/pages/tages/");
    }
  }, [data, navigate]);

  const handleSubmit = (formData) => {
    setLoading(true);
    mutate(formData, {
      onError: () => setLoading(false),
    });
  };

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Create Tags</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Create Tags</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              initialValues={{
                name_en: "",
                name_ar: "",
                post_count: 1,
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                handleSubmit(values);
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => {
                // Check if any of the required fields are empty
                const isFormInvalid =
                  !values.name_en ||
                  !values.name_ar ||
                  !values.post_count;

                return (
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
                        md="6"
                        controlId="validationFormik104"
                        className="position-relative"
                      >
                        <Form.Label>Post Count</Form.Label>
                        <Form.Control
                          type="number"
                          name="post_count"
                          value={values.post_count}
                          onChange={handleChange}
                          isInvalid={touched.post_count && !!errors.post_count}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.post_count}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button type="submit" disabled={loading || isFormInvalid}>
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

export default AddTags;
