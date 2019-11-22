import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    height: 'auto',
  },
  contentContainer: {
    flexDirection: 'column',
    paddingTop: 7,
    height: 'auto',
  },
});

export default styles;
