import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../App.css";
import { Grid, Divider} from "@material-ui/core";
import {ThumbUp, Star} from "@material-ui/icons";

const ArticleByAuthor = ({url, title, content, author, category, clapsCount, postDate, minRead, backgroundArticleImage }) => (
    <>
        <div style={{display:"flex", flexDirection:"column"}}>
            <Grid container style={{display:"flex", marginBottom:"20px"}}>
                <Grid item>
                    <p style={{marginBottom:"0px"}}>{author}</p>
                    <small>{postDate} . {minRead} min read</small> 
                </Grid>
            </Grid>
            <div className="backgroud-by-author" style={{backgroundImage: `url(${backgroundArticleImage})`, borderRadius:"10px"}}>
            </div>
            <Grid container style={{display:"flex", flexDirection:"column"}}>
                <Grid item>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </Grid>
                <Grid item>
                    <div style={{display:"flex"}}>
                        <div style={{width:"50%"}}>
                            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                                <small>
                                    <ThumbUp style={{marginRight:"20px"}}/> {clapsCount} claps
                                </small>
                            </div>
                        </div>
                        <div style={{width:"50%", display:"flex", justifyContent:"flex-end"}}>asdsa</div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <Divider light style={{marginTop:"20px", marginBottom:"20px"}}></Divider>
    </>
    // <Link to={url} style={{ textDecoration: "none", color: "#3E3E3E" }}>
    //     <div style={{ display: "flex", marginBottom: "20px" }}>
    //         <div className="featured-backgroud-popular-list" style={{ marginRight: "20px", backgroundImage: `url(${backgroundArticleImage})` }}>
    //         </div>
    //         <div style={{ marginTop: "-20px" }}>
    //             <h4>{title}</h4>
    //             <small>{author} in {category}</small>
    //             <br />
    //             <small>{postDate} . {minRead} min read</small>
    //         </div>
    //     </div>
    // </Link>
)

export default ArticleByAuthor;
