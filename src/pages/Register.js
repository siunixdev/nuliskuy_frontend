import React, { Component } from "react";

// Other Component
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import * as myConst from "../MyConstant";

class Register extends Component {
  // "fullname"  : "Abdllah F",
  // "username"  : "siunix",
  // "email"     : "siunixdev@gmail.com",
  // "password"  : "siunix"

  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      username: "",
      password: ""
    };
  }

  onChangeFullname = event => {
    this.setState({ fullname: event.target.value });
  };
  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  register = () => {
    axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/signup/",
      data: {
        fullname: this.state.fullname,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        is_active: true,
        createdAt: new Date("d F Y"),
        updatedAt: new Date("d F Y")
      }
    })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        alert("register is success");
        window.location.href = "http://localhost:3000/";
      })
      .catch(err => {
        alert("Failed");
      });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item lg md sm xs>
            <div className="registerLeftBackground"></div>
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
                <h2>Join {myConst.APP_NAME}.</h2>
                <div>
                  <p style={{ fontSize: "16px" }}>
                    Create an account to receive great stories in your inbox,
                    personalize your homepage, and follow authors and topics
                    that you love.
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
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.onChangeFullname}
                    id="standard-basic"
                    label="Your Fullname"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
                  <TextField
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    id="standard-basic"
                    label="Your Username"
                    fullWidth
                    style={{ marginBottom: "30px" }}
                  />
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
                  onClick={this.register}
                  variant="outlined"
                  size="large"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Register Now
                </Button>
                <div>
                  <p style={{ fontSize: "16px" }}>
                    Already have an account ? <Link to="/login">Sign in</Link>
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
            <div className="registerRightBackground"></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Register;
