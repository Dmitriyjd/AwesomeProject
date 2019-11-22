import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ITEMS_PENDING,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  GET_ITEM_PENDING,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED,
} from '../../constants/actions/items';

const getProductsSaga = function*() {
  try {
    const responseData = yield axios.get(
      'http://my-json-server.typicode.com/popovleonid/fake_catalog/products',
    );
    yield put({type: GET_ITEMS_SUCCESS, payload: responseData.data});
  } catch (e) {
    yield put({type: GET_ITEMS_FAILED});
  }
};

const getProductDetailsSaga = function*(action) {
  try {
    const responseData = yield axios.get(
      `http://my-json-server.typicode.com/popovleonid/fake_catalog/products/${
        action.payload
      }`,
    );
    yield put({type: GET_ITEM_SUCCESS, payload: responseData.data});
  } catch (e) {
    yield put({type: GET_ITEM_FAILED});
  }
};

const productSaga = function*() {
  yield takeEvery(GET_ITEM_PENDING, getProductDetailsSaga);
  yield takeEvery(GET_ITEMS_PENDING, getProductsSaga);
};

export default productSaga;
