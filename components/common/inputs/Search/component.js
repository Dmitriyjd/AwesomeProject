import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchInput = ({onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => onChangeText(text)}
        style={styles.input}
        placeholder="Search an item..."
      />
    </View>
  );
};

SearchInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

export default SearchInput;
