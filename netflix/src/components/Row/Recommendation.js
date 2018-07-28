import React, { Component } from "react";

class Recommendation extends Component {
  addItem = () => {
    this.props.addItem(this.props.data.id);
  };

  render() {
    return (
      <li>
        <div className="tooltip">
          <img src={this.props.data.img} alt="" />
          <p>{this.props.data.title}</p>
          <div className="tooltiptext">
            <button className="add" onClick={this.addItem}>
              Add
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Recommendation;
