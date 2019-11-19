import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';

const BackButton = props => {
  return (
    <TouchableHighlight style={props.style}>
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

export default BackButton;
