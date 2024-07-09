import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'
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
      totalResults: 0
    };
    document.title = `${this.props.category}- NewSnacks`;
  }

  async componentDidMount() {
    this.props.setprogress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=987a2a2add80405784ce0ecf79252f3a&page=${this.state.page}&pageSize=${this.props.pagesize}`;
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
      page:this.state.page+1
    });

    this.props.setprogress(100);
  }


  fetchData=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=987a2a2add80405784ce0ecf79252f3a&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
      page:this.state.page+1
    });
  }

  // handleprevc = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }in&category=${
  //     this.props.category
  //   }&apiKey=987a2a2add80405784ce0ecf79252f3a&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pagesize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };
  // handlenextc = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=987a2a2add80405784ce0ecf79252f3a&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pagesize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };
  render() {
    return (
      <div>

          <h1 className="text-center" style={{ margin: "30px", marginTop:"80px"}}>
            NewSnacks - Top Headlines
          </h1>
          {this.state.loading && <Loading />}
          {/* <div className="contanier d-flex justify-content-between my-2">
        <button type="button"  disabled={this.state.page===1} className="btn btn-primary btn-sm btn-dark" onClick={this.handleprevc}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-primary btn-sm btn-dark" onClick={this.handlenextc}>Next &rarr;</button>
        </div> */}

          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Loading/>}
            >

        <div className="container">
          <div className="row">
            {this.state.articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    Title={element.title}
                    discription={element.description}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    />
                </div>
              );
            })}
            </div>
          </div>
            </InfiniteScroll>
          {/* <div className="contanier d-flex justify-content-between">
            <button
            type="button"
              disabled={this.state.page === 1}
              className="btn btn-primary btn-sm btn-dark"
              onClick={this.handleprevc}
              >
              &larr; Previous
              </button>
              <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pagesize)
              }
              type="button"
              className="btn btn-primary btn-sm btn-dark"
              onClick={this.handlenextc}
            >
              Next &rarr;
              </button>
            </div> */}
        </div>
      
    );
  }
}

export default News;
