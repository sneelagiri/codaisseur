const initialState = {
  list: [
    {
      id: 1,
      name: "Pizza Margarita",
      description: "Minimalism is key!",
      ingredients: []
    },
    {
      id: 2,
      name: "Pizza Napoletana",
      description: "Like Margarita, but without the basil.",
      ingredients: []
    },
    {
      id: 3,
      name: "Pizza Bianca",
      description: "Did somebody say oil?",
      ingredients: []
    }
  ],
  selectedPizza: {}
};
export default function pizzaListReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            ingredients: []
          }
        ]
      };
    }
    case "ADD_INGREDIENT": {
      const updatedPizzaList = state.list.map(pizza => {
        if (pizza.id === action.payload.pizzaId) {
          return {
            ...pizza,
            ingredients: [...pizza.ingredients, action.payload.ingredient]
          };
        } else {
          return pizza;
        }
      });
      return {
        ...state,
        list: updatedPizzaList
      };
    }
    default: {
      return state;
    }
  }
}
