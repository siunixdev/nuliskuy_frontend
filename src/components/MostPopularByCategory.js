import React from "react";
import { Typography, Divider, Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";

export const MostPopularByCategory = ({url, category, title, content, author, postDate, minRead, backgroundArticleImage}) => (
    <Link to={url} style={{ textDecoration: "none", color: "#3E3E3E" }}>
        <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginBottom: "60px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginRight: "10px" }}>
                    <p className="popular-title">popular in {category}</p>
                    <Typography component="h5">{title}</Typography>
                    <small>{content}</small>
                    <div className="popular-author">
                        <small>{author}</small>
                        <br />
                        <small className="post-date">{postDate} . {minRead} min read</small>
                    </div>
                </div>
                <div className="backgroud-popular-list" style={{ backgroundImage: `url(${backgroundArticleImage})` }}>
                </div>
            </div>
        </Grid>
    </Link>
)

export default MostPopularByCategory;