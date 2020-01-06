import React from "react";
import { Typography, Divider, Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";

const ArticleCategoryLatestUpdate = ({url, title, content, author, category, postDate, minRead, backgroundArticleImage}) => (
    <Link to={url} style={{ textDecoration: "none", color: "#3E3E3E" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginRight: "20px" }}>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className="popular-author">
                    <small>{author} in {category}</small>
                    <br />
                    <small className="post-date">{postDate} . {minRead} min read</small>
                </div>
            </div>
            <div className="backgroud-popular-list" style={{ backgroundImage: `url(${backgroundArticleImage})`, height:"150px"}}>
            </div>
        </div>
        <Divider light style={{marginTop:"20px", marginBottom:"20px"}}></Divider>
    </Link>
)

export default ArticleCategoryLatestUpdate;
