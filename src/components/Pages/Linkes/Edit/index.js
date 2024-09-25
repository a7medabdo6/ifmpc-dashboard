import React, { Fragment, useEffect, useRef, useState } from "react";
import { Breadcrumb, Button, Col, Row, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditLink } from "../../../../Api/Links";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name_en: yup.string().required("Name (English) is required"),
  name_ar: yup.string().required("Name (Arabic) is required"),
  logo: yup.mixed().required("Logo is required"),
  url: yup.string().url("Invalid URL format").required("URL is required"),
});

const EditLinks = ({ itemData, id, setShow10 }) => {
  const { mutate, data, isLoading } = useEditLink();
  const fileInputRef = useRef(null);
  const [copied, setCopied] = useState(false);
  console.log(itemData);

  useEffect(() => {
    if (data !== undefined) {
      toast.success("This item has been successfully edited.");
      setShow10(false);
    }
  }, [data, setShow10]);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Edit Link</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Link</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(data, { setSubmitting }) => {
                const formData = new FormData();
                formData.append("name_en", data.name_en);
                formData.append("name_ar", data.name_ar);
                if (typeof data.logo != "string") {
                  formData.append(
                    "logo",
                    data.logo ? data.logo : itemData.logo
                  );
                }
                formData.append("url", data.url);

                mutate({ formData, id })
                  .then(() => {
                    toast.success("Link updated successfully!");
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    toast.error("Error updating link.");
                    console.error("Error updating link:", error);
                    setSubmitting(false);
                  });
              }}
              initialValues={{
                name_en: itemData?.name_en || "",
                name_ar: itemData?.name_ar || "",
                logo: itemData?.logo || "",
                url: itemData?.url || "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                touched,
                errors,
                isValid,
                isSubmitting,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
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
                        isInvalid={touched.name_en && !!errors.name_en}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_en}
                      </Form.Control.Feedback>
                    </Form.Group>
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
                      controlId="validationFormikLogo"
                      className="position-relative"
                    >
                      <Form.Label>Logo</Form.Label>
                      {values.logo && typeof values.logo !== "string" ? (
                        <div
                          className="logo-preview"
                          onClick={() => fileInputRef.current.click()}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={URL.createObjectURL(values.logo)}
                            alt="Logo Preview"
                            style={{ maxWidth: "100%", maxHeight: "150px" }}
                          />
                        </div>
                      ) : (
                        <div>
                          {values.logo && (
                            <div
                              className="logo-preview"
                              onClick={() => fileInputRef.current.click()}
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={values.logo}
                                alt="Logo Preview"
                                style={{ maxWidth: "100%", maxHeight: "150px" }}
                              />
                            </div>
                          )}
                          {!values.logo && (
                            <Button
                              onClick={() => fileInputRef.current.click()}
                            >
                              Choose Logo
                            </Button>
                          )}
                        </div>
                      )}
                      <Form.Control
                        type="file"
                        name="logo"
                        onChange={(event) => {
                          setFieldValue("logo", event.currentTarget.files[0]);
                        }}
                        isInvalid={touched.logo && !!errors.logo}
                        ref={fileInputRef}
                        style={{ display: "none" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.logo}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationFormikUrl"
                      className="position-relative"
                    >
                      <Form.Label>URL</Form.Label>
                      <Form.Control
                        type="text"
                        name="url"
                        value={values.url}
                        onChange={handleChange}
                        isInvalid={touched.url && !!errors.url}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.url}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Button type="submit" disabled={isSubmitting || !isValid}>
                    {isSubmitting ? (
                      <>
                        <Spinner animation="border" size="sm" /> Saving...
                      </>
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

export default EditLinks;
