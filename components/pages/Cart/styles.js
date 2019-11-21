import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    minHeight: height,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5,
  },
});

export default styles;
