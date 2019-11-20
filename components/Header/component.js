import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../common/buttons/Back/component';
import styles from './styles';

const Header = ({text, backButton, navigation, onBackButtonPress}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <BackButton navigation={navigation} onPress={onBackButtonPress} />
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

Header.defaultProps = {
  text: 'Header',
  backButton: false,
};

Header.propTypes = {
  text: PropTypes.string,
  backButton: PropTypes.bool,
  onBackButtonPress: PropTypes.func,
};

export default Header;
