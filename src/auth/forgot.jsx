import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/topbar";
import Footer from "../components/footer";

export default class Forgot extends PureComponent {
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
                    <label htmlFor="">Enter phone number</label>
                    <div className="input-group mb-3">
                      <i className="ci-phone position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="phone"
                        placeholder="Phone"
                        required=""
                        autoFocus={true}
                      />
                    </div>
                    <div className="text-end pt-4">
                      <button className="btn btn-primary" type="submit">
                        Forgot Password
                      </button>
                    </div>
                    <hr className="mt-4" />
                    <div className="d-flex flex-wrap justify-content-between mt-4">
                      <Link className="nav-link-inline fs-sm" to="/signin">
                        Remember Password? Login
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
