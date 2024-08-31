import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useEditTraining } from "../../../../Api/Training";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateProjectImage } from "../../../../Api/Projects";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const schema = yup.object().shape({
  title: yup.string().required(),
  title_en: yup.string().required(),
  title_ar: yup.string().required(),
  image: yup.string().url().required(), // Validate as URL
  description: yup.string().required(),
  description_en: yup.string().required(),
  description_ar: yup.string().required(),
});

const EditTrainings = ({ id, itemData, viewDemoClose, setShow10 }) => {
  const { mutate, data } = useEditTraining();
  const navigate = useNavigate();
  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();
  useEffect(() => {
    if (data) {
      setShow10(false)
    }
  }, [data, navigate]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(itemData?.image || "");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(itemData?.image || ""); // To handle URL input

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully edited.");
      setTimeout(() => {
        navigate("/pages/training/");
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

  const uploadImage = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      mutateImage(formData, {
        onSuccess: (data) => {
          setUploadedImageUrl(data.file_url);
          setImageUrl(data.file_url); // Update image URL as well
        },
        onError: () => {
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
              onSubmit={(data) => {
                // Ensure image URL is used
                data.image = uploadedImageUrl || imageUrl;
                mutate({ data, id });
              }}
              initialValues={{
                title: itemData?.title || "",
                title_en: itemData?.title_en || "",
                title_ar: itemData?.title_ar || "",
                image: itemData?.image || "",
                description: itemData?.description || "",
                description_en: itemData?.description_en || "",
                description_ar: itemData?.description_ar || "",
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
                        isInvalid={!!errors.title && touched.title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.title}
                      </Form.Control.Feedback>
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
                        isInvalid={!!errors.title_en && touched.title_en}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.title_en}
                      </Form.Control.Feedback>
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
                        isInvalid={!!errors.title_ar && touched.title_ar}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.title_ar}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationFormikImageUrl"
                      className="position-relative"
                    >
                      <Form.Label>Image URL</Form.Label>
                      <Form.Control
                        type="text"
                        name="imageUrl"
                        value={imageUrl}
                        onChange={(e) => {
                          setImageUrl(e.target.value);
                          setFieldValue("image", e.target.value);
                        }}
                        isInvalid={!!errors.image && touched.image}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.image}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationFormikImageUpload"
                      className="position-relative"
                    >
                      <Form.Label>Upload Image</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <Button
                        type="button"
                        onClick={uploadImage}
                        className="mt-2"
                      >
                        Upload Image
                      </Button>
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
                  <Button type="submit">Save</Button>
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

export default EditTrainings;
