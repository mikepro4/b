import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames"

class MainLinks extends Component {
	isActivePath = (pathname) => {
		return this.props.location.pathname.indexOf(pathname) !== -1
	}
	render() {
		return (
			<div className="main-links-container">
        <ul className="main-links">

					<li className={classNames("main-link-container", {
              "main-link-active": this.isActivePath("/about")
            })}
          >
            <Link to ="/about" className="main-link">
              <span className="main-link-label">About</span>
            </Link>
          </li>

					<li className={classNames("main-link-container", {
              "main-link-active": this.isActivePath("/faq")
            })}
          >
            <Link to ="/faq" className="main-link">
              <span className="main-link-label">FAQ</span>
            </Link>
          </li>

					<li className={classNames("main-link-container", {
              "main-link-active": this.isActivePath("/api")
            })}
          >
            <Link to ="/api/overview" className="main-link">
              <span className="main-link-label">API DOCS</span>
            </Link>
          </li>

					<li className={classNames("main-link-container", {
              "main-link-active": this.isActivePath("/exchange")
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

function mapStateToProps(state) {
	return {
		location: state.router.location
	};
}

export default connect(mapStateToProps, {})(MainLinks);
