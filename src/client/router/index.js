import React from "react";
import App from "../App";
import Home from "../react/pages/home";

import Api from "../react/pages/api";
import Overview from "../react/pages/api/overview";
import RestApi from "../react/pages/api/rest_api";

import Company from "../react/pages/company/";
import About from "../react/pages/company/about";
import Brand from "../react/pages/company/brand";
import Team from "../react/pages/company/team";

import FAQ from "../react/pages/faq/";

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
			{
				...Company,
				path: "/company",
				params: {
					name: "company"
				},
				routes: [
					{
						...About,
						path: "/company/about",
						params: {
							name: "about"
						}
					},
					{
						...Team,
						path: "/company/team",
						params: {
							name: "team"
						}
					},
					{
						...Brand,
						path: "/company/brand",
						params: {
							name: "brand"
						}
					}
				]
			},
			{
				...FAQ,
				path: "/faq",
				params: {
					name: "faq"
				}
			},
		]
	}
];
