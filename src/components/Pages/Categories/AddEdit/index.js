import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { useCreateCategory } from "../../../../Api/Categories";

const schema = yup.object().shape({
  name: yup.string().required(),
  name_ar: yup.string().required(),
  name_en: yup.string().required(),
  publication_count: yup.string().required(),
  project_count: yup.string().required(),
  // other fields
});

const AddEditcategories = () => {
  const { mutate } = useCreateCategory();

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Create / Edit categories
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Create / Edit categories</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(data) => mutate(data)}
              initialValues={{
                name: "",
                name_ar: "",
                name_en: "",
                publication_count: "",
                project_count: "",
                // other fields
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
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
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
                        isValid={touched.name_ar && !errors.name_ar}
                        isInvalid={touched.name_ar && !!errors.name_ar}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_ar}
                      </Form.Control.Feedback>
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
                        isInvalid={touched.name_en && !!errors.name_en}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_en}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikPublicationCount"
                      className="position-relative"
                    >
                      <Form.Label>Publication Count</Form.Label>
                      <Form.Control
                        type="number"
                        name="publication_count"
                        value={values.publication_count}
                        onChange={handleChange}
                        isValid={
                          touched.publication_count && !errors.publication_count
                        }
                        isInvalid={touched.publication_count && !!errors.publication_count}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.publication_count}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikProjectCount"
                      className="position-relative"
                    >
                      <Form.Label>Project Count</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="number"
                          aria-describedby="inputGroupPrepend"
                          name="project_count"
                          value={values.project_count}
                          onChange={handleChange}
                          isValid={
                            touched.project_count && !errors.project_count
                          }
                          isInvalid={touched.project_count && !!errors.project_count}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.project_count}
                        </Form.Control.Feedback>
                      </InputGroup>
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

export default AddEditcategories;
