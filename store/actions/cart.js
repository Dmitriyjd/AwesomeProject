import {createAction} from 'redux-actions';
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREASE_AMOUNT_OF_CURRENT_ITEM_IN_CART,
  DECREASE_AMOUNT_OF_CURRENT_ITEM_IN_CART,
} from '../../constants/actions/cart';

export const addItemToCart = createAction(ADD_ITEM_TO_CART);
export const removeItemFromCart = createAction(REMOVE_ITEM_FROM_CART);
export const increaseAmountOfCurrentItemInCart = createAction(
  INCREASE_AMOUNT_OF_CURRENT_ITEM_IN_CART,
);
export const decreaseAmountOfCurrentItemInCart = createAction(
  DECREASE_AMOUNT_OF_CURRENT_ITEM_IN_CART,
);
