import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem, addMyItem } from "../ducks/itemsReducer";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0
    };
  }

  componentDidMount() {
    this.props.getItems();
  }

  addSubmitHandler = (name, price) => {
    this.props.addMyItem(name, price);
  };

  render() {
    console.log(this.props);
    console.log("state: ", this.state);
    let itemsList = this.props.items.map((elem, ind) => {
      return (
        <div key={elem.item_id}>
          <h3>{elem.name}</h3>
          <p>${elem.price}</p>
          <button onClick={() => this.props.deleteItem(elem.item_id)}>
            Delete
          </button>
          <input placeholder="change price" />
          <button>Update Price</button>
        </div>
      );
    });
    return (
      <div>
        {this.props.isLoading ? (
          <img src="https://editionsdelarose.com/wp-content/themes/edr/img/loading.gif" />
        ) : null}
        <h3>Add Item</h3>
        <input
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="name"
        />
        <input
          onChange={e => this.setState({ price: e.target.value })}
          placeholder="price"
        />
        <button
          onClick={() =>
            this.addSubmitHandler(this.state.name, this.state.price)
          }
        >
          Submit
        </button>
        {itemsList}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getItems, deleteItem, addMyItem }
)(Items);
