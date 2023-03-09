import PureCom from "./PureComp";
import RegCom from "./RegComp";
import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentCom extends Component {
  state = {
    name: "mohammad",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "mohammad" });
    }, 1000);
  }
  render() {
    console.log("Parent comp---------------");
    return (
      <div>
        parent component
        <RegCom name={this.state.name} />
        {/* <PureCom name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentCom;
