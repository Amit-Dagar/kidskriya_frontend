import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import TopBar from "./topbar";
import Loader from "./spinner";
import Alert from "./alert";
import { server, config } from "../.env.js";
import axios from "axios";

export default class cart extends PureComponent {
  state = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    products: [],
    loader: "",
    message: "",
  };
  componentDidMount = async () => {
    await this.readProducts(server + "/api/product/read");
  };

  readProducts = async (url) => {
    axios.get(url).then((rsp) => {
      this.setState({
        products: rsp.data.payload,
      });
    });
  };

  removeItem = async (id) => {
    var cart = this.state.cart;

    cart = cart.filter((data) => data !== id);
    await this.setState({
      cart,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cart-items").innerText = cart.length;
  };

  checkAccess = async () => {
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

  checkout = async (e) => {
    e.preventDefault();
    await this.checkAccess();
    if (!this.state.login) {
      this.props.history.push("/signin");
    }

    this.setState({ loader: <Loader /> });

    const params = {
      address: e.target.address.value,
      additional: e.target.additional.value,
      school: localStorage.getItem("school"),
      class: localStorage.getItem("class"),
      products: this.state.cart,
    };

    await axios
      .post(server + "/api/order/checkout", params, config)
      .then((rsp) => {
        this.setState({
          loader: "",
          message: <Alert className="success" message={rsp.data.detail} />,
        });
        localStorage.removeItem("cart");
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            this.props.history.push("/signin");
          }
          this.setState({
            message: (
              <Alert className="danger" message={err.response.data.detail} />
            ),
          });
        }
        this.setState({
          loader: "",
        });
      });
  };

  render() {
    const { products, cart, message, loader } = this.state;
    var sum = 0;
    products.forEach((el) => {
      if (cart.includes(el.id)) sum += el.price;
    });
    return (
      <Fragment>
        <TopBar />
        <div className="container py-4 py-lg-5 my-4">
          <div className="row justify-content-center">
            <section className="col-lg-8">
              <div className="d-flex justify-content-center align-items-center pt-3 pb-4 pb-sm-5 mt-1">
                <Link className="btn btn-outline-primary btn-sm ps-2" to="/">
                  <i className="ci-arrow-left me-2"></i>Continue shopping
                </Link>
              </div>

              {products.map((product, index) =>
                cart.includes(product.id) ? (
                  <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
                    <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                      <a
                        className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
                        href="shop-single-v1.html"
                      >
                        <img
                          src={server + product.banner}
                          width="160"
                          alt="Product"
                        />
                      </a>
                      <div className="pt-2">
                        <h3 className="product-title fs-base mb-2">
                          <a href="shop-single-v1.html">{product.name}</a>
                        </h3>
                        <div className="fs-lg text-accent pt-2">
                          ₹{product.price}.<small>00</small>
                        </div>
                      </div>
                    </div>
                    <div
                      className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
                      style={{ maxWidth: "9rem" }}
                    >
                      <button
                        className="btn btn-link px-0 text-danger"
                        type="button"
                        onClick={() => this.removeItem(product.id)}
                      >
                        <i className="ci-close-circle me-2"></i>
                        <span className="fs-sm">Remove</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
              {cart.length > 0 ? (
                <form onSubmit={this.checkout}>
                  <div className="row mt-4">
                    <div className="col-12">{message}</div>
                    <div className="col-md-6">
                      <div class="mb-3 mb-4">
                        <label class="form-label mb-3" for="order-comments">
                          <span class="fw-medium">Address</span>
                        </label>
                        <textarea
                          class="form-control"
                          rows="3"
                          id="order-comments"
                          name="address"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="mb-3 mb-4">
                        <label class="form-label mb-3" for="order-comments">
                          <span class="fw-medium">
                            Additional Details(Contact Phone, Person name)
                          </span>
                        </label>
                        <textarea
                          class="form-control"
                          rows="3"
                          id="order-comments"
                          name="additional"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <small>Currently we are not supporting online payment.</small>
                  <div className="form-group mb-3 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="ex-check-1"
                        checked={true}
                      />
                      <label class="form-check-label" for="ex-check-1">
                        Cash on delivary
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-shadow d-block w-100 mt-4"
                  >
                    <i class="ci-card fs-lg me-2"></i>Proceed to Checkout (₹
                    {sum}) {loader}
                  </button>
                </form>
              ) : (
                <div className="d-sm-flex justify-content-center align-items-center my-2 pb-3 border-bottom">
                  <div className="text-center">
                    <h3>Cart is empty!</h3>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
