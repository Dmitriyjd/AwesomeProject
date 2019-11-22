import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 7,
    alignItems: 'center',
    minHeight: 100,
    maxHeight: 100,
    borderWidth: 0.25,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#a3a3a5',
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  image: {
    minHeight: 70,
    maxHeight: 70,
    minWidth: 70,
    maxWidth: 70,
    borderWidth: 0.25,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    minHeight: 98,
    maxHeight: 98,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 1,
    minWidth: 150,
    maxWidth: 190,
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    color: '#606367',
  },
  amountContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 20,
    marginRight: 18,
  },
  changeAmountButtonsGroup: {
    height: 70,
    width: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changeAmountButton: {
    height: 30,
    width: 30,
  },
  changeAmountButtonImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
});

export default styles;
