import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

class MainLinks extends Component {
	render() {
		return (
			<div className="main-links-container">
        <ul className="main-links">
          <li className={classNames("main-link-container", {
              "main-link-active"
							: this.props.location.pathname == "/"
            })}
          >
            <Link to ="/" className="main-link">
              <span className="main-link-label">Home</span>
            </Link>
          </li>

					<li className={classNames("main-link-container", {
              "main-link-active": this.props.location.pathname == "/about"
            })}
          >
            <Link to ="/about" className="main-link">
              <span className="main-link-label">About</span>
            </Link>
          </li>

					<li className={classNames("main-link-container", {
              "main-link-active": this.props.location.pathname == "/faq"
            })}
          >
            <Link to ="/faq" className="main-link">
              <span className="main-link-label">FAQ</span>
            </Link>
          </li>

					<li className={classNames("main-link-container", {
              "main-link-active": this.props.location.pathname == "/api_docs"
            })}
          >
            <Link to ="/faq" className="main-link">
              <span className="main-link-label">API DOCS</span>
            </Link>
          </li>

					<li className={classNames("main-link-container", {
              "main-link-active": this.props.location.pathname == "/exchange"
            })}
          >
            <Link to ="/exchange" className="main-link">
              <span className="main-link-label">View live trading</span>
            </Link>
          </li>
        </ul>
			</div>
		);
	}
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps, {})(withRouter(MainLinks));
