import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="bg-dark">
        <div className="pt-5 bg-darker">
            <div className="container">
              <td
                style={{display:"flex", justifyContent: "space-evenly" }}>
              <tr>
              <div
                className="widget w-100 mb-4 pb-3 text-center mx-auto"
                style={{ maxWidth: "28rem" }}
              >
                <h3 className="widget-title text-light pb-1">
                  Subscribe for new product notifications
                </h3>
                <form
                  className="subscription-form validate"
                  action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                  method="post"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  novalidate
                >
                  <div className="input-group flex-nowrap">
                    <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="email"
                      name="EMAIL"
                      placeholder="Your email"
                      required
                    />
                    <button
                      className="btn btn-primary"
                      type="submit"
                      name="subscribe"
                    >
                      Subscribe*
                    </button>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      className="subscription-form-antispam"
                      type="text"
                      name="b_c7103e2c981361a6639545bd5_29ca296126"
                      tabindex="-1"
                    />
                  </div>
                  <div className="form-text text-light opacity-50">
                    *Receive early discount offers, updates and new products info.
                  </div>
                  <div className="subscription-status"></div>
                </form>
              </div>
              </tr>
              <tr>
                <div className="widget">
                  <div className="input-group">
                    <i className="ci-phone text-light" style={{padding: ".5em"}}> </i>
                    <h3 className="widget-title text-light pb-1">
                        Contact Us
                    </h3>
                  </div>
                  <hr />
                  <div
                    style={{display:"grid", padding:"1px"}}>
                    <p className="form-text text-light opacity-50"
                      style={{margin:"5px"}}>
                      Phone Number: +91 XXXXX XXXXX
                    </p>
                    <p className="form-text text-light opacity-50"
                      style={{margin:"5px"}}>
                      E-Mail Address: <a href="mailto:email@example.com">email@example.com</a>
                    </p>
                    <p className="form-text text-light opacity-50"
                      style={{margin:"5px"}}>
                      Write To Us at Address_Address
                    </p>
                  </div>
                  
                </div>
              </tr>
              </td>
            <hr className="hr-light mb-3" />
            <div className="d-md-flex justify-content-between pt-4">
              <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">
                © All rights reserved. Made by
                <Link
                  className="text-light"
                  to="/"
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  KidsKriya Team
                </Link>
              </div>
              <div className="widget widget-links widget-light pb-4">
                <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                  {/* <li className="widget-list-item ms-4">
                    <a className="widget-list-link fs-ms" href="#">
                      Help Center
                    </a>
                  </li> */}
                  {/* <li className="widget-list-item ms-4">
                    <a className="widget-list-link fs-ms" href="#">
                      Affiliates
                    </a>
                  </li> */}
                  <li className="widget-list-item ms-4">
                    <Link className="widget-list-link fs-ms" to="#">
                      Support
                    </Link>
                  </li>
                  <li className="widget-list-item ms-4">
                    <Link className="widget-list-link fs-ms" to="/adminLogin">
                      Admin
                    </Link>
                  </li>
                  {/* <li className="widget-list-item ms-4">
                    <a className="widget-list-link fs-ms" href="#">
                      Terms &amp; Conditions
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
