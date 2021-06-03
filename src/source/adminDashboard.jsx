import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import TopBar from "../components/topbar";
import { server, axios, config } from "../env";

export default class adminDashboard extends PureComponent {
  state = {
    user_type: "",
  };
  componentDidMount = async () => {
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
  render() {
    const { user_type } = this.state;
    return user_type === "admin" ? (
      <Fragment>
        <TopBar />

        <div className="container py-4 py-lg-5 my-6">
          <div className="row">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h2 className="h3 mb-1 text-center">Welcome Admin</h2>
                <br />
                <h3 className="h5 mb-1">
                  What do you want to accomplish today?
                </h3>
                <hr className="mt-6" />
                <br />
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="col-3 text-start">
                    <Link
                      className="btn btn-primary"
                      type="submit"
                      to="/createSchool"
                    >
                      <i className="ci-user me-2 ms-n1"></i>Create a School
                    </Link>
                  </div>
                  <div className="col-3 text-start">
                    <Link
                      className="btn btn-primary"
                      type="submit"
                      to="/createProduct"
                    >
                      <i className="ci-user me-2 ms-n1"></i>Create New Products
                    </Link>
                  </div>
                  <div className="col-3 text-start">
                    <Link
                      className="btn btn-primary"
                      type="submit"
                      to="/manageUsers"
                    >
                      <i className="ci-user me-2 ms-n1"></i>Manage Users
                    </Link>
                  </div>
                </div>
                <br />
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="col-3 text-start">
                    <Link
                      className="btn btn-primary"
                      type="link"
                      to="/createClasses"
                    >
                      <i className="ci-user me-2 ms-n1"></i>Add new Classes
                    </Link>
                  </div>
                  <div className="col-3 text-start">
                    <Link
                      className="btn btn-primary"
                      type="submit"
                      to="/updateProduct"
                    >
                      <i className="ci-user me-2 ms-n1"></i>Update Products
                    </Link>
                  </div>
                  <div className="col-3 text-start">
                    <Link
                      className="btn btn-primary"
                      type="submit"
                      to="/orders"
                    >
                      <i className="ci-user me-2 ms-n1"></i>View Orders
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    ) : (
      ""
    );
  }
}
