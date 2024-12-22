import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditServiceItems } from "../../../../Api/ServicesItems";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useOneServiceItems } from "../../../../Api/ServicesItems";
import { useParams } from "react-router-dom";
import { useServices } from "../../../../Api/Services";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useCreateProjectImage } from "../../../../Api/Projects";

const schema = yup.object().shape({
  icon: yup.string().required("Icon is required"),
  title: yup.string().required("Title is required"),
  title_en: yup.string().required("Title (English) is required"),
  title_ar: yup.string().required("Title (Arabic) is required"),
  description: yup.string().required("Description is required"),
  description_en: yup.string().required("Description (English) is required"),
  description_ar: yup.string().required("Description (Arabic) is required"),
  service: yup.number().required("Service ID is required").typeError("Service ID must be a number"),
});

const EditServicesItems = ({ itemData, viewDemoClose, setShow10 }) => {
  const { id } = useParams();
  
    const [file, setFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageUrl, setImageUrl] = useState(""); // To handle URL input
  const { data: DataService, error, isLoading } = useServices();
 const [copied, setCopied] = useState(false);
  const { data: dataone, isLoading: isLoadingOne } = useOneServiceItems(id);
  const [services, setServices] = useState([]); // State for storing services list
  useEffect(() => {
    const fetchServices = async () => {
      setServices(DataService?.results);
    };
    fetchServices();
  }, [DataService]);
  const { mutate, data } = useEditServiceItems();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully edited.");
      navigate("/pages/ServicesItems/");
    }
  }, [data, navigate]);
  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
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
        },
        onError: (error) => {
          alert("Error uploading image.");
        },
      });
    } else {
      alert("No file selected.");
    }
  };
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
                icon: dataone?.icon || "",
                title: dataone?.title || "",
                title_en: dataone?.title_en || "",
                title_ar: dataone?.title_ar || "",
                description: dataone?.description || "",
                description_en: dataone?.description_en || "",
                description_ar: dataone?.description_ar || "",
                service: dataone?.service || "",
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
                    <Form.Group as={Col} md="4" controlId="validationFormikIcon" className="position-relative">
                      <Form.Label>Icon</Form.Label>
                      <Form.Control
                        type="text"
                        name="icon"
                        value={values.icon}
                        onChange={handleChange}
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
                    <Form.Group as={Col} md="4" controlId="validationFormikTitle" className="position-relative">
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
                    <Form.Group as={Col} md="4" controlId="validationFormikTitleEn" className="position-relative">
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

                    <Form.Group as={Col} md="4" controlId="validationFormikTitleAr" className="position-relative">
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

                  {/* General Description */}
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationFormikDescription" className="position-relative">
                      <Form.Label>Description</Form.Label>
                      <ReactQuill
                        value={values.description}
                        onChange={(value) => setFieldValue("description", value)}
                        modules={{ toolbar: [["bold", "italic", "underline", "strike"], ["link"]] }}
                      />
                      {touched.description && errors.description && (
                        <div className="invalid-feedback d-block">
                          {errors.description}
                        </div>
                      )}
                    </Form.Group>
                  </Row>

                  {/* Description (English) */}
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationFormikDescriptionEn" className="position-relative">
                      <Form.Label>Description (English)</Form.Label>
                      <ReactQuill
                        value={values.description_en}
                        onChange={(value) => setFieldValue("description_en", value)}
                        modules={{ toolbar: [["bold", "italic", "underline", "strike"], ["link"]] }}
                      />
                      {touched.description_en && errors.description_en && (
                        <div className="invalid-feedback d-block">
                          {errors.description_en}
                        </div>
                      )}
                    </Form.Group>
                  </Row>

                  {/* Description (Arabic) */}
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationFormikDescriptionAr" className="position-relative">
                      <Form.Label>Description (Arabic)</Form.Label>
                      <ReactQuill
                        value={values.description_ar}
                        onChange={(value) => setFieldValue("description_ar", value)}
                        modules={{ toolbar: [["bold", "italic", "underline", "strike"], ["link"]] }}
                      />
                      {touched.description_ar && errors.description_ar && (
                        <div className="invalid-feedback d-block">
                          {errors.description_ar}
                        </div>
                      )}
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

export default EditServicesItems;
