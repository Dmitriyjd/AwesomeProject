import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import Header from './component';

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header),
);
