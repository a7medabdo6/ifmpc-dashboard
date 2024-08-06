import React, { Fragment, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { useEditTage } from "../../../../Api/Tags";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const schema = yup.object().shape({
  name: yup.string().required(),
  publication_count: yup.string().required(),
  project_count: yup.string().required(),
  // city: yup.string().required(),
  // state: yup.string().required(),
  // zip: yup.string().required(),
  // file: yup.mixed().required(),
  // terms: yup.bool().required().oneOf([true], "terms must be accepted"),
});
const EditeTags = ({ id, itemData, viewDemoClose }) => {
  const { mutate,data } = useEditTage ();
  console.log(data);
  useEffect(()=>{
    if (data !== undefined) {
      toast.success("This item has been successfully editing.");

    }
  },[data])
  return (
    <Fragment>
      {/* <!-- Row --> */}
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
                publication_count: itemData?.publication_count,
                project_count: itemData?.project_count,
                // city: "",
                // state: "",
                // zip: "",
                // file: null,
                // terms: false,
              }}
            >
              {({
                handleSubmit,
                handleChange,
                // handleBlur,
                values,
                touched,
                // isValid,
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
                      {/* <Form.Control.Feedback tooltip>
                        Looks good!
                      </Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlid="validationFormik102"
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

                      {/* <Form.Control.Feedback tooltip>
                        Looks good!
                      </Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlid="validationFormikUsername2"
                    >
                      <Form.Label>project_count</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="number"
                          aria-describedby="inputGroupPrepend"
                          name="project_count"
                          value={values.project_count}
                          onChange={handleChange}
                          isValid={
                            touched.publication_count &&
                            !errors.publication_count
                          }
                        />
                        {/* <Form.Control.Feedback type="invalid" tooltip>
                          {errors.project_count}
                        </Form.Control.Feedback> */}
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  {/* <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlid="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlid="validationFormik104"
                    className="position-relative"
                  >
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isInvalid={!!errors.state}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlid="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                      isInvalid={!!errors.zip}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="position-relative mb-3">
                  <Form.Label>File</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.file}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="position-relative mb-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik106"
                    feedbackTooltip
                  />
                </Form.Group> */}
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
      {/* <!-- End Row --> */}
      <ToastContainer />

    </Fragment>
  );
};

EditeTags.propTypes = {};

EditeTags.defaultProps = {};

export default EditeTags;
