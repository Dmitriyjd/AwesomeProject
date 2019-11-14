import {GET_ITEMS_SUCCESS} from '../../constants/actions/items';

const initialState = {products: []};
function products(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

export default products;
