import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik, FieldArray } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { useCreateProject } from "../../../../Api/Projects";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useTags } from "../../../../Api/Tags";
import { useUsers } from "../../../../Api/User";

import { useCategories } from "../../../../Api/Categories/index";
import { useProjects } from "../../../../Api/Projects"; // Importing projects API

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

const AddProjects = () => {
  const { mutate } = useCreateProject();
  const { data } = useTags();
  const { data: AuthorData } = useUsers();
  console.log(AuthorData);

  const { data: dataOfCategory } = useCategories();
  const { data: projectData } = useProjects(); // Fetching projects

  // Convert tags data to options for Select
  const tagOptions =
    data?.results.map((tag) => ({ value: tag.id, label: tag.name })) || [];

  // Convert categories data to options for Select
  const categoryOptions =
    dataOfCategory?.results.map((category) => ({
      value: category.id,
      label: category.name,
    })) || [];

  // Convert projects data to options for Select
  const projectOptions =
    projectData?.results.map((project) => ({
      value: project.id,
      label: project.name,
    })) || [];

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
              onSubmit={(data) => mutate(data)}
              initialValues={{
                name: "",
                name_en: "",
                name_ar: "",
                content: "",
                content_en: "",
                content_ar: "",
                image: null,
                popularity_count: 0,
                category: null,
                author: [],
                tags: [],
                references: [{ name: "", url: "" }],
                images: [{ image: null, project: null }],
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
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikContent"
                    >
                      <Form.Label>Content</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                        isValid={touched.content && !errors.content}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikContentEn"
                    >
                      <Form.Label>Content (English)</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="content_en"
                        value={values.content_en}
                        onChange={handleChange}
                        isValid={touched.content_en && !errors.content_en}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikContentAr"
                    >
                      <Form.Label>Content (Arabic)</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="content_ar"
                        value={values.content_ar}
                        onChange={handleChange}
                        isValid={touched.content_ar && !errors.content_ar}
                      />
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
                          setFieldValue("category", option.value)
                        }
                        isValid={touched.category && !errors.category}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikAuthor"
                    >
                      <Form.Label>Author</Form.Label>
                      <Select
                        name="author"
                        options={authors}
                        isMulti
                        components={makeAnimated()}
                        value={authors.filter((option) =>
                          values.author.includes(option.value)
                        )}
                        onChange={(selectedOptions) =>
                          setFieldValue(
                            "author",
                            selectedOptions.map((option) => option.value)
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
                        name="tags"
                        options={tagOptions}
                        isMulti
                        components={makeAnimated()}
                        value={tagOptions.filter((option) =>
                          values.tags.includes(option.value)
                        )}
                        onChange={(selectedOptions) =>
                          setFieldValue(
                            "tags",
                            selectedOptions.map((option) => option.value)
                          )
                        }
                        isValid={touched.tags && !errors.tags}
                      />
                    </Form.Group>
                  </Row>

                  {/* References field */}
                  <FieldArray name="references">
                    {({ push, remove }) => (
                      <div>
                        <h5>References</h5>
                        {values.references.map((reference, index) => (
                          <Row key={index} className="mb-3">
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId={`referenceName${index}`}
                            >
                              <Form.Label>Reference Name</Form.Label>
                              <Form.Control
                                type="text"
                                name={`references.${index}.name`}
                                value={reference.name}
                                onChange={handleChange}
                                isValid={
                                  touched.references &&
                                  touched.references[index]?.name &&
                                  !errors.references?.[index]?.name
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId={`referenceUrl${index}`}
                            >
                              <Form.Label>Reference URL</Form.Label>
                              <Form.Control
                                type="url"
                                name={`references.${index}.url`}
                                value={reference.url}
                                onChange={handleChange}
                                isValid={
                                  touched.references &&
                                  touched.references[index]?.url &&
                                  !errors.references?.[index]?.url
                                }
                              />
                            </Form.Group>
                            <Col md="2">
                              <Button
                                variant="danger"
                                onClick={() => remove(index)}
                                className="mt-4"
                              >
                                Delete
                              </Button>
                            </Col>
                          </Row>
                        ))}
                        <Button
                          variant="primary"
                          onClick={() => push({ name: "", url: "" })}
                        >
                          Add Reference
                        </Button>
                      </div>
                    )}
                  </FieldArray>

                  {/* Images field */}
                  <FieldArray name="images">
                    {({ push, remove }) => (
                      <div>
                        <h5>Images</h5>
                        {values.images.map((image, index) => (
                          <Row key={index} className="mb-3">
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId={`image${index}`}
                            >
                              <Form.Label>Image</Form.Label>
                              <Form.Control
                                type="file"
                                name={`images.${index}.image`}
                                onChange={(event) =>
                                  setFieldValue(
                                    `images.${index}.image`,
                                    event.currentTarget.files[0]
                                  )
                                }
                                isValid={
                                  touched.images &&
                                  touched.images[index]?.image &&
                                  !errors.images?.[index]?.image
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId={`imageProject${index}`}
                            >
                              <Form.Label>Project</Form.Label>
                              <Select
                                name={`images.${index}.project`}
                                options={projectOptions}
                                value={projectOptions.find(
                                  (option) =>
                                    option.value ===
                                    values.images[index].project
                                )}
                                onChange={(option) =>
                                  setFieldValue(
                                    `images.${index}.project`,
                                    option.value
                                  )
                                }
                                isValid={
                                  touched.images &&
                                  touched.images[index]?.project &&
                                  !errors.images?.[index]?.project
                                }
                              />
                            </Form.Group>
                            <Col md="2">
                              <Button
                                variant="danger"
                                onClick={() => remove(index)}
                                className="mt-4"
                              >
                                Delete
                              </Button>
                            </Col>
                          </Row>
                        ))}
                        <Button
                          variant="primary"
                          onClick={() => push({ image: null, project: null })}
                        >
                          Add Image
                        </Button>
                      </div>
                    )}
                  </FieldArray>

                  <Button type="submit">Submit</Button>
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
