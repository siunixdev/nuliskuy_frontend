import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Category from "./pages/Category";
import ArticleDetail from "./pages/ArticleDetail";
import Comments from "./pages/Comments";
import New_Stories from "./pages/New_Stories";
import Stories from "./pages/Stories";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import ArticlesByAuthor from "./pages/ArticlesByAuthor";

// Other Component
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// component
import Header from "./components/Header";
import Categories from "./components/Categories";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Header */}
          <Header />
          <Categories />

          <Grid container>
            <Grid item lg md sm xs></Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Card
                style={{
                  marginTop: "50px",
                  width: "70%",
                  marginRight: "auto",
                  marginLeft: "auto"
                }}
              >
                <CardContent>
                  {/* Content */}
                  <div>
                    <Switch>
                      <Route path="/bookmark">
                        <Bookmark />
                      </Route>
                      <Route path="/new_stories">
                        <New_Stories />
                      </Route>
                      <Route path="/stories">
                        <Stories />
                      </Route>
                      <Route path="/profile">
                        <Profile />
                      </Route>
                      <Route path="/author_articles">
                        <ArticlesByAuthor />
                      </Route>
                      <Route path="/stats">
                        <Stats />
                      </Route>
                      <Route path="/comments">
                        <Comments />
                      </Route>
                      <Route path="/register" component={Register} />
                      <Route path="/login" component={Login} />
                      <Route path="/category/:category" component={Category} />
                      <Route path="/:article_slug" component={ArticleDetail} />
                      <Route path="/">
                        <Home />
                      </Route>
                    </Switch>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg md sm xs></Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
