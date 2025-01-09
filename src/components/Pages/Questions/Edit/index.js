import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Spinner, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditQuestion } from "../../../../Api/Questions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Update the schema to reflect new field names
const schema = yup.object().shape({
  name_en: yup.string().required("Name (English) is required"),
  name_ar: yup.string().required("Name (Arabic) is required"),
  desc_en: yup.string().required("Description (English) is required"),
  desc_ar: yup.string().required("Description (Arabic) is required"),
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
      itemData.name_en?.trim() !== "" &&
      itemData.name_ar?.trim() !== "" &&
      itemData.desc_en?.trim() !== "" &&
      itemData.desc_ar?.trim() !== "";
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
                name_en: itemData?.name_en || "",
                name_ar: itemData?.name_ar || "",
                desc_en: itemData?.desc_en || "",
                desc_ar: itemData?.desc_ar || "",
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
                      controlId="validationFormikNameEn"
                      className="position-relative"
                    >
                      <Form.Label>Name (English)</Form.Label>
                      <Form.Control
                        type="text"
                        name="name_en"
                        value={values.name_en}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            e.target.value?.trim() !== "" &&
                            values.name_ar?.trim() !== "" &&
                            values.desc_en?.trim() !== "" &&
                            values.desc_ar?.trim() !== ""
                          );
                        }}
                        isInvalid={touched.name_en && !!errors.name_en}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_en}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikNameAr"
                      className="position-relative"
                    >
                      <Form.Label>Name (Arabic)</Form.Label>
                      <Form.Control
                        type="text"
                        name="name_ar"
                        value={values.name_ar}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            values.name_en?.trim() !== "" &&
                            e.target.value?.trim() !== "" &&
                            values.desc_en?.trim() !== "" &&
                            values.desc_ar?.trim() !== ""
                          );
                        }}
                        isInvalid={touched.name_ar && !!errors.name_ar}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_ar}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikDescEn"
                      className="position-relative"
                    >
                      <Form.Label>Description (English)</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="desc_en"
                        value={values.desc_en}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            values.name_en?.trim() !== "" &&
                            values.name_ar?.trim() !== "" &&
                            e.target.value?.trim() !== "" &&
                            values.desc_ar?.trim() !== ""
                          );
                        }}
                        isInvalid={touched.desc_en && !!errors.desc_en}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.desc_en}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikDescAr"
                      className="position-relative"
                    >
                      <Form.Label>Description (Arabic)</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="desc_ar"
                        value={values.desc_ar}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            values.name_en?.trim() !== "" &&
                            values.name_ar?.trim() !== "" &&
                            values.desc_en?.trim() !== "" &&
                            e.target.value?.trim() !== ""
                          );
                        }}
                        isInvalid={touched.desc_ar && !!errors.desc_ar}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.desc_ar}
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
