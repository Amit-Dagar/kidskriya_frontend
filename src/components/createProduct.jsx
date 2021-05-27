import axios from "axios";
import React, { Fragment, PureComponent } from "react";
import Footer from "./footer";
import TopBar from "./topbar";
import { server } from "../.env";

export default class createProduct extends PureComponent {
  state = {
    config: {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    },
    classes: [],
    schools: [],
    isLoaded: false,
    visibility: false,
  };

  componentDidMount = async () => {
    await this.readSchools(server + "/api/school/read");
    await this.readClasses(server + "/api/school/class/read");
  };

  readSchools = async (url) => {
    axios.get(url).then((response) => {
      this.setState({
        schools: response.data.payload,
      });
    });
  };
  readClasses = async (url) => {
    axios.get(url).then((response) => {
      this.setState({
        classes: response.data.payload,
      });
    });
  };

  createProduct = (event) => {
    event.preventDefault();
    const params = new FormData();
    params.append("name", event.target.name.value);
    params.append("banner", event.target.banner.files[0]);
    params.append("price", event.target.price.value);
    params.append("discount", event.target.discount.value);
    params.append("stock", event.target.stock.value);
    params.append("visibility", event.target.visibility.value);
    params.append("school", event.target.school.value);
    params.append("cls", event.target.cls.value);

    axios.post(server + "/api/product/create", params, this.state.config);
  };

  render() {
    const { schools, classes, visibility } = this.state;
    return (
      <Fragment>
        <TopBar />
        <div className="container py-4 py-lg-5 my-6 col-sm-6">
          <div className="row d-flex justify-content-center">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h2 className="h3 mb-1 text-center">
                  Create a new Product for Listing
                </h2>
                <hr />
                <br />
                <form
                  className="needs-validation"
                  novalidate=""
                  onSubmit={this.createProduct}
                  encType="multipart/form-data"
                >
                  <div className="row gx-4 gy-3">
                    <div className="input-group mb-3">
                      <i className="ci-document position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="name"
                        name="name"
                        placeholder="Product Name"
                        required
                        autoFocus={true}
                      />
                    </div>
                    <p className="form-label">Pick an image for the Product</p>
                    <div className="input-group mb-3">
                      <i className="ci-image position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="file"
                        accept="image/png, image/jpeg"
                        name="banner"
                        placeholder="Product Image"
                        required
                      />
                    </div>
                    <div className="input-group mb-3">
                      <i className="ci-dollar position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="number"
                        name="price"
                        placeholder="Product Price"
                        required
                      />
                    </div>
                    <div className="input-group mb-3">
                      <i className="ci-percent position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="number"
                        name="discount"
                        placeholder="Discount Percentage"
                        required
                      />
                    </div>
                    <div className="input-group mb-3">
                      <i className="ci-package position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="number"
                        name="stock"
                        placeholder="Product Stock"
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
                    <div className="mb-3">
                      <label name="school" className="form-label">
                        Select School
                      </label>
                      <select className="form-select" id="school" required>
                        <option value="">Choose a school</option>
                        {schools.map((school, index) => (
                          <option value={school.id} key={index}>
                            {school.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label name="cls" className="form-label">
                        Select Class
                      </label>
                      <select className="form-select" id="cls" required>
                        <option value="">Choose a Class</option>
                        {classes.map((cls, index) => (
                          <option value={cls.id} key={index}>
                            {cls.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <hr className="mt-4" />
                    <div className="text-end pt-4">
                      <button className="btn btn-primary" type="submit">
                        Create Product
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
