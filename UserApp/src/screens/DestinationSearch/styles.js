import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10,
  },
  input: {
    backgroundColor: '#eee',
    marginVertical: 5,
    padding: 10,
    marginLeft: 20,
  },
  fromContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  listView: {
    position: 'absolute',
    top: 103,
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  toContainer: {
    position: 'absolute',
    top: 55,
    left: 10,
    right: 10,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 28,
    left: 16.74,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});

export default styles;
