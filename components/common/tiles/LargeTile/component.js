import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Tile = ({id, img, name, price, navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: img}} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{price} $</Text>
      </View>
    </View>
  );
};

Tile.defaultProps = {
  name: 'unknown',
  price: 'unknown',
};

Tile.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default Tile;
