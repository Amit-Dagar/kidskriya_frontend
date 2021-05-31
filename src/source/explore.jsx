import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import Loader from "../components/spinner";
import { server } from "../.env.js";
import axios from "axios";

const LoaderIcon = (
  <i className="position-absolute top-50 start-0 translate-middle-y fs-md ms-3">
    <Loader />
  </i>
);

const searchIcon = (
  <i className="ci-search position-absolute top-50 start-0 translate-middle-y fs-md ms-3"></i>
);

export default class Explore extends PureComponent {
  state = {
    products: [],
    school: [],
    classes: [],
    isLoaded: false,
    productID: "",
    schoolID: "",
    schoolName: "Select School",
    className: "Select Class",
    classId: "",
    login: "",
    query: "",
    loader: searchIcon,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  };

  componentDidMount = () => {
    var token = localStorage.getItem("token");
    if (token !== null) {
      this.setState({
        login: true,
      });
    } else {
      this.setState({
        login: false,
      });
    }
  };

  componentDidMount = async () => {
    await this.readProducts(server + "/api/product/read");
    await this.readSchools(server + "/api/school/read");
    await this.readClasses(server + "/api/school/class/read");
  };

  readProducts = async (url) => {
    this.setState({
      loader: LoaderIcon,
    });
    axios.get(url).then((rsp) => {
      this.setState({
        products: rsp.data.payload,
        loader: searchIcon,
      });
    });
  };
  readClasses = async (url) => {
    axios.get(url).then((response) => {
      this.setState({
        classes: response.data.payload,
      });
    });
  };
  readSchools = async (url) => {
    axios.get(url).then((response) => {
      this.setState({
        school: response.data.payload,
      });
    });
  };

  buynow = () => {
    const params = {
      products: this.state.productID,
      school: this.state.schoolID,
      class: this.state.clsID,
    };
    axios.post(server + "/api/order/checkout", params, this.state.config);
  };

  addToCart = async (productID, domId) => {
    var cart = this.state.cart;

    if (cart.filter((data) => data === productID).length > 0) {
      document.getElementById(domId).innerText = "Added To Cart";
      return;
    }

    await this.setState({
      cart: cart.concat([productID]),
    });

    localStorage.setItem("cart", JSON.stringify(this.state.cart));

    document.getElementById("cart-items").innerText = this.state.cart.length;

    document.getElementById(domId).innerText = "Added To Cart";
  };

  search = (event) => {
    const search = event.target.value;
    this.setState({
      search,
      loader: LoaderIcon,
    });
    axios.get(server + "/api/product/read?search=" + search).then((rsp) => {
      this.setState({
        products: rsp.data.payload,
        loader: searchIcon,
      });
    });
  };

  filter = async (school = null, cls = null) => {
    await this.setState({
      schoolID: school === null ? this.state.schoolID : school,
      classId: cls === null ? this.state.classId : cls,
      loader: LoaderIcon,
    });
    var search = "";
    if (this.state.schoolID === "") {
      if (this.state.classId === "") {
        search = "";
      } else {
        search = "&class=" + this.state.classId;
      }
    } else {
      if (this.state.classId === "") {
        search = "";
      } else {
        search += "&class=" + this.state.classId;
      }
      search += "&school=" + this.state.schoolID;
    }

    localStorage.setItem("school", this.state.schoolID);
    localStorage.setItem("class", this.state.classId);

    axios.get(server + "/api/product/read?" + search).then((rsp) => {
      this.setState({
        products: rsp.data.payload,
        loader: searchIcon,
      });
    });
  };

  render() {
    const { products, school, classes, loader } = this.state;
    const { schoolName, className } = this.state;

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
            <div className="d-md-none">
              <div className="d-flex align-items-center ps-2 row">
                <div className="col-12">
                  <div className="input-group">
                    <form onSubmit={this.search}>
                      {loader}
                      <input
                        className="form-control border-0 shadow-none"
                        type="text"
                        name="query"
                        placeholder="Search products..."
                        onChange={this.search}
                      />
                    </form>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="dropdown py-4">
                      <Link
                        className="nav-link-style fs-md fw-medium dropdown-toggle p-4 card"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <span className="d-inline-block py-1">
                          <i className="align-middle opacity-60 mt-n1 me-2"></i>
                          {schoolName}
                        </span>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end">
                        {school.map((school, index) => (
                          <li>
                            <Link
                              className="dropdown-item"
                              href="#"
                              key={index}
                              onClick={() => {
                                this.setState({
                                  schoolName: school.name,
                                });
                                this.filter(school.id);
                              }}
                            >
                              <i className="me-2 opacity-60"></i>
                              {school.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="dropdown py-4">
                      <Link
                        className="nav-link-style fs-md fw-medium dropdown-toggle p-4 card"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <span className="d-inline-block py-1">
                          <i className="align-middle opacity-60 mt-n1 me-2"></i>
                          {className}
                        </span>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end">
                        {classes.map((cls, index) => (
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              key={index}
                              onClick={() => {
                                this.setState({
                                  className: cls.name,
                                });
                                this.filter(null, cls.id);
                              }}
                            >
                              <i className="me-2 opacity-60"></i>
                              {cls.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-none d-md-block">
              <div className="d-flex align-items-center ps-2">
                <div className="input-group">
                  <form onSubmit={this.search}>
                    {loader}
                    <input
                      className="form-control border-0 shadow-none"
                      type="text"
                      name="query"
                      placeholder="Search products..."
                      onChange={this.search}
                    />
                  </form>
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
                        {schoolName}
                      </span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end">
                      {school.map((school, index) => (
                        <li>
                          <Link
                            className="dropdown-item"
                            href="#"
                            key={index}
                            onClick={() => {
                              this.setState({
                                schoolName: school.name,
                              });
                              this.filter(school.id);
                            }}
                          >
                            <i className="me-2 opacity-60"></i>
                            {school.name}
                          </Link>
                        </li>
                      ))}
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
                          {className}
                        </span>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end">
                        {classes.map((cls, index) => (
                          <li>
                            <Link
                              className="dropdown-item"
                              to="#"
                              key={index}
                              onClick={() => {
                                this.setState({
                                  className: cls.name,
                                });
                                this.filter(null, cls.id);
                              }}
                            >
                              <i className="me-2 opacity-60"></i>
                              {cls.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </span>
                </div>
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
                        style={{ height: "200px" }}
                      />
                    </div>
                  </Link>
                  <div className="card-body">
                    <h3 className="product-title fs-sm mb-2">
                      <Link href="#">{product.name}</Link>
                    </h3>
                    {/* <small>About the product</small> */}
                    <div className=" text-accent rounded-1 py-1 mb-1">
                      ₹{product.price}
                    </div>
                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                      {/* <button
                        className="btn-danger text-accent rounded-1 py-1 px-2 border-0"
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                          this.setState({
                            productID: product.id,
                          });
                          alert("buy Now");
                        }}
                      >
                        Buy Now
                      </button> */}
                      <button
                        className="btn-warning text-accent rounded-1 py-1 px-2 border-0 w-100"
                        id={"pro" + index}
                        onClick={() => {
                          this.addToCart(product.id, "pro" + index);
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <nav
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
          </nav> */}
        </div>
        <Footer />
      </Fragment>
    );
  }
}
