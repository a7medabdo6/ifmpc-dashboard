import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useCreateQuestion } from "../../../../Api/Questions";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  desc: yup.string().required("Description is required"),
});

const AddQuestions = () => {
  const [loading, setLoading] = useState(false); 
  const [isFormValid, setIsFormValid] = useState(false); 
  const { mutate, data, isError } = useCreateQuestion(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully created.");
      navigate("/pages/Questions/");
    }
    if (isError) {
      toast.error("An error occurred while creating the Question.");
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
          <h2 className="main-content-title tx-24 mg-b-5">Create Question</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Create Question</Breadcrumb.Item>
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
                desc: "",
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
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={(e) => handleInputChange(e, handleChange, values)}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationFormik102"
                      className="position-relative"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="desc"
                        value={values.desc}
                        onChange={(e) => handleInputChange(e, handleChange, values)}
                        isInvalid={touched.desc && !!errors.desc}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.desc}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Button
                    type="submit"
                    disabled={isSubmitting || loading || !isFormValid} 
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

export default AddQuestions;
