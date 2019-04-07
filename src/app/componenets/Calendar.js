import React from "react";
import { connect } from "react-redux";

import Slot from "./Slot";
import { isPointInRectangle } from "../utils";

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "String",
      startEndCoordinates: []
    };
  }

  buildRows = numberOfRows => {
    const rows = [];

    for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
      rows.push(
        <div className={"row"} key={rowNumber}>
          {this.fillRowWithCells(numberOfRows, rowNumber)}
        </div>
      );
    }

    return rows;
  };

  fillRowWithCells = (numberOfColumns, rowNumber) => {
    const row = [];

    for (let columnNumber = 0; columnNumber < numberOfColumns; columnNumber++) {
      const coordinate = { x: rowNumber, y: columnNumber };
      row.push(
        <div key={`${rowNumber}, ${columnNumber}`}>
          <Slot
            coordinate={coordinate}
            getCoordinate={this.getCellCoordinate}
            bgColor={this.determineColor(coordinate)}
          />
        </div>
      );
    }

    return row;
  };

  determineColor = coordinate => {
    let color = "white";
    const coords = this.state.startEndCoordinates;
    if (coords.length >= 2) {
      color = isPointInRectangle(
        coordinate.x,
        coordinate.y,
        coords[0].x,
        coords[0].y,
        coords[1].x,
        coords[1].y
      )
        ? "green"
        : "white";
    }
    return color;
  };

  getCellCoordinate = coordinate => () => {
    console.log(coordinate);
    let tempCoords = this.state.startEndCoordinates;
    tempCoords.push(coordinate);
    this.setState({ startEndCoordinates: tempCoords });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.startEndCoordinates.length > 3) {
      console.log("componentDidUpdate");
      const newStartCoordinates = this.state.startEndCoordinates.slice(2, 5);
      this.setState({ startEndCoordinates: newStartCoordinates });
    }
  }

  render() {
    console.log(this.state.startEndCoordinates);
    return <div>{this.buildRows(10)}</div>;
  }
}

const mapDispatchToProps = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
