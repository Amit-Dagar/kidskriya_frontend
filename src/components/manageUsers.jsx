import React, { Fragment, PureComponent } from 'react'
import Footer from './footer'
import TopBar from './topbar'
import server from '../.env.js'
import axios from 'axios'

export default class manageUsers extends PureComponent {

    state = {
        users: [],
        userID: "",
        config: {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem('token')
            },
        },
    }

    componentDidMount = async () => {
        await this.readUsers("http://localhost:8000/api/auth/readUsers", this.state.config);
    };
    readUsers = async (url) => {
        axios.get(url).then((rsp) => {
          this.setState({
            users: rsp.data.payload,
          });
        });
    };

    deleteUser = async() => {
        axios.delete("http://localhost:8000/api/auth/delete/" + this.state.userID, this.state.config)
    }

    render() {
        const { users } = this.state
        return (
            <Fragment>
                <TopBar />
                    <div className="container py-4 py-lg-5 my-6 col-sm-6">
                        <div className="row d-flex justify-content-center">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <h2 className="h3 mb-1 text-center">
                                        Manage Users
                                    </h2>
                                    <p>{this.state.userID}</p>
                                    <div className="row pt-3 mx-n2">
                                        {users.map((user, index) => (
                                            <div className="col-lg-6 d-flex justify-content-between align-items-center" 
                                                key={index}>
                                                    <h3 className="product-title fs-sm mb-2">
                                                        {user.name}
                                                    </h3>
                                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                    <button className="btn-danger text-accent rounded-1 py-1 px-2 border-0" 
                                                            onClick={() => {this.setState({
                                                                userID: user.id
                                                            }); this.deleteUser()}
                                                        }>
                                                        Delete
                                                    </button>
                                                    </div>
                                                    <br />
                                            </div>
                                            
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </Fragment>
        )
    }
}