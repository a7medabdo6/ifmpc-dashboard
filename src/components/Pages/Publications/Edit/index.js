import React, { Fragment, useEffect, useState, useRef } from "react";
import { Breadcrumb, Button, Col, Row, Spinner } from "react-bootstrap";
import { Formik, FieldArray } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import {
  useEditPublication,
  useOnePublication,
} from "../../../../Api/Publications";
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
import { useParams } from "react-router-dom";
import ReactQuillCommon from "../../../Utilities/ReactQuillCommon/ReactQuillCommon";

// Define validation schema using yup
const schema = yup.object().shape({
  name_en: yup.string().required("English name is required"),
  // name_ar: yup.string().required("Arabic name is required"),
  content_en: yup.string().required("English content is required"),
  // content_ar: yup.string().required("Arabic content is required"),
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
  language: yup.number().required(),
  custom_created_at: yup.string(), // يمكن أن تكون سلسلة أو غير موجودة

});

const EditPublications = () => {
  const { id } = useParams();
  const [valueAlignDes, setvalueAlignDes] = useState("center");

  const { mutate, isLoading, error, data: dataEdit } = useEditPublication();
  const location = useLocation();
  // const id = location.state?.id;
  const { data } = useTags();
  const { data: AuthorData } = useUsers();
  const { data: dataOfCategory } = useCategories();
  const { data: authorsData } = useAuthors();
  const { data: dataone, isLoading: isLoadingOne } = useOnePublication(id);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const languageOptions = [
    { id: 1, language: "en", label: "English" },
    { id: 2, language: "ar", label: "Arabic" },
    { id: 3, language: "both", label: "Both" },
  ];
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
    if (dataEdit) {
      toast.success("This item has been successfully edited.");

      // تأخير الانتقال لمدة 2 ثانية (2000 مللي ثانية)
      navigate("/pages/publications/");
    }
  }, [dataEdit, navigate]);
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
  //   const quill = quillRef?.current?.getEditor();

  //   if (quill) { // Ensure quill is defined
  //     const editor = quill.root;
  //     if (dataone?.content_ar && dataone) {
  //       console.log(dataone?.content_ar);
  //       editor.setAttribute('dir', 'rtl'); // Set text direction to RTL
  //     } else {
  //       editor.setAttribute('dir', 'ltr'); // Default to LTR
  //     }
  //   }
  // }, [dataone?.content_ar, dataone]);
  if (!dataone) {
    return <div>loading...</div>;
  }
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
                name_en: dataone?.name_en || "",
                // name_ar: dataone?.name_ar || "",
                content_en: dataone?.content_en || "",
                // content_ar: dataone?.content_ar || "",
                popularity_count: dataone?.popularity_count || 0,
                category:
                  dataone?.category?.id ||
                  (categoryOptions.length > 0 ? categoryOptions[0].value : ""),
                author:
                  dataone?.author.map((a) => a.id) ||
                  (authorsData?.results.length > 0
                    ? [authorsData.results[0].id]
                    : []),
                tags:
                  dataone?.tags.map((t) => t.id) ||
                  (tagOptions.length > 0 ? [tagOptions[0].value] : []),
                // references: dataone?.references || [{ name: "", url: "" }],
                language: dataone?.language || 2, // Default value for language select
                custom_created_at: dataone?.custom_created_at || "", // أضف هذا الحقل

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
                            value={
                              languageOptions.filter(
                                (item) => item?.id == values.language
                              )[0]
                            }
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
      type="date"
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
                          textDirection="ltr" // تمرير اتجاه النص هنا
                          textDes={values.content_en}
                          setTextDes={(value) =>
                            setFieldValue("content_en", value)
                          }
                          title="Description"
                          setvalueAlignDes={setvalueAlignDes} // If required for alignment
                        />
                        {/* <ReactQuill
                          value={values.content_en}
                          onChange={(value) =>
                            setFieldValue("content_en", value)
                          }
                          theme="snow"
                          modules={modules}
                        /> */}
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
                        <ReactQuillCommon
                          textDirection="rtl" // تمرير اتجاه النص هنا
                          textDes={values.content_ar}
                          setTextDes={(value) =>
                            setFieldValue("content_ar", value)
                          }
                          title="Description"
                          setvalueAlignDes={setvalueAlignDes} // If required for alignment
                        />
                        {/* <ReactQuill
                          value={values.content_ar}
                          onChange={(value) =>
                            setFieldValue("content_ar", value)
                          }
                          theme="snow"
                          className="react-quill"
                          modules={modules}
                          ref={quillRef}        
                                                  /> */}
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
                        style={{ display: "none" }}
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
                          isInvalid={
                            touched.popularity_count &&
                            !!errors.popularity_count
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
                            setFieldValue("category", option.value)
                          }
                          isInvalid={touched.category && !!errors.category}
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
                          isInvalid={touched.author && !!errors.author}
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
                          isInvalid={touched.tags && !!errors.tags}
                        />
                        {touched.tags && errors.tags && (
                          <div className="invalid-feedback">{errors.tags}</div>
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
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default EditPublications;
