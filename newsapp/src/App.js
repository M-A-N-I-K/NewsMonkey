import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

const App = () => {
	const pagesize = 10;
	const apiKey = process.env.REACT_APP_NEWS_API
	const [progress, setProgress] = useState(0)
	return (
		<div>
			<Router>

				<Navbar />
				<LoadingBar
					color='#f11946'
					progress={progress}
				// onLoaderFinished={() => setProgress(0)}
				/>
				<Routes>
					<Route exact path="/"
						element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesize} country="in" category='general' />} />
					<Route exact path="/Business"
						element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pagesize} country="in" category='business' />} />
					<Route exact path="/Sports"
						element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pagesize} country="in" category='sports' />} />
					<Route exact path="/Technology"
						element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pagesize} country="in" category='technology' />} />
					<Route exact path="/Health"
						element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pagesize} country="in" category='health' />} />
					<Route exact path="/Science"
						element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pagesize} country="in" category='science' />}
					/>
					<Route exact path="/Entertainment"
						element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pagesize} country="in" category='entertainment' />}
					/>
					<Route exact path="/General"
						element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesize} country="in" category='general' />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;