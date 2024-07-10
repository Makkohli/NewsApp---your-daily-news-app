import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 0,
      totalResults: 0,
    };
    document.title = `${this.props.category}- NewSnacks`;
  }

  async componentDidMount() {
    this.props.setprogress(0);
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    this.props.setprogress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setprogress(50);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });

    this.props.setprogress(100);
  }

  fetchData = async () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center" style={{ margin: "30px", marginTop: "80px" }}>
          NewSnacks - Top Headlines
        </h1>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    Title={element.title}
                    description={element.description}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
