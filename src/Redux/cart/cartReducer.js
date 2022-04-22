import { ADD_TO_CART, DELETE_ITEM } from "./ActionType";

const productCart = [];

export const cartReducer = (state = productCart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      /**
       * @description at here finding product that already present in the cart.
       */
      const present = state.find((c) => c.id === product.id);

      /**
       * @description if the product is present then return the product state along
       * with the data that we want to use in the cart page for configuring + and - quantity and tracking the
       * data like quantity,price and total amount
       */
      if (present) {
        return state.map((c) =>
          c.id === product.id
            ? {
                ...c,
                quantity: c.quantity + 1,
                totalAmount: (c.quantity + 1) * c.price,
              }
            : c
        );
      } else {
        const product = action.payload;

        const res = [
          ...state,
          { ...product, quantity: 1, totalAmount: product.price },
        ];

        console.log(res);
        return res;
      }

    case DELETE_ITEM:
      const present1 = state.find((c) => c.id === product.id);
      if (present1.quantity === 1) {
        return state.filter((c) => c.id !== present1.id);
      } else {
        return state.map((c) =>
          c.id === product.id
            ? {
                ...c,
                quantity: c.quantity - 1,
                totalAmount: (c.quantity - 1) * c.price,
              }
            : c
        );
      }

    default:
      return state;
  }
};
