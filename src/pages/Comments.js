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
import {ThumbUp, ChatBubble} from "@material-ui/icons";
import CommentList from "../components/CommentList";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData : {
                name : "Jhon Tucker",
                data : {
                    title           : "Next Js Vs React App",
                    totalLike       : 45,
                    totalComment    : 132,
                    authorImage     : "https://cdn-images-1.medium.com/fit/c/36/36/0*4fPjRdHaby9tza_3",
                }
            },
            commentDataList : [
                {
                    author  : "Rafa Radomsky",
                    data    :
                    {
                        authorImage: "https://cdn-images-1.medium.com/fit/c/36/36/0*ZpJsVGIdDPFkH1Qp.",
                        postDate : "23 Oct, 2019",
                        comment : "Haos Bojke Can we make complex queries to the firebase database using GraphQL? It’s a performant solution?",
                        totalClaps : 6,
                        totalResponse : 2,
                    }
                },
                {
                    author  : "James Hegedus",
                    data    :
                    {
                        authorImage: "https://cdn-images-1.medium.com/fit/c/36/36/1*MHQno3E6zoWY7tgJWTIptg.jpeg",
                        postDate : "36 Oct, 2019",
                        comment : "If you write the resolver to perform a complex query to the DB that would be pretty quick since it would happen in the same datacenter where the DB is located.",
                        totalClaps : 0,
                        totalResponse : 0,
                    }
                }
            ]
        }
    }

    render () {
        return (
            <>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div style={{height:"200px", backgroundColor:"#EEEEEE"}}>
                        <div style={{margin:"50px 150px 40px 150px", display:"flex", flexDirection:"column"}}>
                            <b>Showing Response for : </b>
                            <Grid container spacing={2} style={{ marginTop: "10px", marginBottom: "10px" }}>
                                <Grid item lg={7}>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                                        <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
                                            {this.state.userData.data.title}
                                        </h3>
                                        <small style={{ marginBottom: "0px", marginTop: "0px" }}>{this.state.userData.name}</small>
                                    </div>
                                </Grid>
                                <Grid item lg={5}>
                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems:"center"}}>
                                        <div style={{ marginLeft: "40px" }}>
                                            <ThumbUp fontSize="small" style={{marginRight:"5px"}}/> <small>{this.state.userData.data.totalLike} K</small>
                                        </div>
                                        <div style={{ marginLeft: "40px" }}>
                                            <ChatBubble fontSize="small" style={{marginRight:"5px"}}/> <small>{this.state.userData.data.totalComment}</small>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>                        
                    </div>
                    <div style={{margin:"50px 150px 40px 150px", display:"flex"}}>
                        <div style={{marginRight:"20px"}}>
                            <Avatar src={this.state.userData.data.authorImage} />
                        </div>
                        <div style={{width:"100%"}}>
                            <form>
                                <div style={{marginBottom:"5px"}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Response"
                                            multiline
                                            rows="3"
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </div>
                                <div style={{marginBottom:"10px"}}>
                                    <Button variant="outlined">Publish</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={{margin:"0px 150px 20px 150px"}}>
                       <small style={{marginBottom:"40px"}}>Convasation with <span style={{color:"#33C46A"}}>{this.state.userData.name}</span></small>
                       <Divider light></Divider>
                    </div>
                    {
                        this.state.commentDataList.map(commentData => (
                            <CommentList
                                author={commentData.author}
                                authorImage={commentData.data.authorImage}
                                postDate={commentData.data.postDate}
                                comment={commentData.data.comment}
                                totalClaps={commentData.data.totalClaps}
                                totalResponse={commentData.data.totalResponse}
                            />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default Comments;