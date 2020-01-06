import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";

const LatestUpdateArticle = ({ url, backgroundArticleImage, title, author, category, postDate, minRead }) => (
    <Link to={url} style={{ textDecoration: "none", color: "#3E3E3E" }}>
        <div style={{ display: "flex", marginBottom: "20px" }}>
            <div className="featured-backgroud-popular-list" style={{ marginRight: "20px", backgroundImage: `url(${backgroundArticleImage})` }}>
            </div>
            <div style={{ marginTop: "-20px" }}>
                <h4>{title}</h4>
                <small>{author} in {category}</small>
                <br />
                <small>{postDate} . {minRead} min read</small>
            </div>
        </div>
    </Link>
)

export default LatestUpdateArticle;
