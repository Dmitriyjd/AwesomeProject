import {
  GET_ITEMS_SUCCESS,
  GET_ITEM_SUCCESS,
} from '../../constants/actions/items';

const initialState = {products: []};
function products(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        selectedProductDetails: action.payload,
      };
    default:
      return state;
  }
}

export default products;
