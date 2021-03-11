import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 15,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    backgroundColor: '#CACACA',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileDetailContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  username: {
    color: '#fff',
    fontSize: 22,
  },
  coins: {
    color: 'lightgrey',
  },
  msgContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#919191',
    borderBottomColor: '#919191',
    paddingVertical: 10,
    marginVertical: 10,
  },
  msgTxt: {color: '#dddddd'},
  doMoreTxt: {
    color: '#dddddd',
    paddingVertical: 5,
  },
  makeMoneyTxt: {
    color: '#fff',
    paddingVertical: 5,
  },
});

export default styles;
