import React from "react";
import { connect } from "react-redux";
class PizzaDetails extends React.Component {
  state = {
    newPizzaIngredient: ""
  };

  handleAddClick = id => {
    this.props.addIngredient(this.state.newPizzaIngredient, id);
  };

  render() {
    const pizza = this.props.pizza;
    if (!pizza) {
      return <p>Select a pizza to view details</p>;
    }
    return (
      <div>
        <h2>
          {pizza.name}
          <button onClick={this.props.unselectPizza}>close</button>
        </h2>
        <p>
          <em>{pizza.description}</em>
        </p>
        <ul>
          {pizza.ingredients.map((ingredient, i) => {
            return <li key={i}>{ingredient}</li>;
          })}
        </ul>
        <input
          value={this.state.newPizzaIngredient}
          onChange={e => {
            this.setState({ newPizzaIngredient: e.target.value });
          }}
        />
        <button onClick={() => this.handleAddClick(pizza.id)}>Add</button>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    // Note: this could be `undefined`, if no pizza selected
    pizza: reduxState.pizzaList.list.find(pizza => {
      return pizza.id === reduxState.selectedPizza;
    })
  };
}
function mapDispatchToProps(dispatch) {
  return {
    unselectPizza() {
      dispatch({
        type: "UNSELECT_PIZZA"
      });
    },
    addIngredient(ingredient, id) {
      dispatch({
        type: "ADD_INGREDIENT",
        payload: {
          ingredient: ingredient,
          pizzaId: id
        }
      });
    }
  };
}
const connectingHOC = connect(mapStateToProps, mapDispatchToProps);

const ConnectedSelectedPizza = connectingHOC(PizzaDetails);
export default connect(mapStateToProps, mapDispatchToProps)(PizzaDetails);
