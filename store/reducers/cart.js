import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREASE_AMOUNT_OF_CURRENT_ITEM_IN_CART,
  DECREASE_AMOUNT_OF_CURRENT_ITEM_IN_CART,
} from '../../constants/actions/cart';

const initialState = {
  items: [],
};
function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: action.payload,
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(),
      };
    default:
      return state;
  }
}

export default cart;
