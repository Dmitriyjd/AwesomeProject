import DetailsPage from './component';
import {connect} from 'react-redux';
import {
  getItemDetailsRequest,
  unselectItemDetails,
} from '../../../store/actions/items';

const mapStateToProps = state => {
  return {
    productDetails: state.products.selectedProductDetails,
  };
};

const mapDispatchToProps = dispatch => ({
  getProductDetailsRequest: id => dispatch(getItemDetailsRequest(id)),
  unselectItemDetails: () => dispatch(unselectItemDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPage);
