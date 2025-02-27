import React, { Fragment, useState, useEffect,useRef } from "react";
import { Breadcrumb, Button, Col, Row, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditTraining } from "../../../../Api/Training";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateProjectImage } from "../../../../Api/Projects";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactQuillCommon from '../../../Utilities/ReactQuillCommon/ReactQuillCommon'
import {useOneTraining} from '../../../../Api/Training'
import { useParams } from "react-router-dom";

const schema = yup.object().shape({
  title_en: yup.string().required(),
  title_ar: yup.string().required(),
  image: yup.string().url().required(), // Validate as URL
  description_en: yup.string().required(),
  description_ar: yup.string().required(),
});

const EditTrainings = ({  itemData, viewDemoClose, setShow10 }) => {
  const { id } = useParams();

  const { data: dataone, isLoading: isLoadingOne } = useOneTraining(id);
console.log(dataone);

  const { mutate, data } = useEditTraining();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [valueAlignDes, setvalueAlignDes] = useState("center");

  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();
  const [uploadedImageUrl, setUploadedImageUrl] = useState(
    dataone?.image || ""
  );
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(dataone?.image || "");

  useEffect(() => {
    if (data) {
      // setShow10(false);
      toast.success("This item has been successfully edited.");
        navigate("/pages/training/");
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
          setImageUrl(data.file_url);
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
    const quill = quillRef?.current?.getEditor();
    
    if (quill) { // Ensure quill is defined
      const editor = quill.root;
      if (dataone?.description_ar && dataone) {
        console.log(dataone?.description_ar);
        editor.setAttribute('dir', 'rtl'); // Set text direction to RTL
      } else {
        editor.setAttribute('dir', 'ltr'); // Default to LTR
      }
    }
  }, [dataone?.description_ar, dataone]);


  if (!dataone) {
    return <div>loading...</div>;
  }
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Edit Training</h2>
          <Breadcrumb>
             
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
                // Ensure image URL is used
                data.image = uploadedImageUrl || imageUrl;
                mutate({ data, id });
                setSubmitting(false);
              }}
              initialValues={{
                title_en: dataone?.title_en || "",
                title_ar: dataone?.title_ar || "",
                image: dataone?.image || "",
                description_en: dataone?.description_en || "",
                description_ar: dataone?.description_ar || "",
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
                      controlId="validationFormikDescriptionEn"
                      className="position-relative"
                    >
                      <Form.Label>Description (English)</Form.Label>
                      <ReactQuillCommon
                          textDirection='ltr' // تمرير اتجاه النص هنا

                          textDes={values.description_en}
                          setTextDes={(value) => setFieldValue("description_en", value)}
                          title="Description"
                          setvalueAlignDes={setvalueAlignDes} // If required for alignment
                        />
                        
                      {/* <ReactQuill
                        value={values.description_en}
                        onChange={(value) =>
                          setFieldValue("description_en", value)
                        }
                        modules={modules}

                      /> */}
                      {touched.description_en && errors.description_en && (
                        <div className="invalid-feedback d-block">
                          {errors.description_en}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationFormikDescriptionAr"
                      className="position-relative"
                    >
                      <Form.Label>Description (Arabic)</Form.Label>
                      {/* <ReactQuill
                        value={values.description_ar}
                        onChange={(value) =>
                          setFieldValue("description_ar", value)
                        }
                        className="react-quill"
                        modules={modules}
                        ref={quillRef}  
                      /> */}
                      
                         <ReactQuillCommon
                          textDirection='rtl' // تمرير اتجاه النص هنا

                          textDes={values.description_ar}
                          setTextDes={(value) => setFieldValue("description_ar", value)}
                          title="Description"
                          setvalueAlignDes={setvalueAlignDes} // If required for alignment
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
                    disabled={isSubmitting || !isValid || !dirty}
                  >
                    {isSubmitting ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Save"
                    )}
                  </Button>
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
