import React, { Fragment, PureComponent } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import { server } from "../.env";

export default class Admin extends PureComponent {
  state = {
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
    passwordType: "password",
  };

  onSignin = async (event) => {
    event.preventDefault();
    const params = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post(server + "/api/auth/adminLogin", params, this.state.config)
      .then((response) => {
        localStorage.setItem("token", response.data.payload.token);
        localStorage.setItem("username", response.data.payload.user);
        window.location.href = "/adminDashboard";
      });
  };

  render() {
    return (
      <Fragment>
        <Topbar />

        <div className="container py-4 py-lg-5 my-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h2 className="h4 mb-1">Admin Sign in</h2>

                  <h3 className="fs-base pt-4 pb-2">
                    Login using your registered email and password
                  </h3>
                  <form
                    // className="needs-validation"
                    novalidate=""
                    onSubmit={this.onSignin}
                  >
                    <div className="input-group mb-3">
                      <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="email"
                        name="email"
                        placeholder="Admin E-Mail Address"
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
                          {/* <span className="password-toggle-indicator"></span> */}
                        </label>
                      </div>
                    </div>
                    <hr className="mt-4" />
                    <div className="text-end pt-4">
                      <button className="btn btn-primary" type="submit">
                        <i className="ci-sign-in me-2 ms-n21"></i>Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
