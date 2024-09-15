import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useEditTage } from "../../../../Api/Tags";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name_en: yup.string().required("English name is required"),
  name_ar: yup.string().required("Arabic name is required"),
});

const EditTags = ({ itemData, id, setShow10 }) => {
  const { mutate, data } = useEditTage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully edited.");

      // تأخير الانتقال لمدة 2 ثانية (2000 مللي ثانية)
        setShow10(false);
      setIsSubmitting(false); // إيقاف الـ Spinner بعد إكمال العملية
    }
  }, [data]);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Edit Tags</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Tags</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(data) => {
                setIsSubmitting(true); // تفعيل الـ Spinner عند بدء التقديم
                mutate({ data, id });
              }}
              initialValues={{
                name_en: itemData?.name_en || "",
                name_ar: itemData?.name_ar || "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
              }) => {
                const isFormInvalid =
                  !values.name_en ||
                  !values.name_ar 

                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                 
                      <Form.Group as={Col} md="4" controlId="validationFormik102">
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
                      <Form.Group as={Col} md="4" controlId="validationFormik103">
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
                    </Row>
                 
                    <Button type="submit" disabled={isFormInvalid || isSubmitting}>
                      {isSubmitting ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Save"
                      )}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default EditTags;
