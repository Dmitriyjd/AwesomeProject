import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ITEMS_PENDING,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
} from '../../constants/actions/items';

const getProductsSaga = function*() {
  console.log('1');
  const responseData = yield axios.get(
    'http://my-json-server.typicode.com/popovleonid/fake_catalog/products',
  );
  yield put({type: GET_ITEMS_SUCCESS, payload: responseData.data})
  console.log('responseData', responseData.data);
};

const productSaga = function*() {
  yield takeEvery(GET_ITEMS_PENDING, getProductsSaga);
}

export default productSaga;
