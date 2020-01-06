import React, { Component } from 'react';
import { Tabs, Tab, AppBar } from "@material-ui/core";

// Other Component

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";
import { Grid, Button, Divider, Typography, Avatar, TextField, FormControl, Card, CardContent } from '@material-ui/core';
import { BookmarkBorder, ThumbUp, AvTimer } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import CommentList from "../components/CommentList";
import TabPanelStories from "../components/TabPanelStories";

class Stories extends Component {
    render() {

        return (
            <>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ margin: "50px 150px 0px 150px", display: "flex" }}>
                        <div style={{ width: "100%", display: "flex"}}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                                        <h1>Your Story</h1>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems:"center", width: "100%"}}>
                                        <Button variant="outlined">Import a story</Button>
                                        <Link to="/new_stories" style={{textDecoration:"none"}}>
                                            <Button variant="outlined" color="primary" style={{ marginLeft: "10px" }}>Write a story</Button>
                                        </Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div style={{ margin: "20px 150px 40px 150px"}}>
                        <TabPanelStories/>
                    </div>
                </div>
            </>
        )
    }
}

export default Stories;