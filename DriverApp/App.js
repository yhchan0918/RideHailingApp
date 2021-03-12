import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeScreen from './src/screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
