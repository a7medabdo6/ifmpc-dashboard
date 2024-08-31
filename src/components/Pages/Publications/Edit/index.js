import React, { Fragment, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useEditPublication,useOnePublication } from "../../../../Api/Publications";
import Select from "react-select";
import { useTags } from "../../../../Api/Tags";
import { useUsers } from "../../../../Api/User";
import { useCategories } from "../../../../Api/Categories/index";
import { useAuthors } from "../../../../Api/Authors/index";
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  name_en: yup.string().required("English name is required"),
  name_ar: yup.string().required("Arabic name is required"),
  content: yup.string().required("Content is required"),
  content_en: yup.string().required("English content is required"),
  content_ar: yup.string().required("Arabic content is required"),
  popularity_count: yup.number().integer().required("Popularity count is required"),
  category: yup.number().required("Category is required"),
  author: yup.array().of(yup.number()).required("At least one author is required"),
  tags: yup.array().of(yup.number()).required("At least one tag is required"),
  references: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Reference name is required"),
      url: yup.string().url("Invalid URL").required("Reference URL is required"),
    })
  ),
});

const EditPublications = () => {
  const { mutate, isLoading, error, data: dataEdit } = useEditPublication();
  const location = useLocation();
  const id = location.state?.id;
  const { data } = useTags();
  const { data: AuthorData } = useUsers();
  const { data: dataOfCategory } = useCategories();
  const { data: authorsData } = useAuthors();
  const { data: dataone, isLoading: isLoadingOne } = useOnePublication(id);
console.log(dataone);
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
    let dataForm = {
      data,
      id,
    };
    mutate(dataForm, {
      onSuccess: () => console.log("Data submitted successfully"),
      onError: (error) => console.log("Error submitting data:", error),
    });
  };
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (dataEdit) {
      toast.success("This item has been successfully edited.");

      // تأخير الانتقال لمدة 2 ثانية (2000 مللي ثانية)
      setTimeout(() => {
        navigate("/pages/publications/");
      }, 2000); // يمكنك ضبط الوقت حسب الحاجة
    }
  }, [dataEdit, navigate]);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Edit Publication</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Publication</Breadcrumb.Item>
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
                name: dataone?.name || "",
                name_en: dataone?.name_en || "",
                name_ar: dataone?.name_ar || "",
                content: dataone?.content || "",
                content_en: dataone?.content_en || "",
                content_ar: dataone?.content_ar || "",
                popularity_count: dataone?.popularity_count || 0,
                category: dataone?.category?.id || (categoryOptions.length > 0 ? categoryOptions[0].value : ""),
                author: dataone?.author.map((a) => a.id) || (authorsData?.results.length > 0 ? [authorsData.results[0].id] : []),
                tags: dataone?.tags.map((t) => t.id) || (tagOptions.length > 0 ? [tagOptions[0].value] : []),
                references: dataone?.references || [{ name: "", url: "" }],
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
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
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
                        isInvalid={touched.name_en && !!errors.name_en}
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
                        isInvalid={touched.name_ar && !!errors.name_ar}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name_ar}
                      </Form.Control.Feedback>
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
                        isInvalid={touched.content && !!errors.content}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.content}
                      </Form.Control.Feedback>
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
                        onChange={(value) => setFieldValue("content_ar", value)}
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
                      controlId="validationFormikPopularityCount"
                    >
                      <Form.Label>Popularity Count</Form.Label>
                      <Form.Control
                        type="number"
                        name="popularity_count"
                        value={values.popularity_count}
                        onChange={handleChange}
                        isValid={touched.popularity_count && !errors.popularity_count}
                        isInvalid={touched.popularity_count && !!errors.popularity_count}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.popularity_count}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormikCategory">
                      <Form.Label>Category</Form.Label>
                      <Select
                        name="category"
                        options={categoryOptions}
                        value={categoryOptions.find(
                          (option) => option.value === values.category
                        )}
                        onChange={(option) => setFieldValue("category", option.value)}
                        isInvalid={touched.category && !!errors.category}
                      />
                      {touched.category && errors.category && (
                        <div className="invalid-feedback">{errors.category}</div>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormikAuthor">
                      <Form.Label>Author</Form.Label>
                      <Select
                        isMulti
                        name="author"
                        options={AuthorsOptions}
                        value={AuthorsOptions.filter((option) =>
                          values.author.includes(option.value)
                        )}
                        onChange={(options) => setFieldValue("author", options.map((option) => option.value))}
                        isInvalid={touched.author && !!errors.author}
                      />
                      {touched.author && errors.author && (
                        <div className="invalid-feedback">{errors.author}</div>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormikTags">
                      <Form.Label>Tags</Form.Label>
                      <Select
                        isMulti
                        name="tags"
                        options={tagOptions}
                        value={tagOptions.filter((option) =>
                          values.tags.includes(option.value)
                        )}
                        onChange={(options) => setFieldValue("tags", options.map((option) => option.value))}
                        isInvalid={touched.tags && !!errors.tags}
                      />
                      {touched.tags && errors.tags && (
                        <div className="invalid-feedback">{errors.tags}</div>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationFormikReferences">
                      <Form.Label>References</Form.Label>
                      {values.references.map((reference, index) => (
                        <div key={index} className="mb-3">
                          <Form.Control
                            type="text"
                            name={`references[${index}].name`}
                            placeholder="Reference Name"
                            value={reference.name}
                            onChange={(e) =>
                              setFieldValue(
                                `references[${index}].name`,
                                e.target.value
                              )
                            }
                            isInvalid={
                              touched.references &&
                              touched.references[index] &&
                              !!errors.references &&
                              !!errors.references[index]?.name
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.references && errors.references[index]?.name}
                          </Form.Control.Feedback>
                          <Form.Control
                            type="url"
                            name={`references[${index}].url`}
                            placeholder="Reference URL"
                            value={reference.url}
                            onChange={(e) =>
                              setFieldValue(
                                `references[${index}].url`,
                                e.target.value
                              )
                            }
                            isInvalid={
                              touched.references &&
                              touched.references[index] &&
                              !!errors.references &&
                              !!errors.references[index]?.url
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.references && errors.references[index]?.url}
                          </Form.Control.Feedback>
                        </div>
                      ))}
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
      <ToastContainer />
    </Fragment>
  );
};

export default EditPublications;
