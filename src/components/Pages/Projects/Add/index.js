import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { Formik, FieldArray } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useCreateProject } from "../../../../Api/Projects";
import Select from "react-select";
import { useTags } from "../../../../Api/Tags";
import { useUsers } from "../../../../Api/User";
import { useCategories } from "../../../../Api/Categories/index";
import { useAuthors } from "../../../../Api/Authors/index";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  name_en: yup.string().required("English name is required"),
  name_ar: yup.string().required("Arabic name is required"),
  content: yup.string().required("Content is required"),
  content_en: yup.string().required("English content is required"),
  content_ar: yup.string().required("Arabic content is required"),
  image: yup.mixed().required("Image is required"),
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
  images: yup.array().of(
    yup.object().shape({
      image: yup.mixed().required("Image is required"),
    })
  ),
});

const AddProjects = () => {
  const { mutate, isLoading, error } = useCreateProject();
  const { data } = useTags();
  const { data: AuthorData } = useUsers();
  const { data: dataOfCategory } = useCategories();
  const { data: authorsData } = useAuthors();

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
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("name_en", values.name_en);
    formData.append("name_ar", values.name_ar);
    formData.append("content", values.content);
    formData.append("content_en", values.content_en);
    formData.append("content_ar", values.content_ar);
    formData.append("image", values.image); // Upload file
    formData.append("popularity_count", values.popularity_count);
    formData.append("category", values.category);

    values.author.forEach((author) => formData.append("author[]", author));
    values.tags.forEach((tag) => formData.append("tags[]", tag));

    values.references.forEach((reference, index) => {
      formData.append(`references.${index}.name`, reference.name);
      formData.append(`references[${index}][url]`, reference.url);
    });

    values.images.forEach((imageObj, index) => {
      if (imageObj.image) {
        formData.append(`images.${index}.image`, imageObj.image); // Upload files
      }
    });

    mutate(formData, {
      onSuccess: () => console.log("Data submitted successfully"),
      onError: (error) => console.log("Error submitting data:", error),
    });
  };

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
                name: "Default Project Name",
                name_en: "Default Project Name (English)",
                name_ar: "اسم المشروع الافتراضي",
                content: "Default content",
                content_en: "Default content (English)",
                content_ar: "محتوى افتراضي",
                image: null, // Default image
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
                images: [{ image: null }], // Default images
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
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        onChange={(event) =>
                          setFieldValue("image", event.currentTarget.files[0])
                        }
                        isValid={touched.image && !errors.image}
                      />
                      {touched.image && errors.image && (
                        <div className="invalid-feedback">{errors.image}</div>
                      )}
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikPopularity"
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
                          (opt) => opt.value === values.category
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
                      controlId="validationFormikAuthors"
                    >
                      <Form.Label>Authors</Form.Label>
                      <Select
                        options={AuthorsOptions}
                        isMulti
                        onChange={(options) =>
                          setFieldValue(
                            "author",
                            options.map((opt) => opt.value)
                          )
                        }
                        value={AuthorsOptions.filter((opt) =>
                          values.author.includes(opt.value)
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
                        value={tagOptions.filter((opt) =>
                          values.tags.includes(opt.value)
                        )}
                      />
                      {touched.tags && errors.tags && (
                        <div className="invalid-feedback">{errors.tags}</div>
                      )}
                    </Form.Group>
                    <FieldArray name="references">
                      {({ remove, push }) => (
                        <div>
                          {values.references.map((reference, index) => (
                            <Row key={index} className="mb-3">
                              <Form.Group
                                as={Col}
                                md="6"
                                controlId={`validationFormikReferenceName_${index}`}
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
                                md="6"
                                controlId={`validationFormikReferenceUrl_${index}`}
                              >
                                <Form.Label>Reference URL</Form.Label>
                                <Form.Control
                                  type="text"
                                  name={`references[${index}].url`}
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
                              <Button
                                type="button"
                                variant="danger"
                                onClick={() => remove(index)}
                              >
                                Remove Reference
                              </Button>
                            </Row>
                          ))}
                          <Button
                            type="button"
                            variant="secondary"
                            onClick={() => push({ name: "", url: "" })}
                          >
                            Add Reference
                          </Button>
                        </div>
                      )}
                    </FieldArray>
                    <FieldArray name="images">
                      {({ remove, push }) => (
                        <div>
                          {values.images.map((imageObj, index) => (
                            <Row key={index} className="mb-3">
                              <Form.Group
                                as={Col}
                                md="6"
                                controlId={`validationFormikImage_${index}`}
                              >
                                <Form.Label>Image {index + 1}</Form.Label>
                                <Form.Control
                                  type="file"
                                  name={`images[${index}].image`}
                                  onChange={(event) =>
                                    setFieldValue(
                                      `images[${index}].image`,
                                      event.currentTarget.files[0]
                                    )
                                  }
                                  isValid={
                                    touched.images?.[index]?.image &&
                                    !errors.images?.[index]?.image
                                  }
                                />
                                {touched.images?.[index]?.image &&
                                  errors.images?.[index]?.image && (
                                    <div className="invalid-feedback">
                                      {errors.images[index].image}
                                    </div>
                                  )}
                              </Form.Group>
                              <Button
                                type="button"
                                variant="danger"
                                onClick={() => remove(index)}
                              >
                                Remove Image
                              </Button>
                            </Row>
                          ))}
                          <Button
                            type="button"
                            variant="secondary"
                            onClick={() => push({ image: null })}
                          >
                            Add Image
                          </Button>
                        </div>
                      )}
                    </FieldArray>
                  </Row>
                  <Button type="submit" disabled={isLoading}>
                    Submit
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

export default AddProjects;
