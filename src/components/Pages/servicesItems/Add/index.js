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

const schema = yup.object().shape({
  icon: yup.mixed().required('Icon is required'),
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  service_id: yup.number().required('Service ID is required').typeError('Service ID must be a number'), // Make service_id a number
});

const AddServicesItems = () => {
  const { mutate, data } = useCreateServiceItems();
  const navigate = useNavigate();
  const [valueAlignDes, setvalueAlignDes] = useState("center");

  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // To handle URL input
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader state
  const [services, setServices] = useState([]); // State for storing services list

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully created.");
      navigate("/pages/ServicesItems/");
    }
  }, [data, navigate]);

  useEffect(() => {
    // You can replace this with your API call to fetch services.
    const fetchServices = async () => {
      // Example service list with numeric IDs (you can replace with an actual API call)
      const serviceList = [
        { id: 1, name: "Service 1" },
        { id: 2, name: "Service 2" },
        { id: 3, name: "Service 3" },
      ];
      setServices(serviceList);
    };
    fetchServices();
  }, []);

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
      // Image upload logic here (e.g., using an API)
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
                icon: "",
                description: "",
                service_id: "", // Keep service_id as a number type
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
                  (uploadedImageUrl || imageUrl) &&
                  values.description &&
                  values.service_id && // Ensure service_id is selected
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
                        <Form.Label>Title (English)</Form.Label>
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
                        controlId="validationFormikServiceId"
                        className="position-relative"
                      >
                        <Form.Label>Select Service</Form.Label>
                        <Form.Control
                          as="select"
                          name="service_id"
                          value={values.service_id}
                          onChange={handleChange}
                          isInvalid={!!errors.service_id && touched.service_id}
                        >
                          <option value="">Select a Service</option>
                          {services.map(service => (
                            <option key={service.id} value={service.id}>
                              {service.name}
                            </option>
                          ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.service_id}
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
