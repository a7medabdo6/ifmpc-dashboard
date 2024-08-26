import React, { Fragment, useState } from "react";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { Formik, FieldArray } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { useCreateProject, useCreateProjectImage } from "../../../../Api/Projects";
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
    image: yup.string().url("Invalid URL").required("Image URL is required"),
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
            image: yup.string().url("Invalid URL").required("Image URL is required"),
        })
    ),
    // file: yup.mixed().nullable().test(
    //   "fileSize",
    //   "File size is too large",
    //   (value) => !value || (value && value.size <= 5 * 1024 * 1024) // Max 5MB
    // ).test(
    //   "fileType",
    //   "Unsupported File Format",
    //   (value) => !value || (value && ["image/jpeg", "image/png"].includes(value.type))
    // ),
});

const AddProjects = () => {
    const { mutate, isLoading, error } = useCreateProject();
    const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();


    const { data } = useTags();
    const { data: AuthorData } = useUsers();
    const { data: dataOfCategory } = useCategories();
    const { data: authorsData } = useAuthors();
    const [file, setFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    console.log(uploadedImageUrl);

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


    const handleSubmit = (values, { setSubmitting }) => {
        // Prevent default form submission
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();

        const projectData = {
            name: values.name,
            name_en: values.name_en,
            name_ar: values.name_ar,
            content: values.content,
            content_en: values.content_en,
            content_ar: values.content_ar,
            image: values.image,
            popularity_count: values.popularity_count,
            category: values.category,
            author: values.author,
            tags: values.tags,
            references: values.references,
            images: values.images,
        };

        mutate(projectData, {
            onSuccess: () => console.log("Data submitted successfully"),
            onError: (error) => console.log("Error submitting data:", error),
        });

        // If using setSubmitting, you might want to set it to false after submission
        setSubmitting(false);
    };


    const handleCopyUrl = () => {
        navigator.clipboard.writeText(uploadedImageUrl)
            .then(() => alert("Image URL copied to clipboard!"))
            .catch(() => alert("Failed to copy URL."));
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
                                image: "", // Default image URL
                                popularity_count: 0,
                                category: "",
                                author: [],
                                tags: [],
                                references: [],
                                images: [],
                                // file: null,
                            }}
                        >
                            {({ setFieldValue, values }) => (
                                <Form>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Name</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Enter project name"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>English Name</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control
                                                type="text"
                                                name="name_en"
                                                placeholder="Enter project name in English"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Arabic Name</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control
                                                type="text"
                                                name="name_ar"
                                                placeholder="Enter project name in Arabic"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Content</Form.Label>
                                        <Col sm={10}>
                                            <ReactQuill
                                                value={values.content}
                                                onChange={(value) => setFieldValue("content", value)}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>English Content</Form.Label>
                                        <Col sm={10}>
                                            <ReactQuill
                                                value={values.content_en}
                                                onChange={(value) => setFieldValue("content_en", value)}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Arabic Content</Form.Label>
                                        <Col sm={10}>
                                            <ReactQuill
                                                value={values.content_ar}
                                                onChange={(value) => setFieldValue("content_ar", value)}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Image URL</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control
                                                type="text"
                                                name="image"
                                                placeholder="Enter image URL"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Popularity Count</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control
                                                type="number"
                                                name="popularity_count"
                                                placeholder="Enter popularity count"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Category</Form.Label>
                                        <Col sm={10}>
                                            <Select
                                                options={categoryOptions}
                                                onChange={(option) => setFieldValue("category", option.value)}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Authors</Form.Label>
                                        <Col sm={10}>
                                            <Select
                                                isMulti
                                                options={AuthorsOptions}
                                                onChange={(options) => setFieldValue("author", options.map(option => option.value))}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Tags</Form.Label>
                                        <Col sm={10}>
                                            <Select
                                                isMulti
                                                options={tagOptions}
                                                onChange={(options) => setFieldValue("tags", options.map(option => option.value))}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <FieldArray
                                        name="references"
                                        render={({ push, remove }) => (
                                            <div>
                                                {values.references.map((reference, index) => (
                                                    <div key={index} className="mb-3">
                                                        <Form.Group as={Row}>
                                                            <Form.Label column sm={2}>Reference {index + 1} Name</Form.Label>
                                                            <Col sm={10}>
                                                                <Form.Control
                                                                    type="text"
                                                                    name={`references[${index}].name`}
                                                                    placeholder="Enter reference name"
                                                                />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row}>
                                                            <Form.Label column sm={2}>Reference {index + 1} URL</Form.Label>
                                                            <Col sm={10}>
                                                                <Form.Control
                                                                    type="text"
                                                                    name={`references[${index}].url`}
                                                                    placeholder="Enter reference URL"
                                                                />
                                                            </Col>
                                                        </Form.Group>
                                                        <Button variant="danger" onClick={() => remove(index)}>Remove</Button>
                                                    </div>
                                                ))}
                                                <Button variant="primary" onClick={() => push({ name: "", url: "" })}>Add Reference</Button>
                                            </div>
                                        )}
                                    />

                                    <FieldArray
                                        name="images"
                                        render={({ push, remove }) => (
                                            <div>
                                                {values.images.map((imageObj, index) => (
                                                    <div key={index} className="mb-3">
                                                        <Form.Group as={Row}>
                                                            <Form.Label column sm={2}>Image {index + 1} URL</Form.Label>
                                                            <Col sm={10}>
                                                                <Form.Control
                                                                    type="text"
                                                                    name={`images[${index}].image`}
                                                                    placeholder="Enter image URL"
                                                                />
                                                            </Col>
                                                        </Form.Group>
                                                        <Button variant="danger" onClick={() => remove(index)}>Remove</Button>
                                                    </div>
                                                ))}
                                                <Button variant="primary" onClick={() => push({ image: "" })}>Add Image</Button>
                                            </div>
                                        )}
                                    />

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={2}>Upload Image</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control
                                                type="file"
                                                accept="image/jpeg,image/png"
                                                onChange={handleFileChange}
                                            />
                                        </Col>
                                        <Button variant="primary" onClick={handleUpload}>upload Image</Button>

                                    </Form.Group>
                                    {uploadedImageUrl && (
                                        <div className="mb-3">
                                            <p>Uploaded Image URL: <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer">{uploadedImageUrl}</a></p>
                                            <Button variant="secondary" onClick={handleCopyUrl}>Copy URL</Button>
                                        </div>
                                    )}
                                    <Button type="submit" disabled={isLoading} variant="primary">
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
