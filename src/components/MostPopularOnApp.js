import React from "react";
import { Typography, Divider, Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as myConst from "../MyConstant";
import "../App.css";

const MostPopularOnApp = ({url, title, content, author, category, postDate, minRead, backgroundArticleImage}) => (
    <Link to={url} style={{ textDecoration: "none", color: "#3E3E3E" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginRight: "20px" }}>
                <p className="popular-title">popular in {myConst.APP_NAME}</p>
                <Typography component="h5">{title}</Typography>
                <small>{content}</small>
                <div className="popular-author">
                    <small>{author} in {category}</small>
                    <br />
                    <small className="post-date">{postDate} . {minRead} min read</small>
                </div>
            </div>
            <div className="backgroud-popular-list" style={{ backgroundImage: `url(${backgroundArticleImage})` }}>
            </div>
        </div>
    </Link>
)

export default MostPopularOnApp;
