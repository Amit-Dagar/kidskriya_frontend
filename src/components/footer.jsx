import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="bg-dark">
        <div className="pt-5 bg-darker">
          <div className="container">
            <td style={{ display: "flex", justifyContent: "space-evenly" }}>
              <tr>
                <div className="widget">
                  <div className="input-group">
                    <i
                      className="ci-phone text-light"
                      style={{ padding: ".5em" }}
                    >
                      {" "}
                    </i>
                    <h3 className="widget-title text-light pb-1">Contact Us</h3>
                  </div>
                  <hr />
                  <div style={{ display: "grid", padding: "1px" }}>
                    <p
                      className="form-text text-light opacity-50"
                      style={{ margin: "5px" }}
                    >
                      Phone Number: +91 8708254761
                    </p>
                    <p
                      className="form-text text-light opacity-50"
                      style={{ margin: "5px" }}
                    >
                      E-Mail Address:{" "}
                      <a href="mailto:email@example.com">
                        suport@kidskriya.com
                      </a>
                    </p>
                    <p
                      className="form-text text-light opacity-50"
                      style={{ margin: "5px" }}
                    >
                      GD Goenka University, Shona, Gurgram
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
                    <Link className="widget-list-link fs-ms" to="#">
                      Support
                    </Link>
                  </li> */}
                  {/* <li className="widget-list-item ms-4">
                    <Link className="widget-list-link fs-ms" to="/adminLogin">
                      Admin
                    </Link>
                  </li> */}
                  <li className="widget-list-item ms-4">
                    <Link className="widget-list-link fs-ms" to="/schoolLogin">
                      School
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
