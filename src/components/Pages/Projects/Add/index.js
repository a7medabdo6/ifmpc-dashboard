import React, { Fragment, useState, useEffect, useRef } from "react";
import { Breadcrumb, Button, Col, Spinner, Row } from "react-bootstrap";
import { Formik, FieldArray } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import {
  useCreateProject,
  useCreateProjectImage,
} from "../../../../Api/Projects";
import Select from "react-select";
import { useTags } from "../../../../Api/Tags";
import { useUsers } from "../../../../Api/User";
import { useCategories } from "../../../../Api/Categories/index";
import { useAuthors } from "../../../../Api/Authors/index";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Quill from "quill";
import ReactQuillCommon from "../../../Utilities/ReactQuillCommon/ReactQuillCommon";

const FontAttributor = Quill.import("attributors/class/font");
FontAttributor.whitelist = [
  "sofia",
  "slabo",
  "roboto",
  "inconsolata",
  "ubuntu",
];
Quill.register(FontAttributor, true);

// Validation schema
const schema = yup.object().shape({
  name_en: yup.string().required("English name is required"),
  // name_ar: yup.string().required("Arabic name is required"),
  content_en: yup.string().required("English content is required"),
  // content_ar: yup.string().required("Arabic content is required"),
  image: yup.string().required("Image URL is required"), // Changed to string
  popularity_count: yup
    .number()
    .integer()
    .required("Popularity count is required"),
  category: yup.number().required("Category is required"),
  author: yup
    .array()
    .of(yup.number())
    .required("At least one author is required"),
  tags: yup.array().of(yup.number()).required("At least one tag is required"),
  // references: yup.array().of(
  //   yup.object().shape({
  //     name: yup.string().required("Reference name is required"),
  //     url: yup
  //       .string()
  //       .url("Invalid URL")
  //       .required("Reference URL is required"),
  //   })
  // ),
  images: yup.array().of(yup.string().required("Image URL is required")),
  language: yup.number().required(),
  custom_created_at: yup.string(), // يمكن أن تكون سلسلة أو غير موجودة

});

