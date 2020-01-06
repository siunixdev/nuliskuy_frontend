import React, { Component } from "react";
import { connect } from "react-redux";

// Other Component

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import { Grid, Button, Divider, Typography } from "@material-ui/core";
import ArticleCategoryLatestUpdate from "../components/ArticleCategoryLatestUpdate";
import Quotes from "../components/Quotes";
import { withRouter } from "react-router";
import ArticleBannerLeft from "../components/ArticleBannerLeft";
import ArticleBannerRight from "../components/ArticleBannerRight";

class Category extends Component {
  state = {
    category: [],
    categoryArticleData: [
      {
        title: "The Great Lesson of California in America’s New Civil War",
        urlLink: "/login",
        data: {
          content:
            "Why There’s No Bipartisan Way Forward at this Juncture in Our History — One Side Must Win",
          category: "UI Designer",
          author: "Lisa Ann",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image: "https://unsplash.it/640/425"
        }
      },
      {
        title: "Meet the Security Company Building an International Database",
        urlLink: "/login",
        data: {
          content:
            "PatronScan says it sells security. Privacy advocates worry it’s selling mass surveillance.",
          category: "UI Designer",
          author: "Lisa Ann",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image: "https://picsum.photos/200/300"
        }
      },
      {
        title: "10 best chrome extensions for designer",
        urlLink: "/login",
        data: {
          content:
            "After months of testing, here are the 10 best Chrome Extensions for Product Designers",
          category: "UI Designer",
          author: "Lisa Ann",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image: "https://picsum.photos/200/300"
        }
      }
    ],
    ArticleBannerList: [
      {
        title:
          "There’s no need for Twitter to serve as a tool of political omnipresence.",
        urlLink: "/detail",
        position: "left",
        data: {
          subtitle: "The case for removing all Politicians from twitter",
          author: "Robert Son",
          postDate: "32 Sept, 2021",
          minRead: "10",
          styleBackgroundColor: "#5E47E0",
          styleFontColor: "#FFFFFF",
          image:
            "https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
        }
      },
      {
        title:
          "There’s no need for Twitter to serve as a tool of political omnipresence.",
        urlLink: "/detail",
        position: "right",
        data: {
          subtitle: "The case for removing all Politicians from twitter",
          author: "Robert Son",
          postDate: "32 Sept, 2021",
          minRead: "10",
          styleBackgroundColor: "#B5D61D",
          styleFontColor: "#000000",
          image: "https://unsplash.it/640/425"
        }
      },
      {
        title:
          "There’s no need for Twitter to serve as a tool of political omnipresence.",
        urlLink: "/detail",
        position: "",
        data: {
          subtitle: "The case for removing all Politicians from twitter",
          author: "Robert Son",
          postDate: "32 Sept, 2021",
          minRead: "10",
          styleBackgroundColor: "#B5D61D",
          styleFontColor: "#000000"
        }
      }
    ]
  };

  componentDidMount() {
    const category = this.props.match.params.category;
    this.setState({ category });
    // const { category } = this.props.match.params;
  }

  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={6} sm={3} md={3} lg={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h3" className="category-header">
                <b>{this.props.categorySlug}</b>
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs
            sm
            md={6}
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <div className="category-desc" style={{ paddingTop: "10px" }}>
              <span style={{ color: "#7C6CD5" }}>
                The front lines of the future.
              </span>{" "}
              A Medium publication about tech and science.
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end"
            }}
            className="follow-button"
          >
            <div>
              <Button variant="outlined" size="small">
                Follow
              </Button>
            </div>
          </Grid>
        </Grid>
        <div style={{ paddingTop: "25px" }} className="category-desc-secondary">
          <small>
            <span style={{ color: "#7C6CD5" }}>
              The front lines of the future.
            </span>{" "}
            A Medium publication about tech and science.
          </small>
        </div>
        {this.state.ArticleBannerList.map(articleBannerData =>
          articleBannerData.position === "left" ? (
            <ArticleBannerLeft
              url={articleBannerData.urlLink}
              title={articleBannerData.title}
              subtitle={articleBannerData.data.subtitle}
              author={articleBannerData.data.author}
              postDate={articleBannerData.data.postDate}
              paddingTop={articleBannerData.data.postDate}
              minRead={articleBannerData.data.minRead}
              backgroundArticleImage={articleBannerData.data.image}
              styleBackgroundColor={articleBannerData.data.styleBackgroundColor}
              styleFontColor={articleBannerData.data.styleFontColor}
            />
          ) : articleBannerData.position === "right" ? (
            <ArticleBannerRight
              url={articleBannerData.urlLink}
              title={articleBannerData.title}
              subtitle={articleBannerData.data.subtitle}
              author={articleBannerData.data.author}
              postDate={articleBannerData.data.postDate}
              paddingTop={articleBannerData.data.postDate}
              minRead={articleBannerData.data.minRead}
              backgroundArticleImage={articleBannerData.data.image}
              styleBackgroundColor={articleBannerData.data.styleBackgroundColor}
              styleFontColor={articleBannerData.data.styleFontColor}
            />
          ) : (
            <Quotes
              url={articleBannerData.urlLink}
              title={articleBannerData.title}
              subtitle={articleBannerData.data.subtitle}
              author={articleBannerData.data.author}
              postDate={articleBannerData.data.postDate}
              minRead={articleBannerData.data.minRead}
              styleBackgroundColor={articleBannerData.data.styleBackgroundColor}
              styleFontColor={articleBannerData.data.styleFontColor}
            />
          )
        )}
        <Divider
          light
          style={{ marginTop: "40px", marginBottom: "40px" }}
        ></Divider>
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid container>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ marginBottom: "60px" }}
            >
              {this.state.categoryArticleData.map(article => (
                <ArticleCategoryLatestUpdate
                  url={article.urlLink}
                  title={article.title}
                  content={article.data.content}
                  author={article.data.author}
                  category={article.data.category}
                  postDate={article.data.postDate}
                  minRead={article.data.minRead}
                  backgroundArticleImage={article.data.image}
                />
              ))}
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categorySlug: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryClick: () => dispatch("CATEGORY_CLICK")
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
