import React from "react";
import { Typography, Divider, Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";

const Quotes = ({url, title, subtitle, author, postDate, minRead, styleBackgroundColor, styleFontColor}) => (
    <Link to={url} style={{ textDecoration: "none", color: styleFontColor }}>
        <Grid container style={{ marginTop: "40px" }}>
            <Grid item lg={12} sm={12}>
                <div style={{ backgroundColor: styleBackgroundColor, height: "300px", display: "flex", flexDirection: "column", justifyContent: "center"}} className="quotes">
                    <div style={{marginBottom:"10px"}}>
                        <Typography variant="h4">
                            <b>{title}</b>
                        </Typography>
                    </div>
                    <Typography component="p">
                        --- {author}
                    </Typography>
                    <div style={{ marginTop: "20px" }}>
                        <p>{subtitle}</p>
                        <small>{postDate} - {minRead} min read</small>
                    </div>
                </div>
            </Grid>
        </Grid>
    </Link>
)

export default Quotes;