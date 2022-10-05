import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false
		}
	}

	async componentDidMount() {
		let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b33f6beb7b3d4b4b88f5da494992ada3"
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({ articles: parsedData.articles })
	}
	render() {
		return (
			<div className="container my-3">
				<h2 className="my-3">NewsMonkey Top Headlines</h2>
				<div className="row">
					{this.state.articles.map((element) => {
						return <div className="col-md-4" key={element.url}>
							<NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsUrl={element.url} />
						</div>
					})}

				</div>
			</div>
		);
	}
}

export default News;
