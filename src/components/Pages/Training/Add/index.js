import React, { Fragment, useState, useEffect,useRef } from "react";
import { Breadcrumb, Button, Col, Row, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useCreateTraining } from "../../../../Api/Training";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreateProjectImage } from "../../../../Api/Projects";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const schema = yup.object().shape({
  title_en: yup.string().required("Title (English) is required"),
  title_ar: yup.string().required("Title (Arabic) is required"),
  image: yup.string().url("Invalid URL").required("Image URL is required"),
  description_en: yup.string().required("Description (English) is required"),
  description_ar: yup.string().required("Description (Arabic) is required"),
});

const AddTrainings = () => {
  const { mutate, data } = useCreateTraining();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // To handle URL input
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader state

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully created.");
        navigate("/pages/training/");
    }
  }, [data, navigate]);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
   
    
      setFile(file);
    }
  };

  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();

  const uploadImage = () => {
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
  const [values,setvalues] = useState()

  const [copied, setCopied] = useState(false);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
      ],
      [{ align: ["right", "center", "justify"] }],

      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"], // Add video option here
      ["clean"],
    ],
  };
  
   const quillRef = useRef(null);
   useEffect(() => {
    const quill = quillRef.current.getEditor();
    const editor = quill.root;

    // تعيين اتجاه النص بناءً على اللغة
    if (values?.description_ar) {
      
      editor.setAttribute('dir', 'rtl');
    } else {
      editor.setAttribute('dir', 'ltr');
    }
  }, [values?.description_ar]);
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
              onSubmit={(data) => {
                setIsSubmitting(true);
                // Ensure image URL is used
                if (uploadedImageUrl || imageUrl) {
                  data.image = uploadedImageUrl || imageUrl;
                }
                mutate(data);
              }}
              initialValues={{
                title_en: "",
                title_ar: "",
                image: "",
                description_en: "",
                description_ar: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                setFieldValue,
                touched,
                errors,
              }) => {
                setvalues(values)

                // Check if all required fields are filled
                const isFormValid =
                  values.title_en &&
                  values.title_ar &&
                  (uploadedImageUrl || imageUrl) &&
                  values.description_en &&
                  values.description_ar;

                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                     
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
                        controlId="validationFormikImage"
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
                            <CopyToClipboard
            text={uploadedImageUrl}
            onCopy={() => setCopied(true)}
          >
            <Button variant="secondary">
              {copied ? 'Copied!' : 'Copy URL'}
            </Button>
          </CopyToClipboard>
                          </div>
                        )}
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
                                                    modules={modules}

                        />
                        {touched.description_en && errors.description_en && (
                          <div className="invalid-feedback d-block">
                            {errors.description_en}
                          </div>
                        )}
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
                          className="react-quill"
                          modules={modules}
                          ref={quillRef}
                        />
                        {touched.description_ar && errors.description_ar && (
                          <div className="invalid-feedback d-block">
                            {errors.description_ar}
                          </div>
                        )}
                      </Form.Group>
                    </Row>
                    <Button
                      type="submit"
                      className="btn btn-primary mt-3"
                      disabled={!isFormValid || isSubmitting}
                    >
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

export default AddTrainings;
