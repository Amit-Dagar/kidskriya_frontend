import axios from "axios";
import React, { Fragment, PureComponent } from "react";
import Footer from "./footer";
import TopBar from "./topbar";
import { server } from "../.env";

export default class createClasses extends PureComponent {
  state = {
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    },
  };

  createCls = async (event) => {
    event.preventDefault();
    const params = {
      name: event.target.cls.value,
    };

    axios
      .post(server + "/api/school/class/create", params, this.state.config)
      .then((response) => {
        window.location.href = "/adminDashboard";
      });
  };

  render() {
    return (
      <Fragment>
        <TopBar />
        <div className="container py-4 py-lg-5 my-6 col-sm-6">
          <div className="row d-flex justify-content-center">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h2 className="h3 mb-1 text-center">Create a new Class</h2>
                <br />
                <form
                  className="needs-validation"
                  noValidate=""
                  onSubmit={this.createCls}
                >
                  <div className="row gx-4 gy-3">
                    <div className="input-group mb-3 com-sm">
                      <i className="ci-user position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="name"
                        name="cls"
                        placeholder="Enter Class"
                        required=""
                        autoFocus={true}
                      />
                    </div>
                    <hr className="mt-4" />
                    <div className="text-end pt-4">
                      <button className="btn btn-primary" type="submit">
                        Create Class
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
