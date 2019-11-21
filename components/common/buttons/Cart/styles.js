import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 30,
    minWidth: 70,
    maxWidth: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
  },
  image: {
    minWidth: 25,
    minHeight: 25,
    maxWidth: 25,
    maxHeight: 25,
  },
  amount: {
    position: 'absolute',
    minWidth: 50,
    minHeight: 30,
    maxWidth: 50,
    maxHeight: 30,
    color: '#a52a30',
    fontWeight: 'bold',
    left: 11,
    bottom: 12,
  },
});

export default styles;
