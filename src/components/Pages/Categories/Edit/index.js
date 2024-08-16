import React, { Fragment, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { useEditCategory } from "../../../../Api/Categories";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required(),
  name_en: yup.string().required(),
  name_ar: yup.string().required(),
  publication_count: yup.string().required(),
  project_count: yup.string().required(),
});

const Editcategories = ({ id, itemData, viewDemoClose, setShow10 }) => {
  const { mutate, data } = useEditCategory();
  const navigate = useNavigate(); // Initialize navigate function
  
  useEffect(() => {
    if (data !== undefined) {
      toast.success("This item has been successfully edited.");
      // تأخير الانتقال لمدة 2 ثانية (2000 مللي ثانية)
      setTimeout(() => {
        setShow10(false)  
          }, 2000); // يمكنك ضبط الوقت حسب الحاجة
    }
  }, [data]);

  return (
    <Fragment>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(data) =>
                mutate(
                  (data = {
                    data,
                    id,
                  })
                )
              }
              initialValues={{
                name: itemData?.name,
                name_en: itemData?.name_en || "",
                name_ar: itemData?.name_ar || "",
                publication_count: itemData?.publication_count,
                project_count: itemData?.project_count,
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
                      controlid="validationFormik101"
                      className="position-relative"
                    >
                      <Form.Label> Name</Form.Label>
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
                      controlid="validationFormik102"
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
                      controlid="validationFormik103"
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
                      controlid="validationFormik104"
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
                      />
                    </Form.Group>
                    
                    <Form.Group
                      as={Col}
                      md="4"
                      controlid="validationFormik105"
                      className="position-relative"
                    >
                      <Form.Label>Project Count</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="number"
                          name="project_count"
                          value={values.project_count}
                          onChange={handleChange}
                          isValid={
                            touched.project_count && !errors.project_count
                          }
                        />
                      </InputGroup>
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
                    <Button type="submit">Save</Button>
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

export default Editcategories;
