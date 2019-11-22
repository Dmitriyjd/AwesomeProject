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
        items: state.items.find(item => item.id === action.payload.id)
          ? state.items.map(item =>
              item.id === action.payload.id
                ? {
                    ...item,
                    amount: item.amount + 1,
                  }
                : {
                    ...item,
                  },
            )
          : state.items.concat({...action.payload, amount: 1}),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case INCREASE_AMOUNT_OF_CURRENT_ITEM_IN_CART:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : {
                ...item,
              },
        ),
      };
    case DECREASE_AMOUNT_OF_CURRENT_ITEM_IN_CART:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? {
                ...item,
                amount: item.amount - 1,
              }
            : {
                ...item,
              },
        ),
      };
    default:
      return state;
  }
}

export default cart;
