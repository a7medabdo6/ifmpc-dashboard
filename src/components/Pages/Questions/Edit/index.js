import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Spinner, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditQuestion } from "../../../../Api/Questions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Update the schema to reflect new field names
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  desc: yup.string().required("Description is required"),
});

const EditQuestions = ({ id, itemData, viewDemoClose, setShow10 }) => {
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { mutate, data } = useEditQuestion();

  useEffect(() => {
    if (data !== undefined) {
      toast.success("This item has been successfully edited.");
      setShow10(false);
    }
  }, [data, setShow10]);

  useEffect(() => {
    // Check if required fields are valid
    const isValid =
      itemData.name.trim() !== "" &&
      itemData.desc.trim() !== "";
    setIsFormValid(isValid);
  }, [itemData]);

  const handleSubmit = (values) => {
    setLoading(true);
    mutate(
      {
        data: values,
        id,
      },
      {
        onSuccess: () => {
          setLoading(false);
        },
        onError: () => {
          setLoading(false);
        },
      }
    );
  };

  return (
    <Fragment>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                name: itemData?.name || "",
                desc: itemData?.desc || "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
              }) => (
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
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            e.target.value.trim() !== "" &&
                            values.desc.trim() !== ""
                          );
                        }}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationFormikDesc"
                      className="position-relative"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="desc"
                        value={values.desc}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            values.name.trim() !== "" &&
                            e.target.value.trim() !== ""
                          );
                        }}
                        isInvalid={touched.desc && !!errors.desc}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.desc}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <div className="d-flex flex-row-reverse">
                    <Button
                      className="ms-3"
                      variant="secondary"
                      onClick={() => viewDemoClose("show10")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading || !isFormValid}
                    >
                      {loading ? (
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
              )}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default EditQuestions;
