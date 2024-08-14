import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useCreateLink } from "../../../../Api/Links";

const schema = yup.object().shape({
  name: yup.string().required(),
  name_en: yup.string().required(),
  name_ar: yup.string().required(),
  logo: yup.mixed().required("Logo is required"),
  url: yup.string().url().required(),
});

const AddLinks = () => {
  const { mutate } = useCreateLink();
  
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Create Link
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Create Link</Breadcrumb.Item>
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

                mutate(formData)
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
                name: "",
                name_en: "",
                name_ar: "",
                logo: null,
                url: "https://www.google.com",
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
                      <Form.Control
                        type="file"
                        name="logo"
                        onChange={(event) => {
                          setFieldValue("logo", event.currentTarget.files[0]);
                        }}
                        isValid={touched.logo && !errors.logo}
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
    </Fragment>
  );
};

export default AddLinks;
