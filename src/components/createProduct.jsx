import axios from 'axios';
import React, { Fragment, PureComponent } from 'react'
import Footer from './footer'
import TopBar from './topbar'

export default class createProduct extends PureComponent {

    state = {
        classes: [],
        schools: [],
        isLoaded: false,
    };

    componentDidMount = async () => {
        await this.readSchools("http://localhost:8000/api/school/read");
        await this.readClasses("http://localhost:8000/api/school/class/read");
    }
    readSchools = async(url) => {
        axios.get(url).then((response) => {
            this.setState({
                schools: response.data.payload,
            })
        });
    };
    readClasses = async(url) => {
        axios.get(url).then((response) => {
            this.setState({
                classes: response.data.payload,
            })
        })
    }

    render() {
        const { schools, classes } = this.state;
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
                                    <form className="needs-validation" novalidate="" onSubmit={this.createSchool}>
                                        <div className="row gx-4 gy-3">
                                            <div className="input-group mb-3">
                                                <i className="ci-document position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="name"
                                                    name="name"
                                                    placeholder="Product Name"
                                                    required=""
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
                                                    required=""        
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <i className="ci-dollar position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="number"
                                                    name="price"
                                                    placeholder="Product Price"
                                                    required=""        
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <i className="ci-percent position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="number"
                                                    name="price"
                                                    placeholder="Discount Percentage"
                                                    required=""        
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <i className="ci-package position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="number"
                                                    name="stock"
                                                    placeholder="Product Stock"
                                                    required=""        
                                                />
                                            </div>
                                            <div class="input-group">
                                            <div class="input-group-text pe-2">
                                                <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="visibility" />
                                                <label class="form-check-label" for="visibility"></label>
                                                </div>
                                            </div>
                                            <input class="form-control" type="text" placeholder="Product Visibility" />
                                            </div>
                                            <div class="mb-3">
                                            <label for="school" class="form-label">Select School</label>
                                                <select class="form-select" id="school" >
                                                    <option value="">Choose a school</option>
                                                    {schools.map((school, index) => (
                                                        <option value={school.name} key={index} >{school.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                            <label for="cls" class="form-label">Select Class</label>
                                                <select class="form-select" id="cls" >
                                                    <option value="">Choose a Class</option>
                                                    {classes.map((class_single, index) => (
                                                    <option value={class_single.name} key={index} >{class_single.name}</option>
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
        )
    }
}