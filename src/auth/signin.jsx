import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import axios from 'axios';


export default class Signin extends PureComponent {

  state= {
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
    passwordType: "password"
  };

  onSignin = async(event) => {
    event.preventDefault();
    const params = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios.post("http://localhost:8000/api/auth/login", params, this.state.config)
      .then((response) => {
          localStorage.setItem("token", response.data.payload.token);
          localStorage.setItem("username", response.data.payload.user);
          window.location.href = "/";
        });
  }

  onSignup = async(event) => {
    event.preventDefault();
    const params = {
      name: JSON.stringify(event.target.name.value),
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios.post("http://localhost:8000/api/auth/signup", params, this.state.config)
      .then(() => {
          window.location.href = "/";
        });
  }
    
  render() {
    return (
      <Fragment>
        <Topbar />

        <div className="container py-4 py-lg-5 my-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h2 className="h4 mb-1">Sign in</h2>

                  <h3 className="fs-base pt-4 pb-2">
                    Login using your registered email and password
                  </h3>
                  <form className="needs-validation" novalidate="" onSubmit={this.onSignin.bind(this)}>
                    <div className="input-group mb-3">
                      <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="email"
                        name="email"
                        placeholder="Registered E-Mail Address"
                        required=""
                        autoFocus={true}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <i className="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <div className="password-toggle w-100">
                        <input
                          className="form-control"
                          name="password"
                          minLength={8}
                          type="password"
                          placeholder="Password"
                          required=""
                        />
                        <label
                          className="password-toggle-btn"
                          aria-label="Show/hide password"
                        >
                          <input
                            className="password-toggle-check"
                            type="checkbox"
                          />
                          <span className="password-toggle-indicator"></span>
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked=""
                          id="remember_me"
                        />
                        <label className="form-check-label" for="remember_me">
                          Remember me
                        </label>
                      </div>
                      <Link
                        className="nav-link-inline fs-sm"
                        to="/forgot-password"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <hr className="mt-4" />
                    <div className="text-end pt-4">
                      <button className="btn btn-primary" type="submit" onClick={() => this.onSignin()}>
                        <i className="ci-sign-in me-2 ms-n21"></i>Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4 mt-3 mt-md-0">
              <h2 className="h4 mb-3">No account? Sign up</h2>
              <p className="fs-sm text-muted mb-4">
                Registration takes less than a minute but gives you full control
                over your orders.
              </p>
              <form className="needs-validation" novalidate=""onSubmit={this.onSignup.bind(this)}>
                <div className="row gx-4 gy-3">
                  <div className="col-sm-12">
                    <label className="form-label" for="reg-fn">
                      Full Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      required=""
                      id="reg-fn"
                    />
                  </div>
                  <div className="col-sm-12">
                    <label className="form-label" for="reg-phone">
                      E-Mail Address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      required=""
                      id="reg-email"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="reg-password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      required=""
                      name="password"
                      minLength={8}
                      id="reg-password"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="reg-password-confirm">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="cnf_password"
                      minLength={8}
                      required=""
                      id="reg-password-confirm"
                    />
                  </div>
                  <div className="col-12 text-end">
                    <button className="btn btn-primary" type="submit" onClick={() => this.onSignup}>
                      <i className="ci-user me-2 ms-n1"></i>Sign Up
                    </button>
                  </div>
                  <p className="fs-sm text-muted mb-4">
                    Please signin after creating your account.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
