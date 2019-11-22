import Home from './component';
import {connect} from 'react-redux';
import {getItemsRequest} from '../../../store/actions/items';

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => ({
  getProductsListRequest: () => dispatch(getItemsRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
