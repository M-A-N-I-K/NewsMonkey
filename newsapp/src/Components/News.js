import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
	static defaultProps = {
		country: "in",
		pageSize: 10,
		category: "general"
	}
	static propTypes = {
		country: PropTypes.string.isRequired,
		pageSize: PropTypes.number.isRequired,
		category: PropTypes.string.isRequired
	}
	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		}
		document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
	}

	async updateNews() {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b33f6beb7b3d4b4b88f5da494992ada3&page=1&pageSize=${this.props.pageSize}`
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
	}

	async componentDidMount() {
		this.updateNews();
	}
	handleNextClick = async () => {
		this.setState({ page: this.state.page + 1 });
		this.updateNews();
	}
	handlePrevClick = async () => {
		this.setState({ page: this.state.page - 1 })
		this.updateNews();
	}
	render() {
		return (
			<div className="container my-3">
				<h1 className="text-center" style={{ margin: '30px 0px' }}>NewsMonkey - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
				{this.state.loading && <Spinner />}
				<div className="row">
					{!this.state.loading && this.state.articles.map((element) => {
						return <div className="col-md-4" key={element.url}>
							<NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
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
