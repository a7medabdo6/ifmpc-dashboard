import React, { Fragment } from "react";
import { Breadcrumb, Button, Card, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import Searchable from "react-searchable-dropdown";

const FormlementsSizes = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Form Sizes</h2>
        <Breadcrumb >
          <Breadcrumb.Item href="#">Forms</Breadcrumb.Item>
          <Breadcrumb.Item active>Form Sizes </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button
            type="button"
            variant="white"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button
            type="button"
            variant="white"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button type="button"
            variant="primary"
            className="my-2 btn-icon-text">
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
            <div>
              <h6 className="main-content-label mb-1">Form Element Sizes</h6>
              <p className="text-muted card-sub-title">
                A basic form control input and textarea with disabled and
                readonly mode.
              </p>
            </div>
            <Row className="row-sm">
              <Col xl={12}>
                <p> Form control small Size </p>
                <InputGroup size="sm">
                  <FormControl />
                </InputGroup>
                <br />
              </Col>
              <Col xl={12}>
                <p> Form Control Medium Size</p>
                <InputGroup size="md">
                  <FormControl />
                </InputGroup>
                <br />
              </Col>

              <Col xl={12}>
                <p> Form Control Large size</p>
                <InputGroup size="lg">
                  <FormControl />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Checkboxes sizes</h6>
              <p className="text-muted card-sub-title">
                A basic Checkboxes sizes in default,medium and large.
              </p>
            </div>
            <Row>
              <Col xl={4}>
                <Form.Group className="m-0">
                  <Form.Label className="mb-4">Checkboxes</Form.Label>
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked=""
                      />
                      <span className="custom-control-label">Option 1</span>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label">Option 2</span>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled="disabled"
                      />
                      <span className="custom-control-label">
                        Option Disabled
                      </span>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked="checked"
                        disabled="disabled"
                      />
                      <span className="custom-control-label">
                        Option Disabled Checked
                      </span>
                    </label>
                  </div>
                </Form.Group>
              </Col>
              <Col xl={4} className="mt-4 mt-xl-0">
                <Form.Group className="m-0">
                  <Form.Label className="mb-4">Checkboxes Medium Sizes</Form.Label>
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-checkbox custom-control-md">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked=""
                      />
                      <span className="custom-control-label custom-control-label-md  tx-16">
                        Option 1
                      </span>
                    </label>
                    <label className="custom-control custom-checkbox custom-control-md">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-md  tx-16">
                        Option 2
                      </span>
                    </label>
                    <label className="custom-control custom-checkbox custom-control-md">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled="disabled"
                      />
                      <span className="custom-control-label custom-control-label-md  tx-16">
                        Option Disabled
                      </span>
                    </label>
                    <label className="custom-control custom-checkbox custom-control-md">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked="checked"
                        disabled="disabled"
                      />
                      <span className="custom-control-label custom-control-label-md  tx-16">
                        Option Disabled checked
                      </span>
                    </label>
                  </div>
                </Form.Group>
              </Col>
              <Col xl={4} className="mt-4 mt-xl-0">
                <Form.Group className="m-0">
                  <Form.Label className="mb-4">Checkboxes Large Size</Form.Label>
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-checkbox custom-control-lg">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked=""
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option 1
                      </span>
                    </label>
                    <label className="custom-control custom-checkbox custom-control-lg">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option 2
                      </span>
                    </label>
                    <label className="custom-control custom-checkbox custom-control-lg">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled="disabled"
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option Disabled
                      </span>
                    </label>
                    <label className="custom-control custom-checkbox custom-control-lg">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked="checked"
                        disabled="disabled"
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option Disabled Checked
                      </span>
                    </label>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Radio Sizes</h6>
              <p className="text-muted card-sub-title">
                A basic Radio buttons sizes in default,medium and large.
              </p>
            </div>
            <Row>
              <Col xl={4}>
                <div className="form-group ">
                  <div className="form-label">Radios</div>
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option1"
                        defaultChecked=""
                      />
                      <span className="custom-control-label">Option 1</span>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option2"
                      />
                      <span className="custom-control-label">Option 2</span>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option3"
                        disabled="disabled"
                      />
                      <span className="custom-control-label">
                        Option Disabled
                      </span>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios02"
                        value="option4"
                        disabled="disabled"
                        defaultChecked="checked"
                      />
                      <span className="custom-control-label">
                        Option Disabled Checked
                      </span>
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl={4} className="mt-4 mt-xl-0">
                <div className="form-group ">
                  <div className="form-label">Medium Radios</div>
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-radio custom-control-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option1"
                        defaultChecked=""
                      />
                      <span className="custom-control-label custom-control-label-md  tx-16">
                        Option 1
                      </span>
                    </label>
                    <label className="custom-control custom-radio custom-control-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-md  tx-16">
                        Option 2
                      </span>
                    </label>
                    <label className="custom-control custom-radio custom-control-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option3"
                        disabled="disabled"
                      />
                      <span className="custom-control-label custom-control-label-md  tx-16">
                        Option Disabled
                      </span>
                    </label>
                    <label className="custom-control custom-radio custom-control-md">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios12"
                        value="option4"
                        disabled="disabled"
                        defaultChecked="checked"
                      />
                      <span className="custom-control-label custom-control-label-md  tx-16">
                        Option Disabled Checked
                      </span>
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl={4} className="mt-4 mt-xl-0">
                <div className="form-group ">
                  <div className="form-label">Large Radios</div>
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-radio custom-control-lg">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option1"
                        defaultChecked=""
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option 1
                      </span>
                    </label>
                    <label className="custom-control custom-radio custom-control-lg">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-lg tx-20">
                        Option 2
                      </span>
                    </label>
                    <label className="custom-control custom-radio custom-control-lg">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option3"
                        disabled="disabled"
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option Disabled
                      </span>
                    </label>
                    <label className="custom-control custom-radio custom-control-lg">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios22"
                        value="option4"
                        disabled="disabled"
                        defaultChecked="checked"
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option Disabled Checked
                      </span>
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">
                Check Box Sizes Switches
              </h6>
              <p className="text-muted card-sub-title">
                Check Box Switches sizes in default,medium and large.
              </p>
            </div>
            <Row>
              <Col xl={4}>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox1"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description tx-16 me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox1"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description  tx-20 me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox1"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                  </label>
                </div>
              </Col>
              <Col xl={4} className="mt-4 mt-xl-0">
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox2"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-square"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description  tx-16 me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox2"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-md custom-square"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description tx-20 me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox2"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg custom-square"></span>
                  </label>
                </div>
              </Col>
              <Col xl={4} className="mt-4 mt-xl-0">
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox3"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-radius"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description  tx-16 me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox3"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-md custom-radius"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description tx-20 me-2">
                      Check Box
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox3"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg custom-radius"></span>
                  </label>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">
                Radio Buttons Sizes Switches
              </h6>
              <p className="text-muted card-sub-title">
                Radio Buttons Switches sizes in default,medium and large.
              </p>
            </div>
            <Row>
              <Col xl={4}>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description  tx-16 me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description  tx-20 me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                  </label>
                </div>
              </Col>
              <Col xl={4} className="mt-4 mt-xl-0">
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio1"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-square"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description tx-16 me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio1"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-md custom-square"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description tx-20 me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio1"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg custom-square"></span>
                  </label>
                </div>
              </Col>
              <Col xl={4} className="mt-4 mt-xl-0">
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio2"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-radius"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description tx-16 me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio2"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-md custom-radius"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="custom-switch">
                    <span className="custom-switch-description tx-20 me-2">
                      Radio Buttons
                    </span>
                    <input
                      type="radio"
                      name="custom-switch-radio2"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg custom-radius"></span>
                  </label>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!--Row--> */}
    <Row>
      <Col xl={12} md={12} className="col-xl-12 col-md-12">
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">
                Form Elements With Sizes
              </h6>
              <p className="text-muted card-sub-title">
                Form Elements With Sizes in sma,medium and large
              </p>
            </div>
            <Row className="p-0 m-0">
              <Col xl={12} className=" p-0">
                <div className="form-label mb-2 p-0">
                  Form-control small sizes
                </div>
              </Col>
              <Col xxl={3} className="p-0">
                <div className="form-group">
                  <input
                    className="form-control form-control-sm"
                    placeholder="from-control-sm"
                    type="text"
                  />
                </div>
              </Col>
              <Col xxl={3} >
                <div className="form-group select2 select2-sm">
                <Searchable className="form-control select2"
                value="test"
                placeholder="Choose only one" // by default "Search"
                notFoundText="No result found" // by default "No result found"
                noInput
                options={[
                    {
                        value: "one",
                        label: "One"

                    },
                    {
                        value: "two",
                        label: "Two"

                    },
                    {
                        value: "three",
                        label: "Three"

                    },


                ]}
                onSelect={(value) => {
                    // console.log(value);
                }}
                listMaxHeight={140} //by default 140
            />
                </div>
              </Col>
              <Col xxl={2} className="px-1">
                <label className="custom-control custom-radio custom-control">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="example-radios1"
                    value="option1"
                    defaultChecked=""
                  />
                  <span className="custom-control-label custom-control-label  tx-16">
                    Radio example
                  </span>
                </label>
              </Col>
              <Col xxl={2} className="px-1">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                    defaultChecked=""
                  />
                  <span className="custom-control-label">check example</span>
                </label>
              </Col>
              <Col xxl={2} className="px-1">
                <label className="custom-switch form-switch mb-0  p-0">
                  <input
                    type="checkbox"
                    name="custom-switch-radio"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator"></span>
                  <span className="custom-switch-description">
                    Toggle example
                  </span>
                </label>
              </Col>
            </Row>
            <Row className="p-0 m-0">
              <Col xl={12} className=" p-0">
                <div className="form-label mb-2 p-0">
                  Form-control Medium sizes
                </div>
              </Col>
              <Col xxl={3} className="p-0">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="from-control"
                    type="text"
                  />
                </div>
              </Col>
              <Col xxl={3} >
                <div className="form-group select2 select2-md">
                <Searchable className="form-control select2"
                value="test"
                placeholder="Choose only one" // by default "Search"
                notFoundText="No result found" // by default "No result found"
                noInput
                options={[
                    {
                        value: "one",
                        label: "One"

                    },
                    {
                        value: "two",
                        label: "Two"

                    },
                    {
                        value: "three",
                        label: "Three"

                    },


                ]}
                onSelect={(value) => {
                    // console.log(value);
                }}
                listMaxHeight={140} //by default 140
            />
                </div>
              </Col>
              <Col xxl={2} className="px-1">
                <div className="form-group">
                  <label className="custom-control custom-radio custom-control-md">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="example-radios1"
                      value="option1"
                      defaultChecked=""
                    />
                    <span className="custom-control-label custom-control-label-md  tx-16">
                      Radio example
                    </span>
                  </label>
                </div>
              </Col>
              <Col xxl={2} className="px-1">
                <div className="form-group">
                  <label className="custom-control custom-checkbox custom-control-md">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox1"
                      value="option1"
                      defaultChecked=""
                    />
                    <span className="custom-control-label custom-control-label-md  tx-16">
                      check example
                    </span>
                  </label>
                </div>
              </Col>
              <Col xxl={2} className="px-1">
                <div className="form-group">
                  <label className="custom-switch form-switch mb-0  p-0">
                    <input
                      type="checkbox"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                    <span className="custom-switch-description">
                      Toggle example
                    </span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row className="p-0 m-0">
              <Col xl={12} className=" p-0">
                <div className="form-label mb-2 p-0">
                  Form-control Large sizes
                </div>
              </Col>
              <Col xxl={3} className="p-0">
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="from-control-lg"
                    type="text"
                  />
                </div>
              </Col>
              <Col xxl={3} >
                <div className="form-group select2-lg">
                <Searchable className="form-control select2"
                value="test"
                placeholder="Choose only one" // by default "Search"
                notFoundText="No result found" // by default "No result found"
                noInput
                options={[
                    {
                        value: "one",
                        label: "One"

                    },
                    {
                        value: "two",
                        label: "Two"

                    },
                    {
                        value: "three",
                        label: "Three"

                    },


                ]}
                onSelect={(value) => {
                    // console.log(value);
                }}
                listMaxHeight={140} //by default 140
            />
                </div>
              </Col>
              <Col xxl={2} className="px-1">
                <div className="form-group">
                  <label className="custom-control custom-radio custom-control-lg">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="example-radios1"
                      value="option1"
                      defaultChecked=""
                    />
                    <span className="custom-control-label custom-control-label-lg  tx-16">
                      Radio example
                    </span>
                  </label>
                </div>
              </Col>
              <Col xxl={2} className="px-1">
                <div className="form-group">
                  <label className="custom-control custom-checkbox custom-control-lg">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox1"
                      value="option1"
                      defaultChecked=""
                    />
                    <span className="custom-control-label custom-control-label-lg  tx-20">
                      check example
                    </span>
                  </label>
                </div>
              </Col>
              <Col xxl={2} className="px-1">
                <div className="form-group">
                  <label className="custom-switch form-switch mb-0  p-0">
                    <input
                      type="checkbox"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                    <span className="custom-switch-description">
                      Toggle example
                    </span>
                  </label>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

FormlementsSizes.propTypes = {};

FormlementsSizes.defaultProps = {};

export default FormlementsSizes;
