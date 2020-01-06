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
import {BookmarkBorder, ThumbUp, AvTimer} from "@material-ui/icons";
import CommentList from "../components/CommentList";

class Bookmark extends Component {
    render () {
        return (
            <>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div style={{margin:"50px 150px 40px 150px", display:"flex"}}>
                        <div style={{width:"100%"}}>
                            <div style={{display:"flex", width:"100%"}}>
                                <div style={{display:"flex", width:"50%"}}>
                                    <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
                                        <div style={{display:"flex", alignItems:"center", width:"100%"}}>
                                            <h1>Username</h1>
                                            <Button size="small" variant="outlined" style={{marginLeft:"20px"}}>Edit Profile</Button>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display:"flex", justifyContent:"flex-end", width:"100%"}}>
                                    <Avatar style={{ width: "120px", height: "120px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Bookmark;