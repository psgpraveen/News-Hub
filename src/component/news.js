import React, { Component } from "react";
import Newsitam from "./newsitam";
import Spiner from "./spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// require('dotenv').config();

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
    headlines: "top-headlines",
    apiKey: process.env.REACT_APP_NEWS_API,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      currentApiKeyIndex: 0,
      headlines: "top-headlines"
    };
    document.title = `${this.capitalize(
      this.props.category
    )} - Psg-News-Website`;
  }
capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  async update() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/${this.props.headlines}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.currentApiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    try {  
      
      this.setState({ loading: true });
      let data = await fetch(url);
      this.props.setProgress(30);
      let passdata = await data.json();
      this.props.setProgress(60);
      if (passdata.articles.length === 0) {
      this.changeApiKey();
       } else {
      this.setState({
        articles: passdata.articles,
        totalResults: passdata.totalResults,
        loading: false,
        totalPage: Math.ceil(passdata.totalResults / this.props.pageSize),
      });}
    } catch (error) {
      console.error("Error occurred while fetching news:", error);
      this.changeApiKey(); // Change the API key on error
    }
    this.props.setProgress(100);
  }

  componentDidMount() {
    this.update();
  }

  changeApiKey() {
    const apiKeys =process.env.REACT_APP_API_NEW_KEYS.split(",");
    
  
    const { currentApiKey } = this.state;
    const currentIndex = apiKeys.indexOf(currentApiKey);
    const nextIndex = (currentIndex + 1) % apiKeys.length;
    const newApiKey = apiKeys[nextIndex];
  
    this.setState({ currentApiKey: newApiKey }, () => {
      console.log("API key changed:");
      this.update();
    });
  }
  


  handNext = () => {
    const { page, totalPage } = this.state;

    if (page + 1 <= totalPage) {
      this.setState({ page: page + 1 }, () => {
        this.update();
      });
    }
  };

  handBack = () => {
    const { page } = this.state;

    if (page - 1 >= 1) {
      this.setState({ page: page - 1 }, () => {
        this.update();
      });
    }
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/${this.props.headlines}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.currentApiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    try {
      this.setState({ loading: true });
      let data = await fetch(url);
      let passdata = await data.json();
      this.setState({
        articles: this.state.articles.concat(passdata.articles),
        totalResults: passdata.totalResults,
        loading: false,
        totalPage: Math.ceil(passdata.totalResults / this.props.pageSize),
      });
    } catch (error) {
      console.error("Error occurred while fetching news:", error);
      this.changeApiKey();
    }
  };

  render() {
    return (
      <>{this.state.loading && <Spiner/>}
        <div className=" d-flex">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Spiner/>}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <Newsitam
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        date={element.publishedAt}
                        author={element.author}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
