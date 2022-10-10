import React, { Component } from "react";

export class NewsItem extends Component {

    render() {
        let { title, description, imageURL, newsUrl, author, date, source } = this.props
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "flex-end", right: 0, position: "absolute" }}>

                        <span className="badge rounded-pill bg-danger" >
                            {source}
                        </span>
                    </div>
                    <img src={!imageURL ? "https://www.coindesk.com/resizer/SvW74AjwkstjkYoV2VbLYK2VPsM=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/LIHOTMRFNJHMPHUMEL3TPDUYUQ.jpg" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default NewsItem;
