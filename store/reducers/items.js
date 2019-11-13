import {
  GET_ITEMS_SUCCESS
} from '../../constants/actions/items';

const initialState = { items: []};
function items (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default: return state;
  }
}

export default items
