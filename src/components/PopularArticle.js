import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import "../App.css";

const PopularArticle = ({ url, backgroundArticleImage, title, content, author, category, postDate, minRead }) => (
    <>
        <div className="backgroud-popular-right" style={{ marginBottom: "10px", backgroundImage: `url(${backgroundArticleImage})` }}>
        </div>
        <div>
            <Link to={url} style={{ textDecoration: "none", color: "#3E3E3E" }}>
                <h3>{title}</h3>
            </Link>
            <p style={{ textAlign: "left" }}>{content}</p>
            <div className="popular-author">
                <small>{author} in {category}</small>
                <br />
                <small className="post-date">{postDate} . {minRead} min read</small>
            </div>
        </div>
    </>
)

export default PopularArticle;
