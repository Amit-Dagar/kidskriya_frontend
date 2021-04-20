import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import { server } from "../.env.js";
import axios from "axios";

export default class Explore extends PureComponent {
  state = {
    products: [],
    school: [],
    class: [],
    isLoaded: false,
  };

  componentDidMount = async () => {
    await this.readProducts(server + "/api/product/read");
    await this.readSchools(server + "/api/school/read");
    await this.readSchools(server + "/api/school/class/read");
  };

  readProducts = async (url) => {
    axios.get(url).then((rsp) => {
      this.setState({
        products: rsp.data.results,
      });
    });
  };
  readClasses = async (url) => {};
  readSchools = async (url) => {};

  render() {
    const { products } = this.state;
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
                  <Link
                    className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="d-inline-block py-1">
                      <i className="align-middle opacity-60 mt-n1 me-2"></i>
                      Select School
                    </span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="#">
                        <i className="me-2 opacity-60"></i>
                        GD Goenka School
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="me-2 opacity-60"></i>
                        DPS, Delhi
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
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span className="d-inline-block py-1">
                        <i className="align-middle opacity-60 mt-n1 me-2"></i>
                        Select Class
                      </span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item" href="#">
                          <i className="me-2 opacity-60"></i>1st Class
                        </Link>
                        <Link className="dropdown-item" href="#">
                          <i className="me-2 opacity-60"></i>2nd Class
                        </Link>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="row pt-3 mx-n2">
            {products.map((product, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter"
                key={index}
              >
                <div className="card product-card-alt">
                  <Link to="#">
                    <div className="product-thumb">
                      <img
                        src={server + product.banner}
                        alt="Product"
                        style={{ maxHeight: "300px" }}
                      />
                    </div>
                  </Link>
                  <div className="card-body">
                    <h3 className="product-title fs-sm mb-2">
                      <Link href="#">{product.name}</Link>
                    </h3>
                    <div className=" text-accent rounded-1 py-1 mb-1">₹81</div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <button className="btn-danger text-accent rounded-1 py-1 px-2 border-0">
                        Buy Now
                      </button>
                      <button className="btn-warning text-accent rounded-1 py-1 px-2 border-0">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <nav
            className="d-flex justify-content-between pt-2"
            aria-label="Page navigation"
          >
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" href="#">
                  <i className="ci-arrow-left me-2"></i>Prev
                </Link>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" href="#" aria-label="Next">
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
