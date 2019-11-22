import CartPage from './component';
import {connect} from 'react-redux';
import {
  increaseAmountOfCurrentItemInCart,
  decreaseAmountOfCurrentItemInCart,
  removeItemFromCart,
} from '../../../store/actions/cart';

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseAmountOfCurrentItemInCart: id =>
      dispatch(increaseAmountOfCurrentItemInCart(id)),
    decreaseAmountOfCurrentItemInCart: id =>
      dispatch(decreaseAmountOfCurrentItemInCart(id)),
    removeItemFromCart: id => dispatch(removeItemFromCart(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
