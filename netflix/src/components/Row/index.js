import React, { Component } from "react";
import { connect } from "react-redux";

import MyList from "./MyList";
import Recommendation from "./Recommendation";

class Row extends Component {
  removeItem = id => {
    this.props.removeItem(id);
  };

  addItem = id => {
    this.props.addItem(id);
  };

  render() {
    return (
      <div className="row">
        <h3>My List</h3>
        <ul className="row-content">
          {this.props.mylist.map(item => (
            <MyList data={item} removeItem={this.removeItem} />
          ))}
        </ul>
        <h3>Recommendations</h3>
        <ul className="row-content">
          {this.props.recommendations.map(item => (
            <Recommendation data={item} addItem={this.addItem} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    recommendations: state.recommendations
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addItem: id => dispatch({ type: "ADD_ITEM", id }),
    removeItem: id => dispatch({ type: "REMOVE_ITEM", id })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Row);
