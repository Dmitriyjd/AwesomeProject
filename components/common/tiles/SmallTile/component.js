import React from 'react';
import {View, Image, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SmallTile = ({image, title, subTitle, amount}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.cartContainer}>
        <Text>{amount}</Text>
        <View style={styles.changeAmountContainer}>
          <TouchableHighlight style={styles.incrementButton}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAOWm7A4s9KKxvvHgMX1dcChMwaeEiwhVdWf-HtDsrFn8SwcWzw&s',
              }}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.decrementButton}>
            <Image />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

SmallTile.defaultProps = {
  image: 'unknown',
  title: 'unknown',
  subTitle: 'unknown',
  amount: 0,
};

SmallTile.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default SmallTile;
