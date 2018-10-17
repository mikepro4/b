import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class RestApi extends Component {
	renderHead = () => (
		<Helmet>
			<title>Blade – Rest API </title>
			<meta property="og:title" content="Rest API" />
		</Helmet>
	);
	render() {
		return (
			<div className="page-content">
				{this.renderHead()}

        <h1>Rest API</h1>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time.

				</p>

				<small>Some really nice small text.</small>



				<p><a href="http://localhost:3000/api/rest_api">http://localhost:3000/api/rest_api</a></p>

				<h2>H4 Section Title</h2>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>

				<em>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time.
				</em>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time.
				</p>

				<small>Some really nice small text.</small>



				<h3>H4 Section Title</h3>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time. BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>

				<em> Shortet text in em</em>

				<blockquote>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time.
				</blockquote>

				<ul>
					<li>
						Some list item 1

						<ul>
							<li>
								Some list item 1 a
							</li>

							<li>
								Some list item 1 a longer item here
							</li>

							<li>
							BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
							market <a href="/">and user data is available and updates</a> in real-time.
							</li>

							<li>
								Some list item 1
								<ul>
									<li>
										Some list item 1 a
									</li>

									<li>
									BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All

									<h4>Something here</h4>

									market and <a href="/">user data</a> is available and updates in real-time.BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
									market and user data is available and updates in real-time.BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
									market and user data is available and updates in real-time.BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
									market and user data is available and updates in real-time.
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>Some list item 2</li>
					<li>Some list item 3</li>
					<li>Some list item 4</li>
				</ul>

				<mark>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time.
				</mark>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time. BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>

				<mark>One sentence title</mark>

				<ol>
					<li>
						Some list item 1

						<ol>
							<li>
								Some list item 1 a
							</li>

							<li>
								Some list item 1
							</li>
						</ol>
					</li>
					<li>Some list item 2</li>
					<li>Some list item 3</li>
					<li>Some list item 4</li>
				</ol>

				<p>
					The BitMEX APIs are open and complete. Every
					function used by the BitMEX website is exposed via the API,
					allowing developers full control to build any kind of application on top of BitMEX.
				</p>

				<blockquote>Smaller title in blockquote</blockquote>

				<em>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time.
				</em>

				<p>
					The completeness of BitMEX’s API is best-in-class and unique in the trading space.
				</p>

				<h2>H2 Section Title</h2>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>


				<h3>H3 Section Title</h3>

				<p>
					The BitMEX APIs are open and complete. Every
					function used by the BitMEX website is exposed via the API,
					allowing developers full control to build any kind of application on top of BitMEX.
				</p>

				<h4>H4 Section Title</h4>

				<p>
					The completeness of BitMEX’s API is best-in-class and unique in the trading space.
				</p>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>

				<h2>H2 Section Title</h2>

				<p>
					The completeness of BitMEX’s API is best-in-class and unique in the trading space.
				</p>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>

				<h2>The completeness of BitMEX’s API is best-in-class and unique in the trading space.</h2>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>



				<h5>H5 Section Title</h5>
				<p>
					The completeness of BitMEX’s API is best-in-class and unique in the trading space.
				</p>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>


				<h6>H6 Section Title</h6>
				<p>
					The completeness of BitMEX’s API is best-in-class and unique in the trading space.
				</p>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>


			</div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: connect(mapStateToProps, {})(RestApi)
}
