import React, {PureComponent} from 'react';
import {View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../Header';
import LargeTile from '../../common/tiles/LargeTile';
import AddToCartButton from '../../common/buttons/AddToCart';
import styles from './styles';

class DetailsPage extends PureComponent {
  componentDidMount() {
    this.props.getProductDetailsRequest(
      this.props.navigation.state.params.itemId,
    );
  }

  goBack = () => {
    this.props.unselectItemDetails();
    this.props.navigation.goBack();
  };

  render() {
    const {name, img, price} = this.props.productDetails;
    return (
      <View style={styles.container}>
        <Header
          text="Product details"
          backButton={true}
          onBackButtonPress={this.goBack}
        />
        <ScrollView contentContainerStyle={styles.content}>
          <LargeTile name={name} img={img} price={price} />
          <AddToCartButton text="Add to cart" />
        </ScrollView>
      </View>
    );
  }
}

DetailsPage.defaultProps = {
  productDetails: {
    name: 'unknown',
    img: 'unknown',
    price: 'unknown',
  },
};

DetailsPage.propTypes = {
  productDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
  getProductDetailsRequest: PropTypes.func.isRequired,
  unselectItemDetails: PropTypes.func,
};

export default DetailsPage;
