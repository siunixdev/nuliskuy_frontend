import React, { Component } from 'react';

// Other Component

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";
import { Grid, Button, Divider, Typography, Avatar, TextField, FormControl, Card, CardContent } from '@material-ui/core';
import {BookmarkBorder, ThumbUp} from "@material-ui/icons";

const CommentList = ({author, authorImage, postDate, comment, totalClaps, totalResponse}) => (
    <div style={{margin:"0px 150px 50px 150px", display:"flex"}}>
        <div style={{marginRight:"20px"}}>
            <Avatar src={authorImage} />
        </div>
        <div style={{width:"100%"}}>
            <Typography component="p" style={{color:"#33C46A"}}>{author}</Typography>
            <small>{postDate}</small>
            <div>
                <p>{comment}</p>
                <div style={{display:"flex"}}>
                    <Grid container spacing={2} style={{ marginTop: "0px", marginBottom: "20px" }}>
                        <Grid item lg={7}>
                            <ThumbUp /> {totalClaps} claps
                        </Grid>
                        <Grid item lg={5}>
                            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%"}}>
                                <div style={{ display: "flex"}}>
                                    {totalResponse} Response
                                    <div style={{ marginLeft: "10px" }}>
                                        <BookmarkBorder />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Divider light></Divider>
            </div>
        </div>
    </div>
)

export default CommentList;