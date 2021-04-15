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
              <div className="d-none d-md-flex align-items-center">
                <div className="dropdown py-4 border-start">
                  <Link
                    className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="d-inline-block py-1">
                      <i className="align-middle opacity-60 mt-n1 me-2"></i>
                      Select School
                    </span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="me-2 opacity-60"></i>1st Class
                      </Link>
                      <Link className="dropdown-item" to="#">
                        <i className="me-2 opacity-60"></i>2nd Class
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-none d-md-flex align-items-center border-start">
                <span className="fs-md text-nowrap me-4">
                  <div className="dropdown py-4 border-start">
                    <Link
                      className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <span className="d-inline-block py-1">
                        <i className="align-middle opacity-60 mt-n1 me-2"></i>
                        Select Class
                      </span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="me-2 opacity-60"></i>1st Class
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="me-2 opacity-60"></i>2nd Class
                        </Link>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
            <div className="d-block d-sm-none align-items-center">
              <div className="dropdown py-4 border-start">
                <Link
                  className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
                  to="#"
                  data-bs-toggle="dropdown"
                >
                  <span className="d-inline-block py-1">
                    <i className="align-middle opacity-60 mt-n1 me-2"></i>
                    Select School
                  </span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="me-2 opacity-60"></i>1st Class
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="me-2 opacity-60"></i>2nd Class
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-block d-sm-none align-items-center border-start">
              <span className="fs-md text-nowrap me-4">
                <div className="dropdown py-4 border-start">
                  <Link
                    className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="d-inline-block py-1">
                      <i className="align-middle opacity-60 mt-n1 me-2"></i>
                      Select Class
                    </span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="me-2 opacity-60"></i>1st Class
                      </Link>
                      <Link className="dropdown-item" to="#">
                        <i className="me-2 opacity-60"></i>2nd Class
                      </Link>
                    </li>
                  </ul>
                </div>
              </span>
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
                      href="marketplace-single.html"
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
                  <Link className="product-thumb-overlay" to="#"></Link>
                  <img src="img/marketplace/products/02.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by
                      <Link className="product-meta fw-medium" to="#">
                        Createx Std.{" "}
                      </Link>
                      in
                      <Link className="product-meta fw-medium" to="#">
                        Graphics
                      </Link>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <a href="marketplace-single.html">
                      Floating Phone and Tablet Mockup
                    </a>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>109
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $15.<small>00</small>
                    </div>
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
                <Link className="page-link" to="#">
                  <i className="ci-arrow-left me-2"></i>Prev
                </Link>
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
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Next">
                  Next<i className="ci-arrow-right ms-2"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
