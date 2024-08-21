import React, { Fragment, useState, useEffect } from "react"; // Ensure useState is imported
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { useCreateTraining } from "../../../../Api/Training";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateProjectImage } from "../../../../Api/Projects";

const schema = yup.object().shape({
  title: yup.string().required(),
  title_en: yup.string().required(),
  title_ar: yup.string().required(),
  image: yup.string().required(),
  description: yup.string().required(),
  description_en: yup.string().required(),
  description_ar: yup.string().required(),
});

const AddTrainings = () => {
  const { mutate, data } = useCreateTraining();
  const navigate = useNavigate();
  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();

  const [uploadedImageUrl, setUploadedImageUrl] = useState(""); // Ensure useState is used correctly
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully created.");
      setTimeout(() => {
        navigate("/spruha/preview/pages/training/");
      }, 2000);
    }
  }, [data, navigate]);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size is too large. Max size is 5MB.");
        return;
      }
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert("Unsupported file format. Only JPEG and PNG are allowed.");
        return;
      }
      setFile(file);
    }
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      mutateImage(formData, {
        onSuccess: (data) => {
          setUploadedImageUrl(data.file_url);
        },
        onError: (error) => {
          alert("Error uploading image.");
        },
      });
    } else {
      alert("No file selected.");
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(uploadedImageUrl)
      .then(() => alert("Image URL copied to clipboard!"))
      .catch(() => alert("Failed to copy URL."));
  };

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Create Training</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Create Training</Breadcrumb.Item>
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
                title: "",
                title_en: "",
                title_ar: "",
                image: "",
                description: "",
                description_en: "",
                description_ar: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikTitle"
                      className="position-relative"
                    >
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        isValid={touched.title && !errors.title}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikTitleEn"
                      className="position-relative"
                    >
                      <Form.Label>Title (English)</Form.Label>
                      <Form.Control
                        type="text"
                        name="title_en"
                        value={values.title_en}
                        onChange={handleChange}
                        isValid={touched.title_en && !errors.title_en}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikTitleAr"
                      className="position-relative"
                    >
                      <Form.Label>Title (Arabic)</Form.Label>
                      <Form.Control
                        type="text"
                        name="title_ar"
                        value={values.title_ar}
                        onChange={handleChange}
                        isValid={touched.title_ar && !errors.title_ar}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikImage"
                      className="position-relative"
                    >
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="text"
                        name="image"
                        value={values.image}
                        onChange={handleChange}
                        isValid={touched.image && !errors.image}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationFormikDescription"
                      className="position-relative"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        isValid={touched.description && !errors.description}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikDescriptionEn"
                      className="position-relative"
                    >
                      <Form.Label>Description (English)</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description_en"
                        value={values.description_en}
                        onChange={handleChange}
                        isValid={
                          touched.description_en && !errors.description_en
                        }
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikDescriptionAr"
                      className="position-relative"
                    >
                      <Form.Label>Description (Arabic)</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description_ar"
                        value={values.description_ar}
                        onChange={handleChange}
                        isValid={
                          touched.description_ar && !errors.description_ar
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 mt-3">
                      <Form.Label column sm={2}>
                        Upload Image
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="file"
                          accept="image/jpeg,image/png"
                          onChange={handleFileChange}
                        />
                      </Col>
                      <Button variant="primary" onClick={handleUpload}>
                        Upload Image
                      </Button>
                    </Form.Group>
                    {uploadedImageUrl && (
                      <div className="mb-3">
                        <p>
                          Uploaded Image URL:{" "}
                          <a
                            href={uploadedImageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {uploadedImageUrl}
                          </a>
                        </p>
                        <Button variant="secondary" onClick={handleCopyUrl}>
                          Copy URL
                        </Button>
                      </div>
                    )}
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

export default AddTrainings;
