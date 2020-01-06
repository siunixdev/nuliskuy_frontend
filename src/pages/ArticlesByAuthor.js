import React, { Component } from 'react';

// Other Component

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";
import { Grid, Button, Divider, Typography, Avatar } from '@material-ui/core';
import ArticleByAuthor from "../components/ArticleByAuthor";

class ArticlesByAuthor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryArticleData: [
                {
                    title: "The Great Lesson of California in America’s New Civil War",
                    urlLink: "/login",
                    data: {
                        content: "Why There’s No Bipartisan Way Forward at this Juncture in Our History — One Side Must Win",
                        category: "UI Designer",
                        clapsCount: 24,
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
                        content: "PatronScan says it sells security. Privacy advocates worry it’s selling mass surveillance.",
                        category: "UI Designer",
                        author: "Lisa Ann",
                        clapsCount: 502,
                        postDate: "Jan 21, 2014",
                        minRead: 7,
                        image: "https://picsum.photos/200/300"
                    }
                },
                {
                    title: "10 best chrome extensions for designer",
                    urlLink: "/login",
                    data: {
                        content: "After months of testing, here are the 10 best Chrome Extensions for Product Designers",
                        category: "UI Designer",
                        author: "Lisa Ann",
                        clapsCount: 69,
                        postDate: "Jan 21, 2014",
                        minRead: 7,
                        image: "https://picsum.photos/200/300"
                    }
                }
            ],
            author : [
                {
                    name : "Abdiilah F.",
                    authorImage : "", 
                    desc: "Data Science Analyst",
                    image: "https://miro.medium.com/fit/c/48/48/2*Ehb1DhSlrQ0stBPyREjQhQ.jpeg",
                    follower : 23,
                    following : 45
                }
            ]
        }
    }

    render() {
        return (
            <>
                <div style={{backgroundColor:"#3AA1BD", color:"#FFF"}}>
                    <div style={{width:"60%", margin:"auto", padding:"40px 0px 40px 0px"}}>
                        <Grid container spacing={2} style={{ marginTop: "10px", marginBottom: "10px" }}>
                            {
                                this.state.author.map(data => (
                                    <>
                                        <Grid item lg={8}>
                                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingLeft:"20px"}}>
                                                <h2 style={{ marginBottom: "10px", marginTop: "0px" }}>
                                                    {data.name}
                                                    <Button variant="outlined" size="small" style={{color:"#FFF", borderColor:"#FFF", marginLeft:"40px"}}>Follow</Button>
                                                </h2>
                                                <p style={{ marginBottom: "0px", marginTop: "0px" }}>{data.desc}</p>
                                                <div style={{ display: "flex", justifyContent: "flex-start", marginTop:"20px"}}>
                                                    <small>{data.following} following</small> <small style={{marginLeft:"40px"}}>{data.follower} follower</small>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item lg={4} style={{display:"flex", justifyContent:"flex-end"}}>
                                            <Avatar src={data.image} style={{ width: "100px", height: "100px"}} />
                                        </Grid>
                                    </>
                                ))
                            }
                        </Grid>
                    </div>
                </div>
                <div style={{ width: "60%", margin: "auto" }}>
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{ margin: "20px 100px" }}>
                            {
                                this.state.categoryArticleData.map(article => (
                                    <ArticleByAuthor
                                        url={article.urlLink}
                                        title={article.title}
                                        content={article.data.content}
                                        author={article.data.author}
                                        category={article.data.category}
                                        clapsCount={article.data.clapsCount}
                                        postDate={article.data.postDate}
                                        minRead={article.data.minRead}
                                        backgroundArticleImage={article.data.image}
                                    />
                                ))
                            }
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default ArticlesByAuthor;
