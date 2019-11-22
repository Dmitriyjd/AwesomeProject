import React from 'react';
import {TouchableHighlight, Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CartButton = ({amount, onPress}) => {
  return (
    <TouchableHighlight onPress={() => onPress()} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={{
            uri:
              'https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png',
          }}
          style={styles.image}
        />
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </TouchableHighlight>
  );
};

CartButton.defaultProps = {
  amount: 0,
};

CartButton.propTypes = {
  text: PropTypes.number,
  onPress: PropTypes.func,
};

export default CartButton;
