import DetailsPage from './component';
import {connect} from 'react-redux';
import {
  getItemDetailsRequest,
  unselectItemDetails,
} from '../../../store/actions/items';
import {addItemToCart} from '../../../store/actions/cart';

const mapStateToProps = state => {
  return {
    productDetails: state.products.selectedProductDetails,
  };
};

const mapDispatchToProps = dispatch => ({
  getProductDetailsRequest: id => dispatch(getItemDetailsRequest(id)),
  unselectItemDetails: () => dispatch(unselectItemDetails()),
  addItemToCart: item => dispatch(addItemToCart(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPage);
