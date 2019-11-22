import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../common/buttons/Back/component';
import CartButton from '../common/buttons/Cart';
import styles from './styles';

class Header extends PureComponent {
  render() {
    const {
      text,
      backButton,
      navigation,
      onBackButtonPress,
      cartButton,
      cartItems,
      onCartButtonPress,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.navigationContainer}>
          {backButton && (
            <BackButton navigation={navigation} onPress={onBackButtonPress} />
          )}
          <Text style={styles.text}>{text}</Text>
        </View>
        {cartButton && (
          <CartButton onPress={onCartButtonPress} amount={cartItems.length} />
        )}
      </View>
    );
  }
}

Header.defaultProps = {
  text: 'Header',
  backButton: false,
  cartButton: false,
  cartItems: [],
};

Header.propTypes = {
  text: PropTypes.string,
  backButton: PropTypes.bool,
  cartButton: PropTypes.bool,
  onBackButtonPress: PropTypes.func,
  onCartButtonPress: PropTypes.func,
  cartItems: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Header;
