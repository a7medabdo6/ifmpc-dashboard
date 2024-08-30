import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useCreateTraining } from "../../../../Api/Training";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateProjectImage } from "../../../../Api/Projects";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles for ReactQuill

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

  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
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
                title: "title",
                title_en: "title",
                title_ar: "title",
                image: "imag",
                description: "des", // Initial values for the Quill editors
                description_en: "des",
                description_ar: "des",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                setFieldValue,
                touched,
                errors,
              }) => (
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
                      md="12"
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
                      md="12"
                      controlId="validationFormikDescription"
                      className="position-relative"
                    >
                      <Form.Label>Description</Form.Label>
                      <ReactQuill
                        value={values.description}
                        onChange={(value) => setFieldValue("description", value)}
                        modules={{
                          toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ size: [] }],
                            ["bold", "italic", "underline", "strike", "blockquote"],
                            [
                              { list: "ordered" },
                              { list: "bullet" },
                              { indent: "-1" },
                              { indent: "+1" },
                            ],
                            ["link", "image"],
                            ["clean"],
                          ],
                        }}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikDescriptionEn"
                      className="position-relative"
                    >
                      <Form.Label>Description (English)</Form.Label>
                      <ReactQuill
                        value={values.description_en}
                        onChange={(value) =>
                          setFieldValue("description_en", value)
                        }
                        modules={{
                          toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ size: [] }],
                            ["bold", "italic", "underline", "strike", "blockquote"],
                            [
                              { list: "ordered" },
                              { list: "bullet" },
                              { indent: "-1" },
                              { indent: "+1" },
                            ],
                            ["link", "image"],
                            ["clean"],
                          ],
                        }}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikDescriptionAr"
                      className="position-relative"
                    >
                      <Form.Label>Description (Arabic)</Form.Label>
                      <ReactQuill
                        value={values.description_ar}
                        onChange={(value) =>
                          setFieldValue("description_ar", value)
                        }
                        modules={{
                          toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ size: [] }],
                            ["bold", "italic", "underline", "strike", "blockquote"],
                            [
                              { list: "ordered" },
                              { list: "bullet" },
                              { indent: "-1" },
                              { indent: "+1" },
                            ],
                            ["link", "image"],
                            ["clean"],
                          ],
                        }}
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
                      <Button variant="primary" onClick={handleUpload} className="mt-3">
                        Upload
                      </Button>
                    </Form.Group>
                    {uploadedImageUrl && (
                      <div>
                        <p>Uploaded Image URL: {uploadedImageUrl}</p>
                        <Button onClick={handleCopyUrl}>Copy Image URL</Button>
                      </div>
                    )}
                  </Row>
                  <Button type="submit">Create Training</Button>
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

export default AddTrainings;
