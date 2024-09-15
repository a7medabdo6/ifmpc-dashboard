import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Spinner, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditContact } from "../../../../Api/Contacts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  description: yup.string().required("Description is required"),
});

const EditContacts = ({ id, itemData, viewDemoClose, setShow10 }) => {
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { mutate, data } = useEditContact();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (data !== undefined) {
      toast.success("This item has been successfully edited.");
        setShow10(false);
    }
  }, [data, setShow10]);

  useEffect(() => {
    // التحقق من صحة الحقول المطلوبة
    const isValid =
      itemData.first_name.trim() !== "" &&
      itemData.last_name.trim() !== "" &&
      itemData.email.trim() !== "" &&
      itemData.phone.trim() !== "" &&
      itemData.description.trim() !== "";
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
                first_name: itemData?.first_name || "",
                last_name: itemData?.last_name || "",
                email: itemData?.email || "user@example.com",
                phone: itemData?.phone || "",
                description: itemData?.description || "",
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
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={(e) => {
                          handleChange(e);
                          // تحديث التحقق من صحة الحقول عند تغيير المدخلات
                          setIsFormValid(
                            e.target.value.trim() !== "" &&
                              values.last_name.trim() !== "" &&
                              values.email.trim() !== "" &&
                              values.phone.trim() !== "" &&
                              values.description.trim() !== ""
                          );
                        }}
                        isInvalid={
                          touched.first_name && !!errors.first_name
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.first_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik102"
                      className="position-relative"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        value={values.last_name}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            values.first_name.trim() !== "" &&
                              e.target.value.trim() !== "" &&
                              values.email.trim() !== "" &&
                              values.phone.trim() !== "" &&
                              values.description.trim() !== ""
                          );
                        }}
                        isInvalid={touched.last_name && !!errors.last_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.last_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikEmail"
                      className="position-relative"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            values.first_name.trim() !== "" &&
                              values.last_name.trim() !== "" &&
                              e.target.value.trim() !== "" &&
                              values.phone.trim() !== "" &&
                              values.description.trim() !== ""
                          );
                        }}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik103"
                      className="position-relative"
                    >
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            values.first_name.trim() !== "" &&
                              values.last_name.trim() !== "" &&
                              values.email.trim() !== "" &&
                              e.target.value.trim() !== "" &&
                              values.description.trim() !== ""
                          );
                        }}
                        isInvalid={touched.phone && !!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationFormik104"
                      className="position-relative"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        value={values.description}
                        onChange={(e) => {
                          handleChange(e);
                          setIsFormValid(
                            values.first_name.trim() !== "" &&
                              values.last_name.trim() !== "" &&
                              values.email.trim() !== "" &&
                              values.phone.trim() !== "" &&
                              e.target.value.trim() !== ""
                          );
                        }}
                        isInvalid={touched.description && !!errors.description}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.description}
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
                      disabled={loading || !isFormValid} // تعطيل الزر إذا كان النموذج غير صالح
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

export default EditContacts;
