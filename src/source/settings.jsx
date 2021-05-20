import React, {Fragment, PureComponent} from 'react';
import { Link } from "react-router-dom";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import axios from 'axios';

export default class Settings extends PureComponent {
    state = {
        config: {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem('token')
            },
          },
        login:"wait",

    };
    user = localStorage.getItem("username");

    componentDidMount = () => {
        var token = localStorage.getItem("token");
        if (token !== null) {
            this.setState({
                login: true
            });
        } else {
            this.setState({
                login: false
            });
        }
    }

    onPasswordUpdate = async(event) => {
        event.preventDefault();
        const params = {
            old_password: event.target.old_password.value,
            new_password: event.target.new_password.value,
        };

        axios.post("http://localhost:8000/api/auth/updatePassword", params, this.state.config)
            .then((response) => {
                if(response != null) {
                    console.log("Password updated")
                } else {
                    console.log("Not Updated")
                }
            })
    }

    render() {
        const { login } = this.state;
        return(
            <Fragment>
                <Topbar />
                {login === false ? (
                    <div className="container py-4 py-lg-5 my-4">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                   <h2 className="h4 mb-1 text-center">
                                        Please Sign in to continue
                                    </h2>
                                    <div className="text-end pt-4">
                                        <Link to="/signin" className="btn btn-primary btn-sm">
                                            Sign In
                                        </Link> 
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                ) : (            
    
                <div className="container py-4 py-lg-5 my-4">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                <h2 className="h4 mb-1 text-center">
                                    Hello {this.user}
                                </h2>

                                <h2 className="h5 mb-1" style={{padding: '20px'}}>
                                    Update your password
                                </h2>
                                <form className="needs-validation" novalidate="" onSubmit={this.onPasswordUpdate}>
                                    {/* <div className="input-group mb-3">
                                        <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3 md-col-6"></i>
                                        <input
                                            className="form-control rounded-start"
                                            type="email"
                                            name="email"
                                            placeholder="Registered E-Mail Address"
                                            required=""
                                            autoFocus={true}
                                        />
                                    </div> */}
                                    <div className="input-group mb-3">
                                        <div className="password-toggle w-100">
                                            <i className="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                            <input
                                            className="form-control"
                                            name="old_password"
                                            minLength={8}
                                            type="password"
                                            placeholder="Enter Existing Password"
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
                                            <span className="password-toggle-indicator"></span>
                                            </label>
                                            
                                        </div>

                                        <div className="password-toggle w-100">
                                            <i className="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                            <input
                                            className="form-control"
                                            name="new_password"
                                            minLength={8}
                                            type="password"
                                            placeholder="Enter New Password"
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
                                            <span className="password-toggle-indicator"></span>
                                            </label>
                                        </div>
                                        
                                        <hr className="mt-4" />
                                        <div className="text-end pt-4">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="ci-sign-in me-2 ms-n21"></i>Change Password
                                            </button>
                                        </div>
                                        </div>
                                </form>
                               
                             </div>
                                
                                    
                            </div>
                        </div>
                    </div>
                </div>
                )
                }
                <Footer />
            </Fragment>
        )
    }
}

