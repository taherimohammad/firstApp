import { PureComponent } from "react";

class PureCom extends PureComponent {
  render() {
    console.log("Pure comp");
    return <div>pure comp - {this.props.name}</div>;
  }
}

export default PureCom;
