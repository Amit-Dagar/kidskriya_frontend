import React, { Fragment, PureComponent } from 'react'
import Footer from './footer'
import TopBar from './topbar'
import axios from 'axios'
// import server from '../.env.js'

export default class createSchool extends PureComponent {
    state= {
        config: {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
          },
        },
        passwordType: "password"
      };
    
    createSchool = async(event) => {
        event.preventDefault();
        const params = {
            name: event.target.name.value,
            city: event.target.city.value,
            state: event.target.state.value,
            pin: event.target.pin.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            email: event.target.email.value,
        };

        axios.post("http://localhost:8000/api/school/create", params, this.state.config)
            .then((response) => {
                window.location.href = "/";
        });
    }
    
    render() {
        return (
            <Fragment>
                <TopBar />
                    <div className="container py-4 py-lg-5 my-6 col-sm-6">
                        <div className="row d-flex justify-content-center">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <h2 className="h3 mb-1 text-center">
                                        Create a new School
                                    </h2>
                                    <form className="needs-validation" novalidate="" onSubmit={this.createSchool}>
                                        <div className="row gx-4 gy-3">
                                            <div className="input-group mb-3 col-sm">
                                                <i className="ci-user position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="name"
                                                    name="name"
                                                    placeholder="School Name"
                                                    required=""
                                                    autoFocus={true}
                                                />
                                            </div>
                                            <div className="input-group mb-3 col-sm-6">
                                                <i className="ci-location position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="text"
                                                    name="city"
                                                    placeholder="School City"
                                                    required=""
                                                    autoFocus={true}
                                                />
                                            </div>
                                                <div className="input-group mb-3 col-sm-6">
                                                    <i className="ci-location position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                    <input
                                                        className="form-control rounded-start"
                                                        type="text"
                                                        name="state"
                                                        placeholder="School State"
                                                        required=""
                                                        autoFocus={true}
                                                    />
                                                </div>
                                            
                                        
                                            <div className="input-group mb-3">
                                                <i className="ci-number position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="number"
                                                    name="pin"
                                                    placeholder="Enter PIN Code "
                                                    required=""
                                                    autoFocus={true}
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <i className="ci-phone position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="number"
                                                    name="phone"
                                                    placeholder="School Phone Number"
                                                    required=""
                                                    autoFocus={true}
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <i className="ci-location position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="text"
                                                    name="address"
                                                    placeholder="Full Address"
                                                    required=""
                                                    autoFocus={true}
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                                <input
                                                    className="form-control rounded-start"
                                                    type="email"
                                                    name="email"
                                                    placeholder="E-Mail address"
                                                    required=""
                                                    autoFocus={true}
                                                />
                                            </div>
                                            <hr className="mt-4" />
                                            <div className="text-end pt-4">
                                            <button className="btn btn-primary" type="submit">
                                                Create School
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