import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../ducks/itemsReducer";

class Items extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    console.log(this.props);
    let itemsList = this.props.items.map((elem, ind) => {
      return (
        <div key={ind}>
          <h3>{elem.name}</h3>
          <p>${elem.price}</p>
        </div>
      );
    });
    return (
      <div>
        {this.props.isLoading ? (
          <img src="https://editionsdelarose.com/wp-content/themes/edr/img/loading.gif" />
        ) : null}
        {itemsList}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getItems }
)(Items);
