import React, { Fragment, useState, useEffect, useRef } from "react";
import { Breadcrumb, Button, Col, Row, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditService } from "../../../../Api/Services";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateProjectImage } from "../../../../Api/Projects";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactQuillCommon from '../../../Utilities/ReactQuillCommon/ReactQuillCommon';
import { useOneService } from '../../../../Api/Services';
import { useParams } from "react-router-dom";

const schema = yup.object().shape({
  f_title: yup.string().required(),
  s_title: yup.string().required(),
  t_title: yup.string().required(),
  description: yup.string().required(),
  is_primary: yup.boolean().required(),
});

const EditServices = ({ itemData, viewDemoClose, setShow10 }) => {
  const { id } = useParams();

  const { data: dataone, isLoading: isLoadingOne } = useOneService(id);
  console.log(dataone);

  const { mutate, data } = useEditService();
  const navigate = useNavigate();



  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully edited.");
      navigate("/pages/services/");
    }
  }, [data, navigate]);

  

  

 

  

 
  if (!dataone) {
    return <div>loading...</div>;
  }

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Edit Training</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Training</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(data, { setSubmitting }) => {
                mutate({ data, id });
                setSubmitting(false);
              }}
              initialValues={{
                f_title: dataone?.f_title || "",
                s_title: dataone?.s_title || "",
                t_title: dataone?.t_title || "",
                description: dataone?.description || "",
                is_primary: dataone?.is_primary ,
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                setFieldValue,
                touched,
                errors,
                isSubmitting,
                isValid,
                dirty,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationFormikTitleEn" className="position-relative">
                      <Form.Label>First Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="f_title"
                        value={values.f_title}
                        onChange={handleChange}
                        isInvalid={!!errors.f_title && touched.f_title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.f_title}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationFormikTitleAr" className="position-relative">
                      <Form.Label>Second Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="s_title"
                        value={values.s_title}
                        onChange={handleChange}
                        isInvalid={!!errors.s_title && touched.s_title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.s_title}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationFormikTitleAr" className="position-relative">
                      <Form.Label>Third Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="t_title"
                        value={values.t_title}
                        onChange={handleChange}
                        isInvalid={!!errors.t_title && touched.t_title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.t_title}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                 
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationFormikDescription" className="position-relative">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        isInvalid={!!errors.description && touched.description}
                      />
                      {touched.description && errors.description && (
                        <div className="invalid-feedback d-block">
                          {errors.description}
                        </div>
                      )}
                    </Form.Group>
                  </Row>
                 

                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationFormikIsPrimary" className="position-relative">
                      <Form.Label>Is Primary</Form.Label>
                      <Form.Check
                        type="checkbox"
                        name="is_primary"
                        checked={values.is_primary}
                        onChange={handleChange}
                        isInvalid={!!errors.is_primary && touched.is_primary}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.is_primary}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Button type="submit" disabled={isSubmitting || !isValid || !dirty}>
                    {isSubmitting ? <Spinner animation="border" size="sm" /> : "Save Changes"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditServices;
