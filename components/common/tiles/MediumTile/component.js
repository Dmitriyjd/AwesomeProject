import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Tile = ({id, img, name, price, onPress}) => {
  return (
    <TouchableHighlight onPress={() => onPress(id)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: img}} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{price} $</Text>
      </View>
    </TouchableHighlight>
  );
};

Tile.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  onPress: PropTypes.func,
};

export default Tile;
