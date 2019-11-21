import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../common/buttons/Back/component';
import CartButton from '../common/buttons/Cart';
import styles from './styles';

const Header = ({
  text,
  backButton,
  navigation,
  onBackButtonPress,
  cartButton,
  onCartButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        {backButton && (
          <BackButton navigation={navigation} onPress={onBackButtonPress} />
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
      {cartButton && <CartButton onPress={onCartButtonPress} amount={99999} />}
    </View>
  );
};

Header.defaultProps = {
  text: 'Header',
  backButton: false,
  cartButton: false,
};

Header.propTypes = {
  text: PropTypes.string,
  backButton: PropTypes.bool,
  cartButton: PropTypes.bool,
  onBackButtonPress: PropTypes.func,
  onCartButtonPress: PropTypes.func,
};

export default Header;
