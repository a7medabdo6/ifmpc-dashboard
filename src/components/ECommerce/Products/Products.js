import React, { Fragment } from "react";
// import * as productdata from '../../../data/Ecommerce/Productdata/productdata';
import png1 from "../../../assets/img/pngs/1.png";
import png01 from "../../../assets/img/pngs/01.png";
import png2 from "../../../assets/img/pngs/2.png";
import png02 from "../../../assets/img/pngs/02.png";
import png3 from "../../../assets/img/pngs/3.png";
import png03 from "../../../assets/img/pngs/03.png";
import png4 from "../../../assets/img/pngs/4.png";
import png04 from "../../../assets/img/pngs/04.png";
import png5 from "../../../assets/img/pngs/5.png";
import png05 from "../../../assets/img/pngs/05.png";
import png6 from "../../../assets/img/pngs/6.png";
import png06 from "../../../assets/img/pngs/06.png";
import png7 from "../../../assets/img/pngs/7.png";
import png07 from "../../../assets/img/pngs/07.png";
import png8 from "../../../assets/img/pngs/8.png";
import png08 from "../../../assets/img/pngs/08.png";
import { Badge, Breadcrumb, Button, Card, Col, Form, Pagination, Row, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Productdetails =
  [
    { ProductId: "Women's Red Dress", Product1: png1, Product2: png01, Productpriceold: "$25.00", Productdiscountnew: "$20.00", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Productdiscount: "-33%", Productdiscounttext: "success", discountoffer: "discount", Favorite: "heart", },
    { ProductId: "Casual Wear Top", Product1: png2, Product2: png02, Productpriceold: "$25.00", Productdiscountnew: "$20.00", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { ProductId: "Party Wear Black Top", Product1: png3, Product2: png03, Productpriceold: "$25.00", Productdiscountnew: "$20.00", discountoffer: "discount", Productdiscount: "-50%", Productdiscounttext: "info", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { ProductId: "Women's Red Dress", Product1: png4, Product2: png04, Productpriceold: "$25.00", Productdiscountnew: "$20.00", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { ProductId: "Women's Red Dress", Product1: png5, Product2: png05, Productpriceold: "$25.00", Productdiscountnew: "$20.00", discountoffer: "discount", Productdiscount: "-40%", Productdiscounttext: "danger", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", }, { ProductId: "Women's Red Dress", Product1: png6, Product2: png06, Productpriceold: "$25.00", Productdiscountnew: "$20.00", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", }, {
      ProductId: "Women's Red Dress", Product1: png7, Product2: png07, Productpriceold: "$25.00", Productdiscountnew: "$20.00", discountoffer: "discount", Productdiscount: "-43%", Productdiscounttext: "warning", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart",
    }, { ProductId: "Women's Red Dress", Product1: png8, Product2: png08, Productpriceold: "$25.00", Productdiscountnew: "$20.00", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", }, { ProductId: "Women's Red Dress", Product1: png6, Product2: png06, Productpriceold: "$25.00", Productdiscountnew: "$20.00", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },];
function Products() {
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Products</h2>
          <Breadcrumb >
            <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">Products</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button variant="white" type="button" className="btn-icon-text my-2 me-2"><i className="fe fe-download me-2"></i> Import</Button>
            <Button variant="white" type="button" className="btn-icon-text my-2 me-2"><i className="fe fe-filter me-2"></i> Filter</Button>
            <Button variant="primary" type="button" className="my-2 btn-icon-text"><i className="fe fe-download-cloud me-2"></i> Download Report</Button>
          </div>
        </div>
      </div>

      <Row className="row-sm">
        <Col md={8} xl={9}>
          <Row className="row-sm">
            {Productdetails.map((items, index) => (
              <Col md={6} lg={6} xl={4} sm={6} key={index} data-index={index}>
                <Card className="custom-card">
                  <div className="p-0 ht-100p">
                    <div className="product-grid">
                      <div className="product-image">
                        <Link to={`${process.env.PUBLIC_URL}/ecommerce/productdeatils/`} className="image">
                          <img className="pic-1" alt="product1" src={items.Product1} />
                          <img className="pic-2" alt="product2" src={items.Product2} />
                        </Link>
                        <Link to="#" className="product-like-icon"><i className={`far fa-${items.Favorite}`}></i></Link>
                        <Badge className={`product-${items.discountoffer}-label`} bg={items.Productdiscounttext}>{items.Productdiscount}</Badge>
                        <div className="product-link">
                          <Link to={`${process.env.PUBLIC_URL}/ecommerce/eccart/`}><i className="fa fa-shopping-cart"></i><span>{items.Addtocart}</span></Link>
                          <Link to={`${process.env.PUBLIC_URL}/ecommerce/productdeatils/`}><i className="fas fa-eye"></i><span>{items.Quickview}</span></Link>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3 className="title"><Link to="#">{items.ProductId}</Link></h3>
                        <div className="price"><span className="old-price">{items.Productpriceold}</span>
                          <span className="text-danger">{items.Productdiscountnew}</span>
                        </div>
                        <ul className="rating">
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="far fa-star"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <nav>
            <Pagination className="pagination justify-content-end ">
              <Pagination.Item>Prev</Pagination.Item>
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item className="page-item active">{2}</Pagination.Item>
              <Pagination.Item >{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
          </nav>
        </Col>

        <Col md={4} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <Row className="row-sm">
                <Col sm={12}>
                  <InputGroup >
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                    />
                    <Button
                      variant="primary" className="btn ripple" type="button">
                      Search
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row className="row-sm">
            <Col md={12} lg={12}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <h6 className="main-content-label mb-3">Categories</h6>
                </Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>Mens</Form.Label>
                    {/* <productdata.Selectoption1 /> */}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Women</Form.Label>
                    {/* <productdata.Selectoption2 /> */}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Baby & Kids</Form.Label>
                    {/* <productdata.Selectoption3 /> */}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Electronics</Form.Label>
                    {/* <productdata.Selectoption4 /> */}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Sport,Books & ore </Form.Label>
                    {/* <productdata.Selectoption5 /> */}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Check type="radio" name="example-radios" defaultValue="option1" label="Under $25" defaultChecked />
                    <Form.Check type="radio" name="example-radios" defaultValue="option2" label="$25 to $50" />
                    <Form.Check type="radio" name="example-radios" defaultValue="option2" label="$50to $100" />
                    <Form.Check type="radio" name="example-radios" defaultValue="option2" label="Other (specify)" />
                  </Form.Group>
                  <Link to className="btn ripple btn-primary btn-block mt-3" href="#">
                    Apply Filter
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
