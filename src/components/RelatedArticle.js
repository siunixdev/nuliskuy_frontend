import React from 'react';
import {Grid, Avatar} from '@material-ui/core';
import {BookmarkBorder, ThumbUp} from "@material-ui/icons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const RelatedArticle = ({title, url, subtitle, author, authorImage, articleLocation, postDate, minRead, backgroundArticleImage, totalClaps}) => (
    <>
        <Link to={url} style={{ textDecoration: "none", color: "#3E3E3E" }}>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "0px", marginBottom: "0px" }}>
                <div className="backgroud-popular-right" style={{ marginBottom: "10px", backgroundImage: `url(${backgroundArticleImage})` }}>
                </div>
                <h2 style={{ marginTop: "10px", marginBottom: "0px" }}>{title}</h2>
                <div style={{ marginBottom: "0px", marginTop: "0px" }}>
                    <Grid container spacing={2} style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <Grid item lg={2}>
                            <Avatar alt={author} src={authorImage} style={{ width: "50px", height: "50px" }} />
                        </Grid>
                        <Grid item lg={5}>
                            <div>
                                <small>
                                    <b>
                                        {author} in {articleLocation}
                                    </b>
                                </small>
                            </div>
                            <div style={{ marginTop: "5px" }}>
                                <small>
                                    {postDate} . {minRead} min read
                                </small>
                            </div>
                        </Grid>
                        <Grid item lg={5}>
                            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
                                <div style={{ display: "flex" }}>
                                    <div style={{ marginLeft: "10px" }}>
                                        <BookmarkBorder />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Link>
    </>
)

export default RelatedArticle;