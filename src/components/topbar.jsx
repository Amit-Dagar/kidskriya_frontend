import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner";
import Cookies from "js-cookie";

export default class TopBar extends PureComponent {
  state = {
    login: "wait",
  };
  componentDidMount = () => {
    var token = Cookies.get("token");
    if (token !== undefined) {
      this.setState({
        login: true,
      });
    } else {
      this.setState({
        login: false,
      });
    }
  };
  render() {
    const { login } = this.state;
    return (
      <header className="bg-light shadow-sm navbar-sticky">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a
              className="navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1"
              href="index.html"
            >
              <img src="/logo.png" width="100" alt="Cartzilla" />
            </a>
            <a
              className="navbar-brand d-sm-none me-2 order-lg-1"
              href="index.html"
            >
              <img src="/logo.png" width="74" alt="Cartzilla" />
            </a>

            <div className="navbar-toolbar d-flex align-items-center order-lg-3">
              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              {login === false ? (
                <div className="navbar-tool">
                  <Link to="/signin" className="btn btn-primary btn-sm">
                    Sing In
                  </Link>
                </div>
              ) : login === true ? (
                <div className="navbar-tool dropdown ms-2">
                  <a
                    className="navbar-tool-icon-box border dropdown-toggle"
                    href="dashboard-sales.html"
                  >
                    <i className="ci-user position-absolute top-50 start-0 translate-middle-y fs-md ms-3"></i>
                  </a>
                  <small className="navbar-tool-text ms-n1">Amit Dagar</small>

                  <div className="dropdown-menu dropdown-menu-end">
                    <div style={{ minWidth: "14rem" }}>
                      <h6 className="dropdown-header">Account</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="dashboard-settings.html"
                      >
                        <i className="ci-settings opacity-60 me-2"></i>
                        Settings
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="dashboard-purchases.html"
                      >
                        <i className="ci-basket opacity-60 me-2"></i>Purchases
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="dashboard-favorites.html"
                      >
                        <i className="ci-heart opacity-60 me-2"></i>Favorites
                        <span className="fs-xs text-muted ms-auto">4</span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <h6 className="dropdown-header">Seller Dashboard</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="dashboard-sales.html"
                      >
                        <i className="ci-dollar opacity-60 me-2"></i>Sales
                        <span className="fs-xs text-muted ms-auto">
                          $1,375.00
                        </span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="dashboard-products.html"
                      >
                        <i className="ci-package opacity-60 me-2"></i>Products
                        <span className="fs-xs text-muted ms-auto">5</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="dashboard-add-new-product.html"
                      >
                        <i className="ci-cloud-upload opacity-60 me-2"></i>Add
                        New Product
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="dashboard-payouts.html"
                      >
                        <i className="ci-currency-exchange opacity-60 me-2"></i>
                        Payouts
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="account-signin.html"
                      >
                        <i className="ci-sign-out opacity-60 me-2"></i>Sign Out
                      </a>
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
                <a
                  className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                  href="marketplace-cart.html"
                >
                  <span className="navbar-tool-label">3</span>
                  <i className="navbar-tool-icon ci-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
