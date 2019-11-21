import React, {PureComponent} from 'react';
import {View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../Header';
import SmallTile from '../../common/tiles/SmallTile';
import EmptyCart from './EmptyCart';
import styles from './styles';

class Cart extends PureComponent {
  goBack = () => {
    this.props.navigation.goBack();
  };

  renderItemsArray = this.props.cartItems.map(
    ({id, image, name, price, amount}) => (
      <SmallTile
        key={id}
        id={id}
        image={image}
        title={name}
        subTitle={price}
        amount={amount}
      />
    ),
  );

  render() {
    return (
      <View style={styles.container}>
        <Header
          text="Cart"
          backButton={true}
          onBackButtonPress={this.goBack}
          onCartButtonPress={this.onChangeLocation}
        />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.props.cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            this.renderItemsArray
          )}
        </ScrollView>
      </View>
    );
  }
}

Cart.defaultProps = {
  cartItems: [],
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ),
};

export default Cart;
