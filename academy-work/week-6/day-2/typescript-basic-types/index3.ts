interface Item {
  title: string;
  quantity: number;
  price: number;
}
interface ShoppingCart {
  items: Item[];
  getTotalPrice: () => number;
  empty: () => void;
  add: (title: string, price: number) => void;
}

// concrete implementation
/* const myItem: Item = {
  title: "Macaroni & Cheese",
  quantity: 2,
  price: 3.75
};

const myShoppingCart = {
  items: [myItem],
  getTotalPrice() {
    return myShoppingCart.items.map(item => {
      return item.price * item.quantity;
    });
  },
  empty() {
    myShoppingCart.items = [];
    return myShoppingCart.items;
  },
  add(title: string, price: number) {
    return myShoppingCart.items.push({ title, quantity: 1, price });
  }
};
myShoppingCart.add("Pizza", 4);
console.log(myShoppingCart.items);
console.log(myShoppingCart.getTotalPrice());
console.log(myShoppingCart.empty());
console.log(myShoppingCart.items);
 */

//weird implementation
const myItem: Item = {
  title: "Macaroni & Cheese",
  quantity: 0,
  price: 0
};

const myShoppingCart = {
  items: [myItem],
  getTotalPrice() {
    return 42;
  },
  empty() {
    console.log("doesn't check for anything");
    return null;
  },
  add(title: string, price: number) {
    console.log("doesn't check for anything specific to be returned");
    return [title, price];
  }
};

myShoppingCart.add("Pizza", 4);
console.log(myShoppingCart.items);
console.log(myShoppingCart.getTotalPrice());
console.log(myShoppingCart.empty());
console.log(myShoppingCart.items);
