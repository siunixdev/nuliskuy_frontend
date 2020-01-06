import React, { Component } from "react";

// Other Component

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import {
  Grid,
  Button,
  Divider,
  Typography,
  Avatar,
  TextField,
  FormControl,
  Card,
  CardContent
} from "@material-ui/core";
import { BookmarkBorder, ThumbUp, AvTimer } from "@material-ui/icons";
import CommentList from "../components/CommentList";

class New_Stories extends Component {
  render() {
    return (
      <>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ margin: "50px 150px 40px 150px", display: "flex" }}>
            <div style={{ width: "100%" }}>
              <h1>
                <AvTimer /> Story
              </h1>
              <form>
                <div style={{ marginBottom: "40px" }}>
                  <FormControl fullWidth>
                    <TextField id="standard-basic" label="Title" />
                  </FormControl>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-multiline-static"
                      label="Stories"
                      multiline
                      rows="10"
                      variant="outlined"
                    />
                  </FormControl>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Button
                    variant="outlined"
                    style={{ marginRight: "10px", textDecoration: "none" }}
                  >
                    Publish
                  </Button>
                  <Link to="/stories" style={{ textDecoration: "none" }}>
                    <Button color="secondary">Cancel</Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default New_Stories;
