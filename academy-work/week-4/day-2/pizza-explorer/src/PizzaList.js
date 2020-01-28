import React from "react";
import { connect } from "react-redux";

class PizzaList extends React.Component {
  state = {
    newPizzaName: ""
  };
  handleAddClick = () => {
    this.props.addPizza(this.state.newPizzaName);
  };
  handleSelectClick = pizza => {
    console.log(pizza);
    this.props.selectPizza(pizza);
  };

  render() {
    return (
      <div>
        <h1>Pizza Explorer</h1>
        <ul>
          {this.props.pizzas.map(pizza => {
            return (
              <li
                key={pizza.id}
                onClick={() => {
                  this.handleSelectClick(pizza);
                }}
              >
                {pizza.name}
              </li>
            );
          })}
        </ul>
        <p>
          {`New pizza:   `}
          <input
            value={this.state.newPizzaName}
            onChange={e => {
              this.setState({ newPizzaName: e.target.value });
            }}
          />
          <button onClick={this.handleAddClick}>Add</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    pizzas: reduxState.pizzaList.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPizza(pizzaName) {
      dispatch({
        type: "ADD_PIZZA",
        payload: {
          id: Math.floor(Math.random() * 10000),
          name: pizzaName
        }
      });
    },
    selectPizza(pizza) {
      dispatch({
        type: "SELECT_PIZZA",
        payload: pizza.id
      });
    }
  };
}

const connectingHOC = connect(mapStateToProps, mapDispatchToProps);

const ConnectedPizzaList = connectingHOC(PizzaList);
export default ConnectedPizzaList;
