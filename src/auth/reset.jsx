import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/topbar";
import Footer from "../components/footer";

export default class Reset extends PureComponent {
  render() {
    return (
      <Fragment>
        <Topbar />

        <div className="container py-4 py-lg-5 my-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h2 className="h4 mb-1">Forgot Password</h2>

                  <h3 className="fs-base pt-4 pb-2">Forgot password</h3>
                  <form className="needs-validation" novalidate="">
                    <div className="form-group">
                      <label htmlFor="">OTP</label>
                      <div className="input-group mb-3">
                        <input
                          className="form-control rounded-start"
                          type="number"
                          name="otp"
                          maxLength={6}
                          minLength={6}
                          placeholder="Enter OTP"
                          required
                          autoFocus={true}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">New Password</label>
                      <div className="input-group mb-3">
                        <input
                          className="form-control rounded-start"
                          name="new_password"
                          minLength={8}
                          type="password"
                          placeholder="Enter New Passowrd"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Confirm Password</label>
                      <div className="input-group mb-3">
                        <input
                          className="form-control rounded-start"
                          name="cnf_password"
                          minLength={8}
                          type="password"
                          placeholder="Enter New Passowrd"
                          required
                        />
                      </div>
                    </div>
                    <div className="text-end pt-4">
                      <button className="btn btn-primary" type="submit">
                        Reset Password
                      </button>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">
                      <Link
                        className="nav-link-inline fs-sm"
                        to="/forgot-password"
                      >
                        Resend OTP
                      </Link>
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
