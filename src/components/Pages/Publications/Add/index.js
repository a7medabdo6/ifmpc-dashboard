import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useCreatePublication } from "../../../../Api/Publications";
import Select from "react-select";
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
});

const AddPublications = () => {
  const { mutate, isLoading, error } = useCreatePublication();
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
          <h2 className="main-content-title tx-24 mg-b-5">Create Publication</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Create Publication</Breadcrumb.Item>
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
                name: "Default Publication Name",
                name_en: "Default Publication Name (English)",
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
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikReferences"
                    >
                      <Form.Label>References</Form.Label>
                      <Form.Control
                        type="text"
                        name="references[0].name"
                        value={values.references[0]?.name || ''}
                        onChange={handleChange}
                        isValid={touched.references && !errors.references}
                      />
                      <Form.Control
                        type="url"
                        name="references[0].url"
                        value={values.references[0]?.url || ''}
                        onChange={handleChange}
                        isValid={touched.references && !errors.references}
                      />
                    </Form.Group>
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

export default AddPublications;
