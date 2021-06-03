import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import TopBar from "./topbar";
import axios from "axios";
import { server, config, getUserType } from "../env";

export default class viewOrders extends PureComponent {
  state = {
    user_type: "",
    orders: [],
  };

  componentDidMount = async () => {
    await this.readOrders();
  };

  readOrders = async () => {
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
    await axios.get(server + "/api/order/read", config).then((rsp) => {
      this.setState({
        orders: rsp.data.payload,
      });
    });
  };

  render() {
    const { user_type, orders } = this.state;

    return (
      <Fragment>
        <TopBar />
        <div className="container py-4 py-lg-5 my-6 col-sm-8">
          <div className="row d-flex justify-content-center">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h2 className="h3 mb-1 text-center">All Orders</h2>
              </div>
              <div className="card-body">
                {user_type === "admin" ? (
                  <div className="table-responsive fs-md mb-4">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Product</th>
                          <th>Date Purchased</th>
                          <th>Status</th>
                          <th>Total Amount</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((data, index) => (
                          <tr key={index}>
                            <td className="py-3">
                              <Link
                                className="nav-link-style fw-medium fs-sm"
                                href="#order-details"
                                data-bs-toggle="modal"
                              >
                                {data.id}
                              </Link>
                            </td>
                            <td className="py-3">
                              {data.products[0].product_name}...
                            </td>
                            <td className="py-3">
                              {new Date(data.created).toDateString()}
                            </td>
                            <td className="py-3">
                              {data.status === 1 ? (
                                <span className="badge bg-info m-0">
                                  In Progress
                                </span>
                              ) : data.status === 2 ? (
                                <span className="badge bg-warning m-0">
                                  Out For Delivery
                                </span>
                              ) : (
                                <span className="badge bg-success m-0">
                                  Delivered
                                </span>
                              )}
                            </td>
                            <td className="py-3">₹{data.price.toFixed(2)}</td>
                            <td>
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() =>
                                  this.setState({ order: data.id })
                                }
                              >
                                Update
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <nav
                      className="d-flex justify-content-between pt-2 mt-4"
                      aria-label="Page navigation"
                    >
                      <ul className="pagination">
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            <i className="ci-arrow-left me-2"></i>Prev
                          </Link>
                        </li>
                      </ul>
                      <ul className="pagination">
                        <li className="page-item d-sm-none">
                          <span className="page-link page-link-static">
                            1 / 5
                          </span>
                        </li>
                        <li
                          className="page-item active d-none d-sm-block"
                          aria-current="page"
                        >
                          <span className="page-link">
                            1<span className="visually-hidden">(current)</span>
                          </span>
                        </li>
                      </ul>
                      <ul className="pagination">
                        <li className="page-item">
                          <Link className="page-link" to="#" aria-label="Next">
                            Next<i className="ci-arrow-right ms-2"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                ) : user_type === "school" ? (
                  <div className="table-responsive fs-md mb-4">
                    Name
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Product</th>
                          <th>Date Purchased</th>
                          <th>Status</th>
                          <th>Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((data, index) => (
                          <tr key={index}>
                            <td className="py-3">
                              <Link
                                className="nav-link-style fw-medium fs-sm"
                                href="#order-details"
                                data-bs-toggle="modal"
                              >
                                {data.id}
                              </Link>
                            </td>
                            <td className="py-3">
                              {data.products[0].product_name}...
                            </td>
                            <td className="py-3">
                              {new Date(data.created).toDateString()}
                            </td>
                            <td className="py-3">
                              {data.status === 1 ? (
                                <span className="badge bg-info m-0">
                                  In Progress
                                </span>
                              ) : data.status === 2 ? (
                                <span className="badge bg-warning m-0">
                                  Out For Delivery
                                </span>
                              ) : (
                                <span className="badge bg-success m-0">
                                  Delivered
                                </span>
                              )}
                            </td>
                            <td className="py-3">₹{data.price.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>{" "}
                    </table>
                  </div>
                ) : user_type === "user" ? (
                  <div className="table-responsive fs-md mb-4">
                    Name
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Product</th>
                          <th>Date Purchased</th>
                          <th>Status</th>
                          <th>Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((data, index) => (
                          <tr key={index}>
                            <td className="py-3">
                              <Link
                                className="nav-link-style fw-medium fs-sm"
                                href="#order-details"
                                data-bs-toggle="modal"
                              >
                                {data.id}
                              </Link>
                            </td>
                            <td className="py-3">
                              {data.products[0].product_name}...
                            </td>
                            <td className="py-3">
                              {new Date(data.created).toDateString()}
                            </td>
                            <td className="py-3">
                              {data.status === 1 ? (
                                <span className="badge bg-info m-0">
                                  In Progress
                                </span>
                              ) : data.status === 2 ? (
                                <span className="badge bg-warning m-0">
                                  Out For Delivery
                                </span>
                              ) : (
                                <span className="badge bg-success m-0">
                                  Delivered
                                </span>
                              )}
                            </td>
                            <td className="py-3">₹{data.price.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center">
                    <h4>No orders found</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {user_type === "admin" ? (
          <div className="modal fade" id="update">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Order Status</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">select</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Footer />
      </Fragment>
    );
  }
}
