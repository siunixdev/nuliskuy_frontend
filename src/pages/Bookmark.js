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
                            <h1>Bookmark</h1>
                            <div style={{display:"flex", width:"100%"}}>
                                <div style={{display:"flex", alignItems:"center", width:"50%"}}>
                                    <h2><BookmarkBorder/> Offline reading is here</h2>
                                </div>
                                <div style={{display:"flex", justifyContent:"flex-end", alignItems:"center", width:"50%"}}>
                                    <Button variant="contained">Upgrade</Button>
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