import React, { Component } from "react";

export class NewsItem extends Component {

    render() {
        let { title, description, imageURL, newsUrl } = this.props
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageURL ? "https://www.coindesk.com/resizer/SvW74AjwkstjkYoV2VbLYK2VPsM=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/LIHOTMRFNJHMPHUMEL3TPDUYUQ.jpg" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
