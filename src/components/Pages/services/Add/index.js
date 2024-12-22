import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Spinner } from 'react-bootstrap';
import { useCreateService } from '../../../../Api/Services';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  f_title: Yup.string().required('Field is required'),
  f_title_en: Yup.string().required('Field is required'),
  f_title_ar: Yup.string().required('Field is required'),
  s_title: Yup.string().required('Field is required'),
  s_title_en: Yup.string().required('Field is required'),
  s_title_ar: Yup.string().required('Field is required'),
  t_title: Yup.string().required('Field is required'),
  t_title_en: Yup.string().required('Field is required'),
  t_title_ar: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
  description_en: Yup.string().required('Field is required'),
  description_ar: Yup.string().required('Field is required'),
  is_primary: Yup.boolean().required('Field is required'),
});

const AddServices = () => {
  const { mutate, data } = useCreateService();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        f_title_en: '',
        f_title_ar: '',
        s_title: '',
        s_title_en: '',
        s_title_ar: '',
        t_title: '',
        t_title_en: '',
        t_title_ar: '',
        description: '',
        description_en: '',
        description_ar: '',
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
          {['f_title', 'f_title_en', 'f_title_ar', 's_title', 's_title_en', 's_title_ar', 't_title', 't_title_en', 't_title_ar', 'description', 'description_en', 'description_ar'].map((field) => (
            <div className="mb-3" key={field}>
              <label>{field.replace(/_/g, ' ')}</label>
              <Field name={field} className="form-control" />
              {errors[field] && touched[field] && (
                <div className="text-danger">{errors[field]}</div>
              )}
            </div>
          ))}

          <div className="mb-3 form-check">
            <Field type="checkbox" name="is_primary" className="form-check-input" />
            <label className="form-check-label">Primary Service</label>
            {errors.is_primary && touched.is_primary && (
              <div className="text-danger">{errors.is_primary}</div>
            )}
          </div>

          <Button type="submit">
            {isSubmitting ? (
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
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
