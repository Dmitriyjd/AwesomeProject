import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SearchInput = ({onChange}) => (
  <View style={styles.container}>
    <TextInput
      onChangeText={text => onChange(text)}
      onstyle={styles.input}
      placeholder="Search an item..."
    />
  </View>
);

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
