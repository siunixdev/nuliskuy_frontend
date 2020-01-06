import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const ArticleBannerRight = ({url, title, subtitle, author, postDate, minRead, backgroundArticleImage, styleFontColor, styleBackgroundColor}) => (
    <Link to={url} style={{ textDecoration: "none", color: styleFontColor }}>
        <Grid container style={{ marginTop: "40px" }}>
            <Grid item lg={7} sm={7} xs={12}>
                <div style={{ backgroundImage: `url(${backgroundArticleImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "300px" }}>
                </div>
            </Grid>
            <Grid item lg={5} sm={5} xs={12}>
                <div style={{ backgroundColor: styleBackgroundColor, height: "300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }} className="right-category-first-column">
                    <Typography variant="h5">
                    <b>{title}</b>
                    </Typography>
                    <p>{subtitle}</p>
                    <div style={{ marginTop: "20px" }}>
                        <Typography component="p">
                            {author}
                            </Typography>
                        <small>{postDate} - {minRead} min read</small>
                    </div>
                </div>
            </Grid>
        </Grid>
    </Link>
)

export default ArticleBannerRight;