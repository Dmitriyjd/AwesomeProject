import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    minHeight: 40,
    borderWidth: 0.25,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#a3a3a5',
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  image: {
    minHeight: 20,
    maxHeight: 20,
    minWidth: 20,
    maxWidth: 20,
    borderRadius: 20 / 2,
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 1,
    minWidth: 40,
    flexDirection: 'column',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  subTitle: {
    fontSize: 8,
    fontWeight: '300',
    color: '#606367',
  },
  secondSubTitle: {
    fontSize: 10,
    fontWeight: 'normal',
    color: '#606367',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeAmountContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 30,
  },
  incrementButton: {
    minWidth: 10,
    minHeight: 10,
    maxWidth: 10,
    maxHeight: 10,
    marginBottom: 10,
  },
  decrementButton: {
    minWidth: 10,
    minHeight: 10,
    maxWidth: 10,
    maxHeight: 10,
  },
});

export default styles;
