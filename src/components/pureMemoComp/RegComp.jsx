import React, { Component } from "react";

class RegCom extends Component {
  render() {
    console.log("Reg comp");
    return <div>Reg comp - {this.props.name}</div>;
  }
}

export default RegCom;
