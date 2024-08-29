import React, { Fragment, useEffect } from "react";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useCreateAuthor } from "../../../../Api/Authors";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const schema = yup.object().shape({
  name: yup.string().required(),
  image: yup.mixed().required("An image is required"),
});

const AddAuthors = () => {
  const { mutate, data } = useCreateAuthor();
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully Created.");

      // تأخير الانتقال لمدة 2 ثانية (2000 مللي ثانية)
      setTimeout(() => {
        navigate("/pages/authors/");
      }, 2000); // يمكنك ضبط الوقت حسب الحاجة
    }
  }, [data, navigate]);
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Create Author</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Create Author</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(values) => {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("image", values.image);

                console.log("FormData values:", values); // للتحقق من القيم

                mutate(formData); // إرسال البيانات باستخدام FormData
              }}
              initialValues={{
                name: "",
                image: null,
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
                      md="6"
                      controlId="validationFormikname"
                      className="position-relative"
                    >
                      <Form.Label>name</Form.Label>
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
                      md="6"
                      controlId="validationFormikImage"
                      className="position-relative"
                    >
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("image", file);
                          console.log(file); // طباعة قيمة الصورة في الـ console
                        }}
                        isValid={touched.image && !errors.image}
                        isInvalid={touched.image && !!errors.image}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.image}
                      </Form.Control.Feedback>
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

export default AddAuthors;
