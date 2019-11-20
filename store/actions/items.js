import {createAction} from 'redux-actions';
import {
  GET_ITEMS_PENDING,
  GET_ITEM_PENDING,
  UNSELECT_ITEM_DETAILS,
} from '../../constants/actions/items';

export const getItemsRequest = createAction(GET_ITEMS_PENDING);
export const getItemDetailsRequest = createAction(GET_ITEM_PENDING);
export const unselectItemDetails = createAction(UNSELECT_ITEM_DETAILS);
