import { Fragment, useState } from "react";
import { Breadcrumb, Button, Col, Nav, Pagination, Row } from "react-bootstrap";
import png1 from "../../../assets/img/pngs/1.png";
import png2 from "../../../assets/img/pngs/2.png";
import png3 from "../../../assets/img/pngs/3.png";
import png4 from "../../../assets/img/pngs/4.png";
import png5 from "../../../assets/img/pngs/5.png";
import png6 from "../../../assets/img/pngs/6.png";
import png7 from "../../../assets/img/pngs/7.png";
import png8 from "../../../assets/img/pngs/8.png";
import { Link } from "react-router-dom";
let WishlistData = [
  {
    id: 1,
    ProductId: "Women's Red Dress",
    Product1: png1,
    Productpriceold: "$49.00",
    Productdiscountnew: "$39.00",
    Addtocart: "Add to cart ",
    Favorite: "heart",
  },
  {
    id: 2,
    ProductId: "Hand Bag",
    Product1: png2,
    Productpriceold: "$30.00",
    Productdiscountnew: "$21.00",
    Addtocart: "Add to cart ",
    Favorite: "heart",
  },
  {
    id: 3,
    ProductId: "Wrist Watch",
    Product1: png3,
    Productpriceold: "$29.00",
    Productdiscountnew: "$15.00",
    Addtocart: "Add to cart ",
    Favorite: "heart",
  },
  {
    id: 4,

    ProductId: "Long Frock",
    Product1: png4,
    Productpriceold: "$32.00",
    Productdiscountnew: "$22.00",
    Addtocart: "Add to cart ",
    Favorite: "heart",
  },
  {
    id: 5,

    ProductId: "Girls Sandals",
    Product1: png5,
    Productpriceold: "$30.00",
    Productdiscountnew: "$21.00",
    Addtocart: "Add to cart ",
    Favorite: "heart",
  },

  {
    id: 6,
    ProductId: "Women's Red Dress",
    Product1: png6,
    Productpriceold: "$25.00",
    Productdiscountnew: "$20.00",
    Addtocart: "Add to cart ",
    Favorite: "heart",
  },
  {
    id: 7,

    ProductId: "Women's Red Dress",
    Product1: png7,
    Productpriceold: "$25.00",
    Productdiscountnew: "$20.00",
    Addtocart: "Add to cart ",
    Favorite: "heart",
  },
  {
    id: 8,
    ProductId: "Women's Red Dress",
    Product1: png8,
    Productpriceold: "$25.00",
    Productdiscountnew: "$20.00",
    Addtocart: "Add to cart ",
    Favorite: "heart",
  },
];
function Wishlist() {
  var clickq = (id1) => {
    let ee = WishlistData.filter((e, i) => {
      return e.id !== id1;
    });
    WishlistData = ee;
    setdata(ee);
  };
  const [data, setdata] = useState(WishlistData);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Wishlist</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
            <Breadcrumb.Item active>Wishlist</Breadcrumb.Item>
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
            <Button
              type="button"
              variant="primary"
              className="my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      <Row className="row-sm" id="wishlist">
        <Col md={12} lg={12} xl={12}>
          <Row className="row-sm">
            {data.map((items, index) => (
              <Col
                md={6}
                lg={6}
                sm={6}
                xl={3}
                className="alert mb-0"
                key={index}
                data-index={index}
              >
                <div className="card custom-card">
                  <div className="p-0">
                    <div className="product-grid">
                      <div className="product-image">
                        <Link
                          to={`/ecommerce/productdeatils/`}
                          className="image"
                        >
                          <img
                            className="pic-1"
                            alt="product1"
                            src={items.Product1}
                          />
                        </Link>
                        <Link to="#" className="wishlist-icon">
                          <i
                            className={"far fa-heart"}
                            onClick={() => {
                              clickq(items.id);
                            }}
                          ></i>
                        </Link>
                      </div>
                      <div className="product-content">
                        <div className="d-flex">
                          <div>
                            <h3 className="title">
                              <Link to="#">{items.ProductId}</Link>
                            </h3>
                          </div>
                          <div className="price text-end ms-auto">
                            <span className="old-price">
                              {items.Productpriceold}
                            </span>
                            <span className="fs-18">
                              {items.Productdiscountnew}
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link to="#">
                            <i className="fa fa-star text-warning"></i>
                          </Link>
                          <Link to="#">
                            <i className="fa fa-star text-warning"></i>
                          </Link>
                          <Link to="#">
                            <i className="fa fa-star text-warning"></i>
                          </Link>
                          <Link to="#">
                            <i className="far fa-star text-warning"></i>
                          </Link>
                          <Link to="#">
                            <i className="far fa-star text-warning"></i>
                          </Link>
                          <Link to="#" className="me-4 text-muted">
                            (25)
                          </Link>
                        </div>
                        <div className="mt-3">
                          <Link
                            to={`/ecommerce/eccart/`}
                            className="btn btn-block btn-primary"
                          >
                            <i className="fe fe-shopping-cart me-2"></i>
                            <span>{items.Addtocart}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Nav>
            <Pagination className="justify-content-end">
              <Pagination.Prev />
              <Pagination.Item disabled>Prev</Pagination.Item>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item className="page-item">2</Pagination.Item>
              <Pagination.Item className="page-item">3</Pagination.Item>
              <Pagination.Item className="page-item">4</Pagination.Item>
              <Pagination.Item className="page-item">5</Pagination.Item>
              <Pagination.Item className="page-item">Next</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Nav>
        </Col>
      </Row>
    </Fragment>
  );
}
Wishlist.propTypes = {};

Wishlist.defaultProps = {};

export default Wishlist;
