import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BackButton = ({onPress}) => {
  return (
    <TouchableHighlight onPress={() => onPress()}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://image.shutterstock.com/image-vector/left-arrow-icon-vector-trendy-260nw-1236567772.jpg',
          }}
        />
      </View>
    </TouchableHighlight>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func,
};

export default BackButton;
