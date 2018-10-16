import React from "react";
import App from "../App";
import Home from "../react/pages/home";
import Api from "../react/pages/api";
import Overview from "../react/pages/api/overview";
import RestApi from "../react/pages/api/rest_api";

export default [
	{
		...App,
		routes: [
			{
				...Home,
				path: "/",
				exact: true,
				params: {
					name: "home"
				}
			},
			{
				...Api,
				path: "/api",
				params: {
					name: "api_docs"
				},
				routes: [
					{
						...Overview,
						path: "/api/overview",
						params: {
							name: "api_overview"
						}
					},
					{
						...RestApi,
						path: "/api/rest_api",
						params: {
							name: "rest_api"
						}
					}
				]
			},
		]
	}
];
