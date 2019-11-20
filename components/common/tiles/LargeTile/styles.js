import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 0.25,
    borderRadius: 7,
    backgroundColor: '#ffffff',
    minHeight: 100,
    padding: 3,
    paddingBottom: 10,
    height: 'auto',
    width: width - 20,
    marginBottom: 10,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#a3a3a5',
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  image: {
    alignSelf: 'stretch',
    height: 380,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  contentContainer: {
    width: width - 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    minHeight: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    color: '#ffffff',
    backgroundColor: '#75787c',
    padding: 5,
  },
});

export default styles;
