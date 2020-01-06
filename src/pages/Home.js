import React, { Component } from "react";

// Other Component
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import * as myConst from "../MyConstant";
import { Typography, Divider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import PopularArticle from "../components/PopularArticle";
import LatestUpdateArticle from "../components/LatestUpdateArticle";
import MostPopularOnApp from "../components/MostPopularOnApp";
import MostPopularByCategory from "../components/MostPopularByCategory";
import TopPopular from "../components/TopPopular";
import axios from "axios";

class Home extends Component {
  state = {
    popularArticleLeft: [
      {
        title: "Architecting your React application",
        urlLink: "/detail",
        data: {
          content:
            "in these days where MVC feels like from the dinosaurs age. Our APIs are serving multiple client apps and a lot of business logic moved to our client applications. Front end development is much more than just nicely coded interface, it’s a lot of programming",
          author: "Lisa Ann",
          category: "Computer Science",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEuz0YHQU4k7WEIIlwgCQUHAR95MroJni1w2tod0d1ymLDya3g"
        }
      }
    ],
    popularArticleRight: [
      {
        title: "Architecting your React application",
        urlLink: "/detail",
        data: {
          content:
            "in these days where MVC feels like from the dinosaurs age. Our APIs are serving multiple client apps and a lot of business logic moved to our client applications. Front end development is much more than just nicely coded interface, it’s a lot of programming",
          author: "Lisa Ann",
          category: "Computer Science",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image: "https://unsplash.it/640/425"
        }
      }
    ],
    latestUpdateArticlesList: [
      {
        title: "Mastering drag & drop with React Js",
        urlLink: "/detail",
        data: {
          author: "Lisa Ann",
          category: "Computer Science",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image: "https://source.unsplash.com/random"
        }
      },
      {
        title: "Architecting your React application",
        urlLink: "/login",
        data: {
          author: "Lisa Ann",
          category: "Computer Science",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image: "https://picsum.photos/200/300"
        }
      },
      {
        title: "The Curious case of Erwin Rommel",
        urlLink: "/login",
        data: {
          author: "Lisa Ann",
          category: "Computer Science",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image: "http://lorempixel.com/400/200/sports"
        }
      }
    ],
    mostPopular: [
      {
        title: "10 best chrome extensions for designer sdsdsd",
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
    topPopular: [
      {
        title: "Mastering drag & drop with React Js",
        urlLink: "/login",
        data: {
          author: "Lisa Ann",
          category: "UI Designer",
          postDate: "Jan 21, 2014",
          minRead: 7
        }
      },
      {
        title: "10 best chrome extensions for designer",
        urlLink: "/login",
        data: {
          author: "Lisa Ann",
          category: "Data Science",
          postDate: "Jan 21, 2014",
          minRead: 7
        }
      },
      {
        title: "The Curious case of Erwin Rommel",
        urlLink: "/login",
        data: {
          author: "Lisa Ann",
          category: "Computer Science",
          postDate: "Jan 21, 2014",
          minRead: 7
        }
      },
      {
        title: "The Curious case of Erwin Rommel",
        urlLink: "/login",
        data: {
          author: "Lisa Ann",
          category: "Computer Science",
          postDate: "Jan 21, 2014",
          minRead: 7
        }
      },
      {
        title: "The Curious case of Erwin Rommel",
        urlLink: "/login",
        data: {
          author: "Lisa Ann",
          category: "Computer Science",
          postDate: "Jan 21, 2014",
          minRead: 7,
          image: "http://lorempixel.com/400/200/sports"
        }
      }
    ],
    mostPopularByCategory: [],
    categorySlug: ""
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/articles").then(res => {
      const mostPopularByCategory = res.data;
      this.setState({ mostPopularByCategory });
    });
  }

  render() {
    // console.log(this.state.mostPopularByCategory);
    let number = 0;

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Grid container direction="row" justify="flex-start" spacing={5}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              {this.state.popularArticleLeft.map(articleLeft => (
                <PopularArticle
                  url={articleLeft.urlLink}
                  backgroundArticleImage={articleLeft.data.image}
                  title={articleLeft.title}
                  content={articleLeft.data.content}
                  author={articleLeft.data.author}
                  category={articleLeft.data.category}
                  postDate={articleLeft.data.postDate}
                  minRead={articleLeft.data.minRead}
                />
              ))}
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              {this.state.latestUpdateArticlesList.map(dataList => (
                <LatestUpdateArticle
                  url={dataList.urlLink}
                  backgroundArticleImage={dataList.data.image}
                  title={dataList.title}
                  author={dataList.data.author}
                  category={dataList.data.category}
                  postDate={dataList.data.postDate}
                  minRead={dataList.data.minRead}
                />
              ))}
            </Grid>
            <Grid item lg={4} md={12} sm={6} xs={12} className="right-pupolar">
              {this.state.popularArticleRight.map(articleRight => (
                <PopularArticle
                  url={articleRight.urlLink}
                  backgroundArticleImage={articleRight.data.image}
                  title={articleRight.title}
                  content={articleRight.data.content}
                  author={articleRight.data.author}
                  category={articleRight.data.category}
                  postDate={articleRight.data.postDate}
                  minRead={articleRight.data.minRead}
                />
              ))}
            </Grid>
          </Grid>
          <div
            style={{ marginTop: "30px", marginBottom: "30px" }}
            className="featured-arrow"
          >
            <Link to="/category" style={{ textDecoration: "none" }}>
              <Button>SEE ALL FEATURED >></Button>
            </Link>
          </div>
        </div>
        <Divider light style={{ marginBottom: "40px" }}></Divider>
        <Grid container direction="row" justify="flex-start" spacing={5}>
          <Grid item lg={8} md={8} sm={7} xs={12}>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ marginBottom: "60px" }}
            >
              {this.state.mostPopular.map(popular => (
                <MostPopularOnApp
                  url={popular.urlLink}
                  title={popular.title}
                  content={popular.data.content}
                  author={popular.data.author}
                  category={popular.data.category}
                  postDate={popular.data.postDate}
                  minRead={popular.data.minRead}
                  backgroundArticleImage={popular.data.image}
                />
              ))}
            </Grid>
            {this.state.mostPopularByCategory.map(popularByCategory => (
              <MostPopularByCategory
                url={popularByCategory.slug}
                category={popularByCategory.category.name}
                title={popularByCategory.title}
                content={popularByCategory.content.substring(0, 70) + " ..."}
                author={popularByCategory.user.email}
                postDate={popularByCategory.postDate}
                minRead={popularByCategory.minRead}
                backgroundArticleImage={popularByCategory.image}
              />
            ))}
          </Grid>
          <Grid item lg={4} md={4} sm={5} xs={12}>
            <Grid container direction="row">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <h2>Popular on {myConst.APP_NAME}</h2>
                <Divider style={{ marginBottom: "20px" }}></Divider>
              </Grid>
              {this.state.topPopular.map(topPopularData => (
                <TopPopular
                  url={topPopularData.urlLink}
                  title={topPopularData.title}
                  author={topPopularData.data.author}
                  category={topPopularData.data.category}
                  postDate={topPopularData.data.postDate}
                  minRead={topPopularData.data.minRead}
                  number={(number += 1)}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Home;
