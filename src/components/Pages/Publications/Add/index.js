import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Spinner } from "react-bootstrap";
import { Formik, FieldArray } from "formik";
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
  name_en: yup.string().required(),
  name_ar: yup.string().required(),
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
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

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
    setIsSubmitting(true);
    console.log("Submitting data:", data); // للتحقق من البيانات
    mutate(data, {
      onSuccess: () => {
        setIsSubmitting(false); // Reset submitting state
      },
      onError: (error) => {
        toast.error("Error submitting data:", error.message);
        setIsSubmitting(false); // Reset submitting state
      },
    });
  };
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (dataOfCreatePub) {
      toast.success("This item has been successfully Created.");

      navigate("/pages/publications/");
    }
  }, [dataOfCreatePub, navigate]);
  
  const modules = {
    toolbar: [
     [{ header: [1, 2, 3, 4, 5, 6, false] }],
     ["bold", "italic", "underline", "strike", "blockquote"],
     [{ align: ["right", "center", "justify"] }],
     [{ list: "ordered" }, { list: "bullet" }],
     ["link", "image"],
    ],
   };
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
                name_en: "",
                name_ar: "",
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
              }) => {
                const isFormValid = !Object.values(values).some(
                  (value) => value === "" || value === null
                );
                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    {/* Existing fields */}
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
                          isInvalid={!!errors.name_en && touched.name_en}
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
                          isInvalid={!!errors.name_ar && touched.name_ar}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name_ar}
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
                          onChange={(value) =>
                            setFieldValue("content_en", value)
                          }
                          theme="snow"
                          modules={modules}
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
                          onChange={(value) =>
                            setFieldValue("content_ar", value)
                          }
                          theme="snow"
                          modules={modules}
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
                          isInvalid={
                            !!errors.popularity_count &&
                            touched.popularity_count
                          }
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
                          name="category"
                          options={categoryOptions}
                          value={categoryOptions.find(
                            (option) => option.value === values.category
                          )}
                          onChange={(option) =>
                            setFieldValue("category", option?.value)
                          }
                          isInvalid={!!errors.category && touched.category}
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
                          isInvalid={!!errors.author && touched.author}
                        />
                        {touched.author && errors.author && (
                          <div className="invalid-feedback">
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
                          isInvalid={!!errors.tags && touched.tags}
                        />
                        {touched.tags && errors.tags && (
                          <div className="invalid-feedback">{errors.tags}</div>
                        )}
                      </Form.Group>
                      <Form.Group
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
                    {error && (
                      <div className="text-danger mt-3">{error.message}</div>
                    )}
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

export default AddPublications;
