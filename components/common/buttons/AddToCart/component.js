import React from 'react';
import {TouchableHighlight, View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const AddToCartButton = ({text}) => {
  console.log('Text: ', text);
  return (
    <TouchableHighlight style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri:
              'https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png',
          }}
          style={styles.image}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

AddToCartButton.defaultProps = {
  text: 'Add to cart',
};

AddToCartButton.propTypes = {
  text: PropTypes.string,
};

export default AddToCartButton;
