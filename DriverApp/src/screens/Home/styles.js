import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: '100%',
  },
  topContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  balanceBtn: {
    backgroundColor: '#1c1c1c',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  balanceTxt: {fontSize: 24, fontWeight: 'bold', color: '#fff'},
  middleContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  bottomContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  bottomTxt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  roundBtn: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
  },
  goBtn: {
    backgroundColor: '#1495ff',
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  goTxt: {
    fontSize: 25,
    color: '#fff',
  },
});

export default styles;
