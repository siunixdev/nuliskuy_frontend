import React, { Component } from "react";
import "../App.css";

// Other Component
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/sign/",
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        alert("Login is success");
        window.location.href = "http://localhost:3000/";
      })
      .catch(err => {
        alert("Failed");
      });
  };

  render() {
    return (
      <>
        <Grid container>
          <Grid item lg md sm xs>
            <div className="loginLeftBackground"></div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div style={{ width: "70%", margin: "auto" }}>
              <div
                style={{
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  textAlign: "center",
                  alignContent: "center"
                }}
              >
                <h2>Welcome Back.</h2>
                <div>
                  <p style={{ fontSize: "16px" }}>
                    Sign in to get personalized story recommendations, follow
                    authors and topics you love, and interact with stories.
                  </p>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  textAlign: "center",
                  alignContent: "center",
                  marginTop: "50px",
                  marginBottom: "30px"
                }}
              >
                <form noValidate autoComplete="off">
                  <TextField
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    id="standard-basic"
                    label="Your Email"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                </form>
                <Button
                  //   type="submit"
                  onClick={this.login}
                  variant="outlined"
                  size="large"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Continue
                </Button>
                <div>
                  <p style={{ fontSize: "16px" }}>
                    Don't have an account ?{" "}
                    <Link to="/register">Register now!</Link>
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px" }}>
                    To make Medium work, we log user data and share it with
                    service providers. Click “Sign Up” above to accept Medium’s
                    Terms of Service & Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg md sm xs>
            <div className="loginRightBackground"></div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Login;
