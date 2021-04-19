import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/topbar";
import Footer from "../components/footer";

export default class Explore extends PureComponent {
  render() {
    return (
      <Fragment>
        <Topbar />
        <div className="bg-accent pt-4 pb-5">
          <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
            <div className="d-lg-flex justify-content-between pb-3">
              <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                <h1 className="h3 text-light mb-0">Kids Kriya</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5 mb-2 mb-md-4">
          <div className="bg-light shadow-lg rounded-3 mt-n5 mb-4">
            <div className="d-flex align-items-center ps-2">
              <div className="input-group">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y fs-md ms-3"></i>
                <input
                  className="form-control border-0 shadow-none"
                  type="text"
                  placeholder="Search products..."
                />
              </div>
              <div className="d-flex align-items-center">
                <div className="dropdown py-4 border-start">
                  <a
                    className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="d-inline-block py-1">
                      <i className="align-middle opacity-60 mt-n1 me-2"></i>
                      Select School
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="me-2 opacity-60"></i>
                        GD Goenka School
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="me-2 opacity-60"></i>
                        DPS, Delhi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-none d-md-flex align-items-center border-start">
                <span className="fs-md text-nowrap me-4">
                  <div className="dropdown py-4 border-start">
                    <a
                      className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span className="d-inline-block py-1">
                        <i className="align-middle opacity-60 mt-n1 me-2"></i>
                        Select Class
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="me-2 opacity-60"></i>1st Class
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="me-2 opacity-60"></i>2nd Class
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="row pt-3 mx-n2">
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <a
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      href="#"
                    >
                      <i className="ci-eye"></i>
                    </a>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <a className="product-thumb-overlay" href="#"></a>
                  <img
                    src="/img/items/faber-castell-2.jpeg"
                    alt="Product"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="product-title fs-sm mb-2">
                    <a href="#">
                      FABER-CAELL 25 Connector pens (Set of 25, Assorted)
                    </a>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-cart text-muted me-1"></i>109
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      ₹81<small></small>
                    </div>
                    <button className="btn-danger text-accent rounded-1 py-1 px-2 border-0">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <a
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      href="#"
                    >
                      <i className="ci-eye"></i>
                    </a>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <a className="product-thumb-overlay" href="#"></a>
                  <img
                    src="/img/items/tape.jpeg"
                    alt="Product"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="product-title fs-sm mb-2">
                    <a href="#">
                      ADAMANT ABODE Single Sided painter Masking tape 1 inch
                    </a>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-cart text-muted me-1"></i>120
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      ₹199<small></small>
                    </div>
                    <button className="btn-danger text-accent rounded-1 py-1 px-2 border-0">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="d-flex justify-content-between pt-2"
            aria-label="Page navigation"
          >
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="ci-arrow-left me-2"></i>Prev
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item d-sm-none">
                <span className="page-link page-link-static">1 / 5</span>
              </li>
              <li
                className="page-item active d-none d-sm-block"
                aria-current="page"
              >
                <span className="page-link">
                  1<span className="visually-hidden">(current)</span>
                </span>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  Next<i className="ci-arrow-right ms-2"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
