import React, { Fragment, useState, useEffect, useRef } from "react";
import { Breadcrumb, Button, Col, Row, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useCreateServiceItems } from "../../../../Api/ServicesItems";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useCreateProjectImage } from "../../../../Api/Projects";
import { useServices } from "../../../../Api/Services";

const schema = yup.object().shape({
  icon: yup.string().required('Icon is required'),
  title: yup.string().required('Title is required'),

  title_en: yup.string().required('Title (English) is required'),
  title_ar: yup.string().required('Title (Arabic) is required'),
  description_en: yup.string().required('Description (English) is required'),
  description_ar: yup.string().required('Description (Arabic) is required'),
  service: yup.number().required('Service ID is required').typeError('Service ID must be a number'), // Ensure service_id is a number
});

const AddServicesItems = () => {
  const { mutate, data } = useCreateServiceItems();
  const navigate = useNavigate();
  const [valueAlignDes, setvalueAlignDes] = useState("center");
  const { data: DataService, error, isLoading } = useServices();

  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // To handle URL input
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader state
  const [services, setServices] = useState([]); // State for storing services list
  useEffect(() => {
    const fetchServices = async () => {
      setServices(DataService?.results);
    };
    fetchServices();
  }, [DataService]);
  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully created.");
      navigate("/pages/ServicesItems/");
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

  const [values, setValues] = useState();
  const [copied, setCopied] = useState(false);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const quillRef = useRef(null);

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
                  data.icon = uploadedImageUrl || imageUrl;
                }
                mutate(data);
              }}
              initialValues={{
                title: "",

                title_en: "",
                
                title_ar: "",
                icon: "",
                description: "",

                description_en: "",
                description_ar: "",
                service: "", // Keep service_id as a number type
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
                setValues(values);

                const isFormValid =
                values.title &&

                  values.title_en &&
                  
                  values.title_ar &&
                  (uploadedImageUrl || imageUrl) &&
                  values.description &&

                  values.description_en &&
                  values.description_ar &&
                  values.service && // Ensure service_id is selected
                  !isSubmitting;

                return (
                  <Form noValidate onSubmit={handleSubmit}>
                     <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormikTitleEn"
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

                    
                    </Row>
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
                        <Form.Label>Icon URL</Form.Label>
                        <Form.Control
                          type="text"
                          name="imageUrl"
                          value={imageUrl}
                          onChange={(e) => {
                            setImageUrl(e.target.value);
                            setFieldValue("icon", e.target.value);
                          }}
                          isInvalid={!!errors.icon && touched.icon}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.icon}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormikImageUpload"
                        className="position-relative"
                      >
                        <Form.Label>Upload icon</Form.Label>
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
                          Upload icon
                        </Button>
                        {uploadedImageUrl && (
                          <div className="mb-3">
                            <p>
                              Uploaded icon URL:{" "}
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
                        md="12"
                        controlId="validationFormikDescription"
                        className="position-relative"
                      >
                        <Form.Label>Description</Form.Label>
                        <ReactQuill
                          value={values.description}
                          onChange={(value) => setFieldValue("description", value)}
                          modules={modules}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.description}
                        </Form.Control.Feedback>
                      </Form.Group>

                     
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormikDescription"
                        className="position-relative"
                      >
                        <Form.Label>Description (English)</Form.Label>
                        <ReactQuill
                          value={values.description_en}
                          onChange={(value) => setFieldValue("description_en", value)}
                          modules={modules}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.description_en}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormikDescriptionAr"
                        className="position-relative"
                      >
                        <Form.Label>Description (Arabic)</Form.Label>
                        <ReactQuill
                          value={values.description_ar}
                          onChange={(value) => setFieldValue("description_ar", value)}
                          modules={modules}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.description_ar}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormikServiceId"
                        className="position-relative"
                      >
                        <Form.Label>Select Service</Form.Label>
                        <Form.Control
                          as="select"
                          name="service"
                          value={values.service}
                          onChange={handleChange}
                          isInvalid={!!errors.service && touched.service}
                        >
                          <option value="">Select a Service</option>
                          {services?.map(service => (
                            <option key={service.id} value={service.id}>
                              {service?.f_title}
                            </option>
                          ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.service}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Button
                      type="submit"
                      className="btn btn-primary mt-3"
                      disabled={!isFormValid}
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

export default AddServicesItems;
