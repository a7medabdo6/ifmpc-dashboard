import React, { Fragment, useState } from "react";
import { Modal, Button, Breadcrumb, Row, Col, Card } from "react-bootstrap";
// import { FromInlineEditEditor, Modalineditor, QuillEditor, QuillEditorwithbutton, Wrappers } from "../../../data/Forms/formeditors";
import { Link } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { QuillEditor } from "./QuillEditor";
import { FromInlineEditEditor } from "./FromInlineEditEditor";
import { Modalineditor } from "./Modalineditor";
import { QuillEditorwithbutton } from "./QuillEditorwithbutton";
import { Wrappers } from "./Wrappers";


function FormEditor() {
  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Form Editor</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Forms</Breadcrumb.Item>
            <Breadcrumb.Item active>Form Editor</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button variant="white" type="button" className=" btn-icon-text my-2 me-2">
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button variant="white" type="button" className=" btn-icon-text my-2 me-2">
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button variant="primary" type="button" className=" my-2 btn-icon-text" >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Quill Editor</h6>
                <p className="text-muted card-sub-title">
                  Quill is a modern Form editor built for compatibility and
                  extensibility. Replacement icons from default svg icons are
                  made from
                  <Link to="https://icons8.com/line-awesome"> Line Awesome</Link>
                </p>
              </div>
              <div className="ql-wrapper ql-wrapper-demo">
                <QuillEditor />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1"> From Inline-Edit Editor</h6>
              <p className="text-muted card-sub-title">
                From Inline-Edit Editor
              </p>
            </Card.Header>
            <Card.Body>
              <FromInlineEditEditor />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Quill Editor in Modal
                </h6>
                <p className="text-muted card-sub-title">
                  Quill text editor that wrap inside a modal.
                </p>
              </div>
              <Button
                variant="primary" onClick={handleShow}>
                View Live Demo
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Modalineditor />
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1">Save as MD File</h6>
              <p className="text-muted card-sub-title">
                Quill text editor that can be Save as MD File edit in a page.
              </p>
            </Card.Header>
            <Card.Body>
              <QuillEditorwithbutton />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1">Summernote Editor</h6>
              <p className="text-muted card-sub-title">
                Summernote Editor
              </p>
            </Card.Header>
            <Card.Body>
              <Wrappers />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

FormEditor.propTypes = {};

FormEditor.defaultProps = {};

export default FormEditor;
