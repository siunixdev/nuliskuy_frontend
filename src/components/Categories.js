import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

// Other Component
import axios from "axios";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ScrollMenu from "react-horizontal-scrolling-menu";

// All items component
// Important! add unique key
// export const Menu = () =>
//   menus.map(item => {
//     return <MenuItem text={item.name} slug={item.slug} />;
//   });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<" });
const ArrowRight = Arrow({ text: ">" });

class Categories extends Component {
  state = {
    categories: [],
    categorySlug: ""
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/categories").then(res => {
      const categories = res.data;
      this.setState({ categories });
    });
  }

  render() {
    console.log(this.state.categorySlug);
    // Create menu from items
    // const menu = Menu(menus);

    // One item component
    const MenuItem = ({ text, slug }) => {
      return (
        <Link to={`/category/${slug}`} style={{ textDecoration: "none" }}>
          <Button
            style={{ color: "#3F3F3F", padding: "10px 30px" }}
            onClick={() => (
              this.props.categoryClick, this.setState({ categorySlug: slug })
            )}
          >
            {text}
          </Button>
        </Link>
      );
    };

    const menu = this.state.categories.map(item => {
      return <MenuItem text={item.name} slug={item.slug} />;
    });

    return (
      <div
        style={{
          backgroundColor: "#F1F1F1",
          color: "#3F3F3F",
          textAlign: "left"
        }}
      >
        <div style={{ width: "70%", margin: "auto" }}>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryName: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryClick: () =>
      dispatch({ type: "CATEGORY_CLICK", text: this.state.categorySlug })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
