import React from "react";

class Slot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        onMouseDown={this.props.getCoordinate(this.props.coordinate)}
        onMouseUp={this.props.getCoordinate(this.props.coordinate)}
        className={"column"}
        style={{
          backgroundColor: this.props.bgColor
        }}
      />
    );
  }
}

export default Slot;
