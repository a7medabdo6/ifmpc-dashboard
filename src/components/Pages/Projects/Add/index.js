import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik, FieldArray } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useCreateProject } from "../../../../Api/Projects";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useTags } from "../../../../Api/Tags";
import { useUsers } from "../../../../Api/User";
import { useCategories } from "../../../../Api/Categories/index";
import { useAuthors } from "../../../../Api/Authors/index";
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Define validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required(),
  name_en: yup.string().required(),
  name_ar: yup.string().required(),
  content: yup.string().required(),
  content_en: yup.string().required(),
  content_ar: yup.string().required(),
  image: yup.mixed().required(),
  popularity_count: yup.number().integer().required(),
  category: yup.number().required(),
  author: yup.array().of(yup.number()).required(),
  tags: yup.array().of(yup.number()).required(),
  references: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      url: yup.string().url().required(),
    })
  ),
  images: yup.array().of(
    yup.object().shape({
      image: yup.mixed().required(),
      project: yup.number().required(),
    })
  ),
});

const authors = [
  { value: 1, label: "Author 1" },
  { value: 2, label: "Author 2" },
  { value: 3, label: "Author 3" },
];

const projectOptions = [
  { value: 1, label: "Project 1" },
  { value: 2, label: "Project 2" },
  { value: 3, label: "Project 3" },
];

const AddProjects = () => {
  const { mutate, isLoading, error } = useCreateProject();
  const { data } = useTags();
  const { data: AuthorData } = useUsers();
  const { data: dataOfCategory } = useCategories();
  const { data: authorsData } = useAuthors();

  // Convert tags data to options for Select
  const tagOptions =
    data?.results.map((tag) => ({ value: tag.id, label: tag.name })) || [];

  // Convert categories data to options for Select
  const categoryOptions =
    dataOfCategory?.results.map((category) => ({
      value: category.id,
      label: category.name,
    })) || [];

  const AuthorsOptions =
    authorsData?.results.map((AUTH) => ({
      label: AUTH.name,
      value: AUTH.id
    })) || [];

  const handleSubmit = (data) => {
    console.log('Submitting data:', data); // للتحقق من البيانات
    mutate(data, {
      onSuccess: () => console.log('Data submitted successfully'),
      onError: (error) => console.log('Error submitting data:', error),
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
              onSubmit={(values) => handleSubmit(values)} // تصحيح استدعاء onSubmit
              initialValues={{
                name: "Default Project Name",
                name_en: "Default Project Name (English)",
                name_ar: "اسم المشروع الافتراضي",
                content: "Default content",
                content_en: "Default content (English)",
                content_ar: "محتوى افتراضي",
                image: null,
                popularity_count: 10,
                category: categoryOptions.length > 0 ? categoryOptions[0].value : null,
                author: authorsData?.results.length > 0 ? [authorsData.results[0].id] : [],
                tags: tagOptions.length > 0 ? [tagOptions[0].value] : [],
                references: [{ name: "Default Reference", url: "http://default.url" }],
                images: [{ image: null, project: projectOptions.length > 0 ? projectOptions[0].value : null }],
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
                  {/* Existing fields */}
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
                        onChange={(value) => setFieldValue('content_en', value)}
                        theme="snow"
                        modules={{ toolbar: true }}
                      />
                      {touched.content_en && errors.content_en && (
                        <div className="invalid-feedback">{errors.content_en}</div>
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
                        onChange={(value) => setFieldValue('content_ar', value)}
                        theme="snow"
                        modules={{ toolbar: true }}
                      />
                      {touched.content_ar && errors.content_ar && (
                        <div className="invalid-feedback">{errors.content_ar}</div>
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
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikCategory"
                    >
                      <Form.Label>Category</Form.Label>
                      <Select
                        name="category"
                        options={categoryOptions}
                        value={categoryOptions.find(
                          (option) => option.value === values.category
                        )}
                        onChange={(option) =>
                          setFieldValue("category", option?.value)
                        }
                        isValid={touched.category && !errors.category}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikAuthors"
                    >
                      <Form.Label>Authors</Form.Label>
                      <Select
                        isMulti
                        name="author"
                        options={AuthorsOptions}
                        value={AuthorsOptions.filter((option) =>
                          values.author.includes(option.value)
                        )}
                        onChange={(options) =>
                          setFieldValue(
                            "author",
                            options.map((option) => option.value)
                          )
                        }
                        isValid={touched.author && !errors.author}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikTags"
                    >
                      <Form.Label>Tags</Form.Label>
                      <Select
                        isMulti
                        name="tags"
                        options={tagOptions}
                        value={tagOptions.filter((option) =>
                          values.tags.includes(option.value)
                        )}
                        onChange={(options) =>
                          setFieldValue(
                            "tags",
                            options.map((option) => option.value)
                          )
                        }
                        isValid={touched.tags && !errors.tags}
                      />
                    </Form.Group>
                  </Row>
                  <FieldArray name="references">
                    {({ push, remove }) => (
                      <div>
                        <h5>References</h5>
                        {values.references.map((reference, index) => (
                          <Row key={index}>
                            <Form.Group as={Col} md="5">
                              <Form.Label>Reference Name</Form.Label>
                              <Form.Control
                                type="text"
                                name={`references.${index}.name`}
                                value={reference.name}
                                onChange={handleChange}
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="5">
                              <Form.Label>Reference URL</Form.Label>
                              <Form.Control
                                type="text"
                                name={`references.${index}.url`}
                                value={reference.url}
                                onChange={handleChange}
                              />
                            </Form.Group>
                            <Col md="2">
                              <Button
                                variant="danger"
                                onClick={() => remove(index)}
                              >
                                Remove
                              </Button>
                            </Col>
                          </Row>
                        ))}
                        <Button
                          variant="primary"
                          onClick={() =>
                            push({ name: "", url: "" })
                          }
                        >
                          Add Reference
                        </Button>
                      </div>
                    )}
                  </FieldArray>
                  <FieldArray name="images">
                    {({ push, remove }) => (
                      <div>
                        <h5>Images</h5>
                        {values.images.map((image, index) => (
                          <Row key={index}>
                            <Form.Group as={Col} md="5">
                              <Form.Label>Image File</Form.Label>
                              <Form.Control
                                type="file"
                                name={`images.${index}.image`}
                                onChange={(event) =>
                                  setFieldValue(
                                    `images.${index}.image`,
                                    event.currentTarget.files[0]
                                  )
                                }
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="5">
                              <Form.Label>Project</Form.Label>
                              <Select
                                name={`images.${index}.project`}
                                options={projectOptions}
                                value={projectOptions.find(
                                  (option) => option.value === image.project
                                )}
                                onChange={(option) =>
                                  setFieldValue(
                                    `images.${index}.project`,
                                    option?.value
                                  )
                                }
                              />
                            </Form.Group>
                            <Col md="2">
                              <Button
                                variant="danger"
                                onClick={() => remove(index)}
                              >
                                Remove
                              </Button>
                            </Col>
                          </Row>
                        ))}
                        <Button
                          variant="primary"
                          onClick={() =>
                            push({ image: null, project: projectOptions[0].value })
                          }
                        >
                          Add Image
                        </Button>
                      </div>
                    )}
                  </FieldArray>
                  <Button type="submit" variant="primary">
                    {isLoading ? "Submitting..." : "Submit"}
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
