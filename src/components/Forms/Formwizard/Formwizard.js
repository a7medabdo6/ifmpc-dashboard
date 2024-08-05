import React, { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";
import { AccordionWizardForm, VerticalLinearStepper, WizardForm } from "./formwizardsdata";

const Formwizard = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Form wizard</h2>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="#">Form</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Form wizard
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <button
            type="button"
            className="btn btn-white btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </button>
          <button
            type="button"
            className="btn btn-white btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </button>
          <button type="button" className="btn btn-primary my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <div className="row row-sm">
      <div className="col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <div>
              <h6 className="main-content-label mb-1">Basic Stepper </h6>
              <p className="text-muted card-sub-title">
                Below is an example of a basic horizontal form wizard.
              </p>
            </div>
            <div id="wizard1">
              <AccordionWizardForm />
            
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Row --> */}
    <div className="row row-sm">
      <div className="col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body border">
            <div>
              <h6 className="main-content-label mb-1">validator Form Wizard</h6>
              <p className="text-muted card-sub-title ">
                A basic content wizard with vertical orientation.
              </p>
            </div>
            
            <WizardForm />
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Row --> */}
    <div className="row row-sm">
      <div className="col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body accordion-wizard">
            <div>
              <h6 className="main-content-label mb-1">Accordion Wizard</h6>
              <p className="text-muted card-sub-title">
                A basic content wizard with vertical orientation.
              </p>
            </div>
            <VerticalLinearStepper />
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Row --> */}
  </Fragment>
);

Formwizard.propTypes = {};

Formwizard.defaultProps = {};

export default Formwizard;
