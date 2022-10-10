import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
	pagesize = 10;
	apiKey = process.env.REACT_APP_NEWS_API
	state = {
		progress: 0,
	}
	setProgress = (progress) => {
		this.setState({ progress: progress });
	}
	render() {
		return (
			<div>
				<Router>

					<Navbar />
					<LoadingBar
						color='#f11946'
						progress={this.state.progress}
					// onLoaderFinished={() => setProgress(0)}
					/>
					<Routes>
						<Route exact path="/"
							element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pagesize} country="in" category='general' />} />
						<Route exact path="/Business"
							element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pagesize} country="in" category='business' />} />
						<Route exact path="/Sports"
							element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pagesize} country="in" category='sports' />} />
						<Route exact path="/Technology"
							element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pagesize} country="in" category='technology' />} />
						<Route exact path="/Health"
							element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pagesize} country="in" category='health' />} />
						<Route exact path="/Science"
							element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pagesize} country="in" category='science' />}
						/>
						<Route exact path="/Entertainment"
							element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pagesize} country="in" category='entertainment' />}
						/>
						<Route exact path="/General"
							element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pagesize} country="in" category='general' />}
						/>
					</Routes>
				</Router>
			</div>
		);
	}
}
