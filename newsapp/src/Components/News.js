import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {

	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		}
	}

	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b33f6beb7b3d4b4b88f5da494992ada3&page=1&pageSize=${this.props.pageSize}`
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
	}
	handleNextClick = async () => {
		if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
			let url = `https://newsapi.org/v2/top-headlines?country=us&category=business\&apiKey=b33f6beb7b3d4b4b88f5da494992ada3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
			this.setState({ loading: true });
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				articles: parsedData.articles,
				page: this.state.page + 1,
				loading: false
			});
		}
	}
	handlePrevClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b33f6beb7b3d4b4b88f5da494992ada3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
		let data = await fetch(url);
		this.setState({ loading: true });
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			page: this.state.page - 1,
			loading: false
		});
	}
	render() {
		return (
			<div className="container my-3">
				<h1 className="my-3 text-center">NewsMonkey Top Headlines</h1>
				{this.state.loading && <Spinner />}
				<div className="row">
					{!this.state.loading && this.state.articles.map((element) => {
						return <div className="col-md-4" key={element.url}>
							<NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsUrl={element.url} />
						</div>
					})}

				</div>
				<div className="container d-flex justify-content-between">
					<button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-3" onClick={this.handlePrevClick}> &#8592; Previous</button>
					<button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>

				</div>
			</div>
		);
	}
}

export default News;
