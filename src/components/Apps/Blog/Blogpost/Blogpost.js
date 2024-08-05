import React, { Fragment } from 'react';
import { Breadcrumb, Card, Col, Row, Button, Form } from 'react-bootstrap';
import Searchable from "react-searchable-dropdown";
import { Link } from 'react-router-dom';
import { QuillEditor } from '../../../Forms/FormEditor/QuillEditor';

const Blogpost = () => {
const TitleOptions= [

        {
          value: "fashion",
          label: "Fashion"
        },
        {
          value: "lifestyle",
          label: "Life Style"
        },
        {
          value: "science",
          label: "Science"
        },
        {
          value: "health",
          label: "health"
        },
        {
          value: "humanities",
          label: "humanities"
        },
        {
          value: "business",
          label: "Business"
        },
        {
          value: "marketing",
          label: "Marketing"
        },

      ]
      return(
    
        <Fragment>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Blog-Post</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Advanced UI</Breadcrumb.Item>
                        <Breadcrumb.Item active>Blog-Post</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="d-flex">
                    <div className="justify-content-center">
                        <Button type="button"
                            variant='white'
                            className="btn-icon-text my-2 me-2">
                            <i className="fe fe-download me-2"></i> Import
                        </Button>
                        <Button type="button"
                            variant='white'
                            className="btn-icon-text my-2 me-2">
                            <i className="fe fe-filter me-2"></i> Filter
                        </Button>
                        <Button type="button"
                            variant="primary" className="my-2 btn-icon-text">
                            <i className="fe fe-download-cloud me-2"></i> Download Report
                        </Button>
                    </div>
                </div>
            </div>
            {/* <!-- End Page Header --> */}
    
            {/* <!-- Row --> */}
            <Row className="row-sm">
                <Col lg={12} md={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <Form.Group className="form-group">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" className="form-control" defaultValue="Title" />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Searchable className="form-control select2"
            value="test"
            placeholder="Category" // by default "Search"
            notFoundText="No result found" // by default "No result found"
            noInput
            options={TitleOptions}
            onSelect={(value) => {
              // console.log(value);
            }}
            listMaxHeight={140} //by default 140
          />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label>Type</Form.Label>
                                <div className="d-md-flex ad-post-details">
                                    <label className="custom-radio mb-2 me-4">
                                        <Form.Check
                                            label="Image"
                                            type="radio" name="radios2" defaultValue="option1" />
    
                                    </label>
                                    <label className="custom-radio  mb-2 me-4">
                                        <Form.Check
                                            label="Video"
                                            type="radio" name="radios2" defaultValue="option2" defaultChecked />
    
                                    </label>
                                    <label className="custom-radio mb-2 me-4">
                                        <Form.Check
                                            label="Audio"
                                            type="radio" name="radios2" defaultValue="option3" />
    
                                    </label>
                                    <label className="custom-radio mb-2">
                                        <Form.Check
                                            label="Text"
                                            type="radio" name="radios2" defaultValue="option4" />
    
                                    </label>
                                </div>
                            </Form.Group>
                            <div className="ql-wrapper ql-wrapper-demo mb-3">
                                <label>Post Description</label>
                                <div id="quillEditor">
                                    <QuillEditor />
                                </div>
                            </div>
                            <label>Upload File</label>
                            <div className="p-4 border rounded-6 mb-4 form-group">
                                <div>
                                    <Form.Control id="demo" type="file" name="files" accept="image/jpg, image/jpeg, image/png, text/html, application/zip, text/css, text/js" multiple />
    
                                </div>
                            </div>
    
                        </Card.Body>
                        <Card.Footer className="mb-1">
                            <Link to="#" className="btn btn-primary me-1">Post</Link>
                            <Link to="#" className="btn btn-danger me-1">Cancel</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End Row --> */}
        </Fragment>
    );
}


Blogpost.propTypes = {};

Blogpost.defaultProps = {};

export default Blogpost;
