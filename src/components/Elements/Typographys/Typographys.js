import React, { Fragment } from "react";
import { Breadcrumb, Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import user7 from "../../../assets/img/users/7.jpg";

const Typographys = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Typography</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            Elements
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Typography
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
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col xl={9} lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Headings</h6>
              <p className="text-muted card-sub-title">
                All HTML headings, <code>h1</code> through <code>h6</code>, are
                available.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <Row className="row-xs">
                  <Col sm={6} md={6}>
                    <h1>h1 Heading</h1>
                    <h2>h2 Heading</h2>
                    <h3>h3 Heading</h3>
                    <h4>h4 Heading</h4>
                    <h5>h5 Heading</h5>
                    <h6>h6 Heading</h6>
                  </Col>
                  <Col sm={6} md={6} className="mg-t-10 mg-sm-t-0">
                    <p className="h1 text-primary">h1 Heading</p>
                    <p className="h2 text-secondary">h2 Heading</p>
                    <p className="h3 text-success">h3 Heading</p>
                    <p className="h4 text-danger">h4 Heading</p>
                    <p className="h5 text-info">h5 Heading</p>
                    <p className="h6 text-warning">h6 Heading</p>
                  </Col>
                </Row>
              </div>

            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="display">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Display headings</h6>
              <p className="text-muted card-sub-title">
                you need a heading to stand out, consider using a display
                heading—a larger, slightly more opinionated heading style.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <h1 className="display-1">Display 1</h1>
                <h1 className="display-2">Display 2</h1>
                <h1 className="display-3">Display 3</h1>
                <h1 className="display-4">Display 4</h1>
              </div>

            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="lead">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Lead</h6>
              <p className="text-muted card-sub-title">
                Make a paragraph stand out by adding <code>.lead</code>.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <p className="lead mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>

            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="linetext">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Inline text elements</h6>
              <p className="text-muted card-sub-title">
                Styling for common inline HTML5 elements.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <p>
                  You can use the mark tag to <mark>highlight</mark> text.
                </p>
                <p>
                  <del>
                    This line of text is meant to be treated as deleted text.
                  </del>
                </p>
                <p>
                  <s>
                    This line of text is meant to be treated as no longer
                    accurate.
                  </s>
                </p>
                <p>
                  <ins>
                    This line of text is meant to be treated as an addition to
                    the document.
                  </ins>
                </p>
                <p>
                  <u>This line of text will render as underlined</u>
                </p>
                <p>
                  <small>
                    This line of text is meant to be treated as fine print.
                  </small>
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p className="mb-0">
                  <em>This line rendered as italicized text.</em>
                </p>
              </div>

            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="blockquotes">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Blockquotes</h6>
              <p className="text-muted card-sub-title">
                For quoting blocks of content from another source within your
                document. <code>.blockquote</code> around any HTML as the quote.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <blockquote className="blockquote mb-0">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                </blockquote>
              </div>

            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="aligment">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Alignment</h6>
              <p className="text-muted card-sub-title">
                Use text utilities as needed to change the alignment of your
                blockquote.
              </p>
            </div>
            <div className="text-wrap mb-4">
              <div className="example">
                <blockquote className="blockquote text-center">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>

            </div>
            <div className="text-wrap">
              <div className="example">
                <blockquote className="blockquote text-end mb-0">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>

            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="fontsize">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Font Size</h6>
              <p className="text-muted card-sub-title">
                You can set a font size instantly to an element by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <Table responsive className=" main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.tx-[size]</code>
                    </td>
                    <td>8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.tx-[size]</code>
                    </td>
                    <td>18 | 20 | 22 | 24 | ... | 140 (step of 2)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="fontweight">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Font Weight</h6>
              <p className="text-muted card-sub-title">
                You can set a font weight instantly to an element by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <Table responsive className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.tx-[weight]</code>
                    </td>
                    <td>
                      bold | semibold | medium | normal | light | thin | xthin
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="fontfamily">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Font Family</h6>
              <p className="text-muted card-sub-title">
                You can set a font family instantly to an element by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Family</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.tx-[family]</code>
                    </td>
                    <td>sserif | roboto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="fontcolor">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Font Color</h6>
              <p className="text-muted card-sub-title">
                You can set a font color instantly to an element by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.tx-[color]</code>
                    </td>
                    <td>
                      primary | success | warning | danger | info | indigo |
                      purple | orange | teal | pink | black | white | inverse
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.tx-gray-[num]</code>
                    </td>
                    <td>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.tx-white-[transparency]</code>
                    </td>
                    <td>2 | 3 | 4 | 5 | 6 | 7 | 8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="fontspace">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Font Spacing</h6>
              <p className="text-muted card-sub-title">
                You can set a font spacing instantly to an element by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.tx-spacing-[value]</code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.tx-spacing--[value]</code>
                    </td>
                    <td>
                      1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ( negative spacing result )
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="lineh">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Line Height</h6>
              <p className="text-muted card-sub-title">
                You can set a line height instantly to an element by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.lh-[value]</code>
                    </td>
                    <td>
                      1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
                      | 15
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <table className="table main-table-reference mt-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-20p">Viewport</th>
                    <th className="wd-50p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.lh-[viewport]-[value]</code>
                    </td>
                    <td>xs | sm | md | lg | xl</td>
                    <td>
                      1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
                      | 15
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className="custom-card our-team">
            <Card.Body>
              <div className="picture avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={user7} />
              </div>
              <div className="text-center mt-3">
                <h5 className="pro-user-username text-dark mt-2 mb-0">
                  Joyce Chua
                </h5>
                <p className="pro-user-desc text-muted mb-1">Web Developer</p>
                <p className="user-info-rating">
                  <Link to="#">
                    <i className="fa fa-star text-warning"> </i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-star text-warning"> </i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-star text-warning"> </i>
                  </Link>
                  <Link to="#">
                    <i className="far fa-star text-warning"> </i>
                  </Link>
                  <Link to="#">
                    <i className="far fa-star text-warning"> </i>
                  </Link>
                </p>
              </div>
              <div className="contact-info mb-0 text-center">
                <Link to="#" className="contact-icon border text-primary">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="contact-icon border text-primary ms-2">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="contact-icon border text-primary ms-2">
                  <i className="fab fa-google"></i>
                </Link>
                <Link to="#" className="contact-icon border text-primary ms-2">
                  <i className="fab fa-dribbble"></i>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Typographys.propTypes = {};

Typographys.defaultProps = {};

export default Typographys;
