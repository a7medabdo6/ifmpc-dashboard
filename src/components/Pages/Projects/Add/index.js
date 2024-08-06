import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { useCreateProject } from "../../../../Api/Projects";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useTags } from "../../../../Api/Tags";
import { useCategories } from "../../../../Api/Categories/index";

// Define validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  popularity_count: yup.number().integer().required(),
  category: yup.number().required(),
  author: yup.array().of(yup.number()).required(),
  tags: yup.array().of(yup.number()).required(),
});

const authors = [
  { value: 1, label: "Author 1" },
  { value: 2, label: "Author 2" },
  { value: 3, label: "Author 3" },
];

const AddProjects = () => {
  const { mutate } = useCreateProject();
  const { data } = useTags();
  const { data: dataOfCategory } = useCategories();

  // Map tags data to Select options
  const tagOptions = data?.results.map(tag => ({ value: tag.id, label: tag.name })) || [];
  
  // Map categories data to Select options
  const categoryOptions = dataOfCategory?.results.map(category => ({ value: category.id, label: category.name })) || [];

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
                content: "",
                popularity_count: 0,
                category: null,
                author: [],
                tags: [],
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
                    <Form.Group as={Col} md="6" controlId="validationFormik101">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isValid={touched.name && !errors.name}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik102">
                      <Form.Label>Content</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                        isValid={touched.content && !errors.content}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationFormik103">
                      <Form.Label>Popularity Count</Form.Label>
                      <Form.Control
                        type="number"
                        name="popularity_count"
                        value={values.popularity_count}
                        onChange={handleChange}
                        isValid={touched.popularity_count && !errors.popularity_count}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormikCategory">
                      <Form.Label>Category</Form.Label>
                      <Select
                        name="category"
                        options={categoryOptions}
                        value={categoryOptions.find(option => option.value === values.category)}
                        onChange={(option) => setFieldValue('category', option.value)}
                        isValid={touched.category && !errors.category}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationFormikAuthor">
                      <Form.Label>Author</Form.Label>
                      <Select
                        name="author"
                        options={authors}
                        isMulti
                        components={makeAnimated()}
                        value={authors.filter(option => values.author.includes(option.value))}
                        onChange={(selectedOptions) => setFieldValue('author', selectedOptions.map(option => option.value))}
                        isValid={touched.author && !errors.author}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormikTags">
                      <Form.Label>Tags</Form.Label>
                      <Select
                        name="tags"
                        options={tagOptions}
                        isMulti
                        components={makeAnimated()}
                        value={tagOptions.filter(option => values.tags.includes(option.value))}
                        onChange={(selectedOptions) => setFieldValue('tags', selectedOptions.map(option => option.value))}
                        isValid={touched.tags && !errors.tags}
                      />
                    </Form.Group>
                  </Row>
                  <Button type="submit">Save</Button>
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
