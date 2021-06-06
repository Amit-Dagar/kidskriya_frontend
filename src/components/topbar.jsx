import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner";
import axios from "axios";
import { server, config } from "../env";

export default class TopBar extends PureComponent {
  state = {
    user_type: "",
    login: "wait",
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    dropdown: "hide",
  };

  componentDidMount = async () => {
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
    await axios
      .get(server + "/api/auth/checkAccess", config)
      .then((rsp) => {
        this.setState({
          user_type: rsp.data.payload.type,
        });
      })
      .catch((err) => {
        this.props.history.push("/");
      });
  };

  dropdown = () => {
    this.setState({
      dropdown: this.state.dropdown === "hide" ? "show" : "hide",
    });
  };

  signout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.setState({ login: false });
    window.location.href = "/";
  };
  render() {
    const { login, cart, user_type, dropdown } = this.state;
    return (
      <header className="bg-light shadow-sm navbar-sticky">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link
              className="navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1"
              to="/"
            >
              <img src="/logo.png" width="100" alt="Cartzilla" />
            </Link>
            <Link className="navbar-brand d-sm-none me-2 order-lg-1" to="/">
              <img src="/logo.png" width="74" alt="Cartzilla" />
            </Link>
            <div
              className="collapse navbar-collapse me-auto order-lg-2"
              id="navbarCollapse"
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </div>

            <div className="navbar-toolbar d-flex align-items-center order-lg-3">
              {login === false ? (
                <div className="navbar-tool">
                  <Link to="/signin" className="btn btn-primary btn-sm">
                    Sign In
                  </Link>
                </div>
              ) : login === true ? (
                <div className="navbar-tool dropdown ms-2">
                  <Link
                    className="navbar-tool-icon-box border dropdown-toggle"
                    to="#"
                    onClick={this.dropdown}
                  >
                    <i className="ci-user position-absolute top-50 start-0 translate-middle-y fs-md ms-3"></i>
                  </Link>
                  <small className="navbar-tool-text ms-n1">
                    {localStorage.getItem("username")}
                  </small>

                  <div
                    className={"dropdown-menu dropdown-menu-end " + dropdown}
                  >
                    <div style={{ minWidth: "14rem" }}>
                      <h6 className="dropdown-header">Account</h6>
                      {user_type === "admin" ? (
                        <Link
                          className="dropdown-item d-flex align-items-center"
                          to="/adminDashboard"
                        >
                          <i className="ci-settings opacity-60 me-2"></i>
                          Dashboard
                        </Link>
                      ) : (
                        <Link
                          className="dropdown-item d-flex align-items-center"
                          to="/"
                        >
                          <i className="ci-settings opacity-60 me-2"></i>
                          Home
                        </Link>
                      )}
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to="/orders"
                      >
                        <i className="ci-basket opacity-60 me-2"></i>Orders
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to="/settings"
                      >
                        <i className="ci-settings opacity-60 me-2"></i>
                        Settings
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to="#"
                        onClick={this.signout}
                      >
                        <i className="ci-sign-out opacity-60 me-2"></i>Sign Out
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="navbar-tool">
                  <button className="btn btn-primary btn-sm">
                    <Spinner />
                  </button>
                </div>
              )}

              <div className="navbar-tool ms-4">
                <Link
                  className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                  to="/cart"
                >
                  <span className="navbar-tool-label" id="cart-items">
                    {cart.length}
                  </span>
                  <i className="navbar-tool-icon ci-cart"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
