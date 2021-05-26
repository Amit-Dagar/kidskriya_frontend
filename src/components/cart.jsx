import React, { Fragment, PureComponent } from 'react'
import Footer from './footer'
import TopBar from './topbar'
import {server} from '../.env.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class cart extends PureComponent {
    state= {
        cart: JSON.parse(localStorage.getItem("cart") || "[]"),
        products: [],
    }
    componentDidMount = async () => {
        await this.readProducts(server + "/api/product/read");
        // await this.readSchools(server + "/api/school/read");
        // await this.readClasses(server + "/api/school/class/read");
    };

    readProducts = async (url) => {
        axios.get(url).then((rsp) => {
          this.setState({
            products: rsp.data.results,
          });
        });
    };

    viewcart = () => {
        var product = this.state.products.filter((data) => data.id === product.id)[0];

        if (cart.filter((data) => data === product.id).length > 0) {
            return;
        } else {
            cart.push(product.id);
        }


    }


    render() {
        return (
            <Fragment>
                <TopBar />
                    <div className="container py-4 py-lg-5 my-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card border-0 shadow">
                                    <div className="card-body">
                                        <h2 className="h3 mb-1 text-center">
                                            View Your Cart Items
                                        </h2>
                                        <hr />
                                        {/* {cart.map((product, index) => (
                                            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
                                                <div className="card product-card alt">
                                                    <Link href="#">{product.name}</Link>
                                                </div>
                                            </div>
                                        ))} */}
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