import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";
import {Grid} from "@material-ui/core"

const TopPopular = ({ url, title, author, category, postDate, minRead, number}) => (
    <Link to={url} style={{ textDecoration: "none", color: "#3E3E3E" }}>
        <Grid container style={{ marginBottom: "20px" }}>
            <Grid item lg={3} md={4} sm={4} xs={3}>
                <h1 style={{ color: "grey", fontSize: "40px"}}>0{number}</h1>
            </Grid>
            <Grid item lg={9} md={8} sm={8} xs={9}>
                <h4>{title}</h4>
                <div className="popular-author">
                    <small>{author} in {category}</small>
                    <br />
                    <small className="post-date">{postDate} . {minRead} min read</small>
                </div>
            </Grid>
        </Grid>
    </Link>
)

export default TopPopular;
