import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button, Intent, Icon } from "@blueprintjs/core";

class HomePage extends Component {
	renderHead = () => (
		<Helmet>
			<title>Blade – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
	);
	render() {
		return (
			<div>
				<div className="page-bg"></div>

				<div className="route-page home-page">

						{this.renderHead()}

						<div className="page-section hero-section">

							<div className="home-page-main-title">
								Trade the largest selection of crypto perpetuals
							</div>

							<div className="home-page-secondary-title">
								Start trading anonymously within seconds
							</div>

							<div className="home-page-main-cta">
								<Link to="/auth/signup">
									<Button
										intent={Intent.PRIMARY}
										text="Start trading"
										large="true"
									/>
								</Link>
							</div>

						</div>

						<div className="page-section laptop-section">
							<div className="laptop">

								<div className="product-screenshot-container">
									<img className="product-screenshot" src="/exchange.png" />
									<div className="product-screenshot-overlay-bg" />

									<div className="product-screenshot-overlay-headline-container">
										<div className="product-screenshot-overlay-headline-logo" />
										<div className="product-screenshot-overlay-headline">Trade on Blade</div>
									</div>

									<div className="product-screenshot-overlay-button-container">
										<Button
											text="View live trading"
											className="button-white"
										/>
									</div>

								</div>

							</div>
						</div>

						<div className="page-section contracts-section">
							<div className="contracts-section-title">Select contract to trade</div>
							<div className="contracts-section-subtitle">
								Blade offers separate order books for perpetuals on 9 crypto-fiat pairs with more to follow
							</div>

							<ul className="contract-list">
								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-btc">
											<div className="crypto-logo crypto-logo-btc" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">$</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">BTC/USD</div>
										<div className="contract-price">$6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>

								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-btc">
											<div className="crypto-logo crypto-logo-btc" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">€</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">BTC/EUR</div>
										<div className="contract-price">€6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>

								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-btc">
											<div className="crypto-logo crypto-logo-btc" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">₩</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">BTC/KRW</div>
										<div className="contract-price">₩6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>

								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-btc">
											<div className="crypto-logo crypto-logo-btc" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">¥</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">BTC/JPY</div>
										<div className="contract-price">¥6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>

								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-btc">
											<div className="crypto-logo crypto-logo-bch" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">$</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">BCH/USD</div>
										<div className="contract-price">¥6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>

								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-eos">
											<div className="crypto-logo crypto-logo-eos" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">$</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">EOS/USD</div>
										<div className="contract-price">$6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>

								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-ltc">
											<div className="crypto-logo crypto-logo-ltc" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">$</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">LTC/USD</div>
										<div className="contract-price">$6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>

								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-xrp">
											<div className="crypto-logo crypto-logo-xrp" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">$</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">XRP/USD</div>
										<div className="contract-price">$6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>

								<li className="contract-link">

									<div className="contract-logo-container">

										<div className="crypto-logo-container crypto-logo-container-xlm">
											<div className="crypto-logo crypto-logo-xlm" />
										</div>

										<div className="crypto-logo-fiat-container">
											<div className="crypto-logo-fiat">$</div>
										</div>

									</div>

									<div className="contract-description">
										<div className="contract-title">XLM/USD</div>
										<div className="contract-price">$6,210.00</div>
									</div>

									<div className="contract-arrow-container">
										<Icon icon="chevron-right" iconSize={20} className="contract-arrow" />
									</div>
								</li>
							</ul>
						</div>

						<div className="page-section info-section"></div>

				</div>
			</div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: connect(mapStateToProps, {})(HomePage)
}
