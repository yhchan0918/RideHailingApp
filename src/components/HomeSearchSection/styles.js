import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#e7e7e7',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#434343',
  },
  clockIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationTxt: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
