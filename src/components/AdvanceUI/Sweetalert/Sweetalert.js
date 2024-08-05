import React, { Fragment } from "react";
import { Breadcrumb, Button, Row, Card, Col } from "react-bootstrap";
import media17 from "../../../assets/img/media/17.jpg";
import Swal from "sweetalert2";
const Sweetalert = () => {
// BasicAlert
 function Basicsweetalert() {
  Swal.fire({
    text: " Welcome to Your Admin Page",
    allowOutsideClick: false,
  });
}
// TitleAlert
 function Titlealert() {
  Swal.fire({
    title: "Here is a title! ,All are available in the template",
    allowOutsideClick: false,
  });

}
// SuccessAlert
 function Successalert() {
  Swal.fire({
    icon: "success",
    title: "Well done!",
    text: "You Clicked Button",
    allowOutsideClick: false,
  });
}
//DangerAlert
 function Dangeralert(params) {
  Swal.fire({
    title: "Are you sure?",
    text: "Your will not be able to recover this imaginary file!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#6259ca",
    cancelButtonColor: "#6259ca",
    confirmButtonText: "Yes, delete it!",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your imaginary file has been deleted.", "success");
    }
  });
}
// Passing Parameter
 function Passingparameter(params) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary me-2",
      cancelButton: "btn btn-primary me-2",
      allowOutsideClick: false,
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: " You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      allowOutsideClick: false,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your imaginary file is safe :)",
          "error"
        );
      }
    });
}
// ImageAlert
 function Sweetalertimage(params) {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: media17,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    allowOutsideClick: false,
  });
}

//  AutoAlert
 function Autoalert(params) {
  let timerInterval;
  Swal.fire({
    title: "Auto close alert!",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}
// fileAlert
 function Filealert() {
  (async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      allowOutsideClick: false,
      inputAttributes: {
        accept: "image",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
      };
      reader.readAsDataURL(file);
    }
  })();
}
  return(
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Sweet Alert</h2>
          <Breadcrumb >
            <Breadcrumb.Item href="#"> Advanced UI </Breadcrumb.Item>
            <Breadcrumb.Item active> Sweet Alert</Breadcrumb.Item>
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
              variant="primary"
              type="button"
              className="my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}
  
      {/* <!-- Row --> */}
      <div className="sidemenu-height">
        <Row className="row-sm ">
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Basic Alert</h6>
                  <p className="text-muted card-sub-title">A Basic Message</p>
                </div>
                <Button
                  variant="primary"
                  onClick={Basicsweetalert}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Title alert</h6>
                  <p className="text-muted card-sub-title">
                    A title with a text under
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={Titlealert}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Success alert</h6>
                  <p className="text-muted card-sub-title">A Success Message</p>
                </div>
                <Button
                  variant="primary"
                  onClick={Successalert}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Warning alert</h6>
                  <p className="text-muted card-sub-title">A warning message</p>
                </div>
                <Button
                  variant="primary"
                  onClick={Dangeralert}
                  className="btn ripple btn-primary"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- End Row --> */}
  
        {/* <!-- Row --> */}
        <Row className="row-sm ">
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">
                    Passing a parameter alert
                  </h6>
                  <p className="text-muted card-sub-title">
                    By passing a parameter
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={Passingparameter}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Image alert</h6>
                  <p className="text-muted card-sub-title">
                    A message with custom Image
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={Sweetalertimage}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Timer alert</h6>
                  <p className="text-muted card-sub-title">
                    A message with auto close timer
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={Autoalert}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">File Alert</h6>
                  <p className="text-muted card-sub-title">
                    With a Fileupload (for Input Types)
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={Filealert}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}


Sweetalert.propTypes = {};

Sweetalert.defaultProps = {};

export default Sweetalert;
