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

  onIncreaseItemsAmount = id => {
    this.props.increaseAmountOfCurrentItemInCart(id);
  };

  onDecreaseItemsAmount = (id, amount) => {
    if (amount < 2) {
      this.props.removeItemFromCart(id);
    } else {
      this.props.decreaseAmountOfCurrentItemInCart(id);
    }
  };

  renderItemsArray = () =>
    this.props.cartItems.map(({id, img, name, price, amount}) => {
      return (
        <SmallTile
          key={id + amount}
          id={id}
          img={img}
          title={name}
          subTitle={price}
          amount={amount}
          onIncreaseAmount={this.onIncreaseItemsAmount}
          onDecreaseAmount={this.onDecreaseItemsAmount}
        />
      );
    });

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
            this.renderItemsArray()
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
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ),
  navigation: PropTypes.shape({}).isRequired,
  increaseAmountOfCurrentItemInCart: PropTypes.func,
  decreaseAmountOfCurrentItemInCart: PropTypes.func,
  removeItemFromCart: PropTypes.func,
};

export default Cart;
