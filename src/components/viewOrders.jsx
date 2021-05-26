import React, { Fragment, PureComponent } from 'react'
import Footer from './footer'
import TopBar from './topbar'

export default class viewOrders extends PureComponent {
    render() {
        return (
            <Fragment>
                <TopBar />
                    <div className="container py-4 py-lg-5 my-6 col-sm-6">
                        <div className="row d-flex justify-content-center">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <h2 className="h3 mb-1 text-center">
                                        View All Orders Here
                                    </h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </Fragment>
        )
    }
}