import React from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const EmptyCart = ({text}) => (
  <View style={styles.container}>
    <Image
      source={{
        uri:
          'https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png',
      }}
      style={styles.image}
    />
    <Text style={styles.text}>{text}</Text>
  </View>
);

EmptyCart.defaultProps = {
  text: 'Your cart is empty',
};

EmptyCart.propTypes = {
  text: PropTypes.string,
};

export default EmptyCart;
