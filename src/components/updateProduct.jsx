import React, { Fragment, PureComponent } from "react";
import Footer from "./footer";
import TopBar from "./topbar";
import { server } from "../env.js";
import axios from "axios";

export default class updateProduct extends PureComponent {
  state = {
    products: [],
    classes: [],
    schools: [],
    school: "",
    cls: "",
    visibility: "true",
    productID: "",
    config: {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    },
  };
  componentDidMount = async () => {
    await this.readProducts(server + "/api/product/read");
  };
  readProducts = async (url) => {
    axios.get(url).then((rsp) => {
      this.setState({
        products: rsp.data.results,
      });
    });
  };

  updateProduct = (event) => {
    event.preventDefault();
    const params = new FormData();
    params.append("name", event.target.name.value);
    params.append(
      "banner",
      event.target.banner.files[0] === undefined
        ? ""
        : event.target.banner.files[0]
    );
    params.append("price", event.target.price.value);
    params.append("discount", event.target.discount.value);
    params.append("stock", event.target.stock.value);
    params.append("visibility", event.target.visibility.value);
    params.append("school", this.state.school);
    params.append("cls", this.state.cls);

    axios.put(
      "http://localhost:8000/api/product/update/" + this.state.productID,
      params,
      this.state.config
    );
  };

  render() {
    const { products, visibility } = this.state;
    return (
      <Fragment>
        <TopBar />
        <div className="container py-4 py-lg-5 my-6">
          <div className="row d-flex justify-content-center">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h2 className="h3 mb-1 text-center">
                  Select a Product to Update
                </h2>
                <form
                  className="needs-validation"
                  noValidate=""
                  onSubmit={this.updateProduct}
                >
                  <div className="mb-3">
                    <label name="select" className="form-label">
                      Select Product
                    </label>
                    <select className="form-select" id="select" required>
                      <option value="">Choose a Product</option>
                      {products.map((product, index) => (
                        <option
                          value={product.id}
                          key={index}
                          onChange={this.setState({
                            productID: product.id,
                            school: product.school,
                            cls: product.cls,
                          })}
                        >
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <i className="ci-bag position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="name"
                      name="name"
                      placeholder="Updated Name"
                    />
                  </div>
                  <p className="form-label">
                    Pick an image for the Product (if you want to update){" "}
                  </p>
                  <div className="input-group mb-3">
                    <i className="ci-image position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="file"
                      accept="image/png, image/jpeg"
                      name="banner"
                      placeholder="Product Image"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <i className="ci-dollar position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="number"
                      name="price"
                      placeholder="Updated Price"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <i className="ci-percent position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="number"
                      name="discount"
                      placeholder="Updated Discount Percentage"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <i className="ci-package position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="number"
                      name="stock"
                      placeholder="Updated Product Stock"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <div className="input-group-text pe-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="visibility"
                          checked={visibility}
                          onChange={() =>
                            this.setState({
                              visibility: visibility ? false : true,
                            })
                          }
                        />
                        <label className="form-check-label" name="visibility">
                          {visibility
                            ? "Product is Visible"
                            : "Product is Not Visible"}
                        </label>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-4" />
                  <div className="text-end pt-4">
                    <button className="btn btn-primary" type="submit">
                      Update Product
                    </button>
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
