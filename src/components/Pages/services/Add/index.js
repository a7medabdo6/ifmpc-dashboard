import React, { Fragment, useState, useEffect,useRef } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useCreateService } from '../../../../Api/Services';
import { useNavigate } from "react-router-dom";
import {  Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const validationSchema = Yup.object().shape({
  f_title: Yup.string().required('Field is required'),
  s_title: Yup.string().required('Field is required'),
  t_title: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
  is_primary: Yup.boolean().required('Field is required'),
});

const AddServices = () => {
  const { mutate, data } = useCreateService();
    const navigate = useNavigate();
      const [isSubmitting, setIsSubmitting] = useState(false); // Loader state
     useEffect(() => {
        if (data) {
          toast.success("This item has been successfully created.");
            navigate("/pages/services/");
        }
      }, [data, navigate]);
  return (
    <Formik
      initialValues={{
        f_title: '',
        s_title: '',
        t_title: '',
        description: '',
        is_primary: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(data) => {
        setIsSubmitting(true);
     
        mutate(data);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-3">
            <label>First Title</label>
            <Field name="f_title" className="form-control" />
            {errors.f_title && touched.f_title && (
              <div className="text-danger">{errors.f_title}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Second Title</label>
            <Field name="s_title" className="form-control" />
            {errors.s_title && touched.s_title && (
              <div className="text-danger">{errors.s_title}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Third Title</label>
            <Field name="t_title" className="form-control" />
            {errors.t_title && touched.t_title && (
              <div className="text-danger">{errors.t_title}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Description</label>
            <Field name="description" className="form-control" />
            {errors.description && touched.description && (
              <div className="text-danger">{errors.description}</div>
            )}
          </div>

          <div className="mb-3 form-check">
            <Field type="checkbox" name="is_primary" className="form-check-input" />
            <label className="form-check-label">Primary Service</label>
            {errors.is_primary && touched.is_primary && (
              <div className="text-danger">{errors.is_primary}</div>
            )}
          </div>

          <Button type="submit">
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
      )}
    </Formik>
  );
};

export default AddServices;
