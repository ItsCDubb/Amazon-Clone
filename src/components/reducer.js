export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
basket.reduce((amount, item) => item.price + amount, 0)
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      // We cloned the cart
      let newBasket = [...state.basket];
      // We check to see if product exists,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // Item exists in the cart, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Unable remove product (id: ${action.id}) as it is not in the cart"
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
