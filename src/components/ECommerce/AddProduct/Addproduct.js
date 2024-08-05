import { Fragment } from "react";
import { Breadcrumb, Button, Card, Col, FormGroup, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Searchable from "react-searchable-dropdown";
import { Materialui } from "../../Forms/AdvancedForms/Materialui";
import { QuillEditor } from "../../Forms/FormEditor/QuillEditor";
const AddProduct = () => {
const ProductCategory =[
    {
      value: "",
      label: "Choose One"

    },
    {
      value: "party-wear",
      label: "Party Wear"
    },
    {
      value: "causal-wear",
      label: "Causalwear"
    },
    {
      value: "wedding",
      label: "Wedding"
    },
    {
      value: "festival",
      label: "Fistival"
    },

  ]
  return(
  
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Add Product</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Ecommerce
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Add Product
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className="btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant="white"
              type="button"
              className="btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              variant="primary" type="button" className="my-2 btn-icon-text">
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
  
      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Product Name</Form.Label>
                <input type="text" className="form-control" placeholder="Name" />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Category</Form.Label>
                <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={ProductCategory}
        onSelect={(value) => {
          // console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Price</Form.Label>
                <input type="text" className="form-control" placeholder="Price" />
              </FormGroup>
              <div className="ql-wrapper ql-wrapper-demo mb-3">
                <Form.Label className="tx-medium">Product Description</Form.Label>
                <div id="quillEditor">
                  <QuillEditor />
  
                </div>
              </div>
              <Form.Label className="tx-medium">Upload Product</Form.Label>
              <div className="p-4 border rounded-6 mb-0 form-group">
                <div>
                  <Materialui />
                </div>
              </div>
            </Card.Body>
            <div className="card-footer">
              <Link to="#" className="btn btn-primary  me-1">
                Add Product
              </Link>
              <Link to="#" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

AddProduct.propTypes = {};

AddProduct.defaultProps = {};

export default AddProduct;
