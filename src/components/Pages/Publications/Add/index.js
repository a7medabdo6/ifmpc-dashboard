import React, { Fragment, useEffect } from "react";
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
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Define validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required(),
  name_en: yup.string().required(),
  name_ar: yup.string().required(),
  content: yup.string().required(),
  content_en: yup.string().required(),
  content_ar: yup.string().required(),
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
  const {
    mutate,
    isLoading,
    error,
    data: dataOfCreatePub,
  } = useCreatePublication();
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
      value: AUTH.id,
    })) || [];

  const handleSubmit = (data) => {
    console.log("Submitting data:", data); // للتحقق من البيانات
    mutate(data, {
      onSuccess: () => console.log("Data submitted successfully"),
      onError: (error) => console.log("Error submitting data:", error),
    });
  };
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (dataOfCreatePub) {
      toast.success("This item has been successfully Created.");

      // تأخير الانتقال لمدة 2 ثانية (2000 مللي ثانية)
      setTimeout(() => {
        navigate("/pages/publications/");
      }, 2000); // يمكنك ضبط الوقت حسب الحاجة
    }
  }, [dataOfCreatePub, navigate]);
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Create Publication
          </h2>
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
              onSubmit={(values) => {
                console.log("Submitting data:", values); // للتحقق من البيانات
                handleSubmit(values);
              }}
              initialValues={{
                name: "",
                name_en: "",
                name_ar: "",
                content: "",
                content_en: "",
                content_ar: "",
                popularity_count: 0, // قيمة افتراضية مبدئية
                category:
                  categoryOptions.length > 0 ? categoryOptions[0].value : "", // إذا كان هناك فئات
                author:
                  authorsData?.results.length > 0
                    ? [authorsData.results[0].id]
                    : [], // إذا كان هناك مؤلفون
                tags: tagOptions.length > 0 ? [tagOptions[0].value] : [], // إذا كان هناك علامات
                references: [{ name: "", url: "" }], // القيم الافتراضية للمراجع
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
                      {/* Add form fields for references if necessary */}
                      {values.references.map((reference, index) => (
                        <div key={index}>
                          <Form.Control
                            type="text"
                            name={`references[${index}].name`}
                            value={reference.name}
                            onChange={(e) =>
                              setFieldValue(
                                `references[${index}].name`,
                                e.target.value
                              )
                            }
                            isValid={
                              touched.references &&
                              touched.references[index]?.name &&
                              !errors.references?.[index]?.name
                            }
                          />
                          <Form.Control
                            type="url"
                            name={`references[${index}].url`}
                            value={reference.url}
                            onChange={(e) =>
                              setFieldValue(
                                `references[${index}].url`,
                                e.target.value
                              )
                            }
                            isValid={
                              touched.references &&
                              touched.references[index]?.url &&
                              !errors.references?.[index]?.url
                            }
                          />
                        </div>
                      ))}
                    </Form.Group>
                  </Row>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit"}
                  </Button>
                  {error && (
                    <div className="text-danger mt-3">{error.message}</div>
                  )}
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
