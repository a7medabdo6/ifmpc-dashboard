
import React, { Fragment, useState } from "react";
import { Breadcrumb, Row, Col, Card, Button, InputGroup } from "react-bootstrap";
import IntlTelInput from "react-intl-tel-input";
import Multiselect from "react-select";
import { MultiSelect } from "react-multi-select-component";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import * as formelement from "../FormElements/Previousmonth";
import { Materialui } from "./Materialui";
import { CustomMaterialui } from "./CustomMaterialui";
import { MUIdropzonebadge } from "./MUIdropzonebadge";
import { MUIdropzonebutton } from "./MUIdropzonebutton";
import { StyledDropzone1 } from "./StyledDropzone1";
const AdvancedForms = () => {
  const objectArray = [
    { value: "Firefox", label: "firefox" },
    { value: "Chrome", label: "chrome " },
    { value: "Safari", label: "safari" },
    { value: "Operate", label: "operate" },
    { value: " Internet Explore", label: "internet explore " },
  ];
  const animatedComponents = makeAnimated();
const options = [
  { value: "Firefox", label: "firefox" },
  { value: "Chrome", label: "chrome " },
  { value: "Safari", label: "safari" },
  { value: "Operate", label: "operate" },
  { value: " Internet Explore", label: "internet explore " },
];
const selectdisabled = makeAnimated();
const option1 = [
  { value: "Firefox", label: "firefox" },
  { value: "Chrome", label: "chrome " },
  { value: "Safari", label: "safari" },
  { value: "Operate", label: "operate" },
  { value: " Internet Explore", label: "internet explore " },
];
const Prefilledinput = makeAnimated();
const optionset2 = [
  { value: "Firefox", label: "firefox" },
  { value: "Chrome", label: "chrome " },
  { value: "Safari", label: "safari" },
  { value: "Operate", label: "operate" },
  { value: " Internet Explore", label: "internet explore " },
];
const [selected, setSelected] = useState([]);
const optionsMultipleSelect2 = [
  { value: "Firefox", label: "firefox" },
  { value: "Chrome", label: "chrome " },
  { value: "Safari", label: "safari" },
  { value: "Operate", label: "operate" },
  { value: " Internet Explore", label: "internet explore " },
];

  return(
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Advanced Forms</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#" >Forms</Breadcrumb.Item>
            <Breadcrumb.Item active>
              Advanced Forms
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white" type="button" className=" btn-icon-text my-2 me-2">
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant="white" type="button" className="btn-icon-text my-2 me-2" >
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
              <div>
                <h6 className="main-content-label mb-1">Telephone Input</h6>
                <p className="text-muted card-sub-title">
                  A plugin for entering and validating international telephone
                  numbers. It adds a flag dropdown to any input, detects the
                  user's country, displays a relevant placeholder and provides
                  formatting/validation methods.
                </p>
              </div>
              <InputGroup className="telephone-input">
                <IntlTelInput
                  containerClassName="intl-tel-input"
                  inputClassName="form-control"
                />
                <span className="input-group-btn">
                  <Button
                    variant="" className="btn ripple btn-primary" type="button">
                    Submit
                  </Button>
                </span>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Select2</h6>
                <p className="text-muted card-sub-title">
                  Select2 gives you a customizable select box with support for
                  searching, tagging, remote data sets, infinite scrolling, and
                  many other highly used options.
                </p>
              </div>
              <Row className="row-sm mg-b-20">
                <Col lg={4} className="">
                  <p className="mg-b-10">Single Select</p>
                  <Multiselect classNamePrefix="Select2" options={objectArray} singleSelect displayValue="key" />
                </Col>
                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <p className="mg-b-10">Multiple Select with Search</p>
                  <MultiSelect className="multi-select"
        options={optionsMultipleSelect2}
        value={selected}
        onChange={setSelected}
      />
                </Col>
                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <p className="mg-b-10">Single Select (Disabled)</p>
                  <Select
      closeMenuOnSelect={true}
      components={selectdisabled}
      isDisabled
      options={option1}
    />
                </Col>
              </Row>
              <Row className="row-sm">
                <Col lg={4}>
                  <p className="mg-b-10">Multiple Select</p>
                  <Select classNamePrefix="Select2"
      closeMenuOnSelect={true}
      components={animatedComponents}
      //
      isMulti
      options={options}
    />
                </Col>
                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <p className="mg-b-10">Multiple Select with Pre-Filled Input</p>
                  <Select classNamePrefix="Select2"
      closeMenuOnSelect={false}
      defaultValue={[optionset2[4], optionset2[5]]}
      components={Prefilledinput}
      //
      isMulti
      options={optionset2}
    />
                </Col>
                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <p className="mg-b-10">Multiple Select (Disabled)</p>
                  <Select
      closeMenuOnSelect={true}
      components={selectdisabled}
      isDisabled
      options={option1}
    />
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
                <h6 className="main-content-label mb-1">Date Range Picker</h6>
                <p className="text-muted card-sub-title">Date Range Picker</p>
              </div>
              <Row className="row-sm">
                <Col lg={12}>
                  <InputGroup>
                    <InputGroup.Text>
                      <i className="fe fe-calendar  lh--9 op-6"></i>
                    </InputGroup.Text>
                     <formelement.Previousmonth /> 
                    
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
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">File Upload</h6>
                <p className="text-muted">
                  Dropify is a react dropzone plugin to create a beautiful file
                  uploader that converts a standard <code>input type="file"</code>
                  into a nice drag & drop zone with previews and custom styles.
                </p>
              </div>
              <Row className="mb-4">
                <Col sm={12} md={4} className="mg-t-10">
  
                  <Materialui />
                </Col>
                <Col sm={12} md={4} className="mg-t-10">
  
                  <CustomMaterialui />
  
                </Col>
                <Col sm={12} md={4} className="mg-t-10">
                  <MUIdropzonebadge />
  
                </Col>
                <Col sm={12} md={4} className="mg-t-10">
  
                  <MUIdropzonebutton />
                </Col>
                <Col sm={12} md={4} className="mg-t-10">
  
                  <StyledDropzone1 />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}


AdvancedForms.propTypes = {};

AdvancedForms.defaultProps = {};

export default AdvancedForms;
