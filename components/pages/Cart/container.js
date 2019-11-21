import CartPage from './component';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    cart: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
