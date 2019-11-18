import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
/*import Icon from 'react-native-vector-icons/Entypo';*/
import styles from './styles';

const SearchInput = ({onChangeText}) => {
  return (
    <View style={styles.container}>
      {/*<Icon name="magnifying-glass" size={20} style={styles.icon} />*/}
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
