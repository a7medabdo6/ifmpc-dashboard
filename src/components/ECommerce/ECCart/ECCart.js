import React, { Fragment, useState } from "react";
import png14 from "../../../assets/img/pngs/14.png";
import png15 from "../../../assets/img/pngs/15.png";
import png16 from "../../../assets/img/pngs/16.png";
import png17 from "../../../assets/img/pngs/17.png";
import png18 from "../../../assets/img/pngs/18.png";
import png19 from "../../../assets/img/pngs/19.png";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Card, Col, Row, Table } from "react-bootstrap";
let Shoppingcart = [
  { Id: 1, Product: png14, ProductName: "COLLEGE BAG", Color: "Color:", Colorpicker: "Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 1, Price: "$26.00", },
  { Id: 2, Product: png15, ProductName: "PARTY WEAR SHOES", Color: "Color:", Colorpicker: "Pick", Qty: "In stock", Qtytext: "success", Quantity: 2, Price: "$23.00", },
  { Id: 3, Product: png19, ProductName: "SAMSUNG A2", Color: "Color:", Colorpicker: "Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 3, Price: "$56.00", },
  { Id: 4, Product: png16, ProductName: "FLOWER POT", Color: "Color:", Colorpicker: " Green and Black color", Qty: "Out of stock", Qtytext: "success", Quantity: 4, Price: "$36.00", },
  { Id: 5, Product: png17, ProductName: "CHAIR", Color: "Color:", Colorpicker: "Green and Black color", Qty: "Out of stock", Qtytext: "success", Quantity: 6, Price: "$24.00", },
  { Id: 6, Product: png18, ProductName: "WATCH", Color: "Color:", Colorpicker: "Green and Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 7, Price: "$34.00", },];
function ECCart() {
  var Delete = (id1) => {
    let ee = Shoppingcart.filter((e, i) => {
      return e.Id !== id1
    })
    Shoppingcart = ee
    setdata(ee)

  }
  const [data, setdata] = useState(Shoppingcart)
  function dec(el) {
    let unit = Number(el.target.parentElement.querySelector("input").value)

    // if (
    //   (unit) === 0) {
    //   return false;
    // } else {
    //   el.target.parentElement.querySelector("input").value--;
    // }
    if (unit > 0) {
      el.target.parentElement.querySelector("input").value--
    }
  }
  function inc(el) {
    Number(el.target.parentElement.querySelector("input").value++);
  }
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Cart</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
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
              className=" my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col lg={12} xl={9} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h5 className="mb-3 font-weight-bold tx-14">Shopping cart</h5>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered className="text-nowrap table-shopping-cart mb-0">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col">Qty</th>
                      <th scope="col" className="wd-120">
                        Quantity
                      </th>
                      <th scope="col" className="wd-120">
                        Price
                      </th>
                      <th scope="col" className="text-center ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((list, index) => (
                      <tr key={index} data-index={index}>
                        <td>
                          <div className="media">
                            <div className="card-aside-img">
                              <img
                                src={list.Product}
                                alt="img"
                                className="img-sm"
                              />
                            </div>
                            <div className="media-body my-auto">
                              <div className="card-item-desc mt-0">
                                <h6 className="font-weight-semibold mt-0 text-uppercase">
                                  {list.ProductName}
                                </h6>
                                <dl className="card-item-desc-1">
                                  <dt>{list.Color} </dt>
                                  <dd>{list.Colorpicker}</dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p
                            className={`text-${list.Qtytext} small mb-0 mt-1 tx-12`}
                          >
                            {list.Qty}
                          </p>
                        </td>
                        <td>
                          <div className="handle-counter" id="handleCounter">
                            <Button
                              variant="light"
                              className="counter-minus "
                              onClick={dec}
                            >
                              -
                            </Button>
                            <input
                              type="text"
                              defaultValue={0}
                            />
                            <Button
                              variant="light"
                              className="counter-plus "
                              onClick={inc}
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <span className="price font-weight-bold tx-16">
                              {list.Price}
                            </span>
                          </div>
                        </td>
                        <td className="text-center">
                          <Link to="#"
                            onClick={function () {
                              Delete(list.Id);
                            }}
                            className="remove-list text-danger tx-20 remove-button"
                            data-abc="true"
                          >
                            <i className="fa fa-trash"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-lg-12 col-xl-3 col-md-12">
          <Card className="custom-card">
            <Card.Body>
              <form>
                <div className="form-group mb-0">
                  <label>Have coupon?</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control coupon"
                      placeholder="Coupon code"
                    />
                    <span className="">
                      <Button
                        variant="primary" className=" btn-apply coupon">
                        Apply
                      </Button>
                    </span>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
          <div className="card custom-card cart-details">
            <Card.Body>
              <h5 className="mb-3 font-weight-bold tx-14">PRICE DETAIL</h5>
              <dl className="dlist-align">
                <dt className="">ITEMS 3</dt>
                <dd className="text-end ms-auto">$ 262.00</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Discount:</dt>
                <dd className="text-end text-danger ms-auto">- $20.00</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Total price:</dt>
                <dd className="text-end ms-auto">$252.97</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Delivery:</dt>
                <dd className="text-end text-success ms-auto">Free</dd>
              </dl>
              <hr />
              <dl className="dlist-align">
                <dt>Total:</dt>
                <dd className="text-end  ms-auto">
                  <strong>$252.97</strong>
                </dd>
              </dl>
              <div className="step-footer">
                <Link
                  to={`${process.env.PUBLIC_URL}/ecommerce/products/`}
                  className="btn btn-success btn-block"
                  href="ecommerce-products.html"
                >
                  Continue Shopping
                </Link>
              </div>
            </Card.Body>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

ECCart.propTypes = {};

ECCart.defaultProps = {};

export default ECCart;
