import React from 'react';
import {View, Image, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SmallTile = ({
  id,
  img,
  title,
  subTitle,
  amount,
  onIncreaseAmount,
  onDecreaseAmount,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: img}} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
          <View style={styles.changeAmountButtonsGroup}>
            <TouchableHighlight
              onPress={() => onIncreaseAmount(id)}
              style={styles.changeAmountButton}>
              <Image
                style={styles.changeAmountButtonImage}
                source={{
                  uri:
                    'https://www.inventicons.com/uploads/iconset/1174/wm/512/Arrow-expand-expand-less-expandless-top-upsvg-72.png',
                }}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => onDecreaseAmount(id, amount)}
              style={styles.changeAmountButton}>
              <Image
                style={styles.changeAmountButtonImage}
                source={{
                  uri:
                    'https://cdn.iconscout.com/icon/premium/png-256-thumb/bottom-arrow-2-840967.png',
                }}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

SmallTile.defaultProps = {
  id: 0,
  img: 'unknown',
  title: 'unknown',
  subTitle: 'unknown',
  amount: 0,
};

SmallTile.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onIncreaseAmount: PropTypes.func.isRequired,
  onDecreaseAmount: PropTypes.func.isRequired,
};

export default SmallTile;
