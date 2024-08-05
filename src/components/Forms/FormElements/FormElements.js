import React, { Fragment, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
// import * as formelement from "../../../data/Forms/formelement";
import Slider from "@mui/material/Slider";
import DatePicker from "react-datepicker";
import Searchable from "react-searchable-dropdown";
import { DateMask } from "./DateMask";
import MaskInput from "react-maskinput";
import { Classicmethod } from "./Classicmethod";
import { Monolithmethod } from "./Monolithmethod";
import { Datepicker } from "./Datepicker";
import { Previousmonth } from "./Previousmonth";
import { Monthrange } from "./Monthrange";
import { Yearrange } from "./Yearrange";
import { SliderDisabled } from "./SliderDisabled";
import { Labelalwaysvisible } from "./Labelalwaysvisble";
import { MinimumDistanceSlider } from "./MinimumDistanceSlider";
import { Nonamethod1 } from "./Nonamethoddata.js";


const FormElements = () => {
  const [startDate, setStartDate] = useState(new Date());
  let [Switcher, setSwitcher] = useState('on');
  let [Switcher2, setSwitcher2] = useState('on');
  let [Switcher3, setSwitcher3] = useState('on');
  let [Switcher4, setSwitcher4] = useState('on');
  let [Switcher5, setSwitcher5] = useState('off');
  let [Switcher6, setSwitcher6] = useState('off');
  let [Switcher7, setSwitcher7] = useState('off');
  let [Switcher8, setSwitcher8] = useState('off');

const Selectinputsize =[
  {
    value: "czech republic",
    label: "Czech Republic"
  },
  {
    value: "germany",
    label: "Germany"
  },
  {
    value: "poland",
    label: "Poland"
  },
]
const Selectinputsizemd=[
  {
    value: "czech republic",
    label: "Czech Republic"
  },
  {
    value: "germany",
    label: "Germany"
  },
  {
    value: "poland",
    label: "Poland"
  },
]
const Selectinputsizelg=[
  {
    value: "czech republic",
    label: "Czech Republic"
  },
  {
    value: "germany",
    label: "Germany"
  },
  {
    value: "poland",
    label: "Poland"
  },
]
  const getText = (value) => `${value}`;
  const coustomMarks = [
    {
      label: "10",
      value: 10,
    },

    {
      label: "100",
      value: 100,
    },
  ];
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Form Elements</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Forms</Breadcrumb.Item>
            <Breadcrumb.Item active> Form Elements</Breadcrumb.Item>
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
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Form Input &amp; Textarea
                </h6>
                <p className="text-muted card-sub-title">
                  A basic form control input and textarea with disabled and
                  readOnly mode.
                </p>
              </div>
              <Row className="row-sm">
                <div className="col-lg">
                  <Form.Control placeholder="Input box" type="text" />
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control placeholder="Input box (readOnly)" readOnly type="text"
                  />
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control disabled placeholder="Input box (disabled)" type="text"
                  />
                </div>
              </Row>
              <Row className="row-sm mg-t-20">
                <div className="col-lg">
                  <Form.Control as="textarea" rows={3} placeholder="Textarea"></Form.Control>
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control as="textarea" rows={3} placeholder="Textarea (readOnly)" readOnly></Form.Control>
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control as="textarea" rows={3} disabled placeholder="Texarea (disabled)"
                  ></Form.Control>
                </div>
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
                <h6 className="main-content-label mb-1">Valid State Input</h6>
                <p className="text-muted card-sub-title">
                  A form control with success, warning and error state.
                </p>
              </div>
              <form className="needs-validation was-validated">
                <Row className="row-sm">
                  <Col lg={6} >
                    <Form.Group className=" has-success mg-b-0">
                      <Form.Control placeholder="Input box (success state)" required type="text"
                        defaultValue="This is input"
                      />
                      <textarea
                        className="form-control mg-t-20"
                        placeholder="Textarea (success state)"
                        defaultValue="This is textarea"
                        required=""
                        rows="3"
                      ></textarea>
                    </Form.Group>
                  </Col>
                  <Col lg={6} className=" mg-t-20 mg-lg-t-0">
                    <Form.Group className=" has-danger mg-b-0">
                      <Form.Control placeholder="Input box (invalid state)" required type="text"
                      />
                      <textarea
                        className="form-control mg-t-20"
                        placeholder="Textarea (invalid state)"
                        required
                        rows="3"
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Row>
              </form>
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
                  Default Form Input Fields with labels
                </h6>
                <p className="text-muted card-sub-title">
                  A form control with labels state.
                </p>
              </div>
              <Row className="row-sm">
                <Col md={6}>
                  <Form.Group className="form-group">
                    <p className="mg-b-10">Name</p>
                    <Form.Control
                      type="text" name="example-text-input" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <p className="mg-b-10">Disabled</p>
                    <Form.Control
                      type="text" name="example-disabled-input" placeholder="Disabled text area.." disabled
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <p className="mg-b-10">readOnly</p>
                    <Form.Control
                      type="text" name="example-disabled-input" placeholder="Read Only Text area." readOnly
                      disabled

                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="form-group">
                    <p className="mg-b-10">Valid Email</p>
                    <Form.Control
                      type="text"
                      className="form-control is-valid state-valid"
                      name="example-text-input-valid"
                      placeholder="Valid Email.."
                    />
                  </Form.Group>
                  <Form.Group className=" m-0">
                    <p className="mg-b-10">Invalid Number</p>
                    <Form.Control
                      type="text"
                      className="form-control is-invalid state-invalid"
                      name="example-text-input-invalid"
                      placeholder="Invalid Number.."
                    />
                    <div className="invalid-feedback">Invalid feedback</div>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <p className="mg-b-10">Password</p>
                    <Form.Control
                      type="password" name="example-password-input" placeholder="Password.." />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className=" mb-0">
                    <p className="mg-b-10">Message</p>
                    <Form.Control as="textarea" rows={4} />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Input Sizes</h6>
                <p className="text-muted card-sub-title">
                  A form control sizes in large,small Fields.
                </p>
              </div>
              <Form.Group className=" mb-3" >
                <Form.Control size="lg" type="text" placeholder="Large text" />
              </Form.Group>
              <Form.Group className=" mb-3">
                <Form.Control type="text" placeholder="Medium text" />
              </Form.Group>
              <Form.Group className=" mb-3">
                <Form.Control size="sm" type="text" placeholder="Small text" />
              </Form.Group>
            </Card.Body>
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Select Input Sizes</h6>
                <p className="text-muted card-sub-title">
                  A Select input sizes in large,small Fields.
                </p>
              </div>
              <Form.Group className="form-group select2-lg">
              <Searchable className="form-control select2 "
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={Selectinputsizelg}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
              </Form.Group>
              <Form.Group className="form-group select2-md">
              <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={Selectinputsizemd}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
              </Form.Group>
              <Form.Group className="form-group select2-sm">
              <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={Selectinputsize}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
              </Form.Group>
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
                <h6 className="main-content-label mb-1">Switch & Colors </h6>
                <p className="text-muted card-sub-title">
                  A form control sizes in large,small Fields.
                </p>
              </div>
              <Row className="row-sm">
                <Col lg={4}>
                  <Form.Group className="form-group">
                    <p className="mb-2">Toggle switch single</p>
                    <label className="custom-switch">
                      <Form.Check
                        type="switch"
                        name="custom-switch-checkbox"
                        label="I agree with terms and conditions"
                      // className="custom-switch-input"
                      />

                      <span className="custom-switch-description">
                      </span>
                    </label>
                    <p className="mt-4 mb-2">
                      Toggle switch single defaultChecked
                    </p>
                    <label className="custom-switch">
                      <Form.Check
                        type="switch"
                        name="custom-switch-checkbox"
                        label="I agree with terms and conditions"
                        // className="custom-switch-input"
                        defaultChecked
                      />
                      <span className="custom-switch-description">
                      </span>
                    </label>
                  </Form.Group>
                </Col>
                <div className="col-lg-8">
                  <Form.Group className=" ">
                    <p className="mb-2">Your skills</p>
                    <div className="selectgroup selectgroup-pills">
                      <label className="selectgroup-item ">
                        <Form.Control
                          type="checkbox"
                          name="defaultValue"
                          defaultValue="HTML"
                          className="selectgroup-input"
                          defaultChecked=""
                        />
                        <span className="selectgroup-button">HTML</span>
                      </label>
                      <label className="selectgroup-item">
                        <Form.Control
                          type="checkbox"
                          name="defaultValue"
                          defaultValue="CSS"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">CSS</span>
                      </label>
                      <label className="selectgroup-item">
                        <Form.Control
                          type="checkbox"
                          name="defaultValue"
                          defaultValue="PHP"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">PHP</span>
                      </label>
                      <label className="selectgroup-item">
                        <Form.Control
                          type="checkbox"
                          name="defaultValue"
                          defaultValue="JavaScript"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">JavaScript</span>
                      </label>
                      <label className="selectgroup-item">
                        <Form.Control
                          type="checkbox"
                          name="defaultValue"
                          defaultValue="Angular"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">Angular</span>
                      </label>
                      <label className="selectgroup-item">
                        <Form.Control
                          type="checkbox"
                          name="defaultValue"
                          defaultValue="Java"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">Java</span>
                      </label>
                      <label className="selectgroup-item">
                        <Form.Control
                          type="checkbox"
                          name="defaultValue"
                          defaultValue="C++"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">C++</span>
                      </label>
                    </div>
                  </Form.Group>
                  <Form.Group className=" m-0">
                    <p className="mb-2">Select Color</p>
                    <div className="d-flex">
                      <div >
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="azure"
                            className="colorinput-input"
                            defaultChecked
                          />
                          <span className="colorinput-color bg-primary"></span>
                        </label>
                      </div>
                      <div >
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="indigo"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-indigo"></span>
                        </label>
                      </div>
                      <div >
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="purple"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-purple"></span>
                        </label>
                      </div>
                      <div >
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="pink"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-pink"></span>
                        </label>
                      </div>
                      <div >
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="red"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-danger"></span>
                        </label>
                      </div>
                      <div >
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="orange"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-orange"></span>
                        </label>
                      </div>
                      <div >
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="yellow"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-warning"></span>
                        </label>
                      </div>
                      <div className="d-none d-sm-block">
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="lime"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-info"></span>
                        </label>
                      </div>
                      <div className="d-none d-sm-block">
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="green"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-success"></span>
                        </label>
                      </div>
                      <div className="d-none d-sm-block">
                        <label className="colorinput">
                          <Form.Control
                            name="color"
                            type="checkbox"
                            defaultValue="teal"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-teal"></span>
                        </label>
                      </div>
                    </div>
                  </Form.Group>
                </div>
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
                  Custom Checkboxes &amp; Radios
                </h6>
                <p className="text-muted card-sub-title">
                  A custom styled checkboxes and radios.
                </p>
              </div>
              <Row className="row-sm">
                <Col lg={3}>
                  <Form.Check type="checkbox"
                    label="Checkbox UndefaultChecked"
                  />
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <Form.Check defaultChecked type="checkbox"
                    label="Checkbox defaultChecked" />
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <Form.Check disabled type="checkbox"
                    label="Checkbox Disabled"
                  />
                </Col>
              </Row>
              <Row className="mg-t-10">
                <Col lg={3}>
                  <Form.Check name="rdio" type="radio"
                    label="Radio UndefaultChecked"
                  />
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <Form.Check defaultChecked name="rdio" type="radio"
                    label="Radio defaultChecked"
                  />
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <Form.Check disabled name="rdio" type="radio"
                    label="Radio Disabled"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col lg={6} className=" col-md-12">
          <Card className="custom-card">
            <Card.Body>
              <div className="main-content-label mg-b-5">File Browser</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <Row className="row-sm">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="input-group file-browser">
                    <Form.Control
                      type="text"
                      className="form-control border-end-0 browse-file"
                      placeholder="choose"
                      readOnly
                    />
                    <label className="input-group-btn">
                      <span className="btn btn-primary">
                        Browser
                        <Form.Control type="file" style={{ display: "none" }} multiple />
                      </span>
                    </label>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className=" col-md-12">
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Toggle Switches</h6>
                <p className="text-muted card-sub-title">
                  A custom made toggles with jquery support.
                </p>
              </div>
              <div className="main-toggle-group-demo">
                <div className={`main-toggle ${Switcher}`} onClick={() => { Switcher === "on" ? setSwitcher("off") : setSwitcher("on") }}>
                  <span></span>
                </div>
                <div className={`main-toggle  main-toggle-secondary  ${Switcher2}`} onClick={() => { Switcher2 === "on" ? setSwitcher2("off") : setSwitcher2("on") }}>
                  <span></span>
                </div>
                <div className={`main-toggle  main-toggle-success  ${Switcher3}`} onClick={() => { Switcher3 === "on" ? setSwitcher3("off") : setSwitcher3("on") }}>
                  <span></span>
                </div>
                <div className={`main-toggle  main-toggle-dark  ${Switcher4}`} onClick={() => { Switcher4 === "on" ? setSwitcher4("off") : setSwitcher4("on") }}>
                  <span></span>
                </div>
              </div>
              <div className="main-toggle-group-demo mg-t-10">
                <div className={`main-toggle  ${Switcher5}`} onClick={() => { Switcher5 === "on" ? setSwitcher5("off") : setSwitcher5("on") }}>
                  <span></span>
                </div>
                <div className={`main-toggle main-toggle-secondary ${Switcher6}`} onClick={() => { Switcher6 === "on" ? setSwitcher6("off") : setSwitcher6("on") }}>
                  <span></span>
                </div>
                <div className={`main-toggle main-toggle-success ${Switcher7}`} onClick={() => { Switcher7 === "on" ? setSwitcher7("off") : setSwitcher7("on") }}>
                  <span></span>
                </div>
                <div className={`main-toggle main-toggle-dark ${Switcher8}`} onClick={() => { Switcher8 === "on" ? setSwitcher8("off") : setSwitcher8("on") }}>
                  <span></span>
                </div>
              </div>
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
                <h6 className="main-content-label mb-1">Input Groups</h6>
                <p className="text-muted card-sub-title">
                  Easily extend form controls by adding text, buttons, or button
                  groups on either side of textual inputs.
                </p>
              </div>
              <Row className="row-sm">
                <Col lg={4}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="input-group-text" id="basic-addon1">
                      @
                    </InputGroup.Text>
                    <Form.Control
                      aria-describedby="basic-addon1"
                      aria-label="Username"
                      placeholder="Username" type="text" />
                  </InputGroup>
                </Col>
                <Col lg={4}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      aria-describedby="basic-addon2"
                      aria-label="Recipient's username"
                      placeholder="Recipient's username" type="text" />
                    <InputGroup.Text className="input-group-text" id="basic-addon2">
                      @example.com
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col lg={4}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="input-group-text">$</InputGroup.Text>
                    <Form.Control
                      aria-label="Amount (to the nearest dollar)"
                      className="form-control"
                      type="text"
                    />
                    <span className="input-group-text bd-r">.00</span>
                  </InputGroup>
                </Col>
              </Row>
              <Row className="row-sm">
                <Col lg={4}>
                  <InputGroup className="mb-3 inputgroup-toggles">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <Form.Control aria-label="Text input with checkbox" />
                  </InputGroup>
                </Col>
                <Col lg={4} className="mg-t-20 mg-lg-t-0">
                  <InputGroup className=" inputgroup-toggles">
                    <InputGroup.Radio aria-label="Radio button for following text input" />
                    <Form.Control aria-label="Text input with radio button" />
                  </InputGroup>
                </Col>
                <Col lg={4} className="mg-t-20 mg-lg-t-0">
                  <InputGroup className="mb-3">
                    <Form.Control placeholder="Search for..." type="text" />
                    <Button
                      variant="primary" className="btn ripple" type="button">
                      <i className="fa fa-search"></i>
                    </Button>
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
            <Card.Header>
              <h6 className="main-content-label mb-1">Input Mask</h6>
              <p className="text-muted card-sub-title">
                Input masks allows a user to more easily enter fixed width input
                where you would like them to enter the data in a certain format
                (dates,phones, etc).
              </p>
            </Card.Header>
            <Card.Body>
              <Row className="row-sm">
                <Col lg={3}>
                  <InputGroup>
                    <InputGroup.Text>Date:</InputGroup.Text>
                    <DateMask />
                  </InputGroup>
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup>
                    <InputGroup.Text>USA format:</InputGroup.Text>
                    <MaskInput
        className="form-control"
        alwaysShowMask
        mask={"+1 (000) 000 - 0000"}
        size={40}
        showMask
        maskChar="_"
      />
                  </InputGroup>
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup>
                    <InputGroup.Text>Customization format:</InputGroup.Text>
                    <MaskInput
        alwaysShowMask
        className="form-control"
        maskChar="_"
        mask="0000-{0}-0000"
        defaultValue="123456789"
        size={40}
      />
                  </InputGroup>
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup>
                    <InputGroup.Text>Card format:</InputGroup.Text>

                    <MaskInput
        alwaysShowMask
        className="form-control"
        maskChar="_"
        mask="0000-0000-0000-0000"
        size={40}
      />

                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1">Color Picker-2</h6>
              <p className="text-muted card-sub-title">
                Input masks allows a user to more easily enter fixed width input
                where you would like them to enter the data in a certain format
                (dates,phones, etc).
              </p>
            </Card.Header>
            <Card.Body>
              <Row className="row-sm">
                <Col lg={12}>
                  <div >
                    <div >
                      <Card.Body>
                        <div className="d-flex justify-content-between">
                          <div>
                            <div className="theme-container main-content-label mb-1">
                              Nona
                            </div>
                            <div className="pickr-container text-center mt-2">
                              <Nonamethod1/>
                            </div>
                          </div>
                          <div>
                            <div className="theme-container1  main-content-label mb-1">
                              Classic
                            </div>
                            <div className="pickr-container1  text-center mt-2">
                              <Classicmethod />
                            </div>
                          </div>
                          <div>
                            <div className="theme-container2 main-content-label mb-1 ">
                              Monolith
                            </div>
                            <div className="pickr-container2 text-center mt-2">
                              <Monolithmethod/>

                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1"> Date and time Picker</h6>
                <p className="text-muted card-sub-title">
                  The date and time picker is tied to a standard form input field.
                  Click on the input to open an interactive calendar in a small
                  overlay. If a date is chosen, feedback is shown as the input's
                  defaultValue.Set the numberOfMonths option to an integer of 2 or
                  more to show multiple months in a single datepicker.
                </p>
              </div>
              <Col lg={6} >
                <div className="mg-b-20">
                  <InputGroup>
                    <Button
                      variant="light" type="button">
                      <i className="fe fe-calendar lh--9 op-6"></i>
                    </Button>
                    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="Pp"
    />
                  </InputGroup>
                </div>
              </Col>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1"> React-Date Picker</h6>
                <p className="text-muted card-sub-title">
                  The datepicker is tied to a standard form input field. Click on
                  the input to open an interactive calendar in a small overlay. If
                  a date is chosen, feedback is shown as the input's
                  defaultValue.Set the numberOfMonths option to an integer of 2 or
                  more to show multiple months in a single datepicker.
                </p>
              </div>
              <Row className="row-sm">
                <Col lg={6} >
                  <div className="mg-b-20">
                    <InputGroup>
                      <Button
                        variant="light" type="button">
                        <i className="fe fe-calendar lh--9 op-6"></i>
                      </Button>
                      <Datepicker />
                    </InputGroup>
                  </div>
                </Col>
                <Col lg={6} >
                  <div className="mg-b-20">
                    <InputGroup>
                      <Button
                        variant="light" type="button">
                        <i className="fe fe-calendar lh--9 op-6"></i>
                      </Button>
                      <Previousmonth />
                    </InputGroup>
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
                  Date, Month, Year Range Picker
                </h6>
                <p className="text-muted card-sub-title">
                  Display the datepicker embedded in the page instead of in an
                  overlay.
                </p>
              </div>
              <Row className="row-sm">
                <Col xl={4}>
                  <div className=" mg-b-30">
                    <InputGroup className="input-group">

                      <Button
                        variant="light" type="button">
                        <i className="fe fe-calendar lh--9 op-6"></i>
                      </Button>
                      <Datepicker />

                    </InputGroup>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="mg-b-30">
                    <InputGroup >
                      <Button
                        variant="light" type="button">
                        <i className="fe fe-calendar lh--9 op-6"></i>
                      </Button>
                      <Monthrange />


                    </InputGroup>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className=" mg-b-30">
                    <InputGroup>
                      <Button
                        variant="light" type="button">
                        <i className="fe fe-calendar lh--9 op-6"></i>
                      </Button>
                      <Yearrange />
                    </InputGroup>
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
                <h6 className="main-content-label mb-1">Range Slider</h6>
                <p className="text-muted card-sub-title">
                  Easy, flexible and responsive range slider with skin support.
                </p>
              </div>
              <Row className="row-sm">
                <Col lg={6} >

                  <SliderDisabled />
                </Col>
                <Col lg={6} className=" mg-t-20 mg-lg-t-0">

                <Slider
        style={{
          color: "#6259ca",
        }}
        min={10}
        max={100}
        defaultValue={20}
        marks={coustomMarks}
        getAriaValueText={getText}
        valueLabelDisplay="on"
      />
                </Col>
              </Row>
              <Row className="row-sm mg-t-40">
                <Col lg={6} >

                  <Labelalwaysvisible />
                </Col>
                <Col lg={6} className=" mg-t-20 mg-lg-t-0">

                  <MinimumDistanceSlider />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment >
  );
}

FormElements.propTypes = {};

FormElements.defaultProps = {};

export default FormElements;
