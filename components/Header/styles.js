import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 60,
    maxHeight: 60,
    paddingLeft: 8,
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  navigationContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 58,
    maxHeight: 58,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 25,
    color: '#121212',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default styles;
