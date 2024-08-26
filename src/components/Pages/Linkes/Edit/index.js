import React, { Fragment, useEffect, useRef } from "react";
import { Breadcrumb, Button, Col, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditLink } from "../../../../Api/Links";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().required(),
  name_en: yup.string().required(),
  name_ar: yup.string().required(),
  logo: yup.mixed().required("Logo is required"),
  url: yup.string().url().required(),
});

const EditLinks = ({ itemData, id, setShow10 }) => {
  const { mutate, data } = useEditLink();
  const fileInputRef = useRef(null); // Create a ref for the file input

  useEffect(() => {
    if (data !== undefined) {
      toast.success("This item has been successfully edited.");
      setTimeout(() => {
        setShow10(false)
      }, 2000); // يمكنك ضبط الوقت حسب الحاجة
    }
  }, [data]);

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
                formData.append("name", data.name);
                formData.append("name_en", data.name_en);
                formData.append("name_ar", data.name_ar);
                formData.append("logo", data.logo);
                formData.append("url", data.url);

                // Print form data to console
                formData.forEach((value, key) => {
                  console.log(`${key}:`, value);
                });

                mutate(
                  (data = {
                    formData,
                    id,
                  })
                )
                  .then(() => {
                    alert("Link created successfully!");
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    console.error("Error creating link:", error);
                    setSubmitting(false);
                  });
              }}
              initialValues={{
                name: itemData?.name,
                name_en: itemData?.name_en,
                name_ar: itemData?.name_ar,
                logo: itemData?.logo,
                url: itemData?.url,
              }}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                touched,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
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
                      />
                    </Form.Group>
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
                        isValid={touched.name_en && !errors.name_en}
                      />
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
                        isValid={touched.name_ar && !errors.name_ar}
                      />
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
                      {values.logo && typeof values.logo !== 'string' ? (
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
                            <Button onClick={() => fileInputRef.current.click()}>
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
                        isValid={touched.logo && !errors.logo}
                        ref={fileInputRef} // Attach the ref to the input
                        style={{ display: "none" }} // Hide the actual file input
                      />
                      {errors.logo && touched.logo ? (
                        <div className="invalid-feedback">{errors.logo}</div>
                      ) : null}
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
                        isValid={touched.url && !errors.url}
                      />
                    </Form.Group>
                  </Row>
                  <Button type="submit">Save</Button>
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
