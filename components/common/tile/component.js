import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Tile = ({id, img, name, price, size}) => {
  return (
    <>
      {size === 'large' && (
        <View style={styles.container}>
          <Image
            source={{uri: img}}
          />
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
      )}
      {size === 'medium' && (
        <View style={styles.container}>
          <Image sourse={{uri: img}} />
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
      )}
      {size === 'small' && (
        <View style={styles.container}>
          <Image sourse={{uri: img}} />
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
      )}
    </>
  );
};

Tile.defaultProps = {
  size: 'large',
};

Tile.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Tile;
