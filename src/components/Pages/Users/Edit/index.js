import React, { Fragment, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useEditUser } from "../../../../Api/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  username: yup.string().required(),
  name: yup.string().required(),
  url: yup.string().required(), // Updated validation schema for URL as a string
});

const EditeUsers = ({ username, itemData, viewDemoClose }) => {
  const { mutate, data } = useEditUser();

  useEffect(() => {
    if (data !== undefined) {
      toast.success("This item has been successfully edited.");
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
                    username,
                  })
                )
              }
              initialValues={{
                username: itemData?.username,
                name: itemData?.name,
                url: itemData?.url, // Set initial value for URL as an empty string
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
                      controlId="validationFormik101"
                      className="position-relative"
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isValid={touched.username && !errors.username}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik102"
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
                      controlId="validationFormikUrl"
                      className="position-relative"
                    >
                      <Form.Label>URL</Form.Label>
                      <Form.Control
                        type="text" // Changed input type to text
                        name="url"
                        value={values.url}
                        onChange={handleChange}
                        isValid={touched.url && !errors.url}
                      />
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

export default EditeUsers;
