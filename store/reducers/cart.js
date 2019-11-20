import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../../constants/actions/cart';

const initialState = {};
function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export default cart;
