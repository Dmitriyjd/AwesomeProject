import DetailsPage from './component';
import {connect} from 'react-redux';
import {getItemDetailsRequest} from '../../../store/actions/items';

const mapStateToProps = state => {
  console.log(state.products);
  return {
    productDetails: state.products.selectedProductDetails,
  };
};

const mapDispatchToProps = dispatch => ({
  getProductDetailsRequest: id => dispatch(getItemDetailsRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPage);
