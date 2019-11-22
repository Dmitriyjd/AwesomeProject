import {
  GET_ITEMS_SUCCESS,
  GET_ITEM_SUCCESS,
  UNSELECT_ITEM_DETAILS,
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
    case UNSELECT_ITEM_DETAILS:
      return {
        ...state,
        selectedProductDetails: {},
      };
    default:
      return state;
  }
}

export default products;
