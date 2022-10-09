import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
	pagesize = 10;
	render() {
		return (
			<div>
				<Router>

					<Navbar />
					<Routes>
						<Route exact path="/"
							element={<News key="general" pageSize={this.pagesize} country="in" category='general' />} />
						<Route exact path="/Business"
							element={<News key="business" pageSize={this.pagesize} country="in" category='business' />} />
						<Route exact path="/Sports"
							element={<News key="sports" pageSize={this.pagesize} country="in" category='sports' />} />
						<Route exact path="/Technology"
							element={<News key="technology" pageSize={this.pagesize} country="in" category='technology' />} />
						<Route exact path="/Health"
							element={<News key="health" pageSize={this.pagesize} country="in" category='health' />} />
						<Route exact path="/Science"
							element={<News key="science" pageSize={this.pagesize} country="in" category='science' />}
						/>
						<Route exact path="/Entertainment"
							element={<News key="entertainment" pageSize={this.pagesize} country="in" category='entertainment' />}
						/>
						<Route exact path="/General"
							element={<News key="general" pageSize={this.pagesize} country="in" category='general' />}
						/>
					</Routes>
				</Router>
			</div>
		);
	}
}
