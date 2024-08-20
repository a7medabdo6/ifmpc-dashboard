import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Row, Col, Card, Container, Form as BootstrapForm } from "react-bootstrap";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useSliders, useEditSlider } from "../../../Api/SettingsSlider";
import { useCreateProjectImage } from "../../../Api/Projects";

// Validation Schema
const validationSchema = Yup.object({
  footer_short_desc: Yup.string().required("Required"),
  footer_short_desc_en: Yup.string().required("Required"),
  footer_short_desc_ar: Yup.string().required("Required"),
  main_header_en: Yup.string().required("Required"),
  main_header_ar: Yup.string().required("Required"),
  slider_image: Yup.string().required("Required"),
  subscribe_title_en: Yup.string().required("Required"),
  subscribe_title_ar: Yup.string().required("Required"),
  subscribe_desc_en: Yup.string().required("Required"),
  subscribe_desc_ar: Yup.string().required("Required"),
});

const Sliders = () => {
  const { mutate, isLoading, error, data: dataEdit } = useEditSlider();
  const { data } = useSliders();
  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();

  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = (values, { setErrors }) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Edit submitted successfully!");
      },
      onError: (err) => {
        if (err.type === "validation_error") {
          const formikErrors = {};
          err.errors.forEach((error) => {
            formikErrors[error.field_name] = error.message;
          });
          setErrors(formikErrors);
        } else {
          toast.error(`Error: ${err.message}`);
        }
      },
    });
  };

  useEffect(() => {
    if (dataEdit) {
      toast.success("Edit submitted successfully!", {
        autoClose: 5000,
      });
    }
  }, [dataEdit]);

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
          toast.success("Image uploaded successfully!");
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
    navigator.clipboard.writeText(uploadedImageUrl)
      .then(() => alert("Image URL copied to clipboard!"))
      .catch(() => alert("Failed to copy URL."));
  };

  return (
    <Formik
      initialValues={{
        footer_short_desc: data?.footer_short_desc || "",
        footer_short_desc_en: data?.footer_short_desc_en || "",
        footer_short_desc_ar: data?.footer_short_desc_ar || "",
        main_header_en: data?.main_header_en || "",
        main_header_ar: data?.main_header_ar || "",
        slider_image: data?.slider_image || "",
        subscribe_title_en: data?.subscribe_title_en || "",
        subscribe_title_ar: data?.subscribe_title_ar || "",
        subscribe_desc_en: data?.subscribe_desc_en || "",
        subscribe_desc_ar: data?.subscribe_desc_ar || "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Container>
            <Row>
              <Col lg={12}>
                <Card className="custom-card mg-b-20">
                  <Card.Body>
                    <h2 className="main-content-title tx-24 mg-b-5">Sliders Page</h2>

                    <BootstrapForm.Group controlId="footer_short_desc">
                      <BootstrapForm.Label>Footer Short Description</BootstrapForm.Label>
                      <Field
                        name="footer_short_desc"
                        placeholder="Footer Short Description"
                        className="form-control"
                      />
                      {errors.footer_short_desc && touched.footer_short_desc ? (
                        <div>{errors.footer_short_desc}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="footer_short_desc_en">
                      <BootstrapForm.Label>Footer Short Description EN</BootstrapForm.Label>
                      <Field
                        name="footer_short_desc_en"
                        placeholder="Footer Short Description EN"
                        className="form-control"
                      />
                      {errors.footer_short_desc_en && touched.footer_short_desc_en ? (
                        <div>{errors.footer_short_desc_en}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="footer_short_desc_ar">
                      <BootstrapForm.Label>Footer Short Description AR</BootstrapForm.Label>
                      <Field
                        name="footer_short_desc_ar"
                        placeholder="Footer Short Description AR"
                        className="form-control"
                      />
                      {errors.footer_short_desc_ar && touched.footer_short_desc_ar ? (
                        <div>{errors.footer_short_desc_ar}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="main_header_en">
                      <BootstrapForm.Label>Main Header EN</BootstrapForm.Label>
                      <Field
                        name="main_header_en"
                        placeholder="Main Header EN"
                        className="form-control"
                      />
                      {errors.main_header_en && touched.main_header_en ? (
                        <div>{errors.main_header_en}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="main_header_ar">
                      <BootstrapForm.Label>Main Header AR</BootstrapForm.Label>
                      <Field
                        name="main_header_ar"
                        placeholder="Main Header AR"
                        className="form-control"
                      />
                      {errors.main_header_ar && touched.main_header_ar ? (
                        <div>{errors.main_header_ar}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="slider_image">
                      <BootstrapForm.Label>Slider Image URL</BootstrapForm.Label>
                      <Field
                        name="slider_image"
                        placeholder="Slider Image URL"
                        className="form-control"
                      />
                      {errors.slider_image && touched.slider_image ? (
                        <div>{errors.slider_image}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="imageUpload">
                      <BootstrapForm.Label>Upload Slider Image</BootstrapForm.Label>
                      <input
                        type="file"
                        accept="image/jpeg, image/png"
                        onChange={handleFileChange}
                      />
                      <Button type="button" onClick={handleUpload}>
                        Upload Image
                      </Button>
                      {uploadedImageUrl && (
                        <div>
                          <p>Uploaded Image URL:</p>
                          <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer">{uploadedImageUrl}</a>
                          <Button onClick={handleCopyUrl}>Copy URL</Button>
                        </div>
                      )}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="subscribe_title_en">
                      <BootstrapForm.Label>Subscribe Title EN</BootstrapForm.Label>
                      <Field
                        name="subscribe_title_en"
                        placeholder="Subscribe Title EN"
                        className="form-control"
                      />
                      {errors.subscribe_title_en && touched.subscribe_title_en ? (
                        <div>{errors.subscribe_title_en}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="subscribe_title_ar">
                      <BootstrapForm.Label>Subscribe Title AR</BootstrapForm.Label>
                      <Field
                        name="subscribe_title_ar"
                        placeholder="Subscribe Title AR"
                        className="form-control"
                      />
                      {errors.subscribe_title_ar && touched.subscribe_title_ar ? (
                        <div>{errors.subscribe_title_ar}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="subscribe_desc_en">
                      <BootstrapForm.Label>Subscribe Description EN</BootstrapForm.Label>
                      <Field
                        name="subscribe_desc_en"
                        placeholder="Subscribe Description EN"
                        className="form-control"
                      />
                      {errors.subscribe_desc_en && touched.subscribe_desc_en ? (
                        <div>{errors.subscribe_desc_en}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="subscribe_desc_ar">
                      <BootstrapForm.Label>Subscribe Description AR</BootstrapForm.Label>
                      <Field
                        name="subscribe_desc_ar"
                        placeholder="Subscribe Description AR"
                        className="form-control"
                      />
                      {errors.subscribe_desc_ar && touched.subscribe_desc_ar ? (
                        <div>{errors.subscribe_desc_ar}</div>
                      ) : null}
                    </BootstrapForm.Group>

                    <Button type="submit" variant="primary" disabled={isLoading}>
                      {isLoading ? "Submitting..." : "Submit"}
                    </Button>

                    {error && <div>{error.message}</div>}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
};

export default Sliders;
