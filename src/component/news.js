import React, { Component } from "react";
import Newsitam from "./newsitam";
import Spiner from "./spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
    headlines: "top-headlines",
    loadMorePageSize: 12,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      totalResults: 0,
      page: 1,
      headlines: "top-headlines",
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
    const url = `https://saurav.tech/NewsAPI/${this.props.headlines}/category/${this.props.category}/${this.props.country}.json`;

    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let passdata = await data.json();
    this.props.setProgress(60);

    this.setState({
      articles: passdata.articles,
      totalResults: passdata.totalResults,
      loading: false,
      totalPage: Math.ceil(passdata.totalResults / this.props.pageSize),
    });

    this.props.setProgress(100);
  }

  componentDidMount() {
    this.update();
  }

  fetchMoreData = async () => {
    const { articles, page } = this.state;
    const startIndex = (page - 1) * this.props.pageSize;
    const endIndex = startIndex + this.props.pageSize;

    const url = `https://saurav.tech/NewsAPI/${this.props.headlines}/category/${this.props.category}/${this.props.country}.json`;

    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const passdata = await response.json();

      const additionalArticles = passdata.articles.slice(
        startIndex,
        endIndex
      );

      this.setState({
        articles: articles.concat(additionalArticles),
        loading: false,
        page: page + 1,
      });
    } catch (error) {
      console.error("Error fetching more articles:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <>
      
        {this.state.loading && <Spiner />}
        <div className="d-flex">
          <InfiniteScroll 
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={this.state.loading && this.state.articles.length > 0 &&<Spiner />}
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
