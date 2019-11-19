import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 3},
    shadowColor: '#a3a3a5',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#a3a3a5',
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 4,
    color: '#a3a3a5',
  },
});

export default styles;
