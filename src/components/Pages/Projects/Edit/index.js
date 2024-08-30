import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { Formik, FieldArray } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import {
  useEditProject,
  useCreateProjectImage,
} from "../../../../Api/Projects";
import Select from "react-select";
import { useTags } from "../../../../Api/Tags";
import { useUsers } from "../../../../Api/User";
import { useCategories } from "../../../../Api/Categories/index";
import { useAuthors } from "../../../../Api/Authors/index";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  name_en: yup.string().required("English name is required"),
  name_ar: yup.string().required("Arabic name is required"),
  content: yup.string().required("Content is required"),
  content_en: yup.string().required("English content is required"),
  content_ar: yup.string().required("Arabic content is required"),
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
  references: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Reference name is required"),
      url: yup
        .string()
        .url("Invalid URL")
        .required("Reference URL is required"),
    })
  ),
  images: yup.array().of(yup.string().required("Image URL is required")),
});

const EditProjects = () => {
  const location = useLocation();
  const id = location.state?.id;
  const { mutate, isLoading, error, data: dataEdit } = useEditProject();
  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();

  const { data } = useTags();
  const { data: AuthorData } = useUsers();
  const { data: dataOfCategory } = useCategories();
  const { data: authorsData } = useAuthors();
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [file, setFile] = useState(null);

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

  const handleSubmit = (values) => {
    const jsonData = {
      name: values.name,
      name_en: values.name_en,
      name_ar: values.name_ar,
      content: values.content,
      content_en: values.content_en,
      content_ar: values.content_ar,
      image: values.image, // URL or path
      popularity_count: values.popularity_count,
      category: values.category,
      author: values.author,
      tags: values.tags,
      references: values.references.map((reference) => ({
        name: reference.name,
        url: reference.url,
      })),
      images: values.images, // Updated to use images array directly
    };
    let data = {
      jsonData,
      id,
    };
    console.log(id);

    // eslint-disable-next-line no-const-assign
    mutate(data, {
      onSuccess: () => console.log("Data submitted successfully"),
      onError: (error) => console.log("Error submitting data:", error),
    });
  };
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      // Check file size and type before setting it
      if (file.size > 5 * 1024 * 1024) {
        alert("File size is too large. Max size is 5MB.");
        return;
      }
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert("Unsupported file format. Only JPEG and PNG are allowed.");
        return;
      }
      setFile(file); // Update file state
    }
  };
  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      mutateImage(formData, {
        onSuccess: (data) => {
          setUploadedImageUrl(data.file_url); // Update state with the uploaded image URL
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
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (dataEdit) {
      toast.success("This item has been successfully edited.");

      // تأخير الانتقال لمدة 2 ثانية (2000 مللي ثانية)
      setTimeout(() => {
        navigate("/pages/Projects/");
      }, 2000); // يمكنك ضبط الوقت حسب الحاجة
    }
  }, [dataEdit, navigate]);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Edit Project</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Project</Breadcrumb.Item>
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
                name: "Default Project Name",
                name_en: "Default Project Name (English)",
                name_ar: "اسم المشروع الافتراضي",
                content: "Default content",
                content_en: "Default content (English)",
                content_ar: "محتوى افتراضي",
                image: "", // Default URL or path
                popularity_count: 10,
                category:
                  categoryOptions.length > 0 ? categoryOptions[0].value : null,
                author:
                  authorsData?.results.length > 0
                    ? [authorsData.results[0].id]
                    : [],
                tags: tagOptions.length > 0 ? [tagOptions[0].value] : [],
                references: [
                  { name: "Default Reference", url: "http://default.url" },
                ],
                images: ["http://example.com/default-image.jpg"], // Default URL for images
              }}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                touched,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikName"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isValid={touched.name && !errors.name}
                      />
                      {touched.name && errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </Form.Group>
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
                      />
                      {touched.name_en && errors.name_en && (
                        <div className="invalid-feedback">{errors.name_en}</div>
                      )}
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
                      />
                      {touched.name_ar && errors.name_ar && (
                        <div className="invalid-feedback">{errors.name_ar}</div>
                      )}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikContent"
                    >
                      <Form.Label>Content</Form.Label>
                      <Form.Control
                        type="text"
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                        isValid={touched.content && !errors.content}
                      />
                      {touched.content && errors.content && (
                        <div className="invalid-feedback">{errors.content}</div>
                      )}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikContentEn"
                    >
                      <Form.Label>Content (English)</Form.Label>
                      <ReactQuill
                        value={values.content_en}
                        onChange={(value) => setFieldValue("content_en", value)}
                        theme="snow"
                        modules={{ toolbar: true }}
                      />
                      {touched.content_en && errors.content_en && (
                        <div className="invalid-feedback">
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
                      <ReactQuill
                        value={values.content_ar}
                        onChange={(value) => setFieldValue("content_ar", value)}
                        theme="snow"
                        modules={{ toolbar: true }}
                      />
                      {touched.content_ar && errors.content_ar && (
                        <div className="invalid-feedback">
                          {errors.content_ar}
                        </div>
                      )}
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikImage"
                    >
                      <Form.Label>Image URL</Form.Label>
                      <Form.Control
                        type="text"
                        name="image"
                        value={values.image}
                        onChange={handleChange}
                        isValid={touched.image && !errors.image}
                      />
                      {touched.image && errors.image && (
                        <div className="invalid-feedback">{errors.image}</div>
                      )}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikPopularityCount"
                    >
                      <Form.Label>Popularity Count</Form.Label>
                      <Form.Control
                        type="number"
                        name="popularity_count"
                        value={values.popularity_count}
                        onChange={handleChange}
                        isValid={
                          touched.popularity_count && !errors.popularity_count
                        }
                      />
                      {touched.popularity_count && errors.popularity_count && (
                        <div className="invalid-feedback">
                          {errors.popularity_count}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikCategory"
                    >
                      <Form.Label>Category</Form.Label>
                      <Select
                        options={categoryOptions}
                        onChange={(option) =>
                          setFieldValue("category", option?.value)
                        }
                        value={categoryOptions.find(
                          (c) => c.value === values.category
                        )}
                      />
                      {touched.category && errors.category && (
                        <div className="invalid-feedback">
                          {errors.category}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikAuthor"
                    >
                      <Form.Label>Author</Form.Label>
                      <Select
                        options={AuthorsOptions}
                        isMulti
                        onChange={(options) =>
                          setFieldValue(
                            "author",
                            options.map((opt) => opt.value)
                          )
                        }
                        value={AuthorsOptions.filter((option) =>
                          values.author.includes(option.value)
                        )}
                      />
                      {touched.author && errors.author && (
                        <div className="invalid-feedback">{errors.author}</div>
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
                        onChange={(options) =>
                          setFieldValue(
                            "tags",
                            options.map((opt) => opt.value)
                          )
                        }
                        value={tagOptions.filter((option) =>
                          values.tags.includes(option.value)
                        )}
                      />
                      {touched.tags && errors.tags && (
                        <div className="invalid-feedback">{errors.tags}</div>
                      )}
                    </Form.Group>
                  </Row>
                  <FieldArray
                    name="references"
                    render={({ remove, push }) => (
                      <div>
                        <h5>References</h5>
                        {values.references.map((reference, index) => (
                          <Row key={index} className="mb-3">
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId={`validationFormikReferenceName${index}`}
                            >
                              <Form.Label>Reference Name</Form.Label>
                              <Form.Control
                                type="text"
                                name={`references.${index}.name`}
                                value={reference.name}
                                onChange={handleChange}
                                isValid={
                                  touched.references?.[index]?.name &&
                                  !errors.references?.[index]?.name
                                }
                              />
                              {touched.references?.[index]?.name &&
                                errors.references?.[index]?.name && (
                                  <div className="invalid-feedback">
                                    {errors.references[index].name}
                                  </div>
                                )}
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="7"
                              controlId={`validationFormikReferenceUrl${index}`}
                            >
                              <Form.Label>Reference URL</Form.Label>
                              <Form.Control
                                type="text"
                                name={`references.${index}.url`}
                                value={reference.url}
                                onChange={handleChange}
                                isValid={
                                  touched.references?.[index]?.url &&
                                  !errors.references?.[index]?.url
                                }
                              />
                              {touched.references?.[index]?.url &&
                                errors.references?.[index]?.url && (
                                  <div className="invalid-feedback">
                                    {errors.references[index].url}
                                  </div>
                                )}
                            </Form.Group>
                            <Col md="12" className="mb-2">
                              <Button
                                type="button"
                                variant="danger"
                                onClick={() => remove(index)}
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
                  <FieldArray
                    name="images"
                    render={({ remove, push }) => (
                      <div>
                        <h5>Images</h5>
                        {values.images.map((imageUrl, index) => (
                          <Row key={index} className="mb-3">
                            <Form.Group
                              as={Col}
                              md="12"
                              controlId={`validationFormikImage${index}`}
                            >
                              <Form.Label>Image URL</Form.Label>
                              <Form.Control
                                type="text"
                                name={`images.${index}`}
                                value={imageUrl}
                                onChange={(e) =>
                                  setFieldValue(
                                    `images.${index}`,
                                    e.target.value
                                  )
                                }
                                isValid={
                                  touched.images?.[index] &&
                                  !errors.images?.[index]
                                }
                              />
                              {touched.images?.[index] &&
                                errors.images?.[index] && (
                                  <div className="invalid-feedback">
                                    {errors.images[index]}
                                  </div>
                                )}
                            </Form.Group>
                            <Col md="12" className="mb-2">
                              <Button
                                type="button"
                                variant="danger"
                                onClick={() => remove(index)}
                              >
                                Remove
                              </Button>
                            </Col>
                          </Row>
                        ))}
                        <Button
                          type="button"
                          onClick={() => push("")} // Add an empty string for the new image URL
                        >
                          Add Image
                        </Button>
                      </div>
                    )}
                  />
                  <Form.Group as={Row} className="mb-3">
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
                      upload Image
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

                  <Button type="submit" disabled={isLoading}>
                    Submit
                  </Button>
                  {error && (
                    <div className="text-danger mt-2">{error.message}</div>
                  )}
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

export default EditProjects;
