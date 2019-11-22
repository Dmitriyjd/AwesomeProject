import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 40,
    maxHeight: 50,
    width: width - 20,
    backgroundColor: 'rgba(204,204,204,0.24)',
    borderWidth: 0.25,
    borderRadius: 7,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#a3a3a5',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 8,
  },
  image: {
    minHeight: 30,
    maxHeight: 30,
    minWidth: 30,
    maxWidth: 30,
    marginRight: 20,
  },
  text: {
    fontSize: 25,
    width: width - 100,
    fontWeight: 'bold',
  },
});

export default styles;
