import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { Title, discription, imgurl, newsurl,author,date,source } = this.props;
    return (
      <div>
        <div className="container my-3">
          <div className="card">
            <div style={{display:"flex",justifyContent:'flex-end',position: "absolute", right:'0'}}>
             < span className="bagde rounded-pill bg-danger fs-6 text-truncate" style={{left:280, zIndex:1, color:"white", fontWeight: "bold"}}> {source} </span>
            </div>
            <img src={imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{Title}</h5>
              <p className="card-text">{discription}...</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl} target="_blank"  rel="noopener noreferrer" className="btn btn sm btn-dark">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
