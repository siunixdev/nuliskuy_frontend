import React, { Component } from "react";
import {
  Grid,
  Typography,
  Avatar,
  Button,
  Chip,
  Divider
} from "@material-ui/core";
import { Twitter, Facebook, BookmarkBorder, ThumbUp } from "@material-ui/icons";
import FooterSecondary from "../components/FooterSecondary";
import RelatedArticle from "../components/RelatedArticle";
import * as myConst from "../MyConstant";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class ArticleDetail extends Component {
  state = {
    articleDetailData: [],
    articleUserData: [],
    relatedArticleList: [
      {
        title: "The Greatest sales Deck I've ever",
        urlLink: "/detail",
        data: {
          author: "Corin Faife",
          authorImage:
            "https://miro.medium.com/fit/c/80/80/0*iEQwbVyv5_kVkgrt.jpeg",
          articleLocation: "Science",
          postDate: "21 Sept, 2019",
          minRead: 7,
          backgroundArticleImage:
            "https://miro.medium.com/max/2400/1*t3Wa9vvDYU5SyoGEmagy4g.jpeg",
          totalClaps: 40
        }
      },
      {
        title: "The Forgotten Pixel Art Masterpieces of the PlayStation 1 Era",
        urlLink: "/detail",
        data: {
          author: "Richmond Lee",
          authorImage:
            "https://miro.medium.com/fit/c/80/80/2*dWrUdg-uHDB2js5QSp00Uw.jpeg",
          articleLocation: "Art",
          postDate: "21 Sept, 2019",
          minRead: 7,
          backgroundArticleImage:
            "https://miro.medium.com/max/1024/1*uNgmHEUZHeBejN0JKd_m8A.gif",
          totalClaps: 40
        }
      },
      {
        title: "Why Tesla’s Cybertruck Might Flop",
        urlLink: "/detail",
        data: {
          author: "tesla bro",
          authorImage:
            "https://miro.medium.com/fit/c/80/80/2*r2KdhFRi_SZ4WAkMDjIVxA.jpeg",
          articleLocation: "Otomitif",
          postDate: "21 Sept, 2019",
          minRead: 7,
          backgroundArticleImage:
            "https://miro.medium.com/max/1240/1*zqunB7dJ_9nfILbdiACziQ.png",
          totalClaps: 40
        }
      }
    ]
  };

  componentDidMount() {
    const article_slug = this.props.match.params.article_slug;
    axios
      .get(`http://localhost:5000/api/v1/article/${article_slug}`)
      .then(res => {
        const articleDetailData = res.data;
        this.setState({ articleDetailData });
        this.setState({ articleUserData: articleDetailData.user });
      });
  }

  render() {
    // console.log(this.state.articleDetailData);
    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          {/* {this.state.this.state.articleDetailData.map(detail => ( */}
          <div>
            <img
              src={this.state.articleDetailData.image}
              style={{ width: "100%", marginBottom: "40px" }}
            />
            <Grid container>
              <Grid item lg={2} md={2} sm xs></Grid>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <div>
                  <Typography variant="h4">
                    {this.state.articleDetailData.title}
                  </Typography>
                  <Typography variant="caption">
                    {this.state.articleDetailData.description}
                  </Typography>
                  <Grid
                    container
                    spacing={2}
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                    <Grid item lg={1}>
                      <Avatar
                        alt={this.state.articleDetailData.author}
                        src={this.state.articleDetailData.authorImage}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <div>
                        {this.state.articleUserData.fullname}.{" "}
                        <Button
                          variant="outlined"
                          size="small"
                          style={{ marginLeft: "20px" }}
                        >
                          Follow
                        </Button>
                      </div>
                      <div style={{ marginTop: "5px" }}>
                        <small>
                          {this.state.articleDetailData.postDate} .{" "}
                          {this.state.articleDetailData.minRead} min read
                        </small>
                      </div>
                    </Grid>
                    <Grid item lg={5}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          height: "100%"
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <div style={{ marginLeft: "10px" }}>
                            <Twitter />
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <Facebook />
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <BookmarkBorder />
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item lg={2} md={2} sm xs></Grid>

              <Grid item lg={2} md={2} sm xs></Grid>
              <Grid
                item
                lg={8}
                md={8}
                sm={12}
                xs={12}
                style={{ textAlign: "justify" }}
              >
                <Typography variant="subtitle1">
                  {this.state.articleDetailData.content}
                </Typography>
              </Grid>
              <Grid item lg={2} md={2} sm xs></Grid>

              <Grid item lg={2} md={2} sm xs></Grid>
              <Grid
                item
                lg={8}
                md={8}
                sm={12}
                xs={12}
                style={{
                  textAlign: "justify",
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
              >
                {/* <div>
                  {this.state.articleDetailData.articleTags.map(tagList => (
                    <Chip label={tagList} style={{ marginRight: "10px" }} />
                  ))}
                </div> */}
              </Grid>
              <Grid item lg={2} md={2} sm xs></Grid>

              <Grid item lg={2} md={2} sm xs></Grid>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <div>
                  <Grid
                    container
                    spacing={2}
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                    <Grid item lg={1}>
                      <Avatar style={{ width: "50px", height: "50px" }}>
                        <ThumbUp />
                      </Avatar>
                    </Grid>
                    <Grid item lg={6}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "100%"
                        }}
                      >
                        <small>
                          {this.state.articleDetailData.clapsCount} claps
                        </small>
                      </div>
                    </Grid>
                    <Grid item lg={5}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          height: "100%"
                        }}
                      >
                        <div style={{ marginLeft: "10px" }}>
                          <Twitter />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                          <Facebook />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                          <BookmarkBorder />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item lg={2} md={2} sm xs></Grid>

              <Grid item lg={2} md={2} sm xs></Grid>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <Divider
                  light
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                ></Divider>
              </Grid>
              <Grid item lg={2} md={2} sm xs></Grid>

              <Grid item lg={2} md={2} sm xs></Grid>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <div>
                  <Grid
                    container
                    spacing={2}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    <Grid item lg={1}>
                      <Avatar
                        alt={this.state.articleDetailData.author}
                        src={this.state.articleDetailData.authorImage}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start"
                        }}
                      >
                        <p style={{ marginBottom: "5px", marginTop: "0px" }}>
                          WRITTEN BY
                        </p>
                        <h4 style={{ marginBottom: "5px", marginTop: "0px" }}>
                          {this.state.articleUserData.fullname}
                        </h4>
                        <p style={{ marginBottom: "0px", marginTop: "0px" }}>
                          {this.state.articleUserData.email}
                        </p>
                      </div>
                    </Grid>
                    <Grid item lg={5}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end"
                        }}
                      >
                        <Button variant="outlined">Follow</Button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item lg={2} md={2} sm xs></Grid>

              <Grid item lg={2} md={2} sm xs></Grid>
              <Grid item lg={8} md={8} sm={12} xs={12}></Grid>
              <Grid item lg={2} md={2} sm xs></Grid>

              <Grid item lg={2} md={2} sm xs></Grid>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <div>
                  <Link
                    to="/comments"
                    style={{ textDecoration: "none", color: "#3E3E3E" }}
                  >
                    <Button variant="outlined" fullWidth size="large">
                      See Response ({this.state.articleDetailData.totalResponse}
                      )
                    </Button>
                  </Link>
                </div>
              </Grid>
              <Grid item lg={2} md={2} sm xs></Grid>
            </Grid>
          </div>
          {/* ))} */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#FFF",
            color: "#5E5E5E",
            padding: "40px 60px"
          }}
        >
          <h3>More from {myConst.APP_NAME}</h3>
          <Divider
            light
            style={{ marginTop: "0px", marginBottom: "40px" }}
          ></Divider>
          <Grid container spacing={5}>
            {this.state.relatedArticleList.map(relatedArticleData => (
              <Grid item sm={4}>
                <RelatedArticle
                  title={relatedArticleData.title}
                  url={relatedArticleData.urlLink}
                  author={relatedArticleData.data.author}
                  authorImage={relatedArticleData.data.authorImage}
                  articleLocation={relatedArticleData.data.articleLocation}
                  postDate={relatedArticleData.data.postDate}
                  minRead={relatedArticleData.data.minRead}
                  backgroundArticleImage={
                    relatedArticleData.data.backgroundArticleImage
                  }
                  totalClaps={relatedArticleData.data.totalClaps}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div style={{ marginTop: "20px" }}>
          <FooterSecondary />
        </div>
      </>
    );
  }
}

export default ArticleDetail;
