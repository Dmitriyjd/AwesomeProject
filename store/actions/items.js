import { createAction } from 'redux-actions'
import {
  GET_ITEMS_PENDING,
  GET_ITEM_PENDING,
} from '../../constants/actions/items'

export const getItemsRequest = createAction(GET_ITEMS_PENDING);
export const getItemDetailsRequest = createAction(GET_ITEM_PENDING);
