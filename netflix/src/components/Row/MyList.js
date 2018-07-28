import React, { Component } from "react";

class MyList extends Component {
  removeItem = () => {
    this.props.removeItem(this.props.data.id);
  };

  render() {
    return (
      <li>
        <div className="tooltip">
          <img src={this.props.data.img} alt="" />

          <p>{this.props.data.title}</p>
          <div className="tooltiptext">
            <button className="remove" onClick={this.removeItem}>
              Remove
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default MyList;