const AddProjects = () => {
  const {
    mutate,
    isLoading,
    error,
    data: dataOfCreatProject,
  } = useCreateProject();
  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();
  const [textDes, setTextDes] = useState("");
  const [valueAlignDes, setvalueAlignDes] = useState("center");

  const { data } = useTags();
  const { data: AuthorData } = useUsers();
  const { data: dataOfCategory } = useCategories();
  const { data: authorsData } = useAuthors();
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [copied, setCopied] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const languageOptions = [
    { id: 1, language: "en", label: "English" },
    { id: 2, language: "ar", label: "Arabic" },
    { id: 3, language: "both", label: "Both" },
  ];
  const tagOptions =
    data?.results.map((tag) => ({ value: tag.id, label: tag.name })) || [];
  const categoryOptions =
    dataOfCategory?.results.map((category) => ({
      value: category.id,
      label: category.name,
    })) || [];
  const AuthorsOptions =
    authorsData?.results.map((AUTH) => ({
      label: AUTH.name,
      value: AUTH.id,
    })) || [];
  const [values, setvalues] = useState();
  const handleSubmit = (values) => {
    setvalues(values);
    setIsSubmitting(true); // Set submitting state to true

    const jsonData = {
      name_en: values.name_en,
      name_ar: values.name_ar,
      content_en: values.content_en,
      content_ar: values.content_ar,
      image: values.image, // URL or path
      popularity_count: values.popularity_count,
      category: values.category,
      author: values.author,
      tags: values.tags,
      // references: values.references.map((reference) => ({
      //   name: reference.name,
      //   url: reference.url,
      // })),
      images: values.images, 
      language: values?.language, // Default value for language select
      custom_created_at: values?.custom_created_at || "", // أضف هذا الحقل

    };

    mutate(jsonData, {
      onSuccess: () => {
        setIsSubmitting(false); // Reset submitting state
      },
      onError: (error) => {
        toast.error("Error submitting data:", error.message);
        setIsSubmitting(false); // Reset submitting state
      },
    });
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile); // تعيين الملف المحدد
        setUploadedImageUrl(URL.createObjectURL(selectedFile)); // إذا كنت تريد عرض المعاينة
      } else {
        alert("Unsupported file format. Only JPEG, PNG, and PDF are allowed.");
      }
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

  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (dataOfCreatProject) {
      toast.success("This item has been successfully Created.");
      navigate("/pages/Projects/");
    }
  }, [dataOfCreatProject, navigate]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
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
  //  useEffect(() => {
  //   const quill = quillRef.current.getEditor();
  //   const editor = quill.root;

  //   // تعيين اتجاه النص بناءً على اللغة
  //   if (values?.content_ar) {

  //     editor.setAttribute('dir', 'rtl');
  //   } else {
  //     editor.setAttribute('dir', 'ltr');
  //   }
  // }, [values?.content_ar]);
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Create Project</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Create Project</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(values) => handleSubmit(values)}
              initialValues={{
                name_en: "",
                // name_ar: "",
                content_en: "",
                // content_ar: "",
                image: "", // Default URL or path
                popularity_count: 0,
                category: null,
                author: [],
                tags: [],
                // references: [{ name: "", url: "" }],
                images: [], // Default URL for images
                language: 3, // Default value for language select
                custom_created_at:  "", // أضف هذا الحقل

              }}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                touched,
                errors,
              }) => {
                const isFormValid = !Object.values(values).some(
                  (value) => value === "" || value === null
                );
                setvalues(values);

                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikNameEn"
                      >
                        <Form.Label>Name (English)</Form.Label>
                        <Form.Control
                          type="text"
                          name="name_en"
                          value={values.name_en}
                          onChange={handleChange}
                          isValid={touched.name_en && !errors.name_en}
                          isInvalid={!!errors.name_en}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name_en}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikNameAr"
                      >
                        <Form.Label>Name (Arabic)</Form.Label>
                        <Form.Control
                          type="text"
                          name="name_ar"
                          value={values.name_ar}
                          onChange={handleChange}
                          isValid={touched.name_ar && !errors.name_ar}
                          isInvalid={!!errors.name_ar}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name_ar}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="validationFormikLanguage"
                        >
                          <Form.Label>Select Language</Form.Label>
                          <Select
                            options={languageOptions}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.id}
                            value={values.id}
                            onChange={(selectedOption) =>
                              setFieldValue("language", selectedOption.id)
                            }
                            isInvalid={!!errors.language && touched.language}
                          />
                          {errors.language && touched.language && (
                            <div className="invalid-feedback d-block">
                              {errors.language.id || errors.language.language}
                            </div>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationFormikCustomCreatedAt">
    <Form.Label>Custom Created At</Form.Label>
    <Form.Control
    type="datetime-local" // تغيير النوع ليشمل الوقت والتاريخ
    name="custom_created_at" // استخدم الاسم الجديد
      value={values.custom_created_at}
      onChange={handleChange}
      isInvalid={touched.custom_created_at && !!errors.custom_created_at}
    />
    <Form.Control.Feedback type="invalid">
      {errors.custom_created_at}
    </Form.Control.Feedback>
  </Form.Group>

                      </Row>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikContentEn"
                      >
                        <Form.Label>Content (English)</Form.Label>

                        <ReactQuillCommon
                          textDirection="ltrt" // تمرير اتجاه النص هنا
                          textDes={values.content_en}
                          setTextDes={(value) =>
                            setFieldValue("content_en", value)
                          }
                          
                          title="Description"
                          setvalueAlignDes={setvalueAlignDes} // If required for alignment
                        />

                        {touched.content_en && errors.content_en && (
                          <div className="invalid-feedback d-block">
                            {errors.content_en}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikContentAr"
                      >
                        <Form.Label>Content (Arabic)</Form.Label>
                        <ReactQuillCommon
                          textDirection="rtl" // تمرير اتجاه النص هنا
                          textDes={values.content_ar}
                          setTextDes={(value) =>
                            setFieldValue("content_ar", value)
                          }
                          title="Description"
                          setvalueAlignDes={setvalueAlignDes} // If required for alignment
                        />
                        {touched.content_ar && errors.content_ar && (
                          <div className="invalid-feedback d-block">
                            {errors.content_ar}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikImage"
                      >
                        <Form.Label>Image or PDF URL</Form.Label>
                        <Form.Control
                          type="text"
                          name="image"
                          value={values.image}
                          onChange={handleChange}
                          isValid={touched.image && !errors.image}
                          isInvalid={!!errors.image}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.image}
                        </Form.Control.Feedback>
                        {/* <div className="mt-3">
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
                        </div> */}
                        <div className="mt-3">
                          <Form.Label>Upload Image or PDF</Form.Label>
                          <Form.Control
                            type="file"
                            accept="image/*,.pdf"
                            onChange={handleFileChange}
                          />
                          <Button
                            type="button"
                            onClick={uploadImage}
                            className="mt-2"
                          >
                            Upload Image or PDF
                          </Button>
                          {uploadedImageUrl && (
                            <div className="mb-3">
                              <p>
                                Uploaded File URL:{" "}
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
                                  {copied ? "Copied!" : "Copy URL"}
                                </Button>
                              </CopyToClipboard>
                            </div>
                          )}
                        </div>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        style={{ display: "none" }}
                        md="6"
                        controlId="validationFormikPopularityCount"
                      >
                        <Form.Label>Popularity Count</Form.Label>
                        <Form.Control
                          type="number"
                          name="popularity_count"
                          value={0}
                          onChange={handleChange}
                          isValid={
                            touched.popularity_count && !errors.popularity_count
                          }
                          isInvalid={!!errors.popularity_count}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.popularity_count}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikCategory"
                      >
                        <Form.Label>Category</Form.Label>
                        <Select
                          options={categoryOptions}
                          name="category"
                          value={categoryOptions.find(
                            (option) => option.value === values.category
                          )}
                          onChange={(option) =>
                            setFieldValue("category", option?.value)
                          }
                        />
                        {touched.category && errors.category && (
                          <div className="invalid-feedback d-block">
                            {errors.category}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikAuthor"
                      >
                        <Form.Label>Authors</Form.Label>
                        <Select
                          options={AuthorsOptions}
                          isMulti
                          name="author"
                          value={values.author.map((id) =>
                            AuthorsOptions.find((option) => option.value === id)
                          )}
                          onChange={(options) =>
                            setFieldValue(
                              "author",
                              options.map((option) => option.value)
                            )
                          }
                        />
                        {touched.author && errors.author && (
                          <div className="invalid-feedback d-block">
                            {errors.author}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikTags"
                      >
                        <Form.Label>Tags</Form.Label>
                        <Select
                          options={tagOptions}
                          isMulti
                          name="tags"
                          value={values.tags.map((id) =>
                            tagOptions.find((option) => option.value === id)
                          )}
                          onChange={(options) =>
                            setFieldValue(
                              "tags",
                              options.map((option) => option.value)
                            )
                          }
                        />
                        {touched.tags && errors.tags && (
                          <div className="invalid-feedback d-block">
                            {errors.tags}
                          </div>
                        )}
                      </Form.Group>
                      {/* <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikReferences"
                      >
                        <Form.Label>References</Form.Label>
                        <FieldArray
                          name="references"
                          render={({ push, remove }) => (
                            <div>
                              {values.references.map((reference, index) => (
                                <Row key={index} className="mb-2">
                                  <Col>
                                    <Form.Control
                                      type="text"
                                      name={`references[${index}].name`}
                                      value={reference.name}
                                      onChange={handleChange}
                                      placeholder="Reference Name"
                                      isValid={
                                        touched.references?.[index]?.name &&
                                        !errors.references?.[index]?.name
                                      }
                                      isInvalid={
                                        !!errors.references?.[index]?.name
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.references?.[index]?.name}
                                    </Form.Control.Feedback>
                                  </Col>
                                  <Col>
                                    <Form.Control
                                      type="text"
                                      name={`references[${index}].url`}
                                      value={reference.url}
                                      onChange={handleChange}
                                      placeholder="Reference URL"
                                      isValid={
                                        touched.references?.[index]?.url &&
                                        !errors.references?.[index]?.url
                                      }
                                      isInvalid={
                                        !!errors.references?.[index]?.url
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.references?.[index]?.url}
                                    </Form.Control.Feedback>
                                  </Col>
                                  <Col xs="auto">
                                    <Button
                                      variant="danger"
                                      onClick={() => remove(index)}
                                      className="mt-4"
                                    >
                                      Remove
                                    </Button>
                                  </Col>
                                </Row>
                              ))}
                              <Button
                                type="button"
                                onClick={() => push({ name: "", url: "" })}
                              >
                                Add Reference
                              </Button>
                            </div>
                          )}
                        />
                      </Form.Group> */}
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikImages"
                      >
                        <Form.Label>Images</Form.Label>
                        <FieldArray
                          name="images"
                          render={({ push, remove }) => (
                            <div>
                              {values.images.map((image, index) => (
                                <Row key={index} className="mb-2">
                                  <Col>
                                    <Form.Control
                                      type="text"
                                      name={`images[${index}]`}
                                      value={image}
                                      onChange={handleChange}
                                      placeholder="Image URL"
                                      isValid={
                                        touched.images?.[index] &&
                                        !errors.images?.[index]
                                      }
                                      isInvalid={!!errors.images?.[index]}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.images?.[index]}
                                    </Form.Control.Feedback>
                                  </Col>
                                  <Col xs="auto">
                                    <Button
                                      variant="danger"
                                      onClick={() => remove(index)}
                                      className="mt-4"
                                    >
                                      Remove
                                    </Button>
                                  </Col>
                                </Row>
                              ))}
                              <Button type="button" onClick={() => push("")}>
                                Add Image
                              </Button>
                            </div>
                          )}
                        />
                      </Form.Group>
                    </Row>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
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
                        "Submit"
                      )}
                    </Button>
                    <ToastContainer />
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProjects;
