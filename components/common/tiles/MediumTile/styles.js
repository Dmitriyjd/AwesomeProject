import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 0.25,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 7,
    backgroundColor: '#ffffff',
    minHeight: 100,
    padding: 3,
    paddingBottom: 2,
    height: 350,
    maxHeight: height - 300,
    width: width / 2 - 8,
    marginBottom: 7,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#a3a3a5',
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
    height: 250,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  subTitle: {
    fontSize: 13,
    color: '#606367',
  },
});

export default styles;
